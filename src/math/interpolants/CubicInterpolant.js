import { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js';
export { CubicInterpolant } from 'three/src/math/interpolants/CubicInterpolant.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CubicInterpolant = CubicInterpolant;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\CubicInterpolant.d.ts
consParams.cubicInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\CubicInterpolant.d.ts    
objParams.cubicInterpolant = [...objParams.interpolant,
].distinct();
defaults.cubicInterpolant = {};
