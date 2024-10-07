import { Node } from '../../../../three-types'
import WGSLNodeParser from 'three/src/renderers/webgpu/nodes/WGSLNodeParser.js'
export { WGSLNodeParser }
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
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
        wgslNodeParser: typeof wgslNodeParser
    }
}

declare module '../../../../lib/3/objProps' {
    interface objProps {
        wgslNodeParser: typeof _wgslNodeParser
    }
}



const wgslNodeParser = ([
    'source',
] as const).distinct()
consParams.wgslNodeParser = wgslNodeParser



const _wgslNodeParser = ([...objProps.nodeBuilder,
] as const).distinct()
objProps.wgslNodeParser = _wgslNodeParser

export type WGSLNodeParserProps = Node<WGSLNodeParser, typeof WGSLNodeParser, { source: string }>

declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeParser: Partial<{ source: string }>
    }
}

defaults.wgslNodeParser = {}

