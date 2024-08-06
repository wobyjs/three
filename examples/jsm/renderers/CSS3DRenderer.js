import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
export * from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
Three.CSS3DRenderer = CSS3DRenderer;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\css3dRenderer.d.ts
consParams.css3dObject = [
    'element',
].distinct();
consParams.css3dSprite = [
    'element',
].distinct();
consParams.css3dParameters = [
    'element',
].toObject();
consParams.css3dRenderer = { ...consParams.css3dParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\CSS3dRenderer.d.ts    
objParams.css3dObject = [...objParams.object3d,
    'element',
].distinct();
objParams.css3dSprite = [...objParams.css3dObject,
].distinct();
objParams.css3dParameters = [
    'element',
].distinct();
objParams.css3dRenderer = [
    'domElement',
].distinct();
defaults.css3DRenderer = {};
