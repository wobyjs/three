import UniformsNode from 'three/src/nodes/accessors/UniformsNode.js';
export { UniformsNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.UniformsNode = UniformsNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UniformsNode.d.ts
consParams.uniformsElementNode = [
    'arrayBuffer',
    'indexNode',
].distinct();
consParams.uniformsNode = [
    'value',
    'elementType',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UniformsNode.d.ts    
objParams.uniformsElementNode = [...objParams.arrayElementNode,
].distinct();
objParams.uniformsNode = [...objParams.bufferNode,
    'array',
    'elementType',
].distinct();
defaults.uniformsNode = {};
