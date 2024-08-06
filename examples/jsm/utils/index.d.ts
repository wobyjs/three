import { Node } from '../../../three-types';
import { WorkerPool } from 'three/examples/jsm/utils/WorkerPool.js';
export * from 'three/examples/jsm/utils/WorkerPool.js';
declare module '../../../lib/3/three' {
    interface Three {
        WorkerPool: typeof WorkerPool;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            workerPool: WorkerPoolProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        workerPool: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        workerPool: string[];
    }
}
export type WorkerPoolProps = Node<WorkerPool, typeof WorkerPool, {
    pool?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        workerPool: Partial<{
            pool?: number;
        }>;
    }
}
//# sourceMappingURL=index.d.ts.map