import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLProgram: typeof WebGLProgram
    }
}

Three.WebGLProgram = WebGLProgram

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglProgram: WebGLProgramProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglProgram: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglProgram: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProgram.d.ts

consParams.webglProgram = [
    'renderer',
    'cacheKey',
    'parameters',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProgram.d.ts

objParams.webglProgram = [
    'name',
    'id',
    'cacheKey', // unique identifier for this program, used for looking up compiled programs from cache.
    /**
     * @default 1
     */
    'usedTimes',
    'program',
    'vertexShader',
    'fragmentShader',
    /**
     * @deprecated Use {@link WebGlProgram#getUniforms getUniforms()} instead.
     */
    'uniforms',
    /**
     * @deprecated Use {@link WebGlProgram#getAttributes getAttributes()} instead.
     */
    'attributes',
].distinct()

export type WebGLProgramProps = Node<WebGLProgram, typeof WebGLProgram, { renderer: WebGLRenderer; cacheKey: string; parameters: object; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLProgram: Partial<{ renderer: WebGLRenderer; cacheKey: string; parameters: object; }>
    }
}

defaults.webGLProgram = {}

