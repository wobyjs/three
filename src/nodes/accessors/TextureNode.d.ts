import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Object3DNode } from '../../../three-types';
import { ShaderNodeObject } from 'three/src/nodes/Nodes.js';
import TextureNode from 'three/src/nodes/accessors/TextureNode.js';
import { Texture } from 'three/src/textures/Texture.js';
export * from 'three/src/textures/Texture.js';
declare module '../../../lib/3/three' {
    interface Three {
        TextureNode: typeof TextureNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureNode: TextureNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        textureNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        textureNode: string[];
    }
}
export type TextureNodeProps = Object3DNode<TextureNode, typeof TextureNode, {
    value: Texture;
    uvNode?: ShaderNodeObject<ENode> | null;
    levelNode?: ShaderNodeObject<ENode> | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        textureNode: Partial<{
            value: Texture;
            uvNode?: ShaderNodeObject<ENode> | null;
            levelNode?: ShaderNodeObject<ENode> | null;
        }>;
    }
}
//# sourceMappingURL=TextureNode.d.ts.map