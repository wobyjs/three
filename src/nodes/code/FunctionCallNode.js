import FunctionCallNode from 'three/src/nodes/code/FunctionCallNode.js';
export { FunctionCallNode };
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionCallNode.d.ts
consParams.functionCallNode = [
    'functionNode',
    'parameters', //{ [name: string]: Node }
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionCallNode.d.ts    
objParams.functionCallNode = [...objParams.tempNode,
    'functionNode',
    'parameters',
].distinct();
defaults.functionCallNode = {};
