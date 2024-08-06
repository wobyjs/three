import { Volume } from 'three/examples/jsm/misc/Volume.js';
export * from 'three/examples/jsm/misc/Volume.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Volume = Volume;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Volume.d.ts
consParams.volume = [
    'xLength',
    'yLength',
    'zLength',
    'type',
    'arrayBuffer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Volume.d.ts
objParams.volume = [
    'xLength',
    'yLength',
    'zLength',
    'axisOrder',
    'data',
    'spacing',
    'offset',
    'matrix',
    'lowerThreshold',
    'upperThreshold',
    'sliceList',
].distinct();
defaults.volume = {};
