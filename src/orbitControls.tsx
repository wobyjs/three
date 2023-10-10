import { $$ } from "voby";
import { useFrame, useThree } from "./canvas3D"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Three } from "./three"

export function orbitControls(camera?, domElement?, enableDamping?) {
    const camera1 = useThree("camera")
    const domElement1 = domElement ?? useThree("domElement")
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

Three.OrbitControls = orbitControls
