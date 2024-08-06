import { MD2Character } from 'three/examples/jsm/misc/MD2Character.js';
export * from 'three/examples/jsm/misc/MD2Character.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MD2Character = MD2Character;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2Character.d.ts
consParams.md2PartsConfig = [
    'baseUrl',
    'body',
    'skins',
    'weapons',
].distinct();
consParams.md2Character = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2Character.d.ts
objParams.md2PartsConfig = [
    'baseUrl',
    'body',
    'skins',
    'weapons',
].distinct();
objParams.md2Character = [
    'scale',
    'animationFPS',
    'root',
    'meshBody',
    'meshWeapon',
    'skinsBody',
    'skinsWeapon',
    'weapons',
    'activeAnimation',
    'mixer',
    'loadCounter',
].distinct();
defaults.md2Character = {};
