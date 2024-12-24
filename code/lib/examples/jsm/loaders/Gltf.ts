import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useMemo, $, $$, ObservableReadonly, Ref, ObservableMaybe } from "woby"
import { useLoader, useRenderers } from "../../../hooks"
import { Object3DEventMap } from "three/src/core/Object3D"
import { Group } from "three/src/objects/Group"
import { GroupProps } from '../../../../src/objects/Group'


export interface gltfprops {
    path: string,
    ref?: ObservableReadonly<Group>
}

export function Gltf({ path, url, ref, ...props }: { path?: ObservableMaybe<string>, url: ObservableMaybe<string>, ref?: Ref<Group<Object3DEventMap>> } & GroupProps) {
    // const obj = useLoader(GLTFLoader, {
    //     path, init: o => {
    //         // const dracoLoader = new DRACOLoader()
    //         // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
    //         // o.setDRACOLoader(dracoLoader)


    //     }
    // })

    const obj = $<GLTF>()
    const loader = new GLTFLoader()
    if ($$(path))
        loader.setPath($$(path))

    loader.load($$(url), g => obj(g))

    return useMemo(() => $$(obj)?.scene)
}
