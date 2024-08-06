import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js';
export * from 'three/examples/jsm/capabilities/WebGPU.js';
import { Node } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        WebGPU: typeof WebGPU;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webGpu: WebGPUProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webGpu: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webGpu: string[];
    }
}
export type WebGPUProps = Node<WebGPU, typeof WebGPU, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGPU: {};
    }
}
//# sourceMappingURL=WebGPU.d.ts.map