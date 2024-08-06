import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
export * from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.OutputPass = OutputPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutputPass.d.ts
consParams.outputPass = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutputPass.d.ts    
objParams.outputPass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct();
defaults.outputPass = {};
