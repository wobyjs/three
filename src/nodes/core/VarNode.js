import VarNode from 'three/src/nodes/core/VarNode.js';
export { VarNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VarNode = VarNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VarNode.d.ts
consParams.varNode = [
    'node',
    'name',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VarNode.d.ts    
objParams.varNode = [...objParams.node,
    'node',
    'name',
].distinct();
defaults.varNode = {};
