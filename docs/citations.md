<!-- -*- mode: gfm -*- -->

Visual mode uses the standard Pandoc markdown representation for citations (e.g. `[@citation]`). Citations can be drawn from a variety of sources:

1.  Document or project level bibliographies.
2.  [DOI](#citations-from-dois) (Document Object Identifier) references.
3.  [Zotero](#citations-from-zotero) libraries.

When inserting a citation you can search across all of these sources:

<img src="images/visual-editing-citation-search.png" class="illustration" width="918"/>

If you insert a citation from a DOI or Zotero library that isn't already in your bibliography then it will be automatically added to the bibliography.

## Bibliographies

R Markdown supports bibliographies in a wide variety of formats including BibLaTeX and CSL. Add a bibliography to your document using the `bibliography` YAML metadata field. For example:

``` yaml
---
title: "My Document"
bibliography: references.bib
---
```

See the [pandoc citations](https://pandoc.org/MANUAL.html#citations) documentation for additional information on bibliography formats.

## Inserting Citations

Once you have a bibliography, you can include citations in visual mode by either:

1.  Using the **Insert -\> Citation** command (or the <kbd>⇧⌘ F8</kbd> keyboard shortcut)

2.  Using markdown syntax directly (e.g. `[@cite]`).

If you use the command or keyboard shortcut you'll see the **Insert Citation** dialog pictured above, which enables you to browse your various citation sources or do searches for citations you don't currently have (e.g. search by DOI).

If you use markdown syntax you'll see completions for citations in your bibliography and/or your Zotero libraries to make it easier to locate a citation even if you don't remember it's specific ID:

<img src="images/visual-editing-citations.png" width="700"/>

Note that you can also paste a [DOI](https://www.doi.org/) after the `@` and it will be automatically looked up:

<img src="images/visual-editing-citations-doi.png" width="700"/>

Once you've confirmed that it's the correct work (and possibly modified the suggested ID), the citation will be inserted into the document and an entry for the work added to your bibliography.

Once you've inserted a citation, place the cursor over it to see a preview of it along with a link to the source if one is available:

<img src="images/visual-editing-cite-popup.png" width="700"/>

## Using Zotero

[Zotero](https://zotero.org) is a popular free and open source reference manager. If you use Zotero, you can also insert citations directly from your Zotero libraries. If you have Zotero installed locally it's location will be detected automatically and citations from your main library (**My Library**) will be available:

<img src="images/visual-editing-citations-zotero-browse.png" class="illustration" width="918"/>

Zotero references will also show up automatically in completions:

<img src="images/visual-editing-citation-completions.png" width="426"/>

Items from Zotero will appear alongside items from your bibliography with a small "Z" logo juxtaposed over them. If you insert a citation from Zotero that isn't already in your bibliography then it will be automatically added to the bibliography.

If you are running both RStudio and Zotero on your desktop, then no additional configuration is required for connecting to your Zotero library. If however you using RStudio Server and/or want to access your Zotero library over the web, then a few more steps are required (see the [Zotero Web API](#zotero-web-api) section for details).

### Group Libraries

[Zotero Groups](https://www.zotero.org/support/groups) provide a powerful way to share collections with a class or work closely with colleagues on a project. By default, Zotero Group Libraries are not included in the **Insert Citation** dialog or citation completions. However, there are options available to use group libraries at a global, per-project, or per-document level.

For example, here we specify a project-level option to use the *Reproducible Research Series (Year 1)* group library:

<img src="images/visual-editing-citation-zotero-group.png" class="illustration" width="543"/>

You can also specify one or more libraries within YAML. For example:

``` yaml
---
title: "Reproducible Research"
zotero: "Reproducible Research Series (Year 1)"
---
```

Note that you can also turn off Zotero entirely for a document using `zotero: false`:

``` yaml
---
title: "Reproducible Research"
zotero: false
---
```

### Zotero Web API

If you are using RStudio Server and/or don't have Zotero installed locally, you can still access your Zotero library using the Zotero Web API (assuming you have a Zotero web account and have synced your libraries to your account).

?\> If you are running RStudio Desktop, it's generally easier to also run Zotero on your desktop and access your library locally. That said, it is possible to access Zotero web libraries from RStudio Desktop if you prefer that configuration.

#### API Access Key

RStudio accesses Zotero web libraries using the Zotero Web API, so the first step is to [create a Zotero account](https://www.zotero.org/user/register) and then configure Zotero to sync it's data to your account. You can do this using the **Sync** tab of the Zotero preferences:

<img src="images/visual-editing-citations-zotero-sync.png" width="700"/>

Once you've configured your library to sync, you need to [create a Zotero API Key](https://www.zotero.org/settings/keys/new) to use with RStudio:

<img src="images/visual-editing-citations-zotero-keygen.png" class="illustration" width="700"/>

Follow the instructions to create a key (the defaults which provide read-only access are fine), and then be sure to **record your key** after generating it (i.e. copy it to the clipboard and/or save it somewhere more permanent) as you won't be able to view it again after you navigate away.

Finally, go to the **R Markdown -\> Citations** preferences to connect Zotero to RStudio using your key:

<img src="images/visual-editing-citations-zotero-options.png" class="illustration" width="585"/>

Set the Zotero Library option to "Web", then paste in your Zotero Web API Key. You can use **Verify Key...** button to confirm that your Zotero API key is working correctly.

Once you've confirmed your connection you are ready to start inserting citations from Zotero.
