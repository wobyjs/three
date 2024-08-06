import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper.js';
export * from 'three/examples/jsm/helpers/OctreeHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.OctreeHelper = OctreeHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\OctreeHelper.d.ts
consParams.octreeHelper = [
    'octree',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\OctreeHelper.d.ts    
objParams.octreeHelper = [...objParams.lineSegments,
    'octree',
    'color',
    /**
     * @default 'OctreeHelper'
     */
    'type',
].distinct();
defaults.octreeHelper = {};
