import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
export * from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.GPUComputationRenderer = GPUComputationRenderer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\GpuComputationRenderer.d.ts
// consParams.variable = [
//     'name',
//     'initialValueTexture',
//     'material',
//     'dependencies',
//     'renderTargets',
//     'wrapS',
//     'wrapT',
//     'minFilter',
//     'magFilter',
// ].distinct()
consParams.gpuComputationRenderer = [
    'sizeX',
    'sizeY',
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\GpuComputationRenderer.d.ts
objParams.gpuComputationRenderer = [].distinct();
defaults.gpuComputationRenderer = {};
