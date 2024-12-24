import { Node } from '../../../three-types'
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { IK, CCDIKSolver } from 'three/examples/jsm/animation/CCDIKSolver.js'
export * from 'three/examples/jsm/animation/CCDIKSolver.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        ccdikSolver: typeof ccdikSolver
        animationClipCreator: typeof animationClipCreator
        ccdikHelper: typeof ccdikHelper
        iK: typeof iK
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ccdikSolver: typeof _ccdikSolver
        animationClipCreator: typeof _animationClipCreator
        ccdikHelper: typeof _ccdikHelper
        iK: typeof _iK
    }
}



const animationClipCreator = ([
] as const).distinct()
consParams.animationClipCreator = animationClipCreator

// eslint-disable-next-line @typescript-eslint/naming-convention

const iK = ([
    'effector',
    'iteration',
    'links',
    'minAngle',
    'maxAngle',
    'target',
] as const).distinct()
consParams.iK = iK

const ccdikSolver = ([
    'mesh',
    'iks',
] as const).distinct()
consParams.ccdikSolver = ccdikSolver




const _animationClipCreator = ([
] as const).distinct()
objProps.animationClipCreator = _animationClipCreator


// eslint-disable-next-line @typescript-eslint/naming-convention

const _iK = ([
    'effector',
    'iteration',
    'links',
    'minAngle',
    'maxAngle',
    'target',
] as const).distinct()
objProps.iK = _iK


const _ccdikSolver = ([
    'mesh',
    'iks',
] as const).distinct()
objProps.ccdikSolver = _ccdikSolver


const ccdikHelper = ([
    'mesh',
    'iks',
    'sphereSize',
] as const).distinct()
consParams.ccdikHelper = ccdikHelper


const _ccdikHelper = ([...objProps.object3d,
    'root',
    'iks',
    'sphereGeometry',
    'targetSphereMaterial',
    'effectorSphereMaterial',
    'linkSphereMaterial',
    'lineMaterial',
] as const).distinct()
objProps.ccdikHelper = _ccdikHelper

export type CCDIKSolverProps = Node<CCDIKSolver, typeof CCDIKSolver, { mesh: SkinnedMesh; iks?: IK[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cCDIKSolver: Partial<{ mesh: SkinnedMesh; iks?: IK[]; }>
    }
}

defaults.cCDIKSolver = {}

