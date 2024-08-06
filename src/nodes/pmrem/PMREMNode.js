import PMREMNode from 'three/src/nodes/pmrem/PMREMNode.js';
export * from 'three/src/textures/Texture.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PMREMNode = PMREMNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\pmrem\PMREMNode.d.ts
consParams.pmremNode = [
    'value',
    'uvNode',
    'levelNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\pmrem\PMREMNode.d.ts    
objParams.pmremNode = [...objParams.tempNode,
    'uvNode',
    'levelNode',
    'value',
].distinct();
defaults.pMREMNode = {};
