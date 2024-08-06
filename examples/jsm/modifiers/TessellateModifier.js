import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js';
export * from 'three/examples/jsm/modifiers/TessellateModifier.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TessellateModifier = TessellateModifier;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\TessellateModifier.d.ts
consParams.tessellateModifier = [
    'maxEdgeLength',
    'maxIterations',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\TessellateModifier.d.ts
objParams.tessellateModifier = [
    'maxEdgeLength',
    'maxIterations',
].distinct();
defaults.tessellateModifier = {};
