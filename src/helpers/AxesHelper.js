import { AxesHelper } from 'three/src/helpers/AxesHelper.js';
export { AxesHelper } from 'three/src/helpers/AxesHelper.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import '../../src/core/Object3D';
Three.AxesHelper = AxesHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\AxesHelper.d.ts
/**
 * An axis object to visualize the 3 axes in a simple way.
 * @remarks
 * The X axis is red
 * The Y axis is green
 * The Z axis is blue.
 * @example
 * ```typescript
 * const {@link AxesHelper} = new THREE.AxesHelper(5,
 * scene.add(axesHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression / buffergeometry / compression}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex / geometry / convex}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd / loader / nrrd}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js}
 */
consParams.axesHelper = [
    /**
     * Create a new instance of {@link AxesHelper}
     * @param size Size of the lines representing the axes. Default `1`
     */
    'size',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\AxesHelper.d.ts
/**
 * An axis object to visualize the 3 axes in a simple way.
 * @remarks
 * The X axis is red
 * The Y axis is green
 * The Z axis is blue.
 * @example
 * ```typescript
 * const {@link AxesHelper} = new THREE.AxesHelper(5)
 * scene.add(axesHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression | WebGl / buffergeometry / compression}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex | WebGl / geometry / convex}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGl / loader / nrrd}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js | Source}
 */
objParams.axesHelper = [...objParams.lineSegments,
].distinct();
defaults.axesHelper = { size: 1 };
