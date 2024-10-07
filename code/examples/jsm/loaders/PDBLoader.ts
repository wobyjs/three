import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader.js'
export * from 'three/examples/jsm/loaders/PDBLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        pdbLoader: typeof pdbLoader
        pdb: typeof pdb
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pdbLoader: typeof _pdbLoader
        pdb: typeof _pdb
    }
}



const pdb = ([
    'geometryAtoms',
    'geometryBonds',
    'json',
] as const).distinct()
consParams.pdb = pdb


const pdbLoader = ([
    'manager',
] as const).distinct()
consParams.pdbLoader = pdbLoader



const _pdb = ([
    'geometryAtoms',
    'geometryBonds',
    'json',
] as const).distinct()
objProps.pdb = _pdb


const _pdbLoader = ([...objProps.loader,
] as const).distinct()
objProps.pdbLoader = _pdbLoader

export type PDBLoaderProps = Node<PDBLoader, typeof PDBLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pdbLoader: { manager?: LoadingManager; }
    }
}

defaults.pdbLoader = {}

