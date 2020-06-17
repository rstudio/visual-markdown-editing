<!-- -*- mode: gfm -*- -->

R Markdown documents are normally authored using standard [Pandoc markdown](https://pandoc.org/MANUAL.html#pandocs-markdown). In addition, there are a number of extensions to Pandoc markdown commonly used (e.g. the [cross-references](https://bookdown.org/yihui/bookdown/cross-references.html) feature of the **bookdown** package). In some cases, an entirely different markdown dialect is used (for example, when writing content to be published on [GitHub](https://github.github.com/gfm/) or with the [Hugo](https://gohugo.io/content-management/formats/) static site generator).

By default, visual mode detects the target markdown format for the current document, making the requisite editor commands available and writing the expected flavor of markdown source code. This article describes the various available markdown extensions, how to override RStudio's automatic detection, as well some options that control how [markdown output](markdown?id=markdown-output) is written.

## Bookdown

### Footnotes

Visual mode writes markdown footnotes using numeric identifiers. This can pose problems for bookdown projects, which require that footnotes are unique across all chapters (this is normally accomplished using either inline or labeled footnotes).

This issue has been resolved in the development version of bookdown, which you can install as follows:

``` r
devtools::install_github("rstudio/bookdown", upgrade="always")
```

Note that the resolution of this issue requires that pandoc be invoked using the [`--file-scope`](https://pandoc.org/MANUAL.html#option--file-scope) option, which in turn introduces the constaint that footnotes and reference links will not work across files.

So for example a link of the form `[Introduction](#introduction)` would work fine, but the shorthand reference link `[Introduction]` would not work when referencing a section in another chapter. Note that shorthand reference links are already generally advised against in the bookdown manual (as they often break when section titles change).

### Cross References

The [bookdown](https://bookdown.org) package includes markdown extensions for cross-references and part headers. The [blogdown](https://bookdown.org/yihui/blogdown/) package also supports bookdown style cross-references as does the [distill](https://rstudio.github.io/distill/) package.

Bookdown cross-references enable you to easily link to figures, equations, and even arbitrary labels within a document. In raw markdown, you would for example write a cross-reference to a figure like this: `\@ref(fig:label)`. Cross-references are largely the same in visual mode, but you don't need the leading `\` (which in raw markdown is used to escape the `@` character). For example:

<img src="images/visual-editing-xref.png" width="700"/>

The leading `\` will be automatically written into the markdown source by the visual editor. See the bookdown documentation for more information on [cross-references](https://bookdown.org/yihui/bookdown/cross-references.html).

### 

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

?\> If are using an older version of Hugo that uses [blackfriday](https://github.com/russross/blackfriday) rather than goldmark (or have blackfriday explicitly configured as your default renderer), then this should be automatically detected by RStudio.

#### Math

Embedding LaTeX math using `$...$` or `$$...$$` is not supported out of the box by [goldmark](https://gohugo.io/getting-started/configuration-markup/#goldmark). However, many commonly used Hugo themes (e.g [Academic](https://themes.gohugo.io/academic/)) do provide rendering of LaTeX math.

Another method for embedding LaTeX math in Hugo websites is to embed math expressions within code marks (e.g. `` `$\sqrt{x}=25$` ``). This method is described in more detail at <https://yihui.org/en/2018/07/latex-math-markdown/.> Typically this code is included in a Hugo page footer as described [here](https://bookdown.org/yihui/blogdown/templates.html#how-to).

Visual mode will detect the use of math-in-code via the presence of the `layouts/partials/footer_mathjax.html` file in the theme directory and automatically read and write math with backtick delimiters.

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

Document types are a high level way of expressing a core markdown mode (e.g. `markdown` or `gfm`) and a set of markdown extensions. You can also perform this configuration explicitly (specifying arbitrary combinations of extensions), as described in the section below on [Modes & Extensions](#/markdown?id=modes-amp-extensions)

?\> Note that you typically don't need to use an explicit `doctype` or otherwise do any configuration of modes or extensions, since RStudio can almost always correctly detect this based on the current project and document.

## Modes & Extensions

Visual editing mode can author all of the markdown variants supported by Pandoc. By default, features associated with standard Pandoc markdown are enabled. You can change this behavior by adding an `editor_options:markdown` key a document's YAML front-matter.

### Mode

The `mode` option specifies the base flavor of markdown you are editing. For example, to edit GitHub Flavored Markdown, you would use the following:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    mode: gfm
---
```

Markdown modes supported by the editor include:

| Mode                | Description                                         |
|---------------------|-----------------------------------------------------|
| `markdown`          | Pandoc markdown w/ all standard extensions enabled. |
| `markdown_strict`   | Original markdown behavior (from Markdown.pl)       |
| `markdown_phpextra` | PHP Markdown Extra                                  |
| `commonmark`        | Standard specification of core markdown features.   |
| `gfm`               | GitHub Flavored Markdown                            |
| `goldmark`          | Goldmark (default parser currently used by Hugo)    |
| `blackfriday`       | Blackfriday (default parser formerly used by Hugo)  |

### Extensions

The `extensions` option allows you to enable or disable individual Pandoc extensions. For example, to specify GitHub Flavored Markdown with additional support for TeX math and raw Tex, you would use this comment:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    mode: gfm
    extensions: +tex_math_dollars+raw_tex
---
```

Alternatively, to specify standard Pandoc markdown *without* TeX math and raw TeX, you would use this configuration (note the minus sign before the disabled extensions):

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    mode: markdown
    extensions: -tex_math_dollars-raw_tex
---
```

You can read more about Pandoc variants and extensions in the [Pandoc Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) documentation.

Many R Markdown formats include an `md_extensions` option used to specify which Pandoc markdown extensions are active. The visual editor will also inspect this option. For example, emojis will be enabled for this configuration:

``` yaml
---
title: "My Document"
output:
  html_document:
    md_extensions: +emoji
---
```

You can also explicitly enable R Markdown specific extensions using the `rmd_extensions` option. For example, to enable bookdown cross references you would use this configuration:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    rmd_extensions: +bookdown_cross_references
---
```

Similarly, you can include `+tex_math_dollars_in_code` to specify that LaTeX math should be enclosed in code backticks.

### Magic Comment Syntax

If you are using a markdown rendered that doesn't either process or ignore YAML metadata, you can also specify all of the above using an Emacs style magic comment. Returning to our original example of adding Tex features to GitHub Flavored Markdown, the magic comment version would look like this:

    <!-- -*- mode: gfm; extensions: +tex_math_dollars+raw_tex -*- -->

Note the semicolon (`;`) used to delimit the `mode` and `extensions` options.

## Markdown Output

Visual editing mode generates markdown using Pandoc. This means that in some cases your markdown will be *rewritten* to conform to standard Pandoc idioms. For example, Pandoc inserts 3 spaces after list bullets and automatically escapes characters that might be used for markdown syntax.

While this might be bothersome at first, if you decide that visual editing mode is useful for your workflow it's probably best to just adapt to writing your own markdown the same way that Pandoc does. If any of Pandoc's idioms are particularly troublesome, [let us know](https://github.com/rstudio/rstudio/issues/new) and we'll see if we can add an option to override the default behavior.

### Line Wrapping

By default, the visual editor writes Markdown with no line wrapping (paragraphs all occupy a single line). This matches the behavior of markdown source editing mode within RStudio.

If however you prefer to have paragraphs wrapped at a particular column (e.g. 72 or 80). You can set an [editor option](options) to this effect within the **R Markdown** preferences pane where visual mode is enabled.

You can also set this behavior on a per-document basis via the `wrap_column` option.

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    wrap_column: 72
---
```

!\> Note that if you specify a `wrap_column`, tables with many explicitly sized columns may be written by Pandoc as HTML rather than markdown. This is because Pandoc wants to accurately reflect the relative column sizes, which might not be possible with a smaller number of columns.

### References

By default, references are written at the end of the block where their corresponding footnote appears. You can override this behavior using the `references` option. For example, to write references at the end of sections rather than blocks you would use:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    references: section
---
```

Valid values for the `references` option are `block`, `section`, and `document`.

## Canonical Mode

If you have a workflow that involves editing in both visual and source mode, you may want to ensure that the same markdown is written no matter which mode edits originate from. You can accomplish this using the `canonical` option. For example:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    wrap_column: 72
    references: block
    canonical: true
---
```

With `canonical: true`, edits in visual mode and source mode will result in identical markdown output. This is especially useful if you have multiple authors collaborating using version control, with a mixture of source and visual mode editing among the authors.

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
