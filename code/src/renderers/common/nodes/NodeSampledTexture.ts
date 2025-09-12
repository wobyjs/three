import { Node } from '../../../../three-types'
// These are internal classes for the renderer's node system.
import { NodeSampledTexture, NodeSampledCubeTexture, NodeSampledTexture3D } from 'three/src/renderers/common/nodes/NodeSampledTexture.js'
export * from 'three/src/renderers/common/nodes/NodeSampledTexture.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { TextureNode } from '../../../nodes/accessors/TextureNode.js'
import { UniformGroupNode } from '../../../nodes/core/UniformGroupNode.js'

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeSampledTexture: typeof NodeSampledTexture,
		NodeSampledCubeTexture: typeof NodeSampledCubeTexture,
		NodeSampledTexture3D: typeof NodeSampledTexture3D
	}
}

Three.NodeSampledTexture = NodeSampledTexture
Three.NodeSampledCubeTexture = NodeSampledCubeTexture
Three.NodeSampledTexture3D = NodeSampledTexture3D

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeSampledTexture: NodeSampledTextureProps,
			nodeSampledCubeTexture: NodeSampledCubeTextureProps,
			nodeSampledTexture3D: NodeSampledTexture3DProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeSampledTexture: typeof nodeSampledTexture,
		nodeSampledCubeTexture: typeof nodeSampledCubeTexture,
		nodeSampledTexture3D: typeof nodeSampledTexture3D,
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeSampledTexture: typeof _nodeSampledTexture,
		nodeSampledCubeTexture: typeof _nodeSampledCubeTexture,
		nodeSampledTexture3D: typeof _nodeSampledTexture3D,
	}
}

// ---[ Constructor Parameters ]---

const nodeSampledTexture = ([
	'name',
	'textureNode',
	'groupNode',
	'access',
] as const).distinct()
consParams.nodeSampledTexture = nodeSampledTexture

// Inherits from base
const nodeSampledCubeTexture = ([...consParams.nodeSampledTexture] as const).distinct()
consParams.nodeSampledCubeTexture = nodeSampledCubeTexture

// Inherits from base
const nodeSampledTexture3D = ([...consParams.nodeSampledTexture] as const).distinct()
consParams.nodeSampledTexture3D = nodeSampledTexture3D


// ---[ Object Properties ]---

// Assumes `objProps.sampledTexture` has been defined
const _nodeSampledTexture = ([
	...(objProps.sampledTexture || []),
	'textureNode',
	'groupNode',
	'access',
	'needsBindingsUpdate',
	'update',
] as const).distinct()
objProps.nodeSampledTexture = _nodeSampledTexture

const _nodeSampledCubeTexture = ([
	...objProps.nodeSampledTexture,
	'isSampledCubeTexture',
] as const).distinct()
objProps.nodeSampledCubeTexture = _nodeSampledCubeTexture

const _nodeSampledTexture3D = ([
	...objProps.nodeSampledTexture,
	'isSampledTexture3D',
] as const).distinct()
objProps.nodeSampledTexture3D = _nodeSampledTexture3D


// ---[ Props & Defaults ]---

type NodeSampledTextureArgs = {
	name: string
	textureNode: TextureNode
	groupNode: UniformGroupNode
	access?: string | null
}

export type NodeSampledTextureProps = Node<NodeSampledTexture, typeof NodeSampledTexture, NodeSampledTextureArgs>
export type NodeSampledCubeTextureProps = Node<NodeSampledCubeTexture, typeof NodeSampledCubeTexture, NodeSampledTextureArgs>
export type NodeSampledTexture3DProps = Node<NodeSampledTexture3D, typeof NodeSampledTexture3D, NodeSampledTextureArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeSampledTexture: Partial<NodeSampledTextureArgs>,
		nodeSampledCubeTexture: Partial<NodeSampledTextureArgs>,
		nodeSampledTexture3D: Partial<NodeSampledTextureArgs>,
	}
}

defaults.nodeSampledTexture = {}
defaults.nodeSampledCubeTexture = {}
defaults.nodeSampledTexture3D = {}