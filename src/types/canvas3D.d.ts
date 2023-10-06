
import * as Three from "three"
import { Canvas3D } from "../canvas3D"
import { orbitControls } from "../OrbitControls"
import { Text, textGeometryProps } from "../Text"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"

declare module 'three' {
    let Canvas3D: Canvas3D
    let OrbitControls: orbitControls
    let Text: text
    // let TextGeometry: TextGeometry
    let Gltf: gltf
}





