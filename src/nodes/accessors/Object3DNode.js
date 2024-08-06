import Object3DNode_ from 'three/src/nodes/accessors/Object3DNode.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Object3DNode = Object3DNode_;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\Object3dNode.d.ts
consParams.object3dNode = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\Object3dNode.d.ts    
objParams.object3dNode = [...objParams.node,
    'scope',
    'object3d',
].distinct();
defaults.object3DNode = {};
