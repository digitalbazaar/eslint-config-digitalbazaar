import d from './default.js';

// this does not count as a duplicate import
// this might be a bug in the plugin
import * as b from './default.js';

// throws namespace error
b.d();

// import not found
// also throws no duplicates
import {notFound1} from './default.js'; 

// throws because notFound is not exported
import {found, notFound} from './notExported.js';

// throws unresolved
import unresolved from './unresolved.js';

// throws no default export
import default1 from './noDefault.js';

// this just gets around linter errors with unused vars
export const used = {
  d, unresolved, found,
};
