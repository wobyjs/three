import InstanceNode from 'three/src/nodes/accessors/InstanceNode.js';
export { InstanceNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.InstanceNode = InstanceNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\InstanceNode.d.ts
consParams.instanceNode = [
    'instanceMesh',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\InstanceNode.d.ts    
objParams.instanceNode = [...objParams.node,
    'instanceMesh',
    'instanceMatrixNode',
    'instanceColorNode',
].distinct();
defaults.instanceNode = {};
