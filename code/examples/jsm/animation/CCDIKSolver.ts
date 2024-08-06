import { Node } from '../../../three-types'
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { IK, CCDIKSolver } from 'three/examples/jsm/animation/CCDIKSolver.js'
export * from 'three/examples/jsm/animation/CCDIKSolver.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CCDIKSolver: typeof CCDIKSolver
    }
}

Three.CCDIKSolver = CCDIKSolver

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ccdikSolver: CCDIKSolverProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ccdikSolver: string[]
        animationClipCreator: string[]
        ccdikHelper: string[]
        iK: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ccdikSolver: string[]
        animationClipCreator: string[]
        ccdikHelper: string[]
        iK: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\AnimationClipCreator.d.ts

consParams.animationClipCreator = [
].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\CCDIKSolver.d.ts
// eslint-disable-next-line @typescript-eslint/naming-convention

consParams.iK = [
    'effector',
    'iteration',
    'links',
    'minAngle',
    'maxAngle',
    'target',
].distinct()

consParams.ccdikSolver = [
    'mesh',
    'iks',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\Addons.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\AnimationClipCreator.d.ts

objParams.animationClipCreator = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\CCDIKSolver.d.ts
// eslint-disable-next-line @typescript-eslint/naming-convention

objParams.iK = [
    'effector',
    'iteration',
    'links',
    'minAngle',
    'maxAngle',
    'target',
].distinct()


objParams.ccdikSolver = [
    'mesh',
    'iks',
].distinct()


consParams.ccdikHelper = [
    'mesh',
    'iks',
    'sphereSize',
].distinct()


objParams.ccdikHelper = [...objParams.object3d,
    'root',
    'iks',
    'sphereGeometry',
    'targetSphereMaterial',
    'effectorSphereMaterial',
    'linkSphereMaterial',
    'lineMaterial',
].distinct()

export type CCDIKSolverProps = Node<CCDIKSolver, typeof CCDIKSolver, { mesh: SkinnedMesh; iks?: IK[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cCDIKSolver: Partial<{ mesh: SkinnedMesh; iks?: IK[]; }>
    }
}

defaults.cCDIKSolver = {}

