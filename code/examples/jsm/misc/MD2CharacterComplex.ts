import { Node } from '../../../three-types'
import { MD2CharacterComplex } from 'three/examples/jsm/misc/MD2CharacterComplex.js'
export { MD2CharacterComplex } from 'three/examples/jsm/misc/MD2CharacterComplex.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        md2CharacterComplex: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        md2CharacterComplex: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2CharacterComplex.d.ts

consParams.md2CharacterComplex = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2CharacterComplex.d.ts

objParams.md2CharacterComplex = [
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
].distinct()

export type MD2CharacterComplexProps = Node<MD2CharacterComplex, typeof MD2CharacterComplex, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        md2CharacterComplex: {}
    }
}

defaults.md2CharacterComplex = {}

