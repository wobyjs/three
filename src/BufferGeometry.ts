import { useEffect, $$, ObservableMaybe } from "woby"
import * as three from 'three'
import { Three } from './three'


export function bufferGeometry(points: ObservableMaybe<three.Vector3[] | three.Vector2[]>) {
    const g = new three.BufferGeometry()
    useEffect(() => {
        if (!$$(points)) return
        g.setFromPoints($$(points))
    })

    return g
}

declare module './three' {
    interface Three {
        BufferGeometry: typeof bufferGeometry
    }
}

//@ts-ignore
Three.BufferGeometry = bufferGeometry


// //@ts-ignore
// consParams.orbitControls = [
// ].distinct()

// //@ts-ignore
// objParams.orbitControls = [
// ]

// //@ts-ignore
// defaults.orbitControls = {  }