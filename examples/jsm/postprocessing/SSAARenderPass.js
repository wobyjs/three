import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
export * from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.SSAARenderPass = SSAARenderPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAARenderPass.d.ts
consParams.ssaaRenderPass = [
    'scene',
    'camera',
    'clearColor',
    'clearAlpha',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAARenderPass.d.ts    
objParams.ssaaRenderPass = [...objParams.pass,
    'scene',
    'camera',
    'sampleLevel',
    'unbiased',
    'clearColor',
    'clearAlpha',
    'copyUniforms',
    'copyMaterial',
    'fsQuad',
    'sampleRenderTarget',
].distinct();
defaults.ssaaRenderPass = {};
