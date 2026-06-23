# Veja quem confia na WAID Specification

## Overview
- **Target file:** static section in `index.html` with styles in `styles.css`
- **Screenshot:** `docs/design-references/section-12-veja-quem-confia-na-waid-desktop.png`
- **Interaction model:** static with scroll-reveal; FAQ section is click-driven when applicable.

## DOM Structure
- Top-level section/band containing constrained inner layout.
- Extracted selector: `div.elementor-element.elementor-element-50f6af77`
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
- height: 373px
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
- assets/014-aws-startups-1.png (image/png)
- assets/015-endeavor-scale-up-1.png (image/png)
- assets/016-google-for-startups-1.png (image/png)
- assets/017-nvidia-1.png (image/png)
- assets/014-aws-startups-1.png (image/png)
- assets/015-endeavor-scale-up-1.png (image/png)
- assets/016-google-for-startups-1.png (image/png)
- assets/017-nvidia-1.png (image/png)
- assets/014-aws-startups-1.png (image/png)
- assets/015-endeavor-scale-up-1.png (image/png)
- assets/016-google-for-startups-1.png (image/png)
- assets/017-nvidia-1.png (image/png)

## Text Content (verbatim)
```text
Veja quem confia na WAID
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
  "classes": "elementor-element elementor-element-50f6af77 e-flex e-con-boxed e-con e-parent",
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
    "height": "373px",
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
        "height": "373px",
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
      "childCount": 2,
      "children": [
        {
          "tag": "div",
          "id": null,
          "classes": "elementor-element elementor-element-66f9b01f elementor-widget elementor-widget-heading",
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
            "width": "410.953px",
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
              "text": "Veja quem confia na WAID",
              "styles": {
                "fontSize": "32px",
                "fontWeight": "700",
                "fontFamily": "Inter, sans-serif",
                "lineHeight": "32px",
                "color": "rgb(249, 248, 246)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "width": "410.953px",
                "height": "32px",
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
          "classes": "elementor-element elementor-element-6bb96c2b elementor-widget elementor-widget-image-carousel e-widget-swiper",
          "text": null,
          "styles": {
            "fontSize": "16px",
            "fontWeight": "400",
            "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": "24px",
            "color": "rgb(51, 51, 51)",
            "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            "width": "1200px",
            "height": "131px",
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
              "classes": "elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events",
              "text": null,
              "styles": {
                "fontSize": "16px",
                "fontWeight": "400",
                "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                "lineHeight": "24px",
                "color": "rgb(51, 51, 51)",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                "width": "1200px",
                "height": "131px",
                "display": "block",
                "flexDirection": "row",
                "border": "0px none rgb(51, 51, 51)",
                "borderTop": "0px none rgb(51, 51, 51)",
                "borderBottom": "0px none rgb(51, 51, 51)",
                "borderLeft": "0px none rgb(51, 51, 51)",
                "borderRight": "0px none rgb(51, 51, 51)",
                "overflow": "hidden",
                "overflowX": "hidden",
                "overflowY": "hidden",
                "position": "static",
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
                  "id": "swiper-wrapper-21039b8f7a10ce1b75",
                  "classes": "elementor-image-carousel swiper-wrapper",
                  "text": null,
                  "styles": {
                    "fontSize": "16px",
                    "fontWeight": "400",
                    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                    "lineHeight": "24px",
                    "color": "rgb(51, 51, 51)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "width": "1200px",
                    "height": "131px",
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
                    "zIndex": "1",
                    "opacity": "1",
                    "transform": "matrix(1, 0, 0, 1, -2400, 0)",
                    "transition": "transform",
                    "objectFit": "fill",
                    "objectPosition": "50% 50%",
                    "textOverflow": "clip"
                  },
                  "images": null,
                  "childCount": 12,
                  "children": []
                },
                {
                  "tag": "span",
                  "id": null,
                  "classes": "swiper-notification",
                  "text": "",
                  "styles": {
                    "fontSize": "16px",
                    "fontWeight": "400",
                    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                    "lineHeight": "24px",
                    "color": "rgb(51, 51, 51)",
                    "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                    "display": "block",
                    "flexDirection": "row",
                    "border": "0px none rgb(51, 51, 51)",
                    "borderTop": "0px no
```
