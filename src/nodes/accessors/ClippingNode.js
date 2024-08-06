import ClippingNode from 'three/src/nodes/accessors/ClippingNode.js';
export { ClippingNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ClippingNode = ClippingNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ClippingNode.d.ts
consParams.clippingNode = [
    'scope',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ClippingNode.d.ts    
objParams.clippingNode = [...objParams.node,
    'scope',
].distinct();
defaults.clippingNode = {};
