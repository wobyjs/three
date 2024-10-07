import { Node } from '../../../three-types'
import StorageTexture from 'three/src/renderers/common/StorageTexture.js'
export { StorageTexture }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        storageTexture: typeof storageTexture
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        storageTexture: typeof _storageTexture
    }
}



const storageTexture = ([
    'width',
    'height',
] as const).distinct()
consParams.storageTexture = storageTexture



const _storageTexture = ([...objProps.texture,
] as const).distinct()
objProps.storageTexture = _storageTexture

export type StorageTextureProps = Node<StorageTexture, typeof StorageTexture, { width?: number; height?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        storageTexture: Partial<{ width?: number; height?: number; }>
    }
}

defaults.storageTexture = {}

