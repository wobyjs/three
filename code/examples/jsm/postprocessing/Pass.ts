import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
export * from 'three/examples/jsm/postprocessing/Pass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Pass: typeof Pass
        FullScreenQuad: typeof FullScreenQuad
    }
}

Three.Pass = Pass
Three.FullScreenQuad = FullScreenQuad

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pass: PassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pass: typeof pass
        fullScreenQuad: typeof fullScreenQuad
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pass: typeof _pass
        fullScreenQuad: typeof _fullScreenQuad
    }
}



const pass = ([
] as const).distinct()
consParams.pass = pass



const _pass = ([
    'isPass',
    'enabled',
    'needsSwap',
    'clear',
    'renderToScreen',
] as const).distinct()
objProps.pass = _pass


const fullScreenQuad = ([
    'material',
] as const).distinct()
consParams.fullScreenQuad = fullScreenQuad


const _fullScreenQuad = ([
    'material',
] as const).distinct()
objProps.fullScreenQuad = _fullScreenQuad


export type PassProps = Node<Pass, typeof Pass, { renderer: WebGLRenderer; writeBuffer: WebGLRenderTarget; readBuffer: WebGLRenderTarget; deltaTime: number; maskActive: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pass: Partial<{ renderer: WebGLRenderer; writeBuffer: WebGLRenderTarget; readBuffer: WebGLRenderTarget; deltaTime: number; maskActive: boolean; }>
    }
}

defaults.pass = {}

export type FullScreenQuadProps = Node<FullScreenQuad, typeof FullScreenQuad, { renderer: WebGLRenderer; writeBuffer: WebGLRenderTarget; readBuffer: WebGLRenderTarget; deltaTime: number; maskActive: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fullScreenQuad: Partial<{ renderer: WebGLRenderer; writeBuffer: WebGLRenderTarget; readBuffer: WebGLRenderTarget; deltaTime: number; maskActive: boolean; }>
    }
}

defaults.fullScreenQuad = {}

