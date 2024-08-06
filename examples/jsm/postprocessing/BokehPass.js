import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
export * from 'three/examples/jsm/postprocessing/BokehPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.BokehPass = BokehPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BokehPass.d.ts
consParams.bokehPassParamters = [
    'focus',
    'aspect',
    'aperture',
    'maxblur',
].distinct();
consParams.bokehPass = [
    'scene',
    'camera',
    'params',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BokehPass.d.ts
objParams.bokehPassParamters = [
    'focus',
    'aspect',
    'aperture',
    'maxblur',
].distinct();
objParams.bokehPass = [...objParams.pass,
    'scene',
    'camera',
    'renderTargetColor',
    'renderTargetDepth',
    'materialDepth',
    'materialBokeh',
    'uniforms',
    'fsQuad',
    'oldClearColor',
].distinct();
defaults.bokehPass = {};
