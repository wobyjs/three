import { Node } from '../../../../three-types'
import WGSLNodeFunction from 'three/src/renderers/webgpu/nodes/WGSLNodeFunction.js'
export { WGSLNodeFunction }
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        WGSLNodeFunction: typeof WGSLNodeFunction
    }
}

Three.WGSLNodeFunction = WGSLNodeFunction

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wgslNodeFunction: WGSLNodeFunctionProps,
        }
    }
}

declare module '../../../../lib/3/consParams' {
    interface consParams {
        wgslNodeFunction: typeof wgslNodeFunction
    }
}

declare module '../../../../lib/3/objProps' {
    interface objProps {
        wgslNodeFunction: typeof _wgslNodeFunction
    }
}



const wgslNodeFunction = ([
    'source',
] as const).distinct()
consParams.wgslNodeFunction = wgslNodeFunction



const _wgslNodeFunction = ([...objProps.nodeFunction,
] as const).distinct()
objProps.wgslNodeFunction = _wgslNodeFunction

export type WGSLNodeFunctionProps = Node<WGSLNodeFunction, typeof WGSLNodeFunction, { source: string }>

declare module '../../../../lib/3/defaults' {
    interface defaults {
        wgslNodeFunction: Partial<{ source: string }>
    }
}

defaults.wgslNodeFunction = {}

