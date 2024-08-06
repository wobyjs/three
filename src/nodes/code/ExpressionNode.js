import ExpressionNode from 'three/src/nodes/code/ExpressionNode.js';
export { ExpressionNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ExpressionNode = ExpressionNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\ExpressionNode.d.ts
consParams.expressionNode = [
    'snipped',
    'nodeType',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\ExpressionNode.d.ts    
objParams.expressionNode = [...objParams.tempNode,
    'snipped',
].distinct();
defaults.expressionNode = {};
