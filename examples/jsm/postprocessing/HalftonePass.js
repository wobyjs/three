import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js';
export * from 'three/examples/jsm/postprocessing/HalftonePass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import './Pass';
Three.HalftonePass = HalftonePass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\HalftonePass.d.ts
consParams.halftonePassParameters = [
    'shape',
    'radius',
    'rotateR',
    'rotateB',
    'rotateG',
    'scatter',
    'blending',
    'blendingMode',
    'greyscale',
    'disable',
].distinct();
consParams.halftonePass = [
    'width',
    'height',
    'params',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\HalftonePass.d.ts
objParams.halftonePassParameters = [
    'shape',
    'radius',
    'rotateR',
    'rotateB',
    'rotateG',
    'scatter',
    'blending',
    'blendingMode',
    'greyscale',
    'disable',
].distinct();
objParams.halftonePass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct();
defaults.halftonePass = {};
