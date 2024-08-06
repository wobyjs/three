import { OctahedronGeometry } from 'three/src/geometries/OctahedronGeometry.js';
export { OctahedronGeometry } from 'three/src/geometries/OctahedronGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.OctahedronGeometry = OctahedronGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\OctahedronGeometry.d.ts
/**
 * A class for generating an octahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js}
 */
consParams.octahedronGeometry = [
    /**
     * Create a new instance of {@link OctahedronGeometry}
     * @param radius Radius of the octahedron. Expects a `Float`. Default `1`
     * @param detail Setting this.to a value greater than zero add vertices making it no longer an octahedron. Expects a `Integer`. Default `0`
     */
    'radius',
    'detail',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\OctahedronGeometry.d.ts
/**
 * A class for generating an octahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js | Source}
 */
objParams.octahedronGeometry = [...objParams.polyhedronGeometry,
].distinct();
defaults.octahedronGeometry = { radius: 1, detail: 0, };
