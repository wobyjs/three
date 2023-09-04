import { $$ } from "voby"
import { jsx } from "./jsx-runtime/jsx-dev-runtime"
import { param, paramTypes } from "./params"
import { BoxGeometry, MeshBasicMaterial, PerspectiveCamera, Scene } from "three"

const defaults = {
    canvas3D: { scene: () => new Scene(), camera: () =>  new PerspectiveCamera() },
    scene: {},
    mesh: { geometry: () => new BoxGeometry(), material: () => new MeshBasicMaterial() },
    perspectiveCamera: { fov: 50, aspect: 1, near: 0.1, far: 2000 },
    webGLRenderer: {},
    boxGeometry: { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 },
    meshToonMaterial: {}
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
        const m = meta.filter(m => (m.component + '').endsWith(paramKey))[0]
        const paramName = param[component as any][i]
        if (!r[paramName] && m?.component) {
            r[paramName] = jsx(m.component as any, m.props as any)
        }
    })

    //use defaults if there is undefined components
    paramName.map((key) => {
        r[key] = !r[key]  ? $$(defaults[component as any][key]) : r[key]
    })

    return r
}