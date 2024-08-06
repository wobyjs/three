/** @jsxImportSource ../jsx-runtime */
import woby, { type JSX, FunctionMaybe, Observable, ObservableMaybe } from 'woby';
import type * as THREE from 'three';
export type PromiseMaybe<T> = PromiseLike<T> | T;
export type Properties<T> = Pick<T, {
    [K in keyof T]: T[K] extends (_: any) => any ? never : K;
}[keyof T]>;
export type NonFunctionKeys<T> = {
    [K in keyof T]-?: T[K] extends Function ? never : K;
}[keyof T];
export type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O;
type MethodKeysWithParams<T> = {
    [K in keyof T]: T[K] extends (arg: any, ...args: any[]) => any ? K : never;
}[keyof T];
type PropertyKeys<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type FunctionToProperty<T> = {
    [K in MethodKeysWithParams<T>]: T[K] extends (...args: infer P) => any ? FunctionMaybe<P> : never;
};
type AddProperties<T> = {
    [K in PropertyKeys<T>]: T[K];
};
type Setter<T, C, E extends EventHandlers = EventHandlers> = FunctionToProperty<Omit<T, keyof E>> & AddProperties<T> & C & E;
export type WrapAsString<T> = {
    [K in keyof T]: K;
};
export type AttachFnType = (parent: Instance, self: Instance) => () => void;
export type AttachType = string | AttachFnType;
export type EventHandlers = {
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
    onContextMenu?: (event: ThreeEvent<MouseEvent>) => void;
    onDoubleClick?: (event: ThreeEvent<MouseEvent>) => void;
    onPointerUp?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerDown?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerEnter?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerLeave?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerMove?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerMissed?: (event: MouseEvent) => void;
    onPointerCancel?: (event: ThreeEvent<PointerEvent>) => void;
    onWheel?: (event: ThreeEvent<WheelEvent>) => void;
};
export interface Intersection extends THREE.Intersection {
    /** The event source (the object which registered the handler) */
    eventObject: THREE.Object3D;
}
export interface IntersectionEvent<TSourceEvent> extends Intersection {
    /** The event source (the object which registered the handler) */
    eventObject: THREE.Object3D;
    /** An array of intersections */
    intersections: Intersection[];
    /** vec3.set(pointer.x, pointer.y, 0).unproject(camera) */
    unprojectedPoint: THREE.Vector3;
    /** Normalized event coordinates */
    pointer: THREE.Vector2;
    /** Delta between first click and this event */
    delta: number;
    /** The ray that pierced it */
    ray: THREE.Ray;
    /** The camera that was used by the raycaster */
    camera: THREE.Camera;
    /** stopPropagation will stop underlying handlers from firing */
    stopPropagation: () => void;
    /** The original host event */
    nativeEvent: TSourceEvent;
    /** If the event was stopped by calling stopPropagation */
    stopped: boolean;
}
export type ThreeEvent<TEvent> = IntersectionEvent<TEvent> & Properties<TEvent>;
export type BaseInstance = Omit<THREE.Object3D, 'children' | 'attach' | 'add' | 'remove' | 'raycast'> & {
    children: Instance[];
    remove: (...object: Instance[]) => Instance;
    add: (...object: Instance[]) => Instance;
    raycast?: (raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) => void;
};
export type Instance = BaseInstance & {
    [key: string]: any;
};
/**
 * If **T** contains a constructor, @see ConstructorParameters must be used, otherwise **T**.
 */
type Args<T> = T extends new (...args: any) => any ? ConstructorParameters<T> : T;
export type Euler = THREE.Euler | Parameters<THREE.Euler['set']>;
export type Matrix4 = THREE.Matrix4 | Parameters<THREE.Matrix4['set']> | Readonly<THREE.Matrix4['set']>;
/**
 * Turn an implementation of THREE.Vector in to the type that an r3f component would accept as a prop.
 */
type VectorLike<VectorClass extends (THREE.Vector2 | THREE.Vector3 | THREE.Vector4)> = VectorClass | Parameters<VectorClass['set']> | Readonly<Parameters<VectorClass['set']>> | Parameters<VectorClass['setScalar']>[0];
export type Vector2 = VectorLike<THREE.Vector2>;
export type Vector3 = VectorLike<THREE.Vector3>;
export type Vector4 = VectorLike<THREE.Vector4>;
export type Color = ConstructorParameters<typeof THREE.Color> | THREE.Color | number | string;
export type ColorArray = typeof THREE.Color | [color: THREE.ColorRepresentation];
export type Layers = THREE.Layers | Parameters<THREE.Layers['set']>[0];
export type Quaternion = THREE.Quaternion | Parameters<THREE.Quaternion['set']>;
export type AttachCallback = string | ((child: any, parentInstance: any) => void);
export interface NodeProps<T, P> {
    /** Constructor arguments */
    args?: FunctionMaybe<Args<P>>;
    children?: JSX.Child;
    onUpdate?: (self: T) => void;
    ref?: JSX.Refs<T>;
}
/** Make every properties FunctionMayBe */
export type Functionant<T> = T extends object ? {
    [K in keyof T]: T[K] extends ObservableMaybe<infer U> ? ObservableMaybe<U> : T[K] extends Observable<infer U> ? Observable<U> : T[K] extends FunctionMaybe<infer U> ? FunctionMaybe<U> : T[K] extends () => infer U ? () => U : T[K] extends Function ? T[K] : FunctionMaybe<T[K]>;
} : T;
export type ExtendedColors<T> = {
    [K in keyof T]: T[K] extends THREE.Color | undefined ? FunctionMaybe<Color> : FunctionMaybe<T[K]>;
};
export type Node<T, P, C> = Partial<Functionant<ExtendedColors<Setter<T, C>>>> & NodeProps<T, P>;
export type Object3DNode<T, P, C> = Partial<Setter<Overwrite<Node<T, P, C>, {
    position?: FunctionMaybe<Vector3 | number[]>;
    up?: FunctionMaybe<VectorLike<THREE.Vector3>>;
    scale?: FunctionMaybe<VectorLike<THREE.Vector3>>;
    rotation?: FunctionMaybe<Euler>;
    matrix?: FunctionMaybe<Matrix4>;
    quaternion?: FunctionMaybe<Quaternion>;
    layers?: FunctionMaybe<Layers>;
    selfDispose?: FunctionMaybe<boolean>;
}> & EventHandlers, C>>;
export type PrimitiveProps = {
    object: object;
} & {
    [properties: string]: any;
};
declare global {
    namespace JSX {
        interface IntrinsicElements extends woby.JSX.IntrinsicElements {
        }
    }
}
export {};
//# sourceMappingURL=three-types.d.ts.map