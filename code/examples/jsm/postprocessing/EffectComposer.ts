import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
export * from 'three/examples/jsm/postprocessing/EffectComposer.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        EffectComposer: typeof EffectComposer
    }
}

Three.EffectComposer = EffectComposer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            effectComposer: EffectComposerProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        effectComposer: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        effectComposer: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\EffectComposer.d.ts

consParams.effectComposer = [
    'renderer',
    'renderTarget',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\EffectComposer.d.ts

objParams.effectComposer = [
    'renderer',
    'renderTarget1',
    'renderTarget2',
    'writeBuffer',
    'readBuffer',
    'passes',
    'copyPass',
    'clock',
    'renderToScreen',
].distinct()

export type EffectComposerProps = Node<EffectComposer, typeof EffectComposer, { renderer: WebGLRenderer; renderTarget?: WebGLRenderTarget; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        effectComposer: Partial<{ renderer: WebGLRenderer; renderTarget?: WebGLRenderTarget; }>
    }
}

defaults.effectComposer = {}

