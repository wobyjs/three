import VaryingNode from 'three/src/nodes/core/VaryingNode.js';
export { VaryingNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VaryingNode = VaryingNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VaryingNode.d.ts
consParams.varyingNode = [
    'node',
    'name',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VaryingNode.d.ts    
objParams.varyingNode = [...objParams.node,
    'node',
    'name',
].distinct();
defaults.varyingNode = {};
