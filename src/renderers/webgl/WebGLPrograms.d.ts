import { Node, WrapAsString } from '../../../three-types';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js';
import { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js';
import { WebGLBindingStates } from 'three/src/renderers/webgl/WebGLBindingStates.js';
import { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js';
import { WebGLProgramParameters, WebGLPrograms } from 'three/src/renderers/webgl/WebGLPrograms.js';
export { WebGLPrograms } from 'three/src/renderers/webgl/WebGLPrograms.js';
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLPrograms: typeof WebGLPrograms;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglPrograms: WebGLProgramsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglProgramParametersWithUniforms: string[];
        webglPrograms: string[];
        webglProgramParameters: WrapAsString<WebGLProgramParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglPrograms: string[];
        webglProgramParametersWithUniforms: string[];
        webglProgramParameters: string[];
    }
}
export type WebGLProgramsProps = Node<WebGLPrograms, typeof WebGLPrograms, {
    renderer: WebGLRenderer;
    cubemaps: WebGLCubeMaps;
    extensions: WebGLExtensions;
    capabilities: WebGLCapabilities;
    bindingStates: WebGLBindingStates;
    clipping: WebGLClipping;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLPrograms: Partial<{
            renderer: WebGLRenderer;
            cubemaps: WebGLCubeMaps;
            extensions: WebGLExtensions;
            capabilities: WebGLCapabilities;
            bindingStates: WebGLBindingStates;
            clipping: WebGLClipping;
        }>;
    }
}
//# sourceMappingURL=WebGLPrograms.d.ts.map