import CubeTextureNode from 'three/src/nodes/accessors/CubeTextureNode.js';
export { CubeTextureNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CubeTextureNode = CubeTextureNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\CubeTextureNode.d.ts
consParams.cubeTextureNode = [
    'value',
    'uvNode',
    'levelNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\CubeTextureNode.d.ts    
objParams.cubeTextureNode = [...objParams.textureNode,
    'isCubeTextureNode',
    'uvNode',
    'levelNode',
].distinct();
defaults.cubeTextureNode = {};
