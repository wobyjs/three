import { Node } from '../../three-types'
import { Spherical } from 'three/src/math/Spherical.js'
export { Spherical } from 'three/src/math/Spherical.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Spherical: typeof Spherical
    }
}

Three.Spherical = Spherical

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spherical: SphericalProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        spherical: typeof spherical
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        spherical: typeof _spherical
    }
}



const spherical = ([
    'radius',
    'phi',
    'theta',
] as const).distinct()
consParams.spherical = spherical



const _spherical = ([
    /**
     * @default 1
     */
    'radius',
    /**
     * @default 0
     */
    'phi',
    /**
     * @default 0
     */
    'theta',
] as const).distinct()
objProps.spherical = _spherical

export type SphericalProps = Node<Spherical, typeof Spherical, { radius?: number; phi?: number; theta?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        spherical: { radius?: number; phi?: number; theta?: number; }
    }
}

defaults.spherical = { radius: 1, phi: 0, theta: 0 }
