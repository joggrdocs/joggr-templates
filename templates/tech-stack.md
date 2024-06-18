## Overview

At ENTER_COMPANY, our primary goal when selecting a technology stack was and is to provide our team with the ability to do their jobs efficiently and without unnecessary roadblocks or processes.

To meet that goal we made some opinionated decisions:

1. [TypeScript](https://www.typescriptlang.org/) is the **ONLY** language in use (outside of some vanilla JavaScript)

2. [Fastify](https://fastify.dev/) as our **ONLY** API framework

3. [Pino](https://github.com/pinojs/pino) as our **ONLY** logging utility

4. [React](https://react.dev/) & [MUI](https://mui.com/material-ui/getting-started/) our **ONLY** frontend component libraries

These technologies are used across the board, be it frontend or backend. This means a frontend developer can add an API using TypeScript or even add a Cloud Storage bucket using [Pulumi](https://www.pulumi.com/docs/languages-sdks/javascript/).

## 🎯 Core

Core technologies are used across all software development at Joggr.

| Name       | Role                   | Description                                                                                                                                                                              | Docs                                         |
| ---------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| TypeScript | Programming Language   | TypeScript is our primary programming language for all things backend, frontend, & infrastructure.                                                                                       | [View](https://www.typescriptlang.org/docs/) |
| Pino       | Logger                 | Pino is our node and browser based logger that is used to write logs either to the console, stdout or an API.                                                                            | [View](https://getpino.io/#/)                |
| Vite       | Frontend Bundler       | Our frontend bundler built on top of esbuild and rollup.                                                                                                                                 | [View](https://vite.dev/)                    |
| SWC        | Backend Bundler        | Our backend bundler written in rust, paired with tsc for super-speedy builds.                                                                                                            | [View](https://swc.rs/)                      |
| Vitest     | Test Runner            | Vitest is built on top of Vite which is our primary build tool for all thing frontend.                                                                                                   | [View](https://vitest.dev/)                  |
| Turborepo  | Monorepo Managment     | Turborepo, built by vercel, is a tool for managing monorepositories that allows a developer to run commands across the repository but in parallel and using cacheing to speed up builds. | [View](https://turbo.build/repo)             |
| Pulumi     | Infrastructure as Code | Pulumi is an infrastructure as code platform that allows our team to use TypeScript to build, deploy, and manage cloud infrastructure.                                                   | [View](https://www.pulumi.com/docs/)         |
| VSCode     | IDE                    | VSCode is our recommended IDE for developers on our team, as we integrate tightly with it and build tooling for it, such as the `blueprints` package.                                    | [View](https://code.visualstudio.com/)       |

## 🌐 Web

Web technologies are tools & libraries primarily used in the browser to build React-based Single Page Applications.

| Name         | Role              | Description                                                                                                                                                       | Docs                                                 |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| React        | User Interface    | React lets you build user interfaces out of individual pieces called components, using an HTML-like JS/TS compatible langauge called JSX (or TSX for TypeScript). | [View](https://react.dev)                            |
| React-Router | Browser Router    | React-router is a router used to built SPAs and is the router backing the popular framework remix.                                                                | [View](https://reactrouter.com/en/main)              |
| MUI          | Component Library | Material UI (MUI) is a component library that provides a standard set of components, styling utils and other helpers, used to quickly build user interfaces.      | [View](https://mui.com/material-ui/getting-started/) |
| zustand      | State Managment   | A barebones state-management solution using simplified flux principles, with a hooks based API.                                                                   | [View](https://github.com/pmndrs/zustand)            |

## 💻 APIs

Our backend APIs are built on top of fastify, a node.js API framework built by one of the primary maintainers of node.js.

| Name    | Role          | Description                                                                                                                                              | Docs                                               |
| ------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Fastify | API framework | Fastify is a node.js web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. | [View](https://fastify.dev/docs/latest/)           |
| Prisma  | ORM           | Prisma is an ORM that has its own schema language that is used to auto-generate a client that is typesafe.                                               | [View](https://www.prisma.io/docs/getting-started) |
| Jest    | Test Runner   | (Deprecated) We are in the process of moving to Vitest.                                                                                                  | -                                                  |

## ☁ Cloud

Our primary could provider is Google Cloud, and we primarily use Cloud Run for all deployments.

| Service                                         | Role               | Description                                                                                                                                                                                                                              |
| ----------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cloud Run](https://cloud.google.com/run?hl=en) | Serverless Runtime | Cloud Run is a serverless runtime on top of [KNative](https://knative.dev/docs/) that allows us to deploy our applications in a seamless manner and provide developers with a application dashboard to view logs, make changes and more. |
| [Cloud SQL](https://cloud.google.com/sql?hl=en) | Database           | CloudSQL is a managed SQL database that allow our team to take all the heavy lifting around backups, security, maintenance and shift that to GCP.          
