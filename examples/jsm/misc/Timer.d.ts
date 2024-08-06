import { Node } from '../../../three-types';
import { Timer } from 'three/examples/jsm/misc/Timer.js';
export * from 'three/examples/jsm/misc/Timer.js';
declare module '../../../lib/3/three' {
    interface Three {
        Timer: typeof Timer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            timer: TimerProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        timer: string[];
        fixedTimer: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        timer: string[];
        fixedTimer: string[];
    }
}
export type TimerProps = Node<Timer, typeof Timer, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        timer: {};
    }
}
declare module '../../../lib/3/defaults' {
    interface defaults {
        timer: {};
    }
}
//# sourceMappingURL=Timer.d.ts.map