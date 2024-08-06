import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'
export * from 'three/examples/jsm/controls/FlyControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FlyControls: typeof FlyControls
    }
}

Three.FlyControls = FlyControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            flyControls: FlyControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        flyControls: string[]
        flyControlsEventMap: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        flyControls: string[]
        flyControlsEventMap: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FlyControls.d.ts

consParams.flyControlsEventMap = [
    'change',
].distinct()

consParams.flyControls = [
    'object',
    'domElement',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FlyControls.d.ts

objParams.flyControlsEventMap = [
    'change',
].distinct()

objParams.flyControls = [
    'autoForward',
    'domElement',
    'dragToLook',
    'enabled',
    'movementSpeed',
    'object',
    'rollSpeed',
].distinct()

export type FlyControlsProps = Node<FlyControls, typeof FlyControls, { object: Camera; domElement?: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        flyControls: Partial<{ object: Camera; domElement?: HTMLElement; }>
    }
}

defaults.flyControls = {}

