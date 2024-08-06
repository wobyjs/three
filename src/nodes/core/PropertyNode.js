import PropertyNode from 'three/src/nodes/core/PropertyNode.js';
export { PropertyNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PropertyNode = PropertyNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\PropertyNode.d.ts
consParams.propertyNode = [
    'nodeType',
    'name',
    'varying',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\PropertyNode.d.ts    
objParams.propertyNode = [...objParams.node,
    'name',
    'varying',
].distinct();
defaults.propertyNode = {};
