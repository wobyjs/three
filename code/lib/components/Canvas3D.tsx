// / <reference path="../jsx" />
/** @jsxImportSource @woby/three */

import { $$, $, type JSX, isObservable, callStack, defaults as wobyDefaults, SYMBOL_CONTEXT_WRAP, setPendingContextWrap } from "woby"
import { setNestedValue, } from "../three/fixReactiveProps"

import { ThreeContext } from "../hooks/useThree"
import { context, createElement, HTMLAttributes } from 'woby'

// type Observable2Maybe<T> = {
//     [K in keyof T]: T[K] extends Observable<infer U>
//     ? ObservableMaybe<U>
//     : T[K] extends object
//     ? Observable2Maybe<T[K]>
//     : T[K];
// };

export type Canvas3DProps = {
    children?: JSX.Child,
    // noRender?: ObservableMaybe<boolean>
    // background?: ObservableMaybe<string | number | Color | Texture | CubeTexture>
} //& Partial<Observable2Maybe<ThreeContextType>>


// import { consParams } from '../../lib/3/consParams'
// import { objProps } from '../../lib/3/objProps'
// import { defaults } from '../../lib/3/defaults'


// // declare module '../../lib/3/three'
// // {
// //     interface Three {
// //         canvas3d: typeof canvas3d
// //     }
// // }

// // Three.canvas3d = canvas3d

// // declare global { {
// //     namespace JSX {
// //         interface IntrinsicElements {
// //             canvas3d: canvas3dProps,
// //         }
// //     }
// }

// declare module '../../lib/3/consParams' {
//     interface consParams {
//         canvas3d: typeof canvas3d
//     }
// }

// declare module '../../lib/3/objProps' {
//     interface objProps {
//         canvas3d: typeof param
//     }
// }


// const canvas3d = ([
// ] as const).distinct()
// consParams.canvas3d = canvas3d


// const param = (['scene', 'camera', 'renderer', 'width', 'height', 'children', /* 'noRender', 'background' */] as const).distinct()
// objProps.canvas3d = param

// // export type canvas3dProps = Node<canvas3d, typeof canvas3d, { images?: any[]; mapping?: canvas3dMapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; colorSpace?: ColorSpace; }>
// declare module '../../lib/3/defaults' {
//     interface defaults {
//         canvas3d: {}
//     }
// }
// defaults.canvas3d = {}


// Define default props for the custom element
const def = () => ({
    // Canvas3D accepts HTML div attributes
})

// Create the Woby component with defaults (keeping original Canvas3D name)
export const Canvas3D = wobyDefaults(def, (props: HTMLAttributes<HTMLDivElement>) => {
    const children = isObservable(props.children) ? $$(props.children) as JSX.Child : props.children
    // const meta = !isObservable(props.children) && !Array.isArray(props.children) ? (props.children ? [getMeta(props.children)] : []) : [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))
    // const meta = !Array.isArray(children) ? (children ? [getMeta(children)] : []) : [children].flat().filter(r => !!r).map(c => getMeta(c as any))

    const r = {}

    const { children: useless, ...remainingProps } = props

    Object.keys(remainingProps).forEach((k) => {
        if (k.includes("-"))
            setNestedValue(r, k, remainingProps[k])
    })

    const ctx = { frames: [], scenes: [], cameras: [], renderers: [], update: $(0) }

    // Build the context-wrap function for this Canvas3D instance and register it
    // via the module-level side-channel in woby so that createBrowserCustomElement
    // can copy it onto `this` (three-canvas) synchronously after createElement
    // returns - BEFORE any sibling/child custom elements are constructed.
    const wrap = (fn: () => void) =>
        context({ [(ThreeContext as any).symbol]: ctx }, fn)
    setPendingContextWrap(wrap)

    //ignore when build, because *.d.ts deleted & rebuild
    // @ts-ignore
    return <div {...remainingProps} data-three-context="true" ref={(el) => {
        if (el) {
            // Also set on the inner div so JSX-mode descendants can find it.
            ;(el as any)[SYMBOL_CONTEXT_WRAP] = wrap
        }
    }}>{ThreeContext.Provider({ value: ctx, children }) as any}</div>
})

// Register Canvas3D as a custom element so it gets SYMBOL_CONTEXT_WRAP
import { customElement } from 'woby'
customElement('three-canvas', Canvas3D)


