import { Node } from '../../../three-types'
import StorageTexture from 'three/src/renderers/common/StorageTexture.js'
export { StorageTexture }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        StorageTexture: typeof StorageTexture
    }
}

Three.StorageTexture = StorageTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            storageTexture: StorageTextureProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        storageTexture: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        storageTexture: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\StorageTexture.d.ts

consParams.storageTexture = [
    'width',
    'height',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\StorageTexture.d.ts    

objParams.storageTexture = [...objParams.texture,
].distinct()

export type StorageTextureProps = Node<StorageTexture, typeof StorageTexture, { width?: number; height?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        storageTexture: Partial<{ width?: number; height?: number; }>
    }
}

defaults.storageTexture = {}

