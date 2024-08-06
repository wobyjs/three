import { PointLightShadow } from 'three/src/lights/PointLightShadow.js';
export { PointLightShadow } from 'three/src/lights/PointLightShadow.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './LightShadow';
Three.PointLightShadow = PointLightShadow;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLightShadow.d.ts
/**
 * Shadow for {@link THREE.PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js}
 */
consParams.pointLightShadow = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLightShadow.d.ts
/**
 * Shadow for {@link THREE.PointLight | PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
 */
objParams.pointLightShadow = [...objParams.lightShadow,
].distinct();
defaults.pointLightShadow = {};
