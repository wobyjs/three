import { $$, $, useEffect } from "voby";
import { useFrame, useThree } from "./canvas3D"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export type orbitProps = {
    camera?: THREE.Camera
    domElement?: HTMLElement
    enableDamping?: boolean
    // onChange?: (e?: OrbitControlsChangeEvent) => void
    // onEnd?: (e?: Event) => void
    // onStart?: (e?: Event) => void
}

export function orbitControls(camera?, domElement?, enableDamping?) {
    const camera1 = useThree("camera")
    const domElement1 = useThree("domElement")
    const cameraControls = new OrbitControls($$(camera1), $$(domElement1));

    if (enableDamping) {
        cameraControls.enableDamping = true
    }

    if (cameraControls.enableDamping == true) {
        useFrame(() => {
            cameraControls.update()
        })
    }
    else {
        cameraControls.update();

    }


}