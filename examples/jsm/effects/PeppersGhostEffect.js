import { PeppersGhostEffect } from 'three/examples/jsm/effects/PeppersGhostEffect.js';
export * from 'three/examples/jsm/effects/PeppersGhostEffect.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PeppersGhostEffect = PeppersGhostEffect;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\PeppersGhostEffect.d.ts
consParams.peppersGhostEffect = [
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\PeppersGhostEffect.d.ts
objParams.peppersGhostEffect = [
    'cameraDistance',
    'reflectFromAbove',
].distinct();
defaults.peppersGhostEffect = {};
