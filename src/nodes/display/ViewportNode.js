import ViewportNode from 'three/src/nodes/display/ViewportNode.js';
export { ViewportNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ViewportNode = ViewportNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportNode.d.ts
consParams.viewportNode = [
    'scope',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportNode.d.ts    
objParams.viewportNode = [...objParams.node,
    'scope',
    'isViewportNode',
].distinct();
defaults.viewportNode = {};
