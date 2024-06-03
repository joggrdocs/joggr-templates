## Overview

As a documentation startup, we understand the importance of having great documentation. We live by three core rules with our documentation standards:

1. **You cannot tell who wrote the document, only that someone on the Joggr team did.**

2. **You can easily grok what a document is based on its name and summary.**

3. **You automatically know where you should be able to find a document based on what you are looking for (aka it's in the right directory).**

If we follow these 3 core rules and our overall standards it will allow our team to:

* 🚀 **Move faster** - great docs help devs work independently and not get bogged down in question hell.

* 🛹 **Onboard faster** - when you have great docs new devs can easily get up to speed and start contributing.

* 🔮 **Be kind to your *Future Self*** - you will eventually write super complex code and you won't remember why. If you write great docs you can thank your past self for helping you untangle whatever spaghetti is in front of you.

Please read this document, and apply it to your documentation writing at Joggr! In this document, you will find all of the following:

* **Directory Structure Standards**: outlines what documents go where in Joggr.

* **When to Create Documentation:** our standards on when to create certain types of documentation.

* **How to Create Documentation**: our standards on how to create, including how to write great titles and summaries, and if to use a template or not.

* **Where to Save Documentation:** our standards on where certain types of documentation should be saved.

## Directory Structure Standards

Below is a table that includes the structure of our directories, including a description of the directory and what it should contain.

| Folder                      | Description                                                                                                                                                                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Overview`                  | This is our top-level folder. This should only contain two documents: an [Onboarding Guide](https://app.joggr.io/app) and a [Team Overview](https://app.joggr.io). |
| `Standards`                 | This folder holds documentation on our standards related to how we work, code, document, and more. This documentation outlines all of the expectations of the team.                                                                                                  |
| `Product`                   | This folder holds documentation that our product manager & CEO creates.                                                                                                                                                                                              |
| `Product/Requirements`      | This folder holds all of our product requirements documentation.                                                                                                                                                                                                     |
| `RFCs`                      | This folder holds all of the RFCs we conduct as a team.                                                                                                                                                                                                              |
| `Architecture`              | All of our Global Architecture documents. These documents will cover the architecture across the entire Joggr Platform and are jointly maintained by the entire organization.                                                                                        |
| `Technology`                | The HQ for our Technology includes a breakdown by the type of service (i.e. API vs Client vs. Infrastructure).                                                                                                                                                       |
| `Technology/API`            | HQ for our API Platform, including all the necessary documentation (see Technology Component Structure section for more information).                                                                                                                                |
| `Technology/Web`            | HQ for our Web Platform, including all the necessary documentation (see Technology Component Structure section for more information).                                                                                                                                |
| `Technology/Infrastructure` | HQ for our infrastructure (DevOps) documentation, including all the necessary documentation (see Technology Component Structure section for more information).                                                                                                       |
| `Technology/Packages`       | This folder contains all of the internal Joggr npm package's documentation, including READMEs, documentation site docs, and more.                                                                                                                                    |
| `Technology/Open Source`    | This folder contains all of the Joggr-maintained OSS documentation, including READMEs, documentation site docs, and more.                                                                                                                                            |
| `Technology/R&D`            | A folder containing R\&D projects, skunk works, or other related items.                                                                                                                                                                                              |
| `Testing`                   | A folder containing any documentation that is just for testing purposes.                                                                                                                                                                                             |

### Technology Component Structure

Certain directories within the `Technology` directory will be considered a Technology Component that will contain a shared structure. This is used to break apart the Technology documentation by service & team, allowing for a modularized approach to documentation that also follows a shared standard. In the Joggr context (our team), a Technology Component almost always lines up with either a single mono repository or a `app` within a repository. Below are the Component Structure standards. Not all directories are required as some Tech will not need a certain directory.

| Directory      | Description                                                                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Guides`       | How-to guides or other related documents that will explain how to complete a task.                                                                                                                                                 |
| `Architecture` | Documents that show how something is architected, including items such as workflows and diagrams.                                                                                                                                  |
| `Libraries`    | Generalized documentation for reusable code that is shared within the component. Depending on the context this could be called `Plugins` (Fastify), `Middleware` (Express), `Hooks` (React), `Components` (React) and many others. |
| `Packages`     | A special directory is used for our mono repositories that include `npm` packages that are scoped to the repository (but can still be published). This is to delineate from other forms of shared code.                            |

## Standards for Documentation

Standards ("Rules") are defined logic that you can apply to a document or point during the SDLC to help you validate you are writing documentation that meets our standards. Below you will find standards for all of the following:

* **When to Create Documentation**

* **How to Create Documentation**

* **Where to Save Documentation**

**Note**: Rules will be integrated into the Joggr Rules Engine in the future, for now, please read through each rule carefully and ensure you follow them.

### Global

These rules apply to every category of documentation.

| Name                    | Logic                                                                                                                                                                         | Categories |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Valid Terms             | All terms **MUST** use the official term in our [Terminology](https://app.joggr.io) document and **MUST NOT** use an alias | all        |
| Out of Date Doc Updated | All Out of Date documents **MUST** be updated before you can merge the pull request                                                                                           | all        |

### When to Create

| PRD                                                                                     | RFC                                                                          | Arch. | Guides                                                                                                  | Libraries | API                                                                                                                                                                               |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MUST** create and get engineering approval before starting an RFC and/or development. | **MUST** be created after approving the PRD and before starting development. | N/A   | **MUST** be created or updated when a new standard process is introduced or an existing one is updated. | N/A       | When a new `.ts` file is added to `/routes`. **MUST** create an API doc and **MUST NOT** be able to merge the pull request until the document is created following all standards. |

### How to Create

| Area      | PRD                                                    | RFC                                    | Arch.                                                     | Guides                                                                                               | Libraries                                       | API                                     |
| --------- | ------------------------------------------------------ | -------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------- |
| Titles    | N/A                                                    | N/A                                    | N/A                                                       | All guides' titles **MUST** start with "How To"                                                      | N/A                                             | N/A                                     |
| Summaries | N/A                                                    | N/A                                    | N/A                                                       | All guides' summaries **MUST** be filled in and **MUST** start with "A step-by-step guide on how to" | N/A                                             | N/A                                     |
| Tags      | All product requirements **MUST** use the tag `PRD`    | All RFCs **MUST** use the tag `RFC`    | All Architecture Docs **MUST** use the tag `Architecture` | All guides **MUST** use the tag "guide"                                                              | All library docs **MUST** use the tag `Library` | API Docs **MUST** use the tag `API Doc` |
| Templates | All product requirements **MUST** use the PRD template | All RFCs **MUST** use the RFC template | All RFCs **MUST** use the RFC template                    | All guides **MUST** use the how-to-template                                                          | N/A                                             | N/A                                     |

### Where to Save

| Location | PRD                                                                        | RFC                                        | Arch.                                                                                                       | Guides                                                                    | Libraries                                                                | API                                                                       |
| -------- | -------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| GitHub   | All product requirements **MUST** be saved to `@docs/product/requirements` | All RFCs **MUST** be saved to `@docs/rfcs` | All Architecture Docs **MUST** be saved to `@docs/guides` or`@docs/guides` or `@repo/src/docs/architecture` | All guides **MUST** be saved to `@docs/guides` or `@repo/src/docs/guides` | All library docs **MUST** be saved to `@repo/src/docs/guides`            | All API Docs **MUST** be saved to `@launchpad/src/routes/<route-file>.ts` |
| Joggr    | All product requirements **MUST** be saved to `Product/Requirements`       | All RFCs **MUST** be saved to `RFCs`       | All Architecture Docs **MUST** be saved to `Architecture` or `Technology/<component>/Libraries`             | All guides **MUST** be saved to `Technology/<component>/Guides`           | All library docs **MUST** be saved to `Technology/<component>/Libraries` | All API Docs **MUST** be saved to <https://api.joggr.io/documentation>    |

**NOTE**: For simplicity, we simplify @encyclopedia-galactica to @docs, @repo for a repo-specific location (i.e. Launchpad).
