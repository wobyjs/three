import { ReflectorForSSRPassOptions, ReflectorForSSRPass } from 'three/examples/jsm/objects/ReflectorForSSRPass.js'
export * from 'three/examples/jsm/objects/ReflectorForSSRPass.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        reflectorForSsrPass: string[]
        reflectorShader: string[]
        reflectorForSsrPassOptions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        reflectorForSsrPass: string[]
        reflectorShader: string[]
        reflectorForSsrPassOptions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ReflectorForSSRPass.d.ts

consParams.reflectorShader = [
    'name',
    'defines',
    'uniforms',
    'vertexShader',
    'fragmentShader',
].distinct()


consParams.reflectorForSsrPassOptions = [
    'clipBias',
    'textureWidth',
    'textureHeight',
    'color',
    'useDepthTexture',
    'shader',
].distinct()


consParams.reflectorForSsrPass = [
    'geometry',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ReflectorForSSRPass.d.ts

objParams.reflectorShader = [
    'name',
    'defines',
    'uniforms',
    'vertexShader',
    'fragmentShader',
].distinct()


objParams.reflectorForSsrPassOptions = [
    'clipBias',
    'textureWidth',
    'textureHeight',
    'color',
    'useDepthTexture',
    'shader',
].distinct()


objParams.reflectorForSsrPass = [
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
].distinct()

export type ReflectorForSSRPassProps<TGeometry extends BufferGeometry = BufferGeometry> = Node<ReflectorForSSRPass<TGeometry>, typeof ReflectorForSSRPass<TGeometry>, { geometry: TGeometry; options: ReflectorForSSRPassOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        reflectorForSsrPass: Partial<{ geometry: BufferGeometry; options: ReflectorForSSRPassOptions; }>
    }
}

defaults.reflectorForSsrPass = {}

