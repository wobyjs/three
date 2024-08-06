import NormalMapNode from 'three/src/nodes/display/NormalMapNode.js';
export { NormalMapNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NormalMapNode = NormalMapNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\NormalMapNode.d.ts
consParams.normalMapNode = [
    'node',
    'scaleNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\NormalMapNode.d.ts    
objParams.normalMapNode = [...objParams.tempNode,
    'node',
    'scaleNode',
    'normalMapType',
].distinct();
defaults.normalMapNode = {};
