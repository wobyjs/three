// / <reference path="../jsx-runtime" />
/** @jsxImportSource ../jsx-runtime */

import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, TextureLoader } from "three"
import { render } from "../jsx-runtime/jsx-dev-runtime"
import { useFrame, useLoader, } from "../canvas3D"
import { $, useEffect, useMemo } from "woby"
import "../orbitControls"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"

// import "./types/Canvas"
const App = () => {
    const clicked = $(false)
    const material = new MeshBasicMaterial({ color: "black" })
    const parameters = { font: useLoader(FontLoader, { path: "fonts/helvetiker_regular.typeface.json" }), size: 1, height: 0.1 }

    const Test = (props) => {
        const ref = $<Mesh>()
        const texture = new TextureLoader().load('../textures/usedSteel.png');
        const texture1 = new TextureLoader().load('textures/rock.jpeg');


        const material = new MeshBasicMaterial()

        const box = new BoxGeometry(1, 1, 1)

        useFrame(() => {
            $$(ref).rotateX(0.01)
            $$(ref).rotateY(0.01)
            $$(ref).rotateZ(0.01)
        })

        return (
            <mesh ref={ref} {...props} >
                <boxGeometry />
                <meshBasicMaterial map={texture1} />
            </mesh>
        )
    }


    return (

        <canvas3D>
            <Test onClick={() => { clicked(!clicked()) }} />
            {/* <Text str={() => clicked() ? "ABCD" : "cde"} pathToFont="fonts/helvetiker_regular.typeface.json" /> */}
            <orbitControls />
            <mesh material={material}>
                <textGeometry str={"abc"} parameters={parameters} />
            </mesh>
        </canvas3D >


    )
}

render(App, document.body)