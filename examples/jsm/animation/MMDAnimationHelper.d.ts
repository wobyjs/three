import { Node } from '../../../three-types';
import { MMDAnimationHelperParameter, MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js';
export * from 'three/examples/jsm/animation/MMDAnimationHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        MMDAnimationHelper: typeof MMDAnimationHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdAnimationHelper: MMDAnimationHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdAnimationHelper: string[];
        mmdAnimationHelperParameter: string[];
        mmdAnimationHelperAddParameter: string[];
        mmdAnimationHelperPoseParameter: string[];
        mmdAnimationHelperMixer: string[];
        audioManagerParameter: string[];
        audioManager: string[];
        grantSolver: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdAnimationHelper: string[];
        mmdAnimationHelperParameter: string[];
        mmdAnimationHelperAddParameter: string[];
        mmdAnimationHelperPoseParameter: string[];
        mmdAnimationHelperMixer: string[];
        audioManagerParameter: string[];
        audioManager: string[];
        grantSolver: string[];
    }
}
export type MMDAnimationHelperProps = Node<MMDAnimationHelper, typeof MMDAnimationHelper, MMDAnimationHelperParameter>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdAnimationHelper: MMDAnimationHelperParameter;
    }
}
//# sourceMappingURL=MMDAnimationHelper.d.ts.map