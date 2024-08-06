import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader.js';
export * from 'three/examples/jsm/loaders/VOXLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VOXLoader = VOXLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VOXLoader.d.ts
consParams.chunk = [
    'palette',
    'size',
    'data',
].distinct();
consParams.voxLoader = [
    'manager',
].distinct();
consParams.voxMesh = [
    'chunk',
].distinct();
consParams.voxData3dTexture = [
    'chunk',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VOXLoader.d.ts
objParams.chunk = [
    'palette',
    'size',
    'data',
].distinct();
objParams.voxLoader = [...objParams.loader,
].distinct();
objParams.voxMesh = [...objParams.mesh,
].distinct();
objParams.voxData3dTexture = [...objParams.data3dTexture,
].distinct();
defaults.voxLoader = {};
