import { RefractorOptions, Refractor } from 'three/examples/jsm/objects/Refractor.js'
export * from 'three/examples/jsm/objects/Refractor.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Refractor: typeof Refractor
    }
}

Three.Refractor = Refractor

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            refractor: RefractorProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        refractor: string[]
        refractorOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        refractor: string[]
        refractorOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Refractor.d.ts

consParams.refractorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct()


consParams.refractor = [
    'geometry',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Refractor.d.ts

objParams.refractorOptions = [
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
].distinct()


objParams.refractor = [...objParams.mesh,
    'camera',
].distinct()

export type RefractorProps = Node<Refractor, typeof Refractor, { geometry?: BufferGeometry; options?: RefractorOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        refractor: Partial<{ geometry?: BufferGeometry; options?: RefractorOptions; }>
    }
}

defaults.refractor = {}

