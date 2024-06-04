// / <reference path="../jsx-runtime" />
/** @jsxImportSource ../jsx-runtime */

import * as THREE from 'three'
import { GLTFProps } from './gltf'
import { canvasProps } from './canvas3D'
import { ObservableMaybe, type JSX, Context, FunctionMaybe } from 'woby'
import * as woby from 'woby'
export type Properties<T> = Pick<T, { [K in keyof T]: T[K] extends (_: any) => any ? never : K }[keyof T]>
export type NonFunctionKeys<T> = { [K in keyof T]-?: T[K] extends Function ? never : K }[keyof T]
export type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O

export type AttachFnType = (parent: Instance, self: Instance) => () => void
export type AttachType = string | AttachFnType

export type EventHandlers = {
    onClick?: (event: ThreeEvent<MouseEvent>) => void
    onContextMenu?: (event: ThreeEvent<MouseEvent>) => void
    onDoubleClick?: (event: ThreeEvent<MouseEvent>) => void
    onPointerUp?: (event: ThreeEvent<PointerEvent>) => void
    onPointerDown?: (event: ThreeEvent<PointerEvent>) => void
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void
    onPointerEnter?: (event: ThreeEvent<PointerEvent>) => void
    onPointerLeave?: (event: ThreeEvent<PointerEvent>) => void
    onPointerMove?: (event: ThreeEvent<PointerEvent>) => void
    onPointerMissed?: (event: MouseEvent) => void
    onPointerCancel?: (event: ThreeEvent<PointerEvent>) => void
    onWheel?: (event: ThreeEvent<WheelEvent>) => void
}


export interface Intersection extends THREE.Intersection {
    /** The event source (the object which registered the handler) */
    eventObject: THREE.Object3D
}


export interface IntersectionEvent<TSourceEvent> extends Intersection {
    /** The event source (the object which registered the handler) */
    eventObject: THREE.Object3D
    /** An array of intersections */
    intersections: Intersection[]
    /** vec3.set(pointer.x, pointer.y, 0).unproject(camera) */
    unprojectedPoint: THREE.Vector3
    /** Normalized event coordinates */
    pointer: THREE.Vector2
    /** Delta between first click and this event */
    delta: number
    /** The ray that pierced it */
    ray: THREE.Ray
    /** The camera that was used by the raycaster */
    camera: THREE.Camera
    /** stopPropagation will stop underlying handlers from firing */
    stopPropagation: () => void
    /** The original host event */
    nativeEvent: TSourceEvent
    /** If the event was stopped by calling stopPropagation */
    stopped: boolean
}

export type ThreeEvent<TEvent> = IntersectionEvent<TEvent> & Properties<TEvent>


export type BaseInstance = Omit<THREE.Object3D, 'children' | 'attach' | 'add' | 'remove' | 'raycast'> & {
    children: Instance[]
    remove: (...object: Instance[]) => Instance
    add: (...object: Instance[]) => Instance
    raycast?: (raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) => void
}
export type Instance = BaseInstance & { [key: string]: any }
/**
 * If **T** contains a constructor, @see ConstructorParameters must be used, otherwise **T**.
 */
type Args<T> = T extends new (...args: any) => any ? ConstructorParameters<T> : T

export type Euler = THREE.Euler | Parameters<THREE.Euler['set']>
export type Matrix4 = THREE.Matrix4 | Parameters<THREE.Matrix4['set']> | Readonly<THREE.Matrix4['set']>

/**
 * Turn an implementation of THREE.Vector in to the type that an r3f component would accept as a prop.
 */
type VectorLike<VectorClass extends (THREE.Vector2 | THREE.Vector3 | THREE.Vector4)> =
    | VectorClass
    | Parameters<VectorClass['set']>
    | Readonly<Parameters<VectorClass['set']>>
    | Parameters<VectorClass['setScalar']>[0]

export type Vector2 = VectorLike<THREE.Vector2>
export type Vector3 = VectorLike<THREE.Vector3>
export type Vector4 = VectorLike<THREE.Vector4>
export type Color = ConstructorParameters<typeof THREE.Color> | THREE.Color | number | string // Parameters<T> will not work here because of multiple function signatures in three.js types
// r153 compat, same issue as above
// https://github.com/pmndrs/react-three-fiber/issues/2926
export type ColorArray = typeof THREE.Color | [color: THREE.ColorRepresentation]
export type Layers = THREE.Layers | Parameters<THREE.Layers['set']>[0]
export type Quaternion = THREE.Quaternion | Parameters<THREE.Quaternion['set']>

export type AttachCallback = string | ((child: any, parentInstance: any) => void)

export interface NodeProps<T, P> {
    attach?: AttachType
    /** Constructor arguments */
    args?: Args<P>
    children?: JSX.Child
    onUpdate?: (self: T) => void
}
// type NonNullable<T> = T & {}

// export type Unobservant<T> = T extends object
//     ? { [K in keyof T]: T[K] extends ObservableMaybe<infer U> ? NonNullable<U> : T[K] }
//     : T

export type PromiseMaybe<T> = PromiseLike<T> | T

// export type Observant<T> = T extends object
//     ? { [K in keyof T]: T[K] extends Function ? T[K] :
//         T[K] extends ObservableMaybe<infer U> ? ObservableMaybe<PromiseMaybe<U>> : Observable<PromiseMaybe<T[K]>> } : T

// export type UnobservantMaybe<T> = Unobservant<T> | T

/** Make every properties FunctionMayBe */
export type Functionant<T> = T extends object
    ? { [K in keyof T]:
        T[K] extends ObservableMaybe<infer U> ? ObservableMaybe<U> :
        T[K] extends FunctionMaybe<infer U> ? FunctionMaybe<U> :
        T[K] extends Function ? T[K] : FunctionMaybe<T[K]>
    }
    : T

export type ExtendedColors<T> = { [K in keyof T]: T[K] extends THREE.Color | undefined ? FunctionMaybe<Color> : FunctionMaybe<T[K]> }
export type Node<T, P> = Functionant<ExtendedColors<Overwrite<Partial<T>, NodeProps<T, P>>>>

export type Object3DNode<T, P> = Overwrite<
    Node<T, P>,
    {
        position?: FunctionMaybe<Vector3 | number[]>
        up?: FunctionMaybe<VectorLike<THREE.Vector3>>
        scale?: FunctionMaybe<VectorLike<THREE.Vector3>>
        rotation?: FunctionMaybe<Euler>
        matrix?: FunctionMaybe<Matrix4>
        quaternion?: FunctionMaybe<Quaternion>
        layers?: FunctionMaybe<Layers>
        // dispose?: (() => void) | null,
        selfDispose?: FunctionMaybe<boolean>
        ref?: JSX.Refs<P>
    }
> & EventHandlers

export type BufferGeometryNode<T extends THREE.BufferGeometry, P> = Node<T, P>
export type MaterialNode<T extends THREE.Material, P> = Node<T, P>
export type LightNode<T extends THREE.Light, P> = Object3DNode<T, P>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation
export type AnimationActionProps = Object3DNode<THREE.AnimationAction, typeof THREE.AnimationAction>
export type AnimationClipProps = Object3DNode<THREE.AnimationClip, typeof THREE.AnimationClip>
export type AnimationMixerProps = Object3DNode<THREE.AnimationMixer, typeof THREE.AnimationMixer>
export type AnimationObjectGroupProps = Object3DNode<THREE.AnimationObjectGroup, typeof THREE.AnimationObjectGroup>
// export type AnimationUtilsProps = Object3DNode<THREE.AnimationUtils, typeof THREE.AnimationUtils>
export type KeyframeTrackProps = Object3DNode<THREE.KeyframeTrack, typeof THREE.KeyframeTrack>
export type PropertyBindingProps = Object3DNode<THREE.PropertyBinding.Composite, typeof THREE.PropertyBinding.Composite>
export type CompositeProps =PropertyBindingProps
export type PropertyMixerProps = Object3DNode<THREE.PropertyMixer, typeof THREE.PropertyMixer>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\track
export type VectorKeyframeTrackProps = Object3DNode<THREE.VectorKeyframeTrack, typeof THREE.VectorKeyframeTrack>
export type BooleanKeyframeTrackProps = Object3DNode<THREE.BooleanKeyframeTrack, typeof THREE.BooleanKeyframeTrack>
export type ColorKeyframeTrackProps = Object3DNode<THREE.ColorKeyframeTrack, typeof THREE.ColorKeyframeTrack>
export type NumberKeyframeTrackProps = Object3DNode<THREE.NumberKeyframeTrack, typeof THREE.NumberKeyframeTrack>
export type QuaternionKeyframeTrackProps = Object3DNode<THREE.QuaternionKeyframeTrack, typeof THREE.QuaternionKeyframeTrack>
export type StringKeyframeTrackProps = Object3DNode<THREE.StringKeyframeTrack, typeof THREE.StringKeyframeTrack>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio
// export type AudioProps = Object3DNode<THREE.Audio, typeof THREE.Audio>
export type AudioProps = Object3DNode<THREE.Audio, typeof THREE.Audio>
export type AudioAnalyserProps = Object3DNode<THREE.AudioAnalyser, typeof THREE.AudioAnalyser>
// export type AudioContextProps = Object3DNode<THREE.AudioContext, typeof THREE.AudioContext> 
export type AudioListenerProps = Object3DNode<THREE.AudioListener, typeof THREE.AudioListener>
export type PositionalAudioProps = Object3DNode<THREE.PositionalAudio, typeof THREE.PositionalAudio>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras
export type CameraProps = Object3DNode<THREE.Camera, typeof THREE.Camera>
export type PerspectiveCameraProps = Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera>
export type OrthographicCameraProps = Object3DNode<THREE.OrthographicCamera, typeof THREE.OrthographicCamera>
export type CubeCameraProps = Object3DNode<THREE.CubeCamera, typeof THREE.CubeCamera>
export type ArrayCameraProps = Object3DNode<THREE.ArrayCamera, typeof THREE.ArrayCamera>
export type StereoCameraProps = Object3DNode<THREE.StereoCamera, typeof THREE.StereoCamera>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core
export type BufferAttributeProps = Node<THREE.BufferAttribute, typeof THREE.BufferAttribute>
export type BufferGeometryProps = BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>
export type ClockProps = Node<THREE.Clock, typeof THREE.Clock>
export type EventDispatcherProps = Node<THREE.EventDispatcher, typeof THREE.EventDispatcher>
export type GLBufferAttributeProps = Node<THREE.GLBufferAttribute, typeof THREE.GLBufferAttribute>
export type InstancedBufferAttributeProps = Node<THREE.InstancedBufferAttribute, typeof THREE.InstancedBufferAttribute>
export type InstancedBufferGeometryProps = BufferGeometryNode<THREE.InstancedBufferGeometry, typeof THREE.InstancedBufferGeometry>
export type InstancedInterleavedBufferProps = Node<THREE.InstancedInterleavedBuffer, typeof THREE.InstancedInterleavedBuffer>
export type InterleavedBufferProps = Node<THREE.InterleavedBuffer, typeof THREE.InterleavedBuffer>
export type InterleavedBufferAttributeProps = Node<THREE.InterleavedBufferAttribute, typeof THREE.InterleavedBufferAttribute>
// export type LayersProps = BufferGeometryNode<THREE.Layers, typeof THREE.Layers>
export type Object3DProps = Object3DNode<THREE.Object3D, typeof THREE.Object3D>
export type RaycasterProps = Node<THREE.Raycaster, typeof THREE.Raycaster>
export type RenderTargetProps = Node<THREE.RenderTarget, typeof THREE.RenderTarget>
export type UniformProps = Node<THREE.Uniform, typeof THREE.Uniform>
export type UniformsGroupProps = Node<THREE.UniformsGroup, typeof THREE.UniformsGroup>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core
// export type CurveProps = Node<THREE.Curve, typeof THREE.Curve> //abstract
export type CurvePathProps<T extends THREE.Vector2 | THREE.Vector3> = Object3DNode<THREE.CurvePath<T>, typeof THREE.CurvePath>
// export type InterpolationsProps = Node<THREE.Interpolations, typeof THREE.Interpolations>
export type PathProps = Object3DNode<THREE.Path, typeof THREE.Path>
export type ShapeProps = Object3DNode<THREE.Shape, typeof THREE.Shape>
export type ShapePathProps = Object3DNode<THREE.ShapePath, typeof THREE.ShapePath>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves
export type ArcCurveProps = Object3DNode<THREE.ArcCurve, typeof THREE.ArcCurve>
export type CatmullRomCurve3Props = Object3DNode<THREE.CatmullRomCurve3, typeof THREE.CatmullRomCurve3>
export type CubicBezierCurveProps = Object3DNode<THREE.CubicBezierCurve, typeof THREE.CubicBezierCurve>
export type CubicBezierCurve3Props = Object3DNode<THREE.CubicBezierCurve3, typeof THREE.CubicBezierCurve3>
export type EllipseCurveProps = Object3DNode<THREE.EllipseCurve, typeof THREE.EllipseCurve>
export type LineCurveProps = Object3DNode<THREE.LineCurve, typeof THREE.LineCurve>
export type LineCurve3Props = Object3DNode<THREE.LineCurve3, typeof THREE.LineCurve3>
export type QuadraticBezierCurveProps = Object3DNode<THREE.QuadraticBezierCurve, typeof THREE.QuadraticBezierCurve>
export type QuadraticBezierCurve3Props = Object3DNode<THREE.QuadraticBezierCurve3, typeof THREE.QuadraticBezierCurve3>
export type SplineCurveProps = Object3DNode<THREE.SplineCurve, typeof THREE.SplineCurve>

// export type InstancedBufferGeometryProps = BufferGeometryNode<THREE.InstancedBufferGeometry, typeof THREE.InstancedBufferGeometry>
// export type BufferGeometryProps = BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>
// export type BoxBufferGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
// export type CircleBufferGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
// export type ConeBufferGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
// export type CylinderBufferGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
// export type DodecahedronBufferGeometryProps = BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
// export type ExtrudeBufferGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
// export type IcosahedronBufferGeometryProps = BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
// export type LatheBufferGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
// export type OctahedronBufferGeometryProps = BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
// export type PlaneBufferGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
// export type PolyhedronBufferGeometryProps = BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
// export type RingBufferGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
// export type ShapeBufferGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
// export type SphereBufferGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
// export type TetrahedronBufferGeometryProps = BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
// export type TorusBufferGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
// export type TorusKnotBufferGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
// export type TubeBufferGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
// export type WireframeGeometryProps = BufferGeometryNode<THREE.WireframeGeometry, typeof THREE.WireframeGeometry>
// export type TetrahedronGeometryProps = BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
// export type OctahedronGeometryProps = BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
// export type IcosahedronGeometryProps = BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
// export type DodecahedronGeometryProps = BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
// export type PolyhedronGeometryProps = BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
// export type TubeGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
// export type TorusKnotGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
// export type TorusGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
// export type SphereGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
// export type RingGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
// export type PlaneGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
// export type LatheGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
// export type ShapeGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
// export type ExtrudeGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
// export type EdgesGeometryProps = BufferGeometryNode<THREE.EdgesGeometry, typeof THREE.EdgesGeometry>
// export type ConeGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
// export type CylinderGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
// export type CircleGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
// export type BoxGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
// export type TextGeometryProps = BufferGeometryNode<TextGeometry, typeof TextGeometry>
// export type CapsuleGeometryProps = BufferGeometryNode<THREE.CapsuleGeometry, typeof THREE.CapsuleGeometry>

// export type GeometriesProps = BufferGeometryNode<THREE.Geometries, typeof THREE.Geometries>
export type BoxGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
export type CapsuleGeometryProps = BufferGeometryNode<THREE.CapsuleGeometry, typeof THREE.CapsuleGeometry>
export type CircleGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
export type ConeGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
export type CylinderGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
export type DodecahedronGeometryProps = BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
export type EdgesGeometryProps = BufferGeometryNode<THREE.EdgesGeometry, typeof THREE.EdgesGeometry>
export type ExtrudeGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
export type IcosahedronGeometryProps = BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
export type LatheGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
export type OctahedronGeometryProps = BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
export type PlaneGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
export type PolyhedronGeometryProps = BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
export type RingGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
export type ShapeGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
export type SphereGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
export type TetrahedronGeometryProps = BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
export type TorusGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
export type TorusKnotGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
export type TubeGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
export type WireframeGeometryProps = BufferGeometryNode<THREE.WireframeGeometry, typeof THREE.WireframeGeometry>


//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers
export type ArrowHelperProps = Object3DNode<THREE.ArrowHelper, typeof THREE.ArrowHelper>
export type AxesHelperProps = Object3DNode<THREE.AxesHelper, typeof THREE.AxesHelper>
export type Box3HelperProps = Object3DNode<THREE.Box3Helper, typeof THREE.Box3Helper>
export type BoxHelperProps = Object3DNode<THREE.BoxHelper, typeof THREE.BoxHelper>
export type CameraHelperProps = Object3DNode<THREE.CameraHelper, typeof THREE.CameraHelper>
export type DirectionalLightHelperProps = Object3DNode<THREE.DirectionalLightHelper, typeof THREE.DirectionalLightHelper>
export type GridHelperProps = Object3DNode<THREE.GridHelper, typeof THREE.GridHelper>
export type HemisphereLightHelperProps = Object3DNode<THREE.HemisphereLightHelper, typeof THREE.HemisphereLightHelper>
export type PlaneHelperProps = Object3DNode<THREE.PlaneHelper, typeof THREE.PlaneHelper>
export type PointLightHelperProps = Object3DNode<THREE.PointLightHelper, typeof THREE.PointLightHelper>
export type PolarGridHelperProps = Object3DNode<THREE.PolarGridHelper, typeof THREE.PolarGridHelper>
export type SkeletonHelperProps = Object3DNode<THREE.SkeletonHelper, typeof THREE.SkeletonHelper>
export type SpotLightHelperProps = Object3DNode<THREE.SpotLightHelper, typeof THREE.SpotLightHelper>


//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights
export type AmbientLightProps = LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>
export type DirectionalLightProps = LightNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
export type DirectionalLightShadowProps = Node<THREE.DirectionalLightShadow, typeof THREE.DirectionalLightShadow>
export type HemisphereLightProps = LightNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>
export type LightProps = LightNode<THREE.Light, typeof THREE.Light>
export type LightProbeProps = LightNode<THREE.LightProbe, typeof THREE.LightProbe>
export type LightShadowProps = Node<THREE.LightShadow, typeof THREE.LightShadow>
export type PointLightProps = LightNode<THREE.PointLight, typeof THREE.PointLight>
export type PointLightShadowProps = Node<THREE.PointLightShadow, typeof THREE.PointLightShadow>
export type RectAreaLightProps = LightNode<THREE.RectAreaLight, typeof THREE.RectAreaLight>
export type SpotLightProps = LightNode<THREE.SpotLight, typeof THREE.SpotLight>
export type SpotLightShadowProps = Node<THREE.SpotLightShadow, typeof THREE.SpotLightShadow>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders
//no need

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials
export type LineBasicMaterialProps = MaterialNode<THREE.LineBasicMaterial, [THREE.LineBasicMaterialParameters]>
export type LineDashedMaterialProps = MaterialNode<THREE.LineDashedMaterial, [THREE.LineDashedMaterialParameters]>
export type MaterialProps = MaterialNode<THREE.Material, [THREE.MaterialParameters]>
// export type MaterialsProps = MaterialNode<THREE.Materials, typeof THREE.Materials>
export type MeshBasicMaterialProps = MaterialNode<THREE.MeshBasicMaterial, [THREE.MeshBasicMaterialParameters]>
export type MeshDepthMaterialProps = MaterialNode<THREE.MeshDepthMaterial, [THREE.MeshDepthMaterialParameters]>
export type MeshDistanceMaterialProps = MaterialNode<THREE.MeshDistanceMaterial, [THREE.MeshDistanceMaterialParameters]>
export type MeshLambertMaterialProps = MaterialNode<THREE.MeshLambertMaterial, [THREE.MeshLambertMaterialParameters]>
export type MeshMatcapMaterialProps = MaterialNode<THREE.MeshMatcapMaterial, [THREE.MeshMatcapMaterialParameters]>
export type MeshNormalMaterialProps = MaterialNode<THREE.MeshNormalMaterial, [THREE.MeshNormalMaterialParameters]>
export type MeshPhongMaterialProps = MaterialNode<THREE.MeshPhongMaterial, [THREE.MeshPhongMaterialParameters]>
export type MeshPhysicalMaterialProps = MaterialNode<THREE.MeshPhysicalMaterial, [THREE.MeshPhysicalMaterialParameters]>
export type MeshStandardMaterialProps = MaterialNode<THREE.MeshStandardMaterial, [THREE.MeshStandardMaterialParameters]>
export type MeshToonMaterialProps = MaterialNode<THREE.MeshToonMaterial, [THREE.MeshToonMaterialParameters]>
export type PointsMaterialProps = MaterialNode<THREE.PointsMaterial, [THREE.PointsMaterialParameters]>
export type RawShaderMaterialProps = MaterialNode<THREE.RawShaderMaterial, [THREE.ShaderMaterialParameters]>
export type ShaderMaterialProps = MaterialNode<THREE.ShaderMaterial, [THREE.ShaderMaterialParameters]>
export type ShadowMaterialProps = MaterialNode<THREE.ShadowMaterial, [THREE.ShadowMaterialParameters]>
export type SpriteMaterialProps = MaterialNode<THREE.SpriteMaterial, [THREE.SpriteMaterialParameters]>


//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math
export type Box2Props = Node<THREE.Box2, typeof THREE.Box2>
export type Box3Props = Node<THREE.Box3, typeof THREE.Box3>
export type ColorProps = Node<THREE.Color, ColorArray>
export type ColorManagementProps = Node<THREE.ColorManagement, typeof THREE.ColorManagement>
export type CylindricalProps = Node<THREE.Cylindrical, typeof THREE.Cylindrical>
export type EulerProps = Node<THREE.Euler, typeof THREE.Euler>
export type FrustumProps = Node<THREE.Frustum, typeof THREE.Frustum>
export type InterpolantProps = Node<THREE.Interpolant, typeof THREE.Interpolant>
export type Line3Props = Node<THREE.Line3, typeof THREE.Line3>
// export type MathUtilsProps = Node<THREE.MathUtils, typeof THREE.MathUtils>
export type Matrix3Props = Node<THREE.Matrix3, typeof THREE.Matrix3>
export type Matrix4Props = Node<THREE.Matrix4, typeof THREE.Matrix4>
export type PlaneProps = Node<THREE.Plane, typeof THREE.Plane>
export type QuaternionProps = Node<THREE.Quaternion, typeof THREE.Quaternion>
export type RayProps = Node<THREE.Ray, typeof THREE.Ray>
export type SphereProps = Node<THREE.Sphere, typeof THREE.Sphere>
export type SphericalProps = Node<THREE.Spherical, typeof THREE.Spherical>
export type SphericalHarmonics3Props = Node<THREE.SphericalHarmonics3, typeof THREE.SphericalHarmonics3>
export type TriangleProps = Node<THREE.Triangle, typeof THREE.Triangle>
export type Vector2Props = Node<THREE.Vector2, typeof THREE.Vector2>
export type Vector3Props = Node<THREE.Vector3, typeof THREE.Vector3>
export type Vector4Props = Node<THREE.Vector4, typeof THREE.Vector4>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\interpolants
export type CubicInterpolantProps = Node<THREE.CubicInterpolant, typeof THREE.CubicInterpolant>
export type DiscreteInterpolantProps = Node<THREE.DiscreteInterpolant, typeof THREE.DiscreteInterpolant>
export type LinearInterpolantProps = Node<THREE.LinearInterpolant, typeof THREE.LinearInterpolant>
export type QuaternionLinearInterpolantProps = Node<THREE.QuaternionLinearInterpolant, typeof THREE.QuaternionLinearInterpolant>


//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects
export type BatchedMeshProps = Object3DNode<THREE.BatchedMesh, typeof THREE.BatchedMesh>
export type BoneProps = Object3DNode<THREE.Bone, typeof THREE.Bone>
export type GroupProps = Object3DNode<THREE.Group, typeof THREE.Group>
export type InstancedMeshProps = Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>
export type LineProps = Object3DNode<THREE.Line, typeof THREE.Line>
export type LineLoopProps = Object3DNode<THREE.LineLoop, typeof THREE.LineLoop>
export type LineSegmentsProps = Object3DNode<THREE.LineSegments, typeof THREE.LineSegments>
export type LODProps = Object3DNode<THREE.LOD, typeof THREE.LOD>
export type MeshProps = Object3DNode<THREE.Mesh, typeof THREE.Mesh>
export type PointsProps = Object3DNode<THREE.Points, typeof THREE.Points>
export type SkeletonProps = Object3DNode<THREE.Skeleton, typeof THREE.Skeleton>
export type SkinnedMeshProps = Object3DNode<THREE.SkinnedMesh, typeof THREE.SkinnedMesh>
export type SpriteProps = Object3DNode<THREE.Sprite, typeof THREE.Sprite>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers
export type WebGLCubeRenderTargetProps = Node<THREE.WebGLCubeRenderTarget, typeof THREE.WebGLCubeRenderTarget>
export type WebGLRendererProps = Node<THREE.WebGLRenderer, typeof THREE.WebGLRenderer>
export type WebGLRenderTargetProps = Node<THREE.WebGLRenderTarget, typeof THREE.WebGLRenderTarget>
export type WebGL3DRenderTargetProps = Node<THREE.WebGL3DRenderTarget, typeof THREE.WebGL3DRenderTarget>
export type WebGLArrayRenderTargetProps = Node<THREE.WebGLArrayRenderTarget, typeof THREE.WebGLArrayRenderTarget>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\shaders
//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl
export type WebGLProgramProps = Node<THREE.WebGLProgram, typeof THREE.WebGLProgram>
export type WebGLProgramsProps = Node<THREE.WebGLPrograms, typeof THREE.WebGLPrograms>
export type WebGLPropertiesProps = Node<THREE.WebGLProperties, typeof THREE.WebGLProperties>
export type WebGLRenderListsProps = Node<THREE.WebGLRenderLists, typeof THREE.WebGLRenderLists>
// export type WebGLShaderProps = Node<THREE.WebGLShader, typeof THREE.WebGLShader>
export type WebGLShadowMapProps = Node<THREE.WebGLShadowMap, typeof THREE.WebGLShadowMap>
export type WebGLStateProps = Node<THREE.WebGLState, typeof THREE.WebGLState>
export type WebGLTexturesProps = Node<THREE.WebGLTextures, typeof THREE.WebGLTextures>
export type WebGLUniformsProps = Node<THREE.WebGLUniforms, typeof THREE.WebGLUniforms>
// export type WebGLUniformsGroupsProps = Node<THREE.WebGLUniformsGroups, typeof THREE.WebGLUniformsGroups>
export type WebGLUtilsProps = Node<THREE.WebGLUtils, typeof THREE.WebGLUtils>
// export type WebGLAttributesProps = Node<THREE.WebGLAttributes, typeof THREE.WebGLAttributes>
// export type WebGLBindingStatesProps = Node<THREE.WebGLBindingStates, typeof THREE.WebGLBindingStates>
export type WebGLBufferRendererProps = Node<THREE.WebGLBufferRenderer, typeof THREE.WebGLBufferRenderer>
export type WebGLCapabilitiesProps = Node<THREE.WebGLCapabilities, typeof THREE.WebGLCapabilities>
export type WebGLClippingProps = Node<THREE.WebGLClipping, typeof THREE.WebGLClipping>
// export type WebGLCubeMapsProps = Node<THREE.WebGLCubeMaps, typeof THREE.WebGLCubeMaps>
export type WebGLCubeUVMapsProps = Node<THREE.WebGLCubeUVMaps, typeof THREE.WebGLCubeUVMaps>
export type WebGLExtensionsProps = Node<THREE.WebGLExtensions, typeof THREE.WebGLExtensions>
export type WebGLGeometriesProps = Node<THREE.WebGLGeometries, typeof THREE.WebGLGeometries>
export type WebGLIndexedBufferRendererProps = Node<THREE.WebGLIndexedBufferRenderer, typeof THREE.WebGLIndexedBufferRenderer>
export type WebGLInfoProps = Node<THREE.WebGLInfo, typeof THREE.WebGLInfo>
export type WebGLLightsProps = Node<THREE.WebGLLights, typeof THREE.WebGLLights>
export type WebGLObjectsProps = Node<THREE.WebGLObjects, typeof THREE.WebGLObjects>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webxr
export type WebXRControllerProps = Object3DNode<THREE.WebXRController, typeof THREE.WebXRController>
// export type WebXRDepthSensingProps = Object3DNode<THREE.WebXRDepthSensing, typeof THREE.WebXRDepthSensing>
export type WebXRManagerProps = Object3DNode<THREE.WebXRManager, typeof THREE.WebXRManager>

//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\scenes
export type FogProps = Node<THREE.Fog, typeof THREE.Fog>
export type FogExp2Props = Node<THREE.FogExp2, typeof THREE.FogExp2>
export type SceneProps = Node<THREE.Scene, typeof THREE.Scene>


//node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures
export type DataTexture3DProps = Node<THREE.Data3DTexture, typeof THREE.Data3DTexture>
export type CanvasTextureProps = Node<THREE.CanvasTexture, typeof THREE.CanvasTexture>
export type CompressedArrayTextureProps = Node<THREE.CompressedArrayTexture, typeof THREE.CompressedArrayTexture>
export type CompressedCubeTextureProps = Node<THREE.CompressedCubeTexture, typeof THREE.CompressedCubeTexture>
export type CompressedTextureProps = Node<THREE.CompressedTexture, typeof THREE.CompressedTexture>
export type CubeTextureProps = Node<THREE.CubeTexture, typeof THREE.CubeTexture>
export type Data3DTextureProps = Node<THREE.Data3DTexture, typeof THREE.Data3DTexture>
export type DataArrayTextureProps = Node<THREE.DataArrayTexture, typeof THREE.DataArrayTexture>
export type DataTextureProps = Node<THREE.DataTexture, typeof THREE.DataTexture>
export type DepthTextureProps = Node<THREE.DepthTexture, typeof THREE.DepthTexture>
export type FramebufferTextureProps = Node<THREE.FramebufferTexture, typeof THREE.FramebufferTexture>
export type SourceProps = Node<THREE.Source, typeof THREE.Source>
export type TextureProps = Node<THREE.Texture, typeof THREE.Texture>
// export type typesProps = Node<THREE.types, typeof THREE.types>
export type VideoTextureProps = Node<THREE.VideoTexture, typeof THREE.VideoTexture>

//in example
//node_modules\@types\three\examples\jsm\animation
import { type CCDIKSolver } from 'three/examples/jsm/animation/CCDIKSolver'
import { type MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper'
import { type MMDPhysics } from 'three/examples/jsm/animation/MMDPhysics'
// import { type AnimationClipCreator } from 'three/examples/jsm/animation/AnimationClipCreator'

export type CCDIKSolverProps = Node<CCDIKSolver, typeof CCDIKSolver>
export type MMDAnimationHelperProps = Node<MMDAnimationHelper, typeof MMDAnimationHelper>
export type MMDPhysicsProps = Node<MMDPhysics, typeof MMDPhysics>
// export type AnimationClipCreatorProps = Node<AnimationClipCreator, typeof AnimationClipCreator>

//node_modules\@types\three\examples\jsm\cameras
import { type CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera'
export type CinematicCameraProps = Node<CinematicCamera, typeof CinematicCamera>

//node_modules\@types\three\examples\jsm\capabilities
import type WebGL from 'three/examples/jsm/capabilities/WebGL'
import type WebGPU from 'three/examples/jsm/capabilities/WebGPU'
export type WebGLProps = Node<WebGL, typeof WebGL>
export type WebGPUProps = Node<WebGPU, typeof WebGPU>


//node_modules\@types\three\examples\jsm\controls
import { type ArcballControls } from 'three/examples/jsm/controls/ArcballControls'
import { type DragControls } from 'three/examples/jsm/controls/DragControls'
import { type FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { type FlyControls } from 'three/examples/jsm/controls/FlyControls'
import { type MapControls } from 'three/examples/jsm/controls/MapControls'
import { type OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { type PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import { type TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { type TransformControls } from 'three/examples/jsm/controls/TransformControls'

export type ArcballControlsProps = Node<ArcballControls, typeof ArcballControls>
export type DragControlsProps = Node<DragControls, typeof DragControls>
export type FirstPersonControlsProps = Node<FirstPersonControls, typeof FirstPersonControls>
export type FlyControlsProps = Node<FlyControls, typeof FlyControls>
export type MapControlsProps = Node<MapControls, typeof MapControls>
export type OrbitControlsProps = Node<OrbitControls, typeof OrbitControls>
export type PointerLockControlsProps = Node<PointerLockControls, typeof PointerLockControls>
export type TrackballControlsProps = Node<TrackballControls, typeof TrackballControls>
export type TransformControlsProps = Node<TransformControls, typeof TransformControls>

//node_modules\@types\three\examples\jsm\csm
import { type CSM } from 'three/examples/jsm/csm/CSM'
import CSMFrustum from 'three/examples/jsm/csm/CSMFrustum'
import { type CSMHelper } from 'three/examples/jsm/csm/CSMHelper'
// import { type CSMShader } from 'three/examples/jsm/csm/CSMShader'

export type CSMProps = Node<CSM, typeof CSM>
export type CSMFrustumProps = Node<CSMFrustum, typeof CSMFrustum>
export type CSMHelperProps = Node<CSMHelper, typeof CSMHelper>
// export type CSMShaderProps = Node<CSMShader, CSMShader>

//node_modules\@types\three\examples\jsm\curves
import type { GrannyKnot, HeartCurve, VivianiCurve, KnotCurve, HelixCurve, TrefoilKnot, TorusKnot, CinquefoilKnot, TrefoilPolynomialKnot, FigureEightPolynomialKnot, DecoratedTorusKnot4a, DecoratedTorusKnot4b, DecoratedTorusKnot5a, DecoratedTorusKnot5c, } from 'three/examples/jsm/curves/CurveExtras'
import { type NURBSCurve } from 'three/examples/jsm/curves/NURBSCurve'
import { type NURBSSurface } from 'three/examples/jsm/curves/NURBSSurface'
// import NURBSUtils from 'three/examples/jsm/curves/NURBSUtils'
import { type NURBSVolume } from 'three/examples/jsm/curves/NURBSVolume'

export type GrannyKnotProps = Node<GrannyKnot, typeof GrannyKnot>
export type HeartCurveProps = Node<HeartCurve, typeof HeartCurve>
export type VivianiCurveProps = Node<VivianiCurve, typeof VivianiCurve>
export type KnotCurveProps = Node<KnotCurve, typeof KnotCurve>
export type HelixCurveProps = Node<HelixCurve, typeof HelixCurve>
export type TrefoilKnotProps = Node<TrefoilKnot, typeof TrefoilKnot>
export type TorusKnotProps = Node<TorusKnot, typeof TorusKnot>
export type CinquefoilKnotProps = Node<CinquefoilKnot, typeof CinquefoilKnot>
export type TrefoilPolynomialKnotProps = Node<TrefoilPolynomialKnot, typeof TrefoilPolynomialKnot>
export type FigureEightPolynomialKnotProps = Node<FigureEightPolynomialKnot, typeof FigureEightPolynomialKnot>
export type DecoratedTorusKnot4aProps = Node<DecoratedTorusKnot4a, typeof DecoratedTorusKnot4a>
export type DecoratedTorusKnot4bProps = Node<DecoratedTorusKnot4b, typeof DecoratedTorusKnot4b>
export type DecoratedTorusKnot5aProps = Node<DecoratedTorusKnot5a, typeof DecoratedTorusKnot5a>
export type DecoratedTorusKnot5cProps = Node<DecoratedTorusKnot5c, typeof DecoratedTorusKnot5c>
export type NURBSCurveProps = Node<NURBSCurve, typeof NURBSCurve>
export type NURBSSurfaceProps = Node<NURBSSurface, typeof NURBSSurface>
// export type NURBSUtilsProps = Node<NURBSUtils, typeof NURBSUtils>
export type NURBSVolumeProps = Node<NURBSVolume, typeof NURBSVolume>

//node_modules\@types\three\examples\jsm\deprecated
//Geometry

//node_modules\@types\three\examples\jsm\effects
import { type AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect'
import { type AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
import { type OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect'
import { type ParallaxBarrierEffect } from 'three/examples/jsm/effects/ParallaxBarrierEffect'
import { type PeppersGhostEffect } from 'three/examples/jsm/effects/PeppersGhostEffect'
import { type StereoEffect } from 'three/examples/jsm/effects/StereoEffect'

export type AnaglyphEffectProps = Node<AnaglyphEffect, typeof AnaglyphEffect>
export type AsciiEffectProps = Node<AsciiEffect, typeof AsciiEffect>
export type OutlineEffectProps = Node<OutlineEffect, typeof OutlineEffect>
export type ParallaxBarrierEffectProps = Node<ParallaxBarrierEffect, typeof ParallaxBarrierEffect>
export type PeppersGhostEffectProps = Node<PeppersGhostEffect, typeof PeppersGhostEffect>
export type StereoEffectProps = Node<StereoEffect, typeof StereoEffect>

//node_modules\@types\three\examples\jsm\environments
import { type DebugEnvironment } from 'three/examples/jsm/environments/DebugEnvironment'
import { type RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'

export type DebugEnvironmentProps = Node<DebugEnvironment, typeof DebugEnvironment>
export type RoomEnvironmentProps = Node<RoomEnvironment, typeof RoomEnvironment>

//node_modules\@types\three\examples\jsm\exporters
import { type DRACOExporter } from 'three/examples/jsm/exporters/DRACOExporter'
import { type EXRExporter } from 'three/examples/jsm/exporters/EXRExporter'
import { type GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter'
import { type KTX2Exporter } from 'three/examples/jsm/exporters/KTX2Exporter'
import { type MMDExporter } from 'three/examples/jsm/exporters/MMDExporter'
import { type OBJExporter } from 'three/examples/jsm/exporters/OBJExporter'
import { type PLYExporter } from 'three/examples/jsm/exporters/PLYExporter'
import { type STLExporter } from 'three/examples/jsm/exporters/STLExporter'
import { type USDZExporter } from 'three/examples/jsm/exporters/USDZExporter'

export type DRACOExporterProps = Node<DRACOExporter, typeof DRACOExporter>
export type EXRExporterProps = Node<EXRExporter, typeof EXRExporter>
export type GLTFExporterProps = Node<GLTFExporter, typeof GLTFExporter>
export type KTX2ExporterProps = Node<KTX2Exporter, typeof KTX2Exporter>
export type MMDExporterProps = Node<MMDExporter, typeof MMDExporter>
export type OBJExporterProps = Node<OBJExporter, typeof OBJExporter>
export type PLYExporterProps = Node<PLYExporter, typeof PLYExporter>
export type STLExporterProps = Node<STLExporter, typeof STLExporter>
export type USDZExporterProps = Node<USDZExporter, typeof USDZExporter>

//node_modules\@types\three\examples\jsm\geometries
import { type BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry'
import { type ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry'
import { type DecalGeometry, DecalVertex } from 'three/examples/jsm/geometries/DecalGeometry'
import { type ParametricGeometries } from 'three/examples/jsm/geometries/ParametricGeometries'
import { type ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry'
import { type RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'
import { type SDFGeometryGenerator } from 'three/examples/jsm/geometries/SDFGeometryGenerator'
import { type TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry'
import { type TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

export type BoxLineGeometryProps = BufferGeometryNode<BoxLineGeometry, typeof BoxLineGeometry>
export type ConvexGeometryProps = BufferGeometryNode<ConvexGeometry, typeof ConvexGeometry>
export type DecalGeometryProps = BufferGeometryNode<DecalGeometry, typeof DecalGeometry>
export type DecalVertexProps = Node<DecalVertex, typeof DecalVertex>
// export type ParametricGeometriesProps = Node<ParametricGeometries, typeof ParametricGeometries>
export type ParametricGeometries_TubeGeometryProps = BufferGeometryNode<ParametricGeometries.TubeGeometry, typeof ParametricGeometries.TubeGeometry>
export type ParametricGeometries_TorusKnotGeometryProps = BufferGeometryNode<ParametricGeometries.TorusKnotGeometry, typeof ParametricGeometries.TorusKnotGeometry>
export type ParametricGeometries_SphereGeometryProps = BufferGeometryNode<ParametricGeometries.SphereGeometry, typeof ParametricGeometries.SphereGeometry>
export type ParametricGeometries_PlaneGeometryProps = BufferGeometryNode<ParametricGeometries.PlaneGeometry, typeof ParametricGeometries.PlaneGeometry>
export type ParametricGeometryProps = BufferGeometryNode<ParametricGeometry, typeof ParametricGeometry>
export type RoundedBoxGeometryProps = BufferGeometryNode<RoundedBoxGeometry, typeof RoundedBoxGeometry>
export type SDFGeometryGeneratorProps = Node<SDFGeometryGenerator, typeof SDFGeometryGenerator>
export type TeapotGeometryProps = BufferGeometryNode<TeapotGeometry, typeof TeapotGeometry>
export type TextGeometryProps = BufferGeometryNode<TextGeometry, typeof TextGeometry>

//node_modules\@types\three\examples\jsm\helpers
import { type LightProbeHelper } from 'three/examples/jsm/helpers/LightProbeHelper'
import { type OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper'
import { type PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper'
import { type RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
import { type TextureHelper } from 'three/examples/jsm/helpers/TextureHelper'
import { type VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper'
import { type VertexTangentsHelper } from 'three/examples/jsm/helpers/VertexTangentsHelper'
import { type ViewHelper } from 'three/examples/jsm/helpers/ViewHelper'

export type LightProbeHelperProps = Node<LightProbeHelper, typeof LightProbeHelper>
export type OctreeHelperProps = Node<OctreeHelper, typeof OctreeHelper>
export type PositionalAudioHelperProps = Node<PositionalAudioHelper, typeof PositionalAudioHelper>
export type RectAreaLightHelperProps = Node<RectAreaLightHelper, typeof RectAreaLightHelper>
export type TextureHelperProps = Node<TextureHelper, typeof TextureHelper>
export type VertexNormalsHelperProps = Node<VertexNormalsHelper, typeof VertexNormalsHelper>
export type VertexTangentsHelperProps = Node<VertexTangentsHelper, typeof VertexTangentsHelper>
export type ViewHelperProps = Node<ViewHelper, typeof ViewHelper>

//node_modules\@types\three\examples\jsm\interactive
import { type HTMLMesh } from 'three/examples/jsm/interactive/HTMLMesh'
import { type InteractiveGroup } from 'three/examples/jsm/interactive/InteractiveGroup'
import { type SelectionBox } from 'three/examples/jsm/interactive/SelectionBox'
import { type SelectionHelper } from 'three/examples/jsm/interactive/SelectionHelper'

export type HTMLMeshProps = Node<HTMLMesh, typeof HTMLMesh>
export type InteractiveGroupProps = Node<InteractiveGroup, typeof InteractiveGroup>
export type SelectionBoxProps = Node<SelectionBox, typeof SelectionBox>
export type SelectionHelperProps = Node<SelectionHelper, typeof SelectionHelper>

//node_modules\@types\three\examples\jsm\libs

import { } from 'three/examples/jsm/libs/fflate.module'
import { } from 'three/examples/jsm/libs/lil-gui.module.min'
import { } from 'three/examples/jsm/libs/meshopt_decoder.module'
import { } from 'three/examples/jsm/libs/stats.module'
import { } from 'three/examples/jsm/libs/tween.module'

//node_modules\@types\three\examples\jsm\lights
import IESSpotLight from 'three/examples/jsm/lights/IESSpotLight'
// import {type LightProbeGenerator} from 'three/examples/jsm/lights/LightProbeGenerator'
// import { type RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'

export type IESSpotLightProps = LightNode<IESSpotLight, typeof IESSpotLight>
// export type LightProbeGeneratorProps = Node<LightProbeGenerator, typeof LightProbeGenerator>
// export type RectAreaLightUniformsLibProps = Node<RectAreaLightUniformsLib, typeof RectAreaLightUniformsLib>

//node_modules\@types\three\examples\jsm\lines
import { type Line2 } from 'three/examples/jsm/lines/Line2'
import { type LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { type LineSegments2 } from 'three/examples/jsm/lines/LineSegments2'
import { type LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry'
import { type Wireframe } from 'three/examples/jsm/lines/Wireframe'
import { type WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2'

export type Line2Props = Object3DNode<Line2, typeof Line2>
export type LineGeometryProps = Object3DNode<LineGeometry, typeof LineGeometry>
export type LineMaterialProps = MaterialNode<LineMaterial, typeof LineMaterial>
export type LineSegments2Props = Object3DNode<LineSegments2, typeof LineSegments2>
export type LineSegmentsGeometryProps = Object3DNode<LineSegmentsGeometry, typeof LineSegmentsGeometry>
export type WireframeProps = Object3DNode<Wireframe, typeof Wireframe>
export type WireframeGeometry2Props = Object3DNode<WireframeGeometry2, typeof WireframeGeometry2>

//node_modules\@types\three\examples\jsm\loaders
import { type Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader'
import { type ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader'
import { type AMFLoader } from 'three/examples/jsm/loaders/AMFLoader'
import { type BVHLoader } from 'three/examples/jsm/loaders/BVHLoader'
import { type ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import { type DDSLoader } from 'three/examples/jsm/loaders/DDSLoader'
import { type DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { type EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import { type FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { type FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { type GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader'
import { type GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { type HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader'
import { type IESLoader } from 'three/examples/jsm/loaders/IESLoader'
import { type KMZLoader } from 'three/examples/jsm/loaders/KMZLoader'
import { type KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader'
import { type KTXLoader } from 'three/examples/jsm/loaders/KTXLoader'
import { type LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader'
import { type LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader'
import { type LottieLoader } from 'three/examples/jsm/loaders/LottieLoader'
import { type LUT3dlLoader } from 'three/examples/jsm/loaders/LUT3dlLoader'
import { type LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader'
import { type LWOLoader } from 'three/examples/jsm/loaders/LWOLoader'
import { type MaterialXLoader } from 'three/examples/jsm/loaders/MaterialXLoader'
import { type MD2Loader } from 'three/examples/jsm/loaders/MD2Loader'
import { type MDDLoader } from 'three/examples/jsm/loaders/MDDLoader'
import { type MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import { type MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { type NRRDLoader } from 'three/examples/jsm/loaders/NRRDLoader'
import { type OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { type PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'
import { type PDBLoader } from 'three/examples/jsm/loaders/PDBLoader'
import { type PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { type PVRLoader } from 'three/examples/jsm/loaders/PVRLoader'
import { type RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { type RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader'
import { type STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { type SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { type TDSLoader } from 'three/examples/jsm/loaders/TDSLoader'
import { type TGALoader } from 'three/examples/jsm/loaders/TGALoader'
import { type TIFFLoader } from 'three/examples/jsm/loaders/TIFFLoader'
import { type TiltLoader } from 'three/examples/jsm/loaders/TiltLoader'
import { type TTFLoader } from 'three/examples/jsm/loaders/TTFLoader'
import { type USDZLoader } from 'three/examples/jsm/loaders/USDZLoader'
import { type VOXLoader } from 'three/examples/jsm/loaders/VOXLoader'
import { type VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader'
import { type VTKLoader } from 'three/examples/jsm/loaders/VTKLoader'
import { type XYZLoader } from 'three/examples/jsm/loaders/XYZLoader'

export type Rhino3dmLoaderProps = Node<Rhino3dmLoader, typeof Rhino3dmLoader>
export type ThreeMFLoaderProps = Node<ThreeMFLoader, typeof ThreeMFLoader>
export type AMFLoaderProps = Node<AMFLoader, typeof AMFLoader>
export type BVHLoaderProps = Node<BVHLoader, typeof BVHLoader>
export type ColladaLoaderProps = Node<ColladaLoader, typeof ColladaLoader>
export type DDSLoaderProps = Node<DDSLoader, typeof DDSLoader>
export type DRACOLoaderProps = Node<DRACOLoader, typeof DRACOLoader>
export type EXRLoaderProps = Node<EXRLoader, typeof EXRLoader>
export type FBXLoaderProps = Node<FBXLoader, typeof FBXLoader>
export type FontLoaderProps = Node<FontLoader, typeof FontLoader>
export type GCodeLoaderProps = Node<GCodeLoader, typeof GCodeLoader>
export type GLTFLoaderProps = Node<GLTFLoader, typeof GLTFLoader>
export type HDRCubeTextureLoaderProps = Node<HDRCubeTextureLoader, typeof HDRCubeTextureLoader>
export type IESLoaderProps = Node<IESLoader, typeof IESLoader>
export type KMZLoaderProps = Node<KMZLoader, typeof KMZLoader>
export type KTX2LoaderProps = Node<KTX2Loader, typeof KTX2Loader>
export type KTXLoaderProps = Node<KTXLoader, typeof KTXLoader>
export type LDrawLoaderProps = Node<LDrawLoader, typeof LDrawLoader>
export type LogLuvLoaderProps = Node<LogLuvLoader, typeof LogLuvLoader>
export type LottieLoaderProps = Node<LottieLoader, typeof LottieLoader>
export type LUT3dlLoaderProps = Node<LUT3dlLoader, typeof LUT3dlLoader>
export type LUTCubeLoaderProps = Node<LUTCubeLoader, typeof LUTCubeLoader>
export type LWOLoaderProps = Node<LWOLoader, typeof LWOLoader>
export type MaterialXLoaderProps = Node<MaterialXLoader, typeof MaterialXLoader>
export type MD2LoaderProps = Node<MD2Loader, typeof MD2Loader>
export type MDDLoaderProps = Node<MDDLoader, typeof MDDLoader>
export type MMDLoaderProps = Node<MMDLoader, typeof MMDLoader>
export type MTLLoaderProps = Node<MTLLoader, typeof MTLLoader>
export type NRRDLoaderProps = Node<NRRDLoader, typeof NRRDLoader>
export type OBJLoaderProps = Node<OBJLoader, typeof OBJLoader>
export type PCDLoaderProps = Node<PCDLoader, typeof PCDLoader>
export type PDBLoaderProps = Node<PDBLoader, typeof PDBLoader>
export type PLYLoaderProps = Node<PLYLoader, typeof PLYLoader>
export type PVRLoaderProps = Node<PVRLoader, typeof PVRLoader>
export type RGBELoaderProps = Node<RGBELoader, typeof RGBELoader>
export type RGBMLoaderProps = Node<RGBMLoader, typeof RGBMLoader>
export type STLLoaderProps = Node<STLLoader, typeof STLLoader>
export type SVGLoaderProps = Node<SVGLoader, typeof SVGLoader>
export type TDSLoaderProps = Node<TDSLoader, typeof TDSLoader>
export type TGALoaderProps = Node<TGALoader, typeof TGALoader>
export type TIFFLoaderProps = Node<TIFFLoader, typeof TIFFLoader>
export type TiltLoaderProps = Node<TiltLoader, typeof TiltLoader>
export type TTFLoaderProps = Node<TTFLoader, typeof TTFLoader>
export type USDZLoaderProps = Node<USDZLoader, typeof USDZLoader>
export type VOXLoaderProps = Node<VOXLoader, typeof VOXLoader>
export type VRMLLoaderProps = Node<VRMLLoader, typeof VRMLLoader>
export type VTKLoaderProps = Node<VTKLoader, typeof VTKLoader>
export type XYZLoaderProps = Node<XYZLoader, typeof XYZLoader>

//node_modules\@types\three\examples\jsm\materials
import { type MeshGouraudMaterial } from 'three/examples/jsm/materials/MeshGouraudMaterial'
import { type MeshPostProcessingMaterial } from 'three/examples/jsm/materials/MeshPostProcessingMaterial'

export type MeshGouraudMaterialProps = MaterialNode<MeshGouraudMaterial, typeof MeshGouraudMaterial>
export type MeshPostProcessingMaterialProps = MaterialNode<MeshPostProcessingMaterial, typeof MeshPostProcessingMaterial>

//node_modules\@types\three\examples\jsm\math
import { type Capsule } from 'three/examples/jsm/math/Capsule'
// import { type ColorConverter } from 'three/examples/jsm/math/ColorConverter'
import { type ConvexHull } from 'three/examples/jsm/math/ConvexHull'
import { type ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise'
import { type Lut } from 'three/examples/jsm/math/Lut'
import { type MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler'
import { type OBB } from 'three/examples/jsm/math/OBB'
import { type Octree } from 'three/examples/jsm/math/Octree'
import { type SimplexNoise } from 'three/examples/jsm/math/SimplexNoise'

export type CapsuleProps = Node<Capsule, typeof Capsule>
// export type ColorConverterProps = Node<ColorConverter, typeof ColorConverter>
export type ConvexHullProps = Node<ConvexHull, typeof ConvexHull>
export type ImprovedNoiseProps = Node<ImprovedNoise, typeof ImprovedNoise>
export type LutProps = Node<Lut, typeof Lut>
export type MeshSurfaceSamplerProps = Node<MeshSurfaceSampler, typeof MeshSurfaceSampler>
export type OBBProps = Node<OBB, typeof OBB>
export type OctreeProps = Node<Octree, typeof Octree>
export type SimplexNoiseProps = Node<SimplexNoise, typeof SimplexNoise>

//node_modules\@types\three\examples\jsm\misc
import { type ConvexObjectBreaker } from 'three/examples/jsm/misc/ConvexObjectBreaker'
import { type GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer'
import { type Gyroscope } from 'three/examples/jsm/misc/Gyroscope'
import { type MD2Character } from 'three/examples/jsm/misc/MD2Character'
import { type MD2CharacterComplex } from 'three/examples/jsm/misc/MD2CharacterComplex'
import { type MorphAnimMesh } from 'three/examples/jsm/misc/MorphAnimMesh'
import { type MorphBlendMesh } from 'three/examples/jsm/misc/MorphBlendMesh'
import { type ProgressiveLightMap } from 'three/examples/jsm/misc/ProgressiveLightMap'
import { RollerCoasterGeometry, RollerCoasterLiftersGeometry, RollerCoasterShadowGeometry, SkyGeometry, TreesGeometry, } from 'three/examples/jsm/misc/RollerCoaster'
import { type Timer } from 'three/examples/jsm/misc/Timer'
import { type TubePainter } from 'three/examples/jsm/misc/TubePainter'
import { type Volume } from 'three/examples/jsm/misc/Volume'
import { type VolumeSlice } from 'three/examples/jsm/misc/VolumeSlice'

export type ConvexObjectBreakerProps = Node<ConvexObjectBreaker, typeof ConvexObjectBreaker>
export type GPUComputationRendererProps = Node<GPUComputationRenderer, typeof GPUComputationRenderer>
export type GyroscopeProps = Node<Gyroscope, typeof Gyroscope>
export type MD2CharacterProps = Node<MD2Character, typeof MD2Character>
export type MD2CharacterComplexProps = Node<MD2CharacterComplex, typeof MD2CharacterComplex>
export type MorphAnimMeshProps = Object3DNode<MorphAnimMesh, typeof MorphAnimMesh>
export type MorphBlendMeshProps = Object3DNode<MorphBlendMesh, typeof MorphBlendMesh>
export type ProgressiveLightMapProps = Node<ProgressiveLightMap, typeof ProgressiveLightMap>
export type RollerCoasterGeometryProps = Node<RollerCoasterGeometry, typeof RollerCoasterGeometry>
export type RollerCoasterLiftersGeometryProps = Node<RollerCoasterLiftersGeometry, typeof RollerCoasterLiftersGeometry>
export type RollerCoasterShadowGeometryProps = Node<RollerCoasterShadowGeometry, typeof RollerCoasterShadowGeometry>
export type SkyGeometryProps = Node<SkyGeometry, typeof SkyGeometry>
export type TreesGeometryProps = Node<TreesGeometry, typeof TreesGeometry>
export type TimerProps = Node<Timer, typeof Timer>
export type TubePainterProps = Node<TubePainter, typeof TubePainter>
export type VolumeProps = Node<Volume, typeof Volume>
export type VolumeSliceProps = Node<VolumeSlice, typeof VolumeSlice>

//node_modules\@types\three\examples\jsm\modifiers
import { InstancedFlow, Flow } from 'three/examples/jsm/modifiers/CurveModifier'
import { type EdgeSplitModifier } from 'three/examples/jsm/modifiers/EdgeSplitModifier'
import { type SimplifyModifier } from 'three/examples/jsm/modifiers/SimplifyModifier'
import { type TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier'

export type InstancedFlowProps = Node<InstancedFlow, typeof InstancedFlow>
export type FlowProps = Node<Flow, typeof Flow>
export type EdgeSplitModifierProps = Node<EdgeSplitModifier, typeof EdgeSplitModifier>
export type SimplifyModifierProps = Node<SimplifyModifier, typeof SimplifyModifier>
export type TessellateModifierProps = Node<TessellateModifier, typeof TessellateModifier>

//node_modules\@types\three\examples\jsm\nodes
// Nodes

//node_modules\@types\three\examples\jsm\nodes\accessors
// import {type AccessorsUtils} from 'three/examples/jsm/nodes/accessors/AccessorsUtils'
import BatchNode from 'three/examples/jsm/nodes/accessors/BatchNode'
import BitangentNode from 'three/examples/jsm/nodes/accessors/BitangentNode'
import BufferNode from 'three/examples/jsm/nodes/accessors/BufferNode'
import CameraNode from 'three/examples/jsm/nodes/accessors/CameraNode'
import ClippingNode from 'three/examples/jsm/nodes/accessors/ClippingNode'
import CubeTextureNode from 'three/examples/jsm/nodes/accessors/CubeTextureNode'
import InstanceNode from 'three/examples/jsm/nodes/accessors/InstanceNode'
import MaterialNode_ from 'three/examples/jsm/nodes/accessors/MaterialNode'
import MaterialReferenceNode from 'three/examples/jsm/nodes/accessors/MaterialReferenceNode'
import ModelNode from 'three/examples/jsm/nodes/accessors/ModelNode'
import ModelViewProjectionNode from 'three/examples/jsm/nodes/accessors/ModelViewProjectionNode'
import NormalNode from 'three/examples/jsm/nodes/accessors/NormalNode'
import Object3DNode_ from 'three/examples/jsm/nodes/accessors/Object3DNode'
import PointUVNode from 'three/examples/jsm/nodes/accessors/PointUVNode'
import PositionNode from 'three/examples/jsm/nodes/accessors/PositionNode'
import ReferenceNode from 'three/examples/jsm/nodes/accessors/ReferenceNode'
import ReflectVectorNode from 'three/examples/jsm/nodes/accessors/ReflectVectorNode'
import RendererReferenceNode from 'three/examples/jsm/nodes/accessors/RendererReferenceNode'
import SkinningNode from 'three/examples/jsm/nodes/accessors/SkinningNode'
import StorageBufferNode from 'three/examples/jsm/nodes/accessors/StorageBufferNode'
import TangentNode from 'three/examples/jsm/nodes/accessors/TangentNode'
import TextureBicubicNode from 'three/examples/jsm/nodes/accessors/TextureBicubicNode'
import TextureNode from 'three/examples/jsm/nodes/accessors/TextureNode'
import UniformsNode from 'three/examples/jsm/nodes/accessors/UniformsNode'
import UserDataNode from 'three/examples/jsm/nodes/accessors/UserDataNode'
import UVNode from 'three/examples/jsm/nodes/accessors/UVNode'
import VertexColorNode from 'three/examples/jsm/nodes/accessors/VertexColorNode'

// export type AccessorsUtilsProps = Object3DNode<AccessorsUtils, typeof AccessorsUtils>
export type BatchNodeProps = Object3DNode<BatchNode, typeof BatchNode>
export type BitangentNodeProps = Object3DNode<BitangentNode, typeof BitangentNode>
export type BufferNodeProps = Object3DNode<BufferNode, typeof BufferNode>
export type CameraNodeProps = Object3DNode<CameraNode, typeof CameraNode>
export type ClippingNodeProps = Object3DNode<ClippingNode, typeof ClippingNode>
export type CubeTextureNodeProps = Object3DNode<CubeTextureNode, typeof CubeTextureNode>
export type InstanceNodeProps = Object3DNode<InstanceNode, typeof InstanceNode>
export type MaterialNodeProps = Object3DNode<MaterialNode_, typeof MaterialNode_>
export type MaterialReferenceNodeProps = Object3DNode<MaterialReferenceNode, typeof MaterialReferenceNode>
export type ModelNodeProps = Object3DNode<ModelNode, typeof ModelNode>
export type ModelViewProjectionNodeProps = Object3DNode<ModelViewProjectionNode, typeof ModelViewProjectionNode>
export type NormalNodeProps = Object3DNode<NormalNode, typeof NormalNode>
export type Object3DNodeProps = Object3DNode<Object3DNode_, typeof Object3DNode_>
export type PointUVNodeProps = Object3DNode<PointUVNode, typeof PointUVNode>
export type PositionNodeProps = Object3DNode<PositionNode, typeof PositionNode>
export type ReferenceNodeProps<T> = Object3DNode<ReferenceNode<T>, typeof ReferenceNode>
export type ReflectVectorNodeProps = Object3DNode<ReflectVectorNode, typeof ReflectVectorNode>
export type RendererReferenceNodeProps = Object3DNode<RendererReferenceNode, typeof RendererReferenceNode>
export type SkinningNodeProps = Object3DNode<SkinningNode, typeof SkinningNode>
export type StorageBufferNodeProps = Object3DNode<StorageBufferNode, typeof StorageBufferNode>
export type TangentNodeProps = Object3DNode<TangentNode, typeof TangentNode>
export type TextureBicubicNodeProps = Object3DNode<TextureBicubicNode, typeof TextureBicubicNode>
export type TextureNodeProps = Object3DNode<TextureNode, typeof TextureNode>
export type UniformsNodeProps = Object3DNode<UniformsNode, typeof UniformsNode>
export type UserDataNodeProps = Object3DNode<UserDataNode, typeof UserDataNode>
export type UVNodeProps = Object3DNode<UVNode, typeof UVNode>
export type VertexColorNodeProps = Object3DNode<VertexColorNode, typeof VertexColorNode>

//node_modules\@types\three\examples\jsm\nodes\code
import CodeNode from 'three/examples/jsm/nodes/code/CodeNode'
import ExpressionNode from 'three/examples/jsm/nodes/code/ExpressionNode'
import FunctionCallNode from 'three/examples/jsm/nodes/code/FunctionCallNode'
import FunctionNode from 'three/examples/jsm/nodes/code/FunctionNode'
import Node_ from 'three/examples/jsm/nodes/core/Node'

export type CodeNodeProps = Node<CodeNode, typeof CodeNode>
export type ExpressionNodeProps = Node<ExpressionNode, typeof ExpressionNode>
export type FunctionCallNodeProps<T extends Node_[] | { [name: string]: Node_ }> = Node<FunctionCallNode<T>, typeof FunctionCallNode<T>>
export type FunctionNodeProps<T extends Node_[] | { [name: string]: Node_ }> = Node<FunctionNode<T>, typeof FunctionNode<T>>

//node_modules\@types\three\examples\jsm\nodes\core
import AssignNode from 'three/examples/jsm/nodes/core/AssignNode'
import AttributeNode from 'three/examples/jsm/nodes/core/AttributeNode'
import BypassNode from 'three/examples/jsm/nodes/core/BypassNode'
import CacheNode from 'three/examples/jsm/nodes/core/CacheNode'
// import constants from 'three/examples/jsm/nodes/core/constants'
import ConstNode from 'three/examples/jsm/nodes/core/ConstNode'
import ContextNode from 'three/examples/jsm/nodes/core/ContextNode'
import IndexNode from 'three/examples/jsm/nodes/core/IndexNode'
import InputNode from 'three/examples/jsm/nodes/core/InputNode'
import LightingModel from 'three/examples/jsm/nodes/core/LightingModel'
// import  Node from 'three/examples/jsm/nodes/core/Node'
import NodeAttribute from 'three/examples/jsm/nodes/core/NodeAttribute'
import NodeBuilder from 'three/examples/jsm/nodes/core/NodeBuilder'
import NodeCache from 'three/examples/jsm/nodes/core/NodeCache'
import NodeCode from 'three/examples/jsm/nodes/core/NodeCode'
import NodeFrame from 'three/examples/jsm/nodes/core/NodeFrame'
import NodeFunction from 'three/examples/jsm/nodes/core/NodeFunction'
import NodeFunctionInput from 'three/examples/jsm/nodes/core/NodeFunctionInput'
import NodeKeywords from 'three/examples/jsm/nodes/core/NodeKeywords'
import NodeParser from 'three/examples/jsm/nodes/core/NodeParser'
import NodeUniform from 'three/examples/jsm/nodes/core/NodeUniform'
// import NodeUtils from 'three/examples/jsm/nodes/core/NodeUtils'
import NodeVar from 'three/examples/jsm/nodes/core/NodeVar'
import NodeVarying from 'three/examples/jsm/nodes/core/NodeVarying'
import OutputStructNode from 'three/examples/jsm/nodes/core/OutputStructNode'
import PropertyNode from 'three/examples/jsm/nodes/core/PropertyNode'
import StackNode from 'three/examples/jsm/nodes/core/StackNode'
import TempNode from 'three/examples/jsm/nodes/core/TempNode'
import UniformNode from 'three/examples/jsm/nodes/core/UniformNode'
import VarNode from 'three/examples/jsm/nodes/core/VarNode'
import VaryingNode from 'three/examples/jsm/nodes/core/VaryingNode'

export type AssignNodeProps = Node<AssignNode, typeof AssignNode>
export type AttributeNodeProps = Node<AttributeNode, typeof AttributeNode>
export type BypassNodeProps = Node<BypassNode, typeof BypassNode>
export type CacheNodeProps = Node<CacheNode, typeof CacheNode>
// export type constantsProps = Node<constants, typeof constants>
export type ConstNodeProps<T> = Node<ConstNode<T>, typeof ConstNode<T>>
export type ContextNodeProps = Node<ContextNode, typeof ContextNode>
export type IndexNodeProps = Node<IndexNode, typeof IndexNode>
export type InputNodeProps<T> = Node<InputNode<T>, typeof InputNode<T>>
export type LightingModelProps = Node<LightingModel, typeof LightingModel>
// export type NodeProps = Node<Node, typeof Node>
export type NodeAttributeProps = Node<NodeAttribute, typeof NodeAttribute>
export type NodeBuilderProps = Node<NodeBuilder, typeof NodeBuilder>
export type NodeCacheProps = Node<NodeCache, typeof NodeCache>
export type NodeCodeProps = Node<NodeCode, typeof NodeCode>
export type NodeFrameProps = Node<NodeFrame, typeof NodeFrame>
export type NodeFunctionProps = Node<NodeFunction, typeof NodeFunction>
export type NodeFunctionInputProps = Node<NodeFunctionInput, typeof NodeFunctionInput>
export type NodeKeywordsProps = Node<NodeKeywords, typeof NodeKeywords>
export type NodeParserProps = Node<NodeParser, typeof NodeParser>
export type NodeUniformProps<T> = Node<NodeUniform<T>, typeof NodeUniform<T>>
// export type NodeUtilsProps = Node<NodeUtils, typeof NodeUtils>
export type NodeVarProps = Node<NodeVar, typeof NodeVar>
export type NodeVaryingProps = Node<NodeVarying, typeof NodeVarying>
export type OutputStructNodeProps = Node<OutputStructNode, typeof OutputStructNode>
export type PropertyNodeProps = Node<PropertyNode, typeof PropertyNode>
export type StackNodeProps = Node<StackNode, typeof StackNode>
export type TempNodeProps = Node<TempNode, typeof TempNode>
export type UniformNodeProps<T> = Node<UniformNode<T>, typeof UniformNode<T>>
export type VarNodeProps = Node<VarNode, typeof VarNode>
export type VaryingNodeProps = Node<VaryingNode, typeof VaryingNode>

//node_modules\@types\three\examples\jsm\nodes\display
import AfterImageNode from 'three/examples/jsm/nodes/display/AfterImageNode'
import AnamorphicNode from 'three/examples/jsm/nodes/display/AnamorphicNode'
import BlendModeNode from 'three/examples/jsm/nodes/display/BlendModeNode'
import ColorAdjustmentNode from 'three/examples/jsm/nodes/display/ColorAdjustmentNode'
import ColorSpaceNode from 'three/examples/jsm/nodes/display/ColorSpaceNode'
import FrontFacingNode from 'three/examples/jsm/nodes/display/FrontFacingNode'
import GaussianBlurNode from 'three/examples/jsm/nodes/display/GaussianBlurNode'
import NormalMapNode from 'three/examples/jsm/nodes/display/NormalMapNode'
import PassNode from 'three/examples/jsm/nodes/display/PassNode'
import PosterizeNode from 'three/examples/jsm/nodes/display/PosterizeNode'
import ToneMappingNode from 'three/examples/jsm/nodes/display/ToneMappingNode'
import ViewportDepthNode from 'three/examples/jsm/nodes/display/ViewportDepthNode'
import ViewportDepthTextureNode from 'three/examples/jsm/nodes/display/ViewportDepthTextureNode'
import ViewportNode from 'three/examples/jsm/nodes/display/ViewportNode'
import ViewportSharedTextureNode from 'three/examples/jsm/nodes/display/ViewportSharedTextureNode'
import ViewportTextureNode from 'three/examples/jsm/nodes/display/ViewportTextureNode'

export type AfterImageNodeProps = Node<AfterImageNode, typeof AfterImageNode>
export type AnamorphicNodeProps = Node<AnamorphicNode, typeof AnamorphicNode>
export type BlendModeNodeProps = Node<BlendModeNode, typeof BlendModeNode>
export type ColorAdjustmentNodeProps = Node<ColorAdjustmentNode, typeof ColorAdjustmentNode>
export type ColorSpaceNodeProps = Node<ColorSpaceNode, typeof ColorSpaceNode>
export type FrontFacingNodeProps = Node<FrontFacingNode, typeof FrontFacingNode>
export type GaussianBlurNodeProps = Node<GaussianBlurNode, typeof GaussianBlurNode>
export type NormalMapNodeProps = Node<NormalMapNode, typeof NormalMapNode>
export type PassNodeProps = Node<PassNode, typeof PassNode>
export type PosterizeNodeProps = Node<PosterizeNode, typeof PosterizeNode>
export type ToneMappingNodeProps = Node<ToneMappingNode, typeof ToneMappingNode>
export type ViewportDepthNodeProps = Node<ViewportDepthNode, typeof ViewportDepthNode>
export type ViewportDepthTextureNodeProps = Node<ViewportDepthTextureNode, typeof ViewportDepthTextureNode>
export type ViewportNodeProps = Node<ViewportNode, typeof ViewportNode>
export type ViewportSharedTextureNodeProps = Node<ViewportSharedTextureNode, typeof ViewportSharedTextureNode>
export type ViewportTextureNodeProps = Node<ViewportTextureNode, typeof ViewportTextureNode>

//node_modules\@types\three\examples\jsm\nodes\fog
import FogExp2Node from 'three/examples/jsm/nodes/fog/FogExp2Node'
import FogNode from 'three/examples/jsm/nodes/fog/FogNode'
import FogRangeNode from 'three/examples/jsm/nodes/fog/FogRangeNode'

export type FogExp2NodeProps = Node<FogExp2Node, typeof FogExp2Node>
export type FogNodeProps = Node<FogNode, typeof FogNode>
export type FogRangeNodeProps = Node<FogRangeNode, typeof FogRangeNode>

//node_modules\@types\three\examples\jsm\nodes\functions
import PhongLightingModel from 'three/examples/jsm/nodes/functions/PhongLightingModel'
import PhysicalLightingModel from 'three/examples/jsm/nodes/functions/PhysicalLightingModel'
import ShadowMaskModel from 'three/examples/jsm/nodes/functions/ShadowMaskModel'

export type PhongLightingModelProps = Node<PhongLightingModel, typeof PhongLightingModel>
export type PhysicalLightingModelProps = Node<PhysicalLightingModel, typeof PhysicalLightingModel>
export type ShadowMaskModelProps = Node<ShadowMaskModel, typeof ShadowMaskModel>

//node_modules\@types\three\examples\jsm\nodes\functions\BSDF
// import BRDF_GGX from 'three/examples/jsm/nodes/functions/BSDF/BRDF_GGX'
// import BRDF_Lambert from 'three/examples/jsm/nodes/functions/BSDF/BRDF_Lambert'
// import BRDF_Sheen from 'three/examples/jsm/nodes/functions/BSDF/BRDF_Sheen'
// import DFGApprox from 'three/examples/jsm/nodes/functions/BSDF/DFGApprox'
// import D_GGX from 'three/examples/jsm/nodes/functions/BSDF/D_GGX'
// import D_GGX_Anisotropic from 'three/examples/jsm/nodes/functions/BSDF/D_GGX_Anisotropic'
// import F_Schlick from 'three/examples/jsm/nodes/functions/BSDF/F_Schlick'
// import V_GGX_SmithCorrelated from 'three/examples/jsm/nodes/functions/BSDF/V_GGX_SmithCorrelated'
// import V_GGX_SmithCorrelated_Anisotropic from 'three/examples/jsm/nodes/functions/BSDF/V_GGX_SmithCorrelated_Anisotropic'

// export type BRDF_GGXProps = Node<BRDF_GGX, typeof BRDF_GGX>
// export type BRDF_LambertProps = Node<BRDF_Lambert, typeof BRDF_Lambert>
// export type BRDF_SheenProps = Node<BRDF_Sheen, typeof BRDF_Sheen>
// export type DFGApproxProps = Node<DFGApprox, typeof DFGApprox>
// export type D_GGXProps = Node<D_GGX, typeof D_GGX>
// export type D_GGX_AnisotropicProps = Node<D_GGX_Anisotropic, typeof D_GGX_Anisotropic>
// export type F_SchlickProps = Node<F_Schlick, typeof F_Schlick>
// export type V_GGX_SmithCorrelatedProps = Node<V_GGX_SmithCorrelated, typeof V_GGX_SmithCorrelated>
// export type V_GGX_SmithCorrelated_AnisotropicProps = Node<V_GGX_SmithCorrelated_Anisotropic, typeof V_GGX_SmithCorrelated_Anisotropic>

//node_modules\@types\three\examples\jsm\nodes\functions\material
// import getGeometryRoughness from 'three/examples/jsm/nodes/functions/material/getGeometryRoughness'
// import getRoughness from 'three/examples/jsm/nodes/functions/material/getRoughness'

// getGeometryRoughness
// getRoughness

//node_modules\@types\three\examples\jsm\nodes\geometry
import RangeNode from 'three/examples/jsm/nodes/geometry/RangeNode'

export type RangeNodeProps = Node<RangeNode, typeof RangeNode>

//node_modules\@types\three\examples\jsm\nodes\gpgpu
import ComputeNode from 'three/examples/jsm/nodes/gpgpu/ComputeNode'

export type ComputeNodeProps = Node<ComputeNode, typeof ComputeNode>

//node_modules\@types\three\examples\jsm\nodes\lighting
import AnalyticLightNode from 'three/examples/jsm/nodes/lighting/AnalyticLightNode'
import AONode from 'three/examples/jsm/nodes/lighting/AONode'
import EnvironmentNode from 'three/examples/jsm/nodes/lighting/EnvironmentNode'
import HemisphereLightNode from 'three/examples/jsm/nodes/lighting/HemisphereLightNode'
import IrradianceNode from 'three/examples/jsm/nodes/lighting/IrradianceNode'
import LightingContextNode from 'three/examples/jsm/nodes/lighting/LightingContextNode'
import LightingNode from 'three/examples/jsm/nodes/lighting/LightingNode'
import LightsNode from 'three/examples/jsm/nodes/lighting/LightsNode'
// import LightUtils from 'three/examples/jsm/nodes/lighting/LightUtils'
import PointLightNode from 'three/examples/jsm/nodes/lighting/PointLightNode'
import SpotLightNode from 'three/examples/jsm/nodes/lighting/SpotLightNode'

export type AnalyticLightNodeProps<T extends THREE.Light> = Node<AnalyticLightNode<T>, typeof AnalyticLightNode<T>>
export type AONodeProps = Node<AONode, typeof AONode>
export type EnvironmentNodeProps = Node<EnvironmentNode, typeof EnvironmentNode>
export type HemisphereLightNodeProps = Node<HemisphereLightNode, typeof HemisphereLightNode>
export type IrradianceNodeProps = Node<IrradianceNode, typeof IrradianceNode>
export type LightingContextNodeProps = Node<LightingContextNode, typeof LightingContextNode>
export type LightingNodeProps = Node<LightingNode, typeof LightingNode>
export type LightsNodeProps = Node<LightsNode, typeof LightsNode>
// export type LightUtilsProps = Node<LightUtils, typeof LightUtils>
export type PointLightNodeProps = Node<PointLightNode, typeof PointLightNode>
export type SpotLightNodeProps = Node<SpotLightNode, typeof SpotLightNode>

//node_modules\@types\three\examples\jsm\nodes\loaders
import NodeLoader from 'three/examples/jsm/nodes/loaders/NodeLoader'
import NodeMaterialLoader from 'three/examples/jsm/nodes/loaders/NodeMaterialLoader'
import NodeObjectLoader from 'three/examples/jsm/nodes/loaders/NodeObjectLoader'

export type NodeLoaderProps = Node<NodeLoader, typeof NodeLoader>
export type NodeMaterialLoaderProps = Node<NodeMaterialLoader, typeof NodeMaterialLoader>
export type NodeObjectLoaderProps = Node<NodeObjectLoader, typeof NodeObjectLoader>

//node_modules\@types\three\examples\jsm\nodes\materials
import LineBasicNodeMaterial from 'three/examples/jsm/nodes/materials/LineBasicNodeMaterial'
// import Materials from 'three/examples/jsm/nodes/materials/Materials'
import MeshBasicNodeMaterial from 'three/examples/jsm/nodes/materials/MeshBasicNodeMaterial'
import MeshNormalNodeMaterial from 'three/examples/jsm/nodes/materials/MeshNormalNodeMaterial'
import MeshPhongNodeMaterial from 'three/examples/jsm/nodes/materials/MeshPhongNodeMaterial'
import MeshPhysicalNodeMaterial from 'three/examples/jsm/nodes/materials/MeshPhysicalNodeMaterial'
import MeshSSSNodeMaterial from 'three/examples/jsm/nodes/materials/MeshSSSNodeMaterial'
import MeshStandardNodeMaterial from 'three/examples/jsm/nodes/materials/MeshStandardNodeMaterial'
import NodeMaterial from 'three/examples/jsm/nodes/materials/NodeMaterial'
import PointsNodeMaterial from 'three/examples/jsm/nodes/materials/PointsNodeMaterial'
import ShadowNodeMaterial from 'three/examples/jsm/nodes/materials/ShadowNodeMaterial'
import SpriteNodeMaterial from 'three/examples/jsm/nodes/materials/SpriteNodeMaterial'

export type LineBasicNodeMaterialProps = MaterialNode<LineBasicNodeMaterial, typeof LineBasicNodeMaterial>
// export type MaterialsProps = Node<Materials, typeof Materials>
export type MeshBasicNodeMaterialProps = MaterialNode<MeshBasicNodeMaterial, typeof MeshBasicNodeMaterial>
export type MeshNormalNodeMaterialProps = MaterialNode<MeshNormalNodeMaterial, typeof MeshNormalNodeMaterial>
export type MeshPhongNodeMaterialProps = MaterialNode<MeshPhongNodeMaterial, typeof MeshPhongNodeMaterial>
export type MeshPhysicalNodeMaterialProps = MaterialNode<MeshPhysicalNodeMaterial, typeof MeshPhysicalNodeMaterial>
export type MeshSSSNodeMaterialProps = MaterialNode<MeshSSSNodeMaterial, typeof MeshSSSNodeMaterial>
export type MeshStandardNodeMaterialProps = MaterialNode<MeshStandardNodeMaterial, typeof MeshStandardNodeMaterial>
export type NodeMaterialProps = MaterialNode<NodeMaterial, typeof NodeMaterial>
export type PointsNodeMaterialProps = MaterialNode<PointsNodeMaterial, typeof PointsNodeMaterial>
export type ShadowNodeMaterialProps = MaterialNode<ShadowNodeMaterial, typeof ShadowNodeMaterial>
export type SpriteNodeMaterialProps = MaterialNode<SpriteNodeMaterial, typeof SpriteNodeMaterial>

//node_modules\@types\three\examples\jsm\nodes\materialx
// import MaterialXNodes from 'three/examples/jsm/nodes/materialx/MaterialXNodes'

// export type MaterialXNodesProps = Node<MaterialXNodes, typeof MaterialXNodes>

//node_modules\@types\three\examples\jsm\nodes\materialx\lib
// mx_hsv
// mx_noise
// mx_transform_color

//node_modules\@types\three\examples\jsm\nodes\math
import CondNode from 'three/examples/jsm/nodes/math/CondNode'
import HashNode from 'three/examples/jsm/nodes/math/HashNode'
import MathNode from 'three/examples/jsm/nodes/math/MathNode'
// import MathUtils from 'three/examples/jsm/nodes/math/MathUtils'
import OperatorNode from 'three/examples/jsm/nodes/math/OperatorNode'
// import TriNoise3D from 'three/examples/jsm/nodes/math/TriNoise3D'

export type CondNodeProps = Node<CondNode, typeof CondNode>
export type HashNodeProps = Node<HashNode, typeof HashNode>
export type MathNodeProps = Node<MathNode, typeof MathNode>
// export type MathUtilsProps = Node<MathUtils, typeof MathUtils>
export type OperatorNodeProps = Node<OperatorNode, typeof OperatorNode>
// export type TriNoise3DProps = Node<TriNoise3D, typeof TriNoise3D>

//node_modules\@types\three\examples\jsm\nodes\pmrem
import PMREMNode from 'three/examples/jsm/nodes/pmrem/PMREMNode'

export type PMREMNodeProps = Node<PMREMNode, typeof PMREMNode>

//node_modules\@types\three\examples\jsm\nodes\procedural
import CheckerNode from 'three/examples/jsm/nodes/procedural/CheckerNode'

export type CheckerNodeProps = Node<CheckerNode, typeof CheckerNode>

//node_modules\@types\three\examples\jsm\nodes\shadernode
// import ShaderNode from 'three/examples/jsm/nodes/shadernode/ShaderNode'

// export type ShaderNodeProps = Node<ShaderNode, typeof ShaderNode>
// export type MathNodeProps = Node<ShaderNode, typeof ShaderNode>

//node_modules\@types\three\examples\jsm\nodes\utils
import ArrayElementNode from 'three/examples/jsm/nodes/utils/ArrayElementNode'
import ConvertNode from 'three/examples/jsm/nodes/utils/ConvertNode'
import DiscardNode from 'three/examples/jsm/nodes/utils/DiscardNode'
import EquirectUVNode from 'three/examples/jsm/nodes/utils/EquirectUVNode'
import JoinNode from 'three/examples/jsm/nodes/utils/JoinNode'
import MatcapUVNode from 'three/examples/jsm/nodes/utils/MatcapUVNode'
import MaxMipLevelNode from 'three/examples/jsm/nodes/utils/MaxMipLevelNode'
import OscNode from 'three/examples/jsm/nodes/utils/OscNode'
import ReflectorNode from 'three/examples/jsm/nodes/utils/ReflectorNode'
import RemapNode from 'three/examples/jsm/nodes/utils/RemapNode'
import RotateNode from 'three/examples/jsm/nodes/utils/RotateNode'
import RotateUVNode from 'three/examples/jsm/nodes/utils/RotateUVNode'
import SplitNode from 'three/examples/jsm/nodes/utils/SplitNode'
import SpriteSheetUVNode from 'three/examples/jsm/nodes/utils/SpriteSheetUVNode'
import StoargeArrayElementNode from 'three/examples/jsm/nodes/utils/StoargeArrayElementNode'
import TimerNode from 'three/examples/jsm/nodes/utils/TimerNode'
import TriplanarTexturesNode from 'three/examples/jsm/nodes/utils/TriplanarTexturesNode'

export type ArrayElementNodeProps = Node<ArrayElementNode, typeof ArrayElementNode>
export type ConvertNodeProps = Node<ConvertNode, typeof ConvertNode>
export type DiscardNodeProps = Node<DiscardNode, typeof DiscardNode>
export type EquirectUVNodeProps = Node<EquirectUVNode, typeof EquirectUVNode>
export type JoinNodeProps = Node<JoinNode, typeof JoinNode>
export type MatcapUVNodeProps = Node<MatcapUVNode, typeof MatcapUVNode>
export type MaxMipLevelNodeProps = Node<MaxMipLevelNode, typeof MaxMipLevelNode>
export type OscNodeProps = Node<OscNode, typeof OscNode>
export type ReflectorNodeProps = Node<ReflectorNode, typeof ReflectorNode>
export type RemapNodeProps = Node<RemapNode, typeof RemapNode>
export type RotateNodeProps = Node<RotateNode, typeof RotateNode>
export type RotateUVNodeProps = Node<RotateUVNode, typeof RotateUVNode>
export type SplitNodeProps = Node<SplitNode, typeof SplitNode>
export type SpriteSheetUVNodeProps = Node<SpriteSheetUVNode, typeof SpriteSheetUVNode>
export type StoargeArrayElementNodeProps = Node<StoargeArrayElementNode, typeof StoargeArrayElementNode>
export type TimerNodeProps = Node<TimerNode, typeof TimerNode>
export type TriplanarTexturesNodeProps = Node<TriplanarTexturesNode, typeof TriplanarTexturesNode>

//node_modules\@types\three\examples\jsm\objects
import { type GroundedSkybox } from 'three/examples/jsm/objects/GroundedSkybox'
import { type Lensflare } from 'three/examples/jsm/objects/Lensflare'
import { type MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes'
import QuadMesh from 'three/examples/jsm/objects/QuadMesh'
import { type Reflector } from 'three/examples/jsm/objects/Reflector'
import { type ReflectorForSSRPass } from 'three/examples/jsm/objects/ReflectorForSSRPass'
import { type Refractor } from 'three/examples/jsm/objects/Refractor'
import { type ShadowMesh } from 'three/examples/jsm/objects/ShadowMesh'
import { type Sky } from 'three/examples/jsm/objects/Sky'
import { type Water } from 'three/examples/jsm/objects/Water'
import { type Water as Water2 } from 'three/examples/jsm/objects/Water2'

export type GroundedSkyboxProps = Node<GroundedSkybox, typeof GroundedSkybox>
export type LensflareProps = Node<Lensflare, typeof Lensflare>
export type MarchingCubesProps = Node<MarchingCubes, typeof MarchingCubes>
export type QuadMeshProps = Node<QuadMesh, typeof QuadMesh>
export type ReflectorProps = Node<Reflector, typeof Reflector>
export type ReflectorForSSRPassProps = Node<ReflectorForSSRPass, typeof ReflectorForSSRPass>
export type RefractorProps = Node<Refractor, typeof Refractor>
export type ShadowMeshProps = Node<ShadowMesh, typeof ShadowMesh>
export type SkyProps = Node<Sky, typeof Sky>
export type WaterProps = Node<Water, typeof Water>
export type Water2Props = Node<Water2, typeof Water2>

//node_modules\@types\three\examples\jsm\physics
// import { type AmmoPhysics } from 'three/examples/jsm/physics/AmmoPhysics'
// import { type JoltPhysics } from 'three/examples/jsm/physics/JoltPhysics'
// import RapierPhysics from 'three/examples/jsm/physics/RapierPhysics'

// export type AmmoPhysicsProps = Node<AmmoPhysics, typeof AmmoPhysics>
// export type JoltPhysicsProps = Node<JoltPhysics, typeof JoltPhysics>
// export type RapierPhysicsProps = Node<RapierPhysics, typeof RapierPhysics>

//node_modules\@types\three\examples\jsm\postprocessing
import { type AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'
import { type BloomPass } from 'three/examples/jsm/postprocessing/BloomPass'
import { type BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'
import { type ClearPass } from 'three/examples/jsm/postprocessing/ClearPass'
import { type CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass'
import { type DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass'
import { type EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { type FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { type GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
import { type GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass'
import { type HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass'
import { type LUTPass } from 'three/examples/jsm/postprocessing/LUTPass'
import { type MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass'
import { type OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
import { type OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { type Pass } from 'three/examples/jsm/postprocessing/Pass'
import { type RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { type RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass'
import { type RenderTransitionPass } from 'three/examples/jsm/postprocessing/RenderTransitionPass'
import { type SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
import { type SavePass } from 'three/examples/jsm/postprocessing/SavePass'
import { type ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { type SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass'
import { type SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass'
import { type SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass'
import { type SSRPass } from 'three/examples/jsm/postprocessing/SSRPass'
import { type TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass'
import { type TexturePass } from 'three/examples/jsm/postprocessing/TexturePass'
import { type UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

export type AfterimagePassProps = Node<AfterimagePass, typeof AfterimagePass>
export type BloomPassProps = Node<BloomPass, typeof BloomPass>
export type BokehPassProps = Node<BokehPass, typeof BokehPass>
export type ClearPassProps = Node<ClearPass, typeof ClearPass>
export type CubeTexturePassProps = Node<CubeTexturePass, typeof CubeTexturePass>
export type DotScreenPassProps = Node<DotScreenPass, typeof DotScreenPass>
export type EffectComposerProps = Node<EffectComposer, typeof EffectComposer>
export type FilmPassProps = Node<FilmPass, typeof FilmPass>
export type GlitchPassProps = Node<GlitchPass, typeof GlitchPass>
export type GTAOPassProps = Node<GTAOPass, typeof GTAOPass>
export type HalftonePassProps = Node<HalftonePass, typeof HalftonePass>
export type LUTPassProps = Node<LUTPass, typeof LUTPass>
export type MaskPassProps = Node<MaskPass, typeof MaskPass>
export type ClearMaskPassProps = Node<ClearMaskPass, typeof ClearMaskPass>
export type OutlinePassProps = Node<OutlinePass, typeof OutlinePass>
export type OutputPassProps = Node<OutputPass, typeof OutputPass>
export type PassProps = Node<Pass, typeof Pass>
export type RenderPassProps = Node<RenderPass, typeof RenderPass>
export type RenderPixelatedPassProps = Node<RenderPixelatedPass, typeof RenderPixelatedPass>
export type RenderTransitionPassProps = Node<RenderTransitionPass, typeof RenderTransitionPass>
export type SAOPassProps = Node<SAOPass, typeof SAOPass>
export type SavePassProps = Node<SavePass, typeof SavePass>
export type ShaderPassProps = Node<ShaderPass, typeof ShaderPass>
export type SMAAPassProps = Node<SMAAPass, typeof SMAAPass>
export type SSAARenderPassProps = Node<SSAARenderPass, typeof SSAARenderPass>
export type SSAOPassProps = Node<SSAOPass, typeof SSAOPass>
export type SSRPassProps = Node<SSRPass, typeof SSRPass>
export type TAARenderPassProps = Node<TAARenderPass, typeof TAARenderPass>
export type TexturePassProps = Node<TexturePass, typeof TexturePass>
export type UnrealBloomPassProps = Node<UnrealBloomPass, typeof UnrealBloomPass>

//node_modules\@types\three\examples\jsm\renderers
import { type CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { type CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { type Projector } from 'three/examples/jsm/renderers/Projector'
import { type SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer'

export type CSS2DRendererProps = Node<CSS2DRenderer, typeof CSS2DRenderer>
export type CSS3DRendererProps = Node<CSS3DRenderer, typeof CSS3DRenderer>
export type ProjectorProps = Node<Projector, typeof Projector>
export type SVGRendererProps = Node<SVGRenderer, typeof SVGRenderer>

//node_modules\@types\three\examples\jsm\renderers\common
import Backend from 'three/examples/jsm/renderers/common/Backend'
import Color4 from 'three/examples/jsm/renderers/common/Color4'
import Info from 'three/examples/jsm/renderers/common/Info'
import PostProcessing from 'three/examples/jsm/renderers/common/PostProcessing'
import Renderer from 'three/examples/jsm/renderers/common/Renderer'
import StorageTexture from 'three/examples/jsm/renderers/common/StorageTexture'

export type BackendProps = Node<Backend, typeof Backend>
export type Color4Props = Node<Color4, typeof Color4>
export type InfoProps = Node<Info, typeof Info>
export type PostProcessingProps = Node<PostProcessing, typeof PostProcessing>
export type RendererProps = Node<Renderer, typeof Renderer>
export type StorageTextureProps = Node<StorageTexture, typeof StorageTexture>

//node_modules\@types\three\examples\jsm\renderers\common\extras
import PMREMGenerator from 'three/examples/jsm/renderers/common/extras/PMREMGenerator'

export type PMREMGeneratorProps = Node<PMREMGenerator, typeof PMREMGenerator>

//node_modules\@types\three\examples\jsm\renderers\webgl
import WebGLBackend from 'three/examples/jsm/renderers/webgl/WebGLBackend'

export type WebGLBackendProps = Node<WebGLBackend, typeof WebGLBackend>

//node_modules\@types\three\examples\jsm\renderers\webgl\nodes
import SlotNode from 'three/examples/jsm/renderers/webgl/nodes/SlotNode'
import { type WebGLNodeBuilder } from 'three/examples/jsm/renderers/webgl/nodes/WebGLNodeBuilder'
// import { type WebGLNodes } from 'three/examples/jsm/renderers/webgl/nodes/WebGLNodes'

export type SlotNodeProps = Node<SlotNode, typeof SlotNode>
export type WebGLNodeBuilderProps = Node<WebGLNodeBuilder, typeof WebGLNodeBuilder>
// export type WebGLNodesProps = Node<WebGLNodes, typeof WebGLNodes>

//node_modules\@types\three\examples\jsm\renderers\webgpu
import WebGPUBackend from 'three/examples/jsm/renderers/webgpu/WebGPUBackend'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'

export type WebGPUBackendProps = Node<WebGPUBackend, typeof WebGPUBackend>
export type WebGPURendererProps = Node<WebGPURenderer, typeof WebGPURenderer>

//node_modules\@types\three\examples\jsm\shaders
// import ACESFilmicToneMappingShader from 'three/examples/jsm/shaders/ACESFilmicToneMappingShader'
// import AfterimageShader from 'three/examples/jsm/shaders/AfterimageShader'
// import BasicShader from 'three/examples/jsm/shaders/BasicShader'
// import BleachBypassShader from 'three/examples/jsm/shaders/BleachBypassShader'
// import BlendShader from 'three/examples/jsm/shaders/BlendShader'
// import BokehShader from 'three/examples/jsm/shaders/BokehShader'
// import BokehShader2 from 'three/examples/jsm/shaders/BokehShader2'
// import BrightnessContrastShader from 'three/examples/jsm/shaders/BrightnessContrastShader'
// import ColorCorrectionShader from 'three/examples/jsm/shaders/ColorCorrectionShader'
// import ColorifyShader from 'three/examples/jsm/shaders/ColorifyShader'
// import ConvolutionShader from 'three/examples/jsm/shaders/ConvolutionShader'
// import CopyShader from 'three/examples/jsm/shaders/CopyShader'
// import DepthLimitedBlurShader from 'three/examples/jsm/shaders/DepthLimitedBlurShader'
// import DigitalGlitch from 'three/examples/jsm/shaders/DigitalGlitch'
// import DOFMipMapShader from 'three/examples/jsm/shaders/DOFMipMapShader'
// import DotScreenShader from 'three/examples/jsm/shaders/DotScreenShader'
// import ExposureShader from 'three/examples/jsm/shaders/ExposureShader'
// import FilmShader from 'three/examples/jsm/shaders/FilmShader'
// import FocusShader from 'three/examples/jsm/shaders/FocusShader'
// import FreiChenShader from 'three/examples/jsm/shaders/FreiChenShader'
// import FXAAShader from 'three/examples/jsm/shaders/FXAAShader'
// import GammaCorrectionShader from 'three/examples/jsm/shaders/GammaCorrectionShader'
// import GodRaysShader from 'three/examples/jsm/shaders/GodRaysShader'
// import GTAOShader from 'three/examples/jsm/shaders/GTAOShader'
// import HalftoneShader from 'three/examples/jsm/shaders/HalftoneShader'
// import HorizontalBlurShader from 'three/examples/jsm/shaders/HorizontalBlurShader'
// import HorizontalTiltShiftShader from 'three/examples/jsm/shaders/HorizontalTiltShiftShader'
// import HueSaturationShader from 'three/examples/jsm/shaders/HueSaturationShader'
// import KaleidoShader from 'three/examples/jsm/shaders/KaleidoShader'
// import LuminosityHighPassShader from 'three/examples/jsm/shaders/LuminosityHighPassShader'
// import LuminosityShader from 'three/examples/jsm/shaders/LuminosityShader'
// import MirrorShader from 'three/examples/jsm/shaders/MirrorShader'
// import MMDToonShader from 'three/examples/jsm/shaders/MMDToonShader'
// import NormalMapShader from 'three/examples/jsm/shaders/NormalMapShader'
// import OutputShader from 'three/examples/jsm/shaders/OutputShader'
// import PoissonDenoiseShader from 'three/examples/jsm/shaders/PoissonDenoiseShader'
// import RGBShiftShader from 'three/examples/jsm/shaders/RGBShiftShader'
// import SAOShader from 'three/examples/jsm/shaders/SAOShader'
// import SepiaShader from 'three/examples/jsm/shaders/SepiaShader'
// import SMAAShader from 'three/examples/jsm/shaders/SMAAShader'
// import SobelOperatorShader from 'three/examples/jsm/shaders/SobelOperatorShader'
// import SSAOShader from 'three/examples/jsm/shaders/SSAOShader'
// import SSRShader from 'three/examples/jsm/shaders/SSRShader'
// import SubsurfaceScatteringShader from 'three/examples/jsm/shaders/SubsurfaceScatteringShader'
// import TechnicolorShader from 'three/examples/jsm/shaders/TechnicolorShader'
// import ToonShader from 'three/examples/jsm/shaders/ToonShader'
// import TriangleBlurShader from 'three/examples/jsm/shaders/TriangleBlurShader'
// import UnpackDepthRGBAShader from 'three/examples/jsm/shaders/UnpackDepthRGBAShader'
// import VelocityShader from 'three/examples/jsm/shaders/VelocityShader'
// import VerticalBlurShader from 'three/examples/jsm/shaders/VerticalBlurShader'
// import VerticalTiltShiftShader from 'three/examples/jsm/shaders/VerticalTiltShiftShader'
// import VignetteShader from 'three/examples/jsm/shaders/VignetteShader'
// import VolumeShader from 'three/examples/jsm/shaders/VolumeShader'
// import WaterRefractionShader from 'three/examples/jsm/shaders/WaterRefractionShader'

// export type ACESFilmicToneMappingShaderProps = Node<ACESFilmicToneMappingShader, typeof ACESFilmicToneMappingShader>
// export type AfterimageShaderProps = Node<AfterimageShader, typeof AfterimageShader>
// export type BasicShaderProps = Node<BasicShader, typeof BasicShader>
// export type BleachBypassShaderProps = Node<BleachBypassShader, typeof BleachBypassShader>
// export type BlendShaderProps = Node<BlendShader, typeof BlendShader>
// export type BokehShaderProps = Node<BokehShader, typeof BokehShader>
// export type BokehShader2Props = Node<BokehShader2, typeof BokehShader2>
// export type BrightnessContrastShaderProps = Node<BrightnessContrastShader, typeof BrightnessContrastShader>
// export type ColorCorrectionShaderProps = Node<ColorCorrectionShader, typeof ColorCorrectionShader>
// export type ColorifyShaderProps = Node<ColorifyShader, typeof ColorifyShader>
// export type ConvolutionShaderProps = Node<ConvolutionShader, typeof ConvolutionShader>
// export type CopyShaderProps = Node<CopyShader, typeof CopyShader>
// export type DepthLimitedBlurShaderProps = Node<DepthLimitedBlurShader, typeof DepthLimitedBlurShader>
// export type DigitalGlitchProps = Node<DigitalGlitch, typeof DigitalGlitch>
// export type DOFMipMapShaderProps = Node<DOFMipMapShader, typeof DOFMipMapShader>
// export type DotScreenShaderProps = Node<DotScreenShader, typeof DotScreenShader>
// export type ExposureShaderProps = Node<ExposureShader, typeof ExposureShader>
// export type FilmShaderProps = Node<FilmShader, typeof FilmShader>
// export type FocusShaderProps = Node<FocusShader, typeof FocusShader>
// export type FreiChenShaderProps = Node<FreiChenShader, typeof FreiChenShader>
// export type FXAAShaderProps = Node<FXAAShader, typeof FXAAShader>
// export type GammaCorrectionShaderProps = Node<GammaCorrectionShader, typeof GammaCorrectionShader>
// export type GodRaysShaderProps = Node<GodRaysShader, typeof GodRaysShader>
// export type GTAOShaderProps = Node<GTAOShader, typeof GTAOShader>
// export type HalftoneShaderProps = Node<HalftoneShader, typeof HalftoneShader>
// export type HorizontalBlurShaderProps = Node<HorizontalBlurShader, typeof HorizontalBlurShader>
// export type HorizontalTiltShiftShaderProps = Node<HorizontalTiltShiftShader, typeof HorizontalTiltShiftShader>
// export type HueSaturationShaderProps = Node<HueSaturationShader, typeof HueSaturationShader>
// export type KaleidoShaderProps = Node<KaleidoShader, typeof KaleidoShader>
// export type LuminosityHighPassShaderProps = Node<LuminosityHighPassShader, typeof LuminosityHighPassShader>
// export type LuminosityShaderProps = Node<LuminosityShader, typeof LuminosityShader>
// export type MirrorShaderProps = Node<MirrorShader, typeof MirrorShader>
// export type MMDToonShaderProps = Node<MMDToonShader, typeof MMDToonShader>
// export type NormalMapShaderProps = Node<NormalMapShader, typeof NormalMapShader>
// export type OutputShaderProps = Node<OutputShader, typeof OutputShader>
// export type PoissonDenoiseShaderProps = Node<PoissonDenoiseShader, typeof PoissonDenoiseShader>
// export type RGBShiftShaderProps = Node<RGBShiftShader, typeof RGBShiftShader>
// export type SAOShaderProps = Node<SAOShader, typeof SAOShader>
// export type SepiaShaderProps = Node<SepiaShader, typeof SepiaShader>
// export type SMAAShaderProps = Node<SMAAShader, typeof SMAAShader>
// export type SobelOperatorShaderProps = Node<SobelOperatorShader, typeof SobelOperatorShader>
// export type SSAOShaderProps = Node<SSAOShader, typeof SSAOShader>
// export type SSRShaderProps = Node<SSRShader, typeof SSRShader>
// export type SubsurfaceScatteringShaderProps = Node<SubsurfaceScatteringShader, typeof SubsurfaceScatteringShader>
// export type TechnicolorShaderProps = Node<TechnicolorShader, typeof TechnicolorShader>
// export type ToonShaderProps = Node<ToonShader, typeof ToonShader>
// export type TriangleBlurShaderProps = Node<TriangleBlurShader, typeof TriangleBlurShader>
// export type UnpackDepthRGBAShaderProps = Node<UnpackDepthRGBAShader, typeof UnpackDepthRGBAShader>
// export type VelocityShaderProps = Node<VelocityShader, typeof VelocityShader>
// export type VerticalBlurShaderProps = Node<VerticalBlurShader, typeof VerticalBlurShader>
// export type VerticalTiltShiftShaderProps = Node<VerticalTiltShiftShader, typeof VerticalTiltShiftShader>
// export type VignetteShaderProps = Node<VignetteShader, typeof VignetteShader>
// export type VolumeShaderProps = Node<VolumeShader, typeof VolumeShader>
// export type WaterRefractionShaderProps = Node<WaterRefractionShader, typeof WaterRefractionShader>

//node_modules\@types\three\examples\jsm\textures
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture'

export type FlakesTextureProps = Node<FlakesTexture, typeof FlakesTexture>

//node_modules\@types\three\examples\jsm\transpiler
// import AST from 'three/examples/jsm/transpiler/AST'
import GLSLDecoder from 'three/examples/jsm/transpiler/GLSLDecoder'
import ShaderToyDecoder from 'three/examples/jsm/transpiler/ShaderToyDecoder'
import Transpiler from 'three/examples/jsm/transpiler/Transpiler'
import TSLEncoder from 'three/examples/jsm/transpiler/TSLEncoder'

// export type ASTType = Node<AST, typeof AST>
export type GLSLDecoderProps = Node<GLSLDecoder, typeof GLSLDecoder>
export type ShaderToyDecoderProps = Node<ShaderToyDecoder, typeof ShaderToyDecoder>
export type TranspilerProps<U, V> = Node<Transpiler<U, V>, typeof Transpiler<U, V>>
export type TSLEncoderProps = Node<TSLEncoder, typeof TSLEncoder>

//node_modules\@types\three\examples\jsm\utils
// import BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils'
// import CameraUtils from 'three/examples/jsm/utils/CameraUtils'
// import GeometryCompressionUtils from 'three/examples/jsm/utils/GeometryCompressionUtils'
// import GeometryUtils from 'three/examples/jsm/utils/GeometryUtils'
// import GPUStatsPanel from 'three/examples/jsm/utils/GPUStatsPanel'
// import LDrawUtils from 'three/examples/jsm/utils/LDrawUtils'
// import PackedPhongMaterial from 'three/examples/jsm/utils/PackedPhongMaterial'
// import SceneUtils from 'three/examples/jsm/utils/SceneUtils'
// import ShadowMapViewer from 'three/examples/jsm/utils/ShadowMapViewer'
// import SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils'
// import SortUtils from 'three/examples/jsm/utils/SortUtils'
// import TextureUtils from 'three/examples/jsm/utils/TextureUtils'
// import UVsDebug from 'three/examples/jsm/utils/UVsDebug'
// import WorkerPool from 'three/examples/jsm/utils/WorkerPool'

// export type BufferGeometryUtilsProps = Node<BufferGeometryUtils, typeof BufferGeometryUtils>
// export type CameraUtilsProps = Node<CameraUtils, typeof CameraUtils>
// export type GeometryCompressionUtilsProps = Node<GeometryCompressionUtils, typeof GeometryCompressionUtils>
// export type GeometryUtilsProps = Node<GeometryUtils, typeof GeometryUtils>
// export type GPUStatsPanelProps = Node<GPUStatsPanel, typeof GPUStatsPanel>
// export type LDrawUtilsProps = Node<LDrawUtils, typeof LDrawUtils>
// export type PackedPhongMaterialProps = Node<PackedPhongMaterial, typeof PackedPhongMaterial>
// export type SceneUtilsProps = Node<SceneUtils, typeof SceneUtils>
// export type ShadowMapViewerProps = Node<ShadowMapViewer, typeof ShadowMapViewer>
// export type SkeletonUtilsProps = Node<SkeletonUtils, typeof SkeletonUtils>
// export type SortUtilsProps = Node<SortUtils, typeof SortUtils>
// export type TextureUtilsProps = Node<TextureUtils, typeof TextureUtils>
// export type UVsDebugProps = Node<UVsDebug, typeof UVsDebug>
// export type WorkerPoolProps = Node<WorkerPool, typeof WorkerPool>

//node_modules\@types\three\examples\jsm\webxr
// import ARButton from 'three/examples/jsm/webxr/ARButton'
import { OculusHandModel } from 'three/examples/jsm/webxr/OculusHandModel'
import { OculusHandPointerModel } from 'three/examples/jsm/webxr/OculusHandPointerModel'
// import { Text2D } from 'three/examples/jsm/webxr/Text2D'
import { VRButton } from 'three/examples/jsm/webxr/VRButton'
import { XRButton } from 'three/examples/jsm/webxr/XRButton'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight'
import { XRHandMeshModel } from 'three/examples/jsm/webxr/XRHandMeshModel'
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory'
import { XRHandPrimitiveModel } from 'three/examples/jsm/webxr/XRHandPrimitiveModel'
import { XRPlanes } from 'three/examples/jsm/webxr/XRPlanes'

// export type ARButtonProps = Node<ARButton, typeof ARButton>
export type OculusHandModelProps = Node<OculusHandModel, typeof OculusHandModel>
export type OculusHandPointerModelProps = Node<OculusHandPointerModel, typeof OculusHandPointerModel>
// export type Text2DProps = Node<Text2D, typeof Text2D>
export type VRButtonProps = Node<VRButton, typeof VRButton>
export type XRButtonProps = Node<XRButton, typeof XRButton>
export type XRControllerModelFactoryProps = Node<XRControllerModelFactory, typeof XRControllerModelFactory>
export type XREstimatedLightProps = Node<XREstimatedLight, typeof XREstimatedLight>
export type XRHandMeshModelProps = Node<XRHandMeshModel, typeof XRHandMeshModel>
export type XRHandModelFactoryProps = Node<XRHandModelFactory, typeof XRHandModelFactory>
export type XRHandPrimitiveModelProps = Node<XRHandPrimitiveModel, typeof XRHandPrimitiveModel>
export type XRPlanesProps = Node<XRPlanes, typeof XRPlanes>


//Not in folder
export type PrimitiveProps = { object: object } & { [properties: string]: any }

export type Float16BufferAttributeProps = Node<THREE.Float16BufferAttribute, typeof THREE.Float16BufferAttribute>
export type Float32BufferAttributeProps = Node<THREE.Float32BufferAttribute, typeof THREE.Float32BufferAttribute>
// export type Float64BufferAttributeProps = Node<THREE.Float64BufferAttribute, typeof THREE.Float64BufferAttribute>
export type Int8BufferAttributeProps = Node<THREE.Int8BufferAttribute, typeof THREE.Int8BufferAttribute>
export type Int16BufferAttributeProps = Node<THREE.Int16BufferAttribute, typeof THREE.Int16BufferAttribute>
export type Int32BufferAttributeProps = Node<THREE.Int32BufferAttribute, typeof THREE.Int32BufferAttribute>
export type Uint8BufferAttributeProps = Node<THREE.Uint8BufferAttribute, typeof THREE.Uint8BufferAttribute>
export type Uint16BufferAttributeProps = Node<THREE.Uint16BufferAttribute, typeof THREE.Uint16BufferAttribute>
export type Uint32BufferAttributeProps = Node<THREE.Uint32BufferAttribute, typeof THREE.Uint32BufferAttribute>


declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            canvas3D: canvasProps
            // text: textGeometryProps,
            // textGeometry: TextGeometryProps
            gltf: GLTFProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation
            animationAction: AnimationActionProps,
            animationClip: AnimationClipProps,
            animationMixer: AnimationMixerProps,
            animationObjectGroup: AnimationObjectGroupProps,
            // AnimationUtilsProps
            keyframeTrack: KeyframeTrackProps,
            propertyBinding: PropertyBindingProps,
            propertyMixer: PropertyMixerProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\track
            vectorKeyframeTrack: VectorKeyframeTrackProps,
            booleanKeyframeTrack: BooleanKeyframeTrackProps,
            colorKeyframeTrack: ColorKeyframeTrackProps,
            numberKeyframeTrack: NumberKeyframeTrackProps,
            quaternionKeyframeTrack: QuaternionKeyframeTrackProps,
            stringKeyframeTrack: StringKeyframeTrackProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio
            // audio:AudioProps,
            //@ts-ignore
            audio: AudioProps,
            audioAnalyser: AudioAnalyserProps,
            // audioContext:AudioContextProps,
            // `audio` works but conflicts with @types/react. Try using PositionalAudio from @react-three/drei instead
            // audio: AudioProps
            audioListener: AudioListenerProps,
            positionalAudio: PositionalAudioProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras
            camera: CameraProps,
            perspectiveCamera: PerspectiveCameraProps,
            orthographicCamera: OrthographicCameraProps,
            cubeCamera: CubeCameraProps,
            arrayCamera: ArrayCameraProps,
            stereoCamera: StereoCameraProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core
            bufferAttribute: BufferAttributeProps,
            bufferGeometry: BufferGeometryProps,
            clock: ClockProps,
            eventDispatcher: EventDispatcherProps,
            glBufferAttribute: GLBufferAttributeProps,
            instancedBufferAttribute: InstancedBufferAttributeProps,
            instancedBufferGeometry: InstancedBufferGeometryProps,
            instancedInterleavedBuffer: InstancedInterleavedBufferProps,
            interleavedBuffer: InterleavedBufferProps,
            interleavedBufferAttribute: InterleavedBufferAttributeProps,
            // layers:LayersProps,
            object3D: Object3DProps,
            raycaster: RaycasterProps,
            renderTarget: RenderTargetProps,
            uniform: UniformProps,
            uniformsGroup: UniformsGroupProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core
            // curve:curveProps,
            curvePath: CurvePathProps<any>,
            // interpolations:InterpolationsProps,
            //@ts-ignore
            path: PathProps,
            shape: ShapeProps,
            shapePath: ShapePathProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves
            arcCurve: ArcCurveProps,
            catmullRomCurve3: CatmullRomCurve3Props,
            cubicBezierCurve: CubicBezierCurveProps,
            cubicBezierCurve3: CubicBezierCurve3Props,
            ellipseCurve: EllipseCurveProps,
            lineCurve: LineCurveProps,
            lineCurve3: LineCurve3Props,
            quadraticBezierCurve: QuadraticBezierCurveProps,
            quadraticBezierCurve3: QuadraticBezierCurve3Props,
            splineCurve: SplineCurveProps,

            // export type InstancedBufferGeometryProps = BufferGeometryNode<THREE.InstancedBufferGeometry, typeof THREE.InstancedBufferGeometry>
            // export type BufferGeometryProps = BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>
            // export type BoxBufferGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
            // export type CircleBufferGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
            // export type ConeBufferGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
            // export type CylinderBufferGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
            // export type DodecahedronBufferGeometryProps = BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
            // export type ExtrudeBufferGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
            // export type IcosahedronBufferGeometryProps = BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
            // export type LatheBufferGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
            // export type OctahedronBufferGeometryProps = BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
            // export type PlaneBufferGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
            // export type PolyhedronBufferGeometryProps = BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
            // export type RingBufferGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
            // export type ShapeBufferGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
            // export type SphereBufferGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
            // export type TetrahedronBufferGeometryProps = BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
            // export type TorusBufferGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
            // export type TorusKnotBufferGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
            // export type TubeBufferGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
            // export type WireframeGeometryProps = BufferGeometryNode<THREE.WireframeGeometry, typeof THREE.WireframeGeometry>
            // export type TetrahedronGeometryProps = BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
            // export type OctahedronGeometryProps = BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
            // export type IcosahedronGeometryProps = BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
            // export type DodecahedronGeometryProps = BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
            // export type PolyhedronGeometryProps = BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
            // export type TubeGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
            // export type TorusKnotGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
            // export type TorusGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
            // export type SphereGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
            // export type RingGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
            // export type PlaneGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
            // export type LatheGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
            // export type ShapeGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
            // export type ExtrudeGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
            // export type EdgesGeometryProps = BufferGeometryNode<THREE.EdgesGeometry, typeof THREE.EdgesGeometry>
            // export type ConeGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
            // export type CylinderGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
            // export type CircleGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
            // export type BoxGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
            // export type TextGeometryProps = BufferGeometryNode<TextGeometry, typeof TextGeometry>
            // export type CapsuleGeometryProps = BufferGeometryNode<THREE.CapsuleGeometry, typeof THREE.CapsuleGeometry>

            // export type GeometriesProps = BufferGeometryNode<THREE.Geometries, typeof THREE.Geometries>
            boxGeometry: BoxGeometryProps,
            capsuleGeometry: CapsuleGeometryProps,
            circleGeometry: CircleGeometryProps,
            coneGeometry: ConeGeometryProps,
            cylinderGeometry: CylinderGeometryProps,
            dodecahedronGeometry: DodecahedronGeometryProps,
            edgesGeometry: EdgesGeometryProps,
            extrudeGeometry: ExtrudeGeometryProps,
            icosahedronGeometry: IcosahedronGeometryProps,
            latheGeometry: LatheGeometryProps,
            octahedronGeometry: OctahedronGeometryProps,
            planeGeometry: PlaneGeometryProps,
            polyhedronGeometry: PolyhedronGeometryProps,
            ringGeometry: RingGeometryProps,
            shapeGeometry: ShapeGeometryProps,
            sphereGeometry: SphereGeometryProps,
            tetrahedronGeometry: TetrahedronGeometryProps,
            torusGeometry: TorusGeometryProps,
            torusKnotGeometry: TorusKnotGeometryProps,
            tubeGeometry: TubeGeometryProps,
            wireframeGeometry: WireframeGeometryProps,


            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers
            arrowHelper: ArrowHelperProps,
            axesHelper: AxesHelperProps,
            box3Helper: Box3HelperProps,
            boxHelper: BoxHelperProps,
            cameraHelper: CameraHelperProps,
            directionalLightHelper: DirectionalLightHelperProps,
            gridHelper: GridHelperProps,
            hemisphereLightHelper: HemisphereLightHelperProps,
            planeHelper: PlaneHelperProps,
            pointLightHelper: PointLightHelperProps,
            polarGridHelper: PolarGridHelperProps,
            skeletonHelper: SkeletonHelperProps,
            spotLightHelper: SpotLightHelperProps,


            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights
            AmbientLight: AmbientLightProps,
            DirectionalLight: DirectionalLightProps,
            DirectionalLightShadow: DirectionalLightShadowProps,
            HemisphereLight: HemisphereLightProps,
            Light: LightProps,
            LightProbe: LightProbeProps,
            LightShadow: LightShadowProps,
            PointLight: PointLightProps,
            PointLightShadow: PointLightShadowProps,
            RectAreaLight: RectAreaLightProps,
            SpotLight: SpotLightProps,
            SpotLightShadow: SpotLightShadowProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders
            //no need

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials
            lineBasicMaterial: LineBasicMaterialProps,
            lineDashedMaterial: LineDashedMaterialProps,
            material: MaterialProps,
            // materials:MaterialsProps,
            meshBasicMaterial: MeshBasicMaterialProps,
            meshDepthMaterial: MeshDepthMaterialProps,
            meshDistanceMaterial: MeshDistanceMaterialProps,
            meshLambertMaterial: MeshLambertMaterialProps,
            meshMatcapMaterial: MeshMatcapMaterialProps,
            meshNormalMaterial: MeshNormalMaterialProps,
            meshPhongMaterial: MeshPhongMaterialProps,
            meshPhysicalMaterial: MeshPhysicalMaterialProps,
            meshStandardMaterial: MeshStandardMaterialProps,
            meshToonMaterial: MeshToonMaterialProps,
            pointsMaterial: PointsMaterialProps,
            rawShaderMaterial: RawShaderMaterialProps,
            shaderMaterial: ShaderMaterialProps,
            shadowMaterial: ShadowMaterialProps,
            spriteMaterial: SpriteMaterialProps,


            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math
            box2: Box2Props,
            box3: Box3Props,
            color: ColorProps,
            colorManagement: ColorManagementProps,
            cylindrical: CylindricalProps,
            euler: EulerProps,
            frustum: FrustumProps,
            interpolant: InterpolantProps,
            line3: Line3Props,
            // mathUtils:MathUtilsProps,
            matrix3: Matrix3Props,
            matrix4: Matrix4Props,
            plane: PlaneProps,
            quaternion: QuaternionProps,
            ray: RayProps,
            sphere: SphereProps,
            spherical: SphericalProps,
            sphericalHarmonics3: SphericalHarmonics3Props,
            triangle: TriangleProps,
            vector2: Vector2Props,
            vector3: Vector3Props,
            vector4: Vector4Props,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\interpolants
            cubicInterpolant: CubicInterpolantProps,
            discreteInterpolant: DiscreteInterpolantProps,
            linearInterpolant: LinearInterpolantProps,
            quaternionLinearInterpolant: QuaternionLinearInterpolantProps,


            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects
            batchedMesh: BatchedMeshProps,
            bone: BoneProps,
            group: GroupProps,
            instancedMesh: InstancedMeshProps,
            //@ts-ignore
            line: LineProps,
            lineLoop: LineLoopProps,
            lineSegments: LineSegmentsProps,
            lod: LODProps,
            mesh: MeshProps,
            points: PointsProps,
            skeleton: SkeletonProps,
            skinnedMesh: SkinnedMeshProps,
            sprite: SpriteProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers
            webGLCubeRenderTarget: WebGLCubeRenderTargetProps,
            webGLRenderer: WebGLRendererProps,
            webGLRenderTarget: WebGLRenderTargetProps,
            webGL3DRenderTarget: WebGL3DRenderTargetProps,
            webGLArrayRenderTarget: WebGLArrayRenderTargetProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\shaders
            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl
            webGLProgram: WebGLProgramProps,
            webGLPrograms: WebGLProgramsProps,
            webGLProperties: WebGLPropertiesProps,
            webGLRenderLists: WebGLRenderListsProps,
            // webGLShader:WebGLShaderProps,
            webGLShadowMap: WebGLShadowMapProps,
            webGLState: WebGLStateProps,
            webGLTextures: WebGLTexturesProps,
            webGLUniforms: WebGLUniformsProps,
            // webGLUniformsGroups:WebGLUniformsGroupsProps,
            webGLUtils: WebGLUtilsProps,
            // webGLAttributes:WebGLAttributesProps,
            // webGLBindingStates:WebGLBindingStatesProps,
            webGLBufferRenderer: WebGLBufferRendererProps,
            webGLCapabilities: WebGLCapabilitiesProps,
            webGLClipping: WebGLClippingProps,
            // webGLCubeMaps:WebGLCubeMapsProps,
            webGLCubeUVMaps: WebGLCubeUVMapsProps,
            webGLExtensions: WebGLExtensionsProps,
            webGLGeometries: WebGLGeometriesProps,
            webGLIndexedBufferRenderer: WebGLIndexedBufferRendererProps,
            webGLInfo: WebGLInfoProps,
            webGLLights: WebGLLightsProps,
            webGLObjects: WebGLObjectsProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webxr
            webXRController: WebXRControllerProps,
            // webXRDepthSensing:WebXRDepthSensingProps,
            webXRManager: WebXRManagerProps,

            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\scenes
            fog: FogProps,
            fogExp2: FogExp2Props,
            scene: SceneProps,


            //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures
            dataTexture3D: DataTexture3DProps,
            canvasTexture: CanvasTextureProps,
            compressedArrayTexture: CompressedArrayTextureProps,
            compressedCubeTexture: CompressedCubeTextureProps,
            compressedTexture: CompressedTextureProps,
            cubeTexture: CubeTextureProps,
            data3DTexture: Data3DTextureProps,
            dataArrayTexture: DataArrayTextureProps,
            dataTexture: DataTextureProps,
            depthTexture: DepthTextureProps,
            framebufferTexture: FramebufferTextureProps,
            //@ts-ignore
            source: SourceProps,
            texture: TextureProps,
            // types:typesProps,
            videoTexture: VideoTextureProps,

            //in example
            //node_modules\@types\three\examples\jsm\animation
            ccdikSolver: CCDIKSolverProps,
            mmdAnimationHelper: MMDAnimationHelperProps,
            mmdPhysics: MMDPhysicsProps,
            // animationClipCreator: AnimationClipCreatorProps,

            //node_modules\@types\three\examples\jsm\cameras
            cinematicCamera: CinematicCameraProps,

            //node_modules\@types\three\examples\jsm\capabilities
            webGL: WebGLProps,
            webGPU: WebGPUProps,

            //node_modules\@types\three\examples\jsm\controls
            arcballControls: ArcballControlsProps,
            dragControls: DragControlsProps,
            firstPersonControls: FirstPersonControlsProps,
            flyControls: FlyControlsProps,
            mapControls: MapControlsProps,
            orbitControls: OrbitControlsProps,
            pointerLockControls: PointerLockControlsProps,
            trackballControls: TrackballControlsProps,
            transformControls: TransformControlsProps,

            //node_modules\@types\three\examples\jsm\csm
            csm: CSMProps,
            csmFrustum: CSMFrustumProps,
            csmHelper: CSMHelperProps,
            // csmShader: CSMShaderProps,

            //node_modules\@types\three\examples\jsm\curves
            grannyKnot: GrannyKnotProps,
            heartCurve: HeartCurveProps,
            vivianiCurve: VivianiCurveProps,
            knotCurve: KnotCurveProps,
            helixCurve: HelixCurveProps,
            trefoilKnot: TrefoilKnotProps,
            torusKnot: TorusKnotProps,
            cinquefoilKnot: CinquefoilKnotProps,
            trefoilPolynomialKnot: TrefoilPolynomialKnotProps,
            figureEightPolynomialKnot: FigureEightPolynomialKnotProps,
            decoratedTorusKnot4a: DecoratedTorusKnot4aProps,
            decoratedTorusKnot4b: DecoratedTorusKnot4bProps,
            decoratedTorusKnot5a: DecoratedTorusKnot5aProps,
            decoratedTorusKnot5c: DecoratedTorusKnot5cProps,
            nurbsCurve: NURBSCurveProps,
            nurbsSurface: NURBSSurfaceProps,
            // nurbsUtils:NURBSUtilsProps,
            nurbsVolume: NURBSVolumeProps,

            //node_modules\@types\three\examples\jsm\deprecated
            //Geometry

            //node_modules\@types\three\examples\jsm\effects
            anaglyphEffect: AnaglyphEffectProps,
            asciiEffect: AsciiEffectProps,
            outlineEffect: OutlineEffectProps,
            parallaxBarrierEffect: ParallaxBarrierEffectProps,
            peppersGhostEffect: PeppersGhostEffectProps,
            stereoEffect: StereoEffectProps,

            //node_modules\@types\three\examples\jsm\environments
            debugEnvironment: DebugEnvironmentProps,
            roomEnvironment: RoomEnvironmentProps,

            //node_modules\@types\three\examples\jsm\exporters
            dracoExporter: DRACOExporterProps,
            exrExporter: EXRExporterProps,
            gltfExporter: GLTFExporterProps,
            ktx2Exporter: KTX2ExporterProps,
            mmdExporter: MMDExporterProps,
            objExporter: OBJExporterProps,
            plyExporter: PLYExporterProps,
            stlExporter: STLExporterProps,
            usdzExporter: USDZExporterProps,

            //node_modules\@types\three\examples\jsm\geometries
            boxLineGeometry: BoxLineGeometryProps,
            convexGeometry: ConvexGeometryProps,
            decalGeometry: DecalGeometryProps,
            // parametricGeometries:ParametricGeometriesProps,
            parametricGeometries_TubeGeometry: ParametricGeometries_TubeGeometryProps,
            parametricGeometries_TorusKnotGeometry: ParametricGeometries_TorusKnotGeometryProps,
            parametricGeometries_SphereGeometry: ParametricGeometries_SphereGeometryProps,
            parametricGeometries_PlaneGeometry: ParametricGeometries_PlaneGeometryProps,
            parametricGeometry: ParametricGeometryProps,
            roundedBoxGeometry: RoundedBoxGeometryProps,
            sDFGeometryGenerator: SDFGeometryGeneratorProps,
            teapotGeometry: TeapotGeometryProps,
            textGeometry: TextGeometryProps,

            //node_modules\@types\three\examples\jsm\helpers
            lightProbeHelper: LightProbeHelperProps,
            octreeHelper: OctreeHelperProps,
            positionalAudioHelper: PositionalAudioHelperProps,
            rectAreaLightHelper: RectAreaLightHelperProps,
            textureHelper: TextureHelperProps,
            vertexNormalsHelper: VertexNormalsHelperProps,
            vertexTangentsHelper: VertexTangentsHelperProps,
            viewHelper: ViewHelperProps,

            //node_modules\@types\three\examples\jsm\interactive
            hTMLMesh: HTMLMeshProps,
            interactiveGroup: InteractiveGroupProps,
            selectionBox: SelectionBoxProps,
            selectionHelper: SelectionHelperProps,

            //node_modules\@types\three\examples\jsm\libs
            //node_modules\@types\three\examples\jsm\lights
            // import {type LightProbeGenerator} from 'three/examples/jsm/lights/LightProbeGenerator'
            // import { type RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
            iesSpotLight: IESSpotLightProps,
            // export type LightProbeGeneratorProps = Node<LightProbeGenerator, typeof LightProbeGenerator>
            // export type RectAreaLightUniformsLibProps = Node<RectAreaLightUniformsLib, typeof RectAreaLightUniformsLib>

            //node_modules\@types\three\examples\jsm\lines
            line2: Line2Props,
            lineGeometry: LineGeometryProps,
            lineMaterial: LineMaterialProps,
            lineSegments2: LineSegments2Props,
            lineSegmentsGeometry: LineSegmentsGeometryProps,
            wireframe: WireframeProps,
            wireframeGeometry2: WireframeGeometry2Props,

            //node_modules\@types\three\examples\jsm\loaders
            rhino3dmLoader: Rhino3dmLoaderProps,
            threeMFLoader: ThreeMFLoaderProps,
            amfLoader: AMFLoaderProps,
            bvhLoader: BVHLoaderProps,
            colladaLoader: ColladaLoaderProps,
            ddsLoader: DDSLoaderProps,
            dracoLoader: DRACOLoaderProps,
            exrLoader: EXRLoaderProps,
            fbxLoader: FBXLoaderProps,
            fontLoader: FontLoaderProps,
            gcodeLoader: GCodeLoaderProps,
            gltfLoader: GLTFLoaderProps,
            hdrCubeTextureLoader: HDRCubeTextureLoaderProps,
            iesLoader: IESLoaderProps,
            kmzLoader: KMZLoaderProps,
            ktx2Loader: KTX2LoaderProps,
            ktxLoader: KTXLoaderProps,
            ldrawLoader: LDrawLoaderProps,
            logLuvLoader: LogLuvLoaderProps,
            lottieLoader: LottieLoaderProps,
            lut3dlLoader: LUT3dlLoaderProps,
            lutCubeLoader: LUTCubeLoaderProps,
            lwoLoader: LWOLoaderProps,
            materialXLoader: MaterialXLoaderProps,
            md2Loader: MD2LoaderProps,
            mddLoader: MDDLoaderProps,
            mmdLoader: MMDLoaderProps,
            mtlLoader: MTLLoaderProps,
            nrrdLoader: NRRDLoaderProps,
            objLoader: OBJLoaderProps,
            pcdLoader: PCDLoaderProps,
            pdbLoader: PDBLoaderProps,
            plyLoader: PLYLoaderProps,
            pvrLoader: PVRLoaderProps,
            rgbeLoader: RGBELoaderProps,
            rgbmLoader: RGBMLoaderProps,
            stlLoader: STLLoaderProps,
            svgLoader: SVGLoaderProps,
            tdsLoader: TDSLoaderProps,
            tgaLoader: TGALoaderProps,
            tiffLoader: TIFFLoaderProps,
            tiltLoader: TiltLoaderProps,
            ttfLoader: TTFLoaderProps,
            usdzLoader: USDZLoaderProps,
            voxLoader: VOXLoaderProps,
            vrmlLoader: VRMLLoaderProps,
            vtkLoader: VTKLoaderProps,
            xyzLoader: XYZLoaderProps,

            //node_modules\@types\three\examples\jsm\materials
            meshGouraudMaterial: MeshGouraudMaterialProps,
            meshPostProcessingMaterial: MeshPostProcessingMaterialProps,

            //node_modules\@types\three\examples\jsm\math
            capsule: CapsuleProps,
            // colorConverter:ColorConverterProps,
            convexHull: ConvexHullProps,
            improvedNoise: ImprovedNoiseProps,
            lut: LutProps,
            meshSurfaceSampler: MeshSurfaceSamplerProps,
            oBB: OBBProps,
            octree: OctreeProps,
            simplexNoise: SimplexNoiseProps,

            //node_modules\@types\three\examples\jsm\misc
            convexObjectBreaker: ConvexObjectBreakerProps,
            gPUComputationRenderer: GPUComputationRendererProps,
            gyroscope: GyroscopeProps,
            mD2Character: MD2CharacterProps,
            mD2CharacterComplex: MD2CharacterComplexProps,
            morphAnimMesh: MorphAnimMeshProps,
            morphBlendMesh: MorphBlendMeshProps,
            progressiveLightMap: ProgressiveLightMapProps,
            rollerCoasterGeometry: RollerCoasterGeometryProps,
            rollerCoasterLiftersGeometry: RollerCoasterLiftersGeometryProps,
            rollerCoasterShadowGeometry: RollerCoasterShadowGeometryProps,
            skyGeometry: SkyGeometryProps,
            treesGeometry: TreesGeometryProps,
            timer: TimerProps,
            tubePainter: TubePainterProps,
            volume: VolumeProps,
            volumeSlice: VolumeSliceProps,

            //node_modules\@types\three\examples\jsm\modifiers
            instancedFlow: InstancedFlowProps,
            flow: FlowProps,
            edgeSplitModifier: EdgeSplitModifierProps,
            simplifyModifier: SimplifyModifierProps,
            tessellateModifier: TessellateModifierProps,

            //node_modules\@types\three\examples\jsm\nodes
            // Nodes

            //node_modules\@types\three\examples\jsm\nodes\accessors

            //AccessorsUtilsProps
            batchNode: BatchNodeProps,
            bitangentNode: BitangentNodeProps,
            bufferNode: BufferNodeProps,
            cameraNode: CameraNodeProps,
            clippingNode: ClippingNodeProps,
            cubeTextureNode: CubeTextureNodeProps,
            instanceNode: InstanceNodeProps,
            materialNode: MaterialNodeProps,
            materialReferenceNode: MaterialReferenceNodeProps,
            modelNode: ModelNodeProps,
            modelViewProjectionNode: ModelViewProjectionNodeProps,
            normalNode: NormalNodeProps,
            object3DNode: Object3DNodeProps,
            pointUVNode: PointUVNodeProps,
            positionNode: PositionNodeProps,
            referenceNode: ReferenceNodeProps<any>,
            reflectVectorNode: ReflectVectorNodeProps,
            rendererReferenceNode: RendererReferenceNodeProps,
            skinningNode: SkinningNodeProps,
            storageBufferNode: StorageBufferNodeProps,
            tangentNode: TangentNodeProps,
            textureBicubicNode: TextureBicubicNodeProps,
            textureNode: TextureNodeProps,
            uniformsNode: UniformsNodeProps,
            userDataNode: UserDataNodeProps,
            uvNode: UVNodeProps,
            vertexColorNode: VertexColorNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\code
            codeNode: CodeNodeProps,
            expressionNode: ExpressionNodeProps,
            functionCallNode: FunctionCallNodeProps<any>,
            functionNode: FunctionNodeProps<any>,

            //node_modules\@types\three\examples\jsm\nodes\core
            assignNode: AssignNodeProps,
            attributeNode: AttributeNodeProps,
            bypassNode: BypassNodeProps,
            cacheNode: CacheNodeProps,
            // constants:constantsProps,
            constNode: ConstNodeProps<any>,
            contextNode: ContextNodeProps,
            indexNode: IndexNodeProps,
            inputNode: InputNodeProps<any>,
            lightingModel: LightingModelProps,
            // node:NodeProps,
            nodeAttribute: NodeAttributeProps,
            nodeBuilder: NodeBuilderProps,
            nodeCache: NodeCacheProps,
            nodeCode: NodeCodeProps,
            nodeFrame: NodeFrameProps,
            nodeFunction: NodeFunctionProps,
            nodeFunctionInput: NodeFunctionInputProps,
            nodeKeywords: NodeKeywordsProps,
            nodeParser: NodeParserProps,
            nodeUniform: NodeUniformProps<any>,
            // nodeUtils:NodeUtilsProps,
            nodeVar: NodeVarProps,
            nodeVarying: NodeVaryingProps,
            outputStructNode: OutputStructNodeProps,
            propertyNode: PropertyNodeProps,
            stackNode: StackNodeProps,
            tempNode: TempNodeProps,
            uniformNode: UniformNodeProps<any>,
            varNode: VarNodeProps,
            varyingNode: VaryingNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\display
            afterImageNode: AfterImageNodeProps,
            anamorphicNode: AnamorphicNodeProps,
            blendModeNode: BlendModeNodeProps,
            colorAdjustmentNode: ColorAdjustmentNodeProps,
            colorSpaceNode: ColorSpaceNodeProps,
            frontFacingNode: FrontFacingNodeProps,
            gaussianBlurNode: GaussianBlurNodeProps,
            normalMapNode: NormalMapNodeProps,
            passNode: PassNodeProps,
            posterizeNode: PosterizeNodeProps,
            toneMappingNode: ToneMappingNodeProps,
            viewportDepthNode: ViewportDepthNodeProps,
            viewportDepthTextureNode: ViewportDepthTextureNodeProps,
            viewportNode: ViewportNodeProps,
            viewportSharedTextureNode: ViewportSharedTextureNodeProps,
            viewportTextureNode: ViewportTextureNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\fog
            fogExp2Node: FogExp2NodeProps,
            fogNode: FogNodeProps,
            fogRangeNode: FogRangeNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\functions
            phongLightingModel: PhongLightingModelProps,
            physicalLightingModel: PhysicalLightingModelProps,
            shadowMaskModel: ShadowMaskModelProps,

            //node_modules\@types\three\examples\jsm\nodes\functions\BSDF
            //node_modules\@types\three\examples\jsm\nodes\functions\material
            //node_modules\@types\three\examples\jsm\nodes\geometry
            rangeNode: RangeNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\gpgpu
            computeNode: ComputeNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\lighting
            analyticLightNode: AnalyticLightNodeProps<any>,
            aoNode: AONodeProps,
            environmentNode: EnvironmentNodeProps,
            hemisphereLightNode: HemisphereLightNodeProps,
            irradianceNode: IrradianceNodeProps,
            lightingContextNode: LightingContextNodeProps,
            lightingNode: LightingNodeProps,
            lightsNode: LightsNodeProps,
            // lightUtils:LightUtilsProps,
            pointLightNode: PointLightNodeProps,
            spotLightNode: SpotLightNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\loaders
            nodeLoader: NodeLoaderProps
            nodeMaterialLoader: NodeMaterialLoaderProps
            nodeObjectLoader: NodeObjectLoaderProps

            //node_modules\@types\three\examples\jsm\nodes\materials
            lineBasicNodeMaterialProps: LineBasicNodeMaterialProps,
            // materialsProps:MaterialsProps,
            meshBasicNodeMaterialProps: MeshBasicNodeMaterialProps,
            meshNormalNodeMaterialProps: MeshNormalNodeMaterialProps,
            meshPhongNodeMaterialProps: MeshPhongNodeMaterialProps,
            meshPhysicalNodeMaterialProps: MeshPhysicalNodeMaterialProps,
            meshSSSNodeMaterialProps: MeshSSSNodeMaterialProps,
            meshStandardNodeMaterialProps: MeshStandardNodeMaterialProps,
            nodeMaterialProps: NodeMaterialProps,
            pointsNodeMaterialProps: PointsNodeMaterialProps,
            shadowNodeMaterialProps: ShadowNodeMaterialProps,
            spriteNodeMaterialProps: SpriteNodeMaterialProps,

            //node_modules\@types\three\examples\jsm\nodes\materialx
            //node_modules\@types\three\examples\jsm\nodes\materialx\lib
            //node_modules\@types\three\examples\jsm\nodes\math

            condNode: CondNodeProps,
            hashNode: HashNodeProps,
            mathNode: MathNodeProps,
            // mathUtils:MathUtilsProps,
            operatorNode: OperatorNodeProps,
            // triNoise3D:TriNoise3DProps,

            //node_modules\@types\three\examples\jsm\nodes\pmrem
            pmremNodeProps: PMREMNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\procedural
            checkerNode: CheckerNodeProps,

            //node_modules\@types\three\examples\jsm\nodes\shadernode

            //node_modules\@types\three\examples\jsm\nodes\utils
            arrayElementNode: ArrayElementNodeProps,
            convertNode: ConvertNodeProps,
            discardNode: DiscardNodeProps,
            equirectUVNode: EquirectUVNodeProps,
            joinNode: JoinNodeProps,
            matcapUVNode: MatcapUVNodeProps,
            maxMipLevelNode: MaxMipLevelNodeProps,
            oscNode: OscNodeProps,
            reflectorNode: ReflectorNodeProps,
            remapNode: RemapNodeProps,
            rotateNode: RotateNodeProps,
            rotateUVNode: RotateUVNodeProps,
            splitNode: SplitNodeProps,
            spriteSheetUVNode: SpriteSheetUVNodeProps,
            stoargeArrayElementNode: StoargeArrayElementNodeProps,
            timerNode: TimerNodeProps,
            triplanarTexturesNode: TriplanarTexturesNodeProps,

            //node_modules\@types\three\examples\jsm\objects
            groundedSkybox: GroundedSkyboxProps,
            lensflare: LensflareProps,
            marchingCubes: MarchingCubesProps,
            quadMesh: QuadMeshProps,
            reflector: ReflectorProps,
            reflectorForSSRPass: ReflectorForSSRPassProps,
            refractor: RefractorProps,
            shadowMesh: ShadowMeshProps,
            sky: SkyProps,
            water: WaterProps,
            water2: Water2Props,

            //node_modules\@types\three\examples\jsm\physics

            //node_modules\@types\three\examples\jsm\postprocessing
            afterimagePass: AfterimagePassProps,
            bloomPass: BloomPassProps,
            bokehPass: BokehPassProps,
            clearPass: ClearPassProps,
            cubeTexturePass: CubeTexturePassProps,
            dotScreenPass: DotScreenPassProps,
            effectComposer: EffectComposerProps,
            filmPass: FilmPassProps,
            glitchPass: GlitchPassProps,
            gtaoPass: GTAOPassProps,
            halftonePass: HalftonePassProps,
            lutPass: LUTPassProps,
            maskPass: MaskPassProps,
            outlinePass: OutlinePassProps,
            outputPass: OutputPassProps,
            pass: PassProps,
            renderPass: RenderPassProps,
            renderPixelatedPass: RenderPixelatedPassProps,
            renderTransitionPass: RenderTransitionPassProps,
            saoPass: SAOPassProps,
            savePass: SavePassProps,
            shaderPass: ShaderPassProps,
            smaaPass: SMAAPassProps,
            ssaaRenderPass: SSAARenderPassProps,
            ssaoPass: SSAOPassProps,
            ssrPass: SSRPassProps,
            taaRenderPass: TAARenderPassProps,
            texturePass: TexturePassProps,
            unrealBloomPass: UnrealBloomPassProps,

            //node_modules\@types\three\examples\jsm\renderers
            css2DRenderer: CSS2DRendererProps,
            css3DRenderer: CSS3DRendererProps,
            projector: ProjectorProps,
            svgRenderer: SVGRendererProps,

            //node_modules\@types\three\examples\jsm\renderers\common
            Backend: BackendProps,
            Color4: Color4Props,
            Info: InfoProps,
            PostProcessing: PostProcessingProps,
            Renderer: RendererProps,
            StorageTexture: StorageTextureProps,

            //node_modules\@types\three\examples\jsm\renderers\common\extras
            pmremGenerator: PMREMGeneratorProps,

            //node_modules\@types\three\examples\jsm\renderers\webgl
            webGLBackend: WebGLBackendProps,

            //node_modules\@types\three\examples\jsm\renderers\webgl\nodes
            slotNode: SlotNodeProps,
            webGLNodeBuilder: WebGLNodeBuilderProps,
            // webGLNodes:WebGLNodesProps,

            //node_modules\@types\three\examples\jsm\renderers\webgpu
            webGPUBackend: WebGPUBackendProps,
            webGPURenderer: WebGPURendererProps,

            //node_modules\@types\three\examples\jsm\shaders
            //node_modules\@types\three\examples\jsm\textures
            flakesTexture: FlakesTextureProps,

            //node_modules\@types\three\examples\jsm\transpiler
            // aST:ASTProps,
            glslDecoder: GLSLDecoderProps,
            shaderToyDecoder: ShaderToyDecoderProps,
            transpiler: TranspilerProps<any, any>,
            tslEncoder: TSLEncoderProps,

            //node_modules\@types\three\examples\jsm\utils
            //node_modules\@types\three\examples\jsm\webxr

            // arButton:ARButtonProps,
            oculusHandModel: OculusHandModelProps,
            oculusHandPointerModel: OculusHandPointerModelProps,
            // text2D:Text2DProps,
            vrButton: VRButtonProps,
            xrButton: XRButtonProps,
            xrControllerModelFactory: XRControllerModelFactoryProps,
            xrEstimatedLight: XREstimatedLightProps,
            xrHandMeshModel: XRHandMeshModelProps,
            xrHandModelFactory: XRHandModelFactoryProps,
            xrHandPrimitiveModel: XRHandPrimitiveModelProps,
            xrPlanes: XRPlanesProps,

            // primitive
            primitive: PrimitiveProps

            // lights and other
            light: LightProps
            spotLightShadow: SpotLightShadowProps
            spotLight: SpotLightProps
            pointLight: PointLightProps
            rectAreaLight: RectAreaLightProps
            hemisphereLight: HemisphereLightProps
            directionalLightShadow: DirectionalLightShadowProps
            directionalLight: DirectionalLightProps
            ambientLight: AmbientLightProps
            lightShadow: LightShadowProps
            // ambientLightProbe: AmbientLightProbeProps
            // hemisphereLightProbe: HemisphereLightProbeProps
            lightProbe: LightProbeProps

            float16BufferAttribute: Float16BufferAttributeProps
            float32BufferAttribute: Float32BufferAttributeProps
            // float64BufferAttribute: Float64BufferAttributeProps
            int8BufferAttribute: Int8BufferAttributeProps
            int16BufferAttribute: Int16BufferAttributeProps
            int32BufferAttribute: Int32BufferAttributeProps
            uint8BufferAttribute: Uint8BufferAttributeProps
            uint16BufferAttribute: Uint16BufferAttributeProps
            uint32BufferAttribute: Uint32BufferAttributeProps
        }
    }
}

declare global {
    interface Window { threeContext: Context }

    namespace JSX {
        interface IntrinsicElements extends woby.JSX.IntrinsicElements {
            // canvas3D: canvasProps
            // orbitControls: orbitProps
            // // text: textGeometryProps,
            // // textGeometry: TextGeometryProps
            // gltf: GLTFProps,

            // object3D: Object3DProps

            // // `audio` works but conflicts with @types/react. Try using PositionalAudio from @react-three/drei instead
            // // audio: AudioProps
            // audioListener: AudioListenerProps
            // positionalAudio: PositionalAudioProps

            // mesh: MeshProps
            // instancedMesh: InstancedMeshProps
            // scene: SceneProps
            // sprite: SpriteProps
            // lOD: LODProps
            // skinnedMesh: SkinnedMeshProps
            // skeleton: SkeletonProps
            // bone: BoneProps
            // lineSegments: LineSegmentsProps
            // lineLoop: LineLoopProps
            // // see `audio`
            // // line: LineProps
            // points: PointsProps
            // group: GroupProps

            // // cameras
            // camera: CameraProps
            // perspectiveCamera: PerspectiveCameraProps
            // orthographicCamera: OrthographicCameraProps
            // cubeCamera: CubeCameraProps
            // arrayCamera: ArrayCameraProps

            // // geometry
            // instancedBufferGeometry: InstancedBufferGeometryProps
            // bufferGeometry: BufferGeometryProps
            // boxBufferGeometry: BoxBufferGeometryProps
            // circleBufferGeometry: CircleBufferGeometryProps
            // coneBufferGeometry: ConeBufferGeometryProps
            // cylinderBufferGeometry: CylinderBufferGeometryProps
            // dodecahedronBufferGeometry: DodecahedronBufferGeometryProps
            // extrudeBufferGeometry: ExtrudeBufferGeometryProps
            // icosahedronBufferGeometry: IcosahedronBufferGeometryProps
            // latheBufferGeometry: LatheBufferGeometryProps
            // octahedronBufferGeometry: OctahedronBufferGeometryProps
            // planeBufferGeometry: PlaneBufferGeometryProps
            // polyhedronBufferGeometry: PolyhedronBufferGeometryProps
            // ringBufferGeometry: RingBufferGeometryProps
            // shapeBufferGeometry: ShapeBufferGeometryProps
            // sphereBufferGeometry: SphereBufferGeometryProps
            // tetrahedronBufferGeometry: TetrahedronBufferGeometryProps
            // torusBufferGeometry: TorusBufferGeometryProps
            // torusKnotBufferGeometry: TorusKnotBufferGeometryProps
            // tubeBufferGeometry: TubeBufferGeometryProps
            // wireframeGeometry: WireframeGeometryProps
            // tetrahedronGeometry: TetrahedronGeometryProps
            // octahedronGeometry: OctahedronGeometryProps
            // icosahedronGeometry: IcosahedronGeometryProps
            // dodecahedronGeometry: DodecahedronGeometryProps
            // polyhedronGeometry: PolyhedronGeometryProps
            // tubeGeometry: TubeGeometryProps
            // torusKnotGeometry: TorusKnotGeometryProps
            // torusGeometry: TorusGeometryProps
            // sphereGeometry: SphereGeometryProps
            // ringGeometry: RingGeometryProps
            // planeGeometry: PlaneGeometryProps
            // latheGeometry: LatheGeometryProps
            // shapeGeometry: ShapeGeometryProps
            // extrudeGeometry: ExtrudeGeometryProps
            // edgesGeometry: EdgesGeometryProps
            // coneGeometry: ConeGeometryProps
            // cylinderGeometry: CylinderGeometryProps
            // circleGeometry: CircleGeometryProps
            // boxGeometry: BoxGeometryProps
            // capsuleGeometry: CapsuleGeometryProps,
            // textGeometry: TextGeometryProps

            // // materials
            // material: MaterialProps
            // shadowMaterial: ShadowMaterialProps
            // spriteMaterial: SpriteMaterialProps
            // rawShaderMaterial: RawShaderMaterialProps
            // shaderMaterial: ShaderMaterialProps
            // pointsMaterial: PointsMaterialProps
            // meshPhysicalMaterial: MeshPhysicalMaterialProps
            // meshStandardMaterial: MeshStandardMaterialProps
            // meshPhongMaterial: MeshPhongMaterialProps
            // meshToonMaterial: MeshToonMaterialProps
            // meshNormalMaterial: MeshNormalMaterialProps
            // meshLambertMaterial: MeshLambertMaterialProps
            // meshDepthMaterial: MeshDepthMaterialProps
            // meshDistanceMaterial: MeshDistanceMaterialProps
            // meshBasicMaterial: MeshBasicMaterialProps
            // meshMatcapMaterial: MeshMatcapMaterialProps
            // lineDashedMaterial: LineDashedMaterialProps
            // lineBasicMaterial: LineBasicMaterialProps

            // // primitive
            // primitive: PrimitiveProps

            // // lights and other
            // light: LightProps
            // spotLightShadow: SpotLightShadowProps
            // spotLight: SpotLightProps
            // pointLight: PointLightProps
            // rectAreaLight: RectAreaLightProps
            // hemisphereLight: HemisphereLightProps
            // directionalLightShadow: DirectionalLightShadowProps
            // directionalLight: DirectionalLightProps
            // ambientLight: AmbientLightProps
            // lightShadow: LightShadowProps
            // ambientLightProbe: AmbientLightProbeProps
            // hemisphereLightProbe: HemisphereLightProbeProps
            // lightProbe: LightProbeProps

            // // helpers
            // spotLightHelper: SpotLightHelperProps
            // skeletonHelper: SkeletonHelperProps
            // pointLightHelper: PointLightHelperProps
            // hemisphereLightHelper: HemisphereLightHelperProps
            // gridHelper: GridHelperProps
            // polarGridHelper: PolarGridHelperProps
            // directionalLightHelper: DirectionalLightHelperProps
            // cameraHelper: CameraHelperProps
            // boxHelper: BoxHelperProps
            // box3Helper: Box3HelperProps
            // planeHelper: PlaneHelperProps
            // arrowHelper: ArrowHelperProps
            // axesHelper: AxesHelperProps

            // // textures
            // texture: TextureProps
            // videoTexture: VideoTextureProps
            // dataTexture: DataTextureProps
            // dataTexture3D: DataTexture3DProps
            // compressedTexture: CompressedTextureProps
            // cubeTexture: CubeTextureProps
            // canvasTexture: CanvasTextureProps
            // depthTexture: DepthTextureProps

            // // misc
            // raycaster: RaycasterProps
            // vector2: Vector2Props
            // vector3: Vector3Props
            // vector4: Vector4Props
            // euler: EulerProps
            // matrix3: Matrix3Props
            // matrix4: Matrix4Props
            // quaternion: QuaternionProps
            // bufferAttribute: BufferAttributeProps
            // float16BufferAttribute: Float16BufferAttributeProps
            // float32BufferAttribute: Float32BufferAttributeProps
            // float64BufferAttribute: Float64BufferAttributeProps
            // int8BufferAttribute: Int8BufferAttributeProps
            // int16BufferAttribute: Int16BufferAttributeProps
            // int32BufferAttribute: Int32BufferAttributeProps
            // uint8BufferAttribute: Uint8BufferAttributeProps
            // uint16BufferAttribute: Uint16BufferAttributeProps
            // uint32BufferAttribute: Uint32BufferAttributeProps
            // instancedBufferAttribute: InstancedBufferAttributeProps
            // color: ColorProps
            // fog: FogProps
            // fogExp2: FogExp2Props
            // shape: ShapeProps
        }
    }
}
