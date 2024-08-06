import TextureBicubicNode from 'three/src/nodes/accessors/TextureBicubicNode.js';
export { TextureBicubicNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TextureBicubicNode = TextureBicubicNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureBicubicNode.d.ts
consParams.textureBicubicNode = [
    'textureNode',
    'blurNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureBicubicNode.d.ts    
objParams.textureBicubicNode = [...objParams.tempNode,
    'textureNode',
    'blurNode',
].distinct();
defaults.textureBicubicNode = {};
