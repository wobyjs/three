import { WireframeGeometry } from 'three/src/geometries/WireframeGeometry.js';
export { WireframeGeometry } from 'three/src/geometries/WireframeGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.WireframeGeometry = WireframeGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\WireframeGeometry.d.ts
/**
 * This can be used as a helper object to view a {@link BufferGeometry} as a wireframe.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(100, 100, 100,
 * const wireframe = new THREE.WireframeGeometry(geometry,
 * const line = new THREE.LineSegments(wireframe,
 * line.material.depthTest = false,
 * line.material.opacity = 0.25,
 * line.material.transparent = true,
 * scene.add(line,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js}
 */
consParams.wireframeGeometry = [
    /**
     * Create a new instance of {@link WireframeGeometry}
     * @param geometry Any geometry object. Default `null`.
     */
    'geometry',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\WireframeGeometry.d.ts
/**
 * This can be used as a helper object to view a {@link BufferGeometry | geometry} as a wireframe.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(100, 100, 100)
 * const wireframe = new THREE.WireframeGeometry(geometry)
 * const line = new THREE.LineSegments(wireframe)
 * line.material.depthTest = false
 * line.material.opacity = 0.25
 * line.material.transparent = true
 * scene.add(line)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js | Source}
 */
objParams.wireframeGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.wireframeGeometry = {};
