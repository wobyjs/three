import LightsNode from 'three/src/nodes/lighting/LightsNode.js';
export { LightsNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LightsNode = LightsNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightsNode.d.ts
consParams.lightsNode = [
    'lightNodes',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightsNode.d.ts    
objParams.lightsNode = [...objParams.node,
    'lightNodes',
].distinct();
defaults.lightsNode = {};
