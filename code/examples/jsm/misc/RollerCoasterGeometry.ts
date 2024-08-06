import { RollerCoasterGeometry, RollerCoasterLiftersGeometry, RollerCoasterShadowGeometry, SkyGeometry, TreesGeometry } from 'three/examples/jsm/misc/RollerCoaster.js'
import { Vector3, Node } from '../../../three-types'
import { Mesh } from 'three/src/objects/Mesh.js'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        rollerCoasterGeometry: string[]
        rollerCoasterLiftersGeometry: string[]
        rollerCoasterShadowGeometry: string[]
        skyGeometry: string[]
        treesGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rollerCoasterGeometry: string[]
        rollerCoasterLiftersGeometry: string[]
        rollerCoasterShadowGeometry: string[]
        skyGeometry: string[]
        treesGeometry: string[]
    }
}
interface THREE_Curve {
    getPointAt(u: number): Vector3;
    getTangentAt(u: number): Vector3;
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\RollerCoaster.d.ts

consParams.rollerCoasterGeometry = [
    'curve',
    'divisions',
].distinct()


consParams.rollerCoasterLiftersGeometry = [
    'curve',
    'divisions',
].distinct()


consParams.rollerCoasterShadowGeometry = [
    'curve',
    'divisions',
].distinct()


consParams.skyGeometry = [
].distinct()


consParams.treesGeometry = [
    'landscape',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\RollerCoaster.d.ts

objParams.rollerCoasterGeometry = [...objParams.bufferGeometry,
].distinct()


objParams.rollerCoasterLiftersGeometry = [...objParams.bufferGeometry,
].distinct()


objParams.rollerCoasterShadowGeometry = [...objParams.bufferGeometry,
].distinct()


objParams.skyGeometry = [...objParams.bufferGeometry,
].distinct()


objParams.treesGeometry = [...objParams.bufferGeometry,
].distinct()

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

