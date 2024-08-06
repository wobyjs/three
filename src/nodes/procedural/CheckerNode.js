import CheckerNode from 'three/src/nodes/procedural/CheckerNode.js';
export { CheckerNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CheckerNode = CheckerNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\procedural\CheckerNode.d.ts
consParams.checkerNode = [
    'uvNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\procedural\CheckerNode.d.ts    
objParams.checkerNode = [...objParams.tempNode,
    'uvNode',
].distinct();
defaults.checkerNode = {};
