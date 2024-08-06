import { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry.js';
export { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.PolyhedronGeometry = PolyhedronGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PolyhedronGeometry.d.ts
/**
 * A polyhedron is a solid in three dimensions with flat faces
 * @remarks
 * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
 * This class is used by {@link THREE.DodecahedronGeometry
{@link THREE.IcosahedronGeometry
 * {@link THREE.OctahedronGeometry and {@link THREE.TetrahedronGeometry} to generate their respective geometries.
 * @example
 * ```typescript
 * const verticesOfCube = [-1,
-1,
-1, 1,
-1,
-1, 1, 1,
-1,
-1, 1,
-1,
-1,
-1, 1, 1,
-1, 1, 1, 1, 1,
-1, 1, 1,
].distinct()
 * const indicesOfFaces = [
 * 2, 1, 0, 0, 3, 2,
 * 0, 4, 7, 7, 3, 0,
 * 0, 1, 5, 5, 4, 0,
 * 1, 2, 6, 6, 5, 1,
 * 2, 3, 7, 7, 6, 2,
 * 4, 5, 6, 6, 7, 4].distinct()
 * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js}
 */
consParams.polyhedronGeometry = [
    /**
     * Create a new instance of {@link PolyhedronGeometry}
     * @param vertices Array of points of the form [1,1,1,-1,-1,-1,...this. ]. Default `[]`.
     * @param indices Array of indices that make up the faces of the form [0,1,2,2,3,0,...this. ]. Default `[]`.
     * @param radius [page:The radius of the final shape Expects a `Float`. Default `1`
     * @param detail [page:How many levels to subdivide the geometry. The more detail, the smoother the shape. Expects a `Integer`. Default `0`
     */
    'vertices',
    'indices',
    'radius',
    'detail',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PolyhedronGeometry.d.ts
/**
 * A polyhedron is a solid in three dimensions with flat faces
 * @remarks
 * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
 * This class is used by {@link THREE.DodecahedronGeometry | DodecahedronGeometry {@link THREE.IcosahedronGeometry | IcosahedronGeometry
 * {@link THREE.OctahedronGeometry | OctahedronGeometry and {@link THREE.TetrahedronGeometry | TetrahedronGeometry} to generate their respective geometries.
 * @example
 * ```typescript
 * const verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, ].distinct()
 * const indicesOfFaces = [
 * 2, 1, 0, 0, 3, 2,
 * 0, 4, 7, 7, 3, 0,
 * 0, 1, 5, 5, 4, 0,
 * 1, 2, 6, 6, 5, 1,
 * 2, 3, 7, 7, 6, 2,
 * 4, 5, 6, 6, 7, 4].distinct()
 * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js | Source}
 */
objParams.polyhedronGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.polyhedronGeometry = {};
