import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { PeppersGhostEffect } from 'three/examples/jsm/effects/PeppersGhostEffect.js'
export * from 'three/examples/jsm/effects/PeppersGhostEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PeppersGhostEffect: typeof PeppersGhostEffect
    }
}

Three.PeppersGhostEffect = PeppersGhostEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            peppersGhostEffect: PeppersGhostEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        peppersGhostEffect: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        peppersGhostEffect: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\PeppersGhostEffect.d.ts

consParams.peppersGhostEffect = [
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\PeppersGhostEffect.d.ts

objParams.peppersGhostEffect = [
    'cameraDistance',
    'reflectFromAbove',
].distinct()

export type PeppersGhostEffectProps = Node<PeppersGhostEffect, typeof PeppersGhostEffect, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        peppersGhostEffect: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.peppersGhostEffect = {}

