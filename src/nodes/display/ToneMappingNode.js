import ToneMappingNode from 'three/src/nodes/display/ToneMappingNode.js';
export * from 'three/src/constants.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ToneMappingNode = ToneMappingNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ToneMappingNode.d.ts
// exposure only
consParams.toneMappingNode = [
    'toneMapping',
    'exposureNode',
    'colorNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ToneMappingNode.d.ts
// exposure only    
objParams.toneMappingNode = [...objParams.tempNode,
    'toneMapping',
    'exposureNode',
    'colorNode',
].distinct();
defaults.toneMappingNode = {};
