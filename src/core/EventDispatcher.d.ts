import { Node } from '../../three-types';
import { EventDispatcher } from 'three/src/core/EventDispatcher.js';
export { EventDispatcher } from 'three/src/core/EventDispatcher.js';
declare module '../../lib/3/three' {
    interface Three {
        EventDispatcher: typeof EventDispatcher;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            eventDispatcher: EventDispatcherProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        eventDispatcher: string[];
        baseEvent: string[];
        event: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        eventDispatcher: string[];
        baseEvent: string[];
        event: string[];
    }
}
export type EventDispatcherProps = Node<EventDispatcher, typeof EventDispatcher, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        eventDispatcher: Partial<{}>;
    }
}
//# sourceMappingURL=EventDispatcher.d.ts.map