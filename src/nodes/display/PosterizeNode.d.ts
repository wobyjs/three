import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import PosterizeNode from 'three/src/nodes/display/PosterizeNode.js';
export { PosterizeNode };
declare module '../../../lib/3/three' {
    interface Three {
        PosterizeNode: typeof PosterizeNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            posterizeNode: PosterizeNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        posterizeNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        posterizeNode: string[];
    }
}
export type PosterizeNodeProps = Node<PosterizeNode, typeof PosterizeNode, {
    sourceNode: ENode;
    stepsNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        posterizeNode: Partial<{
            sourceNode: ENode;
            stepsNode: ENode;
        }>;
    }
}
//# sourceMappingURL=PosterizeNode.d.ts.map