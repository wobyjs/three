import { HalftonePassParameters, HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js'
export * from 'three/examples/jsm/postprocessing/HalftonePass.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        HalftonePass: typeof HalftonePass
    }
}

Three.HalftonePass = HalftonePass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            halftonePass: HalftonePassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        halftonePass: string[]
        halftonePassParameters: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        halftonePass: string[]
        halftonePassParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\HalftonePass.d.ts

consParams.halftonePassParameters = [
    'shape',
    'radius',
    'rotateR',
    'rotateB',
    'rotateG',
    'scatter',
    'blending',
    'blendingMode',
    'greyscale',
    'disable',
].distinct()


consParams.halftonePass = [
    'width',
    'height',
    'params',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\HalftonePass.d.ts

objParams.halftonePassParameters = [
    'shape',
    'radius',
    'rotateR',
    'rotateB',
    'rotateG',
    'scatter',
    'blending',
    'blendingMode',
    'greyscale',
    'disable',
].distinct()


objParams.halftonePass = [...objParams.pass,
    'uniforms',
    'material',
    'fsQuad',
].distinct()

export type HalftonePassProps = Node<HalftonePass, typeof HalftonePass, { width: number; height: number; params: HalftonePassParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        halftonePass: Partial<{ width: number; height: number; params: HalftonePassParameters; }>
    }
}

defaults.halftonePass = {}

