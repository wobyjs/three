import { Node } from '../../../three-types';
import { Camera } from 'three/src/cameras/Camera.js';
import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper.js';
export * from 'three/examples/jsm/helpers/ViewHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        ViewHelper: typeof ViewHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewHelper: ViewHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        viewHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        viewHelper: string[];
    }
}
export type ViewHelperProps = Node<ViewHelper, typeof ViewHelper, {
    camera: Camera;
    domElement: HTMLElement;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        viewHelper: Partial<{
            camera: Camera;
            domElement: HTMLElement;
        }>;
    }
}
//# sourceMappingURL=ViewHelper.d.ts.map