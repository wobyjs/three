import JoinNode from 'three/src/nodes/utils/JoinNode.js';
export { JoinNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/TempNode';
Three.JoinNode = JoinNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\JoinNode.d.ts
/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */
consParams.joinNode = [
    'nodes',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\JoinNode.d.ts
/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */
objParams.joinNode = [...objParams.tempNode,
    'nodes',
].distinct();
defaults.joinNode = {};
