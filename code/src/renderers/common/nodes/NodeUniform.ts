import { Node } from '../../../../three-types'
// Import all classes from the source file
import {
	NumberNodeUniform, Vector2NodeUniform, Vector3NodeUniform, Vector4NodeUniform,
	ColorNodeUniform, Matrix2NodeUniform, Matrix3NodeUniform, Matrix4NodeUniform
} from 'three/src/renderers/common/nodes/NodeUniform.js'
export * from 'three/src/renderers/common/nodes/NodeUniform.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { NodeUniform } from '../../../nodes/core/NodeUniform'
// Import dependency type

declare module '../../../../lib/3/three'
{
	interface Three {
		NumberNodeUniform: typeof NumberNodeUniform,
		Vector2NodeUniform: typeof Vector2NodeUniform,
		Vector3NodeUniform: typeof Vector3NodeUniform,
		Vector4NodeUniform: typeof Vector4NodeUniform,
		ColorNodeUniform: typeof ColorNodeUniform,
		Matrix2NodeUniform: typeof Matrix2NodeUniform,
		Matrix3NodeUniform: typeof Matrix3NodeUniform,
		Matrix4NodeUniform: typeof Matrix4NodeUniform
	}
}

Three.NumberNodeUniform = NumberNodeUniform
Three.Vector2NodeUniform = Vector2NodeUniform
Three.Vector3NodeUniform = Vector3NodeUniform
Three.Vector4NodeUniform = Vector4NodeUniform
Three.ColorNodeUniform = ColorNodeUniform
Three.Matrix2NodeUniform = Matrix2NodeUniform
Three.Matrix3NodeUniform = Matrix3NodeUniform
Three.Matrix4NodeUniform = Matrix4NodeUniform

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			numberNodeUniform: NumberNodeUniformProps,
			vector2NodeUniform: Vector2NodeUniformProps,
			vector3NodeUniform: Vector3NodeUniformProps,
			vector4NodeUniform: Vector4NodeUniformProps,
			colorNodeUniform: ColorNodeUniformProps,
			matrix2NodeUniform: Matrix2NodeUniformProps,
			matrix3NodeUniform: Matrix3NodeUniformProps,
			matrix4NodeUniform: Matrix4NodeUniformProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		numberNodeUniform: typeof numberNodeUniform,
		vector2NodeUniform: typeof vector2NodeUniform,
		vector3NodeUniform: typeof vector3NodeUniform,
		vector4NodeUniform: typeof vector4NodeUniform,
		colorNodeUniform: typeof colorNodeUniform,
		matrix2NodeUniform: typeof matrix2NodeUniform,
		matrix3NodeUniform: typeof matrix3NodeUniform,
		matrix4NodeUniform: typeof matrix4NodeUniform,
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		numberNodeUniform: typeof _numberNodeUniform,
		vector2NodeUniform: typeof _vector2NodeUniform,
		vector3NodeUniform: typeof _vector3NodeUniform,
		vector4NodeUniform: typeof _vector4NodeUniform,
		colorNodeUniform: typeof _colorNodeUniform,
		matrix2NodeUniform: typeof _matrix2NodeUniform,
		matrix3NodeUniform: typeof _matrix3NodeUniform,
		matrix4NodeUniform: typeof _matrix4NodeUniform,
	}
}

// ---[ Constructor Parameters ]---

const nodeUniformCons = (['nodeUniform'] as const).distinct()

const numberNodeUniform = nodeUniformCons
consParams.numberNodeUniform = numberNodeUniform

const vector2NodeUniform = nodeUniformCons
consParams.vector2NodeUniform = vector2NodeUniform

const vector3NodeUniform = nodeUniformCons
consParams.vector3NodeUniform = vector3NodeUniform

const vector4NodeUniform = nodeUniformCons
consParams.vector4NodeUniform = vector4NodeUniform

const colorNodeUniform = nodeUniformCons
consParams.colorNodeUniform = colorNodeUniform

const matrix2NodeUniform = nodeUniformCons
consParams.matrix2NodeUniform = matrix2NodeUniform

const matrix3NodeUniform = nodeUniformCons
consParams.matrix3NodeUniform = matrix3NodeUniform

const matrix4NodeUniform = nodeUniformCons
consParams.matrix4NodeUniform = matrix4NodeUniform

// ---[ Object Properties ]---

const sharedNodeUniformProps = ['nodeUniform', 'getValue', 'getType'] as const

const _numberNodeUniform = ([...(objProps.numberUniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.numberNodeUniform = _numberNodeUniform

const _vector2NodeUniform = ([...(objProps.vector2Uniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.vector2NodeUniform = _vector2NodeUniform

const _vector3NodeUniform = ([...(objProps.vector3Uniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.vector3NodeUniform = _vector3NodeUniform

const _vector4NodeUniform = ([...(objProps.vector4Uniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.vector4NodeUniform = _vector4NodeUniform

const _colorNodeUniform = ([...(objProps.colorUniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.colorNodeUniform = _colorNodeUniform

const _matrix2NodeUniform = ([...(objProps.matrix2Uniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.matrix2NodeUniform = _matrix2NodeUniform

const _matrix3NodeUniform = ([...(objProps.matrix3Uniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.matrix3NodeUniform = _matrix3NodeUniform

const _matrix4NodeUniform = ([...(objProps.matrix4Uniform || []), ...sharedNodeUniformProps] as const).distinct()
objProps.matrix4NodeUniform = _matrix4NodeUniform

// ---[ Props & Defaults ]---

type NodeUniformArgs = {
	nodeUniform: NodeUniform<unknown>
}

export type NumberNodeUniformProps = Node<NumberNodeUniform, typeof NumberNodeUniform, NodeUniformArgs>
export type Vector2NodeUniformProps = Node<Vector2NodeUniform, typeof Vector2NodeUniform, NodeUniformArgs>
export type Vector3NodeUniformProps = Node<Vector3NodeUniform, typeof Vector3NodeUniform, NodeUniformArgs>
export type Vector4NodeUniformProps = Node<Vector4NodeUniform, typeof Vector4NodeUniform, NodeUniformArgs>
export type ColorNodeUniformProps = Node<ColorNodeUniform, typeof ColorNodeUniform, NodeUniformArgs>
export type Matrix2NodeUniformProps = Node<Matrix2NodeUniform, typeof Matrix2NodeUniform, NodeUniformArgs>
export type Matrix3NodeUniformProps = Node<Matrix3NodeUniform, typeof Matrix3NodeUniform, NodeUniformArgs>
export type Matrix4NodeUniformProps = Node<Matrix4NodeUniform, typeof Matrix4NodeUniform, NodeUniformArgs>


declare module '../../../../lib/3/defaults' {
	interface defaults {
		numberNodeUniform: Partial<NodeUniformArgs>,
		vector2NodeUniform: Partial<NodeUniformArgs>,
		vector3NodeUniform: Partial<NodeUniformArgs>,
		vector4NodeUniform: Partial<NodeUniformArgs>,
		colorNodeUniform: Partial<NodeUniformArgs>,
		matrix2NodeUniform: Partial<NodeUniformArgs>,
		matrix3NodeUniform: Partial<NodeUniformArgs>,
		matrix4NodeUniform: Partial<NodeUniformArgs>,
	}
}

defaults.numberNodeUniform = {}
defaults.vector2NodeUniform = {}
defaults.vector3NodeUniform = {}
defaults.vector4NodeUniform = {}
defaults.colorNodeUniform = {}
defaults.matrix2NodeUniform = {}
defaults.matrix3NodeUniform = {}
defaults.matrix4NodeUniform = {}