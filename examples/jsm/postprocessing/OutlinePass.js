import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
export * from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.OutlinePass = OutlinePass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutlinePass.d.ts
consParams.outlinePass = [
    'resolution',
    'scene',
    'camera',
    'selectedObjects',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutlinePass.d.ts    
objParams.outlinePass = [...objParams.pass,
    'renderScene',
    'renderCamera',
    'selectedObjects',
    'visibleEdgeColor',
    'hiddenEdgeColor',
    'edgeGlow',
    'usePatternTexture',
    'edgeThickness',
    'edgeStrength',
    'downSampleRatio',
    'pulsePeriod',
    'resolution',
    'patternTexture',
    'maskBufferMaterial',
    'renderTargetMaskBuffer',
    'depthMaterial',
    'prepareMaskMaterial',
    'renderTargetDepthBuffer',
    'renderTargetMaskDownSampleBuffer',
    'renderTargetBlurBuffer1',
    'renderTargetBlurBuffer2',
    'edgeDetectionMaterial',
    'renderTargetEdgeBuffer1',
    'renderTargetEdgeBuffer2',
    'separableBlurMaterial1',
    'separableBlurMaterial2',
    'overlayMaterial',
    'copyUniforms',
    'materialCopy',
    'oldClearColor',
    'oldClearAlpha',
    'fsQuad',
    'tempPulseColor1',
    'tempPulseColor2',
    'textureMatrix',
].distinct();
defaults.outlinePass = {};
