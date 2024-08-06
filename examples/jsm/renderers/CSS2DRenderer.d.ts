import { CSS2DParameters, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
export * from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Node } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        CSS2DRenderer: typeof CSS2DRenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            css2DRenderer: CSS2DRendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        css2dRenderer: string[];
        css2dObject: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        css2dRenderer: string[];
        css2dObject: string[];
    }
}
export type CSS2DRendererProps = Node<CSS2DRenderer, typeof CSS2DRenderer, CSS2DParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        css2DRenderer: CSS2DParameters;
    }
}
//# sourceMappingURL=CSS2DRenderer.d.ts.map