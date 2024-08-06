import { AsciiEffectOptions, AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js'
export * from 'three/examples/jsm/effects/AsciiEffect.js'
import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AsciiEffect: typeof AsciiEffect
    }
}

Three.AsciiEffect = AsciiEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            asciiEffect: AsciiEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        asciiEffect: string[]
        asciiEffectOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        asciiEffect: string[]
        asciiEffectOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AsciiEffect.d.ts

consParams.asciiEffectOptions = [
    'resolution',
    'scale',
    'color',
    'alpha',
    'block',
    'invert',
].distinct()


consParams.asciiEffect = [
    'renderer',
    'charSet',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AsciiEffect.d.ts

objParams.asciiEffectOptions = [
    'resolution',
    'scale',
    'color',
    'alpha',
    'block',
    'invert',
].distinct()


objParams.asciiEffect = [
    'domElement',
].distinct()

export type AsciiEffectProps = Node<AsciiEffect, typeof AsciiEffect, { renderer: WebGLRenderer; charSet?: string; options?: AsciiEffectOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        asciiEffect: Partial<{ renderer: WebGLRenderer; charSet?: string; options?: AsciiEffectOptions; }>
    }
}

defaults.asciiEffect = {}

