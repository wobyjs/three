import WGSLNodeBuilder from 'three/src/renderers/webgpu/nodes/WGSLNodeBuilder.js';
export { WGSLNodeBuilder };
import { Three } from '../../../../lib/3/three';
import { consParams } from '../../../../lib/3/consParams';
import { objParams } from '../../../../lib/3/objParams';
import { defaults } from '../../../../lib/3/defaults';
Three.WGSLNodeBuilder = WGSLNodeBuilder;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts
consParams.wgslNodeBuilder = [
    'object',
    'renderer',
    'shader',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts    
objParams.wgslNodeBuilder = [...objParams.nodeBuilder,
].distinct();
defaults.wgslNodeBuilder = {};
