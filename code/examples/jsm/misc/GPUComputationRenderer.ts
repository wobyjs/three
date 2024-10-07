import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'
export * from 'three/examples/jsm/misc/GPUComputationRenderer.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GPUComputationRenderer: typeof GPUComputationRenderer
    }
}

Three.GPUComputationRenderer = GPUComputationRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gpuComputationRenderer: GPUComputationRendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gpuComputationRenderer: typeof gpuComputationRenderer
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gpuComputationRenderer: typeof _gpuComputationRenderer
    }
}



// const variable = ([
//     'name',
//     'initialValueTexture',
//     'material',
//     'dependencies',
//     'renderTargets',
//     'wrapS',
//     'wrapT',
//     'minFilter',
//     'magFilter',
// ] as const).distinct()
// consParams.variable = variable

const gpuComputationRenderer = ([
    'sizeX',
    'sizeY',
    'renderer',
] as const).distinct()
consParams.gpuComputationRenderer = gpuComputationRenderer



const _gpuComputationRenderer = ([
] as const).distinct()
objProps.gpuComputationRenderer = _gpuComputationRenderer

export type GPUComputationRendererProps = Node<GPUComputationRenderer, typeof GPUComputationRenderer, { sizeX: number; sizeY: number; renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gpuComputationRenderer: Partial<{ sizeX: number; sizeY: number; renderer: WebGLRenderer; }>
    }
}

defaults.gpuComputationRenderer = {}

