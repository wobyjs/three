import ContextNode from 'three/src/nodes/core/ContextNode.js';
export { ContextNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ContextNode = ContextNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ContextNode.d.ts
consParams.contextNode = [
    'node',
    'context',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ContextNode.d.ts    
objParams.contextNode = [...objParams.node,
    'isContextNode',
    'node',
    'context',
].distinct();
defaults.contextNode = {};
