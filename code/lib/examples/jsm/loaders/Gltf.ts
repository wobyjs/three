import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useMemo, $$, ObservableReadonly, Ref } from "woby"
import { useLoader } from "../../../hooks"
import { Object3DEventMap } from "three/src/core/Object3D"
import { Group } from "three/src/objects/Group"
import { GroupProps } from '../../../../src/objects/Group'


export interface gltfprops {
    path: string,
    ref?: ObservableReadonly<Group>
}

export function Gltf({ path, ref, ...props }: { path: string, ref?: Ref<Group<Object3DEventMap>> } & GroupProps): ObservableReadonly<Group> {
    const obj = useLoader(GLTFLoader, {
        path, init: o => {
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
            o.setDRACOLoader(dracoLoader)
        }
    })

    return useMemo(() => $$(obj)?.scene)
}
