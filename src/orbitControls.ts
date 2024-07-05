<<<<<<< HEAD
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


    // if (enableDamping) 
    //     cameraControls.enableDamping = true

    // if (cameraControls.enableDamping == true)
    //     useFrame(() => { cameraControls.update() })
    // else
    //     cameraControls.update()

    useEffect(() => {
        const cam = useThree("camera")
        const dom = domElement ?? useThree("domElement")

        if (!$$(cam)) return
        if (!$$(dom)) return

        const cameraControls = new OrbitControls($$(cam), $$(dom))

=======
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
>>>>>>> origin/main
        cameraControls.enableDamping = $$(enableDamping)

        if (cameraControls.enableDamping == true)
            useFrame(() => { cameraControls.update() })
        else
            cameraControls.update()
    })
<<<<<<< HEAD
}


declare module './three' {
    interface Three {
        OrbitControls: typeof orbitControls
    }
=======
>>>>>>> origin/main
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