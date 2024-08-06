import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { ShaderNodeObject } from 'three/src/nodes/Nodes.js';
import EquirectUVNode from 'three/src/nodes/utils/EquirectUVNode.js';
export { EquirectUVNode };
import '../core/TempNode';
declare module '../../../lib/3/three' {
    interface Three {
        EquirectUVNode: typeof EquirectUVNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            equirectUVNode: EquirectUVNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        equirectUvNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        equirectUvNode: string[];
    }
}
export type EquirectUVNodeProps = Node<EquirectUVNode, typeof EquirectUVNode, {
    dirNode?: ShaderNodeObject<ENode>;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        equirectUVNode: Partial<{
            dirNode?: ShaderNodeObject<any>;
        }>;
    }
}
//# sourceMappingURL=EquirectUVNode.d.ts.map