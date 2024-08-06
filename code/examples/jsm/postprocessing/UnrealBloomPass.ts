import { Node, Vector2 } from '../../../three-types'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
export * from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        UnrealBloomPass: typeof UnrealBloomPass
    }
}

Three.UnrealBloomPass = UnrealBloomPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: UnrealBloomPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        unrealBloomPass: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        unrealBloomPass: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\UnrealBloomPass.d.ts

consParams.unrealBloomPass = [
    'resolution',
    'strength',
    'radius',
    'threshold',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\UnrealBloomPass.d.ts    

objParams.unrealBloomPass = [...objParams.pass,
    'resolution',
    'strength',
    'radius',
    'threshold',
    'clearColor',
    'renderTargetsHorizontal',
    'renderTargetsVertical',
    'nMips',
    'renderTargetBright',
    'highPassUniforms',
    'materialHighPassFilter',
    'separableBlurMaterials',
    'compositeMaterial',
    'bloomTintColors',
    'copyUniforms',
    'blendMaterial',
    'oldClearColor',
    'oldClearAlpha',
    'basic',
    'fsQuad',
].distinct()

export type UnrealBloomPassProps = Node<UnrealBloomPass, typeof UnrealBloomPass, { resolution: Vector2; strength: number; radius: number; threshold: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        unrealBloomPass: Partial<{ resolution: Vector2; strength: number; radius: number; threshold: number; }>
    }
}

defaults.unrealBloomPass = {}

