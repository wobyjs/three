
import * as Three from "three"

declare module 'three' {
    let Canvas3D: Canvas3D
    let OrbitControls: orbitControls
    let Text: text
    let TextGeometry: TextGeometry
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
