/* IMPORT */
import * as three from "three"
import { useRoot, type JSX, setChild } from "woby"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { jsx } from "../components/ConstructorParam"


const render = (children: JSX.Child, parent: JSX.Child) => {
    //@ts-ignore

    if (!parent || !(parent instanceof HTMLElement)) throw new Error('Invalid parent node')

    parent.textContent = ''
    return useRoot(dispose => {

        setChild(parent, children)

        return (): void => {

            dispose()

            parent.textContent = ''

        }

    })
}

const Three = { ...three }
//@ts-ignore
Three.TextGeometry = TextGeometry

/* EXPORT */

export { jsx, jsx as jsxDEV, render }
