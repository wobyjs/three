import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import IrradianceNode from 'three/src/nodes/lighting/IrradianceNode.js';
export { IrradianceNode };
declare module '../../../lib/3/three' {
    interface Three {
        IrradianceNode: typeof IrradianceNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            irradianceNode: IrradianceNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        irradianceNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        irradianceNode: string[];
    }
}
export type IrradianceNodeProps = Node<IrradianceNode, typeof IrradianceNode, {
    node?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        irradianceNode: {
            node?: ENode | null;
        };
    }
}
//# sourceMappingURL=IrradianceNode.d.ts.map