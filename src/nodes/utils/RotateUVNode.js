import RotateUVNode from 'three/src/nodes/utils/RotateUVNode.js';
export { RotateUVNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/TempNode';
Three.RotateUVNode = RotateUVNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateUVNode.d.ts
consParams.rotateUvNode = [
    'uvNode',
    'rotationNode',
    'centerNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateUvNode.d.ts    
objParams.rotateUvNode = [...objParams.tempNode,
    'uvNode',
    'rotationNode',
    'centerNode',
].distinct();
defaults.rotateUvNode = {};
