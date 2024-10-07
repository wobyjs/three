import { Node } from '../../../three-types'
import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js'
export { WebGLState } from 'three/src/renderers/webgl/WebGLState.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLState: typeof WebGLState
    }
}

Three.WebGLState = WebGLState

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglState: WebGLStateProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglState: typeof webglState
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglState: typeof _webglState
    }
}


const webglState = ([
    'gl',
] as const).distinct()
consParams.webglState = webglState


const _webglState = ([
    'buffers',
] as const).distinct()
objProps.webglState = _webglState

export type WebGLStateProps = Node<WebGLState, typeof WebGLState, { gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLState: Partial<{ gl: WebGLRenderingContext; }>
    }
}

defaults.webGLState = {}

