<!-- -*- mode: gfm -*- -->

R Markdown documents are normally authored using standard [Pandoc markdown](https://pandoc.org/MANUAL.html#pandocs-markdown). In addition, there are a number of extensions to Pandoc markdown commonly used (e.g. the [cross-references](https://bookdown.org/yihui/bookdown/cross-references.html) feature of the **bookdown** package). In some cases, an entirely different markdown dialect is used (for example, when writing content to be published on [GitHub](https://github.github.com/gfm/) or with the [Hugo](https://gohugo.io/content-management/formats/) static site generator).

By default, visual mode detects the target markdown format for the current document, making the requisitite editor commands available and writing the expected flavor of markdown source code. This article describes the various available markdown extensions, how to override RStudio's automatic detetction, as well some options that control how markdown source code is written.

## Bookdown Extensions

### Cross References

The [bookdown](https://bookdown.org) package includes markdown extensions for cross-references and part headers. The [blogdown](https://bookdown.org/yihui/blogdown/) package also supports bookdown style cross-references as does the [distill](https://rstudio.github.io/distill/) package.

Bookdown cross-references enable you to easily link to figures, equations, and even arbitrary labels within a document. In raw markdown, you would for example write a cross-reference to a figure like this: `\@ref(fig:label)`. Cross-references are largely the same in visual mode, but you don't need the leading `\` (which in raw markdown is used to escape the `@` character). For example:

<img src="images/visual-editing-xref.png" width="700"/>

The leading `\` will be automatically written into the markdown source by the visual editor. See the bookdown documentation for more information on [cross-references](https://bookdown.org/yihui/bookdown/cross-references.html).

### Part Headers

Bookdown recognizes level 1 headers written with a (PART) prefix as book parts (analogous to the LaTeX `\part{}` command). These work the same in visual mode, but if you use the special extension for unnumbered part headers (written in raw markdown as `(PART\*)`, you don't need to include the escape character for the asterisk. You also should use the explicit `{.unnumbered}` class as opposed to the shorthand `{-}`. For example:

<img src="images/visual-editing-part.png" width="700"/>

See the bookdown documentation for more information on [part headers](https://bookdown.org/yihui/bookdown/markdown-extensions-by-bookdown.html#special-headers).

## Hugo Markdown

The [Hugo](https://gohugo.io/) static site generation framework is commonly used with R Markdown for creating blogs as well as larger websites (for example, the [tidyverse](https://tidyverse.org) and [tidymodels](https://tidymodels.org) websites use Hugo).

The [blogdown](https://bookdown.org/yihui/blogdown/) and [hugodown](https://github.com/r-lib/hugodown) packages both support creating Hugo websites with R Markdown. This section describes visual mode features and considerations for Hugo documents.

### Shortcodes

Hugo includes support for [shortcodes](https://gohugo.io/content-management/shortcodes/), which are special macros generally used to render more complex objects (e.g. tweets or videos). You can include shortcodes in visual mode by just typing them with the normal Hugo syntax:

<img src="images/visual-editing-shortcodes.png" width="700"/>

See the blogdown documentation for more information on [using shortcodes](https://bookdown.org/yihui/blogdown/content.html#shortcode).

### Markdown Engine

If you use normal R Markdown files (`.Rmd`) within a [blogdown](https://bookdown.org/yihui/blogdown/) website, their markdown is processed by Pandoc. However, if you use a plain markdown file (`.md`) or an R Markdown file with a special extension (`.Rmarkdown`), then markdown is processed by Hugo rather than pandoc. If you are using the [hugodown](https://github.com/r-lib/hugodown) package with Hugo, then markdown is also always processed using Hugo.

In this case, RStudio will recognize that you aren't using Pandoc, and adapt the editor's markdown features accordingly (providing only the features supported by [goldmark](https://gohugo.io/getting-started/configuration-markup/#goldmark), the default Hugo markdown engine). The editor will also automatically enclose LaTeX math in backticks (required in order for Hugo to render equations).

## Document Types

The bookdown and Hugo features described above are enabled using automatic detection of document types by RStudio. Detection is done using a combination of the current project configuration and the output formats specified in YAML front-matter. If this automatic detection doesn't align with your configuration, you can specify a document type manually using the `editor_options:markdown` key in YAML front matter.

For example, to specify that your document is being published with blogdown, use:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    doctype: blogdown
---
```

To specify that your document is being published with blogdown, use:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    doctype: hugo
---
```

?\> Note that you typically don't need to use an explicit `doctype`, since RStudio can generally automatically detect this based on the type of your current project.

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

## Line Wrapping

Visual editing mode generates markdown using Pandoc. This means that in some cases your markdown will be *rewritten* to conform to standard Pandoc idioms. For example, Pandoc inserts 3 spaces after list bullets and automatically escapes characters that might be used for markdown syntax.

While this might be bothersome at first, if you decide that visual editing mode is useful for your workflow it's probably best to just adapt to writing your own markdown the same way that Pandoc does. If any of Pandoc's idioms are particularly troublesome, [let us know](https://github.com/rstudio/rstudio/issues/new) and we'll see if we can add an option to override the default behavior.

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
