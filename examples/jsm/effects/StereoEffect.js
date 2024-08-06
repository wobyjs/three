import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect.js';
export * from 'three/examples/jsm/effects/StereoEffect.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.StereoEffect = StereoEffect;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\StereoEffect.d.ts
consParams.stereoEffect = [
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\StereoEffect.d.ts
objParams.stereoEffect = [].distinct();
defaults.stereoEffect = {};
