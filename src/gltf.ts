import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMemo, $$, ObservableReadonly } from "voby";
import { useAwait, useLoader } from "./context";
import { Three } from "./three"

export function gltf(path: string): ObservableReadonly {
    const obj =
        useAwait(
            useLoader(GLTFLoader, {
                path: path, init: o => {
                    const dracoLoader = new DRACOLoader();
                    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
                    o.setDRACOLoader(dracoLoader);
                }
            })
            )

    return useMemo(() => $$(obj)?.scene)
}

Three.Gltf = gltf