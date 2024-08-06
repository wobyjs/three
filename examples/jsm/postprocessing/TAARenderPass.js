import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js';
export * from 'three/examples/jsm/postprocessing/TAARenderPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './SSAARenderPass';
Three.TAARenderPass = TAARenderPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TAARenderPass.d.ts
consParams.taaRenderPass = [
    'scene',
    'camera',
    'clearColor',
    'clearAlpha',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TAARenderPass.d.ts    
objParams.taaRenderPass = [...objParams.ssaaRenderPass,
    'accumulate',
].distinct();
defaults.taaRenderPass = {};
