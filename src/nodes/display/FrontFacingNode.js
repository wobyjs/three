import FrontFacingNode from 'three/src/nodes/display/FrontFacingNode.js';
export { FrontFacingNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FrontFacingNode = FrontFacingNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\FrontFacingNode.d.ts
consParams.frontFacingNode = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\FrontFacingNode.d.ts    
objParams.frontFacingNode = [...objParams.node,
    'isFrontFacingNode',
].distinct();
defaults.frontFacingNode = {};
