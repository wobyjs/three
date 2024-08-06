import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
import { Node } from '../../../three-types'
import { WebGLRenderLists } from 'three/src/renderers/webgl/WebGLRenderLists.js'
export { WebGLRenderLists } from 'three/src/renderers/webgl/WebGLRenderLists.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLRenderLists: typeof WebGLRenderLists
    }
}

Three.WebGLRenderLists = WebGLRenderLists

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglRenderLists: WebGLRenderListsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglRenderLists: string[]
        renderItem: string[]
        webglRenderList: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglRenderLists: string[]
        renderItem: string[]
        webglRenderList: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlRenderLists.d.ts

consParams.renderItem = [
    'id',
    'object',
    'geometry',
    'material',
    'program',
    'groupOrder',
    'renderOrder',
    'z',
    'group',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlRenderLists.d.ts

objParams.renderItem = [
    'id',
    'object',
    'geometry',
    'material',
    'program',
    'groupOrder',
    'renderOrder',
    'z',
    'group',
].distinct()


consParams.webglRenderList = [
    'properties',
].distinct()


objParams.webglRenderList = [
    /**
     * @default [].distinct()

     */
    'opaque',
    /**
     * @default [].distinct()

     */
    'transparent',
    /**
     * @default [].distinct()

     */
    'transmissive',
].distinct()


consParams.webglRenderLists = [
    'properties',
].distinct()


objParams.webglRenderLists = [
].distinct()

export type WebGLRenderListsProps = Node<WebGLRenderLists, typeof WebGLRenderLists, { properties: WebGLProperties; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLRenderLists: Partial<{ properties: WebGLProperties; }>
    }
}

defaults.webGLRenderLists = {}

