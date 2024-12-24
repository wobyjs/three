import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
import { Node } from '../../../three-types'
import { WebGLRenderLists } from 'three/src/renderers/webgl/WebGLRenderLists.js'
export { WebGLRenderLists } from 'three/src/renderers/webgl/WebGLRenderLists.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        webglRenderLists: typeof webglRenderLists
        renderItem: typeof renderItem
        webglRenderList: typeof webglRenderList
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglRenderLists: typeof _webglRenderLists
        renderItem: typeof _renderItem
        webglRenderList: typeof _webglRenderList
    }
}



const renderItem = ([
    'id',
    'object',
    'geometry',
    'material',
    'program',
    'groupOrder',
    'renderOrder',
    'z',
    'group',
] as const).distinct()
consParams.renderItem = renderItem



const _renderItem = ([
    'id',
    'object',
    'geometry',
    'material',
    'program',
    'groupOrder',
    'renderOrder',
    'z',
    'group',
] as const).distinct()
objProps.renderItem = _renderItem


const webglRenderList = ([
    'properties',
] as const).distinct()
consParams.webglRenderList = webglRenderList


const _webglRenderList = ([
    /**
     * @default []
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
] as const).distinct()
objProps.webglRenderList = _webglRenderList

const webglRenderLists = ([
    'properties',
] as const).distinct()
consParams.webglRenderLists = webglRenderLists


const _webglRenderLists = ([
] as const).distinct()
objProps.webglRenderLists = _webglRenderLists

export type WebGLRenderListsProps = Node<WebGLRenderLists, typeof WebGLRenderLists, { properties: WebGLProperties; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLRenderLists: Partial<{ properties: WebGLProperties; }>
    }
}

defaults.webGLRenderLists = {}

