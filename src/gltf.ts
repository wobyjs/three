import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useMemo, $$, ObservableReadonly } from "woby"
import { useAwait, useLoader } from "./context"
import { Three } from './three'
import { Group } from "three"
import { consParams } from "./components/consParams"
import { objParams } from "./components/objParams"
import { defaults } from "./components/defaults"


export interface GLTFProps {
    path: string,
    ref?: ObservableReadonly<Group>
}


export function Gltf(path: string): ObservableReadonly<Group> {
    const obj =
        useAwait(
            useLoader(GLTFLoader, {
                path: path, init: o => {
                    const dracoLoader = new DRACOLoader()
                    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/")
                    o.setDRACOLoader(dracoLoader)
                }
            })
        )

    return useMemo(() => $$(obj)?.scene)
}

declare module './three' {
    interface Three {
        Gltf: typeof Gltf
    }
}

//@ts-ignore
consParams.gltf = ['path']
//@ts-ignore
objParams.gltf=[]

//@ts-ignore
defaults.gltf={}

//@ts-ignore
Three.Gltf = Gltf