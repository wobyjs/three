
/* IMPORT */

// import '../types';
// import Fragment from '../components/fragment';
// // import createElement from '../methods/create_element';
// // import { wrapCloneElement } from '../methods/wrap_clone_element';
import * as Three from "three"
import { Wrapper } from './types'
import {param} from './params'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            scene: Wrapper<Three.Scene, 'scene'>,
            mesh: Wrapper<Three.Mesh, 'mesh'>,
            perspectiveCamera: Wrapper<Three.PerspectiveCamera, "perspectiveCamera">,
            webGLRenderer: Wrapper<Three.WebGLRenderer, 'webGLRenderer'>,
            boxGeometry: Wrapper<Three.BoxGeometry, 'boxGeometry'>
            meshToonMaterial: Wrapper<Three.MeshToonMaterial, "meshToonMaterial">
        }
    }
}
let a: JSX.IntrinsicElements['boxGeometry']


const defaults = {
    mesh: { geometry: () => new Three.BufferGeometry(), material: () => new Three.MeshBasicMaterial() }
}

const jsx = <P = {}>(component: keyof JSX.IntrinsicElements, props: P, key: string): JSX.Element => {
    return () => {
        // return new Three[component](props.children[0],props.children[1])
        //if (!props.args)
        let a: []
        param[component].map(k => props[k])
        if (!props) {

        }
        const r = new Three[component as any](...a)
        return r
    }
    // return wrapCloneElement(createElement<P>(component as any, props, key), component, props);
};


/* EXPORT */

export { jsx, jsx as jsxDEV };
