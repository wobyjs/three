import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader.js';
export * from 'three/examples/jsm/loaders/LogLuvLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.LogLuvLoader = LogLuvLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LogLuvLoader.d.ts
consParams.logLuv = [
    'width',
    'height',
    'data',
    'format',
    'type',
    'flipY',
].distinct();
consParams.logLuvLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LogLuvLoader.d.ts
objParams.logLuv = [
    'width',
    'height',
    'data',
    'format',
    'type',
    'flipY',
].distinct();
objParams.logLuvLoader = [...objParams.dataTextureLoader,
    'type',
].distinct();
defaults.logLuvLoader = {};
