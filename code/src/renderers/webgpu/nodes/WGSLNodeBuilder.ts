import { Node } from '../../../../three-types'
import WGSLNodeBuilder from 'three/src/renderers/webgpu/nodes/WGSLNodeBuilder.js'
export { WGSLNodeBuilder }
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objParams } from '../../../../lib/3/objParams'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        WGSLNodeBuilder: typeof WGSLNodeBuilder
    }
}

Three.WGSLNodeBuilder = WGSLNodeBuilder

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wgslNodeBuilder: WGSLNodeBuilderProps,
        }
    }
}

declare module '../../../../lib/3/consParams' {
    interface consParams {
        wgslNodeBuilder: string[]
    }
}

declare module '../../../../lib/3/objParams' {
    interface objParams {
        wgslNodeBuilder: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts

consParams.wgslNodeBuilder = [
    'object',
    'renderer',
    'shader',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts    

objParams.wgslNodeBuilder = [...objParams.nodeBuilder,
].distinct()

export type WGSLNodeBuilderProps = Node<WGSLNodeBuilder, typeof WGSLNodeBuilder, {}>

declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeBuilder: Partial<{}>
    }
}

defaults.wgslNodeBuilder = {}

