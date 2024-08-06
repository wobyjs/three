import { CSM } from 'three/examples/jsm/csm/CSM.js';
import { Node } from '../../../three-types';
import { CSMHelper } from 'three/examples/jsm/csm/CSMHelper.js';
export * from 'three/examples/jsm/csm/CSMHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        CSMHelper: typeof CSMHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csmHelper: CSMHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        csmHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        csmHelper: string[];
    }
}
export type CSMHelperProps<TCSM extends CSM = CSM> = Node<CSMHelper<TCSM>, typeof CSMHelper<TCSM>, {
    csm: TCSM;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        csmHelper: Partial<{
            csm: CSM;
        }>;
    }
}
//# sourceMappingURL=CSMHelper.d.ts.map