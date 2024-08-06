import StackNode from 'three/src/nodes/core/StackNode.js';
export { StackNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.StackNode = StackNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\StackNode.d.ts
consParams.stackNode = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\StackNode.d.ts    
objParams.stackNode = [...objParams.node,
    'isStackNode',
    'nodes',
    'outputNode',
].distinct();
defaults.stackNode = {};
