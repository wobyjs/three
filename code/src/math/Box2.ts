import { Node, Vector2 } from '../../three-types'
import { Box2 } from 'three/src/math/Box2.js'
export { Box2 } from 'three/src/math/Box2.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Box2: typeof Box2
    }
}

Three.Box2 = Box2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            box2: Box2Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        box2: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        box2: string[]
    }
}
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box2.d.ts
// Math //////////////////////////////////////////////////////////////////////////////////

consParams.box2 = [
    'min',
    'max',
].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box2.d.ts
// Math //////////////////////////////////////////////////////////////////////////////////

objParams.box2 = [
    /**
     * @default new THREE.Vector2( + Infinity, + Infinity )
     */
    'min',
    /**
     * @default new THREE.Vector2( - Infinity, - Infinity )
     */
    'max',
].distinct()


export type Box2Props = Node<Box2, typeof Box2, { min?: Vector2; max?: Vector2; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        box2: { min?: Vector2; max?: Vector2; }
    }
}

defaults.box2 = {}

