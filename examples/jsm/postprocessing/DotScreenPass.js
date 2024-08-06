import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js';
export * from 'three/examples/jsm/postprocessing/DotScreenPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.DotScreenPass = DotScreenPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\DotScreenPass.d.ts
consParams.dotScreenPass = [
    'center',
    'angle',
    'scale',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\DotScreenPass.d.ts    
objParams.dotScreenPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct();
defaults.dotScreenPass = {};
