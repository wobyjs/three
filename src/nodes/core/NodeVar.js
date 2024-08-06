import NodeVar from 'three/src/nodes/core/NodeVar.js';
export { NodeVar };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeVar = NodeVar;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVar.d.ts
consParams.nodeVar = [
    'name',
    'type',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVar.d.ts
objParams.nodeVar = [
    'isNodeVar',
    'name',
    'type',
].distinct();
defaults.nodeVar = {};
