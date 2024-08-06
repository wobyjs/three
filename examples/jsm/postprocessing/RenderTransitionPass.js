import { RenderTransitionPass } from 'three/examples/jsm/postprocessing/RenderTransitionPass.js';
export * from 'three/examples/jsm/postprocessing/RenderTransitionPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.RenderTransitionPass = RenderTransitionPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderTransitionPass.d.ts
consParams.renderTransitionPass = [
    'sceneA',
    'cameraA',
    'sceneB',
    'cameraB',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderTransitionPass.d.ts    
objParams.renderTransitionPass = [...objParams.pass,
    'material',
    'fsQuad',
    'sceneA',
    'cameraA',
    'sceneB',
    'cameraB',
    'renderTargetA',
    'renderTargetB',
].distinct();
defaults.renderTransitionPass = {};
