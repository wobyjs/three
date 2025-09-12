import { Node } from '../../../three-types'
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { IK, CCDIKSolver, CCDIKHelper } from 'three/examples/jsm/animation/CCDIKSolver.js'
export * from 'three/examples/jsm/animation/CCDIKSolver.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CCDIKSolver: typeof CCDIKSolver
        CCDIKHelper: typeof CCDIKHelper
    }
}

Three.CCDIKSolver = CCDIKSolver
Three.CCDIKHelper = CCDIKHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ccdikSolver: CCDIKSolverProps,
            ccdikHelper: CCDIKHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ccdikSolver: typeof ccdikSolver
        ccdikHelper: typeof ccdikHelper
        iK: typeof iK
        // Note: animationClipCreator is kept as per the template but is not used by CCDIKSolver
        animationClipCreator: typeof animationClipCreator
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ccdikSolver: typeof _ccdikSolver
        ccdikHelper: typeof _ccdikHelper
        iK: typeof _iK
        // Note: animationClipCreator is kept as per the template but is not used by CCDIKSolver
        animationClipCreator: typeof _animationClipCreator
    }
}

// ---[ Constructor Parameters ]---

const ccdikSolver = ([
    'mesh',
    'iks',
] as const).distinct()
consParams.ccdikSolver = ccdikSolver

const ccdikHelper = ([
    'mesh',
    'iks',
    'sphereSize',
] as const).distinct()
consParams.ccdikHelper = ccdikHelper

// eslint-disable-next-line @typescript-eslint/naming-convention
const iK = ([
    'target',
    'effector',
    'links',
    'iteration',
    'minAngle',
    'maxAngle',
] as const).distinct()
consParams.iK = iK

const animationClipCreator = ([
] as const).distinct()
consParams.animationClipCreator = animationClipCreator

// ---[ Object Properties ]---

const _ccdikSolver = ([
    'mesh',
    'iks',
] as const).distinct()
objProps.ccdikSolver = _ccdikSolver

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

// eslint-disable-next-line @typescript-eslint/naming-convention
const _iK = ([
    'target',
    'effector',
    'links',
    'iteration',
    'minAngle',
    'maxAngle',
] as const).distinct()
objProps.iK = _iK

const _animationClipCreator = ([
] as const).distinct()
objProps.animationClipCreator = _animationClipCreator

// ---[ Props & Defaults ]---

export type CCDIKSolverProps = Node<CCDIKSolver, typeof CCDIKSolver, { mesh: SkinnedMesh; iks?: IK[] }>
export type CCDIKHelperProps = Node<CCDIKHelper, typeof CCDIKHelper, { mesh: SkinnedMesh; iks?: IK[], sphereSize?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cCDIKSolver: Partial<{ mesh: SkinnedMesh; iks?: IK[] }>
        cCDIKHelper: Partial<{ mesh: SkinnedMesh; iks?: IK[], sphereSize?: number }>
    }
}

defaults.cCDIKSolver = {}
defaults.cCDIKHelper = {}