import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
export * from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.SMAAPass = SMAAPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SMAAPass.d.ts
consParams.smaaPass = [
    'width',
    'height',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SMAAPass.d.ts    
objParams.smaaPass = [...objParams.pass,
    'edgesRT',
    'weightsRT',
    'areaTexture',
    'searchTexture',
    'uniformsEdges',
    'materialEdges',
    'uniformsWeights',
    'materialWeights',
    'uniformsBlend',
    'materialBlend',
    'fsQuad',
].distinct();
defaults.smaaPass = {};
