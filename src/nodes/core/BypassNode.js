import BypassNode from 'three/src/nodes/core/BypassNode.js';
export { BypassNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BypassNode = BypassNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\BypassNode.d.ts
consParams.bypassNode = [
    'returnNode',
    'callNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\BypassNode.d.ts    
objParams.bypassNode = [...objParams.node,
    'isBypassNode',
    'outputNode',
    'callNode',
].distinct();
defaults.bypassNode = {};
