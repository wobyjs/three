import { GPUStatsPanel } from 'three/examples/jsm/utils/GPUStatsPanel.js';
export * from 'three/examples/jsm/utils/GPUStatsPanel.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.GPUStatsPanel = GPUStatsPanel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts
consParams.gpuStatsPanel = [
    'context',
    'name',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts
objParams.gpuStatsPanel = [
    'context',
    'extension',
    'maxTime',
    'activeQueries',
    'startQuery',
    'endQuery',
].distinct();
defaults.gpuStatsPanel = {};
