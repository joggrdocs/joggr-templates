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

This document provides you with an overview of the services (applications), vendors and other assets that make up the our platform and how they interact.

### Services (Applications)

There are four primary services that make up our platform.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Service</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Endpoint</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">GitHub</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">API</strong></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">The ENTER_COMPANY <strong class="dashdraft-bold">API</strong> is the main API for our Platform. It is responsible for all of the business logic and data storage for the Platform.</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">https://api.acme.io</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://github.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">Web</strong></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">The ENTER_COMPANY <strong class="dashdraft-bold">Web</strong> consists of a React-based application that is a SPA.</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">https://app.acme.io</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://github.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">Server</strong></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">The ENTER_COMPANY <strong class="dashdraft-bold">Server</strong> is a Fastify based API that serves the <strong class="dashdraft-bold">Web</strong> to the client.</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">https://app.acme.io</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://github.com">View</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><strong class="dashdraft-bold">Third-Party Service</strong></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">The ENTER_COMPANY <strong class="dashdraft-bold">Third-Party Service</strong> is a proxy API for ENTER_REASON. It is responsible for ENTER_REASON.</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><code class="dashdraft-code-inline">https://app.acme.io</code></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="https://github.com">View</a></p></td></tr></tbody></table>

#### Diagram

```mermaid
---
title: Acme Inc. Service Architecture
---
flowchart TD

  %% Our Services
  %% -------

  web["`🌐 **Web**
*Web Client*`"];
  style web fill:#7b1fa2;

  api["`⬆️ **API**
*Backend API*`"];

  server["`**💻 Server**
*Web Server*`"];
  style server fill:#7b1fa2;

  third-party["`🐙 **Third-Party**
*Third-Party Proxy API & App*`"];

  %% Third Party Services
  %% -------

  database[("`🐘 **MicrosoftSQL**
*(CloudSql)*`")]
  style database fill:#0064a5

  bucket["`🪣 **Storage Bucket**
(Cloud Storage)
`"]
  style bucket fill:#0064a5

  Okta[["`**Okta.com**
*(vendor)*`"]]
  thirdpartyapi[["`**thirdparty.com**
*(vendor)*`"]]  

  %% Core Mappings
  web -- "app.acme.io" --> server;
  web <-- "api.acme.io" --> api;
  web <-- "cdn.acme.io" --> api;
  api <-- "Proxy CDN Assets" --> bucket
  api <-- "Authenticate & Authorize" --> Okta;
  web <-- "Login (Authenticate)" --> Okta;
  third-party <-- "Proxy API Requests" --> thirdpartyapi;
  api -- "Query DB" --> database;

  subgraph vpc["🛜 Joggr"]
    direction TB;
    api -- "GitHub Query" --> third-party;
    server;
    api;
  end
  style vpc fill:#6da2f7,color:#000000,stroke:#333,stroke-width:2px;

  subgraph gcp["💽 AWS Managed Services"]
    direction TB;
    database;
    bucket;
  end
  style gcp fill:#4285F4,stroke:#333,stroke-width:2px;

  subgraph "🏪 Vendors"
    direction TB
    thirdpartyapi;
    Okta;
  end

  linkStyle default stroke-width:4px,fill:none,stroke:black;
```

<!-- @joggr:editLink(086ba8d2-cb0b-44bc-8a19-71e56349924c):start -->
---
<a href="https://app.joggr.io/app/documents/086ba8d2-cb0b-44bc-8a19-71e56349924c/edit">
  <img src="https://cdn.joggr.io/assets/static/badges/joggr-document-edit.svg?did=086ba8d2-cb0b-44bc-8a19-71e56349924c" alt="Edit doc on Joggr" />
</a>
<!-- @joggr:editLink(086ba8d2-cb0b-44bc-8a19-71e56349924c):end -->
