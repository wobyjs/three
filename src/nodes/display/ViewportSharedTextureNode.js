import ViewportSharedTextureNode from 'three/src/nodes/display/ViewportSharedTextureNode.js';
export { ViewportSharedTextureNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ViewportSharedTextureNode = ViewportSharedTextureNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportSharedTextureNode.d.ts
consParams.viewportSharedTextureNode = [
    'uvNode',
    'levelNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportSharedTextureNode.d.ts    
objParams.viewportSharedTextureNode = [...objParams.viewportTextureNode,
].distinct();
defaults.viewportSharedTextureNode = {};
