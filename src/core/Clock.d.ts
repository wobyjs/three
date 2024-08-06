import { Node } from '../../three-types';
import { Clock } from 'three/src/core/Clock.js';
export { Clock } from 'three/src/core/Clock.js';
declare module '../../lib/3/three' {
    interface Three {
        Clock: typeof Clock;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            clock: ClockProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        clock: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        clock: string[];
    }
}
export type ClockProps = Node<Clock, typeof Clock, {
    autoStart?: boolean;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        clock: Partial<{
            autoStart?: boolean;
        }>;
    }
}
//# sourceMappingURL=Clock.d.ts.map