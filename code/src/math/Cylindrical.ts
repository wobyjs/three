import { Node } from '../../three-types'
import { Cylindrical } from 'three/src/math/Cylindrical.js'
export { Cylindrical } from 'three/src/math/Cylindrical.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Cylindrical: typeof Cylindrical
    }
}

Three.Cylindrical = Cylindrical

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cylindrical: CylindricalProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        cylindrical: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        cylindrical: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Cylindrical.d.ts

consParams.cylindrical = [
    /**
     * @default 1
     */
    'radius',
    /**
     * @default 0
     */
    'theta',
    /**
     * @default 0
     */
    'y',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Cylindrical.d.ts

objParams.cylindrical = [
    /**
     * @default 1
     */
    'radius',
    /**
     * @default 0
     */
    'theta',
    /**
     * @default 0
     */
    'y',
].distinct()

export type CylindricalProps = Node<Cylindrical, typeof Cylindrical, { radius?: number; theta?: number; y?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        cylindrical: { radius?: number; theta?: number; y?: number; }
    }
}

defaults.cylindrical = { radius: 0, theta: 0, y: 0, }