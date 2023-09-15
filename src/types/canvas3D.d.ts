
import * as Three from "three"
import { Canvas3D } from "../canvas3D"
import { orbitControls } from "../OrbitControls"

declare module 'three' {
    let Canvas3D: Canvas3D
    let OrbitControls: orbitControls
}





