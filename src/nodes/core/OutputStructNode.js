import OutputStructNode from 'three/src/nodes/core/OutputStructNode.js';
export { OutputStructNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.OutputStructNode = OutputStructNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\OutputStructNode.d.ts
consParams.outputStructNode = [
    'members',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\OutputStructNode.d.ts    
objParams.outputStructNode = [...objParams.node,
    'members',
].distinct();
defaults.outputStructNode = {};
