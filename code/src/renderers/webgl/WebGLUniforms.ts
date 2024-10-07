import { Node } from '../../../three-types'
import { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js'
export { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLUniforms: typeof WebGLUniforms
    }
}

Three.WebGLUniforms = WebGLUniforms

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglUniforms: WebGLUniformsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglUniforms: typeof webglUniforms
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglUniforms: typeof _webglUniforms
    }
}



const webglUniforms = ([
    'gl',
    'program',
] as const).distinct()
consParams.webglUniforms = webglUniforms



const _webglUniforms = ([
] as const).distinct()
objProps.webglUniforms = _webglUniforms

export type WebGLUniformsProps = Node<WebGLUniforms, typeof WebGLUniforms, { gl: WebGLRenderingContext; program: WebGLProgram; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLUniforms: Partial<{ gl: WebGLRenderingContext; program: WebGLProgram; }>
    }
}

defaults.webGLUniforms = {}

