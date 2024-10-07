import { Node } from '../../../three-types'
import { MD2CharacterComplex } from 'three/examples/jsm/misc/MD2CharacterComplex.js'
export { MD2CharacterComplex } from 'three/examples/jsm/misc/MD2CharacterComplex.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MD2CharacterComplex: typeof MD2CharacterComplex
    }
}

Three.MD2CharacterComplex = MD2CharacterComplex

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            md2CharacterComplex: MD2CharacterComplexProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        md2CharacterComplex: typeof md2CharacterComplex
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        md2CharacterComplex: typeof _md2CharacterComplex
    }
}



const md2CharacterComplex = ([
] as const).distinct()
consParams.md2CharacterComplex = md2CharacterComplex



const _md2CharacterComplex = ([
    'scale',
    'animationFPS',
    'transitionFrames',
    'maxSpeed',
    'maxreverseSpeed',
    'frontAcceleration',
    'backAcceleration',
    'frontDecceleration',
    'angularSpeed',
    'root',
    'meshBody',
    'meshWeapon',
    'controls',
    'skinsBody',
    'skinsWeapon',
    'weapons',
    'currentSkin',
    'onLoadComplete',
    'meshes',
    'animations',
    'loadCounter',
    'speed',
    'bodyOrientation',
    'walkSpeed',
    'crouchSpeed',
    'activeAnimation',
    'oldAnimation',
] as const).distinct()
objProps.md2CharacterComplex = _md2CharacterComplex

export type MD2CharacterComplexProps = Node<MD2CharacterComplex, typeof MD2CharacterComplex, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        md2CharacterComplex: {}
    }
}

defaults.md2CharacterComplex = {}

