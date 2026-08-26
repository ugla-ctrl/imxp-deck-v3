# IMXP — Investment Overview (design option C)

A fully hand-coded, cinematic web deck for IMXP. Unlike options A and B (which present
the Canva slide images), option C is written from scratch in HTML/CSS/JS with a rewritten,
tightened investor narrative and an animated cosmic backdrop.

- **Design:** pitch-deck style in the source deck's design language (Archivo headlines,
  eyebrow labels, imxp logo top-right, "Fundraise Deck" footer, the Canva pill palette),
  mixing white content slides with full-bleed photo slides.
- **Photos:** real Iceland Eclipse 2026 press photos from the IEpress gallery
  (media/photos/), no generated imagery.
- **Content:** 14 slides taken from the IMXP Content Editor source, figures verbatim.
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
