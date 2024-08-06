import WGSLNodeParser from 'three/src/renderers/webgpu/nodes/WGSLNodeParser.js';
export { WGSLNodeParser };
import { Three } from '../../../../lib/3/three';
import { consParams } from '../../../../lib/3/consParams';
import { objParams } from '../../../../lib/3/objParams';
import { defaults } from '../../../../lib/3/defaults';
Three.WGSLNodeParser = WGSLNodeParser;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts
consParams.wgslNodeParser = [
    'source',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts    
objParams.wgslNodeParser = [...objParams.nodeBuilder,
].distinct();
defaults.wgslNodeParser = {};
