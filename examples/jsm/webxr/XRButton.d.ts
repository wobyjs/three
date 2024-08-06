import { Node } from '../../../three-types';
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js';
export * from 'three/examples/jsm/webxr/XRButton.js';
declare module '../../../lib/3/three' {
    interface Three {
        XRButton: typeof XRButton;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrButton: XRButtonProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        xrButton: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        xrButton: string[];
    }
}
export type XRButtonProps = Node<XRButton, typeof XRButton, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        xrButton: {};
    }
}
//# sourceMappingURL=XRButton.d.ts.map