# Behavior Sweep

Target URL: https://lp.waid.io/icp3-cb/

## Browser Automation
- Tool used: local Playwright test runner.
- Desktop viewport: 1440 x 1200.
- Tablet/mobile extraction: mobile viewport 390 x 1200, plus responsive inference from computed layouts.

## Global Behaviors
- Smooth scroll library signals: html classes "N/A"; body classes "wp-singular page-template page-template-elementor_canvas page page-id-393 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-canvas elementor-kit-16 elementor-page elementor-page-393 e--ua-blink e--ua-webkit".
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
- a: "Agende uma demonstração agora" -> https://lp.waid.io/icp3-cb/#
- a: "Agende uma demonstração agora" -> https://lp.waid.io/icp3-cb/#
- a: "Agende uma demonstração agora" -> https://lp.waid.io/icp3-cb/#
- div: "Slide anterior"
- div: "Próximo slide"
- a: "clicando aqui" -> https://s.tintim.app/whatsapp/586ece6a-a565-431a-8ef3-c682688b7ccc/9063b420-8d2b-4ba1-b125-cc5e645a198f
- summary: "Terei que pagar uma taxa extra além do meu plano?"
- summary: "Consigo alterar o plano atual por outro com mais funções no futuro?"
- summary: "Poderei utilizar qualquer tipo de produto na plataforma?"
- summary: "Preciso esperar meu produto ser aprovado para começar a vender?"
- summary: "Posso personalizar 100% da plataforma?"
- summary: "Consigo disponibilizar produtos gratuitos?"
- summary: "Posso importar meus alunos de outras plataformas?"
- summary: "Terei limitação de alunos?"
- summary: "Contarei com suporte dentro da plataforma?"
- summary: "Possuem hospedagem de vídeo própria?"

## Notes
- Original page includes many image assets for app mockups, logos, partner marks and client portraits.
- Original copy mentions both WAID and Curseduca; clone preserves the visible text verbatim.
- No video elements found: 0.
- Inline SVG count: 29.
- Mobile sections found: 16.
