import { Node } from '../../../../three-types'
import WGSLNodeBuilder from 'three/src/renderers/webgpu/nodes/WGSLNodeBuilder.js'
export { WGSLNodeBuilder }
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
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
        wgslNodeBuilder: typeof wgslNodeBuilder
    }
}

declare module '../../../../lib/3/objProps' {
    interface objProps {
        wgslNodeBuilder: typeof _wgslNodeBuilder
    }
}



const wgslNodeBuilder = ([
    'object',
    'renderer',
    'shader',
] as const).distinct()
consParams.wgslNodeBuilder = wgslNodeBuilder



const _wgslNodeBuilder = ([...objProps.nodeBuilder,
] as const).distinct()
objProps.wgslNodeBuilder = _wgslNodeBuilder

export type WGSLNodeBuilderProps = Node<WGSLNodeBuilder, typeof WGSLNodeBuilder, {}>

declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeBuilder: Partial<{}>
    }
}

defaults.wgslNodeBuilder = {}

