import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js'
export * from 'three/examples/jsm/controls/FirstPersonControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FirstPersonControls: typeof FirstPersonControls
    }
}

Three.FirstPersonControls = FirstPersonControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            firstPersonControls: FirstPersonControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        firstPersonControls: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        firstPersonControls: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FirstPersonControls.d.ts

consParams.firstPersonControls = [
    'object',
    'domElement',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FirstPersonControls.d.ts

objParams.firstPersonControls = [
    'object',
    'domElement',
    'enabled',
    'movementSpeed',
    'lookSpeed',
    'lookVertical',
    'autoForward',
    'activeLook',
    'heightSpeed',
    'heightCoef',
    'heightMin',
    'heightMax',
    'constrainVertical',
    'verticalMin',
    'verticalMax',
    'mouseDragOn',
].distinct()

export type FirstPersonControlsProps = Node<FirstPersonControls, typeof FirstPersonControls, { object: Camera; domElement?: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        firstPersonControls: Partial<{ object: Camera; domElement?: HTMLElement; }>
    }
}

defaults.firstPersonControls = {}

