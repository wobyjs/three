import { RollerCoasterGeometry, RollerCoasterLiftersGeometry, RollerCoasterShadowGeometry, SkyGeometry, TreesGeometry } from 'three/examples/jsm/misc/RollerCoaster.js'
import { Vector3, Node } from '../../../three-types'
import { Mesh } from 'three/src/objects/Mesh.js'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rollerCoasterGeometry: RollerCoasterGeometryProps
            rollerCoasterLiftersGeometry: RollerCoasterLiftersGeometryProps
            rollerCoasterShadowGeometry: RollerCoasterShadowGeometryProps
            skyGeometry: SkyGeometryProps
            treesGeometry: TreesGeometryProps
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rollerCoasterGeometry: typeof rollerCoasterGeometry
        rollerCoasterLiftersGeometry: typeof rollerCoasterLiftersGeometry
        rollerCoasterShadowGeometry: typeof rollerCoasterShadowGeometry
        skyGeometry: typeof skyGeometry
        treesGeometry: typeof treesGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rollerCoasterGeometry: typeof _rollerCoasterGeometry
        rollerCoasterLiftersGeometry: typeof _rollerCoasterLiftersGeometry
        rollerCoasterShadowGeometry: typeof _rollerCoasterShadowGeometry
        skyGeometry: typeof _skyGeometry
        treesGeometry: typeof _treesGeometry
    }
}
export interface THREE_Curve {
    getPointAt(u: number): Vector3;
    getTangentAt(u: number): Vector3;
}



const rollerCoasterGeometry = ([
    'curve',
    'divisions',
] as const).distinct()
consParams.rollerCoasterGeometry = rollerCoasterGeometry


const rollerCoasterLiftersGeometry = ([
    'curve',
    'divisions',
] as const).distinct()
consParams.rollerCoasterLiftersGeometry = rollerCoasterLiftersGeometry


const rollerCoasterShadowGeometry = ([
    'curve',
    'divisions',
] as const).distinct()
consParams.rollerCoasterShadowGeometry = rollerCoasterShadowGeometry


const skyGeometry = ([
] as const).distinct()
consParams.skyGeometry = skyGeometry


const treesGeometry = ([
    'landscape',
] as const).distinct()
consParams.treesGeometry = treesGeometry



const _rollerCoasterGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.rollerCoasterGeometry = _rollerCoasterGeometry


const _rollerCoasterLiftersGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.rollerCoasterLiftersGeometry = _rollerCoasterLiftersGeometry


const _rollerCoasterShadowGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.rollerCoasterShadowGeometry = _rollerCoasterShadowGeometry


const _skyGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.skyGeometry = _skyGeometry


const _treesGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.treesGeometry = _treesGeometry

export type RollerCoasterGeometryProps = Node<RollerCoasterGeometry, typeof RollerCoasterGeometry, { curve: THREE_Curve; divisions: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rollerCoasterGeometry: Partial<{ curve: THREE_Curve; divisions: number; }>
    }
}

defaults.rollerCoasterGeometry = {}

export type RollerCoasterLiftersGeometryProps = Node<RollerCoasterLiftersGeometry, typeof RollerCoasterLiftersGeometry, { curve: THREE_Curve; divisions: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rollerCoasterLiftersGeometry: Partial<{ curve: THREE_Curve; divisions: number; }>
    }
}

defaults.rollerCoasterLiftersGeometry = {}

export type RollerCoasterShadowGeometryProps = Node<RollerCoasterShadowGeometry, typeof RollerCoasterShadowGeometry, { curve: THREE_Curve; divisions: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rollerCoasterShadowGeometry: Partial<{ curve: THREE_Curve; divisions: number; }>
    }
}

defaults.rollerCoasterShadowGeometry = {}

export type SkyGeometryProps = Node<SkyGeometry, typeof SkyGeometry, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        skyGeometry: Partial<{}>
    }
}

defaults.skyGeometry = {}

export type TreesGeometryProps = Node<TreesGeometry, typeof TreesGeometry, { landscape: Mesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        treesGeometry: Partial<{ landscape: Mesh; }>
    }
}

defaults.treesGeometry = {}

