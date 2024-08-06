import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect.js'
export * from 'three/examples/jsm/effects/AnaglyphEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AnaglyphEffect: typeof AnaglyphEffect
    }
}

Three.AnaglyphEffect = AnaglyphEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            anaglyphEffect: AnaglyphEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        anaglyphEffect: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        anaglyphEffect: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AnaglyphEffect.d.ts

consParams.anaglyphEffect = [
    'renderer',
    'width',
    'height',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AnaglyphEffect.d.ts

objParams.anaglyphEffect = [
    'colorMatrixLeft',
    'colorMatrixright',
].distinct()

export type AnaglyphEffectProps = Node<AnaglyphEffect, typeof AnaglyphEffect, { renderer: WebGLRenderer; width?: number; height?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        anaglyphEffect: Partial<{ renderer: WebGLRenderer; width?: number; height?: number; }>
    }
}

defaults.anaglyphEffect = {}

