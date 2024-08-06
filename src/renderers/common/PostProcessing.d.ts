import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import Renderer from 'three/src/renderers/common/Renderer.js';
import PostProcessing from 'three/src/renderers/common/PostProcessing.js';
export { PostProcessing };
declare module '../../../lib/3/three' {
    interface Three {
        PostProcessing: typeof PostProcessing;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            postProcessing: PostProcessingProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        postProcessing: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        postProcessing: string[];
    }
}
export type PostProcessingProps = Node<PostProcessing, typeof PostProcessing, {
    renderer: Renderer;
    outputNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        postProcessing: Partial<{
            renderer: Renderer;
            outputNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=PostProcessing.d.ts.map