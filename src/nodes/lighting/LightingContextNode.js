import LightingContextNode from 'three/src/nodes/lighting/LightingContextNode.js';
export { LightingContextNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LightingContextNode = LightingContextNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingContextNode.d.ts
consParams.lightingContextNode = [
    'node',
    'lightingModel',
    'backdropNode',
    'backdropAlphaNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingContextNode.d.ts    
objParams.lightingContextNode = [...objParams.contextNode,
    'lightingModelNode',
    'backdropNode',
    'backdropAlphaNode',
].distinct();
defaults.lightingContextNode = {};
