import { LineCurve3 } from 'three/src/extras/curves/LineCurve3.js';
export { LineCurve3 } from 'three/src/extras/curves/LineCurve3.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/CurvePath';
Three.LineCurve3 = LineCurve3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve3.d.ts
/**
 * A curve representing a **3d** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js}
 */
consParams.lineCurve3 = [
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v2',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve3.d.ts
/**
 * A curve representing a **3d** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js | Source}
 */
objParams.lineCurve3 = [...objParams.curve,
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v2',
].distinct();
defaults.lineCurve3 = {};
