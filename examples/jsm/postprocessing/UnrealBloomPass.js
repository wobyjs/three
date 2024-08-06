import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
export * from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.UnrealBloomPass = UnrealBloomPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\UnrealBloomPass.d.ts
consParams.unrealBloomPass = [
    'resolution',
    'strength',
    'radius',
    'threshold',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\UnrealBloomPass.d.ts    
objParams.unrealBloomPass = [...objParams.pass,
    'resolution',
    'strength',
    'radius',
    'threshold',
    'clearColor',
    'renderTargetsHorizontal',
    'renderTargetsVertical',
    'nMips',
    'renderTargetBright',
    'highPassUniforms',
    'materialHighPassFilter',
    'separableBlurMaterials',
    'compositeMaterial',
    'bloomTintColors',
    'copyUniforms',
    'blendMaterial',
    'oldClearColor',
    'oldClearAlpha',
    'basic',
    'fsQuad',
].distinct();
defaults.unrealBloomPass = {};
