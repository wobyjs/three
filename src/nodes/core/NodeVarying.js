import NodeVarying from 'three/src/nodes/core/NodeVarying.js';
export { NodeVarying };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeVarying = NodeVarying;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVarying.d.ts
consParams.nodeVarying = [
    'name',
    'type',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVarying.d.ts    
objParams.nodeVarying = [...objParams.nodeVar,
    'needsInterpolation',
    'isNodeVarying',
].distinct();
defaults.nodeVarying = {};
