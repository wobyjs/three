import { ProgressiveLightMap } from 'three/examples/jsm/misc/ProgressiveLightMap.js';
export * from 'three/examples/jsm/misc/ProgressiveLightMap.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ProgressiveLightMap = ProgressiveLightMap;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ProgressiveLightMap.d.ts
consParams.uvBoxes = [
    'w',
    'h',
    'index',
].distinct();
consParams.lightMapContainers = [
    'basicMat',
    'object',
].distinct();
consParams.progressiveLightMap = [
    'renderer',
    'res',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ProgressiveLightMap.d.ts
objParams.uvBoxes = [
    'w',
    'h',
    'index',
].distinct();
objParams.lightMapContainers = [
    'basicMat',
    'object',
].distinct();
objParams.progressiveLightMap = [
    'renderer',
    'res',
    'lightMapContainers',
    'compiled',
    'scene',
    'tinyTarget',
    'buffer1Active',
    'firstUpdate',
    'warned',
    'progressiveLightMap1',
    'progressiveLightMap2',
    'uvMat',
    'uv_boxes',
    'blurringPlane',
    'labelMaterial',
    'labelPlane',
    'labelMesh',
].distinct();
defaults.progressiveLightMap = {};
