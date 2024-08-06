import FunctionNode from 'three/src/nodes/code/FunctionNode.js';
export { FunctionNode };
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionNode.d.ts
consParams.functionNode = [
    'code',
    'includes',
    'language',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionNode.d.ts    
objParams.functionNode = [...objParams.codeNode,
    'keywords',
].distinct();
defaults.functionNode = {};
