import { Camera } from 'three/src/cameras/Camera.js';
export { Camera } from 'three/src/cameras/Camera.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import '../core/Object3D';
Three.Camera = Camera;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\Camera.d.ts
/**
 * Abstract base class for cameras
 * @remarks
 * This class should always be inherited when you build a new camera.
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js}
 */
consParams.camera = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\Camera.d.ts
/**
 * Abstract base class for cameras
 * @remarks
 * This class should always be inherited when you build a new camera.
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
 */
objParams.camera = [...objParams.object3d,
    /**
     * @override
     * The {@link THREE.Layers | layers} that the {@link Camera} is a member of.
     * @remarks Objects must share at least one layer with the {@link Camera} to be n when the camera's viewpoint is rendered.
     * @defaultValue `new THREE.Layers()`
     */
    'layers',
    /**
     * This is the inverse of matrixWorld.
     * @remarks MatrixWorld contains the Matrix which has the world transform of the {@link Camera} .
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    'matrixWorldInverse',
    /**
     * This is the matrix which contains the projection.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    'projectionMatrix',
    /**
     * This is the inverse of projectionMatrix.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    'projectionMatrixInverse',
    'coordinateSystem',
    'viewport',
].distinct();
defaults.camera = {};
