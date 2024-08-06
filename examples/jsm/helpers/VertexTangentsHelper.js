import { VertexTangentsHelper } from 'three/examples/jsm/helpers/VertexTangentsHelper.js';
export * from 'three/examples/jsm/helpers/VertexTangentsHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VertexTangentsHelper = VertexTangentsHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexTangentsHelper.d.ts
consParams.vertexTangentsHelper = [
    'object',
    'size',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexTangentsHelper.d.ts    
objParams.vertexTangentsHelper = [...objParams.lineSegments,
    'object',
    'size',
].distinct();
defaults.vertexTangentsHelper = { size: 1, color: 65535 };
