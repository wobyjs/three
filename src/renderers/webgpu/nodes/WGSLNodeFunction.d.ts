import { Node } from '../../../../three-types';
import WGSLNodeFunction from 'three/src/renderers/webgpu/nodes/WGSLNodeFunction.js';
export { WGSLNodeFunction };
declare module '../../../../lib/3/three' {
    interface Three {
        WGSLNodeFunction: typeof WGSLNodeFunction;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wgslNodeFunction: WGSLNodeFunctionProps;
        }
    }
}
declare module '../../../../lib/3/consParams' {
    interface consParams {
        wgslNodeFunction: string[];
    }
}
declare module '../../../../lib/3/objParams' {
    interface objParams {
        wgslNodeFunction: string[];
    }
}
export type WGSLNodeFunctionProps = Node<WGSLNodeFunction, typeof WGSLNodeFunction, {
    source: string;
}>;
declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeFunction: Partial<{
            source: string;
        }>;
    }
}
//# sourceMappingURL=WGSLNodeFunction.d.ts.map