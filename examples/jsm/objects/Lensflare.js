import { Lensflare } from 'three/examples/jsm/objects/Lensflare.js';
export * from 'three/examples/jsm/objects/Lensflare.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.Lensflare = Lensflare;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Lensflare.d.ts
consParams.lensflareElement = [
    'texture',
    'size',
    'distance',
    'color',
].distinct();
consParams.lensflare = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Lensflare.d.ts
objParams.lensflareElement = [
    'texture',
    'size',
    'distance',
    'color',
].distinct();
objParams.lensflare = [...objParams.mesh,
].distinct();
defaults.lensflare = {};
