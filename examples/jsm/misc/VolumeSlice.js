import { VolumeSlice } from 'three/examples/jsm/misc/VolumeSlice.js';
export * from 'three/examples/jsm/misc/VolumeSlice.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VolumeSlice = VolumeSlice;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\VolumeSliceSlice.d.ts
consParams.volumeSlice = [
    'volumeSlice',
    'index',
    'axis',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\VolumeSliceSlice.d.ts
objParams.volumeSlice = [
    'index',
    'axis',
    'canvas',
    'canvasBuffer',
    'ctx',
    'ctxBuffer',
    'mesh',
    'geometryNeedsUpdate',
    'sliceAccess',
    'jLength',
    'iLength',
    'matrix',
].distinct();
defaults.volumeSlice = {};
