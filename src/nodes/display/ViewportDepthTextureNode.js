import ViewportDepthTextureNode from 'three/src/nodes/display/ViewportDepthTextureNode.js';
export { ViewportDepthTextureNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ViewportDepthTextureNode = ViewportDepthTextureNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthTextureNode.d.ts
consParams.viewportDepthTextureNode = [
    'uvNode',
    'levelNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthTextureNode.d.ts    
objParams.viewportDepthTextureNode = [...objParams.viewportTextureNode,
].distinct();
defaults.viewportDepthTextureNode = {};
