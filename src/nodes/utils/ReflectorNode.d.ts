import { Node, WrapAsString } from '../../../three-types';
import ReflectorNode, { ReflectorNodeParameters } from 'three/src/nodes/utils/ReflectorNode.js';
export { ReflectorNode };
import '../../lib/three/extensions';
import '../accessors/TextureNode';
declare module '../../../lib/3/three' {
    interface Three {
        ReflectorNode: typeof ReflectorNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            reflectorNode: ReflectorNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        reflectorNode: WrapAsString<ReflectorNodeParameters>;
        reflectorNodeParameters: WrapAsString<ReflectorNodeParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        reflectorNode: string[];
        reflectorNodeParameters: string[];
    }
}
export type ReflectorNodeProps = Node<ReflectorNode, typeof ReflectorNode, ReflectorNodeParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        reflectorNode: ReflectorNodeParameters;
    }
}
//# sourceMappingURL=ReflectorNode.d.ts.map