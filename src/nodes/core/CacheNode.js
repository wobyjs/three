import CacheNode from 'three/src/nodes/core/CacheNode.js';
export { CacheNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CacheNode = CacheNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\CacheNode.d.ts
consParams.cacheNode = [
    'node',
    'cache',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\CacheNode.d.ts    
objParams.cacheNode = [...objParams.node,
    'isCacheNode',
    'node',
    'cache',
].distinct();
defaults.cacheNode = {};
