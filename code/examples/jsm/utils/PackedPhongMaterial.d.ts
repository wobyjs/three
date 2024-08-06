import { Node } from '../../../three-types'
import { PackedPhongMaterial } from 'three/examples/jsm/utils/PackedPhongMaterial.js'
export * from 'three/examples/jsm/utils/PackedPhongMaterial.js'

import { Three } from '../../../../lib/3/index'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        PackedPhongMaterial: typeof PackedPhongMaterial
    }
}

Three.PackedPhongMaterial = PackedPhongMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            packedPhongMaterial: PackedPhongMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        packedPhongMaterial: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        packedPhongMaterial: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts

consParams.packedPhongMaterial = [
    'parameters',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts

objParams.packedPhongMaterial = [...objParams.meshPhongMaterialParameters,
].distinct()


//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\LDrawUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\PackedPhongMaterial.d.ts
/**
 * `PackedPhongMaterial` inherited from THREE.MeshPhongMaterial
 *
 * @param {Object} parameters
 */

objParams.packedPhongMaterial = [...objParams.meshPhongMaterial,
].distinct()

export type PackedPhongMaterialProps = Node<PackedPhongMaterial, typeof PackedPhongMaterial, { parameters: MeshPhongMaterialParameters }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        packedPhongMaterial: Partial<{ parameters: MeshPhongMaterialParameters }>
    }
}

defaults.packedPhongMaterial = {}


declare module '../../../lib/3/defaults' {
    interface defaults {
        packedPhongMaterial: Partial<{ parameters: MeshPhongMaterialParameters }>
    }
}

defaults.packedPhongMaterial = { parameters: MeshPhongMaterialParameters }
