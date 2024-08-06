import { GLBufferAttribute } from 'three/src/core/GLBufferAttribute.js';
export { GLBufferAttribute } from 'three/src/core/GLBufferAttribute.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.GLBufferAttribute = GLBufferAttribute;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\GlBufferAttribute.d.ts
/**
 * This buffer attribute class does not construct a VBO.
 * Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property.
 * @remarks
 * It is required to pass additional params alongside the VBO
 * Those are Gl context, the Gl data type, the number of components per vertex, the number of bytes per component, and the number of vertices.
 * @remarks
 * The most common use case for this.class is when some kind of GPGpu calculation interferes or even produces the VBOs in question.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute / buffergeometry / glbufferattribute}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/GlBufferAttribute Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GlBufferAttribute.js}
 */
consParams.glBufferAttribute = [
    /**
     * This creates a new GlBufferAttribute object.
     * @param buffer Must be a {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlBuffer}. See {@link GlBufferAttribute.buffer | .buffer}
     * @param type One of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGl_API/Constants#Data_types Data Types}. See {@link GlBufferAttribute.type | .type}
     * @param itemSize How many values make up each item (vertex). See {@link GlBufferAttribute.itemSize | .itemSize}
     * @param elementSize `1`,
`2` or `4`. The corresponding size (in bytes) for the given {@link type} param. See {@link GlBufferAttribute.elementSize | .elementSize}
     * @param count The expected number of vertices in VBO. See {@link GlBufferAttribute.count | .count}
     */
    'buffer',
    'type',
    'itemSize',
    'elementSize',
    'count',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\GlBufferAttribute.d.ts
/**
 * This buffer attribute class does not construct a VBO.
 * Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property.
 * @remarks
 * It is required to pass additional params alongside the VBO
 * Those are: the Gl context, the Gl data type, the number of components per vertex, the number of bytes per component, and the number of vertices.
 * @remarks
 * The most common use case for this class is when some kind of GPGpu calculation interferes or even produces the VBOs in question.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute | WebGl / buffergeometry / glbufferattribute}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/GlBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GlBufferAttribute.js | Source}
 */
objParams.glBufferAttribute = [
    /**
     * Optional name for this attribute instance.
     * @defaultValue `""`
     */
    'name',
    /**
     * The current {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlBuffer | WebGlBuffer} instance.
     */
    'buffer',
    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGl_API/Constants#Data_types | WebGl Data Type} describing the underlying VBO contents.
     *
     * #### WebGl Data Type (`Glenum`)
     * - gl.BYTE: 0x1400
     * - gl.UNSIGNED_BYTE: 0x1401
     * - gl.SHORT: 0x1402
     * - gl.UNSIGNED_SHORT: 0x1403
     * - gl.INT: 0x1404
     * - gl.UNSIGNED_INT: 0x1405
     * - gl.FLOAT: 0x1406
     * @remarks Set this property together with {@link elementSize | .elementSize}. The recommended way is using the {@link setType | .setType()} method.
     * @remarks Expects a `DataType` `Glenum` _possible values:_ `0x1400` `0x1401` `0x1402` `0x1403` `0x1404` `0x1405` `0x1406`
     */
    'type',
    /**
     * How many values make up each item (vertex).
     * @remarks The number of values of the array that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a position, normal, or color), then itemSize should be 3.
     * @remarks Expects a `Integer`
     */
    'itemSize',
    /**
     * Stores the corresponding size in bytes for the current {@link type | .type} property value.
     *
     * The corresponding size (_in bytes_) for the given "type" param.
     * #### WebGl Data Type (`Glenum`)
     * - gl.BYTE: 1
     * - gl.UNSIGNED_BYTE: 1
     * - gl.SHORT: 2
     * - gl.UNSIGNED_SHORT: 2
     * - gl.INT: 4
     * - gl.UNSIGNED_INT: 4
     * - gl.FLOAT: 4
     * @remarks Set this property together with {@link type | .type}. The recommended way is using the {@link setType | .setType} method.
     * @see `constructor`` for a list of known type sizes.
     * @remarks Expects a `1`, `2` or `4`
     */
    'elementSize',
    /**
     * The expected number of vertices in VBO.
     * @remarks Expects a `Integer`
     */
    'count',
    /**
     * A version number, incremented every time the needsUpdate property is set to true.
     * @remarks Expects a `Integer`
     */
    'version',
].distinct();
defaults.gLBufferAttribute = {};
