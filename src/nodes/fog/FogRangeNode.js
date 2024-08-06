import FogRangeNode from 'three/src/nodes/fog/FogRangeNode.js';
export { FogRangeNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FogRangeNode = FogRangeNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogRangeNode.d.ts
consParams.fogRangeNode = [
    'colorNode',
    'nearNode',
    'farNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogRangeNode.d.ts    
objParams.fogRangeNode = [...objParams.fogNode,
    'isFogRangeNode',
    'nearNode',
    'farNode',
].distinct();
defaults.fogRangeNode = {};
