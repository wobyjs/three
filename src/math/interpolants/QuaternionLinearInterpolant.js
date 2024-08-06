import { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js';
export { QuaternionLinearInterpolant } from 'three/src/math/interpolants/QuaternionLinearInterpolant.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../Interpolant';
Three.QuaternionLinearInterpolant = QuaternionLinearInterpolant;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\QuaternionLinearInterpolant.d.ts
consParams.quaternionLinearInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\QuaternionLinearInterpolant.d.ts    
objParams.quaternionLinearInterpolant = [...objParams.interpolant,
].distinct();
defaults.quaternionLinearInterpolant = {};
