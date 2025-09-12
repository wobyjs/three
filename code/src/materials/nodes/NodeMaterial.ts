import { Node } from '../../../three-types'
import NodeMaterial from 'three/src/materials/nodes/NodeMaterial.js'
export { NodeMaterial } //* from 'three/src/materials/nodes/NodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'
import { MaterialParameters } from 'three/src/materials/Material.js'

declare module '../../../lib/3/three'
{
	interface Three {
		NodeMaterial: typeof NodeMaterial
	}
}

Three.NodeMaterial = NodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeMaterial: NodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		nodeMaterial: typeof nodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		nodeMaterial: typeof _nodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const nodeMaterial = ([] as const).distinct()
consParams.nodeMaterial = nodeMaterial

// ---[ Object Properties ]---

// Inherits from Material and adds the extensive NodeMaterial API.
// Assumes `objProps.material` has been defined.
const _nodeMaterial = ([
	...(objProps.material || []),
	'isNodeMaterial',
	'type', // getter/setter
	'fog',
	'lights',
	'hardwareClipping',
	'lightsNode',
	'envNode',
	'aoNode',
	'colorNode',
	'normalNode',
	'opacityNode',
	'backdropNode',
	'backdropAlphaNode',
	'alphaTestNode',
	'positionNode',
	'geometryNode',
	'depthNode',
	'shadowPositionNode',
	'receivedShadowNode',
	'castShadowNode',
	'outputNode',
	'mrtNode',
	'fragmentNode',
	'vertexNode',
	'customProgramCacheKey',
	'build',
	'setupObserver',
	'setup',
	'setupClipping',
	'setupHardwareClipping',
	'setupDepth',
	'setupPositionView',
	'setupModelViewProjection',
	'setupVertex',
	'setupPosition',
	'setupDiffuseColor',
	'setupVariants',
	'setupOutgoingLight',
	'setupNormal',
	'setupEnvironment',
	'setupLightMap',
	'setupLights',
	'setupLightingModel',
	'setupLighting',
	'setupOutput',
	'setDefaultValues',
	'toJSON',
	'copy',
] as const).distinct()
objProps.nodeMaterial = _nodeMaterial


// ---[ Props & Defaults ]---

// Defines the settable properties for a NodeMaterial.
// It extends the base MaterialParameters.
export type NodeMaterialParameters = MaterialParameters & {
	fog?: boolean
	lights?: boolean
	lightsNode?: TSLNode | null
	envNode?: TSLNode | null
	aoNode?: TSLNode | null
	colorNode?: TSLNode | null
	normalNode?: TSLNode | null
	opacityNode?: TSLNode | null
	backdropNode?: TSLNode | null
	backdropAlphaNode?: TSLNode | null
	alphaTestNode?: TSLNode | null
	positionNode?: TSLNode | null
	geometryNode?: Function | null
	depthNode?: TSLNode | null
	shadowPositionNode?: TSLNode | null
	receivedShadowNode?: TSLNode | null
	castShadowNode?: TSLNode | null
	outputNode?: TSLNode | null
	mrtNode?: TSLNode | null
	fragmentNode?: TSLNode | null
	vertexNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type NodeMaterialProps = Node<NodeMaterial, typeof NodeMaterial, NodeMaterialParameters>

declare module '../../../lib/3/defaults' {
	interface defaults {
		nodeMaterial: Partial<NodeMaterialParameters>
	}
}

defaults.nodeMaterial = {}