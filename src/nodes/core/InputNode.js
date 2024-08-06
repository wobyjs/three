import InputNode from 'three/src/nodes/core/InputNode.js';
export { InputNode };
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\InputNode.d.ts
consParams.inputNode = [
    'value',
    'nodeType',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\InputNode.d.ts    
objParams.inputNode = [...objParams.node,
    'isInputNode',
    'value',
    'precision',
].distinct();
defaults.inputNode = {};
