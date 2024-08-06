import { Refractor } from 'three/examples/jsm/objects/Refractor.js';
export * from 'three/examples/jsm/objects/Refractor.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Refractor = Refractor;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Refractor.d.ts
consParams.refractorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct();
consParams.refractor = [
    'geometry',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Refractor.d.ts
objParams.refractorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct();
objParams.refractor = [...objParams.mesh,
    'camera',
].distinct();
defaults.refractor = {};
