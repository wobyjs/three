import { $$, useEffect, Ref, ObservableMaybe } from "woby"
import { useLoader } from "../../../lib/hooks"
import { RGBELoader } from "./RGBELoader"
import { DataTexture, DataTextureProps } from "../../../src/textures/DataTexture"
import { assign } from '@woby/use'

export interface RgbeProps {
    path: ObservableMaybe<string>
    ref?: Ref<DataTexture>
}

export function Rgbe({ path, ref, ...props }: RgbeProps & DataTextureProps) {
    const obj = useLoader(RGBELoader, { path })

    useEffect(() => {
        ref?.($$(obj))

        if (!$$(obj)) return
        assign($$(obj), props)
    })

    return obj
}
