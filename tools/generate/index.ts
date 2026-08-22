// Codegen entry point.
//
// Emits the core `sargam-icons` artifacts (icons.json, Icons.d.ts, public/sw.js)
// and the committed component-name snapshot. Framework packages (e.g.
// @sargamicons/react) build their own sources from the shared Icons/ tree and
// the naming rule in ./naming.ts.

import { generateCoreArtifacts } from './core.ts';

generateCoreArtifacts();
console.log('core artifacts generated (icons.json, Icons.d.ts, public/sw.js, metadata/component-names.json)');
