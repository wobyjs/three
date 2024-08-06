import BlendModeNode from 'three/src/nodes/display/BlendModeNode.js';
export { BlendModeNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BlendModeNode = BlendModeNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\BlendModeNode.d.ts
consParams.blendModeNode = [
    'blendMode',
    'baseNode',
    'blendNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\BlendModeNode.d.ts    
objParams.blendModeNode = [...objParams.tempNode,
    'baseNode',
    'blendMode',
    'blendNode',
].distinct();
defaults.blendModeNode = {};
