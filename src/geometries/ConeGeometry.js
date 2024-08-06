import { ConeGeometry } from 'three/src/geometries/ConeGeometry.js';
export { ConeGeometry } from 'three/src/geometries/ConeGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './CylinderGeometry';
Three.ConeGeometry = ConeGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ConeGeometry.d.ts
/**
 * A class for generating cone geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.ConeGeometry(5, 20, 32,
 * const material = new THREE.MeshBasicMaterial({
 * color
 *
 * const cone = new THREE.Mesh(geometry, material,
 * scene.add(cone,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ConeGeometry.js}
 */
consParams.coneGeometry = [
    /**
     * Create a new instance of {@link ConeGeometry}
     * @param radius Radius of the cone base. Expects a `Float`. Default `1`
     * @param height Height of the cone. Expects a `Float`. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cone. Expects a `Integer`. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cone. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the base of the cone is open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete cone_.
     */
    'radius',
    'height',
    'radialSegments',
    'heightSegments',
    'openEnded',
    'thetaStart',
    'thetaLength',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ConeGeometry.d.ts
/**
 * A class for generating cone geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.ConeGeometry(5, 20, 32)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const cone = new THREE.Mesh(geometry, material)
 * scene.add(cone)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ConeGeometry.js | Source}
 */
objParams.coneGeometry = [...objParams.cylinderGeometry,
].distinct();
defaults.coneGeometry = { radius: 1, height: 1, radialSegments: 32, heightSegments: 1, openEnded: false, thetaStart: 0, thetaLength: 2 * Math.PI, };
