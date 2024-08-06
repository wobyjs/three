import { LWOLoader } from 'three/examples/jsm/loaders/LWOLoader.js';
export * from 'three/examples/jsm/loaders/LWOLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
Three.LWOLoader = LWOLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\lwoLoader.d.ts
consParams.lwo = [
    'materials',
    'meshes',
].distinct();
consParams.lwoLoaderParameters = [
    /**
     * Base content delivery folder path, use when it differs from Lightwave default structure
     */
    'resourcePath',
].toObject();
consParams.lwoLoader = [
    'manager',
    'parameters', //lwoLoaderParameters
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LWOLoader.d.ts
objParams.lwo = [
    'materials',
    'meshes',
].distinct();
objParams.lwoLoaderParameters = [
    /**
     * Base content delivery folder path, use when it differs from Lightwave default structure
     */
    'resourcePath',
].distinct();
objParams.lwoLoader = [...objParams.loader,
].distinct();
defaults.lwoLoader = {};
