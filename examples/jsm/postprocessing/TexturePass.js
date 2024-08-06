import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
export * from 'three/examples/jsm/postprocessing/TexturePass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.TexturePass = TexturePass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TexturePass.d.ts
consParams.texturePass = [
    'map',
    'opacity',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TexturePass.d.ts    
objParams.texturePass = [...objParams.pass,
    'map',
    'opacity',
    'uniforms',
    'material',
    'fsQuad',
].distinct();
defaults.texturePass = {};
