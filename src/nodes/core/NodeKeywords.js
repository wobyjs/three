import NodeKeywords from 'three/src/nodes/core/NodeKeywords.js';
export { NodeKeywords };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.NodeKeywords = NodeKeywords;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeKeywords.d.ts
consParams.nodeKeywords = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeKeywords.d.ts
objParams.nodeKeywords = [
    'keywords',
    'nodes',
    'keywordsCallback',
].distinct();
defaults.nodeKeywords = {};
