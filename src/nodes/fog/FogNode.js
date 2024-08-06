import { FogNode } from 'three/src/nodes/Nodes.js';
export * from '../../../three-types';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.FogNode = FogNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogNode.d.ts
consParams.fogNode = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogNode.d.ts    
objParams.fogNode = [...objParams.node,
    'isFogNode',
    'colorNode',
    'factorNode',
].distinct();
defaults.fogNode = {};
