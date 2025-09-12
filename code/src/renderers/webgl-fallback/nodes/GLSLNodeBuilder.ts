import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import GLSLNodeBuilder from 'three/src/renderers/webgl-fallback/nodes/GLSLNodeBuilder.js'
export * from 'three/src/renderers/webgl-fallback/nodes/GLSLNodeBuilder.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

// Import needed internal types and classes

declare module '../../../../lib/3/three'
{
	interface Three {
		GLSLNodeBuilder: typeof GLSLNodeBuilder
	}
}

Three.GLSLNodeBuilder = GLSLNodeBuilder

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			gLSLNodeBuilder: GLSLNodeBuilderProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		gLSLNodeBuilder: typeof glslNodeBuilder
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		gLSLNodeBuilder: typeof _glslNodeBuilder
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an object and a renderer.
const glslNodeBuilder = ([
	'object',
	'renderer',
] as const).distinct()
consParams.gLSLNodeBuilder = glslNodeBuilder

// ---[ Object Properties ]---

// Combines NodeBuilder's properties with GLSLNodeBuilder's specific properties and methods.
const _glslNodeBuilder = ([
	...(objProps.nodeBuilder || []),
	'uniformGroups',
	'transforms',
	'extensions',
	'builtins',
	'useComparisonMethod',
	'needsToWorkingColorSpace',
	'getMethod',
	'getOutputStructName',
	'buildFunctionCode',
	'setupPBO',
	'getPropertyName',
	'generatePBO',
	'generateTextureLoad',
	'generateTexture',
	'generateTextureLevel',
	'generateTextureBias',
	'generateTextureGrad',
	'generateTextureCompare',
	'getVars',
	'getUniforms',
	'getTypeFromAttribute',
	'getAttributes',
	'getStructMembers',
	'getStructs',
	'getVaryings',
	'getVertexIndex',
	'getInstanceIndex',
	'getInvocationLocalIndex',
	'getDrawIndex',
	'getFrontFacing',
	'getFragCoord',
	'getFragDepth',
	'enableExtension',
	'isAvailable',
	'isFlipY',
	'enableHardwareClipping',
	'registerTransform',
	'getTransforms',
	'_getGLSLUniformStruct',
	'_getGLSLVertexCode',
	'_getGLSLFragmentCode',
	'buildCode',
	'getUniformFromNode',
] as const).distinct()
objProps.gLSLNodeBuilder = _glslNodeBuilder

// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type GLSLNodeBuilderArgs = {
	object: any  // Generic Object3D/Mesh/etc
	renderer: any // Generic Renderer type.  Avoid circular dependency
}

// The final Props type for the JSX component.
export type GLSLNodeBuilderProps = Node<GLSLNodeBuilder, typeof GLSLNodeBuilder, GLSLNodeBuilderArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		gLSLNodeBuilder: Partial<GLSLNodeBuilderArgs>
	}
}

// Both 'object' and 'renderer' are required, so defaults are an empty object.
defaults.gLSLNodeBuilder = {}