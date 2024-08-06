import { Node } from '../../../three-types';
import { Texture } from 'three/src/textures/Texture.js';
import { GroundedSkybox } from 'three/examples/jsm/objects/GroundedSkybox.js';
export * from 'three/examples/jsm/objects/GroundedSkybox.js';
declare module '../../../lib/3/three' {
    interface Three {
        GroundedSkybox: typeof GroundedSkybox;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            groundedSkybox: GroundedSkyboxProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        groundedSkybox: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        groundedSkybox: string[];
    }
}
export type GroundedSkyboxProps = Node<GroundedSkybox, typeof GroundedSkybox, {
    map: Texture;
    height: number;
    radius: number;
    resolution?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        groundedSkybox: Partial<{
            map: Texture;
            height: number;
            radius: number;
            resolution?: number;
        }>;
    }
}
//# sourceMappingURL=GroundedSkybox.d.ts.map