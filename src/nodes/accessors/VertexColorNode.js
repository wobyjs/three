import VertexColorNode from 'three/src/nodes/accessors/VertexColorNode.js';
export { VertexColorNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VertexColorNode = VertexColorNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\VertexColorNode.d.ts
consParams.vertexColorNode = [
    'index',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\VertexColorNode.d.ts    
objParams.vertexColorNode = [...objParams.attributeNode,
    'index',
].distinct();
defaults.vertexColorNode = {};
