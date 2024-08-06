import AONode from 'three/src/nodes/lighting/AONode.js';
export { AONode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AONode = AONode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AONode.d.ts
consParams.aoNode = [
    'aoNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AONode.d.ts    
objParams.aoNode = [...objParams.lightingNode,
    'aoNode',
].distinct();
defaults.aoNode = {};
