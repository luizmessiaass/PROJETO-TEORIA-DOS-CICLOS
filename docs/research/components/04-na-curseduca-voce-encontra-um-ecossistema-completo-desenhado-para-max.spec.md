# Na Curseduca você encontra um ecossistema completo, desenhado para max Specification

## Overview
- **Target file:** static section in `index.html` with styles in `styles.css`
- **Screenshot:** `docs/design-references/section-04-na-curseduca-voce-encontra-um-ecossistema-completo-desenhado-para-max-desktop.png`
- **Interaction model:** static with scroll-reveal; FAQ section is click-driven when applicable.

## DOM Structure
- Top-level section/band containing constrained inner layout.
- Extracted selector: `div.elementor-element.elementor-element-3254b564`
- Extracted DOM depth: captured to depth 4

## Computed Styles (exact values from getComputedStyle)

### Container
- fontSize: 16px
- fontWeight: 400
- fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
- lineHeight: 24px
- color: rgb(51, 51, 51)
- backgroundColor: rgb(249, 248, 246)
- background: rgb(249, 248, 246) none repeat scroll 0% 0% / auto padding-box border-box
- width: 1440px
- height: 485.156px
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
- assets/007-vitrines-mobile-mockup-1536x1242.png (image/webp)

## Text Content (verbatim)
```text
Na Curseduca você encontra um ecossistema completo, desenhado para maximizar o engajamento, otimizar a receita e posicionar sua marca como líder de mercado. Disponível para Android e iOS.
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
  "classes": "elementor-element elementor-element-3254b564 e-flex e-con-boxed e-con e-parent",
  "text": null,
  "styles": {
    "fontSize": "16px",
    "fontWeight": "400",
    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "lineHeight": "24px",
    "color": "rgb(51, 51, 51)",
    "backgroundColor": "rgb(249, 248, 246)",
    "background": "rgb(249, 248, 246) none repeat scroll 0% 0% / auto padding-box border-box",
    "width": "1440px",
    "height": "485.156px",
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
        "margin": "0px 120px",
        "marginRight": "120px",
        "marginLeft": "120px",
        "width": "1200px",
        "height": "485.156px",
        "maxWidth": "min(100%, 1200px)",
        "display": "flex",
        "flexDirection": "row",
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
      "childCount": 2,
      "children": [
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-205e524f e-con-full e-flex e-con e-child",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": "24px",
            "color": "rgb(51, 51, 51)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "width": "600px",
            "height": "237.391px",
            "display": "flex",
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
            "transition": "background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s",
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
              "classes": "elementor-element elementor-element-42090114 elementor-widget__width-initial elementor-widget-laptop__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading",
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
                "width": "540px",
                "height": "96px",
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
                    "fontSize": "24px",
                    "fontWeight": "400",
                    "fontFamily": "Inter, sans-serif",
                    "lineHeight": "24px",
                    "color": "rgb(17, 17, 17)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "width": "540px",
                    "height": "96px",
                    "display": "block",
                    "flexDirection": "row",
                    "border": "0px none rgb(17, 17, 17)",
                    "borderTop": "0px none rgb(17, 17, 17)",
                    "borderBottom": "0px none rgb(17, 17, 17)",
                    "borderLeft": "0px none rgb(17, 17, 17)",
                    "borderRight": "0px none rgb(17, 17, 17)",
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
                  "children": []
                }
              ]
            },
            {
              "tag": "div",
              "id": null,
              "classes": "elementor-element elementor-element-18ef5bf8 elementor-widget__width-inherit elementor-widget-laptop__width-inherit elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor",
              "text": null,
              "styles": {
                "fontSize": "14px",
                "fontWeight": "400",
                "fontFamily": "\"Noto Sans\", sans-serif",
                "lineHeight": "21px",
                "color": "rgb(17, 17, 17)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "width": "600px",
                "height": "35.3906px",
                "maxWidth": "100%",
                "display": "block",
                "flexDirection": "row",
                "border": "0px none rgb(17, 17, 17)",
                "borderTop": "0px none rgb(17, 17, 17)",
                "borderBottom": "0px none rgb(17, 17, 17)",
                "borderLeft": "0px none rgb(17, 17, 17)",
                "borderRight": "0px none rgb(17, 17, 17)",
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
                    "fontSize": "14px",
                    "fontWeight": "400",
                    "fontFamily": "\"Noto Sans\", sans-serif",
                    "lineHeight": "21px",
                    "color": "rgb(17, 17, 17)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "margin": "0px 0px 14.4px",
                    "marginBottom": "14.4px",
                    "width": "600px",
                    "height": "21px",
                    "display": "block",
                    "flexDirection": "row",
                    "border": "0px none rgb(17, 17, 17)",
                    "borderTop": "0px none rgb(17, 17, 17)",
                    "borderBottom": "0px none rgb(17, 17, 17)",
                    "borderLeft": "0px none rgb(17, 17, 17)",
                    "borderRight": "0px none rgb(17, 17, 17)",
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
                  "children": []
                }
              ]
            },
            {
              "tag": "div",
              "id": null,
              "classes": "elementor-element elementor-element-20f144c8 elementor-view-default elementor-widget elementor-widget-icon",
              "text": null,
              "styles": {
                "fontSize": "16px",
                "fontWeight": "400",
                "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                "lineHeight": "24px",
                "color": "rgb(51, 51, 51)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "margin": "0px 15px 0px 0px",
                "marginRight": "15px",
                "width": "50px",
                "height": "56px
```
