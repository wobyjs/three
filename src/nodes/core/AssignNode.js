import AssignNode from 'three/src/nodes/core/AssignNode.js';
export { AssignNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AssignNode = AssignNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AssignNode.d.ts
consParams.assignNode = [
    'targetNode',
    'sourceNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AssignNode.d.ts    
objParams.assignNode = [...objParams.tempNode,
].distinct();
defaults.assignNode = {};
