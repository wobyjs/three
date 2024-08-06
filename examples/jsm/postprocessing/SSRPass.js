import { SSRPass } from 'three/examples/jsm/postprocessing/SSRPass.js';
export * from 'three/examples/jsm/postprocessing/SSRPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.SSRPass = SSRPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSRPass.d.ts
consParams.ssrPassParams = [
    'renderer',
    'scene',
    'camera',
    'width',
    'height',
    'selects',
    'isPerspectiveCamera',
    'isBouncing',
    'groundReflector',
].toObject();
consParams.ssrPass = { ...consParams.ssrPassParams };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSRPass.d.ts
objParams.ssrPassParams = [
    'renderer',
    'scene',
    'camera',
    'width',
    'height',
    'selects',
    'isPerspectiveCamera',
    'isBouncing',
    'groundReflector',
].distinct();
objParams.ssrPass = [...objParams.pass,
    'width',
    'height',
    'clear',
    'renderer',
    'scene',
    'camera',
    'groundReflector',
    'opacity',
    'output',
    'maxDistance',
    'thickness',
    'tempColor',
    'selects',
    'selective',
    'bouncing',
    'blur',
    'distanceAttenuation',
    'fresnel',
    'infiniteThick',
    'beautyRenderTarget',
    'prevRenderTarget',
    'normalRenderTarget',
    'metalnessRenderTarget',
    'ssrRenderTarget',
    'blurRenderTarget',
    'blurRenderTarget2',
    'ssrMaterial',
    'normalMaterial',
    'metalnessOnMaterial',
    'metalnessOffMaterial',
    'blurMaterial',
    'blurMaterial2',
    'depthRenderMaterial',
    'copyMaterial',
    'fsQuad',
    'originalClearColor',
].distinct();
defaults.ssrPass = {};
