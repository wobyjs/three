import SpriteSheetUVNode from 'three/src/nodes/utils/SpriteSheetUVNode.js';
export { SpriteSheetUVNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/NodeAttribute';
Three.SpriteSheetUVNode = SpriteSheetUVNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SpriteSheetUVNode.d.ts
consParams.spriteSheetUvNode = [
    'countNode',
    'uvNode',
    'frameNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SpriteSheetUvNode.d.ts    
objParams.spriteSheetUvNode = [...objParams.node,
    'countNode',
    'uvNode',
    'frameNode',
].distinct();
defaults.spriteSheetUvNode = {};
