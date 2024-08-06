import { Node } from '../../../../three-types'
import Renderer from 'three/src/renderers/common/Renderer.js'
import PMREMGenerator from 'three/src/renderers/common/extras/PMREMGenerator.js'
export { PMREMGenerator }
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objParams } from '../../../../lib/3/objParams'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        PMREMGenerator: typeof PMREMGenerator
    }
}

Three.PMREMGenerator = PMREMGenerator

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            //@ts-ignore
            pmremGenerator: PMREMGeneratorProps,
        }
    }
}

declare module '../../../../lib/3/consParams' {
    interface consParams {
        pmremGenerator: string[]
    }
}

declare module '../../../../lib/3/objParams' {
    interface objParams {
        pmremGenerator: string[]
    }
}

consParams.pmremGenerator = ['renderer']

objParams.pmremGenerator = []

export type PMREMGeneratorProps = Node<PMREMGenerator, typeof PMREMGenerator, { renderer: Renderer; }>

declare module '../../../../lib/3/defaults' {
    interface defaults {
        pMREMGenerator: Partial<{ renderer: Renderer; }>
    }
}

defaults.pMREMGenerator = {}

