import {afterAll, describe, it} from 'vitest';
import {RuleTester} from 'eslint';

// Assign Vitest's functions to RuleTester's static properties
RuleTester.afterAll = afterAll;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;
