import { GridHelper } from 'three/src/helpers/GridHelper.js';
export { GridHelper } from 'three/src/helpers/GridHelper.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.GridHelper = GridHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\GridHelper.d.ts
/**
 * The {@link GridHelper} is an object to define grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const size = 10,
 * const divisions = 10,
 * const {@link GridHelper} = new THREE.GridHelper(size, divisions,
 * scene.add(gridHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/GridHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/GridHelper.js}
 */
consParams.gridHelper = [
    /**
     * Creates a new {@link GridHelper} of size 'size' and divided into 'divisions' segments per side
     * @remarks
     * Colors are optional.
     * @param size The size of the grid. Default `10`
     * @param divisions The number of divisions across the grid. Default `10`
     * @param colorCenterLine The color of the centerline. This can be a {@link THREE.Color a hexadecimal value and an css-Color name. Default `0x444444`
     * @param colorGrid The color of the lines of the grid. This can be a {@link THREE.Color a hexadecimal value and an css-Color name. Default `0x888888`
     */
    'size',
    'divisions',
    'colorCenterLine',
    'colorGrid',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\GridHelper.d.ts
/**
 * The {@link GridHelper} is an object to define grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const size = 10
 * const divisions = 10
 * const {@link GridHelper} = new THREE.GridHelper(size, divisions)
 * scene.add(gridHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/GridHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/GridHelper.js | Source}
 */
objParams.gridHelper = [...objParams.lineSegments,
].distinct();
defaults.gridHelper = { size: 10, divisions: 10, colorCenterLine: 4473924, colorGrid: 8947848, };
