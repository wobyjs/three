import { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js';
export { DiscreteInterpolant } from 'three/src/math/interpolants/DiscreteInterpolant.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.DiscreteInterpolant = DiscreteInterpolant;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\DiscreteInterpolant.d.ts
consParams.discreteInterpolant = [
    'parameterPositions',
    'samplesValues',
    'sampleSize',
    'resultBuffer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\DiscreteInterpolant.d.ts    
objParams.discreteInterpolant = [...objParams.interpolant,
].distinct();
defaults.discreteInterpolant = {};
