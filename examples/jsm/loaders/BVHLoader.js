import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader.js';
export * from 'three/examples/jsm/loaders/BVHLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BVHLoader = BVHLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\BVHLoader.d.ts
consParams.bvh = [
    'clip',
    'skeleton',
].distinct();
consParams.bvhLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\BVHLoader.d.ts
objParams.bvh = [
    'clip',
    'skeleton',
].distinct();
objParams.bvhLoader = [...objParams.loader,
    'animateBonePositions',
    'animateBoneRotations',
].distinct();
defaults.bvhLoader = {};
