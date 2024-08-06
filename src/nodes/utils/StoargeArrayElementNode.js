import StoargeArrayElementNode from 'three/src/nodes/utils/StorageArrayElementNode.js';
export { StoargeArrayElementNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './ArrayElementNode';
Three.StoargeArrayElementNode = StoargeArrayElementNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\StoargeArrayElementNode.d.ts
consParams.storageArrayElementNode = [
    'storageBufferNode',
    'indexNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\StoargeArrayElementNode.d.ts    
objParams.storageArrayElementNode = [...objParams.arrayElementNode,
    'node',
    'storageBufferNode',
].distinct();
defaults.stoargeArrayElementNode = {};
