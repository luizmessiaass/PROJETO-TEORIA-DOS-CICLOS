# Aulas Specification

## Overview
- **Target file:** static section in `index.html` with styles in `styles.css`
- **Screenshot:** `docs/design-references/section-02-aulas-desktop.png`
- **Interaction model:** static with scroll-reveal; FAQ section is click-driven when applicable.

## DOM Structure
- Top-level section/band containing constrained inner layout.
- Extracted selector: `div.elementor-element.elementor-element-29ffbfbe`
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
- height: 418.391px
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
Aulas Ofereça conteúdos exclusivos e valorize a experiência do usuário. Comunidade Crie um espaço para interação e fidelização do cliente. Marketplace Monetize com produtos e serviços adicionais.
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
  "classes": "elementor-element elementor-element-29ffbfbe e-flex e-con-boxed e-con e-parent e-lazyloaded",
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
    "height": "418.391px",
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
        "height": "418.391px",
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
      "childCount": 1,
      "children": [
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-40659873 e-con-full e-flex e-con e-child",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": "24px",
            "color": "rgb(51, 51, 51)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "padding": "10px",
            "paddingTop": "10px",
            "paddingRight": "10px",
            "paddingBottom": "10px",
            "paddingLeft": "10px",
            "width": "1200px",
            "height": "258.391px",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-evenly",
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
          "childCount": 3,
          "children": [
            {
              "tag": "div",
              "id": null,
              "classes": "elementor-element elementor-element-6be79740 e-con-full e-transform e-flex e-con e-child",
              "text": null,
              "styles": {
                "fontSize": "16px",
                "fontWeight": "400",
                "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                "lineHeight": "24px",
                "color": "rgb(51, 51, 51)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "padding": "25px",
                "paddingTop": "25px",
                "paddingRight": "25px",
                "paddingBottom": "25px",
                "paddingLeft": "25px",
                "width": "295px",
                "height": "238.391px",
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "flex-start",
                "borderRadius": "15px",
                "border": "3px solid rgb(40, 40, 40)",
                "borderTop": "3px solid rgb(40, 40, 40)",
                "borderBottom": "3px solid rgb(40, 40, 40)",
                "borderLeft": "3px solid rgb(40, 40, 40)",
                "borderRight": "3px solid rgb(40, 40, 40)",
                "overflow": "visible",
                "overflowX": "visible",
                "overflowY": "visible",
                "position": "relative",
                "opacity": "1",
                "transform": "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 1)",
                "transition": "background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s",
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
                  "classes": "elementor-element elementor-element-4edc4e8f elementor-view-default elementor-widget elementor-widget-icon",
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
                    "width": "239px",
                    "height": "56px",
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
                  "children": []
                },
                {
                  "tag": "div",
                  "id": null,
                  "classes": "elementor-element elementor-element-389f1c7 elementor-widget elementor-widget-heading",
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
                    "width": "239px",
                    "height": "20px",
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
                  "children": []
                },
                {
                  "tag": "div",
                  "id": null,
                  "classes": "elementor-element elementor-element-5d7234a0 elementor-widget elementor-widget-text-editor",
                  "text": null,
                  "styles": {
                    "fontSize": "14px",
                    "fontWeight": "400",
                    "fontFamily": "Inter, sans-serif",
                    "lineHeight": "21px",
                    "color": "rgb(255, 255, 255)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "width": "239px",
                    "height": "56.3906px",
                    "maxWidth": "100%",
                    "display": "block",
                    "flexDirection": "row",
                    "border": "0px none rgb(255, 255, 255)",
                    "borderTop": "0px none rgb(255, 255, 255)",
                    "borderBottom": "0px none rgb(255, 255, 255)",
                    "borderLeft": "0px none rgb(255, 255, 255)",
                    "borderRight": "0px none rgb(255, 255, 255)",
                    "overflow": "visible",
                    "overflowX": "visible",
                    "overflowY": "visible",
                    "position": "relative",
                    "opacity": "1",
            
```
