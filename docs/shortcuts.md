<!-- -*- mode: gfm -*- -->

Visual mode supports both traditional keyboard shortcuts (e.g. <kbd>⌘ B</kbd> for bold) as well as markdown shortcuts (using markdown syntax directly). For example, enclose `**bold**` text in asterisks or type `##` and press space to create a second level heading.

Here are the available keyboard and markdown shortcuts:

| Command             |  Keyboard Shortcut  |   Markdown Shortcut  |
|---------------------|:-------------------:|:--------------------:|
| Bold                |    <kbd>⌘ B</kbd>   |      `**bold**`      |
| Italic              |    <kbd>⌘ I</kbd>   |      `*italic*`      |
| Code                |    <kbd>⌘ D</kbd>   |     `` `code` ``     |
| Strikeout           |                     |     `~~strike~~`     |
| Subscript           |                     |        `~sub~`       |
| Superscript         |                     |       `^super^`      |
| Heading 1           |   <kbd>⌥⌘ 1</kbd>   |          `#`         |
| Heading 2           |   <kbd>⌥⌘ 2</kbd>   |         `##`         |
| Heading 3           |   <kbd>⌥⌘ 3</kbd>   |         `###`        |
| Blockquote          |                     |          `>`         |
| Code Block          |   <kbd>⇧⌘ \\</kbd>  |     ```` ``` ````    |
| R Code Chunk        |   <kbd>⌥⌘ I</kbd>   |   ```` ```{r} ````   |
| Raw Block           |                     | ```` ```{=html} ```` |
| Bullet List         |                     |          `-`         |
| Ordered List        |                     |         `1.`         |
| Tight List          |   <kbd>⌥⌘ 9</kbd>   |                      |
| List Check          |                     |         `[x]`        |
| Link                |    <kbd>⌘ K</kbd>   |       `<href>`       |
| Emoji               |                     |       `:smile:`      |
| Definition          |                     |          `:`         |
| Paragraph           |   <kbd>⌥⌘ 0</kbd>   |                      |
| Image               |   <kbd>⇧⌘ I</kbd>   |                      |
| Footnote            |   <kbd>⇧⌘ F7</kbd>  |                      |
| Citation            |   <kbd>⇧⌘ F8</kbd>  |         `[@`         |
| Table               |   <kbd>⌥⌘ T</kbd>   |                      |
| Editing Comment     |   <kbd>⇧⌘ C</kbd>   |                      |
| Select All          |    <kbd>⌘ A</kbd>   |                      |
| Clear Formatting    |   <kbd>⌘ \\</kbd>   |                      |
| Edit Attributes     |    <kbd>F4</kbd>    |                      |
| Run Code Chunk      | <kbd>⇧⌘ Enter</kbd> |                      |
| Run Previous Chunks |   <kbd>⌥⌘ P</kbd>   |                      |

?\> For markdown shortcuts, if you didn’t intend to use a shortcut and want to reverse it's effect, just press the backspace key.

### Insert Anything

You can also use the catch-all <kbd>⌘ /</kbd> shortcut to insert just about anything. Just execute the shortcut then type what you want to insert. For example:

<img src="images/visual-editing-omni-list.png" style="display: inline-block" width="350"/>

<img src="images/visual-editing-omni-math.png" style="display: inline-block; margin-bottom: 2px;" width="350"/>

If you are at the beginning of a line (as displayed above) you can also enter plain `/` to invoke the shortcut.
