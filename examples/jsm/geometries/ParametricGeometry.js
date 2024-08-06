import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
export * from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ParametricGeometry = ParametricGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometry.d.ts
consParams.parametricGeometry = [
    'func',
    'slices',
    'stacks',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometries.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometry.d.ts    
objParams.parametricGeometry = [...objParams.bufferGeometry,
    /**
     * @default 'ParametricGeometry'
     */
    'type',
    'parameters',
].distinct();
defaults.parametricGeometry = {};
