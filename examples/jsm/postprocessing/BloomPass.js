import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
export * from 'three/examples/jsm/postprocessing/BloomPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BloomPass = BloomPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BloomPass.d.ts
consParams.bloomPass = [
    'strength',
    'kernelSize',
    'sigma',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BloomPass.d.ts    
objParams.bloomPass = [...objParams.pass,
    'renderTargetX',
    'renderTargetY',
    'copyUniforms',
    'materialCopy',
    'convolutionUniforms',
    'materialConvolution',
    'fsQuad',
].distinct();
defaults.bloomPass = {};
