import { Object3DNode } from '../../three-types';
import { BufferGeometry, NormalOrGLBufferAttributes } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { Points } from 'three/src/objects/Points.js';
export { Points } from 'three/src/objects/Points.js';
declare module '../../lib/3/three' {
    interface Three {
        Points: typeof Points;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            points: PointsProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        points: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        points: string[];
    }
}
export type PointsProps<TGeometry extends BufferGeometry<NormalOrGLBufferAttributes> = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Object3DNode<Points<TGeometry, TMaterial>, typeof Points<TGeometry, TMaterial>, {
    geometry?: TGeometry;
    material?: TMaterial;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        points: {
            geometry?: BufferGeometry;
            material?: Material;
        };
    }
}
//# sourceMappingURL=Points.d.ts.map