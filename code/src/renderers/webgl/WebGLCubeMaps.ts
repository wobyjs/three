import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js'
export { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLCubeMaps: typeof WebGLCubeMaps
    }
}

Three.WebGLCubeUVMaps = WebGLCubeMaps

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCubeMaps: WebGLCubeMapsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglCubeMaps: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglCubeMaps: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeMaps.d.ts

consParams.webglCubeMaps = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeMaps.d.ts

objParams.webglCubeMaps = []

export type WebGLCubeMapsProps = Node<WebGLCubeMaps, typeof WebGLCubeMaps, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCubeMaps: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.webGLCubeMaps = {}

