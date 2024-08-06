import OscNode from 'three/src/nodes/utils/OscNode.js';
export { OscNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/NodeAttribute';
Three.OscNode = OscNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\OscNode.d.ts
consParams.oscNode = [
    'method',
    'timeNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\OscNode.d.ts    
objParams.oscNode = [...objParams.node,
    'method',
    'timeNode',
].distinct();
defaults.oscNode = {};
