
import * as Three from "three"

declare module 'three' {
    let Canvas3D: Canvas3D
    let OrbitControls: orbitControls
    let Text: text
    // let TextGeometry: TextGeometry
    let Gltf: gltf
}

type canvasProperties = {
    frame?: Observable<(() => void)[]>,
    renderer?: Observable<three.WebGLRenderer>,
    scene?: Observable<three.Scene>,
    camera?: Observable<three.OrthographicCamera | three.PerspectiveCamera>,//?
    domElement?: Observable<HTMLCanvasElement>,
    width?: Observable<number>,
    height?: Observable<number>
}

export type canvasProps = {
    scene?: ObservableMaybe<three.Scene>,
    camera?: ObservableMaybe<three.OrthographicCamera | three.PerspectiveCamera>,
    width?: ObservableMaybe<number>,
    height?: ObservableMaybe<number>,
    children?: JSX.Child,
}

export interface GLTFProps {
    path: string,
}

export type orbitProps = {
    camera?: THREE.Camera
    domElement?: HTMLElement
    enableDamping?: boolean
    // onChange?: (e?: OrbitControlsChangeEvent) => void
    // onEnd?: (e?: Event) => void
    // onStart?: (e?: Event) => void
}



