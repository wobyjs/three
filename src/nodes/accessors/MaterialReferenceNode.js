import MaterialReferenceNode from 'three/src/nodes/accessors/MaterialReferenceNode.js';
export { MaterialReferenceNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MaterialReferenceNode = MaterialReferenceNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialReferenceNode.d.ts
consParams.materialReferenceNode = [
    'property',
    'inputType',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialReferenceNode.d.ts    
objParams.materialReferenceNode = [...objParams.referenceNode,
].distinct();
defaults.materialReferenceNode = {};
