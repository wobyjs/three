// import { BufferGeometry, Curve, DataTexture, InstancedMesh, IUniform, Material, Mesh, Vector3 } ;

// export interface SplineUniform {
//     spineTexture: IUniform;
//     pathOffset: IUniform;
//     pathSegment: IUniform;
//     spineOffset: IUniform;
//     flow: IUniform;
// }
// export function initSplineTexture(size?: number): DataTexture;

// export function updateSplineTexture(texture: DataTexture, splineCurve: Curve<Vector3>, offset?: number): void;

// export function getUniforms(splineTexture: DataTexture): SplineUniform;

// export function modifyShader(material: Material, uniforms: SplineUniform, numberOfCurves?: number): void;

// export class Flow {
//     constructor(mesh: Mesh, numberOfCurves?: number);
//     curveArray: number[];
//     curveLengthArray: number[];
//     object3D: Mesh;
//     splineTexure: DataTexture;
//     uniforms: SplineUniform;
//     updateCurve(index: number, curve: Curve<Vector3>): void;
//     moveAlongCurve(amount: number): void;
// }

// export class InstancedFlow extends Flow {
//     constructor(count: number, curveCount: number, geometry: BufferGeometry, material: Material);
//     object3D: InstancedMesh;
//     offsets: number[];
//     whichCurve: number[];

//     moveIndividualAlongCurve(index: number, offset: number): void;
//     setCurve(index: number, curveNo: number): void;
// }
import { Node } from '../../../three-types'
import { InstancedFlow, Flow, SplineUniform } from 'three/examples/jsm/modifiers/CurveModifier.js'
export * from 'three/examples/jsm/modifiers/CurveModifier.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import { BufferGeometry } from 'three/src/core/BufferGeometry'
import { Mesh } from 'three/src/objects/Mesh'
import { Material } from 'three/src/materials/Material'

declare module '../../../lib/3/three'
{
    interface Three {
        InstancedFlow: typeof InstancedFlow
        Flow: typeof Flow
    }
}

Three.InstancedFlow = InstancedFlow
Three.Flow = Flow

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            InstancedFlow: InstancedFlowProps,
            Flow: FlowProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        instancedFlow: string[]
        flow: string[]
        splineUniform: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        instancedFlow: string[]
        flow: string[]
        splineUniform: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\CurveModifier.d.ts

consParams.splineUniform = [
    'spineTexture',
    'pathOffset',
    'pathSegment',
    'spineOffset',
    'flow',
].distinct()


consParams.flow = [
    'mesh',
    'numberOfCurves',
].distinct()


consParams.instancedFlow = [
    'count',
    'curveCount',
    'geometry',
    'material',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\CurveModifier.d.ts

objParams.splineUniform = [
    'spineTexture',
    'pathOffset',
    'pathSegment',
    'spineOffset',
    'flow',
].distinct()


objParams.flow = [
    'curveArray',
    'curveLengthArray',
    'object3d',
    'splineTexure',
    'uniforms',
].distinct()


objParams.instancedFlow = [...objParams.flow,
    'object3d',
    'offsets',
    'whichCurve',
].distinct()


export type InstancedFlowProps = Node<InstancedFlow, typeof InstancedFlow, { count: number, curveCount: number, geometry: BufferGeometry, material: Material }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        instancedFlow: Partial<{ count: number, curveCount: number, geometry: BufferGeometry, material: Material }>
    }
}

defaults.instancedFlow = {}

export type FlowProps = Node<Flow, typeof Flow, { mesh: Mesh, numberOfCurves?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        flow: Partial<{ mesh: Mesh, numberOfCurves?: number }>
    }
}

defaults.flow = {}

export type SplineUniformProps = Node<SplineUniform, SplineUniform, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        splineUniform: Partial<{}>
    }
}

defaults.splineUniform = {}
