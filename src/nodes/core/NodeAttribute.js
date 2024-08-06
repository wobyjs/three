import NodeAttribute from 'three/src/nodes/core/NodeAttribute.js';
export { NodeAttribute };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeAttribute = NodeAttribute;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\Node.d.ts
consParams.node = [
    'nodeType',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\Node.d.ts
objParams.node = [
    'nodeType',
    'updateType',
    'updateBeforeType',
    'uuid',
    'version',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeAttribute.d.ts
consParams.nodeAttribute = [
    'name',
    'type',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeAttribute.d.ts
objParams.nodeAttribute = [
    'isNodeAttribute',
    'name',
    'type',
].distinct();
defaults.nodeAttribute = {};
