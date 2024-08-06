import { Object3DNode } from '../../three-types';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Material } from 'three/src/materials/Material.js';
import { LineLoop } from 'three/src/objects/LineLoop.js';
export { LineLoop } from 'three/src/objects/LineLoop.js';
declare module '../../lib/3/three' {
    interface Three {
        LineLoop: typeof LineLoop;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineLoop: LineLoopProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        lineLoop: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        lineLoop: string[];
    }
}
export type LineLoopProps<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Object3DNode<LineLoop<TGeometry, TMaterial>, typeof LineLoop<TGeometry, TMaterial>, {
    geometry?: TGeometry;
    material?: TMaterial;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        lineLoop: {
            geometry?: BufferGeometry;
            material?: Material;
        };
    }
}
//# sourceMappingURL=LineLoop.d.ts.map