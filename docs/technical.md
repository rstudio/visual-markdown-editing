<!-- -*- mode: gfm -*- -->

Visual mode included extensive support for Pandoc features frequently used in technical writing including [citations](#citations), [cross-references](#cross-references), [footnotes](#footnotes), [equations](#equations), [embedded code](#embedded-code), and [LaTeX](#latex-and-html). This articles describes using these features in more depth.

Note that if you are using visual mode with [bookdown](https://bookdown.org), it's strongly recommended that you upgrade to the development version, as it includes important changes required for compatibility with visual mode. You can install the development version as follows:

``` r
devtools::install_github("rstudio/bookdown", upgrade="always")
```

## Citations

R Markdown supports bibliographies in a wide variety of formats including BibTeX, EndNote, and CSL. Add a bibliography to your document using the `bibliography` YAML metadata field. For example:

``` yaml
---
title: "My Document"
bibliography: references.bib
---
```

Once you have a bibliography, you can include citations in visual mode using the standard Pandoc `[@citation]` syntax for citations (where "citation" is replaced by the ID of a citation within your bibliography):

<img src="images/visual-editing-citations.png" width="700"/>

As illustrated above, when entering a citation you can search your bibliography to make it easier to locate a citation even if you don't remember it's specific ID.

Once you've inserted a citation, place the cursor over it to see a preview of it along with a link to the source if one is available:

<img src="images/visual-editing-cite-popup.png" width="700"/>

### Citations from DOIs

If you are using a BibTeX bibliography (.bib extension) you can also insert citations for works not currently in your bibliography by providing a [DOI](https://www.doi.org/) (Document Object Identifier). Just paste the DOI after the `@` and it will be automatically looked up. For example:

<img src="images/visual-editing-citations-doi.png" width="700"/>

Once you've confirmed that it's the correct work (and possibly modified the suggested ID), the citation will be inserted into the document and an entry for the work added to your BibTeX file.

## Cross References

The [bookdown](https://bookdown.org) package includes markdown extensions for cross-references and part headers. The [blogdown](https://bookdown.org/yihui/blogdown/) package also supports bookdown style cross-references as does the [distill](https://rstudio.github.io/distill/) package.

Bookdown cross-references enable you to easily link to figures, equations, and even arbitrary labels within a document. In raw markdown, you would for example write a cross-reference to a figure like this: `\@ref(fig:label)`. Cross-references are largely the same in visual mode, but you don't need the leading `\` (which in raw markdown is used to escape the `@` character). For example:

<img src="images/visual-editing-xref.png" width="700"/>

As shown above, when entering a cross-reference you can search across all cross-references in your project to easily find the right reference ID.

Similar to hyperlinks, you can also navigate to the location of a cross-reference by clicking the popup link that appears when it's selected:

<img src="images/visual-editing-xref-navigate.png" width="700"/>

See the bookdown documentation for more information on [cross-references](https://bookdown.org/yihui/bookdown/cross-references.html).

## Footnotes

You can include footnotes using the **Insert -\> Footnote** command. Footnote editing occurs in a pane immediately below the main document:

<img src="images/visual-editing-footnote.png" class="illustration" width="700"/>

?\> By default footnotes will be written in markdown immediately below the block in which they appear. You can customize this behavior via [editor options](options). Note also that if you are using visual mode with a [bookdown](https://bookdown.org) project, please see the discussion on [footnote handling](markdown#footnotes) for bookdown.

## Equations

LaTeX equations are authored using standard Pandoc markdown syntax (the editor will automatically recognize the syntax and treat the equation as math). When you aren't directly editing an equation it will appear as rendered math:

<img src="images/visual-editing-math.png" width="700"/>

As shown above, when you select an equation with the keyboard or mouse you can edit the equation's LaTeX. A preview of the equation will be shown below it as you type.

## Embedded Code

Source code which you include in an R Markdown document can either by for display only or can be executed by knitr as part of rendering. Code can furthermore be either inline or block (e.g. an Rmd code chunk).

### Displaying Code

To display but not execute code, either use the **Insert -\> Code Block** menu item, or start a new line and type either:

1.  ```` ``` ```` (for a plain code block); or
2.  ```` ```<lang> ```` (where \<lang\> is a language) for a code block with syntax highlighting.

Then press the **Enter** key. To display code inline, simply surround text with backticks (`` `code` ``), or use the **Format -\> Code** menu item.

### Code Chunks

To insert an executable code chunk, use the **Insert -\> Code Chunk** menu item, or start a new line and type:

```` ```{r} ````

Then press the **Enter** key. Note that `r` could be another language supported by knitr (e.g. `python` or `sql`) and you can also include a chunk label and other chunk options.

To include inline R code, you just create normal inline code (e.g. by using backticks or the <kbd>⌘ D</kbd> shortcut) but preface it with `r`. For example, this inline code will be executed by knitr: `` `r Sys.Date()` ``. Note that when the code displays in visual mode it won't have the backticks (but they will still appear in source mode).

### Running Chunks

You can execute the currently selected R or Python code chunk using either the run button at the top right of the code chunk or using the <kbd>⇧⌘ Enter</kbd> keyboard shortcut:

<img src="images/visual-editing-execute-code.png" width="700"/>

You can execute code chunks up to the current one using the toolbar button or using the <kbd>⌥⌘ P</kbd> keyboard shortcut.

?\> You may note that code chunk execution in visual mode is not as full featured as in source mode (e.g. chunk output goes to the console rather than inline, you can execute entire chunks but not individual lines, etc.). Additional chunk execution features are under development and will be added soon.

## LaTeX and HTML

You can also include raw LaTeX commands or HTML tags when authoring in visual mode. The raw markup will be automatically recognized and syntax highlighted For example:

<img src="images/visual-editing-raw.png" width="700"/>

The above examples utilize *inline* LaTex and HTML. You can also include blocks of raw content using the commands on the **Format -\> Raw** menu. For example, here is a document with a raw LaTeX block:

<img src="images/visual-editing-latex-block.png" width="700"/>

?\> Note that Pandoc ignores LaTeX commands when not producing LaTeX based output, and ignores HTML tags when not producing HTML based output.