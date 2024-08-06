import { Node, WrapAsString } from '../../../three-types'
import Backend from 'three/src/renderers/common/Backend.js'
import Renderer, { RendererParameters } from 'three/src/renderers/common/Renderer.js'
export { Renderer, RendererParameters }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        Renderer: typeof Renderer
    }
}

Three.Renderer = Renderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderer: RendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        renderer: string[]
        rendererParameters: WrapAsString<RendererParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        renderer: string[]
        rendererParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Renderer.d.ts

consParams.rendererParameters = ([
    'logarithmicDepthBuffer',
    'alpha',
] as const).toObject()

/**
 * Generic Renderer interface containing either a WebGl or WebGpu backend.
 */

consParams.renderer = [
    'backend',
    'parameters', //rendererParameters
    'domElement',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Renderer.d.ts

objParams.rendererParameters = [
    'logarithmicDepthBuffer',
    'alpha',
].distinct()

/**
 * Generic Renderer interface containing either a WebGl or WebGpu backend.
 */

objParams.renderer = [
    /**
     * @default true
     */
    'domElement',
    /**
     * The renderer backend; could be WebGlBackend or WebGpuBackend
     */
    'backend',
    /**
     * @default true
     */
    'autoClear',
    /**
     * @default true
     */
    'autoClearColor',
    /**
     * @default true
     */
    'autoClearDepth',
    /**
     * @default true
     */
    'autoClearStencil',
    /**
     * @default SRGBColorSpace
     */
    'outputColorSpace',
    /**
     * @default NoToneMapping
     */
    'toneMapping',
    /**
     * @default 1.0
     */
    'toneMappingExposure',
    /**
     * @default true
     */
    'sortObjects',
    /**
     * @default true
     */
    'depth',
    /**
     * @default false
     */
    'stencil',
    'clippingPlanes',
    'info',
    'shadowMap',
    'xr',
    'localClippingEnabled',

    'domElement',
].distinct()

export type RendererProps = Node<Renderer, typeof Renderer, { backend: Backend; parameters?: RendererParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderer: Partial<{ backend: Backend; parameters?: RendererParameters; }>
    }
}

defaults.renderer = {}

