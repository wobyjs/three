import AttributeNode from 'three/src/nodes/core/AttributeNode.js';
export { AttributeNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AttributeNode = AttributeNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AttributeNode.d.ts
consParams.attributeNode = [
    'attributeName',
    'nodeType',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AttributeNode.d.ts    
objParams.attributeNode = [...objParams.node,
].distinct();
defaults.attributeNode = {};
