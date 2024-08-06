import FogExp2Node from 'three/src/nodes/fog/FogExp2Node.js';
export { FogExp2Node };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FogExp2Node = FogExp2Node;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogExp2Node.d.ts
consParams.fogExp2Node = [
    'colorNode',
    'densityNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogExp2Node.d.ts    
objParams.fogExp2Node = [...objParams.fogNode,
    'isFogExp2Node',
    'densityNode',
].distinct();
defaults.fogExp2Node = {};
