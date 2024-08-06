import { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js';
export { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './InterleavedBuffer';
Three.InstancedInterleavedBuffer = InstancedInterleavedBuffer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedInterleavedBuffer.d.ts
/**
 * An instanced version of {@link THREE.InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js}
 */
consParams.instancedInterleavedBuffer = [
    /**
     * Create a new instance of {@link InstancedInterleavedBuffer}
     * @param array
     * @param itemSize
     * @param meshPerAttribute
     */
    'array',
    'stride',
    'meshPerAttribute',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedInterleavedBuffer.d.ts
/**
 * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
 */
objParams.instancedInterleavedBuffer = [...objParams.interleavedBuffer,
    /**
     * @defaultValue `1`
     */
    'meshPerAttribute',
].distinct();
defaults.instancedInterleavedBuffer = { meshPerAttribute: 1 };
