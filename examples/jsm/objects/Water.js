import { Water } from 'three/examples/jsm/objects/Water.js';
export * from 'three/examples/jsm/objects/Water.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Water = Water;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water.d.ts
consParams.waterOptions = [
    'textureWidth',
    'textureHeight',
    'clipBias',
    'alpha',
    'time',
    'waterNormals',
    'sunDirection',
    'sunColor',
    'waterColor',
    'eye',
    'distortionScale',
    'side',
    'fog',
].distinct();
consParams.water = [
    'geometry',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water.d.ts
objParams.waterOptions = [
    'textureWidth',
    'textureHeight',
    'clipBias',
    'alpha',
    'time',
    'waterNormals',
    'sunDirection',
    'sunColor',
    'waterColor',
    'eye',
    'distortionScale',
    'side',
    'fog',
].distinct();
objParams.water = [...objParams.mesh,
    'material',
].distinct();
defaults.water = {};
