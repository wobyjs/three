import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMemo, $$, useEffect } from "woby";
import { useAwait, useLoader } from "../../../hooks";
import { Three } from '../../../3/three';
import { consParams } from "../../../3/consParams";
import { objParams } from "../../../3/objParams";
import { defaults } from "../../../3/defaults";
export function Gltf({ path, ref }) {
    const obj = useAwait(useLoader(GLTFLoader, {
        path: path, init: o => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
            o.setDRACOLoader(dracoLoader);
        }
    }));
    useEffect(() => ref($$(obj)?.scene));
    return useMemo(() => $$(obj)?.scene);
}
//@ts-ignore
consParams.gltf = ['path'];
//@ts-ignore
objParams.gltf = [];
//@ts-ignore
defaults.gltf = {};
//@ts-ignore
Three.Gltf = Gltf;
