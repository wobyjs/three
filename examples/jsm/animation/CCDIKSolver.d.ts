import { Node } from '../../../three-types';
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js';
import { IK, CCDIKSolver } from 'three/examples/jsm/animation/CCDIKSolver.js';
export * from 'three/examples/jsm/animation/CCDIKSolver.js';
declare module '../../../lib/3/three' {
    interface Three {
        CCDIKSolver: typeof CCDIKSolver;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ccdikSolver: CCDIKSolverProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ccdikSolver: string[];
        animationClipCreator: string[];
        ccdikHelper: string[];
        iK: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ccdikSolver: string[];
        animationClipCreator: string[];
        ccdikHelper: string[];
        iK: string[];
    }
}
export type CCDIKSolverProps = Node<CCDIKSolver, typeof CCDIKSolver, {
    mesh: SkinnedMesh;
    iks?: IK[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cCDIKSolver: Partial<{
            mesh: SkinnedMesh;
            iks?: IK[];
        }>;
    }
}
//# sourceMappingURL=CCDIKSolver.d.ts.map