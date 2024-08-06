import RendererReferenceNode from 'three/src/nodes/accessors/RendererReferenceNode.js';
export { RendererReferenceNode };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.RendererReferenceNode = RendererReferenceNode;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\RendererReferenceNode.d.ts
consParams.rendererReferenceNode = [
    'property',
    'inputType',
    'renderer',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\RendererReferenceNode.d.ts    
objParams.rendererReferenceNode = [...objParams.referenceNode,
    'renderer',
].distinct();
defaults.rendererReferenceNode = {};
