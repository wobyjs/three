import ModelViewProjectionNode from 'three/src/nodes/accessors/ModelViewProjectionNode.js';
export { ModelViewProjectionNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ModelViewProjectionNode = ModelViewProjectionNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelViewProjectionNode.d.ts
consParams.modelViewProjectionNode = [
    'positionNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelViewProjectionNode.d.ts    
objParams.modelViewProjectionNode = [...objParams.node,
].distinct();
defaults.modelViewProjectionNode = {};
