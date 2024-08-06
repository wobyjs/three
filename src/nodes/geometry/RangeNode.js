import RangeNode from 'three/src/nodes/geometry/RangeNode.js';
export { RangeNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.RangeNode = RangeNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\geometry\RangeNode.d.ts
consParams.rangeNode = [
    'min',
    'max',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\gpgpu\ComputeNode.d.ts    
objParams.computeNode = [...objParams.node,
    'isComputeNode',
    'count',
    'workgroupSize',
    'dispatchCount',
].distinct();
defaults.rangeNode = {};
