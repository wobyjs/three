import OperatorNode from 'three/src/nodes/math/OperatorNode.js';
export { OperatorNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.OperatorNode = OperatorNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathUtils.d.ts
// remapping functions
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\OperatorNode.d.ts
consParams.operatorNode = [
    'op',
    '...this.params',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathUtils.d.ts
// remapping functions
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\OperatorNode.d.ts    
objParams.operatorNode = [...objParams.tempNode,
    'aNode',
    'bNode',
    'op',
].distinct();
defaults.operatorNode = {};
