import { Node } from '../../../three-types'
// Import all classes from the source file
import {
	NumberUniform, Vector2Uniform, Vector3Uniform, Vector4Uniform,
	ColorUniform, Matrix2Uniform, Matrix3Uniform, Matrix4Uniform,
	// Uniform
} from 'three/src/renderers/common/Uniform.js'
export * from 'three/src/renderers/common/Uniform.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		// Uniform: typeof Uniform,
		NumberUniform: typeof NumberUniform,
		Vector2Uniform: typeof Vector2Uniform,
		Vector3Uniform: typeof Vector3Uniform,
		Vector4Uniform: typeof Vector4Uniform,
		ColorUniform: typeof ColorUniform,
		Matrix2Uniform: typeof Matrix2Uniform,
		Matrix3Uniform: typeof Matrix3Uniform,
		Matrix4Uniform: typeof Matrix4Uniform
	}
}

// Register all classes
// Three.Uniform = Uniform
Three.NumberUniform = NumberUniform
Three.Vector2Uniform = Vector2Uniform
Three.Vector3Uniform = Vector3Uniform
Three.Vector4Uniform = Vector4Uniform
Three.ColorUniform = ColorUniform
Three.Matrix2Uniform = Matrix2Uniform
Three.Matrix3Uniform = Matrix3Uniform
Three.Matrix4Uniform = Matrix4Uniform

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			// renderer_uniform: UniformProps,
			numberUniform: NumberUniformProps,
			vector2Uniform: Vector2UniformProps,
			vector3Uniform: Vector3UniformProps,
			vector4Uniform: Vector4UniformProps,
			colorUniform: ColorUniformProps,
			matrix2Uniform: Matrix2UniformProps,
			matrix3Uniform: Matrix3UniformProps,
			matrix4Uniform: Matrix4UniformProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		// renderer_uniform: typeof uniform,
		numberUniform: typeof numberUniform,
		vector2Uniform: typeof vector2Uniform,
		vector3Uniform: typeof vector3Uniform,
		vector4Uniform: typeof vector4Uniform,
		colorUniform: typeof colorUniform,
		matrix2Uniform: typeof matrix2Uniform,
		matrix3Uniform: typeof matrix3Uniform,
		matrix4Uniform: typeof matrix4Uniform,
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderer_uniform: typeof _uniform,
		numberUniform: typeof _numberUniform,
		vector2Uniform: typeof _vector2Uniform,
		vector3Uniform: typeof _vector3Uniform,
		vector4Uniform: typeof _vector4Uniform,
		colorUniform: typeof _colorUniform,
		matrix2Uniform: typeof _matrix2Uniform,
		matrix3Uniform: typeof _matrix3Uniform,
		matrix4Uniform: typeof _matrix4Uniform,
	}
}

// ---[ Constructor Parameters ]---

const uniformParams = (['name', 'value'] as const).distinct()

const uniform = uniformParams
// consParams.renderer_uniform = uniform

const numberUniform = uniformParams
consParams.numberUniform = numberUniform

const vector2Uniform = uniformParams
consParams.vector2Uniform = vector2Uniform

const vector3Uniform = uniformParams
consParams.vector3Uniform = vector3Uniform

const vector4Uniform = uniformParams
consParams.vector4Uniform = vector4Uniform

const colorUniform = uniformParams
consParams.colorUniform = colorUniform

const matrix2Uniform = uniformParams
consParams.matrix2Uniform = matrix2Uniform

const matrix3Uniform = uniformParams
consParams.matrix3Uniform = matrix3Uniform

const matrix4Uniform = uniformParams
consParams.matrix4Uniform = matrix4Uniform

// ---[ Object Properties ]---

const sharedUniformProps = ['name', 'value', 'setValue', 'getValue'] as const

const _uniform = (['boundary', 'itemSize', ...sharedUniformProps] as const).distinct()
objProps.renderer_uniform = _uniform

const _numberUniform = ([...objProps.uniform, 'isNumberUniform'] as const).distinct()
objProps.numberUniform = _numberUniform

const _vector2Uniform = ([...objProps.uniform, 'isVector2Uniform'] as const).distinct()
objProps.vector2Uniform = _vector2Uniform

const _vector3Uniform = ([...objProps.uniform, 'isVector3Uniform'] as const).distinct()
objProps.vector3Uniform = _vector3Uniform

const _vector4Uniform = ([...objProps.uniform, 'isVector4Uniform'] as const).distinct()
objProps.vector4Uniform = _vector4Uniform

const _colorUniform = ([...objProps.uniform, 'isColorUniform'] as const).distinct()
objProps.colorUniform = _colorUniform

const _matrix2Uniform = ([...objProps.uniform, 'isMatrix2Uniform'] as const).distinct()
objProps.matrix2Uniform = _matrix2Uniform

const _matrix3Uniform = ([...objProps.uniform, 'isMatrix3Uniform'] as const).distinct()
objProps.matrix3Uniform = _matrix3Uniform

const _matrix4Uniform = ([...objProps.uniform, 'isMatrix4Uniform'] as const).distinct()
objProps.matrix4Uniform = _matrix4Uniform

// ---[ Props & Defaults ]---

type UniformArgs = {
	name: string
	value: any
}

// export type UniformProps = Node<Uniform, typeof Uniform, UniformArgs>
export type NumberUniformProps = Node<NumberUniform, typeof NumberUniform, UniformArgs>
export type Vector2UniformProps = Node<Vector2Uniform, typeof Vector2Uniform, UniformArgs>
export type Vector3UniformProps = Node<Vector3Uniform, typeof Vector3Uniform, UniformArgs>
export type Vector4UniformProps = Node<Vector4Uniform, typeof Vector4Uniform, UniformArgs>
export type ColorUniformProps = Node<ColorUniform, typeof ColorUniform, UniformArgs>
export type Matrix2UniformProps = Node<Matrix2Uniform, typeof Matrix2Uniform, UniformArgs>
export type Matrix3UniformProps = Node<Matrix3Uniform, typeof Matrix3Uniform, UniformArgs>
export type Matrix4UniformProps = Node<Matrix4Uniform, typeof Matrix4Uniform, UniformArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		uniform: Partial<UniformArgs>,
		numberUniform: Partial<UniformArgs>,
		vector2Uniform: Partial<UniformArgs>,
		vector3Uniform: Partial<UniformArgs>,
		vector4Uniform: Partial<UniformArgs>,
		colorUniform: Partial<UniformArgs>,
		matrix2Uniform: Partial<UniformArgs>,
		matrix3Uniform: Partial<UniformArgs>,
		matrix4Uniform: Partial<UniformArgs>,
	}
}

defaults.uniform = {}
defaults.numberUniform = {}
defaults.vector2Uniform = {}
defaults.vector3Uniform = {}
defaults.vector4Uniform = {}
defaults.colorUniform = {}
defaults.matrix2Uniform = {}
defaults.matrix3Uniform = {}
defaults.matrix4Uniform = {}