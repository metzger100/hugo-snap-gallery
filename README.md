# hugo-simple-gallery

Automagical css image gallery in [Hugo](https://gohugo.io/) using shortcodes. Lightweight, slim and fully local JavaScript.

## Features

- Custom `{{< simple-gallery >}}` shortcode that allows to display multiple images
- Two modes:
  - **slideshow** displaying only one image at a time with the ability to navigate
  - **gallery** displaying all selected pictures next to each other
- All pictures can be expanded on click in a lightbox
- Manually define the images you want to display, or provide the path to a directory to use all images inside. This can be combined!
- Next/prev buttons in slideshow and lightbox views
- The gallery is responsive, arrangement of tiles is dynamic to the screensize
- Multiple galleries/slideshows per page supported, no interference
- Automatic rotation of slideshow with a configurable interval. Can also be disabled.
- Supports captions, which are also used as title metadata for SEO (adds HTML attribute to the <img> element).

## Installation

Use this like an additional Hugo theme, so add it to the `theme` config. Example:

```
theme = [ "hugo-sustain", "hugo-simple-gallery" ]
```

## `{{< simple-gallery >}}` shortcode usage

Quickstart:

- `{{< simple-gallery src="image1.jpg, image2.png" >}}`: Display these two images in **gallery** mode
- `{{< simple-gallery src="img/folder1/" mode="slideshow" >}}`: Display these two images in **slideshow** mode
- `{{< simple-gallery src="img/folder2/, image2.png" >}}`: Display all images in the directory `img/folder1` and the single image `image2.png` in **gallery** mode

All parameters:

- `src`: Must contain either a comma-separated list of paths to images, or a directory path containing images. Note that the paths are absolute, so imagine a `/` in front of them. Also note that the shortcode assumes that they are all stored in `/static/`.
- `lightbox`: Whether a click on an image shall open a lightbox modal, which displays captions if given and provides arrows to slide through the gallery including a numbertext to show which image of the gallery is displayed ("4/13"). Default: `true`.
- `caption`: Example `{{< snap-gallery src="img/folder2/,  image2.png" caption="map[img/folder2/image1.jpg:{'Image 1'}, image2.png:{'Image 2'}]" >}}` Default: `map[]`.
- `mode`: Can be either `gallery` or `slideshow`. Default: `gallery`.
- `slideshowrotate`: Whether the slideshow shall automatically rotate through the images. Default: `true`.

**Note: Boolean values (`true`/`false`) must be provided without surrounding `"` characters!** `lightbox=false` disables the lightbox, while `lightbox="false"` does not.

## Credits

This is a rewrite of [Max Mehl`s - snap gallery](https://src.mehl.mx/mxmehl/hugo-snap-gallery)
