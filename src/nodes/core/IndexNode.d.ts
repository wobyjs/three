import { Node } from '../../../three-types';
import IndexNode, { IndexNodeScope } from 'three/src/nodes/core/IndexNode.js';
export { IndexNode };
declare module '../../../lib/3/three' {
    interface Three {
        IndexNode: typeof IndexNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            indexNode: IndexNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        indexNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        indexNode: string[];
    }
}
export type IndexNodeProps = Node<IndexNode, typeof IndexNode, {
    scope: IndexNodeScope;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        indexNode: Partial<{
            scope: IndexNodeScope;
        }>;
    }
}
//# sourceMappingURL=IndexNode.d.ts.map