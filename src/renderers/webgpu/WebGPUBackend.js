import WebGPUBackend from 'three/src/renderers/webgpu/WebGPUBackend.js';
export { WebGPUBackend };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import '../../examples/jsm/renderers/common/Backend';
Three.WebGPUBackend = WebGPUBackend;
consParams.backendParameters = ['canvas'].toObject();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuBackend.d.ts
consParams.webGpuBackendParameters = {
    ...consParams.backendParameters,
    ...['alpha',
        'antialias',
        'sampleCount',
        'trackTimestamp',
    ].toObject()
};
consParams.webGpuBackend = { ...consParams.webGpuBackendParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuBackend.d.ts    
objParams.webGpuBackendParameters = [...objParams.backendParameters,
    'alpha',
    'antialias',
    'sampleCount',
    'trackTimestamp',
].distinct();
objParams.webGpuBackend = [...objParams.backend,
].distinct();
defaults.webGpuBackend = {};
