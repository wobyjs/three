import NodeCache from 'three/src/nodes/core/NodeCache.js';
export { NodeCache };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeCache = NodeCache;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCache.d.ts
consParams.nodeCache = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCache.d.ts
objParams.nodeCache = [
    'id',
    'nodesData',
].distinct();
defaults.nodeCache = {};
