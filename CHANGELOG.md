# eslint-config-digitalbazaar ChangeLog

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
