import NodeFunctionInput from 'three/src/nodes/core/NodeFunctionInput.js';
export { NodeFunctionInput };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeFunctionInput = NodeFunctionInput;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunctionInput.d.ts
consParams.nodeFunctionInput = [
    'type',
    'name',
    'count',
    'qualifier',
    'isConst',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunctionInput.d.ts
objParams.nodeFunctionInput = [
    'isNodeFunctionInput',
    'count',
    'qualifier',
    'isConst',
].distinct();
defaults.nodeFunctionInput = {};
