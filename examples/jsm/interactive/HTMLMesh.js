import { HTMLMesh } from 'three/examples/jsm/interactive/HTMLMesh.js';
export * from 'three/examples/jsm/interactive/HTMLMesh.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.HTMLMesh = HTMLMesh;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\HTMLMesh.d.ts
consParams.htmlMesh = [
    'dom',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\HTMLMesh.d.ts    
objParams.htmlMesh = [...objParams.mesh,
].distinct();
defaults.hTMLMesh = {};
