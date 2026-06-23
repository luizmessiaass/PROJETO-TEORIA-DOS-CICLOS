# Aqui você é livre para escolher suas integrações Specification

## Overview
- **Target file:** static section in `index.html` with styles in `styles.css`
- **Screenshot:** `docs/design-references/section-13-aqui-voce-e-livre-para-escolher-suas-integracoes-desktop.png`
- **Interaction model:** static with scroll-reveal; FAQ section is click-driven when applicable.

## DOM Structure
- Top-level section/band containing constrained inner layout.
- Extracted selector: `div.elementor-element.elementor-element-3bd4ca14`
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
- height: 383.391px
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
- assets/018-logos-ferramentas.png (image/webp)

## Text Content (verbatim)
```text
Aqui você é livre para escolher suas integrações Contamos com mais de 30 opções de integrações para a sua plataforma. AGENDE UMA DEMONSTRAÇÃO AGORA
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
  "classes": "elementor-element elementor-element-3bd4ca14 e-flex e-con-boxed e-con e-parent",
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
    "height": "383.391px",
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
        "height": "383.391px",
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
      "childCount": 4,
      "children": [
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-67f50c45 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading",
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
            "width": "754.594px",
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
              "text": "Aqui você é livre para escolher suas integrações",
              "styles": {
                "fontSize": "32px",
                "fontWeight": "700",
                "fontFamily": "Inter, sans-serif",
                "lineHeight": "32px",
                "color": "rgb(255, 249, 249)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "width": "754.594px",
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
          "classes": "elementor-element elementor-element-31feb020 elementor-widget elementor-widget-text-editor",
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
            "width": "553.547px",
            "height": "38.3906px",
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
              "text": "Contamos com mais de 30 opções de integrações para a sua plataforma.",
              "styles": {
                "fontSize": "16px",
                "fontWeight": "400",
                "fontFamily": "Inter, sans-serif",
                "lineHeight": "24px",
                "color": "rgb(249, 248, 246)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "margin": "0px 0px 14.4px",
                "marginBottom": "14.4px",
                "width": "553.547px",
                "height": "24px",
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
              "childCount": 0,
              "children": []
            }
          ]
        },
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-d6a07f5 e-transform elementor-widget elementor-widget-image",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": "24px",
            "color": "rgb(51, 51, 51)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "height": "24px",
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
            "transform": "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 1)",
            "transition": "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s",
            "objectFit": "fill",
            "objectPosition": "50% 50%",
            "textOverflow": "clip"
          },
          "images": null,
          "childCount": 1,
          "children": [
            {
              "tag": "img",
              "id": null,
              "classes": "attachment-full size-full wp-image-351",
              "text": "",
              "styles": {
                "fontSize": "16px",
                "fontWeight": "400",
                "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                "lineHeight": "24px",
                "color": "rgb(51, 51, 51)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "maxWidth": "100%",
                "display": "inline-block",
                "flexDirection": "row",
                "border": "0px none rgb(51, 51, 51)",
                "borderTop": "0px none rgb(51, 51, 51)",
                "borderBottom": "0px none rgb(51, 51, 51)",
                "borderLeft": "0px none rgb(51, 51, 51)",
                "borderRight": "0px none rgb(51, 51, 51)",
                "overflow": "clip",
                "overflowX": "clip",
                "overflowY": "clip",
                "position":
```
