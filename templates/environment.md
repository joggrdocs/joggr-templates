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

This document provides you with an overview of the environments where we deploy our applications, store data and how they map to AWS & other tools.

### Groups (Types)

We have three primary groupings for our environments (also called types), based on how they are utilized. You can see an overview of the primary three groups below.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Name</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Other Names</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">production</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">A set of environments for providing software for end user</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">prod</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">development</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">A set of environments for developing software</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">pre-production, pre-prod</p></td></tr></tbody></table>

To give you a quick overview of that this could look like view the example diagram below:

```mermaid
---
title: AWS grouped by Environment Group
---
flowchart TB;
  subgraph prd["Production Group"]
    gcp-prd("`**Production**
_Apps & DB_
`")
    gcp-prd-static("`**Production Static**
_Static Images & Assets_
`")
  end
  style prd fill:#e63946

  subgraph dev["Development Group"]
    gcp-stg("`**Staging**
_Apps & DB_
`")
    gcp-stg-static("`**Staging Static**
_Static Images & Assets_
`")
    gcp-local-static("`**Local Static**
_AWS: dur-123_
`")
  end
  style dev fill:#588157
```

**NOTE**: this diagram is NOT real as its just a demo of the groups to demonstrate the organization of groups & actual environments.

### Core Environments

Within our core enviroments we

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Name</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Shorthand</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Group (Type)</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">production</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">The environment where we deploy our applications for use by end-users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">prd, prod</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">production</strong></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">staging</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">The environment where we deploy our applications for production-like testing</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">stg, stage</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">development</strong></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">local</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">The environment where we develop software locally on our machines</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">loc, local</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">development</strong></p></td></tr></tbody></table>

#### Production

The environment where we deploy our applications for use by end-users. We have different environment configurations for different vendors we use and AWS. View the table below for an overview and link to each system.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Name</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">ID</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Link</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">AWS</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our AWS runtime that includes our apps, database, cloud storage and other assets</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">id9422</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Okta</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Authentication and Authorization vendor for authenticating our end users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">prd-id-123</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_One</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our email provider that sends transaction emails on our behalf to our users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">email-sender</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://resend.com/overview">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_Two</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our PLG tooling vendor for onboarding and other workflows for our users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">11223</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://us.posthog.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_Three</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our Product metrics vendor, that provides metrics for our end users and organizations</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">prd-tls</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr></tbody></table>

#### Staging

The environment where we deploy our applications for testing in a production-like environment. We have different environment configurations for different vendors we use and AWS. View the table below for an overview and link to each system.

**NOTE**: Many of these environments are shared between local and staging due to limitations by our vendors.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Name</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">ID</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Link</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">AWS</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our AWS runtime that includes our apps, database, cloud storage in a production-like environment</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">id-4456</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Okta</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Authentication and Authorization vendor for authenticating our test users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">stg--auth-123</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_One</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our email provider that sends transaction emails to our test users in a production-like way</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">stg-email-sender</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://resend.com/overview">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_Two</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our Product metrics vendor, that we can use to test metrics for our end users and organizations</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">31724</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://us.posthog.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_Three</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our PLG tooling vendor for testing onboarding and other workflows for our users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">dev</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr></tbody></table>

#### Local

The environment where we write software locally on our machines.

**NOTE**: Many of these environments are shared between local and staging due to limitations by our vendors.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Name</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">ID</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Link</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Docker</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our local runtime that includes our apps, database, cloud storage in a production-like environment</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">-</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">-</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">AWS</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our AWS runtime that includes assets we cannot mirror in Docker, i.e. Cloud Storage</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">dev-123</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Auth0</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Authentication and Authorization vendor for authenticating our test users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">local--app-123</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_One</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our email provider for testing emails locally</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">local-app.acme.com</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://resend.com/overview">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_Two</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our Product metrics vendor, that we can use to test metrics for our end users and organizations</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">349354</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://us.posthog.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Third_Party_Three</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Our PLG tooling vendor for testing onboarding and other workflows for our users</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">dev-9247</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://google.com">View</a></p></td></tr></tbody></table>

<!-- @joggr:editLink(dfa96944-04f1-4624-a05f-31d6349ff349):start -->
---
<a href="https://app.joggr.io/app/documents/dfa96944-04f1-4624-a05f-31d6349ff349/edit">
  <img src="https://cdn.joggr.io/assets/static/badges/joggr-document-edit.svg?did=dfa96944-04f1-4624-a05f-31d6349ff349" alt="Edit doc on Joggr" />
</a>
<!-- @joggr:editLink(dfa96944-04f1-4624-a05f-31d6349ff349):end -->
