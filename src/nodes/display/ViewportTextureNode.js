import ViewportTextureNode from 'three/src/nodes/display/ViewportTextureNode.js';
export * from 'three/src/textures/FramebufferTexture.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ViewportTextureNode = ViewportTextureNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportTextureNode.d.ts
consParams.viewportTextureNode = [
    'uvNode',
    'levelNode',
    'framebufferTexture',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportTextureNode.d.ts    
objParams.viewportTextureNode = [...objParams.textureNode,
    'generateMipmaps',
    'updateBeforeType',
].distinct();
defaults.viewportTextureNode = {};
