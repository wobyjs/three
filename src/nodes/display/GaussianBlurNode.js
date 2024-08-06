import GaussianBlurNode from 'three/src/nodes/display/GaussianBlurNode.js';
export { GaussianBlurNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.GaussianBlurNode = GaussianBlurNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\GaussianBlurNode.d.ts
consParams.gaussianBlurNode = [
    'textureNode',
    'sigma',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\GaussianBlurNode.d.ts    
objParams.gaussianBlurNode = [...objParams.tempNode,
    'textureNode',
    'sigma',
    'directionNode',
    'resolution',
].distinct();
defaults.gaussianBlurNode = {};
