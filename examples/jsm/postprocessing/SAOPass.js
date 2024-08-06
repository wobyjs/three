import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass.js';
export * from 'three/examples/jsm/postprocessing/SAOPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.SAOPass = SAOPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SAOPass.d.ts
consParams.saoPassParams = [
    'output',
    'saoBias',
    'saoIntensity',
    'saoScale',
    'saoKernelRadius',
    'saoMinResolution',
    'saoBlur',
    'saoBlurRadius',
    'saoBlurStdDev',
    'saoBlurDepthCutoff',
].distinct();
consParams.saoPass = [
    'scene',
    'camera',
    'resolution',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SAOPass.d.ts
objParams.saoPassParams = [
    'output',
    'saoBias',
    'saoIntensity',
    'saoScale',
    'saoKernelRadius',
    'saoMinResolution',
    'saoBlur',
    'saoBlurRadius',
    'saoBlurStdDev',
    'saoBlurDepthCutoff',
].distinct();
objParams.saoPass = [...objParams.pass,
    'scene',
    'camera',
    'originalClearColor',
    'oldClearColor',
    'oldClearAlpha',
    'resolution',
    'saoRenderTarget',
    'blurIntermediateRenderTarget',
    'normalRenderTarget',
    'normalMaterial',
    'saoMaterial',
    'vBlurMaterial',
    'hBlurMaterial',
    'materialCopy',
    'fsQuad',
    'params',
].distinct();
defaults.saoPass = {};
