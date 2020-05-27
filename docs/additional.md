<!-- -*- mode: gfm -*- -->

## CSS Styles

## Centering Images

Pandoc Markdown doesn't include a formatting directive for centering block level images. Nevertheless, there are a couple of ways to accomplish this:

1.  You can use the [knitr](https://yihui.name/knitr) `include_graphics()` function along with the `fig.align='center'` chunk option. This technique has the benefit of working for both HTML and LaTeX output.

2.  You can add CSS styles that center the image (note that this technique works only for HTML output).

### Knitr include\_graphics

To center an image using the `knitr::include_graphics()` function, include it within an R code chunk that has the `fig.align='center'` option (and perhaps other options to control width, etc.). For example:

<img src="images/visual-editing-image-center-knitr.png" width="700"/>

Be sure to include the `echo = FALSE` chunk option to prevent the chunk source code from being printed.

### Centering with CSS

You can also use CSS classes or inline styles to center an image (note again that this will work only for HTML output). To do this, double-click the image (or use the <kbd>⇧⌘ I</kbd> shortcut with an image selected) and apply the `display: block; margin: 1em auto` CSS styles to the image:

<img src="images/visual-editing-image-center-css.png" width="700"/>

?\> As described in the [CSS Styles](#css-styles) section above, you can also create a CSS class that encompasses these styles (e.g. `.image-centered`) and provide that class name rather than inline styles as illustrated above.
