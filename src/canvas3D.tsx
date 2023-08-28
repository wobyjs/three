import * as three from "three"
import { useContext, createContext } from "voby"

export const Frames = createContext<(() => void)[]>([])
export const Frame = createContext<() => void>()

export const useFrames = () => useContext(Frames)

export const useFrame = (fn: () => void) => {
    const fs = useFrames()
    fs.push(fn)
}

export class Canvas3D {
    webGlRenderer: three.WebGLRenderer
    scene: three.Scene
    camera: three.Camera
    private _width = window.innerWidth
    private _height = window.innerHeight

    constructor(scene: three.Scene = new three.Scene(), camera: three.Camera = new three.PerspectiveCamera()) {
        this.scene = scene
        this.camera = camera
        this.webGlRenderer = new three.WebGLRenderer()
        this.webGlRenderer.setSize(this._width, this._height)

        this.animate()
    }


    animate() {
        const fs = useFrames()
        requestAnimationFrame(() => this.animate());
        fs.forEach(f => f())

        this.webGlRenderer.render(this.scene, this.camera)

    }

    get domElement() {
        return this.webGlRenderer.domElement
    }

    set width(val: number) {
        this.webGlRenderer.setSize(this._width = val, this._height)
    }

    set height(val: number) {
        this.webGlRenderer.setSize(this._width, this._height = val)

    }

    set size([width, height]: [number, number]) {
        this.webGlRenderer.setSize(width, height)
    }


    set children(val: three.Object3D<three.Event>[]) {
        this.camera.position.z = 5
        val.flat().forEach((obj) => {
            this.scene.add(obj)
        })
        this.animate()
    }
}
