import { Node } from '../../../three-types'
import { Material } from 'three/src/materials/Material.js'
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js'
export * from 'three/examples/jsm/objects/MarchingCubes.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MarchingCubes: typeof MarchingCubes
    }
}

Three.MarchingCubes = MarchingCubes

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            marchingCubes: MarchingCubesProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        marchingCubes: typeof marchingCubes
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        marchingCubes: typeof _marchingCubes
    }
}



const marchingCubes = ([

    'resolution',
    'material',
    'enableUvs',
    'enableColors',
    'maxPolyCount',
] as const).distinct()
consParams.marchingCubes = marchingCubes



const _marchingCubes = ([...objProps.mesh,
    'enableUvs',
    'enableColors',
    'resolution',
    // parameters
    'isolation',
    // size of field, 32 is pushing it in Javascript :)
    'size',
    'size2',
    'size3',
    'halfsize',
    // deltas
    'delta',
    'yd',
    'zd',
    'field',
    'normal_cache',
    'palette',
    'maxCount',
    'count',
    'hasPositions',
    'hasNormals',
    'hasColors',
    'hasUvs',
    'positionArray',
    'normalArray',
    'uvArray',
    'colorArray',
] as const).distinct()
objProps.marchingCubes = _marchingCubes

export type MarchingCubesProps = Node<MarchingCubes, typeof MarchingCubes, { resolution: number; material: Material; enableUvs?: boolean; enableColors?: boolean; maxPolyCount?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        marchingCubes: Partial<{ resolution: number; material: Material; enableUvs?: boolean; enableColors?: boolean; maxPolyCount?: number; }>
    }
}

defaults.marchingCubes = {}

