import { Node } from '../../../three-types'
import { WorkerPool } from 'three/examples/jsm/utils/WorkerPool.js'
export * from 'three/examples/jsm/utils/WorkerPool.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WorkerPool: typeof WorkerPool
    }
}

Three.WorkerPool = WorkerPool

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            workerPool: WorkerPoolProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        workerPool: typeof workerPool
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        workerPool: typeof _workerPool
    }
}


/**
 * @author Deepkolos / https://github.com/deepkolos
 */

const workerPool = ([
    'pool',
] as const).distinct()
consParams.workerPool = workerPool


/**
 * @author Deepkolos / https://github.com/deepkolos
 */

const _workerPool = ([
    'pool',
    'quene',
    'workers',
    'workersResolve',
    'workerStatus',
] as const).distinct()
objProps.workerPool = _workerPool

export type WorkerPoolProps = Node<WorkerPool, typeof WorkerPool, { pool?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        workerPool: Partial<{ pool?: number }>
    }
}

defaults.workerPool = {}

