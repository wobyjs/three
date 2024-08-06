import { UniformsGroup } from 'three/src/core/UniformsGroup.js';
export { UniformsGroup } from 'three/src/core/UniformsGroup.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.UniformsGroup = UniformsGroup;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\UniformsGroup.d.ts
/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js}
 */
consParams.uniformsGroup = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\UniformsGroup.d.ts
/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGl2 / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
 */
objParams.uniformsGroup = [
    'id',
    'usage',
    'uniforms',
].distinct();
defaults.uniformsGroup = {};
