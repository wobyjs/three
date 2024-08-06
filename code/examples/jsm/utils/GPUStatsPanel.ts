import { Node } from '../../../three-types'
import { GPUStatsPanel } from 'three/examples/jsm/utils/GPUStatsPanel.js'
export * from 'three/examples/jsm/utils/GPUStatsPanel.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        gpuStatsPanel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        gpuStatsPanel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts

consParams.gpuStatsPanel = [
    'context',
    'name',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts

objParams.gpuStatsPanel = [
    'context',
    'extension',
    'maxTime',
    'activeQueries',
    'startQuery',
    'endQuery',
].distinct()

export type GPUStatsPanelProps = Node<GPUStatsPanel, typeof GPUStatsPanel, { context: WebGLRenderingContext | WebGL2RenderingContext, name?: string }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gpuStatsPanel: Partial<{ context: WebGLRenderingContext | WebGL2RenderingContext, name?: string }>
    }
}

defaults.gpuStatsPanel = {}

