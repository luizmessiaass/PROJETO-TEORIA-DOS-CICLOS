# Os líderes do mercado transformam seus negócios com a WAID Specification

## Overview
- **Target file:** static section in `index.html` with styles in `styles.css`
- **Screenshot:** `docs/design-references/section-03-os-lideres-do-mercado-transformam-seus-negocios-com-a-waid-desktop.png`
- **Interaction model:** static with scroll-reveal; FAQ section is click-driven when applicable.

## DOM Structure
- Top-level section/band containing constrained inner layout.
- Extracted selector: `div.elementor-element.elementor-element-7f25f315`
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
- height: 687.766px
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
- assets/003-04-cimed.png (image/webp)
- assets/004-04-marcelopinazza-1536x1390.png (image/webp)
- assets/005-04-lindt.png (image/webp)
- assets/006-04-mepoupe.png (image/webp)
- assets/003-04-cimed.png (image/webp)
- assets/004-04-marcelopinazza-1536x1390.png (image/webp)
- assets/005-04-lindt.png (image/webp)
- assets/006-04-mepoupe.png (image/webp)
- assets/003-04-cimed.png (image/webp)
- assets/004-04-marcelopinazza-1536x1390.png (image/webp)
- assets/005-04-lindt.png (image/webp)
- assets/006-04-mepoupe.png (image/webp)

## Text Content (verbatim)
```text
Os líderes do mercado transformam seus negócios com a WAID CIMED Marcelo Pinazza Lindt Me poupe CIMED Marcelo Pinazza Lindt Me poupe CIMED Marcelo Pinazza Lindt Me poupe AGENDE UMA DEMONSTRAÇÃO AGORA
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
  "classes": "elementor-element elementor-element-7f25f315 e-flex e-con-boxed e-con e-parent",
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
    "height": "687.766px",
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
        "height": "687.766px",
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
          "classes": "elementor-element elementor-element-27692acf elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-heading",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": "24px",
            "color": "rgb(51, 51, 51)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "margin": "0px 0px 50px",
            "marginBottom": "50px",
            "width": "570px",
            "height": "64px",
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
              "text": null,
              "styles": {
                "fontSize": "32px",
                "fontWeight": "500",
                "fontFamily": "Inter, sans-serif",
                "lineHeight": "32px",
                "color": "rgb(255, 249, 249)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "width": "570px",
                "height": "64px",
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
              "childCount": 1,
              "children": [
                {
                  "tag": "b",
                  "id": null,
                  "classes": "",
                  "text": "líderes do mercado",
                  "styles": {
                    "fontSize": "32px",
                    "fontWeight": "700",
                    "fontFamily": "Inter, sans-serif",
                    "lineHeight": "32px",
                    "color": "rgb(255, 249, 249)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "display": "inline",
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
            }
          ]
        },
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-c2f4193 elementor-widget elementor-widget-n-carousel e-widget-swiper",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": "24px",
            "color": "rgb(51, 51, 51)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "margin": "0px 0px 50px",
            "marginBottom": "50px",
            "width": "1200px",
            "height": "309.766px",
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
              "tag": "div",
              "id": null,
              "classes": "e-n-carousel swiper swiper-initialized swiper-horizontal swiper-pointer-events",
              "text": null,
              "styles": {
                "fontSize": "16px",
                "fontWeight": "400",
                "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                "lineHeight": "24px",
                "color": "rgb(51, 51, 51)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "width": "1200px",
                "height": "309.766px",
                "display": "flex",
                "flexDirection": "row",
                "border": "0px none rgb(51, 51, 51)",
                "borderTop": "0px none rgb(51, 51, 51)",
                "borderBottom": "0px none rgb(51, 51, 51)",
                "borderLeft": "0px none rgb(51, 51, 51)",
                "borderRight": "0px none rgb(51, 51, 51)",
                "overflow": "hidden",
                "overflowX": "hidden",
                "overflowY": "hidden",
                "position": "relative",
                "zIndex": "1",
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
                  "tag": "div",
                  "id": "swiper-wrapper-a10a0c224edab5154",
                  "classes": "swiper-wrapper",
                  "text": null,
                  "styles": {
                    "fontSize": "16px",
                    "fontWeight": "400",
                    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                    "lineHeight": "24px",
                    "color": "rgb(51, 51, 51)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "width": "1200px",
                    "height": "309.766px",
                    "display": "flex",
                    "flexDirection": "row",
                    "border": "0px none rgb(51, 51, 51)",
                    "borderTop": "0px none rgb(51, 51, 51)",
                    "borderBottom": "0px none rgb(51, 51, 51)",
                    "borderLeft": "0px none rgb(5
```
