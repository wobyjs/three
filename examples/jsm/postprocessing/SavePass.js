import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js';
export * from 'three/examples/jsm/postprocessing/SavePass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.SavePass = SavePass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SavePass.d.ts
consParams.savePass = [
    'renderTarget',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SavePass.d.ts    
objParams.savePass = [...objParams.pass,
    'textureID',
    'renderTarget',
    'uniforms',
    'material',
    'fsQuad',
].distinct();
defaults.savePass = {};
