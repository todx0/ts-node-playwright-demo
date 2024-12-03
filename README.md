[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# E2E tests with Playwright

This is a boilerplate / demo of integration tests.
Tests are developed in TypeScript with [Playwright](https://playwright.dev)

- [Page Object Pattern](https://playwright.dev/docs/pom)
- Github Actions for CI/CD workflows
- [Biome](https://biomejs.dev/) lint and formatting
- [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) conventional commit messages
- [Husky](https://typicode.github.io/husky/) pre-commit hooks

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


