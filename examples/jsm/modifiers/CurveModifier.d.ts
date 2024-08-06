import { Node } from '../../../three-types';
import { InstancedFlow, Flow, SplineUniform } from 'three/examples/jsm/modifiers/CurveModifier.js';
export * from 'three/examples/jsm/modifiers/CurveModifier.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Mesh } from 'three/src/objects/Mesh';
import { Material } from 'three/src/materials/Material';
declare module '../../../lib/3/three' {
    interface Three {
        InstancedFlow: typeof InstancedFlow;
        Flow: typeof Flow;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            InstancedFlow: InstancedFlowProps;
            Flow: FlowProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        instancedFlow: string[];
        flow: string[];
        splineUniform: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        instancedFlow: string[];
        flow: string[];
        splineUniform: string[];
    }
}
export type InstancedFlowProps = Node<InstancedFlow, typeof InstancedFlow, {
    count: number;
    curveCount: number;
    geometry: BufferGeometry;
    material: Material;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        instancedFlow: Partial<{
            count: number;
            curveCount: number;
            geometry: BufferGeometry;
            material: Material;
        }>;
    }
}
export type FlowProps = Node<Flow, typeof Flow, {
    mesh: Mesh;
    numberOfCurves?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        flow: Partial<{
            mesh: Mesh;
            numberOfCurves?: number;
        }>;
    }
}
export type SplineUniformProps = Node<SplineUniform, SplineUniform, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        splineUniform: Partial<{}>;
    }
}
//# sourceMappingURL=CurveModifier.d.ts.map