import { Node } from '../../../three-types'
import { Lensflare } from 'three/examples/jsm/objects/Lensflare.js'
export * from 'three/examples/jsm/objects/Lensflare.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Lensflare: typeof Lensflare
    }
}

Three.Lensflare = Lensflare

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lensflare: LensflareProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lensflare: string[]
        lensflareElement: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lensflare: string[]
        lensflareElement: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Lensflare.d.ts

consParams.lensflareElement = [
    'texture',
    'size',
    'distance',
    'color',
].distinct()


consParams.lensflare = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Lensflare.d.ts

objParams.lensflareElement = [
    'texture',
    'size',
    'distance',
    'color',
].distinct()


objParams.lensflare = [...objParams.mesh,
].distinct()

export type LensflareProps = Node<Lensflare, typeof Lensflare, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lensflare: Partial<{}>
    }
}

defaults.lensflare = {}

