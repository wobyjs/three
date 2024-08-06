import TempNode from 'three/src/nodes/core/TempNode.js';
export { TempNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.TempNode = TempNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\TempNode.d.ts
consParams.tempNode = [
    'type',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\TempNode.d.ts    
objParams.tempNode = [...objParams.node,
    'isTempNode',
].distinct();
defaults.tempNode = {};
