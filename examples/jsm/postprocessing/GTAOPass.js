import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
export * from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.GTAOPass = GTAOPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GTAOPass.d.ts
consParams.gtaoPass = [
    'scene',
    'camera',
    'width',
    'height',
    'parameters', //{ depthTexture?: DepthTexture | undefined; normalTexture?: Texture | undefined } | undefined
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GTAOPass.d.ts    
objParams.gtaoPass = [...objParams.pass,
    'width',
    'height',
    'clear',
    'camera',
    'scene',
    'output',
    'blendIntensity',
    'pdRings',
    'pdRadiusExponent',
    'pdSamples',
    'gtaoNoiseTexture',
    'pdNoiseTexture',
    'gtaoRenderTarget',
    'pdRenderTarget',
    'gtaoMaterial',
    'normalMaterial',
    'pdMaterial',
    'depthRenderMaterial',
    'copyMaterial',
    'blendMaterial',
    'fsQuad',
    'originalClearColor',
    'depthTexture',
    'normalTexture',
].distinct();
defaults.gtaoPass = {};
