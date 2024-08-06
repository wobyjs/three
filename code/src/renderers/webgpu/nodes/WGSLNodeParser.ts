import { Node } from '../../../../three-types'
import WGSLNodeParser from 'three/src/renderers/webgpu/nodes/WGSLNodeParser.js'
export { WGSLNodeParser }
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objParams } from '../../../../lib/3/objParams'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        WGSLNodeParser: typeof WGSLNodeParser
    }
}

Three.WGSLNodeParser = WGSLNodeParser

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wgslNodeParser: WGSLNodeParserProps,
        }
    }
}

declare module '../../../../lib/3/consParams' {
    interface consParams {
        wgslNodeParser: string[]
    }
}

declare module '../../../../lib/3/objParams' {
    interface objParams {
        wgslNodeParser: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts

consParams.wgslNodeParser = [
    'source',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts    

objParams.wgslNodeParser = [...objParams.nodeBuilder,
].distinct()

export type WGSLNodeParserProps = Node<WGSLNodeParser, typeof WGSLNodeParser, { source: string }>

declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeParser: Partial<{ source: string }>
    }
}

defaults.wgslNodeParser = {}

