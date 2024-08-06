import HemisphereLightNode from 'three/src/nodes/lighting/HemisphereLightNode.js';
export { HemisphereLightNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.HemisphereLightNode = HemisphereLightNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\HemisphereLightNode.d.ts
consParams.hemisphereLightNode = [
    'light',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\HemisphereLightNode.d.ts    
objParams.hemisphereLightNode = [...objParams.analyticLightNode,
    'lightPositionNode',
    'lightDirectionNode',
    'groundColorNode',
].distinct();
defaults.hemisphereLightNode = {};
