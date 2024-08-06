import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader.js';
export * from 'three/examples/jsm/loaders/LogLuvLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        LogLuvLoader: typeof LogLuvLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            logLuvLoader: LogLuvLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        logLuvLoader: string[];
        logLuv: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        logLuvLoader: string[];
        logLuv: string[];
    }
}
export type LogLuvLoaderProps = Node<LogLuvLoader, typeof LogLuvLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        logLuvLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=LogLuvLoader.d.ts.map