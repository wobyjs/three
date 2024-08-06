import RotateNode from 'three/src/nodes/utils/RotateNode.js';
export { RotateNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/TempNode';
Three.RotateNode = RotateNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateNode.d.ts
consParams.rotateNode = [
    'positionNode',
    'rotationNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateNode.d.ts    
objParams.rotateNode = [...objParams.tempNode,
    'positionNode',
    'rotationNode',
].distinct();
defaults.rotateNode = {};
