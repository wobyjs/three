import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
export * from 'three/examples/jsm/postprocessing/Pass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        pass: string[]
        fullScreenQuad: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pass: string[]
        fullScreenQuad: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\Pass.d.ts

consParams.pass = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\Pass.d.ts

objParams.pass = [
    'isPass',
    'enabled',
    'needsSwap',
    'clear',
    'renderToScreen',
].distinct()


consParams.fullScreenQuad = [
    'material',
].distinct()


objParams.fullScreenQuad = [
    'material',
].distinct()


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

