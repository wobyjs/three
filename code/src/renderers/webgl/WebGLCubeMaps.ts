import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js'
export { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        webglCubeMaps: typeof webglCubeMaps
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglCubeMaps: typeof _webglCubeMaps
    }
}



const webglCubeMaps = ([
    'renderer',
] as const).distinct()
consParams.webglCubeMaps = webglCubeMaps


const _webglCubeMaps = ([] as const).distinct()
objProps.webglCubeMaps = _webglCubeMaps

export type WebGLCubeMapsProps = Node<WebGLCubeMaps, typeof WebGLCubeMaps, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCubeMaps: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.webGLCubeMaps = {}

