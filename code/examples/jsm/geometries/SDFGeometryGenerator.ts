import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { SDFGeometryGenerator } from 'three/examples/jsm/geometries/SDFGeometryGenerator.js'
export * from 'three/examples/jsm/geometries/SDFGeometryGenerator.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        SDFGeometryGenerator: typeof SDFGeometryGenerator
    }
}

Three.SDFGeometryGenerator = SDFGeometryGenerator

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sdfGeometryGenerator: SDFGeometryGeneratorProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        sdfGeometryGenerator: typeof sdfGeometryGenerator
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        sdfGeometryGenerator: typeof _sdfGeometryGenerator
    }
}



const sdfGeometryGenerator = ([
    'renderer',
] as const).distinct()
consParams.sdfGeometryGenerator = sdfGeometryGenerator



const _sdfGeometryGenerator = ([
] as const).distinct()
objProps.sdfGeometryGenerator = _sdfGeometryGenerator

export type SDFGeometryGeneratorProps = Node<SDFGeometryGenerator, typeof SDFGeometryGenerator, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        sDFGeometryGenerator: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.sDFGeometryGenerator = {}

