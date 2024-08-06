import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
export * from 'three/examples/jsm/lines/LineMaterial.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import '../../../src/materials/Material';
import '../../..//src/materials/ShaderMaterial';
Three.LineMaterial = LineMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineMaterial.d.ts
consParams.lineMaterialParameters = {
    ...consParams.materialParameters,
    ...['alphaToCoverage',
        'color',
        'dashed',
        'dashScale',
        'dashSize',
        'dashOffset',
        'gapSize',
        'linewidth',
        'resolution',
        'wireframe',
        'worldUnits',
    ].toObject()
};
consParams.lineMaterial = { ...consParams.lineMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineMaterial.d.ts    
objParams.lineMaterialParameters = [...objParams.materialParameters,
    'alphaToCoverage',
    'color',
    'dashed',
    'dashScale',
    'dashSize',
    'dashOffset',
    'gapSize',
    'linewidth',
    'resolution',
    'wireframe',
    'worldUnits',
].distinct();
objParams.lineMaterial = [...objParams.shaderMaterial,
    'color',
    'dashed',
    'dashScale',
    'dashSize',
    'dashOffset',
    'gapSize',
    'opacity',
    'linewidth',
    'resolution',
    'alphaToCoverage',
    'worldUnits',
].distinct();
defaults.lineMaterial = {};
