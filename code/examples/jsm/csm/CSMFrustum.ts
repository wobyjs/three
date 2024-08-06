import { Node, WrapAsString } from '../../../three-types'
import { CSMFrustum, CSMFrustumParameters } from 'three/examples/jsm/csm/CSMFrustum.js'
export default CSMFrustum
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        CSMFrustum: typeof CSMFrustum
    }
}

Three.CSMFrustum = CSMFrustum

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csmFrustum: CSMFrustumProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        csmFrustum: string[]
        csmFrustumVerticies: string[]
        csmFrustumParameters: WrapAsString<CSMFrustumParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        csmFrustum: string[]
        csmFrustumVerticies: string[]
        csmFrustumParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMFrustum.d.ts

consParams.csmFrustumVerticies = [
    'near',
    'far',
].distinct()


consParams.csmFrustumParameters = ([
    'projectionMatrix',
    'maxFar',
] as const).toObject()


consParams.csmFrustum = [
    'data',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMFrustum.d.ts

objParams.csmFrustumVerticies = [
    'near',
    'far',
].distinct()

objParams.csmFrustumParameters = [
    'projectionMatrix',
    'maxFar',
].distinct()


objParams.csmFrustum = [
    'vertices',
].distinct()

export type CSMFrustumProps = Node<CSMFrustum, typeof CSMFrustum, { data?: CSMFrustumParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cSMFrustum: Partial<{ data?: CSMFrustumParameters; }>
    }
}

defaults.cSMFrustum = {}

