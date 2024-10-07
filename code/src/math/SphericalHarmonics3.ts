import { Node } from '../../three-types'
import { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js'
export { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        SphericalHarmonics3: typeof SphericalHarmonics3
    }
}

Three.SphericalHarmonics3 = SphericalHarmonics3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sphericalHarmonics3: SphericalHarmonics3Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        sphericalHarmonics3: typeof sphericalHarmonics3
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        sphericalHarmonics3: typeof _sphericalHarmonics3
    }
}


const sphericalHarmonics3 = ([
] as const).distinct()
consParams.sphericalHarmonics3 = sphericalHarmonics3

const _sphericalHarmonics3 = ([
    /**
     * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
     * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] as const).distinct()
     */
    'coefficients',
] as const).distinct()
objProps.sphericalHarmonics3 = _sphericalHarmonics3

export type SphericalHarmonics3Props = Node<SphericalHarmonics3, typeof SphericalHarmonics3, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        sphericalHarmonics3: {}
    }
}

defaults.sphericalHarmonics3 = {}

