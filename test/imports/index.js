// successfully imports a default with no errors
import d from './default.js';

// this does not count as a duplicate import
// this might be a bug in the plugin
import * as b from './default.js';

// throws namespace error
b.d();

// throws a parse error from the duplicate export
import {duplicate} from './duplicate.js';

// throws because notFound is not exported
import {found, notFound} from './notExported.js';

// throws unresolved
import unresolved from './unresolved.js';

// throws no default export
import default1 from './noDefault.js';

// throws because of duplicate import
// useful for catching cases where you might have
// duplicate imports of the same package with different bindings/members
import {member1} from './duplicateImport.js';
import {member2} from './duplicateImport.js';

// this just gets around linter errors with unused vars
export const used = {
  d, unresolved, found, duplicate, member1, member2
};
