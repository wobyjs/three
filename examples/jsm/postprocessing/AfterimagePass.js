import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
export * from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.AfterimagePass = AfterimagePass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\AfterimagePass.d.ts
consParams.afterimagePass = [
    'damp',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\AfterimagePass.d.ts    
objParams.afterimagePass = [...objParams.pass,
    'shader',
    'uniforms',
    'textureComp',
    'textureOld',
    'shaderMaterial',
    'compFsQuad',
    'copyFsQuad',
].distinct();
defaults.afterimagePass = {};
