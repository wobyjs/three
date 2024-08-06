import { Node } from '../../../three-types';
import { Texture } from 'three/src/textures/Texture.js';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
export * from 'three/examples/jsm/postprocessing/TexturePass.js';
import './Pass';
declare module '../../../lib/3/three' {
    interface Three {
        TexturePass: typeof TexturePass;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            texturePass: TexturePassProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        texturePass: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        texturePass: string[];
    }
}
export type TexturePassProps = Node<TexturePass, typeof TexturePass, {
    map?: Texture;
    opacity?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        texturePass: Partial<{
            map?: Texture;
            opacity?: number;
        }>;
    }
}
//# sourceMappingURL=TexturePass.d.ts.map