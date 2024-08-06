import { Node } from '../../../three-types'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'
export * from 'three/examples/jsm/webxr/XRButton.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRButton: typeof XRButton
    }
}

Three.XRButton = XRButton

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrButton: XRButtonProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrButton: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        xrButton: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRButton.d.ts

consParams.xrButton = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRButton.d.ts

objParams.xrButton = [
].distinct()

export type XRButtonProps = Node<XRButton, typeof XRButton, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrButton: {}
    }
}

defaults.xrButton = {}

