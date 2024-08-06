export declare const params: {
    /**
     * @deprecated THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.
     */
    readonly WebGLMultipleRenderTargets: any[];
    AnimationAction: string[];
    AnimationClip: string[];
    readonly AnimationMixer: any[];
    AnimationObjectGroup: string[];
    KeyframeTrack: string[];
    PropertyBinding: string[];
    PropertyBinding_Composite: string[];
    PropertyMixer: string[];
    readonly BooleanKeyframeTrack: string[];
    readonly ColorKeyframeTrack: string[];
    readonly NumberKeyframeTrack: string[];
    readonly QuaternionKeyframeTrack: string[];
    readonly StringKeyframeTrack: string[];
    readonly VectorKeyframeTrack: string[];
    /**
     * Create a non-positional ( global ) {@link Audio} object.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web {@link Audio} API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener(
     * camera.add(listener
     * // create a global {@link Audio} source
     * const sound = new THREE.Audio(listener
     * // load a sound and set it as the {@link Audio} object's buffer
     * const audioLoader = new THREE.AudioLoader(
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     *     sound.setBuffer(buffer
     *     sound.setLoop(true
     *     sound.setVolume(0.5
     *     sound.play(
     * }
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/Audio | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/Audio.js | Source}
     */
    readonly Audio: any[];
    /**
     * Create a {@link AudioAnalyser} object, which uses an {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} to analyse audio data.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener(
     * camera.add(listener
     * // create an Audio source
     * const sound = new THREE.Audio(listener
     * // load a sound and set it as the Audio object's buffer
     * const audioLoader = new THREE.AudioLoader(
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     *     sound.setBuffer(buffer
     *     sound.setLoop(true
     *     sound.setVolume(0.5
     *     sound.play(
     * }
     * // create an AudioAnalyser, passing in the sound and desired fftSize
     * const analyser = new THREE.AudioAnalyser(sound, 32)
     * // get the average frequency of the sound
     * const data = analyser.getAverageFrequency(
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioAnalyser | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js | Source}
     */
    AudioAnalyser: string[];
    /**
     * The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener | listener} of the all positional and non-positional audio effects in the scene.
     * A three.js application usually creates a single instance of {@link AudioListener}  * @remarks
     * It is a mandatory construtor parameter for audios entities like {@link Audio | Audio} and {@link PositionalAudio | PositionalAudio}.
     * In most cases, the listener object is a child of the camera
     * So the 3D transformation of the camera represents the 3D transformation of the listener.
     * @example
     * ```typescript
     * // create an {@link AudioListener} and add it to the camera
     * const listener = new THREE.AudioListener(
     * camera.add(listener
     * // create a global audio source
     * const sound = new THREE.Audio(listener
     * // load a sound and set it as the Audio object's buffer
     * const audioLoader = new THREE.AudioLoader(
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     *     sound.setBuffer(buffer
     *     sound.setLoop(true
     *     sound.setVolume(0.5
     *     sound.play(
     * }
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioListener | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioListener.js | Source}
     */
    readonly AudioListener: any[];
    /**
     * Create a positional audio object.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener(
     * camera.add(listener
     * // create the {@link PositionalAudio} object (passing in the listener)
     * const sound = new THREE.PositionalAudio(listener
     * // load a sound and set it as the {@link PositionalAudio] object's buffer
     * const audioLoader = new THREE.AudioLoader(
     * audioLoader.load('sounds/song.ogg', function (buffer) {
     *     sound.setBuffer(buffer
     *     sound.setRefDistance(20
     *     sound.play(
     * }
     * // create an object for the sound to play from
     * const sphere = new THREE.SphereGeometry(20, 32, 16)
     * const material = new THREE.MeshPhongMaterial({
     *     color,
     * }
     * const mesh = new THREE.Mesh(sphere, material)
     * scene.add(mesh
     * // finally add the sound to the mesh
     * mesh.add(sound
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_orientation | webaudio / orientation }
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/PositionalAudio | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/PositionalAudio.js | Source}
     */
    readonly PositionalAudio: any[];
    /**
     * {@link ArrayCamera} can be used in order to efficiently render a scene with a predefined set of cameras
     * @remarks
     * This is an important performance aspect for rendering VR scenes.
     * An instance of {@link ArrayCamera} always has an array of sub cameras
     * It's mandatory to define for each sub camera the `viewport` property which determines the part of the viewport that is rendered with this camera.
     * @see Example: {@link https://threejs.org/examples/#webgl_camera_array | camera / array }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/ArrayCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js | Source}
     */
    readonly ArrayCamera: any[];
    /**
     * Abstract base class for cameras
     * @remarks
     * This class should always be inherited when you build a new camera.
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
     */
    readonly Camera: any[];
    /**
     * Creates **6** {@link THREE.PerspectiveCamera | cameras} that render to a {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}.
     * @remarks The cameras are added to the {@link children} array.
     * @example
     * ```typescript
     * // Create cube render target
     * const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps,
     minFilter,.LinearMipmapLinearFilter }
     *
     * // Create cube camera
     * const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget
     * scene.add( cubeCamera
     *
     * // Create car
     * const chromeMaterial = new THREE.MeshLambertMaterial( { color,
     envMap,.texture }
     * const car = new THREE.Mesh( carGeometry, chromeMaterial
     * scene.add( car
     *
     * // Update the render target cube
     * car.visible = false;
     * cubeCamera.position.copy( car.position )
     * cubeCamera.update( renderer, scene )
     *
     * // Render the scene
     * car.visible = true;
     * renderer.render( scene, camera )
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/CubeCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js | Source}
     */
    readonly CubeCamera: any[];
    /**
     * Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection | orthographic projection}.
     * In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.
     * This can be useful for rendering 2D scenes and UI elements, amongst other things.
     * @example
     * ```typescript
     * const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000
     * scene.add(camera
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_camera | camera }
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | interactive / cubes / ortho }
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
     * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_advanced | postprocessing / advanced }
     * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_dof2 | postprocessing / dof2 }
     * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_godrays | postprocessing / godrays }
     * @see Example: {@link https://threejs.org/examples/#webgl_rtt | rtt }
     * @see Example: {@link https://threejs.org/examples/#webgl_shaders_tonemapping | shaders / tonemapping }
     * @see Example: {@link https://threejs.org/examples/#webgl_shadowmap | shadowmap }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js | Source}
     */
    readonly OrthographicCamera: any[];
    /**
     * Camera that uses {@link https://en.wikipedia.org/wiki/Perspective_(graphical) | perspective projection}.
     * This projection mode is designed to mimic the way the human eye sees
     * @remarks
     * It is the most common projection mode used for rendering a 3D scene.
     * @example
     * ```typescript
     * const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
     * scene.add(camera
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | animation / skinning / morph }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | interactive / cubes }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_skinning | loader / collada / skinning }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js | Source}
     */
    readonly PerspectiveCamera: any[];
    /**
     * Dual {@link PerspectiveCamera | PerspectiveCamera}s used for effects such as
     * {@link https://en.wikipedia.org/wiki/Anaglyph_3D | 3D Anaglyph} or
     * {@link https://en.wikipedia.org/wiki/parallax_barrier | Parallax Barrier}.
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/StereoCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js | Source}
     */
    readonly StereoCamera: any[];
    /**
     * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes )
     * associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU
     * @remarks
     * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
     * {@link THREE.Vector2.fromBufferAttribute | Vector2},
     * {@link THREE.Vector3.fromBufferAttribute | Vector3},
     * {@link THREE.Vector4.fromBufferAttribute | Vector4}, and
     * {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.
     * @see {@link THREE.BufferGeometry | BufferGeometry} for details and a usage examples.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGL / BufferGeometry - Clean up Memory}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Int8BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Uint8BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Uint8ClampedBufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Int16BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Uint16BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Int32BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Uint32BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Float16BufferAttribute: string[];
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    readonly Float32BufferAttribute: string[];
    /**
     * A representation of mesh, line, or point geometry
     * Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this data to the GPU.
     * @remarks
     * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute | BufferAttribute} documentation.
     * @example
     * ```typescript
     * const geometry = new THREE.BufferGeometry(
     *
     * // create a simple square shape. We duplicate the top left and bottom right
     * // vertices because each vertex needs to appear once per triangle.
     * const vertices = new Float32Array( [
     *   -1.0, -1.0,  1.0, // v0
     *    1.0, -1.0,  1.0, // v1
     *    1.0,  1.0,  1.0, // v2
     *
     *    1.0,  1.0,  1.0, // v3
     *   -1.0,  1.0,  1.0, // v4
     *   -1.0, -1.0,  1.0  // v5
     * ]
     *
     * // itemSize = 3 because there are 3 values (components) per vertex
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 )
     * const material = new THREE.MeshBasicMaterial( { color, }
     * const mesh = new THREE.Mesh( geometry, material
     * ```
     * @example
     * ```typescript
     * const geometry = new THREE.BufferGeometry(
     *
     * const vertices = new Float32Array( [
     *   -1.0, -1.0,  1.0, // v0
     *    1.0, -1.0,  1.0, // v1
     *    1.0,  1.0,  1.0, // v2
     *   -1.0,  1.0,  1.0, // v3
     * ]
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 )
     *
     * const indices : [
     *   0, 1, 2,
     *   2, 3, 0,
     * ];
     *
     * geometry.setIndex( indices
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 )
     *
     * const material = new THREE.MeshBasicMaterial( { color, }
     * const mesh = new THREE.Mesh( geometry, material )
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | Mesh with non-indexed faces}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_indexed | Mesh with indexed faces}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines | Lines}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines_indexed | Indexed Lines}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_custom_attributes_particles | Particles}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_rawshader | Raw Shaders}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js | Source}
     */
    readonly BufferGeometry: any[];
    /**
     * Object for keeping track of time
     * @remarks
     * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now | performance.now} if it is available,
     * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now | Date.now}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js | Source}
     */
    Clock: string[];
    /**
     * JavaScript events for custom objects
     * @example
     * ```typescript
     * // Adding events to a custom object
     * class Car : [...EventDispatcher,
     *   start() {
     *     this.dispatchEvent( { type: 'start', message: 'vroom vroom!' }
     *   }
     * };
     * // Using events with the custom object
     * const car = new Car(
     * car.addEventListener( 'start', ( event ) => {
     *   alert( event.message
     * }
     * car.start(
     * ```
     * @see {@link https://github.com/mrdoob/eventdispatcher.js | mrdoob EventDispatcher on GitHub}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/EventDispatcher | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js | Source}
     */
    EventDispatcher: any[];
    /**
     * This buffer attribute class does not construct a VBO.
     * Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property.
     * @remarks
     * It is required to pass additional params alongside the VBO
     * Those are, GL context, the GL data type, the number of components per vertex, the number of bytes per component, and the number of vertices.
     * @remarks
     * The most common use case for this class is when some kind of GPGPU calculation interferes or even produces the VBOs in question.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute | WebGL / buffergeometry / glbufferattribute}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/GLBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GLBufferAttribute.js | Source}
     */
    GLBufferAttribute: string[];
    /**
     * An instanced version of {@link THREE.BufferAttribute | BufferAttribute}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js | Source}
     */
    readonly InstancedBufferAttribute: string[];
    /**
     * An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js | Source}
     */
    readonly InstancedBufferGeometry: any[];
    /**
     * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
     */
    readonly InstancedInterleavedBuffer: string[];
    /**
     * **"Interleaved"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer.
     * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved | webgl / buffergeometry / points / interleaved}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js | Source}
     */
    InterleavedBuffer: string[];
    /**
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js | Source}
     */
    InterleavedBufferAttribute: string[];
    /**
     * A {@link THREE.Layers | Layers} object assigns an {@link THREE.Object3D } to 1 or more of 32 layers numbered `0` to `31` - internally the
     * layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) | bit mask}, and
     * by default all Object3Ds are a member of layer `0`.
     * @remarks
     * This can be used to control visibility - an object must share a layer with a {@link Camera | camera} to be visible when that camera's view is rendered.
     * @remarks
     * All classes that inherit from {@link THREE.Object3D } have an {@link THREE.Object3D.layers .layers} property which is an instance of this class.
     * @see Example: {@link https://threejs.org/examples/#webgl_layers | WebGL / layers}
     * @see Example: {@link https://threejs.org/examples/#webxr_vr_layers | Webxr / vr / layers}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Layers | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Layers.js | Source}
     */
    Layers: string[];
    Object3DEventMap: string[];
    /**
     * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.
     * @remarks Note that this can be used for grouping objects via the {@link THREE.Object3D.add | .add()} method which adds the object as a child,
     * however it is better to use {@link THREE.Group | Group} for this.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3D | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js | Source}
     */
    readonly Object3D: any[];
    /**
     * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting | raycasting}
     * @remarks
     * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
     * @example
     * ```typescript
     * const raycaster = new THREE.Raycaster(
     * const pointer = new THREE.Vector2(
     *
     * function onPointerMove(event) {
     *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
     *     pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
     *     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
     * }
     *
     * function render() {
     *     // update the picking ray with the camera and pointer position
     *     raycaster.setFromCamera(pointer, camera
     *     // calculate objects intersecting the picking ray
     *     const intersects = raycaster.intersectObjects(scene.children
     *     for (let i = 0; i & lt; intersects.length; i++) {
     *         intersects[i].object.material.color.set(0xff0000
     *     }
     *     renderer.render(scene, camera
     * }
     * window.addEventListener('pointermove', onPointerMove
     * window.requestAnimationFrame(render
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | Raycasting to a Mesh}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | Raycasting to a Mesh in using an OrthographicCamera}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_buffergeometry | Raycasting to a Mesh with BufferGeometry}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | Raycasting to a InstancedMesh}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_lines | Raycasting to a Line}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_raycasting_points | Raycasting to Points}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain_raycast | Terrain raycasting}
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_voxelpainter | Raycasting to paint voxels}
     * @see Example: {@link https://threejs.org/examples/#webgl_raycaster_texture | Raycast to a Texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Raycaster | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js | Source}
     */
    Raycaster: string[];
    readonly RenderTarget: any[];
    /**
     * Uniforms are global GLSL variables.
     * They are passed to shader programs.
     * @example
     * When declaring a uniform of a {@link THREE.ShaderMaterial | ShaderMaterial}, it is declared by value or by object.
     * ```typescript
     * uniforms: {
     *     time: {
     *         value,.0
     *     },
     *     resolution, Uniform(new Vector2())
     * };
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform | WebGL2 / nodes / materials / instance / uniform}
     * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGPU / instance / uniform}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js | Source}
     */
    Uniform: string[];
    /**
     * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGL2 / UBO}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
     */
    UniformsGroup: string[];
    /**
     * This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture.
     * @remarks
     * This allows different levels of blur to be quickly accessed based on material roughness
     * Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution,
     * associated with higher roughness levels
     * In this way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation.
     * @remarks
     * Note, minimum {@link THREE.MeshStandardMaterial | MeshStandardMaterial}'s roughness depends on the size of the provided texture
     * If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size.
     *
     * | texture size | minimum roughness  |
     * |--------------|--------------------|
     * | 16           .21               |
     * | 32           .15               |
     * | 64           .11               |
     * | 128          .076              |
     * | 256          .054              |
     * | 512          .038              |
     * | 1024         .027              |
     *
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/PMREMGenerator.js | Source}
     */
    PMREMGenerator: string[];
    /**
     * An abstract base class for creating a {@link Curve} object that contains methods for interpolation
     * @remarks
     * For an array of Curves see {@link THREE.CurvePath | CurvePath}.
     * @remarks
     * This following curves inherit from THREE.Curve:
     *
     * **2D curves**
     *  - {@link THREE.ArcCurve}
     *  - {@link THREE.CubicBezierCurve}
     *  - {@link THREE.EllipseCurve}
     *  - {@link THREE.LineCurve}
     *  - {@link THREE.QuadraticBezierCurve}
     *  - {@link THREE.SplineCurve}
     *
     * **3D curves**
     *  - {@link THREE.CatmullRomCurve3}
     *  - {@link THREE.CubicBezierCurve3}
     *  - {@link THREE.LineCurve3}
     *  - {@link THREE.QuadraticBezierCurve3}
     *
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Curve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Curve.js | Source}
     */
    Curve: string[];
    /**
     * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
     * @remarks
     * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js | Source}
     */
    readonly CurvePath: string[];
    /**
     * A 2D {@link Path} representation.
     * @remarks
     * The class provides methods for creating paths and contours of 2D shapes similar to the 2D Canvas API.
     * @example
     * ```typescript
     * const {@link Path} = new THREE.Path(
     * path.lineTo(0, 0.8
     * path.quadraticCurveTo(0, 1, 0.2, 1
     * path.lineTo(1, 1
     * const points = path.getPoints(
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * const line = new THREE.Line(geometry, material
     * scene.add(line
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Path | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Path.js | Source}
     */
    readonly Path: string[];
    /**
     * Defines an arbitrary 2d {@link Shape} plane using paths with optional holes
     * @remarks
     * It can be used with {@link THREE.ExtrudeGeometry | ExtrudeGeometry}, {@link THREE.ShapeGeometry | ShapeGeometry}, to get points, or to get triangulated faces.
     * @example
     * ```typescript
     * const heartShape = new THREE.Shape(
     * heartShape.moveTo(25, 25
     * heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0
     * heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35
     * heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95
     * heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35
     * heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0
     * heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25
     * const extrudeSettings = {
     *     depth,
    
     *     bevelEnabled,
    
     *     bevelSegments,
    
     *     steps,
    
     *     bevelSize,
    
     *     bevelThickness,
     * };
     * const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings
     * const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial()
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_shapes | geometry / shapes }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes | geometry / extrude / shapes }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes2 | geometry / extrude / shapes2 }
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Shape | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Shape.js | Source}
     */
    readonly Shape: string[];
    /**
     * This class is used to convert a series of shapes to an array of {@link THREE.Path | Path's},
     * for example an SVG shape to a path.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js | Source}
     */
    ShapePath: string[];
    /**
     * Alias for {@link THREE.EllipseCurve | EllipseCurve}.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js | Source}
     */
    readonly ArcCurve: string[];
    /**
     * Create a smooth **3D** spline curve from a series of points using the {@link https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline | Catmull-Rom} algorithm.
     * @example
     * ```typescript
     * //Create a closed wavey loop
     * const curve = new THREE.CatmullRomCurve3([
     * new THREE.Vector3(-10, 0, 10),
     * new THREE.Vector3(-5, 5, 5),
     * new THREE.Vector3(0, 0, 0),
     * new THREE.Vector3(5, -5, 5),
     * new THREE.Vector3(10, 0, 10)]
     * const points = curve.getPoints(50
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGL / geometry / extrude / splines}
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CatmullRomCurve3.js | Source}
     */
    readonly CatmullRomCurve3: string[];
    /**
     * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve},
     * defined by a start point, endpoint and two control points.
     * @example
     * ```typescript
     * const curve = new THREE.CubicBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 15),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0)
     * const points = curve.getPoints(50
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
     */
    readonly CubicBezierCurve: string[];
    /**
     * Create a smooth **3D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve},
     * defined by a start point, endpoint and two control points.
     * @example
     * ```typescript
     * const curve = new THREE.CubicBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 15),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0)
     * const points = curve.getPoints(50
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
     */
    readonly CubicBezierCurve3: string[];
    /**
     * Creates a 2d curve in the shape of an ellipse
     * @remarks
     * Setting the {@link xRadius} equal to the {@link yRadius} will result in a circle.
     * @example
     * ```typescript
     * const curve = new THREE.EllipseCurve(
     *   0,  0,  // ax, aY
     *   10, 10, // xRadius, yRadius
     *   0,  2 * Math.PI, // aStartAngle, aEndAngle
     *   false,  // aClockwise
     *   0       // aRotation
     *
     * const points = curve.getPoints(50
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({ color, }
     * // Create the final object to add to the scene
     * const ellipse = new THREE.Line(geometry, material)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/EllipseCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/EllipseCurve.js | Source}
     */
    readonly EllipseCurve: string[];
    /**
     * A curve representing a **2D** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js | Source}
     */
    readonly LineCurve: string[];
    /**
     * A curve representing a **3D** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js | Source}
     */
    readonly LineCurve3: string[];
    /**
     * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
     * defined by a start point, end point and a single control point.
     * @example
     * ```typescript
     * const curve = new THREE.QuadraticBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0)
     * const points = curve.getPoints(50
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve.js | Source}
     */
    readonly QuadraticBezierCurve: string[];
    /**
     * Create a smooth **3D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
     * defined by a start point, end point and a single control point.
     * @example
     * ```typescript
     * const curve = new THREE.QuadraticBezierCurve3(
     * new THREE.Vector3(-10, 0, 0),
     * new THREE.Vector3(20, 15, 0),
     * new THREE.Vector3(10, 0, 0)
     * const points = curve.getPoints(50
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js | Source}
     */
    readonly QuadraticBezierCurve3: string[];
    /**
     * Create a smooth **2D** spline curve from a series of points.
     * @example
     * ```typescript
     * // Create a sine-like wave
     * const curve = new THREE.SplineCurve([
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 5),
     * new THREE.Vector2(0, 0),
     * new THREE.Vector2(5, -5),
     * new THREE.Vector2(10, 0)]
     * const points = curve.getPoints(50
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * // Create the final object to add to the scene
     * const splineObject = new THREE.Line(geometry, material
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/SplineCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/SplineCurve.js | Source}
     */
    readonly SplineCurve: string[];
    /**
     * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'
     * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const cube = new THREE.Mesh(geometry, material
     * scene.add(cube
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js | Source}
     */
    readonly BoxGeometry: any[];
    /**
     * {@link CapsuleGeometry} is a geometry class for a capsule with given radii and height
     * @remarks It is constructed using a lathe.
     * @example
     * ```typescript
     * const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const capsule = new THREE.Mesh(geometry, material)
     * scene.add(capsule
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CapsuleGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CapsuleGeometry.js | Source}
     */
    readonly CapsuleGeometry: any[];
    /**
     * {@link CircleGeometry} is a simple shape of Euclidean geometry
     * @remarks
     * It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius
     * It is built counter-clockwise from a start angle and a given central angle
     * It can also be used to create regular polygons, where the number of segments determines the number of sides.
     * @example
     * ```typescript
     * const geometry = new THREE.CircleGeometry(5, 32)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const circle = new THREE.Mesh(geometry, material
     * scene.add(circle
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CircleGeometry.js | Source}
     */
    readonly CircleGeometry: any[];
    /**
     * A class for generating cone geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.ConeGeometry(5, 20, 32)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const cone = new THREE.Mesh(geometry, material)
     * scene.add(cone
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ConeGeometry.js | Source}
     */
    readonly ConeGeometry: any[];
    /**
     * A class for generating cylinder geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const cylinder = new THREE.Mesh(geometry, material)
     * scene.add(cylinder
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CylinderGeometry.js | Source}
     */
    readonly CylinderGeometry: any[];
    /**
     * A class for generating a dodecahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js | Source}
     */
    readonly DodecahedronGeometry: any[];
    /**
     * This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry | geometry}.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(100, 100, 100)
     * const edges = new THREE.EdgesGeometry(geometry)
     * const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
     *     color,
     * })
     * scene.add(line
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/EdgesGeometry.js | Source}
     */
    readonly EdgesGeometry: any[];
    /**
     * Creates extruded geometry from a path shape.
     * @remarks This object extrudes a 2D shape to a 3D geometry.
     * @remarks When creating a Mesh with this geometry, if you'd like to have a separate material used for its face and its extruded sides, you can use an array of materials
     * @remarks The first material will be applied to the face; the second material will be applied to the sides.
     * @example
     * ```typescript
     * const length = 12, width = 8;
     * const shape = new THREE.Shape()
     * shape.moveTo(0, 0)
     * shape.lineTo(0, width)
     * shape.lineTo(length, width)
     * shape.lineTo(length, 0)
     * shape.lineTo(0, 0)
     * const extrudeSettings = {
     *     steps,
     *     depth,
     *     bevelEnabled,
     *     bevelThickness,
     *     bevelSize,
     *     bevelOffset,
     *     bevelSegments,
     * };
     * const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const mesh = new THREE.Mesh(geometry, material)
     * scene.add(mesh
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ExtrudeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js | Source}
     */
    readonly ExtrudeGeometry: any[];
    /**
     * A class for generating an icosahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js | Source}
     */
    readonly IcosahedronGeometry: any[];
    /**
     * Creates meshes with axial symmetry like vases
     * @remarks
     * The lathe rotates around the Y axis.
     * @example
     * ```typescript
     * const points : [];
     * for (let i = 0; i & lt; 10; i++) {
     *     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2)
     * }
     * const geometry = new THREE.LatheGeometry(points
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const lathe = new THREE.Mesh(geometry, material)
     * scene.add(lathe
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js | Source}
     */
    readonly LatheGeometry: any[];
    /**
     * A class for generating an octahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js | Source}
     */
    readonly OctahedronGeometry: any[];
    /**
     * A class for generating plane geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.PlaneGeometry(1, 1)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     *     side,.DoubleSide
     * }
     * const plane = new THREE.Mesh(geometry, material)
     * scene.add(plane
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js | Source}
     */
    readonly PlaneGeometry: any[];
    /**
     * A polyhedron is a solid in three dimensions with flat faces
     * @remarks
     * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
     * This class is used by {@link THREE.DodecahedronGeometry | DodecahedronGeometry}, {@link THREE.IcosahedronGeometry | IcosahedronGeometry},
     * {@link THREE.OctahedronGeometry | OctahedronGeometry}, and {@link THREE.TetrahedronGeometry | TetrahedronGeometry} to generate their respective geometries.
     * @example
     * ```typescript
     * const verticesOfCube : [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, ];
     * const indicesOfFaces : [
     * 2, 1, 0, 0, 3, 2,
     * 0, 4, 7, 7, 3, 0,
     * 0, 1, 5, 5, 4, 0,
     * 1, 2, 6, 6, 5, 1,
     * 2, 3, 7, 7, 6, 2,
     * 4, 5, 6, 6, 7, 4];
     * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js | Source}
     */
    readonly PolyhedronGeometry: any[];
    /**
     * A class for generating a two-dimensional ring geometry.
     * @example
     * ```typescript
     * const geometry = new THREE.RingGeometry(1, 5, 32)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
    
     *     side,.DoubleSide
     * }
     * const mesh = new THREE.Mesh(geometry, material)
     * scene.add(mesh
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/RingGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/RingGeometry.js | Source}
     */
    readonly RingGeometry: any[];
    /**
     * Creates an one-sided polygonal geometry from one or more path shapes.
     * @example
     * ```typescript
     * const x = 0, y = 0;
     * const heartShape = new THREE.Shape(
     * heartShape.moveTo(x + 5, y + 5
     * heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
     * heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
     * heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
     * heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
     * heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
     * heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)
     * const geometry = new THREE.ShapeGeometry(heartShape
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const mesh = new THREE.Mesh(geometry, material)
     * scene.add(mesh
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ShapeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ShapeGeometry.js | Source}
     */
    readonly ShapeGeometry: any[];
    /**
     * A class for generating sphere geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.SphereGeometry(15, 32, 16)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const sphere = new THREE.Mesh(geometry, material)
     * scene.add(sphere
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js | Source}
     */
    readonly SphereGeometry: any[];
    /**
     * A class for generating a tetrahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js | Source}
     */
    readonly TetrahedronGeometry: any[];
    /**
     * A class for generating torus geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const torus = new THREE.Mesh(geometry, material)
     * scene.add(torus
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js | Source}
     */
    readonly TorusGeometry: any[];
    /**
     * Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q
     * If p and q are not coprime, the result will be a torus link.
     * @example
     * ```typescript
     * const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const torusKnot = new THREE.Mesh(geometry, material
     * scene.add(torusKnot
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusKnotGeometry.js | Source}
     */
    readonly TorusKnotGeometry: any[];
    /**
     * Creates a tube that extrudes along a 3d curve.
     * @example
     * ```typescript
     * class CustomSinCurve extends THREE.Curve {
     *     scale = 1) {
     *         super(
     *         this.scale = scale;
     *     }
     *     getPoint(t, optionalTarget = new THREE.Vector3()) {
     *         const tx = t * 3 - 1.5;
     *         const ty = Math.sin(2 * Math.PI * t
     *         const tz = 0;
     *         return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale
     *     }
     * }
     * const path = new CustomSinCurve(10
     * const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const mesh = new THREE.Mesh(geometry, material
     * scene.add(mesh
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TubeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js | Source}
     */
    readonly TubeGeometry: any[];
    /**
     * This can be used as a helper object to view a {@link BufferGeometry | geometry} as a wireframe.
     * @example
     * ```typescript
     * const geometry = new THREE.SphereGeometry(100, 100, 100)
     * const wireframe = new THREE.WireframeGeometry(geometry)
     * const line = new THREE.LineSegments(wireframe)
     * line.material.depthTest = false;
     * line.material.opacity = 0.25;
     * line.material.transparent = true;
     * scene.add(line
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js | Source}
     */
    readonly WireframeGeometry: any[];
    /**
     * An 3D arrow object for visualizing directions.
     * @example
     * ```typescript
     * const dir = new THREE.Vector3(1, 2, 0)
     * //normalize the direction vector (convert to vector of length 1)
     * dir.normalize(
     * const origin = new THREE.Vector3(0, 0, 0)
     * const length = 1;
     * const hex = 0xffff00;
     * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex)
     * scene.add(arrowHelper
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh | WebGL / shadowmesh}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js | Source}
     */
    readonly ArrowHelper: any[];
    /**
     * An axis object to visualize the 3 axes in a simple way.
     * @remarks
     * The X axis is red
     * The Y axis is green
     * The Z axis is blue.
     * @example
     * ```typescript
     * const {@link AxesHelper} = new THREE.AxesHelper(5
     * scene.add(axesHelper
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression | WebGL / buffergeometry / compression}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex | WebGL / geometry / convex}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGL / loader / nrrd}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js | Source}
     */
    readonly AxesHelper: any[];
    /**
     * Helper object to visualize a {@link THREE.Box3 | Box3}.
     * @example
     * ```typescript
     * const box = new THREE.Box3(
     * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3)
     * const helper = new THREE.Box3Helper(box, 0xffff00)
     * scene.add(helper
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js | Source}
     */
    readonly Box3Helper: any[];
    /**
     * Helper object to graphically show the world-axis-aligned bounding box around an object
     * @remarks
     * The actual bounding box is handled with {@link THREE.Box3 | Box3}, this is just a visual helper for debugging
     * It can be automatically resized with the {@link THREE.BoxHelper.update | BoxHelper.update} method when the object it's created from is transformed
     * Note that the object must have a {@link THREE.BufferGeometry | BufferGeometry} for this to work, so it won't work with {@link Sprite | Sprites}.
     * @example
     * ```typescript
     * const sphere = new THREE.SphereGeometry()
     * const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000))
     * const box = new THREE.BoxHelper(object, 0xffff00)
     * scene.add(box
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGL / loader / nrrd}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_drawrange | WebGL / buffergeometry / drawrange}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/BoxHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/BoxHelper.js | Source}
     */
    readonly BoxHelper: any[];
    /**
     * This helps with visualizing what a camera contains in its frustum
     * @remarks
     * It visualizes the frustum of a camera using a {@link THREE.LineSegments | LineSegments}.
     * @remarks {@link CameraHelper} must be a child of the scene.
     * @example
     * ```typescript
     * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
     * const helper = new THREE.CameraHelper(camera
     * scene.add(helper
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_camera | WebGL / camera}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGL / extrude / splines}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/CameraHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/CameraHelper.js | Source}
     */
    readonly CameraHelper: any[];
    /**
     * Helper object to assist with visualizing a {@link THREE.DirectionalLight | DirectionalLight}'s effect on the scene
     * @remarks
     * This consists of plane and a line representing the light's position and direction.
     * @example
     * ```typescript
     * const light = new THREE.DirectionalLight(0xFFFFFF
     * scene.add(light
     *
     * const helper = new THREE.DirectionalLightHelper(light, 5)
     * scene.add(helper
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js | Source}
     */
    readonly DirectionalLightHelper: any[];
    /**
     * The {@link GridHelper} is an object to define grids
     * @remarks
     * Grids are two-dimensional arrays of lines.
     * @example
     * ```typescript
     * const size = 10;
     * const divisions = 10;
     * const {@link GridHelper} = new THREE.GridHelper(size, divisions)
     * scene.add(gridHelper
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/GridHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/GridHelper.js | Source}
     */
    readonly GridHelper: any[];
    /**
     * Creates a visual aid consisting of a spherical {@link THREE.Mesh | Mesh} for a {@link THREE.HemisphereLight | HemisphereLight}.
     * @example
     * ```typescript
     * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
     * const helper = new THREE.HemisphereLightHelper(light, 5)
     * scene.add(helper
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/HemisphereLightHelper.js | Source}
     */
    readonly HemisphereLightHelper: any[];
    /**
     * Helper object to visualize a {@link THREE.Plane | Plane}.
     * @example
     * ```typescript
     * const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3
     * const helper = new THREE.PlaneHelper(plane, 1, 0xffff00)
     * scene.add(helper
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PlaneHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PlaneHelper.js | Source}
     */
    readonly PlaneHelper: any[];
    /**
     * This displays a helper object consisting of a spherical {@link THREE.Mesh | Mesh} for visualizing a {@link THREE.PointLight | PointLight}.
     * @example
     * ```typescript
     * const pointLight = new THREE.PointLight(0xff0000, 1, 100)
     * pointLight.position.set(10, 10, 10)
     * scene.add(pointLight)
     * const sphereSize = 1;
     * const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize)
     * scene.add(pointLightHelper
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PointLightHelper.js | Source}
     */
    readonly PointLightHelper: any[];
    /**
     * The {@link PolarGridHelper} is an object to define polar grids
     * @remarks
     * Grids are two-dimensional arrays of lines.
     * @example
     * ```typescript
     * const radius = 10;
     * const sectors = 16;
     * const rings = 8;
     * const divisions = 64;
     * const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions)
     * scene.add(helper
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PolarGridHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PolarGridHelper.js | Source}
     */
    readonly PolarGridHelper: any[];
    /**
     * A helper object to assist with visualizing a {@link Skeleton | Skeleton}
     * @remarks
     * The helper is rendered using a {@link LineBasicMaterial | LineBasicMaterial}.
     * @example
     * ```typescript
     * const helper = new THREE.SkeletonHelper(skinnedMesh
     * scene.add(helper
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | WebGL / animation / skinning / blending}
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | WebGL / animation / skinning / morph}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_bvh | WebGL / loader / bvh }
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SkeletonHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SkeletonHelper.js | Source}
     */
    readonly SkeletonHelper: any[];
    /**
     * This displays a cone shaped helper object for a {@link THREE.SpotLight | SpotLight}.
     * @example
     * ```typescript
     * const spotLight = new THREE.SpotLight(0xffffff)
     * spotLight.position.set(10, 10, 10)
     * scene.add(spotLight)
     * const {@link SpotLightHelper} = new THREE.SpotLightHelper(spotLight)
     * scene.add(spotLightHelper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | WebGL/ lights / spotlights }
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SpotLightHelper.js | Source}
     */
    readonly SpotLightHelper: any[];
    /**
     * This light globally illuminates all objects in the scene equally.
     * @remarks This light cannot be used to cast shadows as it does not have a direction.
     * @example
     * ```typescript
     * const light = new THREE.AmbientLight(0x404040 // soft white light
     * scene.add(light
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js | Source}
     */
    readonly AmbientLight: any[];
    /**
     * A light that gets emitted in a specific direction
     * @remarks
     * This light will behave as though it is infinitely far away and the rays produced from it are all parallel
     * The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.
     * A common point of confusion for directional lights is that setting the rotation has no effect
     * @remarks
     * This is because three.js's {@link DirectionalLight} is the equivalent to what is often called a 'Target Direct Light' in other applications.
     * This means that its direction is calculated as pointing from the light's {@link THREE.Object3D.position | position} to the {@link THREE.DirectionalLight.target | target}'s
     * position (as opposed to a 'Free Direct Light' that just has a rotation component).
     * See the {@link THREE.DirectionalLight.target | target} property below for details on updating the target.
     * @example
     * ```typescript
     * // White directional light at half intensity shining from the top.
     * const {@link DirectionalLight} = new THREE.DirectionalLight(0xffffff, 0.5)
     * scene.add(directionalLight
     * ```
     * @see Example: {@link https://threejs.org/examples/#misc_controls_fly | controls / fly }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | geometry / extrude / splines }
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_bumpmap | materials / bumpmap }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/DirectionalLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js | Source}
     */
    readonly DirectionalLight: any[];
    /**
     * This is used internally by {@link DirectionalLight | DirectionalLights} for calculating shadows.
     * Unlike the other shadow classes, this uses an {@link THREE.OrthographicCamera | OrthographicCamera} to calculate the shadows,
     * rather than a {@link THREE.PerspectiveCamera | PerspectiveCamera}
     * @remarks
     * This is because light rays from a {@link THREE.DirectionalLight | DirectionalLight} are parallel.
     * @example
     * ```typescript
     * //Create a WebGLRenderer and turn on shadows in the renderer
     * const renderer = new THREE.WebGLRenderer(
     * renderer.shadowMap.enabled = true;
     * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
     * //Create a DirectionalLight and turn on shadows for the light
     * const light = new THREE.DirectionalLight(0xffffff, 1)
     * light.position.set(0, 1, 0) //default; light shining from top
     * light.castShadow = true; // default false
     * scene.add(light
     * //Set up shadow properties for the light
     * light.shadow.mapSize.width = 512; // default
     * light.shadow.mapSize.height = 512; // default
     * light.shadow.camera.near = 0.5; // default
     * light.shadow.camera.far = 500; // default
     * //Create a sphere that cast shadows (but does not receive them)
     * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32)
     * const sphereMaterial = new THREE.MeshStandardMaterial({
     *     color,
     * }
     * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
     * sphere.castShadow = true; //default is false
     * sphere.receiveShadow = false; //default
     * scene.add(sphere
     * //Create a plane that receives shadows (but does not cast them)
     * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32)
     * const planeMaterial = new THREE.MeshStandardMaterial({
     *     color,
     * })
     * const plane = new THREE.Mesh(planeGeometry, planeMaterial)
     * plane.receiveShadow = true;
     * scene.add(plane
     * //Create a helper for the shadow camera (optional)
     * const helper = new THREE.CameraHelper(light.shadow.camera
     * scene.add(helper
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/DirectionalLightShadow | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLightShadow.js | Source}
     */
    readonly DirectionalLightShadow: string[];
    /**
     * A light source positioned directly above the scene, with color fading from the sky color to the ground color.
     * @remarks This light cannot be used to cast shadows.
     * @example
     * ```typescript
     * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
     * scene.add(light
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_hemisphere | lights / hemisphere }
     * @see Example: {@link https://threejs.org/examples/#misc_controls_pointerlock | controls / pointerlock }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_kinematics | loader / collada / kinematics }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_stl | loader / stl }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js | Source}
     */
    readonly HemisphereLight: any[];
    /**
     * Abstract base class for lights.
     * @remarks All other light types inherit the properties and methods described here.
     */
    readonly Light: any[];
    /**
     * Light probes are an alternative way of adding light to a 3D scene.
     * @remarks
     * Unlike classical light sources (e.g
     * directional, point or spot lights), light probes do not emit light
     * Instead they store information about light passing through 3D space
     * During rendering, the light that hits a 3D object is approximated by using the data from the light probe.
     * Light probes are usually created from (radiance) environment maps
     * The class {@link THREE.LightProbeGenerator | LightProbeGenerator} can be used to create light probes from
     * instances of {@link THREE.CubeTexture } or {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}
     * However, light estimation data could also be provided in other forms e.g
     * by WebXR
     * This enables the rendering of augmented reality content that reacts to real world lighting.
     * The current probe implementation in three.js supports so-called diffuse light probes
     * This type of light probe is functionally equivalent to an irradiance environment map.
     * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe | WebGL / light probe }
     * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe_cubecamera | WebGL / light probe / cube camera }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/LightProbe | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightProbe.js | Source}
     */
    readonly LightProbe: any[];
    /**
     * Serves as a base class for the other shadow classes.
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js | Source}
     */
    LightShadow: string[];
    /**
     * A light that gets emitted from a single point in all directions
     * @remarks
     * A common use case for this is to replicate the light emitted from a bare lightbulb.
     * @example
     * ```typescript
     * const light = new THREE.PointLight(0xff0000, 1, 100)
     * light.position.set(50, 50, 50))
     * scene.add(light)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_pointlights | lights / pointlights }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
     * @see Example: {@link https://threejs.org/examples/#webgl_lensflares | lensflares }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/PointLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js | Source}
     */
    readonly PointLight: any[];
    /**
     * Shadow for {@link THREE.PointLight | PointLight}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
     */
    readonly PointLightShadow: string[];
    /**
     * {@link RectAreaLight} emits light uniformly across the face a rectangular plane
     * @remarks
     * This light type can be used to simulate light sources such as bright windows or strip lighting.
     * Important Notes:
     *  - There is no shadow support.
     *  - Only {@link MeshStandardMaterial | MeshStandardMaterial} and {@link MeshPhysicalMaterial | MeshPhysicalMaterial} are supported.
     *  - You have to include {@link https://threejs.org/examples/jsm/lights/RectAreaLightUniformsLib.js | RectAreaLightUniformsLib} into your scene and call `init()`.
     * @example
     * ```typescript
     * const width = 10;
     * const height = 10;
     * const intensity = 1;
     * const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height)
     * rectLight.position.set(5, 5, 0)
     * rectLight.lookAt(0, 0, 0)
     * scene.add(rectLight)
     * const rectLightHelper = new RectAreaLightHelper(rectLight)
     * rectLight.add(rectLightHelper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_rectarealight | WebGL / {@link RectAreaLight} }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/RectAreaLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js | Source}
     */
    readonly RectAreaLight: any[];
    /**
     * This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.
     * @example
     * ```typescript
     * // white {@link SpotLight} shining from the side, modulated by a texture, casting a shadow
     * const {@link SpotLight} = new THREE.SpotLight(0xffffff)
     * spotLight.position.set(100, 1000, 100)
     * spotLight.map = new THREE.TextureLoader().load(url)
     * spotLight.castShadow = true;
     * spotLight.shadow.mapSize.width = 1024;
     * spotLight.shadow.mapSize.height = 1024;
     * spotLight.shadow.camera.near = 500;
     * spotLight.shadow.camera.far = 4000;
     * spotLight.shadow.camera.fov = 30;
     * scene.add(spotLight
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlight | lights / {@link SpotLight} }
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | lights / spotlights }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/SpotLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLight.js | Source}
     */
    readonly SpotLight: any[];
    /**
     * This is used internally by {@link SpotLight | SpotLights} for calculating shadows.
     * @example
     * ```typescript
     * //Create a WebGLRenderer and turn on shadows in the renderer
     * const renderer = new THREE.WebGLRenderer(
     * renderer.shadowMap.enabled = true;
     * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
     * //Create a SpotLight and turn on shadows for the light
     * const light = new THREE.SpotLight(0xffffff
     * light.castShadow = true; // default false
     * scene.add(light
     * //Set up shadow properties for the light
     * light.shadow.mapSize.width = 512; // default
     * light.shadow.mapSize.height = 512; // default
     * light.shadow.camera.near = 0.5; // default
     * light.shadow.camera.far = 500; // default
     * light.shadow.focus = 1; // default
     * //Create a sphere that cast shadows (but does not receive them)
     * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32)
     * const sphereMaterial = new THREE.MeshStandardMaterial({
     *     color,
     * }
     * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
     * sphere.castShadow = true; //default is false
     * sphere.receiveShadow = false; //default
     * scene.add(sphere
     * //Create a plane that receives shadows (but does not cast them)
     * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32)
     * const planeMaterial = new THREE.MeshStandardMaterial({
     *     color,
     * })
     * const plane = new THREE.Mesh(planeGeometry, planeMaterial)
     * plane.receiveShadow = true;
     * scene.add(plane
     * //Create a helper for the shadow camera (optional)
     * const helper = new THREE.CameraHelper(light.shadow.camera
     * scene.add(helper
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/SpotLightShadow | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLightShadow.js | Source}
     */
    readonly SpotLightShadow: string[];
    readonly AnimationLoader: string[];
    readonly AudioLoader: string[];
    readonly BufferGeometryLoader: string[];
    readonly CompressedTextureLoader: string[];
    readonly CubeTextureLoader: string[];
    readonly DataTextureLoader: string[];
    readonly FileLoader: string[];
    readonly ImageBitmapLoader: string[];
    /**
     * A loader for loading an image.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    readonly ImageLoader: string[];
    /**
     * Base class for implementing loaders.
     */
    Loader: string[];
    /**
     * Handles and keeps track of loaded and pending data.
     */
    LoadingManager: any[];
    readonly MaterialLoader: string[];
    readonly ObjectLoader: string[];
    /**
     * Class for loading a texture.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    readonly TextureLoader: string[];
    readonly LineBasicMaterialParameters: string[];
    readonly LineBasicMaterial: any[];
    readonly LineDashedMaterial: any[];
    MaterialParameters: string[];
    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
    readonly Material: any[];
    readonly MeshBasicMaterial: any[];
    readonly MeshDepthMaterialParameters: string[];
    readonly MeshDepthMaterial: any[];
    readonly MeshDistanceMaterialParameters: string[];
    readonly MeshDistanceMaterial: any[];
    readonly MeshLambertMaterialParameters: string[];
    readonly MeshLambertMaterial: any[];
    readonly MeshMatcapMaterialParameters: string[];
    readonly MeshMatcapMaterial: any[];
    readonly MeshNormalMaterialParameters: string[];
    readonly MeshNormalMaterial: any[];
    readonly MeshPhongMaterialParameters: string[];
    readonly MeshPhongMaterial: any[];
    readonly MeshPhysicalMaterialParameters: string[];
    readonly MeshPhysicalMaterial: any[];
    readonly MeshStandardMaterialParameters: string[];
    readonly MeshStandardMaterial: any[];
    readonly MeshToonMaterialParameters: string[];
    readonly MeshToonMaterial: any[];
    readonly PointsMaterialParameters: string[];
    readonly PointsMaterial: any[];
    readonly RawShaderMaterial: any[];
    readonly ShaderMaterialParameters: string[];
    readonly ShaderMaterial: any[];
    readonly ShadowMaterialParameters: string[];
    readonly ShadowMaterial: any[];
    readonly SpriteMaterialParameters: string[];
    readonly SpriteMaterial: any[];
    Box2: string[];
    Box3: string[];
    HSL: string[];
    RGB: string[];
    /**
     * Represents a color. See also {@link ColorUtils}.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
     *
     * @example
     * const color = new THREE.Color( 0xff0000
     */
    Color: string[];
    ColorManagement: string[];
    Cylindrical: string[];
    Euler: string[];
    /**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     */
    Frustum: string[];
    Interpolant: string[];
    Line3: string[];
    /**
     * ( interface Matrix<T> )
     */
    Matrix: string[];
    /**
     * ( class Matrix3 implements Matrix<Matrix3> )
     */
    readonly Matrix3: string[];
    /**
     * A 4x4 Matrix.
     *
     * @example
     * // Simple rig for rotating around 3 axes
     * const m = new THREE.Matrix4(
     * const m1 = new THREE.Matrix4(
     * const m2 = new THREE.Matrix4(
     * const m3 = new THREE.Matrix4(
     * const alpha = 0;
     * const beta = Math.PI;
     * const gamma = Math.PI/2;
     * m1.makeRotationX( alpha )
     * m2.makeRotationY( beta )
     * m3.makeRotationZ( gamma )
     * m.multiplyMatrices( m1, m2 )
     * m.multiply( m3 )
     */
    readonly Matrix4: string[];
    Plane: string[];
    /**
     * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
     *
     * @example
     * const quaternion = new THREE.Quaternion(
     * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2
     * const vector = new THREE.Vector3( 1, 0, 0
     * vector.applyQuaternion( quaternion
     */
    Quaternion: string[];
    Ray: string[];
    Sphere: string[];
    Spherical: string[];
    SphericalHarmonics3: string[];
    Triangle: string[];
    /**
     * 2D vector.
     */
    Vector2: string[];
    /**
     * 3D vector.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
     *
     * @example
     * const a = new THREE.Vector3( 1, 0, 0
     * const b = new THREE.Vector3( 0, 1, 0
     * const c = new THREE.Vector3(
     * c.crossVectors( a, b
     */
    Vector3: string[];
    /**
     * 4D vector.
     */
    Vector4: string[];
    readonly CubicInterpolant: string[];
    readonly DiscreteInterpolant: string[];
    readonly LinearInterpolant: string[];
    readonly QuaternionLinearInterpolant: string[];
    /**
     * A special version of {@link Mesh} with multi draw batch rendering support. Use {@link BatchedMesh} if you have to
     * render a large number of objects with the same material but with different world transformations and geometry. The
     * usage of {@link BatchedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering
     * performance in your application.
     *
     * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_multi_draw WEBGL_multi_draw extension} is not
     * supported then a less performant callback is used.
     *
     * @example
     * const box = new THREE.BoxGeometry( 1, 1, 1 )
     * const sphere = new THREE.BoxGeometry( 1, 1, 1 )
     * const material = new THREE.MeshBasicMaterial( { color, } )
     *
     * // initialize and add geometries into the batched mesh
     * const batchedMesh = new BatchedMesh( 10, 5000, 10000, material )
     * const boxId = batchedMesh.addGeometry( box )
     * const sphereId = batchedMesh.addGeometry( sphere )
     *
     * // position the geometries
     * batchedMesh.setMatrixAt( boxId, boxMatrix )
     * batchedMesh.setMatrixAt( sphereId, sphereMatrix )
     *
     * scene.add( batchedMesh
     *
     * @also Example: {@link https://threejs.org/examples/#webgl_mesh_batch WebGL / mesh / batch}
     */
    readonly BatchedMesh: any[];
    /**
     * A {@link Bone} which is part of a {@link THREE.Skeleton | Skeleton}
     * @remarks
     * The skeleton in turn is used by the {@link THREE.SkinnedMesh | SkinnedMesh}
     * Bones are almost identical to a blank {@link THREE.Object3D }.
     * @example
     * ```typescript
     * const root = new THREE.Bone(
     * const child = new THREE.Bone(
     * root.add(child
     * child.position.y = 5;
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Bone | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js | Source}
     */
    readonly Bone: any[];
    /**
     * Its purpose is to make working with groups of objects syntactically clearer.
     * @remarks This is almost identical to an {@link Object3D }
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1)
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const cubeA = new THREE.Mesh(geometry, material)
     * cubeA.position.set(100, 100, 0)
     * const cubeB = new THREE.Mesh(geometry, material)
     * cubeB.position.set(-100, -100, 0)
     * //create a {@link Group} and add the two cubes
     * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group(
     * group.add(cubeA
     * group.add(cubeB
     * scene.add(group
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js | Source}
     */
    readonly Group: any[];
    readonly InstancedMeshEventMap: string[];
    /**
     * A special version of {@link THREE.Mesh | Mesh} with instanced rendering support
     * @remarks
     * Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material but with different world transformations
     * @remarks
     * The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_dynamic | WebGL / instancing / dynamic}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_performance | WebGL / instancing / performance}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_scatter | WebGL / instancing / scatter}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | WebGL / instancing / raycast}
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/InstancedMesh | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/InstancedMesh.js | Source}
     */
    readonly InstancedMesh: any[];
    /**
     * A continuous line.
     * @remarks
     * This is nearly the same as {@link THREE.LineSegments | LineSegments},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES}
     * @example
     * ```typescript
     * const material = new THREE.LineBasicMaterial({
     *     color,
     * }
     * const points : [];
     * points.push(new THREE.Vector3(-10, 0, 0)
     * points.push(new THREE.Vector3(0, 10, 0)
     * points.push(new THREE.Vector3(10, 0, 0)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points
     * const {@link Line} = new THREE.Line(geometry, material
     * scene.add(line
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Line | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Line.js | Source}
     */
    readonly Line: any[];
    /**
     * A continuous line that connects back to the start.
     * @remarks
     * This is nearly the same as {@link THREE.Line | Line},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_LOOP}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP},
     * which draws a straight line to the next vertex, and connects the last vertex back to the first.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js | Source}
     */
    readonly LineLoop: any[];
    /**
     * A series of lines drawn between pairs of vertices.
     * @remarks
     * This is nearly the same as {@link THREE.Line | Line},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js | Source}
     */
    readonly LineSegments: any[];
    /**
     * Every level is associated with an object, and rendering can be switched between them at the distances specified
     * @remarks
     * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
     * @example
     * ```typescript
     * const {@link LOD} = new THREE.LOD(
     * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
     * for (let i = 0; i & lt; 3; i++) {
     *     const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
     *     const mesh = new THREE.Mesh(geometry, material
     *     lod.addLevel(mesh, i * 75
     * }
     * scene.add(lod
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lod | webgl / {@link LOD} }
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LOD | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LOD.js | Source}
     */
    readonly LOD: any[];
    /**
     * Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh | polygon mesh} based objects.
     * @remarks
     * Also serves as a base for other classes such as {@link THREE.SkinnedMesh | SkinnedMesh},  {@link THREE.InstancedMesh | InstancedMesh}.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1
     * const material = new THREE.MeshBasicMaterial({
     *     color,
     * }
     * const {@link Mesh} = new THREE.Mesh(geometry, material
     * scene.add(mesh
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Mesh | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js | Source}
     */
    readonly Mesh: any[];
    /**
     * A class for displaying {@link Points}
     * @remarks
     * The {@link Points} are rendered by the {@link THREE.WebGLRenderer | WebGLRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.POINTS}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js | Source}
     */
    readonly Points: any[];
    /**
     * Use an array of {@link Bone | bones} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh | SkinnedMesh}.
     * @example
     * ```typescript
     * // Create a simple "arm"
     * const bones : [];
     * const shoulder = new THREE.Bone(
     * const elbow = new THREE.Bone(
     * const hand = new THREE.Bone(
     * shoulder.add(elbow
     * elbow.add(hand
     * bones.push(shoulder
     * bones.push(elbow
     * bones.push(hand
     * shoulder.position.y = -5;
     * elbow.position.y = 0;
     * hand.position.y = 5;
     * const armSkeleton = new THREE.Skeleton(bones
     * See the[page, page
     * for an example of usage with standard[page,.
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Skeleton | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Skeleton.js | Source}
     */
    Skeleton: string[];
    /**
     * A mesh that has a {@link THREE.Skeleton | Skeleton} with {@link Bone | bones} that can then be used to animate the vertices of the geometry.
     * @example
     * ```typescript
     * const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30)
     * // create the skin indices and skin weights manually
     * // (typically a loader would read this data from a 3D model for you)
     * const position = geometry.attributes.position;
     * const vertex = new THREE.Vector3()
     * const skinIndices : [];
     * const skinWeights : [];
     * for (let i = 0; i & lt; position.count; i++) {
     *     vertex.fromBufferAttribute(position, i)
     *     // compute skinIndex and skinWeight based on some configuration data
     *     const y = (vertex.y + sizing.halfHeight
     *     const skinIndex = Math.floor(y / sizing.segmentHeight
     *     const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;
     *     skinIndices.push(skinIndex, skinIndex + 1, 0, 0)
     *     skinWeights.push(1 - skinWeight, skinWeight, 0, 0)
     * }
     * geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4)
     * geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4)
     * // create skinned mesh and skeleton
     * const mesh = new THREE.SkinnedMesh(geometry, material)
     * const skeleton = new THREE.Skeleton(bones
     * // see example from THREE.Skeleton
     * const rootBone = skeleton.bones[0];
     * mesh.add(rootBone
     * // bind the skeleton to the mesh
     * mesh.bind(skeleton
     * // move the bones and manipulate the model
     * skeleton.bones[0].rotation.x = -0.1;
     * skeleton.bones[1].rotation.x = 0.2;
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/SkinnedMesh | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/SkinnedMesh.js | Source}
     */
    readonly SkinnedMesh: any[];
    /**
     * A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied.
     * @remarks Sprites do not cast shadows, setting `castShadow = true` will have no effect.
     * @example
     * ```typescript
     * const map = new THREE.TextureLoader().load('sprite.png'
     * const material = new THREE.SpriteMaterial({
     *     map,
     * }
     * const {@link Sprite} = new THREE.Sprite(material
     * scene.add(sprite
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Sprite | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Sprite.js | Source}
     */
    readonly Sprite: any[];
    /**
     * Represents a three-dimensional render target.
     */
    readonly WebGL3DRenderTarget: any[];
    /**
     * This type of render target represents an array of textures.
     */
    readonly WebGLArrayRenderTarget: any[];
    readonly WebGLCubeRenderTarget: any[];
    Renderer: string[];
    WebGLRendererParameters: string[];
    WebGLDebug: string[];
    /**
     * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
     * This renderer has way better performance than CanvasRenderer.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js|src/renderers/WebGLRenderer.js}
     */
    readonly WebGLRenderer: string[];
    readonly WebGLRenderTarget: any[];
    IUniform: string[];
    WebGLAttributes: string[];
    WebGLBindingStates: string[];
    WebGLBufferRenderer: string[];
    WebGLCapabilitiesParameters: string[];
    WebGLCapabilities: string[];
    WebGLClipping: string[];
    WebGLCubeMaps: string[];
    WebGLCubeUVMaps: string[];
    WebGLExtensions: string[];
    WebGLGeometries: string[];
    WebGLIndexedBufferRenderer: string[];
    /**
     * An object with a series of statistical information about the graphics board memory and the rendering process.
     */
    WebGLInfo: string[];
    WebGLLightsState: string[];
    WebGLLights: string[];
    WebGLObjects: string[];
    WebGLProgram: string[];
    WebGLProgramParameters: string[];
    readonly WebGLProgramParametersWithUniforms: string[];
    WebGLPrograms: string[];
    WebGLProperties: any[];
    RenderItem: string[];
    WebGLRenderList: string[];
    WebGLRenderLists: string[];
    WebGLShadowMap: string[];
    WebGLColorBuffer: any[];
    WebGLDepthBuffer: any[];
    WebGLStencilBuffer: any[];
    WebGLState: string[];
    WebGLTextures: string[];
    WebGLUniforms: string[];
    WebGLUtils: string[];
    readonly XRJointSpace: any[];
    XRHandInputState: string[];
    readonly WebXRSpaceEventMap: string[];
    readonly XRHandSpace: any[];
    readonly XRTargetRaySpace: any[];
    readonly XRGripSpace: any[];
    WebXRController: any[];
    XRWebGLDepthInformation: any[];
    WebXRDepthSensing: string[];
    WebXRManagerEventMap: string[];
    readonly WebXRManager: any[];
    FogBase: string[];
    /**
     * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
     *  @example
     * ```typescript
     * const scene = new THREE.Scene(
     * scene.fog = new THREE.Fog(0xcccccc, 10, 15)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Fog | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js | Source}
     */
    readonly Fog: string[];
    /**
     * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
     * @example
     * ```typescript
     * const scene = new THREE.Scene(
     * scene.fog = new THREE.FogExp2(0xcccccc, 0.002
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain | webgl geometry terrain}
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js | Source}
     */
    readonly FogExp2: string[];
    /**
     * Scenes allow you to set up what and where is to be rendered by three.js
     * @remarks
     * This is where you place objects, lights and cameras.
     * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison | webgl multiple scenes comparison}
     * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene | Manual, a scene}
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js | Source}
     */
    readonly Scene: any[];
    /**
     * Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas | canvas element}.
     * @remarks
     * This is almost the same as the base {@link Texture } class,
     * except that it sets {@link Texture.needsUpdate | needsUpdate} to `true` immediately.
     * @see {@link THREE.Texture }
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CanvasTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CanvasTexture.js | Source}
     */
    readonly CanvasTexture: any[];
    /**
     * Creates an texture 2D array based on data in compressed form, for example from a
     * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js | Source}
     */
    readonly CompressedArrayTexture: any[];
    readonly CompressedCubeTexture: any[];
    /**
     * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js | Source}
     */
    readonly CompressedTexture: any[];
    /**
     * Creates a cube texture made up of six images.
     * @remarks
     * {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}.
     * The only differences are that the images are an array of _6_ images as opposed to a single image,
     * and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping}
     * @example
     * ```typescript
     * const loader = new THREE.CubeTextureLoader(
     * loader.setPath('textures/cube/pisa/'
     * const textureCube = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']
     * const material = new THREE.MeshBasicMaterial({
     *     color,
    
     *     envMap,
     * }
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CubeTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CubeTexture.js | Source}
     */
    readonly CubeTexture: any[];
    /**
     * Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth
     * @example
     * ```typescript
     * This creates a[name] with repeating data, 0 to 255
     * // create a buffer with some data
     * const sizeX = 64;
     * const sizeY = 64;
     * const sizeZ = 64;
     * const data = new Uint8Array(sizeX * sizeY * sizeZ
     * let i = 0;
     * for (let z = 0; z & lt; sizeZ; z++) {
     *     for (let y = 0; y & lt; sizeY; y++) {
     *         for (let x = 0; x & lt; sizeX; x++) {
     *             data[i] = i % 256;
     *             i++;
     *         }
     *     }
     * }
     * // use the buffer to create the texture
     * const texture = new THREE.Data3DTexture(data, sizeX, sizeY, sizeZ)
     * texture.needsUpdate = true;
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d | WebGL2 / materials / texture3d}
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d_partialupdate | WebGL2 / materials / texture3d / partialupdate}
     * @see Example: {@link https://threejs.org/examples/#webgl2_volume_cloud | WebGL2 / volume / cloud}
     * @see Example: {@link https://threejs.org/examples/#webgl2_volume_perlin | WebGL2 / volume / perlin}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Data3DTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Data3DTexture.js | Source}
     */
    readonly Data3DTexture: any[];
    /**
     * Creates an array of textures directly from raw data, width and height and depth
     * @example
     * ```typescript
     * This creates a[name] where each texture has a different color.
     * // create a buffer with color data
     * const width = 512;
     * const height = 512;
     * const depth = 100;
     * const size = width * height;
     * const data = new Uint8Array(4 * size * depth
     * for (let i = 0; i & lt; depth; i++) {
     *     const color = new THREE.Color(Math.random(), Math.random(), Math.random()
     *     const r = Math.floor(color.r * 255
     *     const g = Math.floor(color.g * 255
     *     const b = Math.floor(color.b * 255
     *     for (let j = 0; j & lt; size; j++) {
     *         const stride = (i * size + j) * 4;
     *         data[stride] = r;
     *         data[stride + 1] = g;
     *         data[stride + 2] = b;
     *         data[stride + 3] = 255;
     *     }
     * }
     * // used the buffer to create a [name]
     * const texture = new THREE.DataArrayTexture(data, width, height, depth)
     * texture.needsUpdate = true;
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture2darray | WebGL2 / materials / texture2darray}
     * @see Example: {@link https://threejs.org/examples/#webgl2_rendertarget_texture2darray | WebGL2 / rendertarget / texture2darray}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataArrayTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataArrayTexture.js | Source}
     */
    readonly DataArrayTexture: any[];
    /**
     * Creates a texture directly from raw data, width and height.
     * @example
     * ```typescript
     * // create a buffer with color data
     * const width = 512;
     * const height = 512;
     * const size = width * height;
     * const data = new Uint8Array(4 * size
     * const color = new THREE.Color(0xffffff
     * const r = Math.floor(color.r * 255
     * const g = Math.floor(color.g * 255
     * const b = Math.floor(color.b * 255
     * for (let i = 0; i & lt; size; i++) {
     *     const stride = i * 4;
     *     data[stride] = r;
     *     data[stride + 1] = g;
     *     data[stride + 2] = b;
     *     data[stride + 3] = 255;
     * }
     * // used the buffer to create a [name]
     * const texture = new THREE.DataTexture(data, width, height)
     * texture.needsUpdate = true;
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataTexture.js | Source}
     */
    readonly DataTexture: any[];
    /**
     * This class can be used to automatically save the depth information of a rendering into a texture
     * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture | depth / texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js | Source}
     */
    readonly DepthTexture: any[];
    /**
     * This class can only be used in combination with {@link THREE.WebGLRenderer.copyFramebufferToTexture | WebGLRenderer.copyFramebufferToTexture()}.
     * @example
     * ```typescript
     * const pixelRatio = window.devicePixelRatio;
     * const textureSize = 128 * pixelRatio;
     *
     * // instantiate a framebuffer texture
     * const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat )
     *
     * // calculate start position for copying part of the frame data
     * const vector = new Vector2(
     * vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2
     * vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2
     *
     * // render the scene
     * renderer.clear()
     * renderer.render( scene, camera )
     *
     * // copy part of the rendered frame into the framebuffer texture
     * renderer.copyFramebufferToTexture( vector, frameTexture )
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_framebuffer_texture | webgl_framebuffer_texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/FramebufferTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/FramebufferTexture.js | Source}
     */
    readonly FramebufferTexture: any[];
    /**
     * Represents the data {@link Source} of a texture.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js | Source}
     */
    Source: string[];
    EventTarget: any[];
    /** Shim for OffscreenCanvas. */
    readonly OffscreenCanvas: any[];
    /**
     * Create a {@link Texture} to apply to a surface or as a reflection or refraction map.
     * @remarks
     * After the initial use of a texture, its **dimensions**, {@link format}, and {@link type} cannot be changed
     * Instead, call {@link dispose | .dispose()} on the {@link Texture} and instantiate a new {@link Texture}.
     * @example
     * ```typescript
     * // load a texture, set wrap mode to repeat
     * const texture = new THREE.TextureLoader().load("textures/water.jpg"
     * texture.wrapS = THREE.RepeatWrapping;
     * texture.wrapT = THREE.RepeatWrapping;
     * texture.repeat.set(4, 4)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_texture_filters | webgl materials texture filters}
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Texture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/Textures/Texture.js | Source}
     */
    readonly Texture: any[];
    TextureImageData: string[];
    readonly Texture3DImageData: string[];
    /**
     * Creates a texture for use with a video.
     * @remarks
     * Note, the initial use of a texture, the video cannot be changed
     * Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one.
     * @example
     * ```typescript
     * // assuming you have created a HTML video element with id="video"
     * const video = document.getElementById('video'
     * const texture = new THREE.VideoTexture(video
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_video | materials / video}
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_video_webcam | materials / video / webcam}
     * @see Example: {@link https://threejs.org/examples/#webgl_video_kinect | video / kinect}
     * @see Example: {@link https://threejs.org/examples/#webgl_video_panorama_equirectangular | video / panorama / equirectangular}
     * @see Example: {@link https://threejs.org/examples/#webxr_vr_video | vr / video}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/VideoTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js | Source}
     */
    readonly VideoTexture: any[];
};
//# sourceMappingURL=params.d.ts.map