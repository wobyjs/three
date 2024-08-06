import { Node } from '../../../three-types'
import LightingModel from 'three/src/nodes/core/LightingModel.js'
export { LightingModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightingModel: typeof LightingModel
    }
}

Three.LightingModel = LightingModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingModel: LightingModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingModel: string[]
        lightingModelReflectedLight: string[]
        lightingModelDirectInput: string[]
        lightingModelIndirectInput: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lightingModel: string[]
        lightingModelReflectedLight: string[]
        lightingModelDirectInput: string[]
        lightingModelIndirectInput: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\LightingModel.d.ts

consParams.lightingModelReflectedLight = [
    'directDiffuse',
    'directSpecular',
    'indirectDiffuse',
    'indirectSpecular',
].distinct()


consParams.lightingModelDirectInput = [
    'lightDirection',
    'lightColor',
    'reflectedLight',
    'shadowMask',
].distinct()


consParams.lightingModelIndirectInput = [
    'radiance',
    'irradiance',
    'iblIrradiance',
    'ambientOcclusion',
    'reflectedLight',
    'backdrop',
    'backdropAlpha',
    'outgoingLight',
].distinct()


consParams.lightingModel = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\LightingModel.d.ts

objParams.lightingModelReflectedLight = [
    'directDiffuse',
    'directSpecular',
    'indirectDiffuse',
    'indirectSpecular',
].distinct()


objParams.lightingModelDirectInput = [
    'lightDirection',
    'lightColor',
    'reflectedLight',
    'shadowMask',
].distinct()


objParams.lightingModelIndirectInput = [
    'radiance',
    'irradiance',
    'iblIrradiance',
    'ambientOcclusion',
    'reflectedLight',
    'backdrop',
    'backdropAlpha',
    'outgoingLight',
].distinct()


objParams.lightingModel = [
].distinct()

export type LightingModelProps = Node<LightingModel, typeof LightingModel, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingModel: {}
    }
}

defaults.lightingModel = {}

