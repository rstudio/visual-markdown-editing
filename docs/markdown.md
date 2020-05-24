<!-- -*- mode: gfm -*- -->

Visual editing mode generates markdown using Pandoc. This means that in some cases your markdown will be *rewritten* to conform to standard Pandoc idioms. For example, Pandoc writes footnotes at the end of the document, inserts 3 spaces after list bullets, and automatically escapes characters that might be used for markdown syntax.

While this might be bothersome at first, if you decide that visual editing mode is useful for your workflow it's probably best to just adapt to writing your own markdown the same way that Pandoc does. If any of Pandoc's idioms are particularly troublesome, [let us know](https://github.com/rstudio/rstudio/issues/new) and we'll see if we can add an option to override the default behavior.

## Bookdown & Hugo

The [bookdown](https://bookdown.org) package includes markdown extensions for cross-references and part headers. The [blogdown](https://bookdown.org/yihui/blogdown/) package also supports cross-references as well as inline Hugo shortcodes. It's also possible to use blogdown with an [alternate](https://bookdown.org/yihui/blogdown/output-format.html) markdown engine (as opposed to using Pandoc). All of these extensions and alternate configurations are supported by visual mode.

### Cross References

Bookdown cross-references enable you to easily link to figures, equations, and even arbitrary labels within a document. In raw markdown, you would for example write a cross-reference to a figure like this: `\@ref(fig:label)`. Cross-references are largely the same in visual mode, but you don't need the leading `\` (which in raw markdown is used to escape the `@` character). For example:

<img src="images/visual-editing-xref.png" width="700"/>

The leading `\` will be automatically written into the markdown source by the visual editor. See the bookdown documentation for more information on [cross-references](https://bookdown.org/yihui/bookdown/cross-references.html).

### Part Headers

Bookdown recognizes level 1 headers written with a (PART) prefix as book parts (analogous to the LaTeX `\part{}` command). These work the same in visual mode, but if you use the special extension for unnumbered part headers (written in raw markdown as `(PART\*)`, you don't need to include the escape character for the asterisk. You also should use the explicit `{.unnumbered}` class as opposed to the shorthand `{-}`. For example:

<img src="images/visual-editing-part.png" width="700"/>

See the bookdown documentation for more information on [part headers](https://bookdown.org/yihui/bookdown/markdown-extensions-by-bookdown.html#special-headers).

### Hugo Markdown

Under the hood, Blogdown makes use of the [Hugo](https://gohugo.io/) static site generation framework. This introduces a couple of special considerations for visual mode described below.

#### Shortcodes

Hugo includes support for [shortcodes](https://gohugo.io/content-management/shortcodes/), which are special macros generally used to render more complex objects (e.g. tweets or videos). You can include shortcodes in visual mode by just typing them with the normal Hugo syntax:

<img src="images/visual-editing-shortcodes.png" width="700"/>

See the blogdown documentation for more information on [using shortcodes](https://bookdown.org/yihui/blogdown/content.html#shortcode).

#### Markdown Engine

If you use normal R Markdown files (`.Rmd`) within a blogdown website, their markdown is processed by Pandoc. However, if you use a plain markdown file (`.md`) or an R Markdown file with a special extension (`.Rmarkdown`), then markdown is processed by Hugo rather than pandoc.

In this case, RStudio will recognize that you aren't using Pandoc, and adapt the editor's markdown features accordingly (providing only the features supported by [goldmark](https://gohugo.io/getting-started/configuration-markup/#goldmark), the default Hugo markdown engine). The editor will also automatically enclose LaTeX math in backticks (required by blogdown when Pandoc isn't rendering markdown).

Note that if RStudio doesn't correctly detect the use of Hugo's markdown processor, you can explicitly enable this for an individual document using a special format comment. For example:

    <!-- -*- mode: goldmark; doctype: blogdown -*- -->

You can learn more about format comments in the [Markdown Conversion](#markdown-conversion) section below.

## Modes & Extensions

Visual editing mode can author all of the markdown variants supported by Pandoc. By default, features associated with standard Pandoc markdown are enabled. You can change this behavior by including an Emacs-style magic comment in your markdown document. For example, to specify that you'd like to create GitHub Flavored Markdown (Pandoc's "gfm" variant), add this comment:

    <!-- -*- mode: gfm -*- --> 

Add the comment while in source mode (it will be hidden while editing in visual mode). Note that for R Markdown (Rmd) files this comment should be located immediately after the YAML metadata block at the top of the document.

Markdown variants supported by the editor include:

-   markdown
-   markdown\_strict
-   markdown\_phpextra
-   commonmark
-   gfm
-   goldmark
-   blackfriday

You can also specify that particular extensions be enabled or disabled. For example, to specify GitHub Flavored Markdown with additional support for TeX math and raw Tex, you would use this comment:

    <!-- -*- mode: gfm; extensions: +tex_math_dollars+raw_tex -*- --> 

Alternatively, to specify standard Pandoc markdown *without* TeX math and raw TeX, you would use this comment (note the minus sign before the disabled extensions):

    <!-- -*- mode: markdown; extensions: -tex_math_dollars-raw_tex -*- --> 

You can read more about Pandoc variants and extensions in the [Pandoc Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) documentation.

## Document Types

The R Markdown ecosystem has a wide variety of document formats, most of which rely on the core set of Pandoc markdown extensions. However, there are a number of formats that include additional markdown extensions (for example, the cross-reference extension introduced by the [bookdown](https://bookdown.org) package is also supported by the [blogdown](https://bookdown.org/yihui/blogdown/) and [distll](https://rstudio.github.io/distill) packages).

RStudio can generally detect which type of document is being edited and enable the requisite extensions. In the case that this doesn't work as expected, you can specify a `doctype` in the format comment to make it explicit. For example:

    <!-- -*- doctype: blogdown -*- -->

Available doctypes include `xref`, `bookdown`, `blogdown`, and `hugo` (you can specify more than one doctype by separating them with commas). The `xref` doctype specifies any document that supports bookdown cross-references (e.g. distill) and is implied by the `bookdown` and `blogdown` doctypes. The `hugo` doctype indicates a document that supports Hugo shortcodes, and is also implied by the `blogdown` doctype.

Again, you typically don't need to use an explicit `doctype`, since RStudio can generally automatically detect this based on the type of your current project.

## Line Wrapping

By default, the visual editor writes Markdown with no line wrapping (paragraphs all occupy a single line). This matches the behavior of markdown source editing mode within RStudio.

If however you prefer to have paragraphs wrapped at a particular column (e.g. 72 or 80). You can set an option to this effect within the **R Markdown** preferences pane where visual mode is enabled. You can also set this behavior on a per-document basis by including a `fill-column` variable within an Emacs-style magic comment. For example:

    <!-- -*- mode: markdown; fill-column: 72 -*- --> 

Note that there are some disadvantages to setting a `fill-column.` First, editing paragraphs in source mode will be less convenient (because line wrapping will need to done manually). Second, tables with many explicitly sized columns (more than 10 or so) may be written by Pandoc as HTML rather than markdown, which in turn will prevent you from using the visual table editing features.

## Known Limitations

There are a handful of Pandoc markdown extensions not currently supported by visual editing. These are infrequently used extensions so in all likelihood won't affect documents you edit, but are still worth noting.

| Extension            | Example             | Behavior                                 |
|----------------------|---------------------|------------------------------------------|
| Inline footnotes     | ^[inline footnote]  | Converted to numeric footnote.           |
| Footnote identifiers | [^longnote]         | Converted to numeric footnote.           |
| Example lists        | \(@\) First example | Read/written as ordinary numbered lists. |
| Auto-list numbers    | #\. First item      | Read/written as ordinary numbered lists. |
| Reference links      | This is a [link]    | Converted to ordinary links.             |
| Pandoc title block   | % My Title          | Ignored (and dropped from document).     |

In addition, the various MultiMarkdown extensions to Pandoc are not supported (note that these extensions are disabled by default in Pandoc markdown). MultiMarkdown title blocks are ignored and dropped, and MultiMarkdown link attributes and header identifiers are read and converted to Pandoc markdown equivalents.
