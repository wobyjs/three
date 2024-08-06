import { Object3DNode } from '../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { Line } from 'three/src/objects/Line.js';
export * from 'three/src/objects/Line.js';
declare module '../../lib/3/three' {
    interface Three {
        Line: typeof Line;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            line: LineProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        line: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        line: string[];
    }
}
export type LineProps<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Object3DNode<Line<TGeometry, TMaterial>, typeof Line<TGeometry, TMaterial>, {
    geometry?: TGeometry;
    material?: TMaterial;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        line: {
            geometry?: BufferGeometry;
            material?: Material;
        };
    }
}
//# sourceMappingURL=Line.d.ts.map