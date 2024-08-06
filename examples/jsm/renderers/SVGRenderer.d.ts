import { Node } from '../../../three-types';
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer.js';
export * from 'three/examples/jsm/renderers/SVGRenderer.js';
declare module '../../../lib/3/three' {
    interface Three {
        SVGRenderer: typeof SVGRenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            svgRenderer: SVGRendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        svgRenderer: string[];
        svgObject: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        svgRenderer: string[];
        svgObject: string[];
    }
}
export type SVGRendererProps = Node<SVGRenderer, typeof SVGRenderer, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        svgRenderer: {};
    }
}
//# sourceMappingURL=SVGRenderer.d.ts.map