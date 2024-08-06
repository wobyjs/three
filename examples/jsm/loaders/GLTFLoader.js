import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
export * from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.GLTFLoader = GLTFLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\gltfLoader.d.ts
//@ts-ignore
// consParams.gltf = [
//     'path',
//     'animations',
//     'scene',
//     'scenes',
//     'cameras',
//     'asset',
//     'parser',
//     'userData',
// ].distinct()
//     
consParams.gltfLoader = [
    'manager',
].distinct();
consParams.gltfReference = [
    'materials',
    'nodes',
    'textures',
    'meshes',
].distinct();
consParams.gltfParser = [].distinct();
consParams.gltfLoaderPlugin = [
    'beforeRoot',
    'afterRoot',
    'loadNode',
    'loadMesh',
    'loadBufferView',
    'loadMaterial',
    'loadTexture',
    'getMaterialType',
    'extendMaterialParams',
    'createNodeMesh',
    'createNodeAttachment',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GlTFLoader.d.ts
//@ts-ignore
// objParams.gltf = [
//     'animations',
//     'scene',
//     'scenes',
//     'cameras',
//     'asset',
//     'parser',
//     'userData',
// ].distinct()
objParams.gltfLoader = [...objParams.loader,
    'dracoLoader',
].distinct();
objParams.gltfReference = [
    'materials',
    'nodes',
    'textures',
    'meshes',
].distinct();
objParams.gltfParser = [
    'json',
    'options',
    'fileLoader',
    'textureLoader',
    'plugins',
    'extensions',
    'associations',
    'getDependency',
    'getDependencies',
    'loadBuffer',
    'loadBufferView',
    'loadAccessor',
    'loadTexture',
    'loadTextureImage',
    'loadImageSource',
    'assignTexture',
    'assignFinalMaterial',
    'getMaterialType',
    'loadMaterial',
    'createUniqueName',
    'createNodeMesh',
    'loadGeometries',
    'loadMesh',
    'loadCamera',
    'loadSkin',
    'loadAnimation',
    'loadNode',
    'loadScene',
].distinct();
objParams.gltfLoaderPlugin = [
    'beforeRoot',
    'afterRoot',
    'loadNode',
    'loadMesh',
    'loadBufferView',
    'loadMaterial',
    'loadTexture',
    'getMaterialType',
    'extendMaterialParams',
    'createNodeMesh',
    'createNodeAttachment',
].distinct();
defaults.gltfLoader = {};
