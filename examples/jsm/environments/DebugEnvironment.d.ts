import { Node } from '../../../three-types';
import { DebugEnvironment } from 'three/examples/jsm/environments/DebugEnvironment.js';
export * from 'three/examples/jsm/environments/DebugEnvironment.js';
declare module '../../../lib/3/three' {
    interface Three {
        DebugEnvironment: typeof DebugEnvironment;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            debugEnvironment: DebugEnvironmentProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        debugEnvironment: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        debugEnvironment: string[];
    }
}
export type DebugEnvironmentProps = Node<DebugEnvironment, typeof DebugEnvironment, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        debugEnvironment: {};
    }
}
//# sourceMappingURL=DebugEnvironment.d.ts.map