import { Node, WrapAsString } from '../../../three-types'
import Backend from 'three/src/renderers/common/Backend.js'
import Renderer, { type RendererParameters } from 'three/src/renderers/common/Renderer.js'
export { Renderer, RendererParameters }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { rendererEx } from '../RendererEx'

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
        renderer: typeof renderer
        rendererParameters: WrapAsString<RendererParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        renderer: typeof _renderer
        rendererParameters: typeof _rendererParameters
    }
}

consParams.rendererParameters = ([
    'logarithmicDepthBuffer',
    'alpha',
] as const).toObject()

/**
 * Generic Renderer interface containing either a WebGl or WebGpu backend.
 */

const renderer = ([
    'backend',
    'parameters', //rendererParameters
    'domElement',
] as const).distinct()
consParams.renderer = renderer



const _rendererParameters = ([...rendererEx,
    'logarithmicDepthBuffer',
    'alpha',
] as const).distinct()
objProps.rendererParameters = _rendererParameters

/**
 * Generic Renderer interface containing either a WebGl or WebGpu backend.
 */

const _renderer = ([...rendererEx,
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
] as const).distinct()
objProps.renderer = _renderer

export type RendererProps = Node<Renderer, typeof Renderer, { backend: Backend; parameters?: RendererParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderer: Partial<{ backend: Backend; parameters?: RendererParameters; }>
    }
}

defaults.renderer = {}

