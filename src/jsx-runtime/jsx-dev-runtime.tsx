/* IMPORT */
import * as three from "three"
import { $$, type JSX } from "voby"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { jsx } from "../consP"


const render = (children: JSX.Child, parent: JSX.Child) => {
    //@ts-ignore
    ($$(parent) as HTMLElement).appendChild($$($$($$(children))))
}

const Three = { ...three }
//@ts-ignore
Three.TextGeometry = TextGeometry

/* EXPORT */

export { jsx, jsx as jsxDEV, render }
