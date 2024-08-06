import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js';
export * from 'three/examples/jsm/textures/FlakesTexture.js';
import { Node } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        FlakesTexture: typeof FlakesTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            flakesTexture: FlakesTextureProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        flakesTexture: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        flakesTexture: string[];
    }
}
export type FlakesTextureProps = Node<FlakesTexture, typeof FlakesTexture, {
    width?: number;
    height?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        flakesTexture: {
            width?: number;
            height?: number;
        };
    }
}
//# sourceMappingURL=FlakesTexture.d.ts.map