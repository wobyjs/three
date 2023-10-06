// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { useContext, createContext, Observable, useEffect, $$, $, ObservableMaybe, isObservable, getMeta, useMemo } from "voby"
import { param, paramTypes } from "./params"
import { consP } from "./consP"
import { isFunction, isPromise } from "./jsx-runtime/jsx-dev-runtime"
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { Loader } from "three"

type canvasProperties = {
    frame?: Observable<(() => void)[]>,
    renderer?: Observable<three.WebGLRenderer>,
    scene?: Observable<three.Scene>,
    camera?: Observable<three.OrthographicCamera | three.PerspectiveCamera>,//?
    domElement?: Observable<HTMLCanvasElement>,
    width?: Observable<number>,
    height?: Observable<number>
}

export type canvasProps = {
    scene?: ObservableMaybe<three.Scene>,
    camera?: ObservableMaybe<three.OrthographicCamera | three.PerspectiveCamera>,
    width?: ObservableMaybe<number>,
    height?: ObservableMaybe<number>,
    children?: JSX.Child,
}

const t = (props?: canvasProps) => {
    const t = {
        frame: $([]),
        fonts: $({}),
        renderer: $(new three.WebGLRenderer()),
        scene: $(props?.scene ?? new three.Scene()),
        camera: $(props?.camera ?? new three.PerspectiveCamera()),
        domElement: useMemo(() => $$(t.renderer)?.domElement),
        width: $(props?.width ?? window.innerWidth),
        height: $(props?.width ?? window.innerHeight)
    } as canvasProperties
    return t
}

export const threeContext = createContext<canvasProperties>(t())
export const useFrames = () => useContext(threeContext)['frame']
export const useFonts = () => useContext(threeContext)['fonts'] as Record<string, Observable<Font>>
export const useWidth = () => useContext(threeContext)['width']

export const useThree = <T, K extends keyof canvasProperties>(key: K, v?: ObservableMaybe<T>): canvasProperties[K] => {
    const t = useContext(threeContext) as any as canvasProperties
    // const vv = isObservable(v) ? v : $(v)
    if (isObservable(t[key as any])) {
        if (v)
            //@ts-ignore
            t[key]($$(v))
    }

    return t[key] as any
}


export const useLoader = <T extends Loader, V>(loader: new () => T & { loadAsync: (path: string) => V }, options: { path: string, init?: (instance: T) => void }): Observable<V> => {
    const loaderInstance = new loader();
    options.init?.(loaderInstance)

    const obj = $<V>();
    //TODO array of paths
    (async () => {
        const object = loaderInstance.loadAsync(options.path)
        obj(object)
    })()

    return obj
}

export const useAwait = <T,>(obj: Observable<Promise<T>>): Observable<T> => {
    const o = $<T>()
    useEffect(() => {
        (async () => {
            o(await $$(obj))
        })()
    })

    return o
}

export const useCamera = () => useContext(threeContext).camera

export const useFont = (path: string) => {
    const fonts = useFonts();
    if (fonts[path]) {
        return fonts[path]
    }
    else {
        fonts[path] = $();
        (async () => {
            const loader = new FontLoader();

            const loadFont = await loader.loadAsync(path)
            fonts[path](loadFont)
        })()
    }

    return fonts[path]


}

export const useFrame = (fn: () => void) => {
    const fs = $$(useFrames())
    fs.push(fn)
}

function throttle(callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback();  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
}


export const Canvas3D = (props: canvasProps) => {
    const R = () => {
        const { renderer, scene, camera, domElement, width, height } = useContext(threeContext)
        const raycaster = new three.Raycaster();
        const pointer = new three.Vector2();
        const meshObj: { obj?: any } = {}

        //dispose all object 
        useEffect(() => () => {
            //@ts-ignore
            props.children.forEach(c => {
                $$(scene).remove(c)
            })
        })

        const onPointerMove = (event) => {
            event.stopPropagation()
            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children)
            if (intersects.length > 0) {
                meshObj.obj = intersects[0].object
                //@ts-ignore
                throttle(intersects[0].object.onPointerOver?.(event), 1000)

            }
            else {
                throttle(meshObj.obj.onPointerOut?.(event), 1000)
            }

        }

        const onClick = (event: PointerEvent) => {
            event.preventDefault()

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children)
            if (intersects.length > 0) {
                for (let i = 0; i < intersects.length; i++) {
                    //@ts-ignore
                    intersects[i].object.onClick?.(event)
                }

            }
        }


        const animate = () => {
            const fs = $$(useFrames())
            requestAnimationFrame(() => animate());
            fs.forEach(f => f())

            useEffect(() => {
                $$(renderer).render($$(scene), $$(camera))
            })

        }

        const childProps = [$$(props.children)].forEach((index) => {
            if (isFunction(index)) {
                useEffect(() => {
                    index()
                })
            }
        })

        //@ts-ignore
        const meta = [$$(childProps)].flat().filter(r => !!r).map(c => getMeta(c as any))

        let children = Object.values(consP(param['canvas3D'], paramTypes['canvas3D'], meta, props, 'canvas3D'))
        if (props.children) {
            children = children.concat([props.children])
        }

        $$(renderer).setSize($$(width), $$(height))
        $$(camera).position.z = 5

        const r = $();

        children.flat().forEach((obj) => {
            if (isFunction(obj) || isPromise(obj)) {
                useEffect(() => {

                    if (isPromise(obj)) {
                        (async () => {
                            r(await obj)

                        })()
                        $$(scene).add(r() as any)

                        return () => {
                            $$(scene).remove(r())

                            if (r?.geometry?.selfDispose)
                                r.geometry.dispose()

                            if (r?.material?.selfDispose)
                                r.material.dispose()
                        }
                    }
                    else {
                        const r = $$(obj)

                        $$(scene).add(r as any)

                        return () => {
                            $$(scene).remove(r)

                            if (r?.geometry?.selfDispose)
                                r.geometry.dispose()

                            if (r?.material?.selfDispose)
                                r.material.dispose()
                        }
                    }
                })
            }
            else $$(scene).add(obj as any)
        })

        $$(domElement).addEventListener('pointermove', onPointerMove);
        $$(domElement).addEventListener('pointerdown', onClick);

        animate()
        return domElement
    }

    return (
        <threeContext.Provider value={t(props)}>
            <R />
        </threeContext.Provider>
    )
}
