import HashNode from 'three/src/nodes/math/HashNode.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.HashNode = HashNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\HashNode.d.ts
consParams.hashNode = [
    'seedNode',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\HashNode.d.ts    
objParams.hashNode = [...objParams.node,
    'seedNode',
].distinct();
defaults.hashNode = {};
