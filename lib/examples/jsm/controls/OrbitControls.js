// import { Node } from '../../../three-types'
import { useEffect, $$ } from "woby";
import { useCamera, useFrame, useThree } from "../../../hooks";
import { OrbitControls as orbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { consParams } from '../../../../lib/3/consParams'
// import { objParams } from '../../../../lib/3/objParams'
// import { defaults } from '../../../../lib/3/defaults'
//import { consParams, objParams, defaults } from "../../../three"
// export type orbitProps = {
//     camera?: three.Camera
//     domElement?: HTMLElement
//     enableDamping?: boolean
//     // onChange?: (e?: OrbitControlsChangeEvent) => void
//     // onEnd?: (e?: Event) => void
//     // onStart?: (e?: Event) => void
// }
export function OrbitControls({ camera, domElement, enableDamping }) {
    // if (enableDamping) 
    //     cameraControls.enableDamping = true
    // if (cameraControls.enableDamping == true)
    //     useFrame(() => { cameraControls.update() })
    // else
    //     cameraControls.update()
    useEffect(() => {
        const cam = camera ?? useCamera();
        const dom = domElement ?? useThree("domElement");
        if (!$$(cam))
            return;
        if (!$$(dom))
            return;
        const cameraControls = new orbitControls($$(cam), $$(dom));
        cameraControls.enableDamping = $$(enableDamping);
        if (cameraControls.enableDamping == true)
            useFrame(() => { cameraControls.update(); });
        else
            cameraControls.update();
    });
}
// declare module '../../../../lib/3/three' {
//     interface Three {
//         //@ts-ignore
//         OrbitControls: typeof orbitControls
//     }
// }
// //@ts-ignore
// Three.OrbitControls = orbitControls
// declare module 'woby' {
//     namespace JSX {
//         interface IntrinsicElements {
//             OrbitControls: OrbitControlsProps,
//         }
//     }
// }
// declare module '../../../../lib/3/consParams' {
//     interface consParams {
//         orbitControls: string[]
//     }
// }
// declare module '../../../../lib/3/objParams' {
//     interface objParams {
//         orbitControls: string[]
//     }
// }
// consParams.orbitControls = [
// ].distinct()
// objParams.orbitControls = [
// ]
// defaults.orbitControls = {}
// export type OrbitControlsProps = Node<typeof orbitControls, typeof orbitControls, { domElement: HTMLElement; enableDamping?: ObservableMaybe<boolean> }>
// declare module '../../../../lib/3/defaults' {
//     interface defaults {
//         //@ts-ignore
//         orbitControls: { domElement?: HTMLElement; enableDamping?: ObservableMaybe<boolean> }
//     }
// }
// defaults.orbitControls = {}
