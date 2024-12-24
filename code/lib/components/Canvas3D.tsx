// / <reference path="../jsx" />
/** @jsxImportSource ../jsx */

import { $$, $, type JSX, isObservable, } from "woby"
import { setNestedValue, } from "../three/fixReactiveProps"

import { ThreeContext } from "../hooks/useThree"
import { HTMLAttributes } from "woby/dist/types/types"

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


export const Canvas3D = (props: HTMLAttributes<HTMLDivElement>) => {
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
    const rr = ThreeContext.Provider({ value: ctx, children })

    return <div {...remainingProps}>{rr}</div>
}


