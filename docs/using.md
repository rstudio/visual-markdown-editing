<!-- -*- mode: gfm -*- -->

Visual mode has direct editing support for all of Pandoc markdown. Standard formatting commands (headings, bold, italic, etc.) work just the way they do in a conventional word-processor. You can access editing commands using either the [toolbar](overview#editor-toolbar) or via [shortcuts](shortcuts).

Visual mode also supports editing more advanced Pandoc constructs frequently used in technical writing (footnotes, citations, embedded code, equations, HTML & Tex, etc.). This article describes these features, as well as provides more detail on editing more complex content like images, tables, and lists.

## Citations & Footnotes

You can include citations using the standard Pandoc syntax for citations:

<img src="images/visual-editing-citations.png" width="700"/>

You can include footnotes using the **Insert -\> Footnote** command. Footnote editing occurs in a pane immediately below the main document.

## TeX Math & Commands

TeX math is authored using standard Pandoc markdown syntax (the editor will automatically recognize the syntax and create the appropriate constructs). For example, here's some inline and display math:

<img src="images/visual-editing-math.png" width="700"/>

You can also include raw TeX commands when authoring in visual mode. The raw markup will be automatically recognized and syntax highlighted For example:

<img src="images/visual-editing-raw.png" width="700"/>

You can also include inline and block raw content of any output format supported by Pandoc (e.g. html, rtf or openxml) using the commands on the **Format -\> Raw** menu

## Typography

Most markdown formats support smart typography, which causes straight quotes to be interpreted as curly quotes, `--` as en-dashes, `---` as em-dashes, and `...` as ellipses. Visual mode supports these same transformations (so when you type `---` it becomes an em-dash). If you didn't intend for this transformation to occur just hit backspace and it will be reverted.


## Pandoc Attributes

Several of Pandoc's block types (e.g. headings, code blocks, and divs) enable you to specify a set of [custom attributes](https://pandoc.org/MANUAL.html#heading-identifiers). Attributes include IDs, class names, as well as arbitrary key-value pairs that are passed through to output formats (e.g. as attributes for HTML tags). For these block types, an edit button will appear at the the top right when your cursor is within the block:

<img src="images/visual-editing-attributes.png" width="700"/>

Note that any ID as well as the first class specified within the attributes are also displayed. Click the edit button or use the <kbd>F4</kbd> keyboard shortcut to edit the attributes.

## Commenting

When reviewing an R Markdown document you often want to provide inline comments with suggested revisions. This is possible in R Markdown using HTML comments (which are ignored by all output formats). Visual mode includes a command for inserting HTML comments as well as special highlighting treatment to easily parse out editing comments from surrounding text.

<img src="images/visual-editing-comment.png" width="700"/>

Note that the \# prefix used in the comment is what triggers the special background highlighting. If you remove the `#` it will still be a valid HTML comment, but just won't be highlighted as shown above.

You can insert an HTML comment using the Comment button on the toolbar or via the <kbd>⇧⌘ C</kbd> keyboard shortcut. Remember, HTML comments won't show up in rendered output so they are ideal both for review but also for leaving yourself to-do notes within a document.

## Editing Tables

You can insert a table using the **Table** menu. You can then use the either the main menu or a context menu to insert and delete table rows and columns:

<img src="images/visual-editing-table-context.png" width="700"/>

Note that if you select multiple rows or columns the insert or delete command will behave accordingly. For example, to insert 2 rows first select 2 rows then use the insert command.

## Editing Lists

As described above, you can create a new list by just typing `-` or `1.` at the beginning of an empty paragraph. To add items to the list, just press **Enter** within a list item. To exit the list, press **Enter** within an empty list item.

While this covers many simple list editing talks, there are a variety of other actions you may want to take within lists, including creating nested lists and adding paragraphs or code blocks to an exiting list item. From an empty list item (pictured at left), the following keyboard gestures can be used to do this:

| **Empty Item** (*enter to exit list*)                                                               | **Tab** (*add sublist*)                                                                                | **Backspace** (*add block*)                                                                          |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| <img src="images/visual-editing-list-item.png" class="illustration list-illustration" width="217"/> | <img src="images/visual-editing-list-sublist.png" class="illustration list-illustration" width="217"/> | <img src="images/visual-editing-list-block.png" class="illustration list-illustration" width="217"/> |

You can also use **Shift+Tab** to lift a list item into the previous level.


## Embedded Code

Source code which you include in an R Markdown document can either by for display only or can be executed by knitr as part of rendering. Code can furthermore be either inline or block (e.g. an Rmd code chunk).

### Displaying Code

To display but not execute code, either use the **Insert -\> Code Block** menu item, or start a new line and type either:

1.  ```` ``` ```` (for a plain code block); or
2.  ```` ```<lang> ```` (where \<lang\> is a language) for a code block with syntax highlighting.

Then press the **Enter** key. To display code inline, simply surround text with backticks (`` `code` ``), or use the **Format -\> Code** menu item.

### Executing Code

To insert an executable code chunk, use the **Insert -\> Rmd Chunk** menu item, or start a new line and type:

```` ```{r} ````

Then press the **Enter** key. Note that `r` could be another language supported by knitr (e.g. `python` or `sql`) and you can also include a chunk label and other chunk options.

To include inline R code, you just create normal inline code (as described above) but preface it with `r`. For example, this inline code will be executed by knitr: [r Sys.Date()]{.fake-code}. Note that when the code displays in the visual editor it won't have the backticks (but they will still appear in source mode).

### Running Chunks

You can execute the currently selected R or Python code chunk using either the run button at the top right of the code chunk or using the <kbd>⇧⌘ Enter</kbd> keyboard shortcut:

<img src="images/visual-editing-execute-code.png" width="700"/>

You can execute code chunks up to the current one using the toolbar button or using the <kbd>⌥⌘ P</kbd> keyboard shortcut.

You may note that code chunk editing and execution in visual mode is not as full featured as in source mode (e.g. syntax highlighting but no code completion, executing entire chunks but not individual lines, etc.). Additional code chunk features are under development and will be added in subsequent releases.

