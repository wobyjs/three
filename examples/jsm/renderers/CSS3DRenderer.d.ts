import { CSS3DParameters, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
export * from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { Node, WrapAsString } from '../../../three-types';
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        CSS3DRenderer: typeof CSS3DRenderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            css3DRenderer: CSS3DRendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        css3dRenderer: WrapAsString<CSS3DParameters>;
        css3dObject: string[];
        css3dSprite: string[];
        css3dParameters: WrapAsString<CSS3DParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        css3dRenderer: string[];
        css3dObject: string[];
        css3dSprite: string[];
        css3dParameters: string[];
    }
}
export type CSS3DRendererProps = Node<CSS3DRenderer, typeof CSS3DRenderer, CSS3DParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        css3DRenderer: CSS3DParameters;
    }
}
//# sourceMappingURL=CSS3DRenderer.d.ts.map