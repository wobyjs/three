import { Node } from '../../../three-types';
import { Gyroscope } from 'three/examples/jsm/misc/Gyroscope.js';
export * from 'three/examples/jsm/misc/Gyroscope.js';
declare module '../../../lib/3/three' {
    interface Three {
        Gyroscope: typeof Gyroscope;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gyroscope: GyroscopeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gyroscope: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gyroscope: string[];
    }
}
export type GyroscopeProps = Node<Gyroscope, typeof Gyroscope, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gyroscope: {};
    }
}
//# sourceMappingURL=Gyroscope.d.ts.map