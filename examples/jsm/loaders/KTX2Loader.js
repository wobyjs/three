import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
export * from 'three/examples/jsm/loaders/KTX2Loader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.KTX2Loader = KTX2Loader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTX2Loader.d.ts
consParams.ktx2LoaderWorkerConfig = [
    'astcSupported',
    'etc1Supported',
    'etc2Supported',
    'dxtSupported',
    'bptcSupported',
    'pvrtcSupported',
].distinct();
consParams.ktx2Loader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTX2Loader.d.ts
objParams.ktx2LoaderWorkerConfig = [
    'astcSupported',
    'etc1Supported',
    'etc2Supported',
    'dxtSupported',
    'bptcSupported',
    'pvrtcSupported',
].distinct();
objParams.ktx2Loader = [...objParams.loader,
    'transcoderPath',
    'transcoderBinary',
    'transcoderPending',
    'workerPool',
    'workerSourceURL',
    'workerConfig',
].distinct();
defaults.ktx2Loader = {};
