import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
export * from 'three/examples/jsm/controls/PointerLockControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PointerLockControls: typeof PointerLockControls
    }
}

Three.PointerLockControls = PointerLockControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointerLockControls: PointerLockControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pointerLockControls: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pointerLockControls: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\PointerLockControls.d.ts

consParams.pointerLockControls = [
    'camera',
    'domElement',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\PointerLockControls.d.ts    

objParams.pointerLockControls = [
    'camera',
    'domElement',
    // API
    'isLocked',
    'minPolarAngle',
    'maxPolarAngle',
    'pointerSpeed',
].distinct()


export type PointerLockControlsProps = Node<PointerLockControls, typeof PointerLockControls, { object: Camera; domElement: HTMLElement; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pointerLockControls: Partial<{ object: Camera; domElement: HTMLElement; }>
    }
}

defaults.pointerLockControls = {}

