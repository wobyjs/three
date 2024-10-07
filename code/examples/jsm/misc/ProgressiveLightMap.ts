import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { ProgressiveLightMap } from 'three/examples/jsm/misc/ProgressiveLightMap.js'
export * from 'three/examples/jsm/misc/ProgressiveLightMap.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ProgressiveLightMap: typeof ProgressiveLightMap
    }
}

Three.ProgressiveLightMap = ProgressiveLightMap

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            progressiveLightMap: ProgressiveLightMapProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        progressiveLightMap: typeof progressiveLightMap
        uvBoxes: typeof uvBoxes
        lightMapContainers: typeof lightMapContainers
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        progressiveLightMap: typeof _progressiveLightMap
        uvBoxes: typeof _uvBoxes
        lightMapContainers: typeof _lightMapContainers
    }
}



const uvBoxes = ([
    'w',
    'h',
    'index',
] as const).distinct()
consParams.uvBoxes = uvBoxes


const lightMapContainers = ([
    'basicMat',
    'object',
] as const).distinct()
consParams.lightMapContainers = lightMapContainers


const progressiveLightMap = ([
    'renderer',
    'res',
] as const).distinct()
consParams.progressiveLightMap = progressiveLightMap



const _uvBoxes = ([
    'w',
    'h',
    'index',
] as const).distinct()
objProps.uvBoxes = _uvBoxes


const _lightMapContainers = ([
    'basicMat',
    'object',
] as const).distinct()
objProps.lightMapContainers = _lightMapContainers


const _progressiveLightMap = ([
    'renderer',
    'res',
    'lightMapContainers',
    'compiled',
    'scene',
    'tinyTarget',
    'buffer1Active',
    'firstUpdate',
    'warned',
    'progressiveLightMap1',
    'progressiveLightMap2',
    'uvMat',
    'uv_boxes',
    'blurringPlane',
    'labelMaterial',
    'labelPlane',
    'labelMesh',
] as const).distinct()
objProps.progressiveLightMap = _progressiveLightMap

export type ProgressiveLightMapProps = Node<ProgressiveLightMap, typeof ProgressiveLightMap, { renderer: WebGLRenderer; res?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        progressiveLightMap: Partial<{ renderer: WebGLRenderer; res?: number; }>
    }
}

defaults.progressiveLightMap = {}

