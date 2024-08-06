import { ArrayCamera } from 'three/src/cameras/ArrayCamera.js';
export { ArrayCamera } from 'three/src/cameras/ArrayCamera.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.ArrayCamera = ArrayCamera;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\ArrayCamera.d.ts
/**
 * {@link ArrayCamera} can be used in order to efficiently render a scene with a predefined set of cameras
 * @remarks
 * This is an important performance aspect for rendering VR scenes.
 * An instance of {@link ArrayCamera} always has an array of sub cameras
 * It's mandatory to define for each sub camera the `viewport` property which determines the part of the viewport that is rendered with this.camera.
 * @see Example: {@link https://threejs.org/examples/#webgl_camera_array / array }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/ArrayCamera Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js}
 */
consParams.arrayCamera = [
    /**
     * An array of cameras.
     * @param array. Default `[]`.
     */
    'cameras',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\ArrayCamera.d.ts
/**
 * {@link ArrayCamera} can be used in order to efficiently render a scene with a predefined set of cameras
 * @remarks
 * This is an important performance aspect for rendering VR scenes.
 * An instance of {@link ArrayCamera} always has an array of sub cameras
 * It's mandatory to define for each sub camera the `viewport` property which determines the part of the viewport that is rendered with this camera.
 * @see Example: {@link https://threejs.org/examples/#webgl_camera_array | camera / array }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/ArrayCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js | Source}
 */
objParams.arrayCamera = [...objParams.perspectiveCamera,
    /**
     * An array of cameras.
     * @defaultValue `[].distinct()`
     */
    'cameras',
].distinct();
defaults.arrayCamera = {};
