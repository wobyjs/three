// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */
import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, MeshToonMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { $, } from "voby"
import { render } from "./jsx-runtime/jsx-dev-runtime"
import { useFrame } from "./canvas3D"
// import "./types/Canvas"
const App = () => {


    const Test = (props) => {
        const material = new MeshBasicMaterial({ color: 0x00ff00 })
        const box = new BoxGeometry(1, 1, 1)
        useFrame(() => {
            box.rotateX(0.01)
        })
        useFrame(()=>{
            box.rotateY(0.01)
            box.rotateZ(0.01)
        })
        return <mesh geometry={box} material={material}></mesh>
    }
    return (
        <canvas3D scene={new Scene()} camera={new PerspectiveCamera()}  >
            <Test />

        </canvas3D >


    )
}



render(App, document.body)