import ColorSpaceNode from 'three/src/nodes/display/ColorSpaceNode.js';
export { ColorSpaceNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ColorSpaceNode = ColorSpaceNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorSpaceNode.d.ts
consParams.colorSpaceNode = [
    'method',
    'node',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorSpaceNode.d.ts    
objParams.colorSpaceNode = [...objParams.tempNode,
    'method',
    'node',
].distinct();
defaults.colorSpaceNode = {};
