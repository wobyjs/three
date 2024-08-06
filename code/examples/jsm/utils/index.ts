import { Node } from '../../../three-types'
import { WorkerPool } from 'three/examples/jsm/utils/WorkerPool.js'
export * from 'three/examples/jsm/utils/WorkerPool.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        workerPool: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        workerPool: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\WorkerPool.d.ts
/**
 * @author Deepkolos / https://github.com/deepkolos
 */

consParams.workerPool = [
    'pool',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\WorkerPool.d.ts
/**
 * @author Deepkolos / https://github.com/deepkolos
 */

objParams.workerPool = [
    'pool',
    'quene',
    'workers',
    'workersResolve',
    'workerStatus',
].distinct()

export type WorkerPoolProps = Node<WorkerPool, typeof WorkerPool, { pool?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        workerPool: Partial<{ pool?: number }>
    }
}

defaults.workerPool = {}

