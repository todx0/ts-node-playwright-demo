[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# E2E tests with Playwright

This is a boilerplate / demo of integration tests.
Tests are developed in TypeScript with [Playwright](https://playwright.dev)

- [Page Object Pattern](https://playwright.dev/docs/pom)
- Github Actions for CI/CD workflows
- [dprint](https://dprint.dev/) (lint and formatting)
- [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
- [husky](https://typicode.github.io/husky/) pre-commit hooks

## Usage

Run Github Actions workflow.

Run API tests manually:

```bash
pnpm run test:api
```

Run UI tests manually:

```bash
pnpm run test:ui
```

Commit changes:
```bash
pnpm run commit
```
This will trigger husky pre-commit hook for dprint formatting and run commitizen for commit message.


