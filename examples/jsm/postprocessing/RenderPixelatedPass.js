import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
export * from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import './Pass';
Three.RenderPixelatedPass = RenderPixelatedPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPixelatedPass.d.ts
consParams.renderPixelatedPassParameters = [
    'normalEdgeStrength',
    'depthEdgeStrength',
].toObject();
consParams.renderPixelatedPass = [
    'pixelSize',
    'scene',
    'camera',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPixelatedPass.d.ts
objParams.renderPixelatedPassParameters = [
    'normalEdgeStrength',
    'depthEdgeStrength',
].distinct();
objParams.renderPixelatedPass = [...objParams.pass,
    'pixelSize',
    'resolution',
    'renderResolution',
    'pixelatedMaterial',
    'normalMaterial',
    'fsQuad',
    'scene',
    'camera',
    'normalEdgeStrength',
    'depthEdgeStrength',
    'beautyRenderTarget',
    'normalRenderTarget',
].distinct();
defaults.renderPixelatedPass = {};
