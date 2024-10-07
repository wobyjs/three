import { Object3DNode } from '../../three-types'
import { BufferGeometry, NormalOrGLBufferAttributes } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { Points } from 'three/src/objects/Points.js'
export { Points } from 'three/src/objects/Points.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Points: typeof Points
    }
}

Three.Points = Points

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            points: PointsProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        points: typeof points
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        points: typeof _points
    }
}


/**
 * A class for displaying {@link Points}
 * @remarks
 * The {@link Points} are rendered by the {@link THREE.WebGlRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.POINTS}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js}
 */

const points = ([
    /**
     * Create a new instance of {@link Points}
     * @param geometry An instance of {@link THREE.BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.PointsMaterial | `new THREE.PointsMaterial()`}.
     */
    'geometry',
    'material',
] as const).distinct()
consParams.points = points


/**
 * A class for displaying {@link Points}
 * @remarks
 * The {@link Points} are rendered by the {@link THREE.webglRenderer | WebGlRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.POINTS}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js | Source}
 */

const _points = ([...objProps.object3d,
    /**
     * An array of weights typically from `0-1` that specify how much of the morph is applied.
     * @defaultValue `undefined`, _but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}._
     */
    'morphTargetInfluences',
    /**
     * A dictionary of morphTargets based on the `morphTarget.name` property.
     * @defaultValue `undefined`, _but rebuilt by {@link updateMorphTargets | .updateMorphTargets()}._
     */
    'morphTargetDictionary',
    /**
     * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
     * @remarks each vertex designates the position of a particle in the system.
     */
    'geometry',
    /**
     * An instance of {@link THREE.Material | Material defining the object's appearance.
     * @defaultValue {@link THREE.PointsMaterial | `new THREE.PointsMaterial()` _with randomised colour_.
     */
    'material',
] as const).distinct()
objProps.points = _points

export type PointsProps<
    TGeometry extends BufferGeometry<NormalOrGLBufferAttributes> = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> = Object3DNode<Points<TGeometry, TMaterial>, typeof Points<TGeometry, TMaterial>, { geometry?: TGeometry; material?: TMaterial; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        points: { geometry?: BufferGeometry, material?: Material }
    }
}

defaults.points = {}

