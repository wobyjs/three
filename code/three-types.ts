// / <reference path="../jsx-runtime" />
/** @jsxImportSource ../jsx-runtime */

import woby, { type JSX, FunctionMaybe, Observable, ObservableMaybe } from 'woby'
import type * as THREE from 'three'

export type PromiseMaybe<T> = PromiseLike<T> | T

export type Properties<T> = Pick<T, { [K in keyof T]: T[K] extends (_: any) => any ? never : K }[keyof T]>
export type NonFunctionKeys<T> = { [K in keyof T]-?: T[K] extends Function ? never : K }[keyof T]
// export type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O
export type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O

// type MethodKeysWithParams<T> = {
//     [K in keyof T]: T[K] extends (arg: any, ...args: any[]) => any ? K : never
// }[keyof T]

type MethodKeysWithParams<T> = {
    [K in keyof T]:
    T[K] extends (arg: any, ...args: any[]) => any
    ? K
    : never
}[keyof T];


type PropertyKeys<T> = {
    [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]


type FunctionToProperty<T> = {
    [K in MethodKeysWithParams<T>]:
    K extends `on${string}` // Exclude keys that start with "on"
    ? T[K]
    :
    T[K] extends (...args: infer P) => any ? FunctionMaybe<P | P[]> : never;
}

type AddProperties<T> = {
    [K in PropertyKeys<T>]: FunctionMaybe<T[K]>
}

//type Setter<T, C> = FunctionToProperty<T> & AddProperties<T> & C
/**
 * T type
 * C constructor
 * E excluded type
 */
// type Setter<T, C, E extends EventHandlers = EventHandlers> = FunctionToProperty<Omit<T, keyof E>> & AddProperties<T> & Functionant<C> & E
type Setter<T, C> = FunctionToProperty<T> & AddProperties<T> & Functionant<C>

export type WrapAsString<T> = {
    [K in keyof T]: K;
}

export type AttachFnType = (parent: Instance, self: Instance) => () => void
export type AttachType = string | AttachFnType

export type EventHandlers<T> = {
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
    onFrame?: (instance: T) => void
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
    children?: Instance[]
    remove: (...object: Instance[]) => Instance
    add: (...object: Instance[]) => Instance
    raycast?: (raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) => void
}
export type Instance = BaseInstance & { [key: string]: any }
/**
 * If **T** contains a constructor, @see ConstructorParameters must be used, otherwise **T**.
 */
// type Args<T> = T extends new (...args: any) => any ? ConstructorParameters<T> : T
type Args<T> = T extends new (...args: infer P) => any
    ? { [K in keyof P]: Functionant<P[K]> }
    : Functionant<T>

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

export type ObservantMaybe<T> = T extends object
    ? {
        [K in keyof T]: T[K] extends Function
        ? T[K]
        : T[K] extends ObservableMaybe<infer U>
        ? ObservableMaybe<U>
        : ObservableMaybe<T[K]>
    }
    : T

export interface NodeProps<T, P> {
    // attach?: AttachType
    /** Constructor arguments */
    args?: FunctionMaybe<Args<P>>
    children?: JSX.Child
    onUpdate?: (self: T) => void
    ref?: JSX.Refs<T>
}
// type NonNullable<T> = T & {}

// export type Unobservant<T> = T extends object
//     ? { [K in keyof T]: T[K] extends ObservableMaybe<infer U> ? NonNullable<U> : T[K] }
//     : T


// export type Observant<T> = T extends object
//     ? { [K in keyof T]: T[K] extends Function ? T[K] :
//         T[K] extends ObservableMaybe<infer U> ? ObservableMaybe<PromiseMaybe<U>> : Observable<PromiseMaybe<T[K]>> } : T

// export type UnobservantMaybe<T> = Unobservant<T> | T

type Func<T = unknown> = () => T;
/** Make every properties FunctionMayBe */
export type Functionant<T> = T extends object
    ? { [K in keyof T]:
        T[K] extends Func<infer U> ? Func<U> :
        T[K] extends FunctionMaybe<infer U> ? FunctionMaybe<U> :
        T[K] extends ObservableMaybe<infer U> ? ObservableMaybe<U> : //FunctionMaybe<U> : //ObservableMaybe<U> :
        T[K] extends Observable<infer U> ? Observable<U> : //FunctionMaybe<U> : //ObservableMaybe<U> :
        T[K] extends () => infer U ? () => U :
        T[K] extends Function ? T[K] : FunctionMaybe<T[K]>
    }
    : T

export type ExtendedColors<T> = { [K in keyof T]: T[K] extends THREE.Color | undefined ? THREE.ColorRepresentation : T[K] }
// export type Node<T, P, C> = Partial<Functionant<Setter<ExtendedColors<Overwrite<T, NodeProps<T, P>>>, C>>>
// export type Node<T, P, C> = Partial<Functionant<ExtendedColors<Setter<T, C>>>> & NodeProps<T, P>
export type Node<T, P, C> = Partial<Setter<ExtendedColors<T>, C>> & NodeProps<T, P>

// export type Node<T, P, C> = Partial<Functionant<Setter<Overwrite<T, NodeProps<T, P>>, C>>>

export type Object3DNode<T, P, C> = Partial<Setter<Overwrite<
    Node<T, P, C>,
    {
        position?: FunctionMaybe<Vector3 | number[]>
        center?: FunctionMaybe<Vector3 | number[]>
        up?: FunctionMaybe<VectorLike<THREE.Vector3>>
        scale?: FunctionMaybe<VectorLike<THREE.Vector3>>
        rotation?: FunctionMaybe<Euler>
        matrix?: FunctionMaybe<Matrix4>
        quaternion?: FunctionMaybe<Quaternion>
        layers?: FunctionMaybe<Layers>
        // dispose?: (() => void) | null,
        selfDispose?: FunctionMaybe<boolean>
    }
>, C>> & EventHandlers<T>

//in example
//node_modules\@types\three\examples\jsm\animation
// import { type AnimationClipCreator } from 'three/examples/jsm/animation/AnimationClipCreator.js'


//Not in folder
export type PrimitiveProps = { object: object } & { [properties: string]: any }

// declare module 'woby' {
//     namespace JSX {
//         interface IntrinsicElements {
//             canvas3d: CanvasProps
//             // text: textGeometryProps,
//             // textGeometry: TextGeometryProps
//             // gltf: GLTFProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation
//             // animationAction: AnimationActionProps,
//             // animationClip: AnimationClipProps,
//             // animationMixer: AnimationMixerProps,
//             // animationObjectGroup: AnimationObjectGroupProps,
//             // // AnimationUtilsProps
//             // keyframeTrack: KeyframeTrackProps,
//             // propertyBinding: PropertyBindingProps,
//             // propertyMixer: PropertyMixerProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\track
//             // vectorKeyframeTrack: VectorKeyframeTrackProps,
//             // booleanKeyframeTrack: BooleanKeyframeTrackProps,
//             // colorKeyframeTrack: ColorKeyframeTrackProps,
//             // numberKeyframeTrack: NumberKeyframeTrackProps,
//             // quaternionKeyframeTrack: QuaternionKeyframeTrackProps,
//             // stringKeyframeTrack: StringKeyframeTrackProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio
//             // // audio:AudioProps,
//             // //@ts-ignore
//             // audio: AudioProps,
//             // audioAnalyser: AudioAnalyserProps,
//             // // audioContext:AudioContextProps,
//             // // `audio` works but conflicts with @types/react. Try using PositionalAudio from @react-three/drei instead
//             // // audio: AudioProps
//             // audioListener: AudioListenerProps,
//             // positionalAudio: PositionalAudioProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras
//             // camera: CameraProps,
//             // perspectiveCamera: PerspectiveCameraProps,
//             // orthographicCamera: OrthographicCameraProps,
//             // cubeCamera: CubeCameraProps,
//             // arrayCamera: ArrayCameraProps,
//             // stereoCamera: StereoCameraProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core
//             // bufferAttribute: BufferAttributeProps,
//             // bufferGeometry: BufferGeometryProps,
//             // clock: ClockProps,
//             // eventDispatcher: EventDispatcherProps,
//             // glBufferAttribute: GLBufferAttributeProps,
//             // instancedBufferAttribute: InstancedBufferAttributeProps,
//             // instancedBufferGeometry: InstancedBufferGeometryProps,
//             // instancedInterleavedBuffer: InstancedInterleavedBufferProps,
//             // interleavedBuffer: InterleavedBufferProps,
//             // interleavedBufferAttribute: InterleavedBufferAttributeProps,
//             // // layers:LayersProps,
//             // object3D: Object3DProps,
//             // raycaster: RaycasterProps,
//             // renderTarget: RenderTargetProps,
//             // uniform: UniformProps,
//             // uniformsGroup: UniformsGroupProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core
//             // // curve:curveProps,
//             // curvePath: CurvePathProps<any>,
//             // // interpolations:InterpolationsProps,
//             // //@ts-ignore
//             // path: PathProps,
//             // shape: ShapeProps,
//             // shapePath: ShapePathProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves
//             // arcCurve: ArcCurveProps,
//             // catmullRomCurve3: CatmullRomCurve3Props,
//             // cubicBezierCurve: CubicBezierCurveProps,
//             // cubicBezierCurve3: CubicBezierCurve3Props,
//             // ellipseCurve: EllipseCurveProps,
//             // lineCurve: LineCurveProps,
//             // lineCurve3: LineCurve3Props,
//             // quadraticBezierCurve: QuadraticBezierCurveProps,
//             // quadraticBezierCurve3: QuadraticBezierCurve3Props,
//             // splineCurve: SplineCurveProps,

//             // // export type InstancedBufferGeometryProps = BufferGeometryNode<THREE.InstancedBufferGeometry, typeof THREE.InstancedBufferGeometry>
//             // // export type BufferGeometryProps = BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>
//             // // export type BoxBufferGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
//             // // export type CircleBufferGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
//             // // export type ConeBufferGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
//             // // export type CylinderBufferGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
//             // // export type DodecahedronBufferGeometryProps = BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
//             // // export type ExtrudeBufferGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
//             // // export type IcosahedronBufferGeometryProps = BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
//             // // export type LatheBufferGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
//             // // export type OctahedronBufferGeometryProps = BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
//             // // export type PlaneBufferGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
//             // // export type PolyhedronBufferGeometryProps = BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
//             // // export type RingBufferGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
//             // // export type ShapeBufferGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
//             // // export type SphereBufferGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
//             // // export type TetrahedronBufferGeometryProps = BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
//             // // export type TorusBufferGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
//             // // export type TorusKnotBufferGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
//             // // export type TubeBufferGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
//             // // export type WireframeGeometryProps = BufferGeometryNode<THREE.WireframeGeometry, typeof THREE.WireframeGeometry>
//             // // export type TetrahedronGeometryProps = BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
//             // // export type OctahedronGeometryProps = BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
//             // // export type IcosahedronGeometryProps = BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
//             // // export type DodecahedronGeometryProps = BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
//             // // export type PolyhedronGeometryProps = BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
//             // // export type TubeGeometryProps = BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>
//             // // export type TorusKnotGeometryProps = BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
//             // // export type TorusGeometryProps = BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
//             // // export type SphereGeometryProps = BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
//             // // export type RingGeometryProps = BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>
//             // // export type PlaneGeometryProps = BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
//             // // export type LatheGeometryProps = BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
//             // // export type ShapeGeometryProps = BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
//             // // export type ExtrudeGeometryProps = BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
//             // // export type EdgesGeometryProps = BufferGeometryNode<THREE.EdgesGeometry, typeof THREE.EdgesGeometry>
//             // // export type ConeGeometryProps = BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
//             // // export type CylinderGeometryProps = BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
//             // // export type CircleGeometryProps = BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
//             // // export type BoxGeometryProps = BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
//             // // export type TextGeometryProps = BufferGeometryNode<TextGeometry, typeof TextGeometry>
//             // // export type CapsuleGeometryProps = BufferGeometryNode<THREE.CapsuleGeometry, typeof THREE.CapsuleGeometry>

//             // // export type GeometriesProps = BufferGeometryNode<THREE.Geometries, typeof THREE.Geometries>
//             // boxGeometry: BoxGeometryProps,
//             // capsuleGeometry: CapsuleGeometryProps,
//             // circleGeometry: CircleGeometryProps,
//             // coneGeometry: ConeGeometryProps,
//             // cylinderGeometry: CylinderGeometryProps,
//             // dodecahedronGeometry: DodecahedronGeometryProps,
//             // edgesGeometry: EdgesGeometryProps,
//             // extrudeGeometry: ExtrudeGeometryProps,
//             // icosahedronGeometry: IcosahedronGeometryProps,
//             // latheGeometry: LatheGeometryProps,
//             // octahedronGeometry: OctahedronGeometryProps,
//             // planeGeometry: PlaneGeometryProps,
//             // polyhedronGeometry: PolyhedronGeometryProps,
//             // ringGeometry: RingGeometryProps,
//             // shapeGeometry: ShapeGeometryProps,
//             // sphereGeometry: SphereGeometryProps,
//             // tetrahedronGeometry: TetrahedronGeometryProps,
//             // torusGeometry: TorusGeometryProps,
//             // torusKnotGeometry: TorusKnotGeometryProps,
//             // tubeGeometry: TubeGeometryProps,
//             // wireframeGeometry: WireframeGeometryProps,


//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers
//             // arrowHelper: ArrowHelperProps,
//             // axesHelper: AxesHelperProps,
//             // box3Helper: Box3HelperProps,
//             // boxHelper: BoxHelperProps,
//             // cameraHelper: CameraHelperProps,
//             // directionalLightHelper: DirectionalLightHelperProps,
//             // gridHelper: GridHelperProps,
//             // hemisphereLightHelper: HemisphereLightHelperProps,
//             // planeHelper: PlaneHelperProps,
//             // pointLightHelper: PointLightHelperProps,
//             // polarGridHelper: PolarGridHelperProps,
//             // skeletonHelper: SkeletonHelperProps,
//             // spotLightHelper: SpotLightHelperProps,


//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights
//             // AmbientLight: AmbientLightProps,
//             // DirectionalLight: DirectionalLightProps,
//             // DirectionalLightShadow: DirectionalLightShadowProps,
//             // HemisphereLight: HemisphereLightProps,
//             // Light: LightProps,
//             // LightProbe: LightProbeProps,
//             // LightShadow: LightShadowProps,
//             // PointLight: PointLightProps,
//             // PointLightShadow: PointLightShadowProps,
//             // RectAreaLight: RectAreaLightProps,
//             // SpotLight: SpotLightProps,
//             // SpotLightShadow: SpotLightShadowProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders
//             // //no need

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials
//             // lineBasicMaterial: LineBasicMaterialProps,
//             // lineDashedMaterial: LineDashedMaterialProps,
//             // material: MaterialProps,
//             // // materials:MaterialsProps,
//             // meshBasicMaterial: MeshBasicMaterialProps,
//             // meshDepthMaterial: MeshDepthMaterialProps,
//             // meshDistanceMaterial: MeshDistanceMaterialProps,
//             // meshLambertMaterial: MeshLambertMaterialProps,
//             // meshMatcapMaterial: MeshMatcapMaterialProps,
//             // meshNormalMaterial: MeshNormalMaterialProps,
//             // meshPhongMaterial: MeshPhongMaterialProps,
//             // meshPhysicalMaterial: MeshPhysicalMaterialProps,
//             // meshStandardMaterial: MeshStandardMaterialProps,
//             // meshToonMaterial: MeshToonMaterialProps,
//             // pointsMaterial: PointsMaterialProps,
//             // rawShaderMaterial: RawShaderMaterialProps,
//             // shaderMaterial: ShaderMaterialProps,
//             // shadowMaterial: ShadowMaterialProps,
//             // spriteMaterial: SpriteMaterialProps,


//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math
//             // box2: Box2Props,
//             // box3: Box3Props,
//             // color: ColorProps,
//             // // colorManagement: ColorManagementProps,
//             // cylindrical: CylindricalProps,
//             // euler: EulerProps,
//             // frustum: FrustumProps,
//             // interpolant: InterpolantProps,
//             // line3: Line3Props,
//             // // mathUtils:MathUtilsProps,
//             // matrix3: Matrix3Props,
//             // matrix4: Matrix4Props,
//             // plane: PlaneProps,
//             // quaternion: QuaternionProps,
//             // ray: RayProps,
//             // sphere: SphereProps,
//             // spherical: SphericalProps,
//             // sphericalHarmonics3: SphericalHarmonics3Props,
//             // triangle: TriangleProps,
//             // vector2: Vector2Props,
//             // vector3: Vector3Props,
//             // vector4: Vector4Props,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\interpolants
//             // cubicInterpolant: CubicInterpolantProps,
//             // discreteInterpolant: DiscreteInterpolantProps,
//             // linearInterpolant: LinearInterpolantProps,
//             // quaternionLinearInterpolant: QuaternionLinearInterpolantProps,


//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects
//             // // batchedMesh: BatchedMeshProps,
//             // bone: BoneProps,
//             // group: GroupProps,
//             // instancedMesh: InstancedMeshProps,
//             // //@ts-ignore
//             // line: LineProps,
//             // lineLoop: LineLoopProps,
//             // lineSegments: LineSegmentsProps,
//             // lod: LODProps,
//             // mesh: MeshProps,
//             // points: PointsProps,
//             // skeleton: SkeletonProps,
//             // skinnedMesh: SkinnedMeshProps,
//             // sprite: SpriteProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers
//             // webGLCubeRenderTarget: WebGLCubeRenderTargetProps,
//             // webglRenderer: WebGLRendererProps,
//             // webGLRenderTarget: WebGLRenderTargetProps,
//             // webGL3DRenderTarget: WebGL3DRenderTargetProps,
//             // webGLArrayRenderTarget: WebGLArrayRenderTargetProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\shaders
//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl
//             // webGLProgram: WebGLProgramProps,
//             // webGLPrograms: WebGLProgramsProps,
//             // webGLProperties: WebGLPropertiesProps,
//             // webGLRenderLists: WebGLRenderListsProps,
//             // // webGLShader:WebGLShaderProps,
//             // webGLShadowMap: WebGLShadowMapProps,
//             // webGLState: WebGLStateProps,
//             // webGLTextures: WebGLTexturesProps,
//             // webGLUniforms: WebGLUniformsProps,
//             // // webGLUniformsGroups:WebGLUniformsGroupsProps,
//             // webGLUtils: WebGLUtilsProps,
//             // // webGLAttributes:WebGLAttributesProps,
//             // // webGLBindingStates:WebGLBindingStatesProps,
//             // webGLBufferRenderer: WebGLBufferRendererProps,
//             // webGLCapabilities: WebGLCapabilitiesProps,
//             // webGLClipping: WebGLClippingProps,
//             // // webGLCubeMaps:WebGLCubeMapsProps,
//             // webGLCubeUVMaps: WebGLCubeUVMapsProps,
//             // webGLExtensions: WebGLExtensionsProps,
//             // webGLGeometries: WebGLGeometriesProps,
//             // webGLIndexedBufferRenderer: WebGLIndexedBufferRendererProps,
//             // webGLInfo: WebGLInfoProps,
//             // webGLLights: WebGLLightsProps,
//             // webGLObjects: WebGLObjectsProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webxr
//             // webXRController: WebXRControllerProps,
//             // // webXRDepthSensing:WebXRDepthSensingProps,
//             // webXRManager: WebXRManagerProps,

//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\scenes
//             // fog: FogProps,
//             // fogExp2: FogExp2Props,
//             // scene: SceneProps,


//             // //node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures
//             // dataTexture3D: DataTexture3DProps,
//             // canvasTexture: CanvasTextureProps,
//             // compressedArrayTexture: CompressedArrayTextureProps,
//             // // compressedCubeTexture: CompressedCubeTextureProps,
//             // compressedTexture: CompressedTextureProps,
//             // cubeTexture: CubeTextureProps,
//             // data3DTexture: Data3DTextureProps,
//             // dataArrayTexture: DataArrayTextureProps,
//             // dataTexture: DataTextureProps,
//             // depthTexture: DepthTextureProps,
//             // framebufferTexture: FramebufferTextureProps,
//             // //@ts-ignore
//             // source: SourceProps,
//             // texture: TextureProps,
//             // // types:typesProps,
//             // videoTexture: VideoTextureProps,

//             // //in example
//             // // animationClipCreator: AnimationClipCreatorProps,

//             // //node_modules\@types\three\examples\jsm\cameras
//             // cinematicCamera: CinematicCameraProps,

//             // //node_modules\@types\three\examples\jsm\capabilities
//             // webGL: WebGLProps,
//             // webGPU: WebGPUProps,

//             // //node_modules\@types\three\examples\jsm\controls
//             // arcballControls: ArcballControlsProps,
//             // dragControls: DragControlsProps,
//             // firstPersonControls: FirstPersonControlsProps,
//             // flyControls: FlyControlsProps,
//             // mapControls: MapControlsProps,
//             // orbitControls: OrbitControlsProps,
//             // pointerLockControls: PointerLockControlsProps,
//             // trackballControls: TrackballControlsProps,
//             // transformControls: TransformControlsProps,

//             // //node_modules\@types\three\examples\jsm\csm
//             // csm: CSMProps,
//             // csmFrustum: CSMFrustumProps,
//             // csmHelper: CSMHelperProps,
//             // // csmShader: CSMShaderProps,

//             // //node_modules\@types\three\examples\jsm\curves
//             // grannyKnot: GrannyKnotProps,
//             // heartCurve: HeartCurveProps,
//             // vivianiCurve: VivianiCurveProps,
//             // knotCurve: KnotCurveProps,
//             // helixCurve: HelixCurveProps,
//             // trefoilKnot: TrefoilKnotProps,
//             // torusKnot: TorusKnotProps,
//             // cinquefoilKnot: CinquefoilKnotProps,
//             // trefoilPolynomialKnot: TrefoilPolynomialKnotProps,
//             // figureEightPolynomialKnot: FigureEightPolynomialKnotProps,
//             // decoratedTorusKnot4a: DecoratedTorusKnot4aProps,
//             // decoratedTorusKnot4b: DecoratedTorusKnot4bProps,
//             // decoratedTorusKnot5a: DecoratedTorusKnot5aProps,
//             // decoratedTorusKnot5c: DecoratedTorusKnot5cProps,
//             // nurbsCurve: NURBSCurveProps,
//             // nurbsSurface: NURBSSurfaceProps,
//             // // nurbsUtils:NURBSUtilsProps,
//             // nurbsVolume: NURBSVolumeProps,

//             // //node_modules\@types\three\examples\jsm\deprecated
//             // //Geometry

//             // //node_modules\@types\three\examples\jsm\effects
//             // anaglyphEffect: AnaglyphEffectProps,
//             // asciiEffect: AsciiEffectProps,
//             // outlineEffect: OutlineEffectProps,
//             // parallaxBarrierEffect: ParallaxBarrierEffectProps,
//             // peppersGhostEffect: PeppersGhostEffectProps,
//             // stereoEffect: StereoEffectProps,

//             // //node_modules\@types\three\examples\jsm\environments
//             // debugEnvironment: DebugEnvironmentProps,
//             // roomEnvironment: RoomEnvironmentProps,

//             // //node_modules\@types\three\examples\jsm\exporters
//             // dracoExporter: DRACOExporterProps,
//             // exrExporter: EXRExporterProps,
//             // gltfExporter: GLTFExporterProps,
//             // ktx2Exporter: KTX2ExporterProps,
//             // mmdExporter: MMDExporterProps,
//             // objExporter: OBJExporterProps,
//             // plyExporter: PLYExporterProps,
//             // stlExporter: STLExporterProps,
//             // usdzExporter: USDZExporterProps,

//             // //node_modules\@types\three\examples\jsm\geometries
//             // boxLineGeometry: BoxLineGeometryProps,
//             // convexGeometry: ConvexGeometryProps,
//             // decalGeometry: DecalGeometryProps,
//             // // parametricGeometries:ParametricGeometriesProps,
//             // parametricGeometries_TubeGeometry: ParametricGeometries_TubeGeometryProps,
//             // parametricGeometries_TorusKnotGeometry: ParametricGeometries_TorusKnotGeometryProps,
//             // parametricGeometries_SphereGeometry: ParametricGeometries_SphereGeometryProps,
//             // parametricGeometries_PlaneGeometry: ParametricGeometries_PlaneGeometryProps,
//             // parametricGeometry: ParametricGeometryProps,
//             // roundedBoxGeometry: RoundedBoxGeometryProps,
//             // sdfGeometryGenerator: SDFGeometryGeneratorProps,
//             // teapotGeometry: TeapotGeometryProps,
//             // textGeometry: TextGeometryProps,

//             // //node_modules\@types\three\examples\jsm\helpers
//             // lightProbeHelper: LightProbeHelperProps,
//             // octreeHelper: OctreeHelperProps,
//             // positionalAudioHelper: PositionalAudioHelperProps,
//             // rectAreaLightHelper: RectAreaLightHelperProps,
//             // textureHelper: TextureHelperProps,
//             // vertexNormalsHelper: VertexNormalsHelperProps,
//             // vertexTangentsHelper: VertexTangentsHelperProps,
//             // viewHelper: ViewHelperProps,

//             // //node_modules\@types\three\examples\jsm\interactive
//             // htmlMesh: HTMLMeshProps,
//             // interactiveGroup: InteractiveGroupProps,
//             // selectionBox: SelectionBoxProps,
//             // selectionHelper: SelectionHelperProps,


//             // //node_modules\@types\three\examples\jsm\libs
//             // //node_modules\@types\three\examples\jsm\lights
//             // gui: GuiProps,
//             // // import {type LightProbeGenerator} from 'three/examples/jsm/lights/LightProbeGenerator.js'
//             // // import { type RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
//             // iesSpotLight: IESSpotLightProps,
//             // // export type LightProbeGeneratorProps = Node<LightProbeGenerator, typeof LightProbeGenerator>
//             // // export type RectAreaLightUniformsLibProps = Node<RectAreaLightUniformsLib, typeof RectAreaLightUniformsLib>

//             // //node_modules\@types\three\examples\jsm\lines
//             // line2: Line2Props,
//             // lineGeometry: LineGeometryProps,
//             // lineMaterial: LineMaterialProps,
//             // lineSegments2: LineSegments2Props,
//             // lineSegmentsGeometry: LineSegmentsGeometryProps,
//             // wireframe: WireframeProps,
//             // wireframeGeometry2: WireframeGeometry2Props,

//             // //node_modules\@types\three\examples\jsm\loaders
//             // rhino3dmLoader: Rhino3dmLoaderProps,
//             // threeMFLoader: ThreeMFLoaderProps,
//             // amfLoader: AMFLoaderProps,
//             // bvhLoader: BVHLoaderProps,
//             // colladaLoader: ColladaLoaderProps,
//             // ddsLoader: DDSLoaderProps,
//             // dracoLoader: DRACOLoaderProps,
//             // exrLoader: EXRLoaderProps,
//             // fbxLoader: FBXLoaderProps,
//             // fontLoader: FontLoaderProps,
//             // gcodeLoader: GCodeLoaderProps,
//             // gltfLoader: GLTFLoaderProps,
//             // hdrCubeTextureLoader: HDRCubeTextureLoaderProps,
//             // iesLoader: IESLoaderProps,
//             // kmzLoader: KMZLoaderProps,
//             // ktx2Loader: KTX2LoaderProps,
//             // ktxLoader: KTXLoaderProps,
//             // ldrawLoader: LDrawLoaderProps,
//             // logLuvLoader: LogLuvLoaderProps,
//             // lottieLoader: LottieLoaderProps,
//             // lut3dlLoader: LUT3dlLoaderProps,
//             // lutCubeLoader: LUTCubeLoaderProps,
//             // lwoLoader: LWOLoaderProps,
//             // materialXLoader: MaterialXLoaderProps,
//             // md2Loader: MD2LoaderProps,
//             // mddLoader: MDDLoaderProps,
//             // mmdLoader: MMDLoaderProps,
//             // mtlLoader: MTLLoaderProps,
//             // nrrdLoader: NRRDLoaderProps,
//             // objLoader: OBJLoaderProps,
//             // pcdLoader: PCDLoaderProps,
//             // pdbLoader: PDBLoaderProps,
//             // plyLoader: PLYLoaderProps,
//             // pvrLoader: PVRLoaderProps,
//             // rgbeLoader: RGBELoaderProps,
//             // rgbmLoader: RGBMLoaderProps,
//             // stlLoader: STLLoaderProps,
//             // svgLoader: SVGLoaderProps,
//             // tdsLoader: TDSLoaderProps,
//             // tgaLoader: TGALoaderProps,
//             // tiffLoader: TIFFLoaderProps,
//             // tiltLoader: TiltLoaderProps,
//             // ttfLoader: TTFLoaderProps,
//             // usdzLoader: USDZLoaderProps,
//             // voxLoader: VOXLoaderProps,
//             // vrmlLoader: VRMLLoaderProps,
//             // vtkLoader: VTKLoaderProps,
//             // xyzLoader: XYZLoaderProps,

//             // //node_modules\@types\three\examples\jsm\materials
//             // meshGouraudMaterial: MeshGouraudMaterialProps,
//             // meshPostProcessingMaterial: MeshPostProcessingMaterialProps,

//             // //node_modules\@types\three\examples\jsm\math
//             // capsule: CapsuleProps,
//             // // colorConverter:ColorConverterProps,
//             // convexHull: ConvexHullProps,
//             // improvedNoise: ImprovedNoiseProps,
//             // lut: LutProps,
//             // meshSurfaceSampler: MeshSurfaceSamplerProps,
//             // obb: OBBProps,
//             // octree: OctreeProps,
//             // simplexNoise: SimplexNoiseProps,

//             // //node_modules\@types\three\examples\jsm\misc
//             // convexObjectBreaker: ConvexObjectBreakerProps,
//             // gPUComputationRenderer: GPUComputationRendererProps,
//             // gyroscope: GyroscopeProps,
//             // mD2Character: MD2CharacterProps,
//             // mD2CharacterComplex: MD2CharacterComplexProps,
//             // morphAnimMesh: MorphAnimMeshProps,
//             // morphBlendMesh: MorphBlendMeshProps,
//             // progressiveLightMap: ProgressiveLightMapProps,
//             // rollerCoasterGeometry: RollerCoasterGeometryProps,
//             // rollerCoasterLiftersGeometry: RollerCoasterLiftersGeometryProps,
//             // rollerCoasterShadowGeometry: RollerCoasterShadowGeometryProps,
//             // skyGeometry: SkyGeometryProps,
//             // treesGeometry: TreesGeometryProps,
//             // timer: TimerProps,
//             // tubePainter: TubePainterProps,
//             // volume: VolumeProps,
//             // volumeSlice: VolumeSliceProps,

//             // //node_modules\@types\three\examples\jsm\modifiers
//             // instancedFlow: InstancedFlowProps,
//             // flow: FlowProps,
//             // edgeSplitModifier: EdgeSplitModifierProps,
//             // simplifyModifier: SimplifyModifierProps,
//             // tessellateModifier: TessellateModifierProps,

//             // //node_modules\@types\three\examples\jsm\nodes
//             // // Nodes

//             // //node_modules\@types\three\examples\jsm\nodes\accessors

//             // //AccessorsUtilsProps
//             // batchNode: BatchNodeProps,
//             // // bitangentNode: BitangentNodeProps,
//             // bufferNode: BufferNodeProps,
//             // // cameraNode: CameraNodeProps,
//             // clippingNode: ClippingNodeProps,
//             // cubeTextureNode: CubeTextureNodeProps,
//             // instanceNode: InstanceNodeProps,
//             // materialNode: MaterialNodeProps,
//             // materialReferenceNode: MaterialReferenceNodeProps,
//             // modelNode: ModelNodeProps,
//             // modelViewProjectionNode: ModelViewProjectionNodeProps,
//             // // normalNode: NormalNodeProps,
//             // object3DNode: Object3DNodeProps,
//             // pointUVNode: PointUVNodeProps,
//             // // positionNode: PositionNodeProps,
//             // referenceNode: ReferenceNodeProps<any>,
//             // // reflectVectorNode: ReflectVectorNodeProps,
//             // rendererReferenceNode: RendererReferenceNodeProps,
//             // skinningNode: SkinningNodeProps,
//             // storageBufferNode: StorageBufferNodeProps,
//             // // tangentNode: TangentNodeProps,
//             // textureBicubicNode: TextureBicubicNodeProps,
//             // textureNode: TextureNodeProps,
//             // uniformsNode: UniformsNodeProps,
//             // userDataNode: UserDataNodeProps,
//             // // uvNode: UVNodeProps,
//             // vertexColorNode: VertexColorNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\code
//             // codeNode: CodeNodeProps,
//             // expressionNode: ExpressionNodeProps,
//             // functionCallNode: FunctionCallNodeProps<any>,
//             // functionNode: FunctionNodeProps<any>,

//             // //node_modules\@types\three\examples\jsm\nodes\core
//             // assignNode: AssignNodeProps,
//             // attributeNode: AttributeNodeProps,
//             // bypassNode: BypassNodeProps,
//             // cacheNode: CacheNodeProps,
//             // // constants:constantsProps,
//             // constNode: ConstNodeProps<any>,
//             // contextNode: ContextNodeProps,
//             // indexNode: IndexNodeProps,
//             // inputNode: InputNodeProps<any>,
//             // lightingModel: LightingModelProps,
//             // // node:NodeProps,
//             // nodeAttribute: NodeAttributeProps,
//             // nodeBuilder: NodeBuilderProps,
//             // nodeCache: NodeCacheProps,
//             // nodeCode: NodeCodeProps,
//             // nodeFrame: NodeFrameProps,
//             // nodeFunction: NodeFunctionProps,
//             // nodeFunctionInput: NodeFunctionInputProps,
//             // nodeKeywords: NodeKeywordsProps,
//             // nodeParser: NodeParserProps,
//             // nodeUniform: NodeUniformProps<any>,
//             // // nodeUtils:NodeUtilsProps,
//             // nodeVar: NodeVarProps,
//             // nodeVarying: NodeVaryingProps,
//             // outputStructNode: OutputStructNodeProps,
//             // propertyNode: PropertyNodeProps,
//             // stackNode: StackNodeProps,
//             // tempNode: TempNodeProps,
//             // uniformNode: UniformNodeProps<any>,
//             // varNode: VarNodeProps,
//             // varyingNode: VaryingNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\display
//             // afterImageNode: AfterImageNodeProps,
//             // anamorphicNode: AnamorphicNodeProps,
//             // blendModeNode: BlendModeNodeProps,
//             // colorAdjustmentNode: ColorAdjustmentNodeProps,
//             // colorSpaceNode: ColorSpaceNodeProps,
//             // frontFacingNode: FrontFacingNodeProps,
//             // gaussianBlurNode: GaussianBlurNodeProps,
//             // normalMapNode: NormalMapNodeProps,
//             // passNode: PassNodeProps,
//             // posterizeNode: PosterizeNodeProps,
//             // toneMappingNode: ToneMappingNodeProps,
//             // viewportDepthNode: ViewportDepthNodeProps,
//             // viewportDepthTextureNode: ViewportDepthTextureNodeProps,
//             // viewportNode: ViewportNodeProps,
//             // viewportSharedTextureNode: ViewportSharedTextureNodeProps,
//             // viewportTextureNode: ViewportTextureNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\fog
//             // fogExp2Node: FogExp2NodeProps,
//             // fogNode: FogNodeProps,
//             // fogRangeNode: FogRangeNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\functions
//             // phongLightingModel: PhongLightingModelProps,
//             // physicalLightingModel: PhysicalLightingModelProps,
//             // shadowMaskModel: ShadowMaskModelProps,

//             // //node_modules\@types\three\examples\jsm\nodes\functions\BSDF
//             // //node_modules\@types\three\examples\jsm\nodes\functions\material
//             // //node_modules\@types\three\examples\jsm\nodes\geometry
//             // rangeNode: RangeNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\gpgpu
//             // computeNode: ComputeNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\lighting
//             // analyticLightNode: AnalyticLightNodeProps<any>,
//             // aoNode: AONodeProps,
//             // environmentNode: EnvironmentNodeProps,
//             // hemisphereLightNode: HemisphereLightNodeProps,
//             // irradianceNode: IrradianceNodeProps,
//             // lightingContextNode: LightingContextNodeProps,
//             // lightingNode: LightingNodeProps,
//             // lightsNode: LightsNodeProps,
//             // // lightUtils:LightUtilsProps,
//             // pointLightNode: PointLightNodeProps,
//             // spotLightNode: SpotLightNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\loaders
//             // nodeLoader: NodeLoaderProps
//             // nodeMaterialLoader: NodeMaterialLoaderProps
//             // nodeObjectLoader: NodeObjectLoaderProps

//             // //node_modules\@types\three\examples\jsm\nodes\materials
//             // lineBasicNodeMaterialProps: LineBasicNodeMaterialProps,
//             // // materialsProps:MaterialsProps,
//             // meshBasicNodeMaterialProps: MeshBasicNodeMaterialProps,
//             // meshNormalNodeMaterialProps: MeshNormalNodeMaterialProps,
//             // meshPhongNodeMaterialProps: MeshPhongNodeMaterialProps,
//             // meshPhysicalNodeMaterialProps: MeshPhysicalNodeMaterialProps,
//             // meshSSSNodeMaterialProps: MeshSSSNodeMaterialProps,
//             // meshStandardNodeMaterialProps: MeshStandardNodeMaterialProps,
//             // nodeMaterialProps: NodeMaterialProps,
//             // pointsNodeMaterialProps: PointsNodeMaterialProps,
//             // shadowNodeMaterialProps: ShadowNodeMaterialProps,
//             // spriteNodeMaterialProps: SpriteNodeMaterialProps,

//             // //node_modules\@types\three\examples\jsm\nodes\materialx
//             // //node_modules\@types\three\examples\jsm\nodes\materialx\lib
//             // //node_modules\@types\three\examples\jsm\nodes\math

//             // condNode: CondNodeProps,
//             // hashNode: HashNodeProps,
//             // mathNode: MathNodeProps,
//             // // mathUtils:MathUtilsProps,
//             // operatorNode: OperatorNodeProps,
//             // // triNoise3D:TriNoise3DProps,

//             // //node_modules\@types\three\examples\jsm\nodes\pmrem
//             // pmremNodeProps: PMREMNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\procedural
//             // checkerNode: CheckerNodeProps,

//             // //node_modules\@types\three\examples\jsm\nodes\shadernode

//             // //node_modules\@types\three\examples\jsm\nodes\utils
//             // arrayElementNode: ArrayElementNodeProps,
//             // convertNode: ConvertNodeProps,
//             // discardNode: DiscardNodeProps,
//             // equirectUVNode: EquirectUVNodeProps,
//             // joinNode: JoinNodeProps,
//             // matcapUVNode: MatcapUVNodeProps,
//             // maxMipLevelNode: MaxMipLevelNodeProps,
//             // oscNode: OscNodeProps,
//             // reflectorNode: ReflectorNodeProps,
//             // remapNode: RemapNodeProps,
//             // rotateNode: RotateNodeProps,
//             // rotateUVNode: RotateUVNodeProps,
//             // splitNode: SplitNodeProps,
//             // spriteSheetUVNode: SpriteSheetUVNodeProps,
//             // stoargeArrayElementNode: StoargeArrayElementNodeProps,
//             // timerNode: TimerNodeProps,
//             // triplanarTexturesNode: TriplanarTexturesNodeProps,

//             // //node_modules\@types\three\examples\jsm\objects
//             // groundedSkybox: GroundedSkyboxProps,
//             // lensflare: LensflareProps,
//             // marchingCubes: MarchingCubesProps,
//             // quadMesh: QuadMeshProps,
//             // reflector: ReflectorProps,
//             // reflectorForSSRPass: ReflectorForSSRPassProps,
//             // refractor: RefractorProps,
//             // shadowMesh: ShadowMeshProps,
//             // sky: SkyProps,
//             // water: WaterProps,
//             // water2: Water2Props,

//             // //node_modules\@types\three\examples\jsm\physics

//             // //node_modules\@types\three\examples\jsm\postprocessing
//             // afterimagePass: AfterimagePassProps,
//             // bloomPass: BloomPassProps,
//             // bokehPass: BokehPassProps,
//             // clearPass: ClearPassProps,
//             // cubeTexturePass: CubeTexturePassProps,
//             // dotScreenPass: DotScreenPassProps,
//             // effectComposer: EffectComposerProps,
//             // filmPass: FilmPassProps,
//             // glitchPass: GlitchPassProps,
//             // gtaoPass: GTAOPassProps,
//             // halftonePass: HalftonePassProps,
//             // lutPass: LUTPassProps,
//             // maskPass: MaskPassProps,
//             // outlinePass: OutlinePassProps,
//             // outputPass: OutputPassProps,
//             // pass: PassProps,
//             // renderPass: RenderPassProps,
//             // renderPixelatedPass: RenderPixelatedPassProps,
//             // renderTransitionPass: RenderTransitionPassProps,
//             // saoPass: SAOPassProps,
//             // savePass: SavePassProps,
//             // shaderPass: ShaderPassProps,
//             // smaaPass: SMAAPassProps,
//             // ssaaRenderPass: SSAARenderPassProps,
//             // ssaoPass: SSAOPassProps,
//             // ssrPass: SSRPassProps,
//             // taaRenderPass: TAARenderPassProps,
//             // texturePass: TexturePassProps,
//             // unrealBloomPass: UnrealBloomPassProps,

//             // //node_modules\@types\three\examples\jsm\renderers
//             // css2DRenderer: CSS2DRendererProps,
//             // css3DRenderer: CSS3DRendererProps,
//             // projector: ProjectorProps,
//             // svgRenderer: SVGRendererProps,

//             // //node_modules\@types\three\examples\jsm\renderers\common
//             // Backend: BackendProps,
//             // Color4: Color4Props,
//             // Info: InfoProps,
//             // PostProcessing: PostProcessingProps,
//             // Renderer: RendererProps,
//             // StorageTexture: StorageTextureProps,

//             // //node_modules\@types\three\examples\jsm\renderers\common\extras
//             // pmremGenerator: PMREMGeneratorProps,

//             // //node_modules\@types\three\examples\jsm\renderers\webgl
//             // webGLBackend: WebGLBackendProps,

//             // // webGLNodes:WebGLNodesProps,

//             // //node_modules\@types\three\examples\jsm\renderers\webgpu
//             // webGPUBackend: WebGPUBackendProps,
//             // webGPURenderer: WebGPURendererProps,

//             // //node_modules\@types\three\examples\jsm\shaders
//             // //node_modules\@types\three\examples\jsm\textures
//             // flakesTexture: FlakesTextureProps,

//             // //node_modules\@types\three\examples\jsm\transpiler
//             // // aST:ASTProps,
//             // glslDecoder: GLSLDecoderProps,
//             // shaderToyDecoder: ShaderToyDecoderProps,
//             // transpiler: TranspilerProps<any, any>,
//             // tslEncoder: TSLEncoderProps,

//             // //node_modules\@types\three\examples\jsm\utils
//             // //node_modules\@types\three\examples\jsm\webxr

//             // // arButton:ARButtonProps,
//             // oculusHandModel: OculusHandModelProps,
//             // oculusHandPointerModel: OculusHandPointerModelProps,
//             // // text2D:Text2DProps,
//             // // vrButton: VRButtonProps,
//             // xrButton: XRButtonProps,
//             // xrControllerModelFactory: XRControllerModelFactoryProps,
//             // xrEstimatedLight: XREstimatedLightProps,
//             // xrHandMeshModel: XRHandMeshModelProps,
//             // xrHandModelFactory: XRHandModelFactoryProps,
//             // xrHandPrimitiveModel: XRHandPrimitiveModelProps,
//             // xrPlanes: XRPlanesProps,

//             // // primitive
//             // primitive: PrimitiveProps

//             // // lights and other
//             // light: LightProps
//             // spotLightShadow: SpotLightShadowProps
//             // spotLight: SpotLightProps
//             // pointLight: PointLightProps
//             // rectAreaLight: RectAreaLightProps
//             // hemisphereLight: HemisphereLightProps
//             // directionalLightShadow: DirectionalLightShadowProps
//             // directionalLight: DirectionalLightProps
//             // ambientLight: AmbientLightProps
//             // lightShadow: LightShadowProps
//             // // ambientLightProbe: AmbientLightProbeProps
//             // // hemisphereLightProbe: HemisphereLightProbeProps
//             // lightProbe: LightProbeProps

//             // float16BufferAttribute: Float16BufferAttributeProps
//             // float32BufferAttribute: Float32BufferAttributeProps
//             // // float64BufferAttribute: Float64BufferAttributeProps
//             // int8BufferAttribute: Int8BufferAttributeProps
//             // int16BufferAttribute: Int16BufferAttributeProps
//             // int32BufferAttribute: Int32BufferAttributeProps
//             // uint8BufferAttribute: Uint8BufferAttributeProps
//             // uint16BufferAttribute: Uint16BufferAttributeProps
//             // uint32BufferAttribute: Uint32BufferAttributeProps
//         }
//     }
// }

declare global {
    namespace JSX {
        interface IntrinsicElements extends woby.JSX.IntrinsicElements {
        }
    }
}

// //export type Node<T, P, C> = Partial<Functionant<Setter<ExtendedColors<Overwrite<T, NodeProps<T, P>>>, C>>>

// type Node1<T, P, C> = Partial<Functionant<ExtendedColors<Setter<T, C>>>>
// type WebGLRendererProps1 = Node1<THREE.WebGLRenderer, typeof THREE.WebGLRenderer, THREE.WebGLRendererParameters>
// type BoxHelperProps1 = Node1<THREE.BoxHelper, typeof THREE.BoxHelper, { object: THREE.Object3D, color?: THREE.ColorRepresentation }>
// type BoxHelperProps2 = Functionant<Setter<THREE.BoxHelper, { object: THREE.Object3D, color?: THREE.ColorRepresentation }>>


// const a = {} as Functionant<Setter<THREE.WebGLRenderer, THREE.WebGLRendererParameters>> // WebGLRendererProps1
// const c1 = {} as BoxHelperProps1
// const c2 = {} as BoxHelperProps2
// // const w = {} as WebGLRendererProps1

// a.setSize = [1, 2, true]
// c1.color = () => 1
// c1.color = 1
// c1.setFromObject = [null as THREE.Object3D<THREE.Object3DEventMap>]

// c2.color = () => 1
// c2.color = 1
// c2.setFromObject = [null as THREE.Object3D<THREE.Object3DEventMap>]

// // w.setClearColor

// const a ={} as JSX.IntrinsicElements['bufferGeometry']
// a.ref
