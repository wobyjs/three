import ReflectorNode from 'three/src/nodes/utils/ReflectorNode.js';
export { ReflectorNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../lib/three/extensions';
import '../accessors/TextureNode';
Three.ReflectorNode = ReflectorNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ReflectorNode.d.ts
consParams.reflectorNodeParameters = [
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
].toObject();
consParams.reflectorNode = { ...consParams.reflectorNodeParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ReflectorNode.d.ts
objParams.reflectorNodeParameters = [
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
].distinct();
objParams.reflectorNode = [...objParams.textureNode,
    'target',
    'resolution',
    'generateMipmaps',
    'bounces',
    'virtualCameras',
    'renderTargets',
].distinct();
defaults.reflectorNode = {};
