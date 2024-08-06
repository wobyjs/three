import CondNode from 'three/src/nodes/math/CondNode.js';
export { CondNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CondNode = CondNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\CondNode.d.ts
consParams.condNode = [
    'condNode',
    'ifNode',
    'elseNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\CondNode.d.ts    
objParams.condNode = [...objParams.node,
    'condNode',
    'ifNode',
    'elseNode',
].distinct();
defaults.condNode = {};
