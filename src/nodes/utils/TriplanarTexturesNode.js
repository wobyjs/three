import TriplanarTexturesNode from 'three/src/nodes/utils/TriplanarTexturesNode.js';
export { TriplanarTexturesNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/NodeAttribute';
Three.TriplanarTexturesNode = TriplanarTexturesNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TriplanarTexturesNode.d.ts
consParams.triplanarTexturesNode = [
    'textureXNode',
    'textureYNode',
    'textureZNode',
    'scaleNode',
    'positionNode',
    'normalNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TriplanarTexturesNode.d.ts    
objParams.triplanarTexturesNode = [...objParams.node,
    'textureXNode',
    'textureYNode',
    'textureZNode',
    'scaleNode',
    'positionNode',
    'normalNode',
].distinct();
defaults.triplanarTexturesNode = {};
