import { Node } from '../../../three-types'
import { MD2Character } from 'three/examples/jsm/misc/MD2Character.js'
export * from 'three/examples/jsm/misc/MD2Character.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        md2Character: string[]
        md2PartsConfig: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        md2Character: string[]
        md2PartsConfig: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2Character.d.ts

consParams.md2PartsConfig = [
    'baseUrl',
    'body',
    'skins',
    'weapons',
].distinct()


consParams.md2Character = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2Character.d.ts

objParams.md2PartsConfig = [
    'baseUrl',
    'body',
    'skins',
    'weapons',
].distinct()


objParams.md2Character = [
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
].distinct()

export type MD2CharacterProps = Node<MD2Character, typeof MD2Character, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        md2Character: {}
    }
}

defaults.md2Character = {}

