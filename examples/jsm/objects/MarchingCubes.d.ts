import { Node } from '../../../three-types';
import { Material } from 'three/src/materials/Material.js';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';
export * from 'three/examples/jsm/objects/MarchingCubes.js';
declare module '../../../lib/3/three' {
    interface Three {
        MarchingCubes: typeof MarchingCubes;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            marchingCubes: MarchingCubesProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        marchingCubes: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        marchingCubes: string[];
    }
}
export type MarchingCubesProps = Node<MarchingCubes, typeof MarchingCubes, {
    resolution: number;
    material: Material;
    enableUvs?: boolean;
    enableColors?: boolean;
    maxPolyCount?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        marchingCubes: Partial<{
            resolution: number;
            material: Material;
            enableUvs?: boolean;
            enableColors?: boolean;
            maxPolyCount?: number;
        }>;
    }
}
//# sourceMappingURL=MarchingCubes.d.ts.map