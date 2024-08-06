import NodeCode from 'three/src/nodes/core/NodeCode.js';
export { NodeCode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeCode = NodeCode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCode.d.ts
consParams.nodeCode = [
    'name',
    'type',
    'code',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCode.d.ts
objParams.nodeCode = [
    'isNodeCode',
].distinct();
defaults.nodeCode = {};
