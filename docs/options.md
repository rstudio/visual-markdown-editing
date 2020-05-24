<!-- -*- mode: gfm -*- -->

# Editor Options {docsify-ignore}

## Global Options

You can customize visual editing options within the **R Markdown -\> Visual** preferences:

<img src="images/visual-editing-options.png" class="illustration" width="588"/>

| Option                           | Description                                                                                                                        |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Show document outline by default | Show the navigational outline when opening documents in visual mode (default: show outline).                                       |
| Editor content width             | Maximum width for editing content. This is intended to keep editing similar to the width that users will see (default: 700px).     |
| Editor font size                 | Base font size for editor content (default: inherit from IDE settings).                                                            |
| Auto-wrap text                   | When writing markdown paragraphs, automatically break lines at a specified column (default: flow text; no auto-wrapping).          |
| Write references at end of       | Write references (footnotes) at the end of the block or section where they appear, or at the end of the document (default: block). |

## File Options

Global options that affect the way markdown is written can also be customized on a per-file basis . You can do this by including an `editor_options: markdown` key in the YAML front matter of your document. For example:

``` yaml
---
title: "My Document"
author: "Jane Doe"
editor_options:
  markdown:
    wrap_column: 80
    references: block
---
```

You might want to do this to ensure that multiple authors on different workstations use the same markdown writing options.

You can also instruct RStudio to use these same options when saving files from source mode. To do this add the `canonical` option. For example:

``` yaml
---
editor_options:
  markdown:
    wrap_column: 80
    references: block
    canonical: true
---
```

With `canonical: true`, edits in visual mode and source mode will result in identical markdown output. This is especially useful if you have multiple authors collaborating using version control, with a mixture of source and visual mode editing among the authors.
