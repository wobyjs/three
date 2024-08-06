import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';
export * from 'three/examples/jsm/objects/MarchingCubes.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MarchingCubes = MarchingCubes;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\MarchingCubes.d.ts
consParams.marchingCubes = [
    'resolution',
    'material',
    'enableUvs',
    'enableColors',
    'maxPolyCount',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\MarchingCubes.d.ts    
objParams.marchingCubes = [...objParams.mesh,
    'enableUvs',
    'enableColors',
    'resolution',
    // parameters
    'isolation',
    // size of field, 32 is pushing it in Javascript :)
    'size',
    'size2',
    'size3',
    'halfsize',
    // deltas
    'delta',
    'yd',
    'zd',
    'field',
    'normal_cache',
    'palette',
    'maxCount',
    'count',
    'hasPositions',
    'hasNormals',
    'hasColors',
    'hasUvs',
    'positionArray',
    'normalArray',
    'uvArray',
    'colorArray',
].distinct();
defaults.marchingCubes = {};
