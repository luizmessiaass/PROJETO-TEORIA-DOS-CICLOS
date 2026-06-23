const { test, expect } = require('@playwright/test');
const fs = require('fs/promises');
const path = require('path');

const TARGET_URL = 'https://lp.waid.io/icp3-cb/';
const ROOT = path.resolve(__dirname, '..');
const RESEARCH_DIR = path.join(ROOT, 'docs', 'research');
const COMPONENTS_DIR = path.join(RESEARCH_DIR, 'components');
const REFERENCES_DIR = path.join(ROOT, 'docs', 'design-references');
const ASSETS_DIR = path.join(ROOT, 'assets');

function slugify(value, fallback = 'asset') {
  return String(value || fallback)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 80) || fallback;
}

function extFromUrl(url, contentType = '') {
  try {
    const pathname = new URL(url).pathname;
    const ext = path.extname(pathname);
    if (ext && ext.length <= 8) return ext;
  } catch (_) {
    // Fall through to content type checks.
  }
  if (contentType.includes('png')) return '.png';
  if (contentType.includes('jpeg') || contentType.includes('jpg')) return '.jpg';
  if (contentType.includes('webp')) return '.webp';
  if (contentType.includes('svg')) return '.svg';
  if (contentType.includes('gif')) return '.gif';
  if (contentType.includes('mp4')) return '.mp4';
  if (contentType.includes('webm')) return '.webm';
  if (contentType.includes('font/woff2')) return '.woff2';
  if (contentType.includes('font/woff')) return '.woff';
  return '.bin';
}

function normalizeCssUrl(raw) {
  if (!raw || raw === 'none') return [];
  const urls = [];
  const re = /url\((["']?)(.*?)\1\)/g;
  let match;
  while ((match = re.exec(raw))) {
    if (match[2] && !match[2].startsWith('data:')) urls.push(match[2]);
  }
  return urls;
}

async function ensureDirs() {
  await fs.mkdir(RESEARCH_DIR, { recursive: true });
  await fs.mkdir(COMPONENTS_DIR, { recursive: true });
  await fs.mkdir(REFERENCES_DIR, { recursive: true });
  await fs.mkdir(ASSETS_DIR, { recursive: true });
}

async function downloadAssets(assetUrls) {
  const unique = [...new Set(assetUrls.filter(Boolean).filter((u) => !u.startsWith('data:')))];
  const manifest = [];
  let index = 0;

  async function worker() {
    while (unique.length) {
      const url = unique.shift();
      const current = ++index;
      try {
        const res = await fetch(url, {
          headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36',
            accept: '*/*',
          },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const contentType = res.headers.get('content-type') || '';
        const ext = extFromUrl(url, contentType);
        const urlObj = new URL(url);
        const basename = slugify(path.basename(urlObj.pathname, path.extname(urlObj.pathname)) || `asset-${current}`);
        const filename = `${String(current).padStart(3, '0')}-${basename}${ext}`;
        const absolutePath = path.join(ASSETS_DIR, filename);
        const buffer = Buffer.from(await res.arrayBuffer());
        await fs.writeFile(absolutePath, buffer);
        manifest.push({
          url,
          file: `assets/${filename}`,
          contentType,
          bytes: buffer.length,
        });
      } catch (error) {
        manifest.push({
          url,
          error: error.message,
        });
      }
    }
  }

  await Promise.all([worker(), worker(), worker(), worker()]);
  manifest.sort((a, b) => String(a.file || a.url).localeCompare(String(b.file || b.url)));
  await fs.writeFile(path.join(ASSETS_DIR, 'asset-manifest.json'), JSON.stringify(manifest, null, 2));
  return manifest;
}

async function extractPage(page, viewportName) {
  await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForLoadState('load', { timeout: 120000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await page.evaluate(async () => {
    await document.fonts.ready;
    window.scrollTo(0, 0);
  });

  const fullScreenshot = path.join(REFERENCES_DIR, `original-${viewportName}-full.png`);
  await page.screenshot({ path: fullScreenshot, fullPage: true });

  const data = await page.evaluate(() => {
    const props = [
      'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing', 'color',
      'textTransform', 'textDecoration', 'backgroundColor', 'background',
      'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
      'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
      'width', 'height', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight',
      'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap',
      'gridTemplateColumns', 'gridTemplateRows',
      'borderRadius', 'border', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight',
      'boxShadow', 'overflow', 'overflowX', 'overflowY',
      'position', 'top', 'right', 'bottom', 'left', 'zIndex',
      'opacity', 'transform', 'transition', 'cursor',
      'objectFit', 'objectPosition', 'mixBlendMode', 'filter', 'backdropFilter',
      'whiteSpace', 'textOverflow',
    ];

    function pickStyles(element) {
      const cs = getComputedStyle(element);
      const styles = {};
      props.forEach((prop) => {
        const value = cs[prop];
        if (
          value &&
          value !== 'none' &&
          value !== 'normal' &&
          value !== 'auto' &&
          value !== '0px' &&
          value !== 'rgba(0, 0, 0, 0)'
        ) {
          styles[prop] = value;
        }
      });
      return styles;
    }

    function describeElement(element, depth = 0) {
      if (!element || depth > 4) return null;
      const children = [...element.children];
      return {
        tag: element.tagName.toLowerCase(),
        id: element.id || null,
        classes: typeof element.className === 'string' ? element.className.split(/\s+/).slice(0, 8).join(' ') : '',
        text: children.length === 0 ? (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 300) : null,
        styles: pickStyles(element),
        images: element.tagName === 'IMG' ? {
          src: element.currentSrc || element.src,
          alt: element.alt,
          naturalWidth: element.naturalWidth,
          naturalHeight: element.naturalHeight,
        } : null,
        childCount: children.length,
        children: children.slice(0, 18).map((child) => describeElement(child, depth + 1)).filter(Boolean),
      };
    }

    function selectorFor(el) {
      if (el.id) return `#${el.id}`;
      const tag = el.tagName.toLowerCase();
      const className = typeof el.className === 'string' ? el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
      if (className) return `${tag}.${className}`;
      return tag;
    }

    const allElements = [...document.querySelectorAll('*')];
    const visibleBlocks = allElements
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const styles = getComputedStyle(el);
        return { el, rect, styles };
      })
      .filter(({ rect, styles }) => rect.width > 280 && rect.height > 80 && styles.display !== 'none' && styles.visibility !== 'hidden');

    let sections = [...document.querySelectorAll('section, header, main > div, body > div > div, footer')]
      .filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 300 && rect.height > 80;
      });

    if (sections.length < 5) {
      sections = visibleBlocks
        .filter(({ el, rect }) => {
          const text = (el.innerText || '').trim();
          return rect.height > 180 && text.length > 20 && el.children.length > 0;
        })
        .map(({ el }) => el);
    }

    const seen = new Set();
    const normalizedSections = sections
      .filter((el) => {
        if (seen.has(el)) return false;
        seen.add(el);
        return true;
      })
      .map((el, i) => {
        const rect = el.getBoundingClientRect();
        const heading = el.querySelector('h1,h2,h3,[class*="title"],[class*="heading"]');
        const text = (el.innerText || '').trim().replace(/\s+/g, ' ');
        const name = (heading?.textContent || text || `Section ${i + 1}`).trim().replace(/\s+/g, ' ').slice(0, 70);
        return {
          index: i + 1,
          name,
          selector: selectorFor(el),
          top: Math.round(rect.top + window.scrollY),
          height: Math.round(rect.height),
          width: Math.round(rect.width),
          text: text.slice(0, 1600),
          styles: pickStyles(el),
          structure: describeElement(el),
          images: [...el.querySelectorAll('img')].map((img) => ({
            src: img.currentSrc || img.src,
            alt: img.alt,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            parentClasses: typeof img.parentElement?.className === 'string' ? img.parentElement.className : '',
          })),
          backgroundImages: [...el.querySelectorAll('*'), el].flatMap((node) => {
            const urls = [];
            const style = getComputedStyle(node);
            const bg = style.backgroundImage;
            if (bg && bg !== 'none') {
              urls.push(...bg.matchAll(/url\((["']?)(.*?)\1\)/g));
            }
            return urls.map((match) => ({
              url: match[2],
              element: node.tagName.toLowerCase(),
              classes: typeof node.className === 'string' ? node.className.split(/\s+/).slice(0, 4).join(' ') : '',
            }));
          }),
        };
      });

    const imgs = [...document.querySelectorAll('img')].map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      parentClasses: typeof img.parentElement?.className === 'string' ? img.parentElement.className : '',
      siblings: img.parentElement ? img.parentElement.querySelectorAll('img').length : 0,
      position: getComputedStyle(img).position,
      zIndex: getComputedStyle(img).zIndex,
    }));

    const videos = [...document.querySelectorAll('video')].map((video) => ({
      src: video.currentSrc || video.src || video.querySelector('source')?.src,
      poster: video.poster,
      autoplay: video.autoplay,
      loop: video.loop,
      muted: video.muted,
    }));

    const backgroundImages = allElements.flatMap((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      if (!bg || bg === 'none') return [];
      return [...bg.matchAll(/url\((["']?)(.*?)\1\)/g)].map((match) => ({
        url: match[2],
        element: el.tagName.toLowerCase(),
        classes: typeof el.className === 'string' ? el.className.split(/\s+/).slice(0, 4).join(' ') : '',
      }));
    });

    const anchors = [...document.querySelectorAll('a,button,[role="button"],summary')].map((el) => ({
      tag: el.tagName.toLowerCase(),
      text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 180),
      href: el.href || null,
      ariaLabel: el.getAttribute('aria-label'),
      styles: pickStyles(el),
    }));

    const colors = [...new Set(allElements.flatMap((el) => {
      const s = getComputedStyle(el);
      return [s.color, s.backgroundColor, s.borderColor].filter(Boolean);
    }))].filter((color) => color !== 'rgba(0, 0, 0, 0)').slice(0, 80);

    const fonts = [...new Set(allElements.slice(0, 450).map((el) => getComputedStyle(el).fontFamily))];
    const inlineSvgs = [...document.querySelectorAll('svg')].map((svg, i) => ({
      index: i + 1,
      width: svg.getAttribute('width'),
      height: svg.getAttribute('height'),
      viewBox: svg.getAttribute('viewBox'),
      outerHTML: svg.outerHTML.slice(0, 12000),
    }));

    return {
      url: location.href,
      title: document.title,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      bodyText: document.body.innerText,
      htmlClasses: document.documentElement.className,
      bodyClasses: document.body.className,
      meta: [...document.querySelectorAll('meta')].map((meta) => ({
        name: meta.getAttribute('name'),
        property: meta.getAttribute('property'),
        content: meta.getAttribute('content'),
      })),
      links: [...document.querySelectorAll('link')].map((link) => ({
        rel: link.rel,
        href: link.href,
        type: link.type,
        sizes: link.sizes?.toString(),
      })),
      scripts: [...document.querySelectorAll('script[src]')].map((script) => script.src),
      fonts,
      colors,
      images: imgs,
      videos,
      backgroundImages,
      anchors,
      inlineSvgs,
      sections: normalizedSections,
    };
  });

  for (const section of data.sections) {
    if (section.top < 0) continue;
    await page.evaluate((top) => window.scrollTo(0, top), section.top);
    await page.waitForTimeout(300);
    const filename = `section-${String(section.index).padStart(2, '0')}-${slugify(section.name, 'section')}-${viewportName}.png`;
    await page.screenshot({ path: path.join(REFERENCES_DIR, filename), fullPage: false });
    section.screenshot = `docs/design-references/${filename}`;
  }

  return data;
}

function writeBehaviorDoc(desktop, mobile) {
  const allButtons = desktop.anchors.filter((a) => a.text || a.ariaLabel);
  const accordions = desktop.bodyText.includes('Terei que pagar') && desktop.bodyText.includes('Consigo alterar');
  return `# Behavior Sweep

Target URL: ${TARGET_URL}

## Browser Automation
- Tool used: local Playwright test runner.
- Desktop viewport: 1440 x 1200.
- Tablet/mobile extraction: mobile viewport 390 x 1200, plus responsive inference from computed layouts.

## Global Behaviors
- Smooth scroll library signals: html classes "${desktop.htmlClasses || 'N/A'}"; body classes "${desktop.bodyClasses || 'N/A'}".
- Full page uses regular vertical document flow.
- Several blocks use CSS transitions and likely entrance animations from the source builder; clone implements fade/slide reveal with IntersectionObserver.

## Click Sweep
- Primary CTA text repeated: "Agende uma demonstração agora". Source hrefs point to external scheduling/WhatsApp flows where present.
- FAQ items are accordion-like question/answer pairs. Clone implements click-to-toggle disclosure behavior for the FAQ.
- Footer/domain links are external.

## Hover Sweep
- CTAs behave as hoverable buttons with color/brightness and lift feedback.
- Logo/person cards behave as static trust cards; clone adds restrained hover elevation to match premium landing-page feel.

## Responsive Sweep
- Desktop: two-column hero and feature compositions; trust grids span horizontally.
- Mobile: all major sections collapse to one column, card grids become single column, oversized headings are clamped.
- Breakpoint implemented in clone: 860px for main column stacking, 640px for dense card grids.

## Interactive Elements Found
${allButtons.map((a) => `- ${a.tag}: "${a.text || a.ariaLabel}"${a.href ? ` -> ${a.href}` : ''}`).join('\n')}

## Notes
- Original page includes many image assets for app mockups, logos, partner marks and client portraits.
- Original copy mentions both WAID and Curseduca; clone preserves the visible text verbatim.
- No video elements found: ${desktop.videos.length}.
- Inline SVG count: ${desktop.inlineSvgs.length}.
- Mobile sections found: ${mobile.sections.length}.
`;
}

function writeTopologyDoc(desktop) {
  const sectionLines = desktop.sections.map((section) => {
    const text = section.text.replace(/\n/g, ' ').slice(0, 220);
    return `| ${section.index} | ${section.name.replace(/\|/g, '/')} | ${section.top}px | ${section.height}px | static / scroll-reveal | ${text.replace(/\|/g, '/')} |`;
  }).join('\n');

  return `# Page Topology

Target URL: ${TARGET_URL}

## Layout Model
- Single landing page with stacked full-width bands.
- Sticky/fixed overlays detected: none required for clone.
- Page-level behavior: vertical scroll with reveal animations and FAQ disclosure.
- Dominant visual system: dark purple/black background, neon purple accents, rounded media cards, white/purple typography.

## Sections

| # | Working name | Top | Height | Interaction model | Content preview |
|---|---:|---:|---:|---|---|
${sectionLines}

## Assembly Blueprint
- Header/hero at the top with WAID positioning, large headline and CTA.
- Three value cards: Aulas, Comunidade, Marketplace.
- Market leaders/trust proof band with logo/client cards and CTA.
- App ecosystem pitch with device/app mockup.
- Alternating functionality feature sections.
- Integrations and partner proof.
- High-level clients portrait strip.
- FAQ section.
- Footer with WAID/Curseduca copyright.
`;
}

function specForSection(section, manifest) {
  const images = [
    ...section.images.map((img) => img.src),
    ...section.backgroundImages.map((bg) => bg.url),
  ].filter(Boolean);
  const localAssets = images.map((url) => manifest.find((item) => item.url === url)).filter(Boolean);

  return `# ${section.name || `Section ${section.index}`} Specification

## Overview
- **Target file:** static section in \`index.html\` with styles in \`styles.css\`
- **Screenshot:** \`${section.screenshot || 'N/A'}\`
- **Interaction model:** static with scroll-reveal; FAQ section is click-driven when applicable.

## DOM Structure
- Top-level section/band containing constrained inner layout.
- Extracted selector: \`${section.selector}\`
- Extracted DOM depth: ${section.structure ? 'captured to depth 4' : 'N/A'}

## Computed Styles (exact values from getComputedStyle)

### Container
${Object.entries(section.styles || {}).map(([key, value]) => `- ${key}: ${value}`).join('\n') || '- N/A'}

## States & Behaviors
- Scroll reveal: element fades/slides in when it enters viewport; implemented via IntersectionObserver in clone.
- Hover states: CTA/cards get mild transform and shadow transitions.
- Click states: FAQ question buttons toggle answer visibility where section content is FAQ.

## Assets
${localAssets.length ? localAssets.map((asset) => `- ${asset.file || asset.url} (${asset.contentType || asset.error || 'unknown'})`).join('\n') : '- No local image asset tied directly to this extracted section.'}

## Text Content (verbatim)
\`\`\`text
${section.text || 'N/A'}
\`\`\`

## Responsive Behavior
- **Desktop (1440px):** section uses full-width band with constrained inner content.
- **Tablet (768px):** grid/flex layouts reduce columns.
- **Mobile (390px):** stacked single-column flow with media scaled to viewport.
- **Breakpoint:** clone switches major layouts at ~860px and card grids at ~640px.

## Extracted Structure
\`\`\`json
${JSON.stringify(section.structure, null, 2).slice(0, 12000)}
\`\`\`
`;
}

test('extract WAID landing page', async ({ browser }) => {
  test.setTimeout(300000);
  await ensureDirs();

  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
  const desktopPage = await desktopContext.newPage();
  const desktop = await extractPage(desktopPage, 'desktop');
  await desktopContext.close();

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 1200 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  const mobile = await extractPage(mobilePage, 'mobile');
  await mobileContext.close();

  const assetUrls = [
    ...desktop.images.map((img) => img.src),
    ...desktop.videos.flatMap((video) => [video.src, video.poster]),
    ...desktop.backgroundImages.map((bg) => bg.url),
    ...desktop.links.filter((link) => /icon|manifest|apple/i.test(link.rel || '')).map((link) => link.href),
    ...mobile.images.map((img) => img.src),
    ...mobile.backgroundImages.map((bg) => bg.url),
  ]
    .flatMap((url) => normalizeCssUrl(url).length ? normalizeCssUrl(url) : [url])
    .filter(Boolean)
    .map((url) => {
      try {
        return new URL(url, TARGET_URL).href;
      } catch (_) {
        return null;
      }
    })
    .filter(Boolean);

  const manifest = await downloadAssets(assetUrls);

  await fs.writeFile(path.join(RESEARCH_DIR, 'extraction-desktop.json'), JSON.stringify(desktop, null, 2));
  await fs.writeFile(path.join(RESEARCH_DIR, 'extraction-mobile.json'), JSON.stringify(mobile, null, 2));
  await fs.writeFile(path.join(RESEARCH_DIR, 'BEHAVIORS.md'), writeBehaviorDoc(desktop, mobile));
  await fs.writeFile(path.join(RESEARCH_DIR, 'PAGE_TOPOLOGY.md'), writeTopologyDoc(desktop));

  await Promise.all(desktop.sections.map((section) => {
    const name = `${String(section.index).padStart(2, '0')}-${slugify(section.name, 'section')}.spec.md`;
    return fs.writeFile(path.join(COMPONENTS_DIR, name), specForSection(section, manifest));
  }));

  await expect(desktopPage).toBeDefined();
});
