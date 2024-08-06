import BatchNode from 'three/src/nodes/accessors/BatchNode.js';
export { BatchNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BatchNode = BatchNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BatchNode.d.ts
consParams.batchNode = [
    'batchMesh',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BatchNode.d.ts    
objParams.batchNode = [...objParams.node,
    'batchMesh',
    'instanceColorNode',
    'batchingIdNode',
].distinct();
defaults.batchNode = {};
