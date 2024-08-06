import { Node } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { SelectionHelper } from 'three/examples/jsm/interactive/SelectionHelper.js';
export * from 'three/examples/jsm/interactive/SelectionHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        SelectionHelper: typeof SelectionHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            selectionHelper: SelectionHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        selectionHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        selectionHelper: string[];
    }
}
export type SelectionHelperProps = Node<SelectionHelper, typeof SelectionHelper, {
    renderer: WebGLRenderer;
    cssClassName: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        selectionHelper: Partial<{
            renderer: WebGLRenderer;
            cssClassName: string;
        }>;
    }
}
//# sourceMappingURL=SelectionHelper.d.ts.map