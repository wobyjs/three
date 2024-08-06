import EquirectUVNode from 'three/src/nodes/utils/EquirectUVNode.js';
export { EquirectUVNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/TempNode';
Three.EquirectUVNode = EquirectUVNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\EquirectUVNode.d.ts
consParams.equirectUvNode = [
    'dirNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\EquirectUvNode.d.ts    
objParams.equirectUvNode = [...objParams.tempNode,
].distinct();
defaults.equirectUVNode = {};
