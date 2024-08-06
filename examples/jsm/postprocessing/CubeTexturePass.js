import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
export * from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CubeTexturePass = CubeTexturePass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\CubeTexturePass.d.ts
consParams.cubeTexturePass = [
    'camera',
    'envMap',
    'opacity',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\CubeTexturePass.d.ts    
objParams.cubeTexturePass = [...objParams.pass,
    'camera',
    'cubeShader',
    'cubeMesh',
    'envMap',
    'opacity',
    'cubeScene',
    'cubeCamera',
].distinct();
defaults.cubeTexturePass = {};
