import { $$ } from "voby"
import { jsx, toUpper } from "./jsx-runtime/jsx-dev-runtime"
import { param, paramTypes } from "./params"
import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Scene } from "three"

const defaults = {
    canvas3D: { scene: () => new Scene(), camera: () => new PerspectiveCamera() },
    orbitControls: { camera: null, domElement: null, enableDamping: false },
    scene: {},
    mesh: { geometry: () => new BoxGeometry(), material: () => new MeshBasicMaterial() },
    perspectiveCamera: { fov: 50, aspect: 1, near: 0.1, far: 2000 },
    orthographicCamera: { left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 2000 },
    webGLRenderer: {},
    boxGeometry: { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 },
    meshToonMaterial: {},
    meshStandardMaterial: { parameters: () => new MeshStandardMaterial() },
    meshBasicMaterial: { parameters: () => new MeshBasicMaterial() },
    ambientLight: { color: 0xffffff, intensity: 1 },
    spotLight: {
        color: 0xffffff, intensity: 1,
        distance: 0,
        angle: Math.PI / 3,
        penumbra: 0,
        decay: 2,
    },
    pointLight: { color: 0xffffff, intensity: 1, distance: 0, decay: 2 }


}

export const consP = (pn = undefined, pt = undefined, meta: any[], props, component: string) => {
    //case1 = object in constructor parameter (at children, at props)
    //case2 = primitive in constructor parameters, use args[]
    //case3 = set remaining props using Object.assign 
    const paramName: string[] = pn ?? param[component as any]
    const paramType: string[] = pt ?? paramTypes[component as any]

    if (props.args) return props.args

    const r = []
    paramName.map(key => r[key] = props[key])
    paramType.map((paramKey, i) => {
        const paramName = param[component as any][i]

        if (props[paramName]) {
            r[paramName] = props[paramName]
        }
        else {
            const m = meta.filter(m => (m.component + '').endsWith(toUpper(paramKey)))[0]
            if (!r[paramName] && m?.component) {
                r[paramName] = jsx(m.component as any, m.props as any)
            }
        }
    })

    //use defaults if there is undefined components
    paramName.map((key) => {
        r[key] = !r[key] ? $$(defaults[component as any][key]) : r[key]
    })

    return r
}