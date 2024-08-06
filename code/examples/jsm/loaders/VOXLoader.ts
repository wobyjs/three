import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader.js'
export * from 'three/examples/jsm/loaders/VOXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VOXLoader: typeof VOXLoader
    }
}

Three.VOXLoader = VOXLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            voxLoader: VOXLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        voxLoader: string[]
        chunk: string[]
        voxMesh: string[]
        voxData3dTexture: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        voxLoader: string[]
        chunk: string[]
        voxMesh: string[]
        voxData3dTexture: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VOXLoader.d.ts

consParams.chunk = [
    'palette',
    'size',
    'data',
].distinct()


consParams.voxLoader = [
    'manager',
].distinct()


consParams.voxMesh = [
    'chunk',
].distinct()


consParams.voxData3dTexture = [
    'chunk',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VOXLoader.d.ts

objParams.chunk = [
    'palette',
    'size',
    'data',
].distinct()


objParams.voxLoader = [...objParams.loader,
].distinct()



objParams.voxMesh = [...objParams.mesh,
].distinct()



objParams.voxData3dTexture = [...objParams.data3dTexture,
].distinct()

export type VOXLoaderProps = Node<VOXLoader, typeof VOXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        voxLoader: { manager?: LoadingManager; }
    }
}

defaults.voxLoader = {}

