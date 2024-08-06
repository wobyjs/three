import BufferNode from 'three/src/nodes/accessors/BufferNode.js';
export { BufferNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BufferNode = BufferNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BufferNode.d.ts
consParams.bufferNode = [
    'value',
    'bufferType',
    'bufferCount',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BufferNode.d.ts    
objParams.bufferNode = [...objParams.uniformNode,
    'isBufferNode',
    'bufferType',
    'bufferCount',
].distinct();
defaults.bufferNode = {};
