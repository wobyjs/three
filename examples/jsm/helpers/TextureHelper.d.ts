import { Node } from '../../../three-types';
import { Texture } from 'three/src/textures/Texture.js';
import { TextureHelper } from 'three/examples/jsm/helpers/TextureHelper.js';
export * from 'three/examples/jsm/helpers/TextureHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        TextureHelper: typeof TextureHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureHelper: TextureHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        textureHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        textureHelper: string[];
    }
}
export type TextureHelperProps = Node<TextureHelper, typeof TextureHelper, {
    texture: Texture;
    width?: number;
    height?: number;
    depth?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        textureHelper: Partial<{
            texture: Texture;
            width?: number;
            height?: number;
            depth?: number;
        }>;
    }
}
//# sourceMappingURL=TextureHelper.d.ts.map