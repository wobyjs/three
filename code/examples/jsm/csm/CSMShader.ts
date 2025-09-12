import { CSMShader } from 'three/examples/jsm/csm/CSMShader.js'
export * from 'three/examples/jsm/csm/CSMShader.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Type assertion for missing type definitions

// Declare module type to resolve TypeScript errors
declare module 'three/examples/jsm/csm/CSMShader.js' {
    const CSMShader: any
}

declare module '../../../lib/3/three' {
    interface Three {
        CSMShader: typeof CSMShader
    }
}

Three.CSMShader = CSMShader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csmShader: CSMShaderProps
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        csmShader: typeof csmShader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        csmShader: typeof _csmShader
    }
}

const csmShader = ([
] as const).distinct()
consParams.csmShader = csmShader

const _csmShader = ([
] as const).distinct()
objProps.csmShader = _csmShader

export type CSMShaderProps = {
    // Shader object doesn't have props
}

declare module '../../../lib/3/defaults' {
    interface defaults {
        csmShader: Partial<CSMShaderProps>
    }
}

defaults.csmShader = {}
