import { Node } from '../../../../three-types';
import WGSLNodeParser from 'three/src/renderers/webgpu/nodes/WGSLNodeParser.js';
export { WGSLNodeParser };
declare module '../../../../lib/3/three' {
    interface Three {
        WGSLNodeParser: typeof WGSLNodeParser;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wgslNodeParser: WGSLNodeParserProps;
        }
    }
}
declare module '../../../../lib/3/consParams' {
    interface consParams {
        wgslNodeParser: string[];
    }
}
declare module '../../../../lib/3/objParams' {
    interface objParams {
        wgslNodeParser: string[];
    }
}
export type WGSLNodeParserProps = Node<WGSLNodeParser, typeof WGSLNodeParser, {
    source: string;
}>;
declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeParser: Partial<{
            source: string;
        }>;
    }
}
//# sourceMappingURL=WGSLNodeParser.d.ts.map