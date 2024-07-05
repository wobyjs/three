// / <reference path="../jsx-runtime" />
/** @jsxImportSource ../jsx-runtime */

import { BoxGeometry, CameraHelper, Mesh, MeshBasicMaterial, OrthographicCamera, PerspectiveCamera, PointLight, TextureLoader, Vector3 } from "three"
import { render } from "../jsx-runtime/jsx-dev-runtime"
import { useThree, } from "../canvas3D"
import { $, $$, useEffect, useMemo } from "woby"
import "../gltf"
import "../orbitControls"

const App = () => {
    const clicked = $(false)
    const material = new MeshBasicMaterial({ color: "black" })
    const ref = $()
    const lightRef = $<PointLight>()
    const scene = useThree("scene")


    useEffect(() => {
        if (!$$(ref)) return

        $$(lightRef).castShadow = true
        $$(ref).castShadow = true
        $$(ref).receiveShadow = true
        console.log($$(ref))
    })

    return (
        <canvas3D camera={new OrthographicCamera()}>
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 0, 0]} angle={0.15} penumbra={1} castShadow />
            <pointLight position={[0, 0, 0]} ref={lightRef} />
            <gltf path={"models/model.gltf"} ref={ref} position={[0, 0, 0]} />
            <orbitControls enableDamping />
        </canvas3D >

    )


}

render(App, document.body)