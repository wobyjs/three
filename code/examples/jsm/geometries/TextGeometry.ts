import { TextGeometryParameters, TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { WrapFont } from '../loaders/FontLoader'
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
export * from 'three/examples/jsm/geometries/TextGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import '../../../src/geometries/ExtrudeGeometry'
import { Functionant, WrapAsString } from '../../../three-types';

declare module '../../../lib/3/three'
{
    interface Three {
        TextGeometry: typeof TextGeometry
    }
}

Three.TextGeometry = TextGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textGeometry: TextGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        textGeometry: typeof textGeometry
        textGeometryParameters: WrapAsString<TextGeometryParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        textGeometry: typeof _textGeometry
        textGeometryParameters: typeof _textGeometryParameters
    }
}



consParams.textGeometryParameters = {
    ...consParams.extrudeGeometryOptions,
    ...(['font',
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
    ] as const).toObject()
}

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

const textGeometry = ([
    /**
     * Create a new instance of {@link TextGeometry}
     * @param text The text that needs to be shown.
     * @param parameters Object that can contain the following parameters. @see {@link TextGeometryParameters} for defaults.
     */
    'text',
    'parameters', //textGeometryParameters
] as const).distinct()
consParams.textGeometry = textGeometry



const _textGeometryParameters = ([...objProps.extrudeGeometryOptions,
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
] as const).distinct()
objProps.textGeometryParameters = _textGeometryParameters

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

const _textGeometry = ([...objProps.extrudeGeometry,
] as const).distinct()
objProps.textGeometry = _textGeometry

export type TextGeometryProps = BufferGeometryNode<Omit<TextGeometry, 'parameters'>, Omit<typeof TextGeometry, 'parameters'>, { text: string; parameters?: Functionant<WrapFont<TextGeometryParameters>> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        textGeometry: Partial<{ text?: string; parameters?: Functionant<WrapFont<TextGeometryParameters>> }>
    }
}

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
}
