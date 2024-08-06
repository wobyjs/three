import PassNode from 'three/src/nodes/display/PassNode.js';
export * from 'three/src/cameras/Camera.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PassNode = PassNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PassNode.d.ts
consParams.passTextureNode = [
    'passNode',
    'texture',
].distinct();
consParams.passNode = [
    'scope',
    'scene',
    'camera',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PassNode.d.ts    
objParams.passTextureNode = [...objParams.textureNode,
    'passNode',
].distinct();
objParams.passNode = [...objParams.tempNode,
    'scope',
    'scene',
    'camera',
    'renderTarget',
].distinct();
defaults.passNode = {};
