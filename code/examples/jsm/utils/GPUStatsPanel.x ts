import { Node } from '../../../three-types'
import { GPUStatsPanel } from 'three/examples/jsm/utils/GPUStatsPanel.js'
export * from 'three/examples/jsm/utils/GPUStatsPanel.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GPUStatsPanel: typeof GPUStatsPanel
    }
}

Three.GPUStatsPanel = GPUStatsPanel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            //@ts-ignore
            gpuStatsPanel: GPUStatsPanelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gpuStatsPanel: typeof gpuStatsPanel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gpuStatsPanel: typeof _gpuStatsPanel
    }
}



const gpuStatsPanel = ([
    'context',
    'name',
] as const).distinct()
consParams.gpuStatsPanel = gpuStatsPanel



const _gpuStatsPanel = ([
    'context',
    'extension',
    'maxTime',
    'activeQueries',
    'startQuery',
    'endQuery',
] as const).distinct()
objProps.gpuStatsPanel = _gpuStatsPanel

export type GPUStatsPanelProps = Node<GPUStatsPanel, typeof GPUStatsPanel, { context: WebGLRenderingContext | WebGL2RenderingContext, name?: string }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gpuStatsPanel: Partial<{ context: WebGLRenderingContext | WebGL2RenderingContext, name?: string }>
    }
}

defaults.gpuStatsPanel = {}

