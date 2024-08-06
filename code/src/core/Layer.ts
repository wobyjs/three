import { Node } from '../../three-types'
import { TypedArray } from 'three/src/core/BufferAttribute.js'
import { Layers } from 'three/src/core/Layers.js'
export { Layers } from 'three/src/core/Layers.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Layers: typeof Layers
    }
}

Three.Layers = Layers

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            layers: LayersProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        layers: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        layers: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Layers.d.ts
/**
 * A {@link THREE.Layers} object assigns an {@link THREE.Object3d} to 1 or more of 32 layers numbered `0` to `31` - internally the
 * layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) mask and
 * by default all Object3ds are a member of layer `0`.
 * @remarks
 * This can be used to control visibility - an object must share a layer with a {@link Camera} to be visible when that camera's view is rendered.
 * @remarks
 * All classes that inherit from {@link THREE.Object3d} have an {@link THREE.Object3d.layers.layers} property which is an instance of this.class.
 * @see Example: {@link https://threejs.org/examples/#webgl_layers / layers}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_layers / vr / layers}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Layers Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Layers.js}
 */

consParams.layers = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Layers.d.ts
/**
 * A {@link THREE.Layers | Layers} object assigns an {@link THREE.Object3d | Object3d} to 1 or more of 32 layers numbered `0` to `31` - internally the
 * layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) | bit mask and
 * by default all Object3ds are a member of layer `0`.
 * @remarks
 * This can be used to control visibility - an object must share a layer with a {@link Camera | camera} to be visible when that camera's view is rendered.
 * @remarks
 * All classes that inherit from {@link THREE.Object3d | Object3d} have an {@link THREE.Object3d.layers | Object3d.layers} property which is an instance of this class.
 * @see Example: {@link https://threejs.org/examples/#webgl_layers | WebGl / layers}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_layers | Webxr / vr / layers}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Layers | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Layers.js | Source}
 */

objParams.layers = [
    /**
     * A bit mask storing which of the 32 layers this layers object is currently a member of.
     * @defaultValue `1 | 0`
     * @remarks Expects a `Integer`
     */
    'mask',
].distinct()

export type LayersProps = Node<Layers, typeof Layers, { array: TypedArray; itemSize: number; normalized?: boolean; meshPerAttribute?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        layers: Partial<{ array: TypedArray; itemSize: number; normalized?: boolean; meshPerAttribute?: number; }>
    }
}

defaults.layers = {}

