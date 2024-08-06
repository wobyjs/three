import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { SDFGeometryGenerator } from 'three/examples/jsm/geometries/SDFGeometryGenerator.js'
export * from 'three/examples/jsm/geometries/SDFGeometryGenerator.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        sdfGeometryGenerator: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        sdfGeometryGenerator: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\SDFGeometryGenerator.d.ts

consParams.sdfGeometryGenerator = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\SDFGeometryGenerator.d.ts

objParams.sdfGeometryGenerator = [
].distinct()

export type SDFGeometryGeneratorProps = Node<SDFGeometryGenerator, typeof SDFGeometryGenerator, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        sDFGeometryGenerator: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.sDFGeometryGenerator = {}

