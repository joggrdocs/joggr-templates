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
# Overview

Below outlines our incident management process and standards. A well-structured incident management process is vital for our team as helps with the following:

* 🚀 **Minimize Downtime**

* 🎉 **Improve Customer Satisfaction**

* 🚍 **Maintains business continuity**

Furthermore, it fosters team collaboration, allowing for efficient resolution and learning from incidents to drive continuous improvement. Additionally, it aids in compliance with regulatory standards, builds trust with stakeholders, and demonstrates a commitment to reliability and professionalism, ultimately enhancing the overall resilience and performance of the software infrastructure.

## Incident Management Process

```mermaid
graph LR;

    %% Entities
    prd(Alert Triggered);
    alertType{Alert Type?}
    criticalAlert(P1 or P2);
    normalAlert(P3, P4, P5);
    slackAndPage(Slack Sent + On-Call Paged);
    slack(Slack sent);
    runbook(Use Runbook to Resolve Incident);
    postMortem(Build Post Mortem Doc);
    addRunbook(Add Missing Runbooks);
    updateRunbook(Update Runbook from Learnings);

    %% Flow
    prd --> alertType;
    alertType --> criticalAlert;
    alertType --> normalAlert;
    criticalAlert --> slackAndPage;
    normalAlert --> slack;
    slackAndPage --> runbook;
    slack --> runbook;
    runbook --> postMortem;
    postMortem --> addRunbook;
    postMortem --> updateRunbook;

  subgraph "Resolution Phase"
    prd;
    alertType;
    criticalAlert;
    normalAlert;
    slackAndPage;
    slack;
    runbook;
  end;

  subgraph "Post Mortem Phase"
    postMortem;
    addRunbook;
    updateRunbook;
  end;
```

## Incident Management Standards

Please follow these standards and expectations when resolving incidents.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Phase</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Standards</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Resolution</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">MUST resolve the incident. If you know how to resolve, resolve it, do not let the process get in the way (e.g. "I knew the issue but the process says I need to run through all the runbook steps"). MUST use the runbook and follow the steps to resolve.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Post Mortem</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">MUST create a post-mortem for every P1 and P2 incident. MUST create a pull request for this post-mortem in Joggr and X people to review. MUST save the post-mortem to the X folder</p></td></tr></tbody></table>

## Incident Types

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Incident Type</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">P1</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe what makes something a P1.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">P2</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe what makes something a P2.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">P3</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe what makes something a P3.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">P4</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe what makes something a P4.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">P5</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe what makes something a P5.</p></td></tr></tbody></table>

## Tools

We use the following tools and technologies to support our incident management process.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Tool</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Incident.io</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 2-3 sentences what the platform is and what you use it for.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Checkly</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 2-3 sentences what the platform is and what you use it for.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">DataDog</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe in 2-3 sentences what the platform is and what you use it for.</p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr></tbody></table>

## Alerts

Below is a table of our alerts and the corresponding runbooks.

> \[!TIP]
>
> If you are only using a single system for defining alerts, it may be overkill to build this table. We would recommend you embed the runbooks directly in that system, next to the alert. For example, if you use DataDog, embed the URL for the runbook next to the alert in DataDog.

<table class="dashdraft-table"><tbody><tr class="dashdraft-table-row"><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Alert</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Description</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Source</p></th><th class="dashdraft-table-header" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Runbook</p></th></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Example Alert #1</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe the alert in 1 to 2 sentences</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="google.com">Link to Source Page</a></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="google.com">Link to Runbook</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Example Alert #1</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe the alert in 1 to 2 sentences</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="google.com">Link to Source Page</a></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="google.com">Link to Runbook</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Example Alert #1</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph">Describe the alert in 1 to 2 sentences</p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="google.com">Link to Source Page</a></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"><a target="_blank" rel="noopener noreferrer" class="dashdraft-link" href="google.com">Link to Runbook</a></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr><tr class="dashdraft-table-row"><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td><td class="dashdraft-table-cell" colspan="1" rowspan="1"><p class="dashdraft-paragraph"></p></td></tr></tbody></table>

<!-- @joggr:editLink(009ea75c-65ed-4665-9252-b2bfec284796):start -->
---
<a href="https://app.joggr.io/app/documents/009ea75c-65ed-4665-9252-b2bfec284796/edit">
  <img src="https://cdn.joggr.io/assets/static/badges/joggr-document-edit.svg?did=009ea75c-65ed-4665-9252-b2bfec284796" alt="Edit doc on Joggr" />
</a>
<!-- @joggr:editLink(009ea75c-65ed-4665-9252-b2bfec284796):end -->
