import ReferenceNode from 'three/src/nodes/accessors/ReferenceNode.js';
export { ReferenceNode };
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReferenceNode.d.ts
consParams.referenceNode = [
    'property',
    'uniformType',
    'object',
    'count',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReferenceNode.d.ts    
objParams.referenceNode = [...objParams.node,
    'property',
    'uniformType',
    'object',
    'count',
    'properties',
    'reference',
    'node',
].distinct();
defaults.referenceNode = {};
