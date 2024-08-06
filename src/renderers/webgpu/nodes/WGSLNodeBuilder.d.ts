import { Node } from '../../../../three-types';
import WGSLNodeBuilder from 'three/src/renderers/webgpu/nodes/WGSLNodeBuilder.js';
export { WGSLNodeBuilder };
declare module '../../../../lib/3/three' {
    interface Three {
        WGSLNodeBuilder: typeof WGSLNodeBuilder;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wgslNodeBuilder: WGSLNodeBuilderProps;
        }
    }
}
declare module '../../../../lib/3/consParams' {
    interface consParams {
        wgslNodeBuilder: string[];
    }
}
declare module '../../../../lib/3/objParams' {
    interface objParams {
        wgslNodeBuilder: string[];
    }
}
export type WGSLNodeBuilderProps = Node<WGSLNodeBuilder, typeof WGSLNodeBuilder, {}>;
declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeBuilder: Partial<{}>;
    }
}
//# sourceMappingURL=WGSLNodeBuilder.d.ts.map