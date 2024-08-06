import PointLightNode from 'three/src/nodes/lighting/PointLightNode.js';
export { PointLightNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PointLightNode = PointLightNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\PointLightNode.d.ts
consParams.pointLightNode = [
    'light',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\PointLightNode.d.ts    
objParams.pointLightNode = [...objParams.analyticLightNode,
    'cutoffDistanceNode',
    'decayExponentNode',
    'directionNode',
    'coneCosNode',
    'penumbraCosNode',
    'cutoffDistanceNode',
    'decayExponentNode',
].distinct();
defaults.pointLightNode = {};
