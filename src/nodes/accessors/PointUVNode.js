import PointUVNode from 'three/src/nodes/accessors/PointUVNode.js';
export { PointUVNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PointUVNode = PointUVNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PointUVNode.d.ts
consParams.pointUvNode = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PointUvNode.d.ts    
objParams.pointUvNode = [...objParams.node,
    'isPointUvNode',
].distinct();
defaults.pointUvNode = {};
