import RemapNode from 'three/src/nodes/utils/RemapNode.js';
export { RemapNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/NodeAttribute';
Three.RemapNode = RemapNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RemapNode.d.ts
consParams.remapNode = [
    'node',
    'inLowNode',
    'inHighNode',
    'outLowNode',
    'outHighNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RemapNode.d.ts    
objParams.remapNode = [...objParams.node,
    'node',
    'inLowNode',
    'inHighNode',
    'outLowNode',
    'outHighNode',
    'doClamp',
].distinct();
defaults.remapNode = {};
