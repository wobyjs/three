// Run with: tsx test/coverage/coverage.test.ts
// Verifies that all Three.js classes registered in the `Three` registry have
// corresponding consParams, objProps, and defaults entries.
//
// Philosophy:
//   - objProps is NOT a strict allowlist — fixReactiveProps.tsx:102 checks
//     "objKey[key] || (instance && key in instance)", so any property that
//     exists on the instance at runtime will be set regardless of objProps.
//   - consParams is critical — these are constructor arguments that MUST be
//     passed at construction time, not after.
//   - defaults provides fallback values for optional constructor parameters.
//
// This script reports:
//   1. Classes registered in Three but missing from consParams/objProps/defaults
//   2. Constructor parameter gaps
//   3. Instance property coverage (informational — objProps is not exclusive)
//
// Strategy: We import a bootstrap file that registers all known Three.js classes
// into the window.__$$*$$__ registries, then inspect those registries.

import '../setup'

// =============================================================================
// STEP 1: Import all registration files to populate registries
// =============================================================================
// These imports cause side effects: they set Three.ClassName = ClassName and
// populate consParams/objProps/defaults registries.

// -- Core --
import '../../code/src/core/EventDispatcher'
import '../../code/src/core/Object3D'
import '../../code/src/core/BufferGeometry'
import '../../code/src/core/BufferAttribute'
import '../../code/src/core/InstancedBufferGeometry'
import '../../code/src/core/InstancedBufferAttribute'
import '../../code/src/core/InstancedInterleavedBuffer'
import '../../code/src/core/InterleavedBuffer'
import '../../code/src/core/InterleavedBufferAttribute'
import '../../code/src/core/Layers'
import '../../code/src/core/Clock'
import '../../code/src/core/Uniform'
import '../../code/src/core/UniformsGroup'
import '../../code/src/core/Raycaster'
import '../../code/src/core/RenderTarget'
import '../../code/src/core/RenderTarget3D'
import '../../code/src/core/RenderTargetArray'
import '../../code/src/core/GLBufferAttribute'
import '../../code/src/core/Float16BufferAttribute'
import '../../code/src/core/Float32BufferAttribute'
import '../../code/src/core/Int8BufferAttribute'
import '../../code/src/core/Int16BufferAttribute'
import '../../code/src/core/Int32BufferAttribute'
import '../../code/src/core/Uint8BufferAttribute'
import '../../code/src/core/Uint16BufferAttribute'
import '../../code/src/core/Uint32BufferAttribute'

// -- Scenes --
import '../../code/src/scenes/Scene'
import '../../code/src/scenes/Fog'
import '../../code/src/scenes/FogExp2'

// -- Cameras --
import '../../code/src/cameras/Camera'
import '../../code/src/cameras/PerspectiveCamera'
import '../../code/src/cameras/OrthographicCamera'
import '../../code/src/cameras/CubeCamera'
import '../../code/src/cameras/ArrayCamera'
import '../../code/src/cameras/StereoCamera'

// -- Objects --
import '../../code/src/objects/Mesh'
import '../../code/src/objects/Group'
import '../../code/src/objects/Line'
import '../../code/src/objects/LineLoop'
import '../../code/src/objects/LineSegments'
import '../../code/src/objects/Points'
import '../../code/src/objects/Sprite'
import '../../code/src/objects/Bone'
import '../../code/src/objects/SkinnedMesh'
import '../../code/src/objects/InstancedMesh'
import '../../code/src/objects/LOD'
import '../../code/src/objects/Skeleton'
import '../../code/src/objects/BatchedMesh'
import '../../code/src/objects/ClippingGroup'

// -- Lights --
import '../../code/src/lights/Light'
import '../../code/src/lights/AmbientLight'
import '../../code/src/lights/DirectionalLight'
import '../../code/src/lights/HemisphereLight'
import '../../code/src/lights/PointLight'
import '../../code/src/lights/SpotLight'
import '../../code/src/lights/RectAreaLight'
import '../../code/src/lights/LightProbe'
import '../../code/src/lights/LightShadow'
import '../../code/src/lights/SpotLightShadow'
import '../../code/src/lights/PointLightShadow'
import '../../code/src/lights/DirectionalLightShadow'

// -- Materials --
import '../../code/src/materials/Material'
import '../../code/src/materials/MeshBasicMaterial'
import '../../code/src/materials/MeshLambertMaterial'
import '../../code/src/materials/MeshPhongMaterial'
import '../../code/src/materials/MeshStandardMaterial'
import '../../code/src/materials/MeshPhysicalMaterial'
import '../../code/src/materials/MeshToonMaterial'
import '../../code/src/materials/MeshNormalMaterial'
import '../../code/src/materials/MeshDepthMaterial'
import '../../code/src/materials/MeshDistanceMaterial'
import '../../code/src/materials/MeshMatcapMaterial'
import '../../code/src/materials/LineBasicMaterial'
import '../../code/src/materials/LineDashedMaterial'
import '../../code/src/materials/PointsMaterial'
import '../../code/src/materials/SpriteMaterial'
import '../../code/src/materials/ShaderMaterial'
import '../../code/src/materials/RawShaderMaterial'
import '../../code/src/materials/ShadowMaterial'

// -- Node Materials --
import '../../code/src/materials/nodes/NodeMaterial'
import '../../code/src/materials/nodes/MeshBasicNodeMaterial'
import '../../code/src/materials/nodes/MeshLambertNodeMaterial'
import '../../code/src/materials/nodes/MeshPhongNodeMaterial'
import '../../code/src/materials/nodes/MeshStandardNodeMaterial'
import '../../code/src/materials/nodes/MeshPhysicalNodeMaterial'
import '../../code/src/materials/nodes/MeshToonNodeMaterial'
import '../../code/src/materials/nodes/MeshNormalNodeMaterial'
import '../../code/src/materials/nodes/MeshMatcapNodeMaterial'
import '../../code/src/materials/nodes/MeshSSSNodeMaterial'
import '../../code/src/materials/nodes/LineBasicNodeMaterial'
import '../../code/src/materials/nodes/LineDashedNodeMaterial'
import '../../code/src/materials/nodes/Line2NodeMaterial'
import '../../code/src/materials/nodes/PointsNodeMaterial'
import '../../code/src/materials/nodes/SpriteNodeMaterial'
import '../../code/src/materials/nodes/ShadowNodeMaterial'
import '../../code/src/materials/nodes/VolumeNodeMaterial'
import '../../code/src/materials/nodes/manager/NodeMaterialObserver'

// -- Textures --
import '../../code/src/textures/Texture'
import '../../code/src/textures/CanvasTexture'
import '../../code/src/textures/CubeTexture'
import '../../code/src/textures/DataTexture'
import '../../code/src/textures/Data3DTexture'
import '../../code/src/textures/DataArrayTexture'
import '../../code/src/textures/DepthTexture'
import '../../code/src/textures/FramebufferTexture'
import '../../code/src/textures/VideoTexture'
import '../../code/src/textures/CompressedTexture'
import '../../code/src/textures/CompressedArrayTexture'
import '../../code/src/textures/CompressedCubeTexture'

// -- Geometries --
import '../../code/src/geometries/BoxGeometry'
import '../../code/src/geometries/CircleGeometry'
import '../../code/src/geometries/ConeGeometry'
import '../../code/src/geometries/CylinderGeometry'
import '../../code/src/geometries/SphereGeometry'
import '../../code/src/geometries/PlaneGeometry'
import '../../code/src/geometries/RingGeometry'
import '../../code/src/geometries/TorusGeometry'
import '../../code/src/geometries/TorusKnotGeometry'
import '../../code/src/geometries/TubeGeometry'
import '../../code/src/geometries/LatheGeometry'
import '../../code/src/geometries/ExtrudeGeometry'
import '../../code/src/geometries/ShapeGeometry'
import '../../code/src/geometries/EdgesGeometry'
import '../../code/src/geometries/WireframeGeometry'
import '../../code/src/geometries/TetrahedronGeometry'
import '../../code/src/geometries/OctahedronGeometry'
import '../../code/src/geometries/IcosahedronGeometry'
import '../../code/src/geometries/DodecahedronGeometry'
import '../../code/src/geometries/PolyhedronGeometry'
import '../../code/src/geometries/CapsuleGeometry'

// -- Renderers --
import '../../code/src/renderers/WebGLRenderer'
import '../../code/src/renderers/WebGLRenderTarget'
import '../../code/src/renderers/WebGL3DRenderTarget'
import '../../code/src/renderers/WebGLArrayRenderTarget'

// -- Helpers --
import '../../code/src/helpers/ArrowHelper'
import '../../code/src/helpers/AxesHelper'
import '../../code/src/helpers/BoxHelper'
import '../../code/src/helpers/Box3Helper'
import '../../code/src/helpers/CameraHelper'
import '../../code/src/helpers/DirectionalLightHelper'
import '../../code/src/helpers/GridHelper'
import '../../code/src/helpers/HemisphereLightHelper'
import '../../code/src/helpers/PlaneHelper'
import '../../code/src/helpers/PointLightHelper'
import '../../code/src/helpers/PolarGridHelper'
import '../../code/src/helpers/SkeletonHelper'
import '../../code/src/helpers/SpotLightHelper'

// -- Animation --
import '../../code/src/animation/AnimationClip'
import '../../code/src/animation/AnimationAction'
import '../../code/src/animation/AnimationMixer'
import '../../code/src/animation/AnimationObjectGroup'
import '../../code/src/animation/KeyframeTrack'
import '../../code/src/animation/PropertyBinding'
import '../../code/src/animation/PropertyMixer'
import '../../code/src/animation/tracks/BooleanKeyframeTrack'
import '../../code/src/animation/tracks/ColorKeyframeTrack'
import '../../code/src/animation/tracks/NumberKeyframeTrack'
import '../../code/src/animation/tracks/QuaternionKeyframeTrack'
import '../../code/src/animation/tracks/StringKeyframeTrack'
import '../../code/src/animation/tracks/VectorKeyframeTrack'

// -- Audio --
import '../../code/src/audio/Audio'
import '../../code/src/audio/AudioListener'
import '../../code/src/audio/AudioAnalyser'
import '../../code/src/audio/AudioContext'
import '../../code/src/audio/PositionalAudio'

// -- Math --
import '../../code/src/math/Vector2'
import '../../code/src/math/Vector3'
import '../../code/src/math/Vector4'
import '../../code/src/math/Matrix2'
import '../../code/src/math/Matrix3'
import '../../code/src/math/Matrix4'
import '../../code/src/math/Color'
import '../../code/src/math/Euler'
import '../../code/src/math/Quaternion'
import '../../code/src/math/Box2'
import '../../code/src/math/Box3'
import '../../code/src/math/Plane'
import '../../code/src/math/Sphere'
import '../../code/src/math/Ray'
import '../../code/src/math/Frustum'
import '../../code/src/math/Triangle'
import '../../code/src/math/Spherical'
import '../../code/src/math/Cylindrical'
import '../../code/src/math/Interpolant'
import '../../code/src/math/interpolants/LinearInterpolant'
import '../../code/src/math/interpolants/DiscreteInterpolant'
import '../../code/src/math/interpolants/CubicInterpolant'
import '../../code/src/math/interpolants/QuaternionLinearInterpolant'

// -- Loaders --
import '../../code/src/loaders/Loader'
import '../../code/src/loaders/LoadingManager'
import '../../code/src/loaders/FileLoader'
import '../../code/src/loaders/ImageLoader'
import '../../code/src/loaders/ImageBitmapLoader'
import '../../code/src/loaders/TextureLoader'
import '../../code/src/loaders/CubeTextureLoader'
import '../../code/src/loaders/DataTextureLoader'
import '../../code/src/loaders/CompressedTextureLoader'
import '../../code/src/loaders/BufferGeometryLoader'
import '../../code/src/loaders/MaterialLoader'
import '../../code/src/loaders/ObjectLoader'
import '../../code/src/loaders/AudioLoader'
import '../../code/src/loaders/AnimationLoader'

// -- Extras --
import '../../code/src/extras/core/Curve'
import '../../code/src/extras/core/CurvePath'
import '../../code/src/extras/core/Shape'
import '../../code/src/extras/core/ShapePath'
import '../../code/src/extras/curves/ArcCurve'
import '../../code/src/extras/curves/CatmullRomCurve3'
import '../../code/src/extras/curves/CubicBezierCurve'
import '../../code/src/extras/curves/CubicBezierCurve3'
import '../../code/src/extras/curves/EllipseCurve'
import '../../code/src/extras/curves/LineCurve'
import '../../code/src/extras/curves/LineCurve3'
import '../../code/src/extras/curves/QuadraticBezierCurve'
import '../../code/src/extras/curves/QuadraticBezierCurve3'
import '../../code/src/extras/curves/SplineCurve'
import '../../code/src/extras/ImageUtils'
import '../../code/src/extras/ShapeUtils'

// =============================================================================
// STEP 2: Import registries
// =============================================================================
import { Three } from '../../code/lib/3/three'
import { consParams } from '../../code/lib/3/consParams'
import { objProps } from '../../code/lib/3/objProps'
import { defaults } from '../../code/lib/3/defaults'
import { distinct } from '../../code/lib/utils'

import { strictEqual, ok } from 'node:assert/strict'

// =============================================================================
// STEP 3: Test helpers
// =============================================================================

let passed = 0
let failed = 0
const errors: string[] = []

function test(name: string, fn: () => void): void {
    try {
        fn()
        console.log(`  ✓ ${name}`)
        passed++
    } catch (e: any) {
        console.error(`  ✗ ${name}: ${e.message}`)
        failed++
        errors.push(`  ✗ ${name}: ${e.message}`)
    }
}

// =============================================================================
// STEP 4: Element name mapping
// =============================================================================
// Maps Three.js PascalCase class names → lowercase JSX element names
const classNameToElementName: Record<string, string> = {}

// Register known mappings — these are the ones used in code/src/ files
function registerMapping(pascalCase: string, elementName: string) {
    classNameToElementName[pascalCase] = elementName
}

// Core
registerMapping('Object3D', 'object3d')
registerMapping('EventDispatcher', 'eventDispatcher')
registerMapping('BufferGeometry', 'bufferGeometry')
registerMapping('BufferAttribute', 'bufferAttribute')
registerMapping('InstancedBufferGeometry', 'instancedBufferGeometry')
registerMapping('InstancedBufferAttribute', 'instancedBufferAttribute')
registerMapping('InstancedInterleavedBuffer', 'instancedInterleavedBuffer')
registerMapping('InterleavedBuffer', 'interleavedBuffer')
registerMapping('InterleavedBufferAttribute', 'interleavedBufferAttribute')
registerMapping('Layers', 'layers')
registerMapping('Clock', 'clock')
registerMapping('Uniform', 'uniform')
registerMapping('UniformsGroup', 'uniformsGroup')
registerMapping('Raycaster', 'raycaster')
registerMapping('RenderTarget', 'renderTarget')
registerMapping('RenderTarget3D', 'renderTarget3D')
registerMapping('RenderTargetArray', 'renderTargetArray')
registerMapping('GLBufferAttribute', 'glBufferAttribute')
registerMapping('Float16BufferAttribute', 'float16BufferAttribute')
registerMapping('Float32BufferAttribute', 'float32BufferAttribute')
registerMapping('Int8BufferAttribute', 'int8BufferAttribute')
registerMapping('Int16BufferAttribute', 'int16BufferAttribute')
registerMapping('Int32BufferAttribute', 'int32BufferAttribute')
registerMapping('Uint8BufferAttribute', 'uint8BufferAttribute')
registerMapping('Uint16BufferAttribute', 'uint16BufferAttribute')
registerMapping('Uint32BufferAttribute', 'uint32BufferAttribute')

// Scenes
registerMapping('Scene', 'scene')
registerMapping('Fog', 'fog')
registerMapping('FogExp2', 'fogExp2')

// Cameras
registerMapping('Camera', 'camera')
registerMapping('PerspectiveCamera', 'perspectiveCamera')
registerMapping('OrthographicCamera', 'orthographicCamera')
registerMapping('CubeCamera', 'cubeCamera')
registerMapping('ArrayCamera', 'arrayCamera')
registerMapping('StereoCamera', 'stereoCamera')

// Objects
registerMapping('Mesh', 'mesh')
registerMapping('Group', 'group')
registerMapping('Line', 'line')
registerMapping('LineLoop', 'lineLoop')
registerMapping('LineSegments', 'lineSegments')
registerMapping('Points', 'points')
registerMapping('Sprite', 'sprite')
registerMapping('Bone', 'bone')
registerMapping('SkinnedMesh', 'skinnedMesh')
registerMapping('InstancedMesh', 'instancedMesh')
registerMapping('LOD', 'lod')
registerMapping('Skeleton', 'skeleton')
registerMapping('BatchedMesh', 'batchedMesh')
registerMapping('ClippingGroup', 'clippingGroup')

// Lights
registerMapping('Light', 'light')
registerMapping('AmbientLight', 'ambientLight')
registerMapping('DirectionalLight', 'directionalLight')
registerMapping('HemisphereLight', 'hemisphereLight')
registerMapping('PointLight', 'pointLight')
registerMapping('SpotLight', 'spotLight')
registerMapping('RectAreaLight', 'rectAreaLight')
registerMapping('LightProbe', 'lightProbe')
registerMapping('LightShadow', 'lightShadow')
registerMapping('SpotLightShadow', 'spotLightShadow')
registerMapping('PointLightShadow', 'pointLightShadow')
registerMapping('DirectionalLightShadow', 'directionalLightShadow')

// Materials
registerMapping('Material', 'material')
registerMapping('MeshBasicMaterial', 'meshBasicMaterial')
registerMapping('MeshLambertMaterial', 'meshLambertMaterial')
registerMapping('MeshPhongMaterial', 'meshPhongMaterial')
registerMapping('MeshStandardMaterial', 'meshStandardMaterial')
registerMapping('MeshPhysicalMaterial', 'meshPhysicalMaterial')
registerMapping('MeshToonMaterial', 'meshToonMaterial')
registerMapping('MeshNormalMaterial', 'meshNormalMaterial')
registerMapping('MeshDepthMaterial', 'meshDepthMaterial')
registerMapping('MeshDistanceMaterial', 'meshDistanceMaterial')
registerMapping('MeshMatcapMaterial', 'meshMatcapMaterial')
registerMapping('LineBasicMaterial', 'lineBasicMaterial')
registerMapping('LineDashedMaterial', 'lineDashedMaterial')
registerMapping('PointsMaterial', 'pointsMaterial')
registerMapping('SpriteMaterial', 'spriteMaterial')
registerMapping('ShaderMaterial', 'shaderMaterial')
registerMapping('RawShaderMaterial', 'rawShaderMaterial')
registerMapping('ShadowMaterial', 'shadowMaterial')

// Node Materials
registerMapping('NodeMaterial', 'nodeMaterial')
registerMapping('MeshBasicNodeMaterial', 'meshBasicNodeMaterial')
registerMapping('MeshLambertNodeMaterial', 'meshLambertNodeMaterial')
registerMapping('MeshPhongNodeMaterial', 'meshPhongNodeMaterial')
registerMapping('MeshStandardNodeMaterial', 'meshStandardNodeMaterial')
registerMapping('MeshPhysicalNodeMaterial', 'meshPhysicalNodeMaterial')
registerMapping('MeshToonNodeMaterial', 'meshToonNodeMaterial')
registerMapping('MeshNormalNodeMaterial', 'meshNormalNodeMaterial')
registerMapping('MeshMatcapNodeMaterial', 'meshMatcapNodeMaterial')
registerMapping('MeshSSSNodeMaterial', 'meshSssNodeMaterial')
registerMapping('LineBasicNodeMaterial', 'lineBasicNodeMaterial')
registerMapping('LineDashedNodeMaterial', 'lineDashedNodeMaterial')
registerMapping('Line2NodeMaterial', 'line2NodeMaterial')
registerMapping('PointsNodeMaterial', 'pointsNodeMaterial')
registerMapping('SpriteNodeMaterial', 'spriteNodeMaterial')
registerMapping('ShadowNodeMaterial', 'shadowNodeMaterial')
registerMapping('VolumeNodeMaterial', 'volumeNodeMaterial')
registerMapping('NodeMaterialObserver', 'nodeMaterialObserver')

// Textures
registerMapping('Texture', 'texture')
registerMapping('CanvasTexture', 'canvasTexture')
registerMapping('CubeTexture', 'cubeTexture')
registerMapping('DataTexture', 'dataTexture')
registerMapping('Data3DTexture', 'data3dTexture')
registerMapping('DataArrayTexture', 'dataArrayTexture')
registerMapping('DepthTexture', 'depthTexture')
registerMapping('FramebufferTexture', 'framebufferTexture')
registerMapping('VideoTexture', 'videoTexture')
registerMapping('CompressedTexture', 'compressedTexture')
registerMapping('CompressedArrayTexture', 'compressedArrayTexture')
registerMapping('CompressedCubeTexture', 'compressedCubeTexture')

// Geometries
registerMapping('BoxGeometry', 'boxGeometry')
registerMapping('CircleGeometry', 'circleGeometry')
registerMapping('ConeGeometry', 'coneGeometry')
registerMapping('CylinderGeometry', 'cylinderGeometry')
registerMapping('SphereGeometry', 'sphereGeometry')
registerMapping('PlaneGeometry', 'planeGeometry')
registerMapping('RingGeometry', 'ringGeometry')
registerMapping('TorusGeometry', 'torusGeometry')
registerMapping('TorusKnotGeometry', 'torusKnotGeometry')
registerMapping('TubeGeometry', 'tubeGeometry')
registerMapping('LatheGeometry', 'latheGeometry')
registerMapping('ExtrudeGeometry', 'extrudeGeometry')
registerMapping('ShapeGeometry', 'shapeGeometry')
registerMapping('EdgesGeometry', 'edgesGeometry')
registerMapping('WireframeGeometry', 'wireframeGeometry')
registerMapping('TetrahedronGeometry', 'tetrahedronGeometry')
registerMapping('OctahedronGeometry', 'octahedronGeometry')
registerMapping('IcosahedronGeometry', 'icosahedronGeometry')
registerMapping('DodecahedronGeometry', 'dodecahedronGeometry')
registerMapping('PolyhedronGeometry', 'polyhedronGeometry')
registerMapping('CapsuleGeometry', 'capsuleGeometry')

// Renderers
registerMapping('WebGLRenderer', 'webglRenderer')
registerMapping('WebGLRenderTarget', 'webglRenderTarget')
registerMapping('WebGL3DRenderTarget', 'webgl3dRenderTarget')
registerMapping('WebGLArrayRenderTarget', 'webglArrayRenderTarget')

// Helpers
registerMapping('ArrowHelper', 'arrowHelper')
registerMapping('AxesHelper', 'axesHelper')
registerMapping('BoxHelper', 'boxHelper')
registerMapping('Box3Helper', 'box3Helper')
registerMapping('CameraHelper', 'cameraHelper')
registerMapping('DirectionalLightHelper', 'directionalLightHelper')
registerMapping('GridHelper', 'gridHelper')
registerMapping('HemisphereLightHelper', 'hemisphereLightHelper')
registerMapping('PlaneHelper', 'planeHelper')
registerMapping('PointLightHelper', 'pointLightHelper')
registerMapping('PolarGridHelper', 'polarGridHelper')
registerMapping('SkeletonHelper', 'skeletonHelper')
registerMapping('SpotLightHelper', 'spotLightHelper')

// Animation
registerMapping('AnimationClip', 'animationClip')
registerMapping('AnimationAction', 'animationAction')
registerMapping('AnimationMixer', 'animationMixer')
registerMapping('AnimationObjectGroup', 'animationObjectGroup')
registerMapping('KeyframeTrack', 'keyframeTrack')
registerMapping('PropertyBinding', 'propertyBinding')
registerMapping('PropertyMixer', 'propertyMixer')
registerMapping('BooleanKeyframeTrack', 'booleanKeyframeTrack')
registerMapping('ColorKeyframeTrack', 'colorKeyframeTrack')
registerMapping('NumberKeyframeTrack', 'numberKeyframeTrack')
registerMapping('QuaternionKeyframeTrack', 'quaternionKeyframeTrack')
registerMapping('StringKeyframeTrack', 'stringKeyframeTrack')
registerMapping('VectorKeyframeTrack', 'vectorKeyframeTrack')

// Audio
registerMapping('Audio', 'audio')
registerMapping('AudioListener', 'audioListener')
registerMapping('AudioAnalyser', 'audioAnalyser')
registerMapping('AudioContext', 'audioContext')
registerMapping('PositionalAudio', 'positionalAudio')

// Math
registerMapping('Vector2', 'vector2')
registerMapping('Vector3', 'vector3')
registerMapping('Vector4', 'vector4')
registerMapping('Matrix3', 'matrix3')
registerMapping('Matrix4', 'matrix4')
registerMapping('Matrix2', 'matrix2')
registerMapping('Color', 'color')
registerMapping('Euler', 'euler')
registerMapping('Quaternion', 'quaternion')
registerMapping('Box2', 'box2')
registerMapping('Box3', 'box3')
registerMapping('Plane', 'plane')
registerMapping('Sphere', 'sphere')
registerMapping('Ray', 'ray')
registerMapping('Frustum', 'frustum')
registerMapping('Triangle', 'triangle')
registerMapping('Spherical', 'spherical')
registerMapping('Cylindrical', 'cylindrical')
registerMapping('Interpolant', 'interpolant')
registerMapping('LinearInterpolant', 'linearInterpolant')
registerMapping('DiscreteInterpolant', 'discreteInterpolant')
registerMapping('CubicInterpolant', 'cubicInterpolant')
registerMapping('QuaternionLinearInterpolant', 'quaternionLinearInterpolant')

// Loaders
registerMapping('Loader', 'loader')
registerMapping('LoadingManager', 'loadingManager')
registerMapping('FileLoader', 'fileLoader')
registerMapping('ImageLoader', 'imageLoader')
registerMapping('ImageBitmapLoader', 'imageBitmapLoader')
registerMapping('TextureLoader', 'textureLoader')
registerMapping('CubeTextureLoader', 'cubeTextureLoader')
registerMapping('DataTextureLoader', 'dataTextureLoader')
registerMapping('CompressedTextureLoader', 'compressedTextureLoader')
registerMapping('BufferGeometryLoader', 'bufferGeometryLoader')
registerMapping('MaterialLoader', 'materialLoader')
registerMapping('ObjectLoader', 'objectLoader')
registerMapping('AudioLoader', 'audioLoader')
registerMapping('AnimationLoader', 'animationLoader')

// Extras
registerMapping('Curve', 'curve')
registerMapping('CurvePath', 'curvePath')
registerMapping('Shape', 'shape')
registerMapping('ShapePath', 'shapePath')
registerMapping('ArcCurve', 'arcCurve')
registerMapping('CatmullRomCurve3', 'catmullRomCurve3')
registerMapping('CubicBezierCurve', 'cubicBezierCurve')
registerMapping('CubicBezierCurve3', 'cubicBezierCurve3')
registerMapping('EllipseCurve', 'ellipseCurve')
registerMapping('LineCurve', 'lineCurve')
registerMapping('LineCurve3', 'lineCurve3')
registerMapping('QuadraticBezierCurve', 'quadraticBezierCurve')
registerMapping('QuadraticBezierCurve3', 'quadraticBezierCurve3')
registerMapping('SplineCurve', 'splineCurve')
registerMapping('ImageUtils', 'imageUtils')
registerMapping('ShapeUtils', 'shapeUtils')

// =============================================================================
// STEP 5: Get all registered classes from the Three registry
// =============================================================================

/** PascalCase class names in the Three registry */
const registeredClasses: string[] = []
const registeredElementNames: string[] = []

for (const key of Object.keys(Three)) {
    const v = Three[key]
    if (typeof v === 'function' && v.prototype) {
        if (/^[A-Z]/.test(key)) {
            registeredClasses.push(key)
        } else {
            registeredElementNames.push(key)
        }
    }
}

// Deduplicate
const uniqueClasses = distinct(registeredClasses)
const uniqueElementNames = distinct(registeredElementNames)

console.log('\n=== Coverage Verification: Three.js Class Bindings ===')
console.log(`\nRegistered Three.js classes: ${uniqueClasses.length}`)
console.log(`Registered element names: ${uniqueElementNames.length}`)

// =============================================================================
// STEP 6: Test 1 — All registered classes have consParams, objProps, defaults
// =============================================================================
console.log('\n1. Registry coverage (consParams / objProps / defaults)')

const missingConsParams: string[] = []
const missingObjProps: string[] = []
const missingDefaults: string[] = []

for (const className of uniqueClasses) {
    const elemName = classNameToElementName[className]
    if (!elemName) {
        // No mapping known — try to derive
        const derived = className.charAt(0).toLowerCase() + className.slice(1)
        console.log(`  ? ${className}: no known element name mapping, trying "${derived}"`)
        // We'll still check using the derived name
        if (!(consParams as any)[derived]) missingConsParams.push(className)
        if (!(objProps as any)[derived]) missingObjProps.push(className)
        if (!(defaults as any)[derived]) missingDefaults.push(className)
        continue
    }

    const hasCons = !!(consParams as any)[elemName]
    const hasObj = !!(objProps as any)[elemName]
    const hasDef = !!(defaults as any)[elemName]

    if (!hasCons) missingConsParams.push(className)
    if (!hasObj) missingObjProps.push(className)
    if (!hasDef) missingDefaults.push(className)

    test(`${className} → consParams.${elemName}`, () => {
        const cp = (consParams as any)[elemName]
        ok(cp && (Array.isArray(cp) || typeof cp === 'object'), `consParams.${elemName} should be an array or object`)
    })

    test(`${className} → objProps.${elemName}`, () => {
        ok(Array.isArray((objProps as any)[elemName]), `objProps.${elemName} should be an array`)
    })

    test(`${className} → defaults.${elemName}`, () => {
        const d = (defaults as any)[elemName]
        ok(typeof d === 'object' && d !== null, `defaults.${elemName} should be an object`)
    })
}

console.log(`\n  Missing consParams (${missingConsParams.length}):`)
for (const name of missingConsParams) {
    const elem = classNameToElementName[name] || name.charAt(0).toLowerCase() + name.slice(1)
    console.log(`    ⚠ ${name} → consParams.${elem} is missing`)
}

console.log(`\n  Missing objProps (${missingObjProps.length}):`)
for (const name of missingObjProps) {
    const elem = classNameToElementName[name] || name.charAt(0).toLowerCase() + name.slice(1)
    console.log(`    ⚠ ${name} → objProps.${elem} is missing`)
}

console.log(`\n  Missing defaults (${missingDefaults.length}):`)
for (const name of missingDefaults) {
    const elem = classNameToElementName[name] || name.charAt(0).toLowerCase() + name.slice(1)
    console.log(`    ⚠ ${name} → defaults.${elem} is missing`)
}

// =============================================================================
// STEP 7: Test 2 — Constructor parameter coverage
// =============================================================================
console.log('\n\n2. Constructor parameter coverage (consParams vs actual constructor signature)')

const constructorGaps: { className: string; param: string }[] = []

for (const className of uniqueClasses) {
    const elemName = classNameToElementName[className]
    if (!elemName) continue

    const consP = (consParams as any)[elemName] as readonly string[] | readonly any[] | undefined
    if (!consP || !(Array.isArray(consP) || typeof consP === 'object')) continue

    // Object-form consParams (e.g. { ...spread }) can't be inspected by param name
    if (!Array.isArray(consP)) continue

    const cls = Three[className] as new (...args: any[]) => any
    try {
        const src = cls.toString()
        const match = src.match(/constructor\s*\(([^)]*)\)/)
        if (!match) continue

        // Parse constructor parameters, handling default values
        // Split by top-level commas (not inside nested parens)
        const params = []
        let depth = 0
        let current = ''
        for (const ch of match[1]) {
            if (ch === '(') depth++
            else if (ch === ')') depth--
            else if (ch === ',' && depth === 0) {
                params.push(current.trim())
                current = ''
                continue
            }
            current += ch
        }
        if (current.trim()) params.push(current.trim())

        for (const param of params) {
            // Remove default values, type annotations, optional markers
            const cleaned = param
                .replace(/=.*$/, '')
                .replace(/:.*$/, '')
                .replace(/\?$/, '')
                .replace(/^_/, '')  // strip leading underscore
                .trim()

            if (!cleaned) continue

            // Skip options-bag params
            if (['parameters', 'params', 'object', 'data'].includes(cleaned)) continue

            if (!consP.includes(cleaned)) {
                constructorGaps.push({ className, param: cleaned })
            }
        }
    } catch {
        // Some classes may not be analyzable — skip
    }
}

if (constructorGaps.length > 0) {
    console.log(`\n  Constructor parameter gaps (${constructorGaps.length}):`)
    const byClass: Record<string, string[]> = {}
    for (const { className, param } of constructorGaps) {
        if (!byClass[className]) byClass[className] = []
        byClass[className].push(param)
    }
    for (const [className, params] of Object.entries(byClass)) {
        console.log(`    ⚠ ${className}: constructor params not in consParams: ${params.join(', ')}`)
    }
} else {
    console.log('  ✅ All constructor parameters are covered by consParams')
}

// =============================================================================
// STEP 8: Test 3 — Instance property coverage (informational)
// =============================================================================
console.log('\n\n3. Instance property coverage (objProps vs actual instance properties)')
console.log('   (NOTE: objProps is NOT a strict allowlist — fixReactiveProps has a runtime fallback)')
console.log('   This shows properties that exist on the instance but are NOT in objProps.')

const instanceGaps: { className: string; prop: string }[] = []

for (const className of uniqueClasses) {
    const elemName = classNameToElementName[className]
    if (!elemName) continue

    const objP = (objProps as any)[elemName] as readonly string[] | undefined
    if (!objP || !Array.isArray(objP)) continue

    const cls = Three[className] as new (...args: any[]) => any
    try {
        const instance = new cls()
        const props: string[] = []

        // Walk prototype chain
        let proto = Object.getPrototypeOf(instance)
        while (proto && proto !== Object.prototype) {
            const names = Object.getOwnPropertyNames(proto)
            for (const name of names) {
                if (name === 'constructor') continue
                if (name.startsWith('__')) continue
                if (name.startsWith('is') && name[2] === name[2].toUpperCase()) continue // skip isMesh, isObject3D, etc.
                if (typeof (instance as any)[name] === 'function') continue
                if (!props.includes(name)) props.push(name)
            }
            proto = Object.getPrototypeOf(proto)
        }

        // Own enumerable properties (for things like uuid set after construction)
        const own = Object.getOwnPropertyNames(instance)
        for (const name of own) {
            if (name === 'constructor') continue
            if (name.startsWith('__')) continue
            if (typeof (instance as any)[name] === 'function') continue
            if (!props.includes(name)) props.push(name)
        }

        for (const prop of props) {
            if (!objP.includes(prop)) {
                if (prop.startsWith('_')) continue
                instanceGaps.push({ className, prop })
            }
        }
    } catch {
        // Some classes can't be instantiated without params — skip
    }
}

if (instanceGaps.length > 0) {
    console.log(`\n  Instance properties not in objProps (${instanceGaps.length}):`)
    const byClass: Record<string, string[]> = {}
    for (const { className, prop } of instanceGaps) {
        if (!byClass[className]) byClass[className] = []
        byClass[className].push(prop)
    }
    for (const [className, props] of Object.entries(byClass).sort()) {
        console.log(`    ℹ ${className}: ${props.slice(0, 12).join(', ')}${props.length > 12 ? `, ... (${props.length - 12} more)` : ''}`)
    }
} else {
    console.log('  ✅ All instance properties are covered by objProps')
}

// =============================================================================
// STEP 9: Summary
// =============================================================================
console.log('\n\n=== Summary ===')
console.log(`  Tests passed: ${passed}`)
console.log(`  Tests failed: ${failed}`)
console.log(`  Classes registered in Three: ${uniqueClasses.length}`)
console.log(`  Missing consParams: ${missingConsParams.length}`)
console.log(`  Missing objProps: ${missingObjProps.length}`)
console.log(`  Missing defaults: ${missingDefaults.length}`)
console.log(`  Constructor parameter gaps: ${constructorGaps.length}`)
console.log(`  Instance properties not in objProps: ${instanceGaps.length}`)

if (failed === 0 && missingConsParams.length === 0 && constructorGaps.length === 0) {
    console.log('\n✅ All registered Three.js classes have complete consParams, objProps, and defaults coverage.')
    console.log('   The fixReactiveProps fallback (key in instance) ensures any unlisted instance properties still work.')
} else {
    console.log('\n⚠ Coverage gaps found. See above for details.')
    console.log('   Critical: consParams gaps (constructor) and constructor parameter gaps.')
    console.log('   Informational: objProps gaps (covered by runtime fallback) and defaults gaps.')
}

// Print errors at the end for easy review
if (errors.length > 0) {
    console.log('\n\n=== Errors ===')
    for (const e of errors) {
        console.log(e)
    }
}

process.exit(failed > 0 ? 1 : 0)