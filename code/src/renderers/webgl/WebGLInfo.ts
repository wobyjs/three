import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLInfo: typeof WebGLInfo
    }
}

Three.WebGLInfo = WebGLInfo

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglInfo: WebGLInfoProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglInfo: typeof webglInfo
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglInfo: typeof _webglInfo
    }
}


/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */

const webglInfo = ([
    'gl',
] as const).distinct()
consParams.webglInfo = webglInfo


/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */

const _webglInfo = ([
    /**
     * @default true
     */
    'autoReset',
    /**
     * @default { geometries: 0, textures: 0 }
     */
    'memory',
    /**
     * @default null
     */
    'programs',
    /**
     * @default { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }
     */
    'render',
] as const).distinct()
objProps.webglInfo = _webglInfo

export type WebGLInfoProps = Node<WebGLInfo, typeof WebGLInfo, { gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLInfo: Partial<{ gl: WebGLRenderingContext; }>
    }
}

defaults.webGLInfo = {}

