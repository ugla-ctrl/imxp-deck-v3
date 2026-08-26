# IMXP — Investment Overview (design option C)

A fully hand-coded, cinematic web deck for IMXP. Unlike options A and B (which present
the Canva slide images), option C is written from scratch in HTML/CSS/JS with a rewritten,
tightened investor narrative and an animated cosmic backdrop.

- **Design:** dark cosmic theme, live canvas backdrop (drifting starfield + a slow breathing
  eclipse corona), Archivo display type, fade-rise slide transitions.
- **Content:** condensed 13-slide narrative synthesized from the IMXP source deck and the
  content editor. All figures reconciled to source (traction, financials framed as the stated
  "10x by 2028", the ask, team, roadmap).
- **Video:** the Festival-in-a-Box demo plays inline as a native slide.
- **Email gate:** front-end demo gate (nothing sent or saved to a server).

## View

```
https://ugla-ctrl.github.io/imxp-deck-v3/
```

## Navigation

- **← / →**, **Space / Page Down**, **Home / End**
- Swipe on touch, scroll / trackpad, or the dot rail
- Deep-link to any slide with `#<n>`

## Structure

```
index.html          # self-contained deck (one CDN dependency: Google Fonts)
imxp-logo.png       # brand mark
media/fiab.mp4      # Festival-in-a-Box demo (web transcode)
media/fiab-poster.png
.nojekyll
```

## Editing

Content lives directly in `index.html` (the `.slide` sections). Because it is hand-coded,
text edits are immediate and reflow cleanly, no image regeneration required.
