import ViewportDepthNode from 'three/src/nodes/display/ViewportDepthNode.js';
export { ViewportDepthNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ViewportDepthNode = ViewportDepthNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthNode.d.ts
consParams.viewportDepthNode = [
    'scope',
    'valueNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthNode.d.ts    
objParams.viewportDepthNode = [...objParams.node,
    'scope',
    'valueNode',
].distinct();
defaults.viewportDepthNode = {};
