<!--@@joggrdoc@@-->
<!-- @joggr:version(v2):end -->
<!-- @joggr:warning:start -->
<!-- 
  _   _   _    __        __     _      ____    _   _   ___   _   _    ____     _   _   _ 
 | | | | | |   \ \      / /    / \    |  _ \  | \ | | |_ _| | \ | |  / ___|   | | | | | |
 | | | | | |    \ \ /\ / /    / _ \   | |_) | |  \| |  | |  |  \| | | |  _    | | | | | |
 |_| |_| |_|     \ V  V /    / ___ \  |  _ <  | |\  |  | |  | |\  | | |_| |   |_| |_| |_|
 (_) (_) (_)      \_/\_/    /_/   \_\ |_| \_\ |_| \_| |___| |_| \_|  \____|   (_) (_) (_)
                                                              
This document is managed by Joggr. Editing this document could break Joggr's core features, i.e. our 
ability to auto-maintain this document. Please use the Joggr editor to edit this document 
(link at bottom of the page).
-->
<!-- @joggr:warning:end -->
## Overview

We live by three core rules with our documentation:

1. **You cannot tell who wrote the document, only that someone on the team did.**

2. **You can easily grok what a document is based on its name and summary.**

3. **You automatically know where you should be able to find a document based on what you are looking for (aka it's in the right directory).**

If we follow these 3 core rules and our standards it will allow our team to:

* 🚀 **Move faster** - great docs help devs work independently and not get bogged down in question hell.

* 🛹 **Onboard faster** - when you have great docs new devs can easily get up to speed and start contributing.

* 🔮 **Be kind to your *Future Self*** - you will eventually write super complex code and you won't remember why. If you write great docs you can thank your past self for helping you untangle whatever spaghetti is in front of you.

## What You'll Learn

Please read this document, and apply it to your documentation writing! In this document, you will find all of the following:

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Section</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">What You'll Learn</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Types of Documentation</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">You'll learn about how we define certain types of documentation.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">When to Create JoggrDocs</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">You'll learn when we expect developers to create certain types of documentation.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">How to Create JoggrDocs</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">You'll learn what we expect when you create documentation (e.g. naming conventions)</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Where to Save Documentation</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">You'll learn where to save documentation in Joggr &#x26; GitHub.</p></td></tr></tbody></table>

## Software Development Process

It's important to understand that documentation is a continuous part of our process and a key component of our Software Development Process. This diagram provides an overview of how documentation is integrated into our development process.

```mermaid
graph LR;

    %% Entities
    prd(Create PRD);
    rfc(Create RFC);
    code(Write Code);
    openPR(Open PR);
    part4A(Update/Create HTTP APIs);
    part4B(Update/Create Guides);
    part4C(Update/Create Docs);
    done(Done);

    %% Flow
    prd --> rfc;
    rfc --> code;
    code --> openPR;
    openPR -- "Modify a HTTP API?" --> part4A;
    openPR -- "Modify a standard process?" --> part4B;
    openPR -- "Modify a complex part of our codebase?" --> part4C;
    part4A --> done;
    part4B --> done;
    part4C --> done;

  subgraph "Planning Phase"
    prd;
    rfc;
  end;

  subgraph "Coding Phase"
    code;
    openPR;
  end;

  subgraph "Documentation Phase"
    part4A;
    part4B;
    part4C;
  end;
```

### Types of Documentation

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Category</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Product Requirements (PRD)</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">A document that explains all of the business requirements for a given feature.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Request for Comment (RFC)</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">A document that outlines the technical approach to building a feature. This often includes answering any open questions or assumptions that were made in the PRD.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Architecture</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">A document that documents the architecture of your product or system.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Guides</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">A document that outlines how to accomplish something (i.e. How to Deploy) in a step-by-step guide.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">HTTP API</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">A document that defines the input and output of an API, often providing an example request and response.</p></td></tr></tbody></table>

### When to Create JoggrDocs

We expect that software developers create documentation based on the following:

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">PRD</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">RFC</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Arch.</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Guides</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">API</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> create and get engineering approval before starting an RFC and/or development.</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> be created after approving the PRD and before starting development.</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> create an architecture diagram for any new large project</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> be created or updated when a new standard process is introduced or an existing one is updated.</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><ul class="dashdraft-list"><li class="dashdraft-list-item"><p class="dashdraft-paragraph">When a new <code class="dashdraft-code-inline">.ts</code> file is added to <code class="dashdraft-code-inline">/routes</code>. <strong class="dashdraft-bold">MUST</strong> create an API doc</p></li><li class="dashdraft-list-item"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST NOT</strong> be able to merge the pull request until the document is created following all standards.</p></li></ul></td></tr></tbody></table>

### How to Create JoggrDocs

We expect software developers to follow these standards when creating documentation.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">PRD</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">RFC</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Arch.</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Guides</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">API</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> use the PRD Template</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> use the RFC Template</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST </strong>include a diagram</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><ul class="dashdraft-list"><li class="dashdraft-list-item"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> use the How-To Guide template</p></li><li class="dashdraft-list-item"><p class="dashdraft-paragraph">The Title <strong class="dashdraft-bold">MUST</strong> start with "How to"</p></li></ul></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">MUST</strong> use the API document template</p></td></tr></tbody></table>

### Where to Save JoggrDocs

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Location</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">PRD</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">RFC</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Arch.</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Guides</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">API</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">GitHub</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">product/requirements</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">/rfcs</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">/architecture</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">/guides</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">/api's</code></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Joggr</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">@docs-repo/requirements</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">@repo/docs/rfcs</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">@repo/docs/architecture</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">@repo/docs/guides</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://api.joggr.io/documentation">https://api.joggr.io/documentation</a></p></td></tr></tbody></table>

### Joggr Directory Structure

Below is our Directory Structure in Joggr. Please make sure to save all documents to the correct position.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Folder</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">Overview</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 1-2 sentences what this section holds.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">Standards</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 1-2 sentences what this section holds.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">Product</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 1-2 sentences what this section holds.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">Product/Requirements</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 1-2 sentences what this section holds.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">RFCs</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 1-2 sentences what this section holds.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">Architecture</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 1-2 sentences what this section holds.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">Technology</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 1-2 sentences what this section holds.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">Playground</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Documents that are not outlined in this document, but you want to create.</p></td></tr></tbody></table>

<!-- @joggr:editLink(284ccfba-f508-4d64-aaf4-cef948ae6e58):start -->
---
<a href="https://app.joggr.io/app/documents/284ccfba-f508-4d64-aaf4-cef948ae6e58/edit">
  <img src="https://cdn.joggr.io/assets/static/badges/joggr-document-edit.svg?did=284ccfba-f508-4d64-aaf4-cef948ae6e58" alt="Edit doc on Joggr" />
</a>
<!-- @joggr:editLink(284ccfba-f508-4d64-aaf4-cef948ae6e58):end -->
