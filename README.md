[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# E2E tests with Playwright

This is a boilerplate / demo of integration tests.
Tests are developed in TypeScript with [Playwright](https://playwright.dev)

- [Page Object Pattern](https://playwright.dev/docs/pom)
- GitHub Actions for CI/CD workflows
- GitHub Pages for [Allure reporting](https://todx0.github.io/ts-node-playwright-demo)
- [Biome](https://biomejs.dev/) lint and formatting
- [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) conventional commit messages
- [Husky](https://typicode.github.io/husky/) pre-commit hooks
- (Optional) Docker support

## Usage

See Github Actions workflows.

- [Run tests](.github/workflows/run-tests.yml) Runs tests with default reporting
- [Run tests with Allure report](.github/workflows/run-tests-allure.yml) Run tests with Allure reporting and uploads to [GitHub Pages](https://todx0.github.io/ts-node-playwright-demo)
- [Run tests in Docker with Allure report](.github/workflows/run-tests-allure-docker.yml) Wraps test execution in Docker container and uploads output to [GitHub Pages](https://todx0.github.io/ts-node-playwright-demo)


Run tests manually:

```bash
pnpm run test:api
pnpm run test:ui
```


