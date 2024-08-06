import { Interpolant } from 'three/src/math/Interpolant.js';
export { Interpolant } from 'three/src/math/Interpolant.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Interpolant = Interpolant;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Interpolant.d.ts
consParams.interpolant = [
    'parameterPositions',
    'sampleValues',
    'sampleSize',
    'resultBuffer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Interpolant.d.ts
objParams.interpolant = [
    'parameterPositions',
    'sampleValues',
    'valueSize',
    'resultBuffer',
].distinct();
defaults.interpolant = {};
