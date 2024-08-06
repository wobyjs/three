import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect.js';
export * from 'three/examples/jsm/effects/AnaglyphEffect.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AnaglyphEffect = AnaglyphEffect;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AnaglyphEffect.d.ts
consParams.anaglyphEffect = [
    'renderer',
    'width',
    'height',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AnaglyphEffect.d.ts
objParams.anaglyphEffect = [
    'colorMatrixLeft',
    'colorMatrixright',
].distinct();
defaults.anaglyphEffect = {};
