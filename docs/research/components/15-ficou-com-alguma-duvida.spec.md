# Ficou com alguma dúvida? Specification

## Overview
- **Target file:** static section in `index.html` with styles in `styles.css`
- **Screenshot:** `docs/design-references/section-15-ficou-com-alguma-duvida-desktop.png`
- **Interaction model:** static with scroll-reveal; FAQ section is click-driven when applicable.

## DOM Structure
- Top-level section/band containing constrained inner layout.
- Extracted selector: `div.elementor-element.elementor-element-4b66969e`
- Extracted DOM depth: captured to depth 4

## Computed Styles (exact values from getComputedStyle)

### Container
- fontSize: 16px
- fontWeight: 400
- fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
- lineHeight: 24px
- color: rgb(51, 51, 51)
- backgroundColor: rgb(0, 0, 0)
- background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box
- width: 1440px
- height: 1199.39px
- maxWidth: 100%
- display: flex
- flexDirection: column
- border: 0px none rgb(51, 51, 51)
- borderTop: 0px none rgb(51, 51, 51)
- borderBottom: 0px none rgb(51, 51, 51)
- borderLeft: 0px none rgb(51, 51, 51)
- borderRight: 0px none rgb(51, 51, 51)
- overflow: visible
- overflowX: visible
- overflowY: visible
- position: relative
- opacity: 1
- transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s
- objectFit: fill
- objectPosition: 50% 50%
- textOverflow: clip

## States & Behaviors
- Scroll reveal: element fades/slides in when it enters viewport; implemented via IntersectionObserver in clone.
- Hover states: CTA/cards get mild transform and shadow transitions.
- Click states: FAQ question buttons toggle answer visibility where section content is FAQ.

## Assets
- No local image asset tied directly to this extracted section.

## Text Content (verbatim)
```text
Ficou com alguma dúvida? Confira as nossas respostas mais frequentes. Se sua dúvida ainda não for respondida, entre em contato com nossa equipe clicando aqui. Terei que pagar uma taxa extra além do meu plano? Consigo alterar o plano atual por outro com mais funções no futuro? Poderei utilizar qualquer tipo de produto na plataforma? Preciso esperar meu produto ser aprovado para começar a vender? Posso personalizar 100% da plataforma? Consigo disponibilizar produtos gratuitos? Posso importar meus alunos de outras plataformas? Terei limitação de alunos? Contarei com suporte dentro da plataforma? Possuem hospedagem de vídeo própria?
```

## Responsive Behavior
- **Desktop (1440px):** section uses full-width band with constrained inner content.
- **Tablet (768px):** grid/flex layouts reduce columns.
- **Mobile (390px):** stacked single-column flow with media scaled to viewport.
- **Breakpoint:** clone switches major layouts at ~860px and card grids at ~640px.

## Extracted Structure
```json
{
  "tag": "div",
  "id": null,
  "classes": "elementor-element elementor-element-4b66969e e-flex e-con-boxed e-con e-parent",
  "text": null,
  "styles": {
    "fontSize": "16px",
    "fontWeight": "400",
    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "lineHeight": "24px",
    "color": "rgb(51, 51, 51)",
    "backgroundColor": "rgb(0, 0, 0)",
    "background": "rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
    "width": "1440px",
    "height": "1199.39px",
    "maxWidth": "100%",
    "display": "flex",
    "flexDirection": "column",
    "border": "0px none rgb(51, 51, 51)",
    "borderTop": "0px none rgb(51, 51, 51)",
    "borderBottom": "0px none rgb(51, 51, 51)",
    "borderLeft": "0px none rgb(51, 51, 51)",
    "borderRight": "0px none rgb(51, 51, 51)",
    "overflow": "visible",
    "overflowX": "visible",
    "overflowY": "visible",
    "position": "relative",
    "opacity": "1",
    "transition": "background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s",
    "objectFit": "fill",
    "objectPosition": "50% 50%",
    "textOverflow": "clip"
  },
  "images": null,
  "childCount": 1,
  "children": [
    {
      "tag": "div",
      "id": null,
      "classes": "e-con-inner",
      "text": null,
      "styles": {
        "fontSize": "16px",
        "fontWeight": "400",
        "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
        "lineHeight": "24px",
        "color": "rgb(51, 51, 51)",
        "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
        "padding": "80px 0px",
        "paddingTop": "80px",
        "paddingBottom": "80px",
        "margin": "0px 120px",
        "marginRight": "120px",
        "marginLeft": "120px",
        "width": "1200px",
        "height": "1199.39px",
        "maxWidth": "min(100%, 1200px)",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "border": "0px none rgb(51, 51, 51)",
        "borderTop": "0px none rgb(51, 51, 51)",
        "borderBottom": "0px none rgb(51, 51, 51)",
        "borderLeft": "0px none rgb(51, 51, 51)",
        "borderRight": "0px none rgb(51, 51, 51)",
        "overflow": "visible",
        "overflowX": "visible",
        "overflowY": "visible",
        "position": "static",
        "opacity": "1",
        "transition": "all",
        "objectFit": "fill",
        "objectPosition": "50% 50%",
        "textOverflow": "clip"
      },
      "images": null,
      "childCount": 3,
      "children": [
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-55a0124d elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": "24px",
            "color": "rgb(51, 51, 51)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "margin": "0px 0px 25px",
            "marginBottom": "25px",
            "width": "416px",
            "height": "32px",
            "maxWidth": "100%",
            "display": "block",
            "flexDirection": "row",
            "border": "0px none rgb(51, 51, 51)",
            "borderTop": "0px none rgb(51, 51, 51)",
            "borderBottom": "0px none rgb(51, 51, 51)",
            "borderLeft": "0px none rgb(51, 51, 51)",
            "borderRight": "0px none rgb(51, 51, 51)",
            "overflow": "visible",
            "overflowX": "visible",
            "overflowY": "visible",
            "position": "relative",
            "opacity": "1",
            "transition": "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s",
            "objectFit": "fill",
            "objectPosition": "50% 50%",
            "textOverflow": "clip"
          },
          "images": null,
          "childCount": 1,
          "children": [
            {
              "tag": "h2",
              "id": null,
              "classes": "elementor-heading-title elementor-size-default",
              "text": "Ficou com alguma dúvida?",
              "styles": {
                "fontSize": "32px",
                "fontWeight": "700",
                "fontFamily": "Inter, sans-serif",
                "lineHeight": "32px",
                "color": "rgb(255, 249, 249)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "width": "416px",
                "height": "32px",
                "display": "block",
                "flexDirection": "row",
                "border": "0px none rgb(255, 249, 249)",
                "borderTop": "0px none rgb(255, 249, 249)",
                "borderBottom": "0px none rgb(255, 249, 249)",
                "borderLeft": "0px none rgb(255, 249, 249)",
                "borderRight": "0px none rgb(255, 249, 249)",
                "overflow": "visible",
                "overflowX": "visible",
                "overflowY": "visible",
                "position": "static",
                "opacity": "1",
                "transition": "all",
                "objectFit": "fill",
                "objectPosition": "50% 50%",
                "textOverflow": "clip"
              },
              "images": null,
              "childCount": 0,
              "children": []
            }
          ]
        },
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-622420bd elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "Inter, sans-serif",
            "lineHeight": "24px",
            "color": "rgb(249, 248, 246)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "margin": "0px 0px 50px",
            "marginBottom": "50px",
            "width": "689.641px",
            "height": "62.3906px",
            "maxWidth": "100%",
            "display": "block",
            "flexDirection": "row",
            "border": "0px none rgb(249, 248, 246)",
            "borderTop": "0px none rgb(249, 248, 246)",
            "borderBottom": "0px none rgb(249, 248, 246)",
            "borderLeft": "0px none rgb(249, 248, 246)",
            "borderRight": "0px none rgb(249, 248, 246)",
            "overflow": "visible",
            "overflowX": "visible",
            "overflowY": "visible",
            "position": "relative",
            "opacity": "1",
            "transition": "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s",
            "objectFit": "fill",
            "objectPosition": "50% 50%",
            "textOverflow": "clip"
          },
          "images": null,
          "childCount": 1,
          "children": [
            {
              "tag": "p",
              "id": null,
              "classes": "",
              "text": null,
              "styles": {
                "fontSize": "16px",
                "fontWeight": "400",
                "fontFamily": "Inter, sans-serif",
                "lineHeight": "24px",
                "color": "rgb(249, 248, 246)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "margin": "0px 0px 14.4px",
                "marginBottom": "14.4px",
                "width": "689.641px",
                "height": "48px",
                "display": "block",
                "flexDirection": "row",
                "border": "0px none rgb(249, 248, 246)",
                "borderTop": "0px none rgb(249, 248, 246)",
                "borderBottom": "0px none rgb(249, 248, 246)",
                "borderLeft": "0px none rgb(249, 248, 246)",
                "borderRight": "0px none rgb(249, 248, 246)",
                "overflow": "visible",
                "overflowX": "visible",
                "overflowY": "visible",
                "position": "static",
                "opacity": "1",
                "transition": "all",
                "objectFit": "fill",
                "objectPosition": "50% 50%",
                "textOverflow": "clip"
              },
              "images": null,
              "childCount": 2,
              "children": [
                {
                  "tag": "br",
                  "id": null,
                  "classes": "",
                  "text": "",
                  "styles": {
                    "fontSize": "16px",
                    "fontWeight": "400",
                    "fontFamily": "Inter, sans-serif",
                    "lineHeight": "24px",
                    "color": "rgb(249, 248, 246)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "display": "inline",
                    "flexDirection": "row",
                    "border": "0px none rgb(249, 248, 246)",
                    "borderTop": "0px none rgb(249, 248, 246)",
                    "borderBottom": "0px none rgb(249, 248, 246)",
                    "borderLeft": "0px none rgb(249, 248, 246)",
                    "borderRight": "0px none rgb(249, 248, 246)",
                    "overflow": "visible",
                    "overflowX": "visible",
                    "overflowY": "visible",
                    "position": "static",
                    "opacity": "1",
                    "transition": "all",
                    "objectFit": "fill",
                    "objectPosition": "50% 50%",
                    "textOverflow": "clip"
                  },
                  "images": null,
                  "childCount": 0,
                  "children": []
                },
                {
                  "tag": "a",
                  "id": null,
                  "classes": "",
                  "text": "clicando aqui",
                  "styles": {
                    "fontSize": "16px",
                    "fontWeight": "400",
                    "fontFamily": "Inter, sans-serif",
                    "lineHeight": "24px",
                    "color": "rgb(139, 168, 142)",
                    "backgroundColor": "rgba(255, 255, 255, 0)",
                    "background": "rgba(255, 255, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "display": "inline",
                    "flexDirection": "row",
                    "border": "0px none rgb(139, 168, 142)",
                    "borderTop": "0px none rgb(139, 168, 142)",
                    "borderBottom": "0px none rgb(139, 168, 142)",
                    "borderLeft": "0px none rgb(139, 168, 142)",
                    "borderRight": "0px none rgb(139, 168, 142)",
                    "overflow": "visible",
                    "overflowX": "visible",
                    "overflowY": "visible",
                    "position": "static",
                    "opacity": "1",
                    "transition": "all",
                    "cursor": "pointer",
                    "objectFit": "fill",
                    "objectPosition": "50% 50%",
                    "textOverflow": "clip"
                  },
                  "images": null,
       
```
