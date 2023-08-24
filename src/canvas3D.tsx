import * as three from "three"



export class Canvas3D {
    webGlRenderer: three.WebGLRenderer
    scene: three.Scene
    camera: three.Camera


    constructor(scene: three.Scene = new three.Scene(), camera: three.Camera = new three.PerspectiveCamera()) {
        this.scene = scene
        this.camera = camera
        this.webGlRenderer = new three.WebGLRenderer()
        this.animate()
    }

    frame: () => void

    animate() {
        requestAnimationFrame(() => this.animate);

        this.frame?.()

        this.webGlRenderer.render(this.scene, this.camera)
    }

    get domElement() {
        return this.webGlRenderer.domElement
    }

    private _width = 300
    private _height = 300
    set width(val: number) {
        this.webGlRenderer.setSize(this._width = val, this._height)
    }

    set height(val: number) {
        this.webGlRenderer.setSize(this._width, this._height = val)

    }

    set size([width, height]: [number, number]) {
            this.webGlRenderer.setSize(width, height)
    }

    set children(val: three.Object3D<three.Event>[]){
        this.scene.add(val)
    }
}
