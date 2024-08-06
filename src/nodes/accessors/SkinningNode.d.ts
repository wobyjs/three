import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js';
import { Object3DNode } from '../../../three-types';
import SkinningNode from 'three/src/nodes/accessors/SkinningNode.js';
export { SkinningNode };
declare module '../../../lib/3/three' {
    interface Three {
        SkinningNode: typeof SkinningNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skinningNode: SkinningNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        skinningNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        skinningNode: string[];
    }
}
export type SkinningNodeProps = Object3DNode<SkinningNode, typeof SkinningNode, {
    skinnedMesh: SkinnedMesh;
    useReference?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        skinningNode: {
            skinnedMesh?: SkinnedMesh;
            useReference?: boolean;
        };
    }
}
//# sourceMappingURL=SkinningNode.d.ts.map