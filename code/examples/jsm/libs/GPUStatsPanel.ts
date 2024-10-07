import { GPUStatsPanel } from 'three/examples/jsm/utils/GPUStatsPanel.js'
export * from 'three/examples/jsm/utils/GPUStatsPanel.js'
import { Node } from '../../../three-types'
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

export type GPUStatsPanelProps = Node<GPUStatsPanel, typeof GPUStatsPanel, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gPUStatsPanel: {}
    }
}

defaults.gPUStatsPanel = {}



// import { } from 'three/examples/jsm/libs/fflate.module'
// import { } from 'three/examples/jsm/libs/meshopt_decoder.module'
// import { } from 'three/examples/jsm/libs/stats.module'
// import { } from 'three/examples/jsm/libs/tween.module'