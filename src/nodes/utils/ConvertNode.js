import ConvertNode from 'three/src/nodes/utils/ConvertNode.js';
export { ConvertNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/NodeAttribute';
Three.ConvertNode = ConvertNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ConvertNode.d.ts
consParams.convertNode = [
    'node',
    'convertTo',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ConvertNode.d.ts    
objParams.convertNode = [...objParams.node,
    'node',
    'convertTo',
].distinct();
defaults.convertNode = {};
