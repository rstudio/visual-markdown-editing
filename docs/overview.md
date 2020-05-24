<!-- -*- mode: gfm -*- -->

# Visual R Markdown Editing {docsify-ignore}

RStudio v1.4 includes an experimental visual markdown editing mode. R Markdown users that write longer-form documents often use tools like Typora (or even Google Docs) for composition. Visual editing mode provides an alternative that is seamlessly integrated with RStudio. Features of visual mode include:

-   Support for all of Pandoc markdown, including tables, footnotes, citations, divs/spans, definition lists, id/class attributes, equations, TeX, and HTML.

-   Markdown expressions (e.g. `##`, `**bold**`, etc.) can be used within the visual editor for formatting.

-   Tight integration with source editing (when you switch between modes your editing location is preserved).

Visual mode currently supports executing R and Python code chunks in the console, but does not yet provide R code intelligence (e.g. code completion) or inline chunk output. As such, the feature is aimed mostly at savvy/experienced markdown users that want more productive editing of long-form documents and less so at newer users and/or users that are primarily executing code. Additional code editing features will be added in subsequent releases.

## Getting Started

Visual markdown editing is currently only available in the daily build of RStudio (v1.4.377 or later). You can download the most recent daily build here: <https://dailies.rstudio.com>.

Visual markdown editing is not available by default. To enable it, use the **R Markdown** tab of RStudio Preferences:

<img src="images/visual-editing-pref.png" class="illustration" width="588"/>

Once you've enabled visual editing, you can switch between source and visual mode using the button at the top-right of the document toolbar (there is also a keyboard shortcut, <kbd>⌃⇧ F8</kbd>, that can be used to switch modes):

<img src="images/visual-editing.png" width="700"/>

### Editor Toolbar

The editor toolbar includes buttons for the most commonly used formatting commands:

<img src="images/visual-editing-toolbar.png" width="700"/>

Additional commands are available on the Format, Insert, and Table menus:

| Format                                     | Insert                                     | Table                                     |
|--------------------------------------------|--------------------------------------------|-------------------------------------------|
| ![](images/visual-editing-format-menu.png) | ![](images/visual-editing-insert-menu.png) | ![](images/visual-editing-table-menu.png) |

## Learning More

Check out the following aritlces to learn more about visual markdown editing:

-   [Editing](editing) goes into more depth on visual editor support for tables, images, footnotes, citations, embedded code, equations, HTML & Tex, and more.

-   [Markdown](markdown) describes how the visual editor parses and writes markdown, and also includes some tips for usage with [Bookdown and Hugo](markdown#bookdown-amp-hugo).

-   [Shortcuts](shortcuts) documents the two types of shortcuts you can use with the editor: standard keyboard shortcuts and markdown shortcuts.

-   [Options](options) enumerates the various ways you can configure the behavior of the editor (font size, display width, markdown writing, etc.).

Thanks for trying out the visual editor! If you encounter problems or want to suggest features, please let us know at <https://github.com/rstudio/rstudio/issues/new/choose>.
