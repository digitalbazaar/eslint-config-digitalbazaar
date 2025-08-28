# @digitalbazaar/eslint-config ChangeLog

### 6.0.0 - 2025-08-xx

### Changed
- **BREAKING**: Rename NPM package from `eslint-config-digitalbazaar` to
  `@digitalbazaar/eslint-config`.
- **BREAKING**: Update to `eslint@9`.
  - Please see the migration notes below.
  - Comments and suggestions welcome for how best to adapt to the rules that
    were changed, added, or removed between v8 and v9.
  - The way configuration is done changed significantly. Suggestions welcome on
    how best to adapt to the new style.
- **BREAKING**: Set `ecmaVersion` to `latest`. Override in project config if a
  specific version limitation is required.
- **BREAKING**: Change `'@stylistic/comma-dangle'` to `'never'` from
  `'only-multiline'`. Changed to enforce a more uniform style. Override locally
  if it causes issues.
- **BREAKING**: Remove `vue` rules for Vue 2. Keep `vue3` as a versioned name.

### Migration
- ESLint v9 is a major breaking change and will require manual updates.
- ESLint has a migration guide:
  - https://eslint.org/docs/latest/use/configure/migration-guide
- A few major notes:
  - The configuration file changes from multiple `.eslintrc.cjs` or similar to
    a single top level `eslint.config.js`.
  - Invocation is now `eslint` without options.
  - Style rules were deprecated and moved to the `stylistic` project.
  - The Digital Bazaar rules are mostly the same as before with updates to
    `@stylistic/RULENAME` as needed.
  - Note the common `max-len` is now `@stylistic/max-len`.
  - Unused rules are now flagged which should help with migration to new rules,
    or elimination of unused rules.
  - Quasar has not yet updated support for v9. Until that is updated, stay with
    v8, or update to v9 and drop Quasar linting and only use Vue linting.
- Major types of rules are grouped together.
- The groups can be composed together as needed.
- There are opinionated "recommended" configs that compose a number of rules
  and apply to many common Digital Bazaar repositories.
- See the [README](./README.md) for notes and usage examples.

### 5.2.0 - 2024-05-02

### Changed
- Ignore long URLs.

### 5.1.0 - 2024-05-02

### Changed
- Ingore `SPDX-License-Identifier` comment lengths. The spec requires one line
  which can be long when using multiple custom ids.

### 5.0.1 - 2023-05-19

### Fixed
- Fix peer dependency version.

### 5.0.0 - 2023-05-18

### Changed
- **BREAKING**: Update for `eslint-plugin-jsdoc@42`.
  - `jsdoc/newline-after-description` changed to `jsdoc/tag-lines` rule.
  - `eslint-plugin-jsdoc` >= 42 now required to support newer `tag-lines`
    options.
  - Add optional peer dependency version on `eslint-plugin-jsdoc@42`.

### 4.2.0 - 2022-11-28

### Added
- Add `digitalbazaar/import` preset. Uses `eslint-plugin-import` rules to
  check ES6 imports.

### 4.1.0 - 2022-07-20

### Added
- Add `digitalbazaar/vue3` preset for Vue 3. Use `digitalbazaar/vue` for Vue 2.

### Changed
- Template cleanups.

### 4.0.1 - 2022-06-23

### Changed
- Use `package.json` `files` field.

### 4.0.0 - 2022-06-23

### Added
- Add rules for [`sort-imports`](https://eslint.org/docs/rules/sort-imports).

### 3.0.0 - 2022-04-25

### Changed
- **BREAKING**: Update to `eslint@8`.
- Use `es2022` environment. Automatically sets `ecmaVersion` to `13` (2022).
- Disable `jsdoc/check-examples` until
  [eslint 8 related issue](https://github.com/eslint/eslint/issues/14745) is fixed.

### 2.9.0 - 2022-04-22

### Added
- Use eslint-plugin-eslint-plugin to self check.
- Add module preset.

### Changed
- Use "test" target to show file errors. This should be improved to do proper
  testing.
- Use "lint" target to self check.

### 2.8.0 - 2021-04-12

### Added
- Add rule for `dot-notation`.

### 2.7.0 - 2021-04-12

### Added
- Add rule for `one-var`. Require multiple variable declarations per scope.

### 2.6.1 - 2020-09-11

### Changed
- Change peerDep for `eslint` to `^7.1.0` to ensure `no-loss-of-precision` support.
- Change devDep for `eslint` to `^7.1.0` to ensure `no-loss-of-precision` support.

## 2.6.0 - 2020-09-10

### Added
- Add rule `no-loss-of-precision`: 'error'.
- Add rule `no-return-await`: 'error'.
- Add tests for `no-loss-of-precision`.

## 2.5.0 - 2020-05-20

### Changed
- Support eslint@7.

## 2.4.0 - 2020-04-29

### Added
- A rule to disallow yoda comparisons.
- Add rule `no-cond-assign`.
- Add rule `valid-typeof`.

## 2.3.0 - 2020-02-25

### Added
- Use 'brace-style' of '1tbs'.

## 2.2.0 - 2020-01-28

### Changed
- Update eslint dependencies:
  - Update version.
  - **BREAKING**: Remove from regular dependencies.
  - Add to devDependencies.
  - Add to peerDependencies.

## 2.1.0 - 2020-01-21

### Added
- Add `no-dupe-key`.

## 2.0.1 - 2019-08-19

### Fixed
- Fixed vue/mustache-interpolation-spacing rule style.

## 2.0.0 - 2019-03-19

### Changed
- **BREAKING**: JSDoc and Vue rules no longer depend on base rules. This
  means that one must explicitly include the base rules as required.
- Update README to better explain the project.
- Added a template for all the rules.

## 1.8.0 - 2019-03-12

### Added
- Linting rules for jsdocs.

## 1.7.0 - 2019-02-22

### Added
- Config templates that can be used to setup other modules.

## 1.6.0 - 2019-02-18

### Changed
- Add rules related to `quote-props` and template literals.

## 1.5.0 - 2019-02-08

### Changed
- Remove func-paren rule.
- Add rule for single quotes.

## 1.4.0 - 2019-02-06

### Changed
- Set `function-paren-newline` rule so function paranthesis line breaks are
  consistent.
- Set `operator-linebreak` so line breaks come after operators.

## 1.3.0 - 2019-02-05

### Changed
- Set `vue/html-closing-bracket-newline` rule to never for single and multiline.

## 1.2.0 - 2019-02-04

### Changed
- Make `eslint` a regular dependency.

## 1.1.0 - 2019-01-31

### Changed
- Update arrow function paren rule.
- Add vue rules.

## 1.0.0 - 2019-01-30

- See git history for changes previous to this release.
