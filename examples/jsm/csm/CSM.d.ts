import { CSMParameters, CSM } from 'three/examples/jsm/csm/CSM.js';
export * from 'three/examples/jsm/csm/CSM.js';
import { Node, WrapAsString } from '../../../three-types';
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        CSM: typeof CSM;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csm: CSMProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        csm: string[];
        csmParameters: WrapAsString<CSMParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        csm: string[];
        csmParameters: string[];
    }
}
export type CSMProps = Node<CSM, typeof CSM, {
    data: CSMParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cSM: Partial<{
            data: CSMParameters;
        }>;
    }
}
//# sourceMappingURL=CSM.d.ts.map