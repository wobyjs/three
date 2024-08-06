import { Node } from '../../../three-types';
import PropertyNode from 'three/src/nodes/core/PropertyNode.js';
export { PropertyNode };
declare module '../../../lib/3/three' {
    interface Three {
        PropertyNode: typeof PropertyNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            propertyNode: PropertyNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        propertyNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        propertyNode: string[];
    }
}
export type PropertyNodeProps = Node<PropertyNode, typeof PropertyNode, {
    nodeType?: string | null;
    name?: string | null;
    varying?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        propertyNode: Partial<{
            nodeType?: string | null;
            name?: string | null;
            varying?: boolean;
        }>;
    }
}
//# sourceMappingURL=PropertyNode.d.ts.map