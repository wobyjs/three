
import * as Three from "three"
import { Canvas3D } from "../canvas3D"
import { orbitControls } from "../OrbitControls"
import { Text, textGeometryProps } from "../Text"

declare module 'three' {
    let Canvas3D: Canvas3D
    let OrbitControls: orbitControls
    let Text: text
}





