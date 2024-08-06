import { Node, WrapAsString } from '../../../three-types';
import { CSMFrustum, CSMFrustumParameters } from 'three/examples/jsm/csm/CSMFrustum.js';
export default CSMFrustum;
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        CSMFrustum: typeof CSMFrustum;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csmFrustum: CSMFrustumProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        csmFrustum: string[];
        csmFrustumVerticies: string[];
        csmFrustumParameters: WrapAsString<CSMFrustumParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        csmFrustum: string[];
        csmFrustumVerticies: string[];
        csmFrustumParameters: string[];
    }
}
export type CSMFrustumProps = Node<CSMFrustum, typeof CSMFrustum, {
    data?: CSMFrustumParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cSMFrustum: Partial<{
            data?: CSMFrustumParameters;
        }>;
    }
}
//# sourceMappingURL=CSMFrustum.d.ts.map