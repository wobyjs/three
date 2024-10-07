import { MaterialNode } from './MaterialNode'
import { Material, MaterialParameters } from 'three/src/materials/Material.js'
export { Material } from 'three/src/materials/Material.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../../lib/three/extensions'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        Material: typeof Material
    }
}

Three.Material = Material

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            material: MaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        material: WrapAsString<MaterialParameters>
        materialParameters: WrapAsString<MaterialParameters>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        material: typeof _material
        materialParameters: typeof _materialParameters
    }
}



consParams.materialParameters = ([
    'alphaHash',
    'alphaTest',
    'alphaToCoverage',
    'blendAlpha',
    'blendColor',
    'blendDst',
    'blendDstAlpha',
    'blendEquation',
    'blendEquationAlpha',
    'blending',
    'blendSrc',
    'blendSrcAlpha',
    'clipIntersection',
    'clippingPlanes',
    'clipShadows',
    'colorWrite',
    'defines',
    'depthFunc',
    'depthTest',
    'depthWrite',
    'name',
    'opacity',
    'polygonOffset',
    'polygonOffsetFactor',
    'polygonOffsetUnits',
    'precision',
    'premultipliedAlpha',
    'forceSinglePass',
    'dithering',
    'side',
    'shadowSide',
    'toneMapped',
    'transparent',
    'vertexColors',
    'visible',
    'format',
    'stencilWrite',
    'stencilFunc',
    'stencilRef',
    'stencilWriteMask',
    'stencilFuncMask',
    'stencilFail',
    'stencilZFail',
    'stencilZPass',
    'userData',
] as const).toObject(),
    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
    //@ts-ignore
    consParams.material = { ...consParams.materialParameters }





/**
 * parameters is an object with one or more properties defining the material's appearance.
 */

consParams.meshBasicMaterialParameters = {
    ...consParams.materialParameters,
    ...(['color',
        'opacity',
        'map',
        'lightMap',
        'lightMapIntensity',
        'aoMap',
        'aoMapIntensity',
        'specularMap',
        'alphaMap',
        'fog',
        'envMap',
        'envMapRotation',
        'combine',
        'reflectivity',
        'refractionRatio',
        'wireframe',
        'wireframeLinewidth',
        'wireframeLinecap',
        'wireframeLinejoin',
    ] as const).toObject()
}



const _materialParameters = ([
    'alphaHash',
    'alphaTest',
    'alphaToCoverage',
    'blendAlpha',
    'blendColor',
    'blendDst',
    'blendDstAlpha',
    'blendEquation',
    'blendEquationAlpha',
    'blending',
    'blendSrc',
    'blendSrcAlpha',
    'clipIntersection',
    'clippingPlanes',
    'clipShadows',
    'colorWrite',
    'defines',
    'depthFunc',
    'depthTest',
    'depthWrite',
    'name',
    'opacity',
    'polygonOffset',
    'polygonOffsetFactor',
    'polygonOffsetUnits',
    'precision',
    'premultipliedAlpha',
    'forceSinglePass',
    'dithering',
    'side',
    'shadowSide',
    'toneMapped',
    'transparent',
    'vertexColors',
    'visible',
    'format',
    'stencilWrite',
    'stencilFunc',
    'stencilRef',
    'stencilWriteMask',
    'stencilFuncMask',
    'stencilFail',
    'stencilZFail',
    'stencilZPass',
    'userData',
] as const).distinct()
objProps.materialParameters = _materialParameters

/**
 * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
 */

const _material = ([
    /**
     * Enables alpha hashed transparency, an alternative to {@link .transparent} or {@link .alphaTest}. The material
     * will not be rendered if opacity is lower than a random threshold. Randomization introduces some grain or noise,
     * but approximates alpha blending without the associated problems of sorting. Using TAARenderPass can reduce the
     * resulting noise.
     */
    'alphaHash',
    /**
     * Enables alpha to coverage. Can only be used with MSAA-enabled rendering contexts (meaning when the renderer was
     * created with *antialias* parameter set to `true`). Enabling this will smooth aliasing on clip plane edges and
     * alphaTest-clipped edges.
     * @default false
     */
    'alphaToCoverage',
    /**
     * Represents the alpha value of the constant blend color. This property has only an effect when using custom
     * blending with {@link ConstantAlphaFactor} or {@link OneMinusConstantAlphaFactor}.
     * @default 0
     */
    'blendAlpha',
    /**
     * Represent the rgb values of the constant blend color. This property has only an effect when using custom
     * blending with {@link ConstantColorFactor} or {@link OneMinusConstantColorFactor}.
     * @default 0x000000
     */
    'blendColor',
    /**
     * Blending destination. It's one of the blending mode constants defined in three.js. Default is {@link OneMinusSrcAlphaFactor}.
     * @default THREE.OneMinusSrcAlphaFactor
     */
    'blendDst',
    /**
     * The tranparency of the .blendDst. Default is null.
     * @default null
     */
    'blendDstAlpha',
    /**
     * Blending equation to use when applying blending. It's one of the constants defined in three.js. Default is {@link AddEquation}.
     * @default THREE.AddEquation
     */
    'blendEquation',
    /**
     * The tranparency of the .blendEquation. Default is null.
     * @default null
     */
    'blendEquationAlpha',
    /**
     * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
     * @default THREE.NormalBlending
     */
    'blending',
    /**
     * Blending source. It's one of the blending mode constants defined in three.js. Default is {@link SrcAlphaFactor}.
     * @default THREE.SrcAlphaFactor
     */
    'blendSrc',
    /**
     * The tranparency of the .blendSrc. Default is null.
     * @default null
     */
    'blendSrcAlpha',
    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
     * @default false
     */
    'clipIntersection',
    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space.
     * These planes apply to the objects this material is attached to.
     * Points in space whose signed distance to the plane is negative are clipped (not rendered).
     * See the WebGl / clipping /intersection example. Default is null.
     * @default null
     */
    'clippingPlanes',
    /**
     * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
     * @default false
     */
    'clipShadows',
    /**
     * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
     * @default true
     */
    'colorWrite',
    /**
     * Custom defines to be injected into the shader. These are passed in form of an object literal, with key/value pairs. { MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }.
     * The pairs are defined in both vertex and fragment shaders. Default is undefined.
     * @default undefined
     */
    'defines',
    /**
     * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
     * @default THREE.LessEqualDepth
     */
    'depthFunc',
    /**
     * Whether to have depth test enabled when rendering this material. When the depth test is disabled, the depth write
     * will also be implicitly disabled.
     * @default true
     */
    'depthTest',
    /**
     * Whether rendering this material has any effect on the depth buffer. Default is true.
     * When drawing 2d overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
     * @default true
     */
    'depthWrite',
    /**
     * Unique number of this material instance.
     */
    'id',
    /**
     * Whether rendering this material has any effect on the stencil buffer. Default is *false*.
     * @default false
     */
    'stencilWrite',
    /**
     * The stencil comparison function to use. Default is {@link AlwaysStencilFunc}. See stencil operation constants for all possible values.
     * @default THREE.AlwaysStencilFunc
     */
    'stencilFunc',
    /**
     * The value to use when performing stencil comparisons or stencil operations. Default is *0*.
     * @default 0
     */
    'stencilRef',
    /**
     * The bit mask to use when writing to the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    'stencilWriteMask',
    /**
     * The bit mask to use when comparing against the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    'stencilFuncMask',
    /**
     * Which stencil operation to perform when the comparison function returns false. Default is {@link KeepStencilOp}. See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    'stencilFail',
    /**
     * Which stencil operation to perform when the comparison function returns true but the depth test fails.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    'stencilZFail',
    /**
     * Which stencil operation to perform when the comparison function returns true and the depth test passes.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    'stencilZPass',
    /**
     * Material name. Default is an empty string.
     * @default ''
     */
    'name',
    /**
     * Opacity. Default is 1.
     * @default 1
     */
    'opacity',
    /**
     * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGl feature.
     * @default false
     */
    'polygonOffset',
    /**
     * Sets the polygon offset factor. Default is 0.
     * @default 0
     */
    'polygonOffsetFactor',
    /**
     * Sets the polygon offset units. Default is 0.
     * @default 0
     */
    'polygonOffsetUnits',
    /**
     * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
     * @default null
     */
    'precision',
    /**
     * Whether to premultiply the alpha (transparency) value. See WebGl / Materials / Transparency for an example of the difference. Default is false.
     * @default false
     */
    'premultipliedAlpha',
    /**
     * @default false
     */
    'forceSinglePass',
    /**
     * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
     * @default false
     */
    'dithering',
    /**
     * Defines which of the face sides will be rendered - front, back or both.
     * Default is {@link THREE.FrontSide}. Other options are {@link THREE.BackSide} and {@link THREE.DoubleSide}.
     *
     * @default {@link THREE.FrontSide}
     */
    'side',
    /**
     * Defines which of the face sides will cast shadows. Default is *null*.
     * If *null*, the value is opposite that of side, above.
     * @default null
     */
    'shadowSide',
    /**
     * Defines whether this material is tone mapped according to the renderer's
     * {@link WebGlRenderer.toneMapping toneMapping} setting. It is ignored when rendering to a render target or using
     * post processing.
     * @default true
     */
    'toneMapped',
    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
     * @default false
     */
    'transparent',
    /**
     * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
     * @default 'Material'
     */
    'type',
    /**
     * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
     */
    'uuid',
    /**
     * Defines whether vertex coloring is used. Default is false.
     * @default false
     */
    'vertexColors',
    /**
     * Defines whether this material is visible. Default is true.
     * @default true
     */
    'visible',
    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    'userData',
    /**
     * This starts at 0 and counts how many times .needsUpdate is set to true.
     * @default 0
     */
    'version',
] as const).distinct()
objProps.material = _material

export type MaterialProps = MaterialNode<Material, MaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        material: Partial<MaterialParameters>
    }
}

defaults.material = {}
