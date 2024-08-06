import { LineCurve } from 'three/src/extras/curves/LineCurve.js';
export { LineCurve } from 'three/src/extras/curves/LineCurve.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/CurvePath';
Three.LineCurve = LineCurve;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve.d.ts
/**
 * A curve representing a **2D** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js}
 */
consParams.lineCurve = [
    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The end point
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve.d.ts
/**
 * A curve representing a **2d** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js | Source}
 */
objParams.lineCurve = [...objParams.curve,
    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The end point
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
].distinct();
defaults.lineCurve = {};
