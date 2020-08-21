<!-- -*- mode: gfm -*- -->

R Markdown documents are normally authored using standard [Pandoc markdown](https://pandoc.org/MANUAL.html#pandocs-markdown). In addition, there are a number of extensions to Pandoc markdown commonly used (e.g. the [cross-references](https://bookdown.org/yihui/bookdown/cross-references.html) feature of the **bookdown** package). In some cases, an entirely different markdown dialect is used (for example, when writing content to be published on [GitHub](https://github.github.com/gfm/) or with the [Hugo](https://gohugo.io/content-management/formats/) static site generator).

By default, visual mode detects the target markdown format for the current document, making the requisite editor commands available and writing the expected flavor of markdown source code. This article describes the various available markdown extensions, how to override RStudio's automatic detection, as well some options that control how [markdown output](markdown?id=markdown-output) is written.

## Bookdown

### Cross References

The [bookdown](https://bookdown.org) package includes markdown extensions for cross-references and part headers. Bookdown cross-references enable you to easily link to figures, equations, and even arbitrary labels within a document.

In raw markdown, you would for example write a cross-reference to a figure like this: `\@ref(fig:label)`. Cross-references are largely the same in visual mode, but you don't need the leading `\` (which in raw markdown is used to escape the `@` character). For example:

<img src="images/visual-editing-xref.png" width="700"/>

As shown above, when entering a cross-reference you can search across all cross-references in your project to easily find the right reference ID.

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

Some aspects of markdown output can be customized via global, project, and file-level options, including:

-   How to wrap / break lines (fixed column, sentence-per-line, etc.)
-   Where to write footnotes (below the current paragraph or section, or at the end of the document).

Using these options is covered in [Markdown Writer Options](markdown#markdown-writer-options) below.

Here is a list of conventions for Pandoc generated markdown that might differ from your own markdown writing style:

-   `*text*` is used in preference to `_text_`
-   Backtick code blocks are written as ```` ``` {.md} ```` rather than ```` ```md ````
-   Backtick code blocks w/ no attributes are rendered as 4-space indented code blocks
-   Plain links are written as `<https://yihui.org>` rather than `https://yihui.org`
-   Numbered and ordered lists use 3 leading spaces before list item content
-   The blockquote character (`>`) is included on each new line of a blockquote
-   Table captions are written below rather than above tables
-   Multiline HTML and TeX blocks use the explicit raw attribute (e.g. ```` ```{=tex} ````)
-   Inline footnotes are replaced with footnotes immediately below the paragraph
-   Nested divs use `:::` at all levels so long as their attributes are distinct
-   Unnumbered sections are designated with `{.unnumered}` rather than `{-}`
-   Characters used for markdown syntax (e.g. `*`, `_`, or `#`) are always escaped

While some of this behavior might be bothersome at first, if you decide that visual editing mode is useful for your workflow it's probably best to just adapt to writing your own markdown the same way that Pandoc does. Note that you can also [configure source mode](markdown#canonical-mode) to write markdown using these conventions, ensuring that the same markdown is written no matter which mode edits originate from

### Markdown Writer Options

#### Line Wrapping

By default, the visual editor writes Markdown with no line wrapping (paragraphs all occupy a single line). This matches the behavior of markdown source editing mode within RStudio.

However, if you prefer to insert line breaks at a particular column (e.g. 72 or 80), or to insert a line break after each sentence, you can set an [editor option](options) to this effect within **R Markdown** preferences.

You can also set this behavior on a per-document basis via the `wrap` option. For example, to wrap lines after 72 characters you would use this:

``` yaml
---
editor_options:
  markdown:
    wrap: 72
---
```

To insert a line break after each sentence, use `wrap: sentence`. For example:

``` yaml
---
editor_options:
  markdown:
    wrap: sentence
---
```

?\> The algorithm used for sentence wrapping will handle English and Japanese text well, but may not detect the end of sentences accurately for other languages.

If you have enabled a global line wrapping option and want to turn off wrapping for a given document, use `wrap: none`.

#### References

By default, references are written at the end of the block where their corresponding footnote appears. You can override this behavior using the `references` option. For example, to write references at the end of sections rather than blocks you would use:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    references: 
      location: block
---
```

Valid values for the `references` option are `block`, `section`, and `document`.

If you are aggregating a set of markdown documents into a larger work, you may want to make sure that reference identifiers are unique across all of your documents (e.g. you don't want to have `[^1]` appear multiple times). You can ensure uniqueness via the `prefix` option. For example:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    references: 
      location: block
      prefix: "mydoc"
---
```

This will result in footnotes in this document using the specified prefix (e.g. `[^mydoc-1]`), ensuring they are globally unique across the manuscript.

?\> Note that if you are within a [bookdown](https://bookdown.org) project then a references `prefix` is applied automatically so no changes to `editor_options` are required.

#### Canonical Mode

If you have a workflow that involves editing in both visual and source mode, you may want to ensure that the same markdown is written no matter which mode edits originate from. You can accomplish this using the `canonical` option. For example:

``` yaml
---
title: "My Document"
editor_options:
  markdown:
    wrap: 72
    references: 
      location: block
    canonical: true
---
```

With `canonical: true`, edits in visual mode and source mode will result in identical markdown output. This is especially useful if you have multiple authors collaborating using version control, with a mixture of source and visual mode editing among the authors.

## Known Limitations

There are a handful of Pandoc markdown extensions not currently supported by visual editing. These are infrequently used extensions so in all likelihood won't affect documents you edit, but are still worth noting.

| Extension(s)             | Example             | Behavior                                 |
|--------------------------|---------------------|------------------------------------------|
| Inline footnotes         | ^[inline footnote]  | Converted to numeric footnote.           |
| Footnote identifiers     | [^longnote]         | Converted to numeric footnote.           |
| Example lists            | \(@\) First example | Read/written as ordinary numbered lists. |
| Auto-list numbers        | #\. First item      | Read/written as ordinary numbered lists. |
| Reference links          | This is a [link]    | Converted to ordinary links.             |
| MultiMarkdown attributes | \# Heading [id]     | Converted to Pandoc attributes.          |

The visual editor is unable to parse non-YAML title blocks (e.g. old-style % titles or MultiMarkdown titles) and also unable to parse non top-level YAML metadata blocks. If these forms of metadata are encountered visual mode will fail to load with a warning.
