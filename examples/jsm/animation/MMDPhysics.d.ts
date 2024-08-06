import { Node } from '../../../three-types';
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js';
import { MMDPhysicsParameter, MMDPhysics } from 'three/examples/jsm/animation/MMDPhysics.js';
export * from 'three/examples/jsm/animation/MMDPhysics.js';
declare module '../../../lib/3/three' {
    interface Three {
        MMDPhysics: typeof MMDPhysics;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdPhysics: MMDPhysicsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdPhysics: string[];
        mmdPhysicsParameter: string[];
        resourceManager: string[];
        rigidBody: string[];
        constraint: string[];
        mmdPhysicsHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdPhysics: string[];
        mmdPhysicsParameter: string[];
        resourceManager: string[];
        rigidBody: string[];
        constraint: string[];
        mmdPhysicsHelper: string[];
    }
}
export type MMDPhysicsProps = Node<MMDPhysics, typeof MMDPhysics, {
    mesh: SkinnedMesh;
    rigidBodyParams: object[];
    constraintParams?: object[];
    params?: MMDPhysicsParameter;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdPhysics: Partial<{
            mesh: SkinnedMesh;
            rigidBodyParams: object[];
            constraintParams?: object[];
            params?: MMDPhysicsParameter;
        }>;
    }
}
//# sourceMappingURL=MMDPhysics.d.ts.map