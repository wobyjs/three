import TextureNode from 'three/src/nodes/accessors/TextureNode.js';
export * from 'three/src/textures/Texture.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TextureNode = TextureNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureNode.d.ts
consParams.textureNode = [
    'value',
    'uvNode',
    'levelNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureNode.d.ts    
objParams.textureNode = [...objParams.uniformNode,
    'uvNode',
    'levelNode',
    'compareNode',
    'depthNode',
    'gradNode',
    'sampler',
    'updateMatrix',
    'referenceNode',
].distinct();
defaults.textureNode = {};
