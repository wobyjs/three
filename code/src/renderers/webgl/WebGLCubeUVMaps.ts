import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLCubeUVMaps } from 'three/src/renderers/webgl/WebGLCubeUVMaps.js'
export { WebGLCubeUVMaps } from 'three/src/renderers/webgl/WebGLCubeUVMaps.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLCubeUVMaps: typeof WebGLCubeUVMaps
    }
}

Three.WebGLCubeUVMaps = WebGLCubeUVMaps

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCubeUVMaps: WebGLCubeUVMapsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglCubeUvMaps: typeof webglCubeUvMaps
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglCubeUvMaps: typeof _webglCubeUvMaps
    }
}



const webglCubeUvMaps = ([
    'renderer',
] as const).distinct()
consParams.webglCubeUvMaps = webglCubeUvMaps



const _webglCubeUvMaps = ([
] as const).distinct()
objProps.webglCubeUvMaps = _webglCubeUvMaps

export type WebGLCubeUVMapsProps = Node<WebGLCubeUVMaps, typeof WebGLCubeUVMaps, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCubeUVMaps: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.webGLCubeUVMaps = {}

