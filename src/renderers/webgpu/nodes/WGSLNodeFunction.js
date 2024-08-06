import WGSLNodeFunction from 'three/src/renderers/webgpu/nodes/WGSLNodeFunction.js';
export { WGSLNodeFunction };
import { Three } from '../../../../lib/3/three';
import { consParams } from '../../../../lib/3/consParams';
import { objParams } from '../../../../lib/3/objParams';
import { defaults } from '../../../../lib/3/defaults';
Three.WGSLNodeFunction = WGSLNodeFunction;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts
consParams.wgslNodeFunction = [
    'source',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts    
objParams.wgslNodeFunction = [...objParams.nodeFunction,
].distinct();
defaults.wgslNodeFunction = {};
