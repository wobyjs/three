import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer.js';
export * from 'three/examples/jsm/renderers/SVGRenderer.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.SVGRenderer = SVGRenderer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\svgRenderer.d.ts
consParams.svgObject = [
    'node',
].distinct();
consParams.svgRenderer = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\SVGRenderer.d.ts    
objParams.svgObject = [...objParams.object3d,
    'node',
].distinct();
objParams.svgRenderer = [
    'domElement',
    'autoClear',
    'sortObjects',
    'sortElements',
    'overdraw',
    'outputColorSpace',
    'info',
].distinct();
defaults.svgRenderer = {};
