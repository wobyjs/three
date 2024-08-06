import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
export * from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.GlitchPass = GlitchPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GlitchPass.d.ts
consParams.glitchPass = [
    'dt_size',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GlitchPass.d.ts    
objParams.glitchPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
    'goWild',
    'curF',
    'randX',
].distinct();
defaults.glitchPass = {};
