<!-- -*- mode: gfm -*- -->

## Global Options

You can customize visual editing options within **R Markdown -\> Visual**:

<img src="images/visual-editing-options.png" class="illustration" width="585"/>

<table><thead><tr class="header"><th><p>Option</p><p>
</p></th><th><p>Description</p><p>
</p></th></tr></thead><tbody><tr class="odd"><td><p>Use visual editing by default</p></td><td><p>
</p></td></tr><tr class="even"><td><p>Show document outline by default</p></td><td><p>
</p></td></tr><tr class="odd"><td><p>Editor content width</p></td><td><p>
</p></td></tr><tr class="even"><td><p>Editor font size</p></td><td><p>
</p></td></tr><tr class="odd"><td><p>Show margin column indicator in code blocks</p></td><td><p>
</p></td></tr><tr class="even"><td><p>Default spacing between list items</p></td><td><p>
</p></td></tr><tr class="odd"><td><p>Automatic text wrapping (line breaks)</p></td><td><p>
</p></td></tr><tr class="even"><td><p>Write references at end of current</p></td><td><p>
</p></td></tr><tr class="odd"><td><p>Write canonical visual mode markdown in source mode</p></td><td><p>
</p></td></tr></tbody></table>

## Citation Options

You can customize visual editor citation options within **R Markdown -\> Citations**:

<img src="images/visual-editing-options-citations.png" class="illustration" width="585"/>

<table><thead><tr class="header"><th><p>Option</p><p>
</p></th><th><p>Description</p><p>
</p></th></tr></thead><tbody><tr class="odd"><td><p>Zotero Library</p></td><td><p>
</p></td></tr><tr class="even"><td><p>Zotero Data Directory</p></td><td><p>
</p></td></tr><tr class="odd"><td><p>Use libraries</p></td><td><p>
</p></td></tr><tr class="even"><td><p>Use Better BibTeX for citation keys and BibTeX export.</p></td><td><p>
</p></td></tr></tbody></table>

## Project Options

Global options that affect the way markdown is written can also be customized on a per-project basis.
You can do this using the **R Markdown** pane of the **Project Options** dialog:

<img src="images/visual-editing-project-options.png" class="illustration" width="541"/>

By default projects inherit the current global settings for markdown writing and Zotero libraries.

## File Options

Global and project options that affect the way markdown is written can also be customized on a per-file basis .
You can do this by including an `editor_options: markdown` key in the YAML front matter of your document.
For example:

``` yaml
---
title: "My Document"
author: "Jane Doe"
editor_options:
  markdown:
    wrap: 72
---
```

You might want to do this to ensure that multiple authors on different workstations use the same markdown writing options.

You can also instruct RStudio to use these same options when saving files from source mode.
To do this add the `canonical` option.
For example:

``` yaml
---
editor_options:
  markdown:
    wrap: 72
    canonical: true
---
```

With `canonical: true`, edits in visual mode and source mode will result in identical markdown output.
This is especially useful if you have multiple authors collaborating using version control, with a mixture of source and visual mode editing among the authors.

See the documentation on [Writer Options](markdown#writer-options) for additional details on markdown writing options.
