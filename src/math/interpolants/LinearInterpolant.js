import { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js';
export { LinearInterpolant } from 'three/src/math/interpolants/LinearInterpolant.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LinearInterpolant = LinearInterpolant;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\LinearInterpolant.d.ts
consParams.linearInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\LinearInterpolant.d.ts    
objParams.linearInterpolant = [...objParams.interpolant,
].distinct();
defaults.linearInterpolant = {};
