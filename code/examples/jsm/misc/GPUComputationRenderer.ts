import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'
export * from 'three/examples/jsm/misc/GPUComputationRenderer.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        gpuComputationRenderer: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        gpuComputationRenderer: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\GpuComputationRenderer.d.ts

// consParams.variable = [
//     'name',
//     'initialValueTexture',
//     'material',
//     'dependencies',
//     'renderTargets',
//     'wrapS',
//     'wrapT',
//     'minFilter',
//     'magFilter',
// ].distinct()

consParams.gpuComputationRenderer = [
    'sizeX',
    'sizeY',
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\GpuComputationRenderer.d.ts

objParams.gpuComputationRenderer = [
].distinct()

export type GPUComputationRendererProps = Node<GPUComputationRenderer, typeof GPUComputationRenderer, { sizeX: number; sizeY: number; renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gpuComputationRenderer: Partial<{ sizeX: number; sizeY: number; renderer: WebGLRenderer; }>
    }
}

defaults.gpuComputationRenderer = {}

