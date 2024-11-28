[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# About

A boilerplate / demo example and a reminder of how few lines of code and configs you need to get have a working Playwright framework with Node.js and Typescript support for API and UI testing.

## Demo

Demo includes working example of an UI and API tests for Bookstore shop.

## Usage

Run Github Actions workflow.

To run API tests manually:

```bash
pnpm run test:api
```

To run UI tests manually:

```bash
pnpm run test:ui
```

## Stack

- Node.js (pnpm)
- TypeScript
- Playwright
- Github Actions for CI/CD workflows
- dprint (lint and formatting)
- commitizen + commitlint