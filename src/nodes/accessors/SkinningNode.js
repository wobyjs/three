import SkinningNode from 'three/src/nodes/accessors/SkinningNode.js';
export { SkinningNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.SkinningNode = SkinningNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\SkinningNode.d.ts
consParams.skinningNode = [
    'skinnedMesh',
    'useReference',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\SkinningNode.d.ts    
objParams.skinningNode = [...objParams.node,
    'skinnedMesh',
    'useReference',
    'skinIndexNode',
    'skinWeightNode',
    'bindMatrixNode',
    'bindMatrixInverseNode',
    'boneMatricesNode',
].distinct();
defaults.skinningNode = {};
