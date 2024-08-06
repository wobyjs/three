import NodeFunction from 'three/src/nodes/core/NodeFunction.js';
export { NodeFunction };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeFunction = NodeFunction;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunction.d.ts
consParams.nodeFunction = [
    'type',
    'inputs',
    'name',
    'presicion',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunction.d.ts
objParams.nodeFunction = [
    'isNodeFunction',
    'type',
    'inputs',
    'name',
    'presicion',
].distinct();
defaults.nodeFunction = {};
