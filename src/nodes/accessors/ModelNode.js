import ModelNode from 'three/src/nodes/accessors/ModelNode.js';
export { ModelNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ModelNode = ModelNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelNode.d.ts
/**
 * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
 */
consParams.modelNode = [
    'scope',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelNode.d.ts
/**
 * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
 */
objParams.modelNode = [...objParams.object3dNode,
].distinct();
defaults.modelNode = {};
