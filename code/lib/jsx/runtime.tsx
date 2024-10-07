import { useRoot, setChild, type JSX } from "woby"
import { jsx } from "../three/jsx"

const render = (children: JSX.Child, parent: JSX.Child) => {
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

export const Fragment = ({ children }: { children: [] }) => Array.isArray(children) ? [...children] : [children]

export { jsx, jsx as jsxs, jsx as jsxDEV, render }
