import { WorkerPool } from 'three/examples/jsm/utils/WorkerPool.js';
export * from 'three/examples/jsm/utils/WorkerPool.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WorkerPool = WorkerPool;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\WorkerPool.d.ts
/**
 * @author Deepkolos / https://github.com/deepkolos
 */
consParams.workerPool = [
    'pool',
].distinct();
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
].distinct();
defaults.workerPool = {};
