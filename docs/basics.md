<!-- -*- mode: gfm -*- -->

Visual mode supports editing all of Pandoc markdown. Standard formatting commands (headings, bold, italic, etc.) work just the way they do in a conventional word-processor. Editing of links, images, blockquotes, lists, tables, etc. is also available. You can access editing commands using either the toolbar or via [shortcuts](shortcuts).

Visual mode also supports editing more advanced Pandoc constructs frequently used in technical writing such as citations, cross-references, footnotes, equations, embedded code, and LaTeX. See the [Technical Writing](technical) article for additional details on using these features.

## Commands

### Keyboard Shortcuts

There are keyboard shortcuts for all basic editing tasks. Visual mode supports both traditional keyboard shortcuts (e.g. <kbd>⌘ B</kbd> for bold) as well as markdown shortcuts (using markdown syntax directly). For example, enclose `**bold**` text in asterisks or type `##` and press space to create a second level heading. Here are some of the most commonly used shortcuts:

| Command      | Keyboard Shortcut | Markdown Shortcut |
|--------------|:-----------------:|:-----------------:|
| Bold         |   <kbd>⌘ B</kbd>  |     `**bold**`    |
| Italic       |   <kbd>⌘ I</kbd>  |     `*italic*`    |
| Code         |   <kbd>⌘ D</kbd>  |    `` `code` ``   |
| Link         |   <kbd>⌘ K</kbd>  |      `<href>`     |
| Heading 1    |  <kbd>⌥⌘ 1</kbd>  |        `#`        |
| Heading 2    |  <kbd>⌥⌘ 2</kbd>  |        `##`       |
| Heading 3    |  <kbd>⌥⌘ 3</kbd>  |       `###`       |
| R Code Chunk |  <kbd>⌥⌘ I</kbd>  |  ```` ```{r} ```` |

See the [keyboard shortcuts](shortcuts) article for a complete list of all shortcuts.

### Insert Anything

You can also use the catch-all <kbd>⌘ /</kbd> shortcut to insert just about anything. Just execute the shortcut then type what you want to insert. For example:

<img src="images/visual-editing-omni-list.png" style="display: inline-block" width="350"/>

<img src="images/visual-editing-omni-math.png" style="display: inline-block; margin-bottom: 2px;" width="350"/>

If you are at the beginning of a line (as displayed above) you can also enter plain `/` to invoke the shortcut.

### Editor Toolbar

The editor toolbar includes buttons for the most commonly used formatting commands:

<img src="images/visual-editing-toolbar.png" width="700"/>

Additional commands are available on the **Format**, **Insert**, and **Table** menus:

| Format                                     | Insert                                     | Table                                     |
|--------------------------------------------|--------------------------------------------|-------------------------------------------|
| ![](images/visual-editing-format-menu.png) | ![](images/visual-editing-insert-menu.png) | ![](images/visual-editing-table-menu.png) |

## Editing Tables

You can insert a table using the **Table** menu. You can then use the either the main menu or a context menu to insert and delete table rows and columns:

<img src="images/visual-editing-table-context.png" width="700"/>

Note that if you select multiple rows or columns the insert or delete command will behave accordingly. For example, to insert 2 rows first select 2 rows then use the insert command.

When you make a selection of multiple rows and/or columns as illustrated above, you can also copy and paste groups of cells within the table.

## Editing Lists

As described above, you can create a new list by just typing `-` or `1.` at the beginning of an empty paragraph. To add items to the list, just press **Enter** within a list item. To exit the list, press **Enter** within an empty list item.

While this covers many simple list editing talks, there are a variety of other actions you may want to take within lists, including creating nested lists and adding paragraphs or code blocks to an exiting list item. From an empty list item (pictured at left), the following keyboard gestures can be used to do this:

| **Empty Item** (*enter to exit list*)                                                               | **Tab** (*add sublist*)                                                                                | **Backspace** (*add block*)                                                                          |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| <img src="images/visual-editing-list-item.png" class="illustration list-illustration" width="217"/> | <img src="images/visual-editing-list-sublist.png" class="illustration list-illustration" width="217"/> | <img src="images/visual-editing-list-block.png" class="illustration list-illustration" width="217"/> |

You can also use **Shift+Tab** to lift a list item into the previous level.

### Tight Lists

Markdown distinguishes between normal and *tight* lists, where tight lists have less vertical spacing between items. In markdown source code, you designate a tight list by having no empty line between your list items.

Visual mode creates normal lists by default, but you can toggle between normal and tight lists using the <kbd>⌥⌘ 9</kbd> keyboard shortcut. You can also change the list type using the **Format -\> Edit Attributes** dialog (also accessible via the <kbd>F4</kbd> shortcut). If you have existing tight lists in your markdown source files they will remain so within the visual editor.

## Pandoc Attributes

Several of Pandoc's block types (e.g. headings, code blocks, and divs) enable you to specify a set of [custom attributes](https://pandoc.org/MANUAL.html#heading-identifiers). Attributes include IDs, class names, as well as arbitrary key-value pairs that are passed through to output formats (e.g. as attributes for HTML tags). For these block types, an edit button will appear at the the top right when your cursor is within the block:

<img src="images/visual-editing-attributes.png" width="700"/>

Note that any ID as well as the first class specified within the attributes are also displayed. Click the edit button or use the <kbd>F4</kbd> keyboard shortcut to edit the attributes.

## Commenting

When reviewing an R Markdown document you often want to provide inline comments with suggested revisions. This is possible in R Markdown using HTML comments (which are ignored by all output formats). Visual mode includes a command for inserting HTML comments as well as special highlighting treatment to easily parse out editing comments from surrounding text.

<img src="images/visual-editing-comment.png" width="700"/>

Note that the \# prefix used in the comment is what triggers the special background highlighting. If you remove the `#` it will still be a valid HTML comment, but just won't be highlighted as shown above.

You can insert an HTML comment using the Comment button on the toolbar or via the <kbd>⇧⌘ C</kbd> keyboard shortcut. Remember, HTML comments won't show up in rendered output so they are ideal both for review but also for leaving yourself to-do notes within a document.

## Symbols

### Smart Punctuation

Most markdown formats support smart punctuation symbols, which causes straight quotes to be interpreted as curly quotes, `--` as en-dashes, `---` as em-dashes, and `...` as ellipses. Visual mode supports these same transformations (so when you type `---` it becomes an em-dash). If you didn't intend for this transformation to occur just hit backspace and it will be reverted.

### Unicode Characters

To insert an arbitrary Unicode character, use **Insert -\> Emoji & Symbol -\> Symbol...**:

<img src="images/visual-editing-unicode.png" width="700"/>

You can search for characters either by name or by entering an explicit Unicode code point (e.g. "U+0420").

## Emojis

To insert an emoji, you can use either the **Insert** menu or use the requisite markdown shortcut plus autocomplete:

| **Insert -\> Emoji & Symbol -\> Emoji...**  | Markdown Shortcut                               |
|---------------------------------------------|-------------------------------------------------|
| ![](images/visual-editing-emoji-dialog.png) | ![](images/visual-editing-emoji-completion.png) |

For markdown formats that support text representations of emojis (e.g. `:grinning:`), the text version will be written. For other formats the literal emoji character will be written. Currently, GitHub Flavored Markdown and Hugo (with `enableEmjoi = true` in the site config) both support text representation of emojis.
