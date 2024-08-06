import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect.js'
export * from 'three/examples/jsm/effects/StereoEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        StereoEffect: typeof StereoEffect
    }
}

Three.StereoEffect = StereoEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stereoEffect: StereoEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stereoEffect: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        stereoEffect: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\StereoEffect.d.ts

consParams.stereoEffect = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\StereoEffect.d.ts

objParams.stereoEffect = [
].distinct()

export type StereoEffectProps = Node<StereoEffect, typeof StereoEffect, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stereoEffect: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.stereoEffect = {}

