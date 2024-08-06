import { Node } from '../../three-types';
import { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js';
export { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js';
declare module '../../lib/3/three' {
    interface Three {
        FramebufferTexture: typeof FramebufferTexture;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            framebufferTexture: FramebufferTextureProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        framebufferTexture: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        framebufferTexture: string[];
    }
}
export type FramebufferTextureProps = Node<FramebufferTexture, typeof FramebufferTexture, {
    width: number;
    height: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        framebufferTexture: Partial<{
            width: number;
            height: number;
        }>;
    }
}
//# sourceMappingURL=FramebufferTexture.d.ts.map