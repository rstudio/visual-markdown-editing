
<h1>

Visual R Markdown

</h1>

RStudio v1.4 includes a new visual markdown editing mode. Highlights of
visual mode include:

-   Visual editing for all of Pandoc markdown, including tables,
    divs/spans, definition lists, attributes, etc.

-   Extensive support for citations, including integration with Zotero
    and the ability to insert citations from DOIs or searches of PubMed,
    Crossref, and DataCite.

-   Scientific and technical writing features, including
    cross-references, footnotes, equations, code execution, and embedded
    LaTeX.

-   Writing productivity features, including real time spell-checking
    and outline navigation.

-   Tight integration with source editing (editing location and
    undo/redo state are preserved when switching between modes).

-   Rich keyboard support. In addition to traditional shortcuts, you can
    use markdown expressions (e.g. `##`, `**bold**`, etc.) for
    formatting. If you don’t remember all of the keyboard shortcuts, you
    can also use the catch-all <kbd>⌘ /</kbd> shortcut to insert
    anything.

## Getting Started

Visual markdown editing is currently only available in the [preview
release](https://rstudio.com/products/rstudio/download/preview/) of
RStudio. You can download the desktop version of the preview release
here:

| Platform            | Download                                                                                                                                                                | Size | SHA-256                                                                                                              |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|:---------------------------------------------------------------------------------------------------------------------|
| Windows 10/8/7      | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/windows/RStudio-1.4.1090.exe"><i class="fa fa-download"></i> RStudio-1.4.1090.exe</a>                       | 149M | <span class="sha256" data-sha256="e714c458098679e0a598f2ac91fd20c655b7abaffb79b3905f3128ac9168b37e">e714c458…</span> |
| MacOS 10.13+        | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/macos/RStudio-1.4.1090.dmg"><i class="fa fa-download"></i> RStudio-1.4.1090.dmg</a>                         | 146M | <span class="sha256" data-sha256="a4c532cf28410946045951022c0408d5d8b7ac69bb42242f597d9926d307e9ae">a4c532cf…</span> |
| Ubuntu 18/Debian 10 | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/bionic/amd64/rstudio-1.4.1090-amd64.deb"><i class="fa fa-download"></i> rstudio-1.4.1090-amd64.deb</a>      | 116M | <span class="sha256" data-sha256="a3f4c4509f9915057c59f86ec0b396db121a1b193256fb5864c7c13a0820310c">a3f4c450…</span> |
| Fedora 28/Red Hat 8 | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/centos8/x86_64/rstudio-1.4.1090-x86_64.rpm"><i class="fa fa-download"></i> rstudio-1.4.1090-x86\_64.rpm</a> | 132M | <span class="sha256" data-sha256="52ad402d5835ba40d36e87459ada4f510c7765fce45f9775c678a36dc482d5d8">52ad402d…</span> |

For other platforms or RStudio Server, please visit
<https://rstudio.com/products/rstudio/download/preview/>.

### Enabling Visual Mode

Markdown documents can be edited in either source or visual mode. To
switch into visual mode for a given document, use the
<kbd><img src="images/visual_mode_2x.png" width="15" height="13" /></kbd>
button at the top-right of the document toolbar (or alternatively the
<kbd>⌘⇧ F4</kbd> keyboard shortcut):

<img src="images/visual-editing.png" width="700" />

Note that you can switch between source and visual mode at any time
(editing location and undo/redo state will be preserved when you
switch).

## Using the Editor

### Keyboard Shortcuts

There are keyboard shortcuts for all basic editing tasks. Visual mode
supports both traditional keyboard shortcuts (e.g. <kbd>⌘ B</kbd> for
bold) as well as markdown shortcuts (using markdown syntax directly).
For example, enclose `**bold**` text in asterisks or type `##` and press
space to create a second level heading. Here are some of the most
commonly used shortcuts:

| Command      | Keyboard Shortcut | Markdown Shortcut |
|--------------|:-----------------:|:-----------------:|
| Bold         |  <kbd>⌘ B</kbd>   |    `**bold**`     |
| Italic       |  <kbd>⌘ I</kbd>   |    `*italic*`     |
| Code         |  <kbd>⌘ D</kbd>   |   `` `code` ``    |
| Link         |  <kbd>⌘ K</kbd>   |     `<href>`      |
| Heading 1    |  <kbd>⌥⌘ 1</kbd>  |        `#`        |
| Heading 2    |  <kbd>⌥⌘ 2</kbd>  |       `##`        |
| Heading 3    |  <kbd>⌥⌘ 3</kbd>  |       `###`       |
| R Code Chunk |  <kbd>⌥⌘ I</kbd>  | ```` ```{r} ````  |

See the [keyboard shortcuts](shortcuts) article for a complete list of
all shortcuts.

### Insert Anything

You can also use the catch-all <kbd>⌘ /</kbd> shortcut to insert just
about anything. Just execute the shortcut then type what you want to
insert. For example:

<img src="images/visual-editing-omni-list.png" style="display: inline-block" width="350" />

<img src="images/visual-editing-omni-math.png" style="display: inline-block; margin-bottom: 2px;" width="350" />

If you are at the beginning of a line (as displayed above), you can also
enter plain `/` to invoke the shortcut.

### Editor Toolbar

The editor toolbar includes buttons for the most commonly used
formatting commands:

<img src="images/visual-editing-toolbar.png" width="700" />

Additional commands are available on the **Format**, **Insert**, and
**Table** menus:

| Format                                     | Insert                                     | Table                                     |
|--------------------------------------------|--------------------------------------------|-------------------------------------------|
| ![](images/visual-editing-format-menu.png) | ![](images/visual-editing-insert-menu.png) | ![](images/visual-editing-table-menu.png) |

## Learning More

Check out the following articles to learn more about visual markdown
editing:

-   [Citations](citations) covers citing other works and managing
    bibliographies, as well as integration with
    [Zotero](https://www.zotero.org/) (an open source reference
    management tool).

-   [Technical Writing](technical) covers features commonly used in
    scientific and technical writing, including cross-references,
    footnotes, equations, embedded code, and LaTeX.

-   [Content Editing](content) provides more depth on visual editor
    support for tables, lists, pandoc attributes, comments,
    symbols/emojis, etc.

-   [Markdown Formats](markdown) describes how the visual editor parses
    and writes markdown, and also includes some tips for usage with
    [Bookdown](markdown#bookdown) and [Hugo](markdown#hugo-markdown).

-   [Editing Shortcuts](shortcuts) documents the two types of shortcuts
    you can use with the editor: standard keyboard shortcuts and
    markdown shortcuts.

-   [Editor Options](options) enumerates the various ways you can
    configure the behavior of the editor (font size, display width,
    markdown output, etc.).

-   [Additional Topics](additional) discusses various other features
    including [using CSS](additional#css-styles) within HTML documents.

Thanks for trying out the visual editor! If you encounter problems or
want to suggest features, please let us know at
<https://github.com/rstudio/rstudio/issues/new/choose>.
