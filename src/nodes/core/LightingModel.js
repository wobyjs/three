import LightingModel from 'three/src/nodes/core/LightingModel.js';
export { LightingModel };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LightingModel = LightingModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\LightingModel.d.ts
consParams.lightingModelReflectedLight = [
    'directDiffuse',
    'directSpecular',
    'indirectDiffuse',
    'indirectSpecular',
].distinct();
consParams.lightingModelDirectInput = [
    'lightDirection',
    'lightColor',
    'reflectedLight',
    'shadowMask',
].distinct();
consParams.lightingModelIndirectInput = [
    'radiance',
    'irradiance',
    'iblIrradiance',
    'ambientOcclusion',
    'reflectedLight',
    'backdrop',
    'backdropAlpha',
    'outgoingLight',
].distinct();
consParams.lightingModel = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\LightingModel.d.ts
objParams.lightingModelReflectedLight = [
    'directDiffuse',
    'directSpecular',
    'indirectDiffuse',
    'indirectSpecular',
].distinct();
objParams.lightingModelDirectInput = [
    'lightDirection',
    'lightColor',
    'reflectedLight',
    'shadowMask',
].distinct();
objParams.lightingModelIndirectInput = [
    'radiance',
    'irradiance',
    'iblIrradiance',
    'ambientOcclusion',
    'reflectedLight',
    'backdrop',
    'backdropAlpha',
    'outgoingLight',
].distinct();
objParams.lightingModel = [].distinct();
defaults.lightingModel = {};
