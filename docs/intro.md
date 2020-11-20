
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
| Windows 10/8/7      | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/windows/RStudio-1.4.1052.exe"><i class="fa fa-download"></i> RStudio-1.4.1052.exe</a>                       | 149M | <span class="sha256" data-sha256="27c17e518809b440c761653e887b4006f7cf3c3f3645f503ff28db96c0d288e2">27c17e51…</span> |
| MacOS 10.13+        | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/macos/RStudio-1.4.1052.dmg"><i class="fa fa-download"></i> RStudio-1.4.1052.dmg</a>                         | 146M | <span class="sha256" data-sha256="278110b39f19f1bfdbb02e4b9419c9db1b3fd25b8b71de0060b1802e2dc02778">278110b3…</span> |
| Ubuntu 18/Debian 10 | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/bionic/amd64/rstudio-1.4.1052-amd64.deb"><i class="fa fa-download"></i> rstudio-1.4.1052-amd64.deb</a>      | 112M | <span class="sha256" data-sha256="76d87b86409e2dca79b7ec8661b8ffe657efac949e04cda1de4084e7ba3f5161">76d87b86…</span> |
| Fedora 28/Red Hat 8 | <a href="https://s3.amazonaws.com/rstudio-ide-build/desktop/centos8/x86_64/rstudio-1.4.1052-x86_64.rpm"><i class="fa fa-download"></i> rstudio-1.4.1052-x86\_64.rpm</a> | 127M | <span class="sha256" data-sha256="93de296c01ff6ff40414cbf9ed7a53f9f11fe8054fc181a2778044640f15ce89">93de296c…</span> |

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

<table>
<thead>
<tr class="header">
<th>
<p>
Command
</p>
<p>
</p>
</th>
<th style="text-align: center;">
<p>
Keyboard Shortcut
</p>
<p>
</p>
</th>
<th style="text-align: center;">
<p>
Markdown Shortcut
</p>
<p>
</p>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>
<p>
Bold
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌘ B
</p>
</td>
</tr>
<tr class="even">
<td>
<p>
Italic
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌘ I
</p>
</td>
</tr>
<tr class="odd">
<td>
<p>
Code
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌘ D
</p>
</td>
</tr>
<tr class="even">
<td>
<p>
Link
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌘ K
</p>
</td>
</tr>
<tr class="odd">
<td>
<p>
Heading 1
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌥⌘ 1
</p>
</td>
</tr>
<tr class="even">
<td>
<p>
Heading 2
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌥⌘ 2
</p>
</td>
</tr>
<tr class="odd">
<td>
<p>
Heading 3
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌥⌘ 3
</p>
</td>
</tr>
<tr class="even">
<td>
<p>
R Code Chunk
</p>
</td>
<td style="text-align: center;">
<p>
</p>
</td>
<td style="text-align: center;">
<p>
⌥⌘ I
</p>
</td>
</tr>
</tbody>
</table>

See the [keyboard shortcuts](shortcuts) article for a complete list of
all shortcuts.

### Insert Anything

You can also use the catch-all <kbd>⌘ /</kbd> shortcut to insert just
about anything. Just execute the shortcut then type what you want to
insert. For example:

<img src="images/visual-editing-omni-list.png" style="display: inline-block" width="350" />

<img src="images/visual-editing-omni-math.png" style="display: inline-block; margin-bottom: 2px;" width="350" />

If you are at the beginning of a line (as displayed above) you can also
enter plain `/` to invoke the shortcut.

### Editor Toolbar

The editor toolbar includes buttons for the most commonly used
formatting commands:

<img src="images/visual-editing-toolbar.png" width="700" />

Additional commands are available on the **Format**, **Insert**, and
**Table** menus:

<table>
<thead>
<tr class="header">
<th>
<p>
Format
</p>
<p>
</p>
</th>
<th>
<p>
Insert
</p>
<p>
</p>
</th>
<th>
<p>
Table
</p>
<p>
</p>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>
<p>
<img src="images/visual-editing-format-menu.png" />
</p>
</td>
<td>
<p>
<img src="images/visual-editing-insert-menu.png" />
</p>
</td>
<td>
<p>
<img src="images/visual-editing-table-menu.png" />
</p>
</td>
</tr>
</tbody>
</table>

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
    [Bookdown](markdown#bookdown-extensions) and
    [Hugo](markdown#hugo-markdown).

-   [Editing Shortcuts](shortcuts) documents the two types of shortcuts
    you can use with the editor: standard keyboard shortcuts and
    markdown shortcuts.

-   [Editor Options](options) enumerates the various ways you can
    configure the behavior of the editor (font size, display width,
    markdown output, etc.).

-   [Additional Topics](additional) discusses various other features
    including [using CSS](advanced#using-css) within HTML documents.

Thanks for trying out the visual editor! If you encounter problems or
want to suggest features, please let us know at
<https://github.com/rstudio/rstudio/issues/new/choose>.
