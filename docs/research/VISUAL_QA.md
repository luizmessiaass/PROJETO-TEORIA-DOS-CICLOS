# Visual QA

Target: https://lp.waid.io/icp3-cb/

## Screenshots Compared
- Original desktop: `docs/design-references/original-desktop-full.png`
- Local desktop: `docs/design-references/local-desktop-full.png`
- Original mobile: `docs/design-references/original-mobile-full.png`
- Local mobile: `docs/design-references/local-mobile-full.png`

## Result
- Desktop layout follows the original section order, dark/light banding, hero structure, trust cards, feature alternation, integration graphic, carousel, FAQ and footer.
- Mobile layout collapses to a single column, keeps CTAs readable, preserves the compact dark visual style and avoids horizontal page overflow.
- FAQ click behavior and carousel controls are implemented locally.
- Source assets are local and loaded from `assets/`.

## Known Gaps
- The original Elementor entrance animations are approximated with lightweight local animation.
- CTA buttons on the source use `#`; the clone preserves that for repeated demo buttons.
- Exact Elementor micro-spacing may differ by a few pixels, but the visual structure and assets match the captured page.
