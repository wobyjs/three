import { Object3DNode } from '../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { LineSegments } from 'three/src/objects/LineSegments.js';
export { LineSegments } from 'three/src/objects/LineSegments.js';
import './Line';
declare module '../../lib/3/three' {
    interface Three {
        LineSegments: typeof LineSegments;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineSegments: LineSegmentsProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        lineSegments: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        lineSegments: string[];
    }
}
export type LineSegmentsProps<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Object3DNode<LineSegments<TGeometry, TMaterial>, typeof LineSegments<TGeometry, TMaterial>, {
    geometry?: TGeometry;
    material?: TMaterial;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        lineSegments: {
            geometry?: BufferGeometry;
            material?: Material;
        };
    }
}
//# sourceMappingURL=LineSegments.d.ts.map