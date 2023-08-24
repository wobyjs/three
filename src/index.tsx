// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */
import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, MeshToonMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { $, } from "voby"
import { render } from "./jsx-runtime/jsx-dev-runtime"
import { canvas3D } from "./canvas3D"
// import "./types/Canvas"
const App = () => {

    const ref = $<JSX.IntrinsicElements['mesh']>()
    const material = new MeshToonMaterial({ color: 0x00ff00 })

    return (
        <canvas3D scene={new Scene()} camera={new PerspectiveCamera()} size={[500, 500]} >
            <mesh geometry={new BoxGeometry()} material={new MeshBasicMaterial()}>
            </mesh>     

        </canvas3D >


    )
}

render(App, document.body)