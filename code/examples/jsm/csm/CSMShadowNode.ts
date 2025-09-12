import { CSMShadowNode } from 'three/examples/jsm/csm/CSMShadowNode.js'
export * from 'three/examples/jsm/csm/CSMShadowNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Type assertion for CSMShadowNode

declare module '../../../lib/3/three' {
    interface Three {
        CSMShadowNode: typeof CSMShadowNode
    }
}

Three.CSMShadowNode = CSMShadowNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csmShadowNode: CSMShadowNodeProps
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        csmShadowNode: typeof csmShadowNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        csmShadowNode: typeof _csmShadowNode
    }
}

const csmShadowNode = ([
] as const).distinct()
consParams.csmShadowNode = csmShadowNode

const _csmShadowNode = ([
] as const).distinct()
objProps.csmShadowNode = _csmShadowNode

export type CSMShadowNodeProps = {
    // Shadow node configuration props
    light?: any
    cascades?: number
    maxFar?: number
    mode?: string
    lightMargin?: number
    customSplitsCallback?: Function
}

declare module '../../../lib/3/defaults' {
    interface defaults {
        csmShadowNode: Partial<CSMShadowNodeProps>
    }
}

defaults.csmShadowNode = {}
