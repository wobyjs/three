import { Node } from '../../../three-types'
import { MD2Character } from 'three/examples/jsm/misc/MD2Character.js'
export * from 'three/examples/jsm/misc/MD2Character.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MD2Character: typeof MD2Character
    }
}

Three.MD2Character = MD2Character

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            md2Character: MD2CharacterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        md2Character: typeof md2Character
        md2PartsConfig: typeof md2PartsConfig
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        md2Character: typeof _md2Character
        md2PartsConfig: typeof _md2PartsConfig
    }
}



const md2PartsConfig = ([
    'baseUrl',
    'body',
    'skins',
    'weapons',
] as const).distinct()
consParams.md2PartsConfig = md2PartsConfig


const md2Character = ([
] as const).distinct()
consParams.md2Character = md2Character



const _md2PartsConfig = ([
    'baseUrl',
    'body',
    'skins',
    'weapons',
] as const).distinct()
objProps.md2PartsConfig = _md2PartsConfig


const _md2Character = ([
    'scale',
    'animationFPS',
    'root',
    'meshBody',
    'meshWeapon',
    'skinsBody',
    'skinsWeapon',
    'weapons',
    'activeAnimation',
    'mixer',
    'loadCounter',
] as const).distinct()
objProps.md2Character = _md2Character

export type MD2CharacterProps = Node<MD2Character, typeof MD2Character, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        md2Character: {}
    }
}

defaults.md2Character = {}

