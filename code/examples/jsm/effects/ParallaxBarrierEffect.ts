import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { ParallaxBarrierEffect } from 'three/examples/jsm/effects/ParallaxBarrierEffect.js'
export * from 'three/examples/jsm/effects/ParallaxBarrierEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ParallaxBarrierEffect: typeof ParallaxBarrierEffect
    }
}

Three.ParallaxBarrierEffect = ParallaxBarrierEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parallaxBarrierEffect: ParallaxBarrierEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        parallaxBarrierEffect: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        parallaxBarrierEffect: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\ParallaxBarrierEffect.d.ts

consParams.parallaxBarrierEffect = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\ParallaxBarrierEffect.d.ts

objParams.parallaxBarrierEffect = [
].distinct()

export type ParallaxBarrierEffectProps = Node<ParallaxBarrierEffect, typeof ParallaxBarrierEffect, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        parallaxBarrierEffect: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.parallaxBarrierEffect = {}

