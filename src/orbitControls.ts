import { useEffect, $$, ObservableMaybe, type JSX } from "woby"
import { useFrame, useThree } from "./hooks"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
// import { OrbitControls } from "three/addons/controls/OrbitControls"
import { Three } from "./three"
import * as THREE from 'three'

// export type orbitProps = {
//     camera?: THREE.Camera
//     domElement?: JSX.Element
//     enableDamping?: ObservableMaybe<boolean>
//     // onChange?: (e?: OrbitControlsChangeEvent) => void
//     // onEnd?: (e?: Event) => void
//     // onStart?: (e?: Event) => void
// } & OrbitControls

export function orbitControls(camera?: THREE.Camera, domElement?: JSX.Element, enableDamping?: ObservableMaybe<boolean>) {
    const cam = useThree("camera")
    const dom = domElement ?? useThree("domElement")
    const cameraControls = new OrbitControls($$(cam), $$(dom))

    useEffect(() => {
        cameraControls.enableDamping = $$(enableDamping)

        if (cameraControls.enableDamping == true)
            useFrame(() => { cameraControls.update() })
        else
            cameraControls.update()
    })
}

Three.OrbitControls = orbitControls
