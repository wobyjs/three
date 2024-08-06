import { GPUStatsPanel } from 'three/examples/jsm/utils/GPUStatsPanel.js';
export * from 'three/examples/jsm/utils/GPUStatsPanel.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.GPUStatsPanel = GPUStatsPanel;
consParams.gpuStatsPanel = [
    'context',
    'name',
];
objParams.gpuStatsPanel = [
    'context',
    'extension',
    'maxTime',
    'activeQueries',
    'startQuery',
    'endQuery',
];
defaults.gPUStatsPanel = {};
// import { } from 'three/examples/jsm/libs/fflate.module'
// import { } from 'three/examples/jsm/libs/meshopt_decoder.module'
// import { } from 'three/examples/jsm/libs/stats.module'
// import { } from 'three/examples/jsm/libs/tween.module'
