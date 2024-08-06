import EnvironmentNode from 'three/src/nodes/lighting/EnvironmentNode.js';
export { EnvironmentNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.EnvironmentNode = EnvironmentNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\EnvironmentNode.d.ts
consParams.environmentNode = [
    'envNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\EnvironmentNode.d.ts    
objParams.environmentNode = [...objParams.lightingNode,
    'envNode',
].distinct();
defaults.environmentNode = {};
