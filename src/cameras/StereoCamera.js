import { StereoCamera } from 'three/src/cameras/StereoCamera.js';
export { StereoCamera } from 'three/src/cameras/StereoCamera.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Camera';
Three.StereoCamera = StereoCamera;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\StereoCamera.d.ts
/**
 * Dual {@link PerspectiveCamera}s used for effects such as
 * {@link https://en.wikipedia.org/wiki/Anaglyph_3d Anaglyph} or
 * {@link https://en.wikipedia.org/wiki/parallax_barrier Barrier}.
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph / anaglyph }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier / parallaxbarrier }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo / stereo }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/StereoCamera Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js}
 */
consParams.stereoCamera = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\StereoCamera.d.ts
/**
 * Dual {@link PerspectiveCamera | PerspectiveCamera}s used for effects such as
 * {@link https://en.wikipedia.org/wiki/Anaglyph_3d | 3d Anaglyph} or
 * {@link https://en.wikipedia.org/wiki/parallax_barrier | Parallax Barrier}.
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/StereoCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js | Source}
 */
objParams.stereoCamera = [...objParams.camera,
    /**
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    'aspect',
    /**
     * @remarks Expects a `Float`
     * @defaultValue `0.064`
     */
    'eyeSep',
    /**
     * The Left camera.
     * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 1}
     * @remarks Objects to be rendered by the **left** camera must also be added to this layer.
     */
    'cameraL',
    /**
     * The Right camera.
     * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 2}
     * @remarks Objects to be rendered by the **right** camera must also be added to this layer.
     */
    'cameraR',
].distinct();
defaults.stereoCamera = {};
