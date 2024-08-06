import { Object3DNode } from '../../../three-types'
import { ShapePath } from 'three/src/extras/core/ShapePath.js'
export { ShapePath } from 'three/src/extras/core/ShapePath.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ShapePath: typeof ShapePath
    }
}

Three.ShapePath = ShapePath

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shapePath: ShapePathProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shapePath: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shapePath: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\ShapePath.d.ts
/**
 * This class is used to convert a series of shapes to an array of {@link THREE.Path's
 * for example an svg shape to a path.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js}
 */

consParams.shapePath = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\ShapePath.d.ts
/**
 * This class is used to convert a series of shapes to an array of {@link THREE.Path | Path's
 * for example an SVG shape to a path.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js | Source}
 */

objParams.shapePath = [
    /**
     * Array of {@link THREE.Path | Path's}s.
     * @defaultValue `[].distinct()`
     */
    'subPaths',
    /**
     * The current {@link THREE.Path | Path} that is being generated.
     * @defaultValue `null`
     */
    /**
     * {@link THREE.Color | Color} of the shape, by default set to white _(0xffffff)_.
     * @defaultValue `new THREE.Color()`
     */
    'color',
].distinct()

export type ShapePathProps = Object3DNode<ShapePath, typeof ShapePath, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shapePath: {}
    }
}

defaults.shapePath = {}

