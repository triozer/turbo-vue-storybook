# turbo-vue-storybook

[![codecov](https://codecov.io/github/triozer/turbo-vue-storybook/branch/main/graph/badge.svg?token=6AP4X0UNRZ)](https://codecov.io/github/triozer/turbo-vue-storybook)

A simple yet complete TypeScript + Vue 3 library starter powered by:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [Vue](https://vuejs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [pnpm](https://pnpm.io/) for package management
- [Vitest](https://vitest.dev) for Vue components unit testing
- [Jest](https://jestjs.io/) for TypeScript scripts unit testing


## Using this example

Clone the design system example locally.

### Useful Commands

- `pnpm build` - Build all packages including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm lint` - Check lint for all packages
- `pnpm lint:fix` - Lint all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Turborepo

[Turborepo](https://turbo.build/repo) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

Using Turborepo simplifes managing your design system monorepo, as you can have a single lint, build, test, and release process for all packages. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

## Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `packages/@acme/ui`: Core Vue components
- `packages/@acme/utils`: Shared TypeScript scripts
- `packages/@acme/tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config-acme`: ESLint preset

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). pNPM Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-W` workspaces flag with `pnpm add`.

This example sets up your `.gitignore` to exclude all generated files, other folders like `node_modules` used to store your dependencies.

### Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `pnpm build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

For `acme-ui`, use rely on Vite's `build` command.

