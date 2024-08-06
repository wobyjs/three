import { Node } from '../../../three-types';
import TimerNode, { TimerNodeScope } from 'three/src/nodes/utils/TimerNode.js';
export { TimerNode };
import '../accessors/UniformsNode';
declare module '../../../lib/3/three' {
    interface Three {
        TimerNode: typeof TimerNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            timerNode: TimerNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        timerNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        timerNode: string[];
    }
}
export type TimerNodeProps = Node<TimerNode, typeof TimerNode, {
    scope?: TimerNodeScope;
    scale?: number;
    value?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        timerNode: Partial<{
            scope?: TimerNodeScope;
            scale?: number;
            value?: number;
        }>;
    }
}
//# sourceMappingURL=TimerNode.d.ts.map