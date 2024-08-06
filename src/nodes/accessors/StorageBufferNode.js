import StorageBufferNode from 'three/src/nodes/accessors/StorageBufferNode.js';
export { StorageBufferNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.StorageBufferNode = StorageBufferNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\StorageBufferNode.d.ts
consParams.storageBufferNode = [
    'value',
    'bufferType',
    'bufferCount',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\StorageBufferNode.d.ts    
objParams.storageBufferNode = [...objParams.bufferNode,
    'bufferObject',
].distinct();
defaults.storageBufferNode = {};
