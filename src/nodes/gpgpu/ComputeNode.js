import ComputeNode from 'three/src/nodes/gpgpu/ComputeNode.js';
export { ComputeNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ComputeNode = ComputeNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\gpgpu\ComputeNode.d.ts
consParams.computeNode = [
    'computeNode',
    'count',
    'workgroupSize',
].distinct();
objParams.computeNode = [
    'isComputeNode',
    'count',
    'workgroupSize',
    'dispatchCount',
];
defaults.computeNode = {};
