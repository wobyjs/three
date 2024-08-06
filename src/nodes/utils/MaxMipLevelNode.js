import MaxMipLevelNode from 'three/src/nodes/utils/MaxMipLevelNode.js';
export { MaxMipLevelNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/UniformNode';
Three.MaxMipLevelNode = MaxMipLevelNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MaxMipLevelNode.d.ts
consParams.maxMipLevelNode = [
    'textureNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MaxMipLevelNode.d.ts    
objParams.maxMipLevelNode = [...objParams.uniformNode,
    'textureNode',
].distinct();
defaults.maxMipLevelNode = {};
