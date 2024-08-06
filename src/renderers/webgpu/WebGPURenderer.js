import WebGPURenderer from 'three/src/renderers/webgpu/WebGPURenderer.js';
export { WebGPURenderer };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import '../../code/examples/jsm/renderers/common/Renderer';
import './WebGPUBackend';
Three.WebGPURenderer = WebGPURenderer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuRenderer.d.ts
consParams.webGpuRendererParameters = {
    ...consParams.rendererParameters, ...consParams.webGpuBackendParameters,
    ...['forceWebGl',].toObject()
};
consParams.webGpuRenderer = { ...consParams.webGpuRendererParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuRenderer.d.ts    
objParams.webGpuRendererParameters = [...objParams.rendererParameters, ...objParams.webGpuBackendParameters,
    'forceWebGl',
].distinct();
objParams.webGpuRenderer = [...objParams.renderer,
].distinct();
defaults.webGpuRenderer = {};
