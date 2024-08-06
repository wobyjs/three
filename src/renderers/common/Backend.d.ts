import { Node, WrapAsString } from '../../../three-types';
import Backend, { BackendParameters } from 'three/src/renderers/common/Backend.js';
export { Backend };
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        Backend: typeof Backend;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            backend: BackendProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        backend: WrapAsString<BackendParameters>;
        backendParameters: WrapAsString<BackendParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        backend: string[];
        backendParameters: string[];
    }
}
export type BackendProps = Node<Backend, typeof Backend, BackendParameters>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        backend: BackendParameters;
    }
}
//# sourceMappingURL=Backend.d.ts.map