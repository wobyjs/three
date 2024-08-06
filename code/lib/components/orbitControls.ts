import { useEffect, $$, ObservableMaybe } from "woby"
import { useCamera, useFrame, useThree } from "../hooks"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Three } from '../3/three'
import { Camera } from "three/src/cameras/Camera"

// export type orbitProps = {
//     camera?: Camera
//     domElement?: HTMLElement
//     enableDamping?: boolean
//     // onChange?: (e?: OrbitControlsChangeEvent) => void
//     // onEnd?: (e?: Event) => void
//     // onStart?: (e?: Event) => void
// }


export function orbitControls(camera?: Camera, domElement?: HTMLElement, enableDamping?: ObservableMaybe<boolean>) {


    // if (enableDamping) 
    //     cameraControls.enableDamping = true

    // if (cameraControls.enableDamping == true)
    //     useFrame(() => { cameraControls.update() })
    // else
    //     cameraControls.update()

    useEffect(() => {
        const cam = useCamera()
        const dom = domElement ?? useThree("domElement")

        if (!$$(cam)) return
        if (!$$(dom)) return

        const cameraControls = new OrbitControls($$(cam), $$(dom))

        cameraControls.enableDamping = $$(enableDamping)

        if (cameraControls.enableDamping == true)
            useFrame(() => { cameraControls.update() })
        else
            cameraControls.update()
    })
}


declare module '../3/three' {
    interface Three {
        //@ts-ignore
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