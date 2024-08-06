import IndexNode from 'three/src/nodes/core/IndexNode.js';
export { IndexNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.IndexNode = IndexNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\IndexNode.d.ts
consParams.indexNode = [
    'scope',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\IndexNode.d.ts    
objParams.indexNode = [...objParams.node,
    'scope',
].distinct();
defaults.indexNode = {};
