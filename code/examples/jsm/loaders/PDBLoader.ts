import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader.js'
export * from 'three/examples/jsm/loaders/PDBLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PDBLoader: typeof PDBLoader
    }
}

Three.PDBLoader = PDBLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pdbLoader: PDBLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pdbLoader: string[]
        pdb: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pdbLoader: string[]
        pdb: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PDBLoader.d.ts

consParams.pdb = [
    'geometryAtoms',
    'geometryBonds',
    'json',
].distinct()


consParams.pdbLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PDBLoader.d.ts

objParams.pdb = [
    'geometryAtoms',
    'geometryBonds',
    'json',
].distinct()


objParams.pdbLoader = [...objParams.loader,
].distinct()

export type PDBLoaderProps = Node<PDBLoader, typeof PDBLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pdbLoader: { manager?: LoadingManager; }
    }
}

defaults.pdbLoader = {}

