import { ReflectorForSSRPassOptions, ReflectorForSSRPass } from 'three/examples/jsm/objects/ReflectorForSSRPass.js'
export * from 'three/examples/jsm/objects/ReflectorForSSRPass.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ReflectorForSSRPass: typeof ReflectorForSSRPass
    }
}

Three.ReflectorForSSRPass = ReflectorForSSRPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            reflectorForSsrPass: ReflectorForSSRPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        reflectorForSsrPass: typeof reflectorForSsrPass
        reflectorShader: typeof reflectorShader
        reflectorForSsrPassOptions: typeof reflectorForSsrPassOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        reflectorForSsrPass: typeof _reflectorForSsrPass
        reflectorShader: typeof _reflectorShader
        reflectorForSsrPassOptions: typeof _reflectorForSsrPassOptions
    }
}



const reflectorShader = ([
    'name',
    'defines',
    'uniforms',
    'vertexShader',
    'fragmentShader',
] as const).distinct()
consParams.reflectorShader = reflectorShader


const reflectorForSsrPassOptions = ([
    'clipBias',
    'textureWidth',
    'textureHeight',
    'color',
    'useDepthTexture',
    'shader',
] as const).distinct()
consParams.reflectorForSsrPassOptions = reflectorForSsrPassOptions


const reflectorForSsrPass = ([
    'geometry',
    'options',
] as const).distinct()
consParams.reflectorForSsrPass = reflectorForSsrPass



const _reflectorShader = ([
    'name',
    'defines',
    'uniforms',
    'vertexShader',
    'fragmentShader',
] as const).distinct()
objProps.reflectorShader = _reflectorShader


const _reflectorForSsrPassOptions = ([
    'clipBias',
    'textureWidth',
    'textureHeight',
    'color',
    'useDepthTexture',
    'shader',
] as const).distinct()
objProps.reflectorForSsrPassOptions = _reflectorForSsrPassOptions


const _reflectorForSsrPass = ([
    'options',
    'needsUpdate',
    'maxDistance',
    'opacity',
    'color',
    'resolution',
    'distanceAttenuation',
    'fresnel',
    'material',
    'renderTarget',
] as const).distinct()
objProps.reflectorForSsrPass = _reflectorForSsrPass

export type ReflectorForSSRPassProps<TGeometry extends BufferGeometry = BufferGeometry> = Node<ReflectorForSSRPass<TGeometry>, typeof ReflectorForSSRPass<TGeometry>, { geometry: TGeometry; options: ReflectorForSSRPassOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        reflectorForSsrPass: Partial<{ geometry: BufferGeometry; options: ReflectorForSSRPassOptions; }>
    }
}

defaults.reflectorForSsrPass = {}

