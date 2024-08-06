import { SSRPassParams, SSRPass } from 'three/examples/jsm/postprocessing/SSRPass.js'
export * from 'three/examples/jsm/postprocessing/SSRPass.js'
import { Node, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        SSRPass: typeof SSRPass
    }
}

Three.SSRPass = SSRPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ssrPass: SSRPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ssrPass: WrapAsString<SSRPassParams>
        ssrPassParams: WrapAsString<SSRPassParams>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ssrPass: string[]
        ssrPassParams: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSRPass.d.ts

consParams.ssrPassParams = ([
    'renderer',
    'scene',
    'camera',
    'width',
    'height',
    'selects',
    'isPerspectiveCamera',
    'isBouncing',
    'groundReflector',
] as const).toObject()


consParams.ssrPass = { ...consParams.ssrPassParams }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSRPass.d.ts

objParams.ssrPassParams = [
    'renderer',
    'scene',
    'camera',
    'width',
    'height',
    'selects',
    'isPerspectiveCamera',
    'isBouncing',
    'groundReflector',
].distinct()


objParams.ssrPass = [...objParams.pass,
    'width',
    'height',
    'clear',
    'renderer',
    'scene',
    'camera',
    'groundReflector',
    'opacity',
    'output',
    'maxDistance',
    'thickness',
    'tempColor',
    'selects',
    'selective',
    'bouncing',
    'blur',
    'distanceAttenuation',
    'fresnel',
    'infiniteThick',
    'beautyRenderTarget',
    'prevRenderTarget',
    'normalRenderTarget',
    'metalnessRenderTarget',
    'ssrRenderTarget',
    'blurRenderTarget',
    'blurRenderTarget2',
    'ssrMaterial',
    'normalMaterial',
    'metalnessOnMaterial',
    'metalnessOffMaterial',
    'blurMaterial',
    'blurMaterial2',
    'depthRenderMaterial',
    'copyMaterial',
    'fsQuad',
    'originalClearColor',
].distinct()

export type SSRPassProps = Node<SSRPass, typeof SSRPass, SSRPassParams>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ssrPass: Partial<SSRPassParams>
    }
}

defaults.ssrPass = {}

