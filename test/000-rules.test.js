/**
 * Test digitalbazaar eslint rules.
*/
import catchSpacing from '../rules/catch-spacing.js';
import {RuleTester} from 'eslint';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  }
});

ruleTester.run('catch-spacing', catchSpacing, {
  valid: [
    {
      code: 'try {} catch(e) {}'
    },
    {
      code: 'try {} catch {}'
    }
  ],
  invalid: [
    {
      code: 'try {} catch (e) {}',
      errors: [{messageId: 'unexpectedSpace'}],
      output: 'try {} catch(e) {}'
    },
    {
      code: 'try {} catch (e){}',
      errors: [{messageId: 'unexpectedSpace'}],
      output: 'try {} catch(e){}'
    },
    {
      code: 'try {} catch{}',
      errors: [{messageId: 'missingSpace'}],
      output: 'try {} catch {}'
    }
  ]
});
