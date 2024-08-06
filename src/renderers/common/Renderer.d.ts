import { Node, WrapAsString } from '../../../three-types';
import Backend from 'three/src/renderers/common/Backend.js';
import Renderer, { RendererParameters } from 'three/src/renderers/common/Renderer.js';
export { Renderer, RendererParameters };
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        Renderer: typeof Renderer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderer: RendererProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        renderer: string[];
        rendererParameters: WrapAsString<RendererParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        renderer: string[];
        rendererParameters: string[];
    }
}
export type RendererProps = Node<Renderer, typeof Renderer, {
    backend: Backend;
    parameters?: RendererParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        renderer: Partial<{
            backend: Backend;
            parameters?: RendererParameters;
        }>;
    }
}
//# sourceMappingURL=Renderer.d.ts.map