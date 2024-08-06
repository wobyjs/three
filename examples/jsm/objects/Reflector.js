import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
export * from 'three/examples/jsm/objects/Reflector.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Reflector = Reflector;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Reflector.d.ts
consParams.reflectorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct();
consParams.reflector = [
    'geometry',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Reflector.d.ts
objParams.reflectorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct();
objParams.reflector = [...objParams.mesh,
    'camera',
].distinct();
defaults.reflector = {};
