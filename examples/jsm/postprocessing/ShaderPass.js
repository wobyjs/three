import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
export * from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.ShaderPass = ShaderPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ShaderPass.d.ts
consParams.shaderPass = [
    'shader',
    'textureID',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ShaderPass.d.ts    
objParams.shaderPass = [...objParams.pass,
    'textureID',
    'uniforms',
    'material',
    'fsQuad',
].distinct();
defaults.shaderPass = {};
