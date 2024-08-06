import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
export * from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.VertexNormalsHelper = VertexNormalsHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexNormalsHelper.d.ts
consParams.vertexNormalsHelper = [
    'object',
    'size',
    'color',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexNormalsHelper.d.ts    
objParams.vertexNormalsHelper = [...objParams.lineSegments,
    'object',
    'size',
].distinct();
defaults.vertexNormalsHelper = { size: 1, color: 16711680 };
