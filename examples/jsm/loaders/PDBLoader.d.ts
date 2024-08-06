import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader.js';
export * from 'three/examples/jsm/loaders/PDBLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        PDBLoader: typeof PDBLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pdbLoader: PDBLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pdbLoader: string[];
        pdb: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pdbLoader: string[];
        pdb: string[];
    }
}
export type PDBLoaderProps = Node<PDBLoader, typeof PDBLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pdbLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=PDBLoader.d.ts.map