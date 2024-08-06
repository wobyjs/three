import CodeNode from 'three/src/nodes/code/CodeNode.js';
export { CodeNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CodeNode = CodeNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\CodeNode.d.ts
consParams.codeNodeInclude = [].distinct();
consParams.codeNode = [
    'code',
    'includes',
    'language',
].distinct();
objParams.codeNode = [...objParams.node,
    'isCodeNode',
    'code',
    'language',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\CodeNode.d.ts
objParams.codeNodeInclude = [].distinct();
defaults.codeNode = {};
