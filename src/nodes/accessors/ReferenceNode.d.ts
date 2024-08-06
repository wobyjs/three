import { Object3DNode } from '../../../three-types';
import ReferenceNode from 'three/src/nodes/accessors/ReferenceNode.js';
export { ReferenceNode };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            referenceNode: ReferenceNodeProps<unknown>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        referenceNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        referenceNode: string[];
    }
}
export type ReferenceNodeProps<T> = Object3DNode<ReferenceNode<T>, typeof ReferenceNode, {
    property: string;
    uniformType: string;
    object?: T | null;
    count?: number | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        referenceNode: Partial<{
            property: string;
            uniformType: string;
            object?: any | null;
            count?: number | null;
        }>;
    }
}
//# sourceMappingURL=ReferenceNode.d.ts.map