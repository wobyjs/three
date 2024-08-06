import DiscardNode from 'three/src/nodes/utils/DiscardNode.js';
export { DiscardNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../math/CondNode';
Three.DiscardNode = DiscardNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\DiscardNode.d.ts
consParams.discardNode = [
    'condNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\DiscardNode.d.ts    
objParams.discardNode = [...objParams.condNode,
].distinct();
defaults.discardNode = {};
