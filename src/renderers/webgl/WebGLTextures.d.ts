import { Node } from '../../../three-types';
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js';
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js';
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js';
import { WebGLTextures } from 'three/src/renderers/webgl/WebGLTextures.js';
export { WebGLTextures } from 'three/src/renderers/webgl/WebGLTextures.js';
declare module '../../../lib/3/three' {
    interface Three {
        WebGLTextures: typeof WebGLTextures;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglTextures: WebGLTexturesProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        webglTextures: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        webglTextures: string[];
    }
}
export type WebGLTexturesProps = Node<WebGLTextures, typeof WebGLTextures, {
    gl: WebGLRenderingContext;
    extensions: WebGLExtensions;
    state: WebGLState;
    properties: WebGLProperties;
    capabilities: WebGLCapabilities;
    utils: WebGLUtils;
    info: WebGLInfo;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLTextures: Partial<{
            gl: WebGLRenderingContext;
            extensions: WebGLExtensions;
            state: WebGLState;
            properties: WebGLProperties;
            capabilities: WebGLCapabilities;
            utils: WebGLUtils;
            info: WebGLInfo;
        }>;
    }
}
//# sourceMappingURL=WebGLTextures.d.ts.map