import { MaterialNode } from '../../../src/materials/MaterialNode'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
export * from 'three/examples/jsm/lines/LineMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import { WrapAsString } from '../../../three-types'
import { MaterialParameters } from 'three/src/materials/Material'

import '../../../lib/three/extensions'
import '../../../src/materials/Material'
import '../../..//src/materials/ShaderMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        LineMaterial: typeof LineMaterial
    }
}

Three.LineMaterial = LineMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineMaterial: LineMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lineMaterial: WrapAsString<MaterialParameters>
        lineMaterialParameters: WrapAsString<MaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lineMaterial: string[]
        lineMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineMaterial.d.ts

consParams.lineMaterialParameters = {
    ...consParams.materialParameters,
    ...(['alphaToCoverage',
        'color',
        'dashed',
        'dashScale',
        'dashSize',
        'dashOffset',
        'gapSize',
        'linewidth',
        'resolution',
        'wireframe',
        'worldUnits',
    ] as const).toObject()
}


consParams.lineMaterial = { ...consParams.lineMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineMaterial.d.ts    

objParams.lineMaterialParameters = [...objParams.materialParameters,
    'alphaToCoverage',
    'color',
    'dashed',
    'dashScale',
    'dashSize',
    'dashOffset',
    'gapSize',
    'linewidth',
    'resolution',
    'wireframe',
    'worldUnits',
].distinct()



objParams.lineMaterial = [...objParams.shaderMaterial,
    'color',
    'dashed',
    'dashScale',
    'dashSize',
    'dashOffset',
    'gapSize',
    'opacity',
    'linewidth',
    'resolution',
    'alphaToCoverage',
    'worldUnits',
].distinct()

export type LineMaterialProps = MaterialNode<LineMaterial, typeof LineMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineMaterial: Partial<LineMaterial>
    }
}

defaults.lineMaterial = {}
