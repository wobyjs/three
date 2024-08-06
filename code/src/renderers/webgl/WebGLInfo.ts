import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webglInfo: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglInfo: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlInfo.d.ts
/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */

consParams.webglInfo = [
    'gl',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlInfo.d.ts
/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */

objParams.webglInfo = [
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
].distinct()

export type WebGLInfoProps = Node<WebGLInfo, typeof WebGLInfo, { gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLInfo: Partial<{ gl: WebGLRenderingContext; }>
    }
}

defaults.webGLInfo = {}

