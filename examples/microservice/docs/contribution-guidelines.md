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
# Summary

In this guide, you will learn all of the following:

1. [Branching Standards](https://app.joggr.io/app/documents/c80c811a-b3cc-4b6f-b3d7-5cab383ca36f/edit#branching-standards): how we branch off of `main` and what you need to do to ensure you follow our standards and do not block your pull requests.

2. [Commit Messages](https://app.joggr.io/app/documents/c80c811a-b3cc-4b6f-b3d7-5cab383ca36f/edit#commit-messages): please follow the standards outlined below when writing commit messages.

3. [Testing Standards](https://app.joggr.io/app/documents/c80c811a-b3cc-4b6f-b3d7-5cab383ca36f/edit#testing-standards): please follow the standards outlined below to ensure you have appropriate test coverage for your changes.

4. [Code Review Standards](https://app.joggr.io/app/documents/c80c811a-b3cc-4b6f-b3d7-5cab383ca36f/edit#code-review-standards)**:** please follow these standards to ensure a quick review.

> \[!IMPORTANT]
>
> By following every standard outlined below, you ensure a quick code review. If you do not follow the standards, expect that we will ask you to fix this before approving your pull request.

## Branching Standards

We follow [Trunk Flow](https://www.toptal.com/software/trunk-based-development-git-flow) which means we only ever branch off of our default branch (usually `main`) and then squash merge back into the *Trunk* aka the default branch.

The Trunk-Based Development workflow visualized in the `gitGraph` diagram shows the main branch (`main`) as the central line of development. Feature branches (`feature/1`, `feature/2`, `feature/3`) are created for individual features, each with multiple commits before being merged back into `main`. A hotfix branch (`hotfix/1`) is also illustrated, addressing critical issues and merging back into `main` after resolution. This approach ensures continuous integration and keeps the main branch deployable at all times.

```mermaid
gitGraph
   commit
   branch feature/1
   checkout feature/1
   commit
   commit
   checkout main
   merge feature/1
   branch feature/2
   checkout feature/2
   commit
   commit
   checkout main
   merge feature/2
   commit
   branch hotfix/1
   checkout hotfix/1
   commit
   checkout main
   merge hotfix/1
   branch feature/3
   checkout feature/3
   commit
   commit
   checkout main
   merge feature/3
   commit
   commit
```

## Commit Messages

Commit message standards are crucial for maintaining clarity and consistency in a software development project. Effective commit messages should follow a **clear, structured format: start with a concise, imperative mood summary of the change** (e.g., "Fix bug in user authentication"), followed by a detailed description if necessary, explaining the rationale and impact of the change. This format not only aids in understanding the history and context of the code but also facilitates easier code reviews and troubleshooting. Adhering to a standardized style, such as including issue tracking IDs or referencing related pull requests, ensures that messages are informative and that the commit history remains organized and useful for all team members.

## Testing Standards

Please follow the standards below when writing tests for your changes.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1" colwidth="182"><p class="dashdraft-paragraph">Test Type</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Standard</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1" colwidth="182"><p class="dashdraft-paragraph">Unit Tests</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">You <strong class="dashdraft-bold">MUST </strong>write a unit test for all code changes.</p></td></tr></tbody></table>

> \[!IMPORTANT]
>
> When we review the code, we expect that you have already tested it to ensure the microservice works as expected.

## Code Review Standards

Please follow our [Branching Standards](https://app.joggr.io/app/documents/c80c811a-b3cc-4b6f-b3d7-5cab383ca36f/edit#branching-standards) to ensure a quick review. We review Pull Requests daily. Our SLA for a review is 24 hours.

> \[!TIP]
>
> If you need an expedited review, please reach out in Slack and explain why.

<!-- @joggr:editLink(c80c811a-b3cc-4b6f-b3d7-5cab383ca36f):start -->
---
<a href="https://app.joggr.io/app/documents/c80c811a-b3cc-4b6f-b3d7-5cab383ca36f/edit">
  <img src="https://cdn.joggr.io/assets/static/badges/joggr-document-edit.svg?did=c80c811a-b3cc-4b6f-b3d7-5cab383ca36f" alt="Edit doc on Joggr" />
</a>
<!-- @joggr:editLink(c80c811a-b3cc-4b6f-b3d7-5cab383ca36f):end -->