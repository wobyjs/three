import { Box2 } from 'three/src/math/Box2.js';
export { Box2 } from 'three/src/math/Box2.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Box2 = Box2;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box2.d.ts
// Math //////////////////////////////////////////////////////////////////////////////////
consParams.box2 = [
    'min',
    'max',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box2.d.ts
// Math //////////////////////////////////////////////////////////////////////////////////
objParams.box2 = [
    /**
     * @default new THREE.Vector2( + Infinity, + Infinity )
     */
    'min',
    /**
     * @default new THREE.Vector2( - Infinity, - Infinity )
     */
    'max',
].distinct();
defaults.box2 = {};
