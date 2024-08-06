import { Object3DNode } from '../../../three-types';
import PointUVNode from 'three/src/nodes/accessors/PointUVNode.js';
export { PointUVNode };
declare module '../../../lib/3/three' {
    interface Three {
        PointUVNode: typeof PointUVNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointUvNode: PointUVNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pointUvNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pointUvNode: string[];
    }
}
export type PointUVNodeProps = Object3DNode<PointUVNode, typeof PointUVNode, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pointUvNode: {};
    }
}
//# sourceMappingURL=PointUVNode.d.ts.map