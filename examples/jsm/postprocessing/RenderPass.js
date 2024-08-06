import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
export * from 'three/examples/jsm/postprocessing/RenderPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.RenderPass = RenderPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPass.d.ts
consParams.renderPass = [
    'scene',
    'camera',
    'overrideMaterial',
    'clearColor',
    'clearAlpha',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPass.d.ts    
objParams.renderPass = [...objParams.pass,
    'scene',
    'camera',
    'overrideMaterial',
    'clearColor',
    'clearAlpha',
    'clearDepth',
].distinct();
defaults.renderPass = {};
