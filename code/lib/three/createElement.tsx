/* IMPORT */
import { $, $$, untrack, useEffect, useMemo, createElement as ce, type JSX, } from "woby"
import { isFunction, isPromiseR, toUpper, awaitAll, woby3Child, isObservableR, isNullR, isFunctionR } from "../utils"
import { Three } from "../3/three"
import { extractProps2constructor, resolveConstructorDefaults } from "./extractProps2constructor"
import { getInstance } from "./getInstance"
import { track } from "./track"
// import { useThree } from "../hooks/useThree"
import { type consParams } from "../3/consParams"
import { type defaults } from "../3/defaults"
import { type objProps } from "../3/objProps"

const html = {
    a: true,
    abbr: true,
    address: true,
    area: true,
    article: true,
    aside: true,
    audio: true,
    b: true,
    base: true,
    bdi: true,
    bdo: true,
    big: true,
    blockquote: true,
    body: true,
    br: true,
    button: true,
    canvas: true,
    caption: true,
    cite: true,
    code: true,
    col: true,
    colgroup: true,
    data: true,
    datalist: true,
    dd: true,
    del: true,
    details: true,
    dfn: true,
    dialog: true,
    div: true,
    dl: true,
    dt: true,
    em: true,
    embed: true,
    fieldset: true,
    figcaption: true,
    figure: true,
    footer: true,
    form: true,
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
    head: true,
    header: true,
    hgroup: true,
    hr: true,
    html: true,
    i: true,
    iframe: true,
    img: true,
    input: true,
    ins: true,
    kbd: true,
    keygen: true,
    label: true,
    legend: true,
    li: true,
    link: true,
    main: true,
    map: true,
    mark: true,
    menu: true,
    menuitem: true,
    meta: true,
    meter: true,
    nav: true,
    noindex: true,
    noscript: true,
    object: true,
    ol: true,
    optgroup: true,
    option: true,
    output: true,
    p: true,
    param: true,
    picture: true,
    pre: true,
    progress: true,
    q: true,
    rp: true,
    rt: true,
    ruby: true,
    s: true,
    samp: true,
    slot: true,
    script: true,
    section: true,
    select: true,
    small: true,
    source: true,
    span: true,
    strong: true,
    style: true,
    sub: true,
    summary: true,
    sup: true,
    table: true,
    template: true,
    tbody: true,
    td: true,
    textarea: true,
    tfoot: true,
    th: true,
    thead: true,
    time: true,
    title: true,
    tr: true,
    track: true,
    u: true,
    ul: true,
    var: true,
    video: true,
    wbr: true,
    webview: true,
    svg: true,
    animate: true,
    circle: true,
    animateTransform: true,
    clipPath: true,
    defs: true,
    desc: true,
    ellipse: true,
    feBlend: true,
    feColorMatrix: true,
    feComponentTransfer: true,
    feComposite: true,
    feConvolveMatrix: true,
    feDiffuseLighting: true,
    feDisplacementMap: true,
    feDropShadow: true,
    feFlood: true,
    feFuncA: true,
    feFuncB: true,
    feFuncG: true,
    feFuncR: true,
    feGaussianBlur: true,
    feImage: true,
    feMerge: true,
    feMergeNode: true,
    feMorphology: true,
    feOffset: true,
    feSpecularLighting: true,
    feTile: true,
    feTurbulence: true,
    filter: true,
    foreignObject: true,
    g: true,
    image: true,
    line: true,
    linearGradient: true,
    marker: true,
    mask: true,
    path: true,
    pattern: true,
    polygon: true,
    polyline: true,
    radialGradient: true,
    rect: true,
    stop: true,
    symbol: true,
    text: true,
    tspan: true,
    use: true,
}
export const createElement = <K extends (keyof JSX.IntrinsicElements & keyof consParams & keyof objProps & keyof defaults), P extends JSX.IntrinsicElements & { children?: JSX.Child[], ref: JSX.Refs<JSX.IntrinsicElements[K]>, args?: [] | {} }>
    (component: K, props: P, key?: string) => {
    if ((component as any).name === 'Fragment')
        return woby3Child(() => props.children)
    else if (isFunction(component)) // && !(isFunctionReactive(component) && useScene() && !hasSymbol(component, IN_CONTEXT)))
        return woby3Child(() => untrack(() => component.call(component, props as P)))
    else {// String or THREE.Class based
        const cname = toUpper(component as string)
        if (!Three[cname] && !html[component as string])
            console.error(`Three.${cname} not register`)

        if (!Three[cname])
            return ce(component, props)

        const cp = track(extractProps2constructor(component, props as any))
        // const rcp = $$$$(cp)
        if (isObservableR(cp) || isFunctionR(cp)) {
            const r = $()
            useEffect(() => {
                const rcp = $$(cp)
                // console.log(rcp)

                resolveConstructorDefaults<K, P>(component, rcp)

                if (isNullR(rcp)) return undefined

                // const rcp = $$$$(cp)
                // if (checkNull && isNullR(rcp)) return undefined
                r(getInstance(component, props, rcp))
                // return getContextualInstance(component, props, cp)
            })
            return r
        }
        else if (isPromiseR(cp)) {
            console.log("promise", component)
            return useMemo(() => {
                //wrapSymbol(() => untrack(() =>
                const r = $();
                (async () => {
                    const rcp = await awaitAll(cp)

                    const cname = toUpper(component as any)
                    if (!Three[cname]) {
                        console.error(`Three['${toUpper(component)}'] not found, please register it`)
                        return
                    }

                    //   await awaitAll(props, objProps[component as string])

                    extractProps2constructor(component, props as any)
                    r(getInstance(component as any, props, rcp))
                })()

                return r
            })
            // })), SYMBOL_UNTRACKED_UNWRAPPED, HAS_PROMISE)
        }

        else {
            return woby3Child(() => {
                // resolve constructor params 1 time,
                // reactive constructor params but also set-able in obj instance, done in fixReactiveProps
                // console.log(component, props, cp)
                // useThree()
                resolveConstructorDefaults<K, P>(component, cp)
                return untrack(getInstance(component, props, cp))
            })
        }
    }
}

