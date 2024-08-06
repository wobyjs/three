import WebGLBackend from 'three/src/renderers/webgl-fallback/WebGLBackend.js';
export { WebGLBackend };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import '../common/Backend';
Three.WebGLBackend = WebGLBackend;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\WebGlBackend.d.ts
consParams.webglBackendParameters = {
    ...consParams.backendParameters,
    ...['trackTimestamp',
    ].toObject()
};
consParams.webglBackend = { ...consParams.backendParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\WebGlBackend.d.ts    
objParams.webglBackendParameters = [...objParams.backendParameters,
    'trackTimestamp',
].distinct();
objParams.webglBackend = [...objParams.backend,
].distinct();
defaults.webglBackend = {};
