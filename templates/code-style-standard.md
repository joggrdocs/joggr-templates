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

This document provides an a quick overview of our standards for our coding styles, including:

* linting

* formatting

* file naming and more!

## Importance of Code Styles

As an engineering organization focused on operational excellence, we understand that the code itself many times is the best documentation and keeping a standardized format for things like file naming, function declarations, and more, is important for the end-reader of code. This includes when trying to review code, decipher code you didn't write or pulling in samples. We live by one rule with our code styles:

> You cannot tell who wrote the code, only that someone on the ENTER\_TEAM\_OR\_COMANY NAME did.

## Comments

Code comments are an important part of documenting and organizing code. We have two primary types of code comments:

* **In-Line Comments**: things like JSDoc for helping add to the API of a piece of code or document a piece of code

* **Summary**: comments at the top of a file or within a section of the file that help developers understand what the file covers. This helps with super-large files.

### In-Line Comments

Comments used to document code are extremely important especially when building an API that will be consumed by other developers. A good example of this is [JSDoc](https://jsdoc.app/) which we require on all libraries, or packages that will be used by another developer. When you combine JSDoc with good types it makes it so the developer never has to look at the internals of something to use it.

### Summary

At times we need to organize large pieces of code or just break apart some logic so it's easier for a reader to grok. We have developed a set of comments that are based heavily on the Laravel commenting practices.

These comments are saved as VSCode snippets and managed by the `blueprints` package in our [monorepository](https://github.com).

#### Header

A header comment is placed at the top of a document below the imports and is used to provide a high-level overview of the file. This is only used for very large files as the standard way to document a file is by adding JSDoc to the exported items.

```lezer
/*
|==========================================================================
| A title for a file
|==========================================================================
|
| A short description of the file
|
*/
```

#### Section

A section is used to organize logical separation between different parts of a file that require an additional description.

```lezer
/*
|----------------------------------
| A section title
|----------------------------------
|
| A description of the section
|
*/
```

#### Subsection

A subsection is the most frequently used comment and is used to logically separate parts of a file, function or component.

```lezer
/*
|------------------
| A subsection title
|------------------
*/
```

### When not to Comment

A big part of writing good code comments is knowing when NOT to add them to the code base. We follow some simple guidelines in regard to when to write/not write comments:

* Don't comment on obvious things, or be redundant. If it won't add value don't add it

* Don't describe what the code is doing, unless it is very complex or unorthodox

* Describe the intent behind a decision in the code, the \*why \*can be lost to commit history if not added as a comment

* Less is more, only comment when you REALLY need to

## Linting

As a TypeScript (JavaScript) centric organization we use [eslint](https://eslint.org/) for linting our projects. We have a standard `eslint-config` that is shared amongst our projects.

Please view the [@joggrdocs/eslint-config](https://github.com) project to learn more.

### Warnings vs Errors

We have quite a few overrides where we downgrade errors to warnings. The intent is to treat everything as an error but we use warnings for items that are difficult for us to fix quickly. We should make sure we do not add additional warnings in any PRs.

You can see the overrides in our core config [here](https://github.com).

## Formatting

As a TypeScript (JavaScript) centric organization we use [prettier](https://prettier.io/) for formatting our projects. There are slight deviations between projects but for the most part, we use the default prettier config.

### Default `.prettierrc.json`

Below is our default `.prettierrc.json` pulled from our monorepository.

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "experimentalTernaries": true,
  "singleAttributePerLine": true,
  "jsxSingleQuote": true,
  "bracketSameLine": false,
  "bracketSpacing": true,
  "quoteProps": "as-needed",
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

### Default `.prettierignore`

Below is our default `.prettierignore` pulled from our monorepository.

```javascript
# Basics
dist/
node_modules/
build/
# Docs
*.md
*.mdx
# DevTools
.yarn
.turbo
.vscode
# Fixtures
**/__fixtures__/
**/fixtures/
```

<!-- @joggr:editLink(f1c75774-6efd-407c-a912-f48cf828f616):start -->
---
<a href="https://app.joggr.io/app/documents/f1c75774-6efd-407c-a912-f48cf828f616/edit">
  <img src="https://cdn.joggr.io/assets/static/badges/joggr-document-edit.svg?did=f1c75774-6efd-407c-a912-f48cf828f616" alt="Edit doc on Joggr" />
</a>
<!-- @joggr:editLink(f1c75774-6efd-407c-a912-f48cf828f616):end -->
