import AfterImageNode from 'three/src/nodes/display/AfterImageNode.js';
export { AfterImageNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AfterImageNode = AfterImageNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AfterImageNode.d.ts
consParams.afterImageNode = [
    'textureNode',
    'damp',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AfterImageNode.d.ts    
objParams.afterImageNode = [...objParams.tempNode,
    'textureNode',
    'textureNodeOld',
    'damp',
].distinct();
defaults.afterImageNode = {};
