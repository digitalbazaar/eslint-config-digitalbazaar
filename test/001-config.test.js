/**
 * Test digitalbazaar eslint configs.
*/
import {describe, expect, it} from 'vitest';
import {ESLint} from 'eslint';
import {join} from 'node:path';

describe('@digitalbazaar/eslint-config base', () => {
  const eslint = new ESLint({
    overrideConfigFile: join(import.meta.dirname, '../configs/base.js')
  });

  it('incorrect import sort all', async () => {
    const results = await eslint.lintText(`
// incorrect all
import * as bAll from 'b.js';
import * as aAll from 'a.js';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(true);
  });

  it('correct import sort all', async () => {
    const results = await eslint.lintText(`
// correct all
import * as aaAll from 'a.js';
import * as bbAll from 'b.js';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(false);
  });

  it('incorrect import sort multiple', async () => {
    const results = await eslint.lintText(`
// incorrect multiple
import {zed, rat, girl} from 'baboon2000.js';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(true);
  });

  it('correct import sort multiple', async () => {
    const results = await eslint.lintText(`
// correct multiple
import {girl2, rat2, zed2} from 'baboon2000.js';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(false);
  });

  it('incorrect import sort single', async () => {
    const results = await eslint.lintText(`
// incorrect single
import {default1} from 'defaulter';
import aDefault1 from 'adefaulter';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(true);
  });

  it('correct import sort single', async () => {
    const results = await eslint.lintText(`
// correct single
import aDefault2 from 'adefaulter';
import {default2} from 'defaulter';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(false);
  });

  it('incorrect import sort no members', async () => {
    const results = await eslint.lintText(`
// imports with no members must go last
import 'no-members';
import * as baboon1 from 'baboon-lib-1';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(true);
  });

  it('correct import sort no members', async () => {
    const results = await eslint.lintText(`
// imports with no members must go last
import * as baboon2 from 'baboon-lib-1';
import 'no-members';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(false);
  });

  it('correct import sort mixed', async () => {
    const results = await eslint.lintText(`
/*
 * import * as all goes first
 * import {multiple, members} goes second
 * import singleMember goes third
 * import {singleMember} goes third
 * import 'no-members' goes last
 */
import * as baboon3 from 'babbon-lib-3';
import {multi1, multi2, multi3} from 'multi-x-3';
import single3 from 'has-default-export';
import {single4} from 'has-single-named-export';
import 'no-export';
    `);
    const messages = results[0].messages;
    expect(messages.some(m => m.ruleId === 'sort-imports')).toBe(false);
  });

  // see more examples in index.js
});
