import { ReflectorOptions, Reflector } from 'three/examples/jsm/objects/Reflector.js'
export * from 'three/examples/jsm/objects/Reflector.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Reflector: typeof Reflector
    }
}

Three.Reflector = Reflector

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            reflector: ReflectorProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        reflector: string[]
        reflectorOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        reflector: string[]
        reflectorOptions: string[]
    }
}
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Reflector.d.ts

consParams.reflectorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct()


consParams.reflector = [
    'geometry',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Reflector.d.ts

objParams.reflectorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct()


objParams.reflector = [...objParams.mesh,
    'camera',
].distinct()

export type ReflectorProps = Node<Reflector, typeof Reflector, { geometry?: BufferGeometry; options?: ReflectorOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        reflector: Partial<{ geometry?: BufferGeometry; options?: ReflectorOptions; }>
    }
}

defaults.reflector = {}

