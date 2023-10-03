import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Observable, useMemo, $$, ObservableReadonly } from "voby";
import { useAwait, useLoader } from "./canvas3D";

export interface GLTFProps {
    path: string,

}

export function gltf<T,>(path: string): ObservableReadonly<T> {
    const obj = useAwait(useLoader(GLTFLoader, {
        path: path, init: o => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
            o.setDRACOLoader(dracoLoader);
        }
    }))

    return useMemo(() => $$(obj)?.scene)
}