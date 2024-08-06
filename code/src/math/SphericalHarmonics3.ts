import { Node } from '../../three-types'
import { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js'
export { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        sphericalHarmonics3: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        sphericalHarmonics3: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\SphericalHarmonics3.d.ts

consParams.sphericalHarmonics3 = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\SphericalHarmonics3.d.ts

objParams.sphericalHarmonics3 = [
    /**
     * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
     * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()].distinct()

     */
    'coefficients',
].distinct()

export type SphericalHarmonics3Props = Node<SphericalHarmonics3, typeof SphericalHarmonics3, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        sphericalHarmonics3: {}
    }
}

defaults.sphericalHarmonics3 = {}

