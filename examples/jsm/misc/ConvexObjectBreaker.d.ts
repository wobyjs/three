import { Node } from '../../../three-types';
import { ConvexObjectBreaker } from 'three/examples/jsm/misc/ConvexObjectBreaker.js';
export * from 'three/examples/jsm/misc/ConvexObjectBreaker.js';
declare module '../../../lib/3/three' {
    interface Three {
        ConvexObjectBreaker: typeof ConvexObjectBreaker;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convexObjectBreaker: ConvexObjectBreakerProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        convexObjectBreaker: string[];
        cutByPlaneOutput: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        convexObjectBreaker: string[];
        cutByPlaneOutput: string[];
    }
}
export type ConvexObjectBreakerProps = Node<ConvexObjectBreaker, typeof ConvexObjectBreaker, {
    minSizeForBreak?: number;
    smallDelta?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        convexObjectBreaker: {
            minSizeForBreak?: number;
            smallDelta?: number;
        };
    }
}
//# sourceMappingURL=ConvexObjectBreaker.d.ts.map