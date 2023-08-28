// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */
import { BoxGeometry, MeshBasicMaterial, PerspectiveCamera, Scene } from "three"
import { render } from "./jsx-runtime/jsx-dev-runtime"
import { useFrame } from "./canvas3D"
// import "./types/Canvas"
const App = () => {
    // const material = new MeshBasicMaterial({ color: 0x00ff00 })
    // const box = new BoxGeometry(1, 1, 1)

    // useFrame(() => {
    //     box.rotateX(0.01)
    // })
    // useFrame(() => {
    //     box.rotateY(0.01)
    //     box.rotateZ(0.01)
    // })

    const Test = (props) => {
        const material = new MeshBasicMaterial({ color: 0x00ff00 })
        const box = new BoxGeometry(1, 1, 1)
        useFrame(() => {
            box.rotateX(0.01)
        })
        useFrame(() => {
            box.rotateY(0.01)
            box.rotateZ(0.01)
        })
        return <mesh geometry={box} material={material}></mesh>
    }
    return (

        <canvas3D>
            {/* <Test/> */}
            {/* <scene />
            <perspectiveCamera fov={1} aspect={1} near={1} far={1} />
            <mesh geometry={box} material={material} /> */}
        </canvas3D >


    )
}



render(App, document.body)