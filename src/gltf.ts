import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useMemo, $$, ObservableReadonly } from 'woby'
import { useAwait, useLoader } from './hooks'
import { Three } from './three'
import { defaults } from './components/defaults'
import { params } from './components/params. xts'
import { components } from './components/components'

export interface GLTFProps {
    path: string,
}

export function gltf(path: string): ObservableReadonly {
    const obj =
        useAwait(
            useLoader(GLTFLoader, {
                path: path, init: o => {
                    const dracoLoader = new DRACOLoader()
                    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
                    o.setDRACOLoader(dracoLoader)
                }
            })
        )

    return useMemo(() => $$(obj)?.scene)
}

Three.Gltf = gltf

declare module './components/defaults' {
    interface defaults {
        gltf: {}
    }
}

Object.assign(defaults, { gltf: {} })

declare module './components/params' {
    interface params {
        gltf: string[]
    }
}

Object.assign(params, { gltf: ['path'] })

declare module './components/components' {
    interface components {
        gltf: string
    }
}

Object.assign(components, { gltf: 'Gltf' })