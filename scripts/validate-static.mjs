import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const required = [
  'index.html',
  'styles.css',
  'script.js',
  'assets/001-icp3-v2-dobra01-mockup-v3.png',
  'assets/002-logo-waid-negativo.png',
  'assets/018-logos-ferramentas.png',
  'docs/research/BEHAVIORS.md',
  'docs/research/PAGE_TOPOLOGY.md',
];

const missing = [];
for (const file of required) {
  try {
    await fs.access(path.join(root, file));
  } catch {
    missing.push(file);
  }
}

if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join('\n')}`);
  process.exit(1);
}

const html = await fs.readFile(path.join(root, 'index.html'), 'utf8');
const css = await fs.readFile(path.join(root, 'styles.css'), 'utf8');
const js = await fs.readFile(path.join(root, 'script.js'), 'utf8');

const assetRefs = [
  ...html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g),
  ...css.matchAll(/url\("?(assets\/[^")]+)"?\)/g),
].map((match) => match[1]);

const missingAssets = [];
for (const ref of assetRefs) {
  try {
    await fs.access(path.join(root, ref));
  } catch {
    missingAssets.push(ref);
  }
}

if (missingAssets.length) {
  console.error(`Missing referenced assets:\n${missingAssets.map((file) => `- ${file}`).join('\n')}`);
  process.exit(1);
}

if (!html.includes('<section') || !html.includes('Ficou com alguma dúvida?')) {
  console.error('HTML content check failed.');
  process.exit(1);
}

if (!css.includes('@media') || !css.includes('--purple')) {
  console.error('CSS content check failed.');
  process.exit(1);
}

try {
  new Function(js);
} catch (error) {
  console.error(`JavaScript syntax check failed: ${error.message}`);
  process.exit(1);
}

console.log(`Static build validation passed. Checked ${assetRefs.length} asset references.`);
