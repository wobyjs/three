import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
export * from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.CSS2DRenderer = CSS2DRenderer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\css2DRenderer.d.ts
consParams.css2dObject = [
    'element',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\CSS2dRenderer.d.ts    
objParams.css2dObject = [...objParams.object3d,
    'element',
    'center',
].distinct();
objParams.css2dRenderer = [
    'domElement',
].distinct();
defaults.css2DRenderer = {};
