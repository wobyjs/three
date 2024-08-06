import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
export * from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.SSAOPass = SSAOPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAOPass.d.ts
consParams.ssaoPass = [
    'scene',
    'camera',
    'width',
    'height',
    'kernelSize',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAOPass.d.ts    
objParams.ssaoPass = [...objParams.pass,
    'scene',
    'camera',
    'width',
    'height',
    'clear',
    'kernelRadius',
    'kernel',
    'noiseTexture',
    'output',
    'minDistance',
    'maxDistance',
    'normalRenderTarget',
    'ssaoRenderTarget',
    'blurRenderTarget',
    'ssaoMaterial',
    'normalMaterial',
    'blurMaterial',
    'depthRenderMaterial',
    'copyMaterial',
    'fsQuad',
    'originalClearColor',
].distinct();
defaults.sSAOPass = {};
