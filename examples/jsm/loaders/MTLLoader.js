import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
export * from 'three/examples/jsm/loaders/MTLLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MTLLoader = MTLLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MTLLoader.d.ts
consParams.materialCreatorOptions = [
    /**
     * side side to apply the material
     * THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
     */
    'side',
    /*
     * wrap type of wrapping to apply for textures
     * THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
     */
    'wrap',
    /*
     * normalizeRGB need to be normalized to 0-1 from 0-255
     * Default, assumed to be already normalized
     */
    'normalizeRGB',
    /*
     * ignoreZeroRGBs values of RGBs (Ka,Kd,Ks) that are all 0's
     * Default
     */
    'ignoreZeroRGBs',
    /*
     * invertTrProperty values 1 of Tr field for fully opaque. This option is useful for obj
     * exported from 3ds MAX, vcglib or meshlab.
     * Default
     */
    'invertTrProperty',
].distinct();
consParams.mtlLoader = [
    'manager',
].distinct();
consParams.materialInfo = [
    'ks',
    'kd',
    'ke',
    'map_kd',
    'map_ks',
    'map_ke',
    'norm',
    'map_bump',
    'bump',
    'map_d',
    'ns',
    'd',
    'tr',
].distinct();
consParams.texParams = [
    'scale',
    'offset',
    'url',
].distinct();
consParams.materialCreator = [
    'baseUrl',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MTLLoader.d.ts
objParams.materialCreatorOptions = [
    /**
     * side: Which side to apply the material
     * THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
     */
    'side',
    /*
     * wrap: What type of wrapping to apply for textures
     * THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
     */
    'wrap',
    /*
     * normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
     * Default: false, assumed to be already normalized
     */
    'normalizeRGB',
    /*
     * ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
     * Default: false
     */
    'ignoreZeroRGBs',
    /*
     * invertTrProperty: Use values 1 of Tr field for fully opaque. This option is useful for obj
     * exported from 3ds MAX, vcglib or meshlab.
     * Default: false
     */
    'invertTrProperty',
].distinct();
objParams.mtlLoader = [...objParams.loader,
    'materialOptions',
].distinct();
objParams.materialInfo = [
    'ks',
    'kd',
    'ke',
    'map_kd',
    'map_ks',
    'map_ke',
    'norm',
    'map_bump',
    'bump',
    'map_d',
    'ns',
    'd',
    'tr',
].distinct();
objParams.texParams = [
    'scale',
    'offset',
    'url',
].distinct();
objParams.materialCreator = [
    'baseUrl',
    'options',
    'materialsInfo',
    'materials',
    'nameLookup',
    'side',
    'wrap',
    'crossOrigin',
].distinct();
defaults.mtlLoader = {};
