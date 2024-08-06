import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
export * from 'three/examples/jsm/geometries/TextGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import '../../../src/geometries/ExtrudeGeometry';
Three.TextGeometry = TextGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TextGeometry.d.ts
consParams.textGeometryParameters = {
    ...consParams.extrudeGeometryOptions,
    ...['font',
        /**
         * Size of the text
         * Expects a `Float`.
         * @defaultValue `100`
         */
        'size',
        /**
         * Thickness to extrude text.
         * Expects a `Float`.
         * @defaultValue `50`
         * @deprecated THREE.TextGeometry: .height is now deprecated. Please use .depth instead
         */
        'height',
        /**
         * Thickness to extrude text.
         * Expects a `Float`.
         * @defaultValue `50`
         */
        'depth',
        /**
         * @override
         * @defaultValue `12`
         */
        'curveSegments',
        /**
         * @defaultValue `false`
         */
        'bevelEnabled',
        /**
         * How deep into text bevel goes.
         * Expects a `Float`.
         * @override
         * @defaultValue `10`
         */
        'bevelThickness',
        /**
         * How far from text outline is bevel.
         * Expects a `Float`.
         * @override
         * @defaultValue `8`
         */
        'bevelSize',
        /**
         * How far from text outline bevel starts.
         * Expects a `Float`.
         * @override
         * @defaultValue `0`
         */
        'bevelOffset',
        /**
         * @override
         * @defaultValue `3`
         */
        'bevelSegments',
    ].toObject()
};
/**
 * A class for generating text as a single geometry
 * @remarks
 * It is constructed by providing a string of text, and a set of parameters consisting of a loaded font and settings for the geometry's parent {@link THREE.ExtrudeGeometry}
 * See the {@link THREE.FontLoader} page for additional details.
 * @example
 * ```typescript
 * const loader = new FontLoader(,
 * loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
 * const geometry = new TextGeometry('Hello three.js!',
{
 * 'font',
 * 'size',
 * 'height',
 * 'curveSegments',
 * 'bevelEnabled',
 * 'bevelThickness',
 * 'bevelSize',
 * 'bevelOffset',
 *     bevelSegments
 *
 *
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text / text }
 * @see {@link https://threejs.org/docs/index.html#api/en/C:/rafaelsc/Source/threejs/three.js/docs/examples/en/geometries/TextGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/examples/jsm/geometries/TextGeometry.js}
 */
consParams.textGeometry = [
    /**
     * Create a new instance of {@link TextGeometry}
     * @param text The text that needs to be shown.
     * @param parameters Object that can contain the following parameters. @see {@link TextGeometryParameters} for defaults.
     */
    'text',
    'parameters', //textGeometryParameters
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TextGeometry.d.ts    
objParams.textGeometryParameters = [...objParams.extrudeGeometryOptions,
    'font',
    /**
     * Size of the text
     * Expects a `Float`.
     * @defaultValue `100`
     */
    'size',
    /**
     * Thickness to extrude text.
     * Expects a `Float`.
     * @defaultValue `50`
     * @deprecated THREE.TextGeometry: .height is now deprecated. Please use .depth instead
     */
    'height',
    /**
     * Thickness to extrude text.
     * Expects a `Float`.
     * @defaultValue `50`
     */
    'depth',
    /**
     * @override
     * @defaultValue `12`
     */
    'curveSegments',
    /**
     * @defaultValue `false`
     */
    'bevelEnabled',
    /**
     * How deep into text bevel goes.
     * Expects a `Float`.
     * @override
     * @defaultValue `10`
     */
    'bevelThickness',
    /**
     * How far from text outline is bevel.
     * Expects a `Float`.
     * @override
     * @defaultValue `8`
     */
    'bevelSize',
    /**
     * How far from text outline bevel starts.
     * Expects a `Float`.
     * @override
     * @defaultValue `0`
     */
    'bevelOffset',
    /**
     * @override
     * @defaultValue `3`
     */
    'bevelSegments',
].distinct();
/**
 * A class for generating text as a single geometry
 * @remarks
 * It is constructed by providing a string of text, and a set of parameters consisting of a loaded font and settings for the geometry's parent {@link THREE.ExtrudeGeometry | ExtrudeGeometry}
 * See the {@link THREE.FontLoader | FontLoader} page for additional details.
 * @example
 * ```typescript
 * const loader = new FontLoader()
 * loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
 *     const geometry = new TextGeometry('Hello three.js!', {
 *         font: font,
 *         size: 80,
 *         height: 5,
 *         curveSegments: 12,
 *         bevelEnabled: true,
 *         bevelThickness: 10,
 *         bevelSize: 8,
 *         bevelOffset: 0,
 *         bevelSegments: 5
 *     })
 * })
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
 * @see {@link https://threejs.org/docs/index.html#api/en/C:/rafaelsc/Source/threejs/three.js/docs/examples/en/geometries/TextGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/examples/jsm/geometries/TextGeometry.js | Source}
 */
objParams.textGeometry = [...objParams.extrudeGeometry,
].distinct();
defaults.textGeometry = {
// text: "default",
//  parameters: {
//     size: 100,
//     depth: 50,
//     curveSegments: 12,
//     bevelEnabled: false,
//     bevelThickness: 10,
//     bevelSize: 8,
//     bevelOffset: 0,
//     bevelSegments: 3,
// }
};
