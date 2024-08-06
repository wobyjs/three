import AnamorphicNode from 'three/src/nodes/display/AnamorphicNode.js';
export { AnamorphicNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AnamorphicNode = AnamorphicNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AnamorphicNode.d.ts
consParams.anamorphicNode = [
    'textureNode',
    'thresholdNode',
    'scaleNode',
    'samples',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AnamorphicNode.d.ts    
objParams.anamorphicNode = [...objParams.tempNode,
    'textureNode',
    'thresholdNode',
    'scaleNode',
    'samples',
    'resolution',
].distinct();
defaults.anamorphicNode = {};
