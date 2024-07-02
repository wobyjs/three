import { useEffect, $$, ObservableMaybe } from "woby"
import { useFrame, useThree } from "./context"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as three from 'three'
import { Three } from './three'

// export type orbitProps = {
//     camera?: three.Camera
//     domElement?: HTMLElement
//     enableDamping?: boolean
//     // onChange?: (e?: OrbitControlsChangeEvent) => void
//     // onEnd?: (e?: Event) => void
//     // onStart?: (e?: Event) => void
// }


export function orbitControls(camera?: three.Camera, domElement?: HTMLElement, enableDamping?: ObservableMaybe<boolean>) {
    const cam = useThree("camera")
    const dom = domElement ?? useThree("domElement")
    const cameraControls = new OrbitControls($$(cam), $$(dom))

    // if (enableDamping) 
    //     cameraControls.enableDamping = true

    // if (cameraControls.enableDamping == true)
    //     useFrame(() => { cameraControls.update() })
    // else
    //     cameraControls.update()

    useEffect(() => {
        cameraControls.enableDamping = $$(enableDamping)

        if (cameraControls.enableDamping == true)
            useFrame(() => { cameraControls.update() })
        else
            cameraControls.update()
    })
}


declare module './three' {
    interface Three {
        OrbitControls: typeof orbitControls
    }
}

//@ts-ignore
Three.OrbitControls = orbitControls


// //@ts-ignore
// consParams.orbitControls = [
// ].distinct()

// //@ts-ignore
// objParams.orbitControls = [
// ]

// //@ts-ignore
// defaults.orbitControls = {  }