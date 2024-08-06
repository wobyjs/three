import { WaterOptions, Water } from 'three/examples/jsm/objects/Water.js'
export * from 'three/examples/jsm/objects/Water.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Water: typeof Water
    }
}

Three.Water = Water

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            water: WaterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        water: string[]
        waterOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        water: string[]
        waterOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water.d.ts

consParams.waterOptions = [
    'textureWidth',
    'textureHeight',
    'clipBias',
    'alpha',
    'time',
    'waterNormals',
    'sunDirection',
    'sunColor',
    'waterColor',
    'eye',
    'distortionScale',
    'side',
    'fog',
].distinct()


consParams.water = [
    'geometry',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water.d.ts

objParams.waterOptions = [
    'textureWidth',
    'textureHeight',
    'clipBias',
    'alpha',
    'time',
    'waterNormals',
    'sunDirection',
    'sunColor',
    'waterColor',
    'eye',
    'distortionScale',
    'side',
    'fog',
].distinct()


objParams.water = [...objParams.mesh,
    'material',
].distinct()

export type WaterProps = Node<Water, typeof Water, { geometry: BufferGeometry; options: WaterOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        water: Partial<{ geometry: BufferGeometry; options: WaterOptions; }>
    }
}

defaults.water = {}

