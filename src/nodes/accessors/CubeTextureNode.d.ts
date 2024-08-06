import { Object3DNode } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { ShaderNodeObject } from 'three/src/nodes/Nodes.js';
import { CubeTexture } from 'three/src/textures/CubeTexture.js';
import CubeTextureNode from 'three/src/nodes/accessors/CubeTextureNode.js';
export { CubeTextureNode };
declare module '../../../lib/3/three' {
    interface Three {
        CubeTextureNode: typeof CubeTextureNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTextureNode: CubeTextureNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        cubeTextureNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        cubeTextureNode: string[];
    }
}
export type CubeTextureNodeProps = Object3DNode<CubeTextureNode, typeof CubeTextureNode, {
    value: CubeTexture;
    uvNode?: ShaderNodeObject<ENode> | null;
    levelNode?: ShaderNodeObject<ENode> | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cubeTextureNode: Partial<{
            value: CubeTexture;
            uvNode?: ShaderNodeObject<ENode> | null;
            levelNode?: ShaderNodeObject<ENode> | null;
        }>;
    }
}
//# sourceMappingURL=CubeTextureNode.d.ts.map