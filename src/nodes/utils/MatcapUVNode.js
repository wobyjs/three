import MatcapUVNode from 'three/src/nodes/utils/MatcapUVNode.js';
export { MatcapUVNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/TempNode';
Three.MatcapUVNode = MatcapUVNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MatcapUVNode.d.ts
consParams.matcapUvNode = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MatcapUvNode.d.ts    
objParams.matcapUvNode = [...objParams.tempNode,
].distinct();
defaults.matcapUvNode = {};
