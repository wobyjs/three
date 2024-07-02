import './extensions'

const p = {
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\constants.d.ts
    /**
     * @deprecated THREE.WebGlMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGlRenderTarget and set the "count" parameter to enable MRT.
     */            
    get webGlMultipleRenderTargets() {
        return [...this.webGlRenderTarget,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\utils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationAction.d.ts
    // Animation ////////////////////////////////////////////////////////////////////////////////////////
    animationAction: [
        'blendMode',
        /**
         * @default THREE.LoopRepeat
         */
        'loop',
        /**
         * @default 0
         */
        'time',
        /**
         * @default 1
         */
        'timeScale',
        /**
         * @default 1
         */
        'weight',
        /**
         * @default Infinity
         */
        'repetitions',
        /**
         * @default false
         */
        'paused',
        /**
         * @default true
         */
        'enabled',
        /**
         * @default false
         */
        'clampWhenFinished',
        /**
         * @default true
         */
        'zeroSlopeAtStart',
        /**
         * @default true
         */
        'zeroSlopeAtEnd',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationClip.d.ts
    morphTarget: [
        'name',
        'vertices',
    ].distinct(),
    animationClip: [
        'name',
        'tracks',
        /**
         * @default THREE.NormalAnimationBlendMode
         */
        'blendMode',
        /**
         * @default -1
         */
        'duration',
        'uuid',
        'results',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationMixer.d.ts
    animationMixerEventMap: [
        'loop',
        'finished',
    ].distinct(),        
    get animationMixer() {
        return [...this.eventDispatcher,
            /**
             * @default 0
             */
            'time',
            /**
             * @default 1.0
             */
            'timeScale',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationObjectGroup.d.ts
    animationObjectGroup: [
        'uuid',
        'stats',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\KeyframeTrack.d.ts    
    get keyframeTrack() {
        return [
            'name',
            'times',
            'values',
            'ValueTypeName',
            'TimeBufferType',
            'ValueBufferType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyBinding.d.ts
    parseTrackNameResults: [
        'nodeName',
        'objectName',
        'objectIndex',
        'propertyName',
        'propertyIndex',
    ].distinct(),
    propertyBinding: [
        'path',
        'parsedPath',
        'node',
        'rootNode',
        'BindingType',
        'Versioning',
        'GetterByBindingType',
        'SetterByBindingTypeAndVersioning',
    ].distinct(),
    propertyBinding_Composite: [].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyMixer.d.ts
    propertyMixer: [
        'binding',
        'valueSize',
        'buffer',
        'cumulativeWeight',
        'cumulativeWeightAdditive',
        'useCount',
        'referenceCount',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\BooleanKeyframeTrack.d.ts    
    get booleanKeyframeTrack() {
        return [...this.keyframeTrack,
            /**
             * @default 'bool'
             */
            'ValueTypeName',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\ColorKeyframeTrack.d.ts    
    get colorKeyframeTrack() {
        return [...this.keyframeTrack,
            /**
             * @default 'color'
             */
            'ValueTypeName',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\NumberKeyframeTrack.d.ts    
    get numberKeyframeTrack() {
        return [...this.keyframeTrack,
            /**
             * @default 'number'
             */
            'ValueTypeName',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\QuaternionKeyframeTrack.d.ts    
    get quaternionKeyframeTrack() {
        return [...this.keyframeTrack,
            /**
             * @default 'quaternion'
             */
            'ValueTypeName',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\StringKeyframeTrack.d.ts    
    get stringKeyframeTrack() {
        return [...this.keyframeTrack,
            /**
             * @default 'string'
             */
            'ValueTypeName',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\VectorKeyframeTrack.d.ts    
    get vectorKeyframeTrack() {
        return [...this.keyframeTrack,
            /**
             * @default 'vector'
             */
            'ValueTypeName',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\Audio.d.ts
    // Extras / Audio /////////////////////////////////////////////////////////////////////
    /**
     * Create a non-positional ( global ) {@link Audio} object.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web {@link Audio} API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener()
     * camera.add(listener)
     * // create a global {@link Audio} source
     * const sound = new THREE.Audio(listener)
     * // load a sound and set it as the {@link Audio} object's buffer
     * const audioLoader = new THREE.AudioLoader()
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     *     sound.setBuffer(buffer)
     *     sound.setLoop(true)
     *     sound.setVolume(0.5)
     *     sound.play()
     * })
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/Audio | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/Audio.js | Source}
     */    
    get audio() {
        return [...this.object3d,
            /**
             * A reference to the listener object of this audio.
             */
            'listener',
            /**
             * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link AudioListener | listener} given in the constructor.
             */
            'context',
            /**
             * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
             * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain}().
             */
            'gain',
            /**
             * Whether to start playback automatically.
             * @defaultValue `false`
             */
            'autoplay',
            'buffer',
            /**
             * Modify pitch, measured in cents. +/- 100 is a semitone. +/- 1200 is an octave.
             * @defaultValue `0`
             */
            'detune',
            /**
             * @default false
             */
            'loop',
            /**
             * @default 0
             */
            'loopStart',
            /**
             * @default 0
             */
            'loopEnd',
            /**
             * An offset to the time within the {@link Audio} buffer that playback should begin.
             * Same as the {@link Audio.offset | offset} parameter of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
             * @defaultValue `0`
             */
            'offset',
            /**
             * Overrides the duration of the audio. Same as the {@link Audio.duration | duration} parameter of
             * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
             * @defaultValue `undefined` _to play the whole buffer_.
             */
            'duration',
            /**
             * Speed of playback.
             * @defaultValue `1`
             */
            'playbackRate',
            /**
             * Whether the {@link Audio} is currently playing.
             * @defaultValue `false`
             */
            'isPlaying',
            /**
             * Whether playback can be controlled using the {@link Audio.play | play}(), {@link Audio.pause | pause}() etc. methods.
             * @defaultValue `true`
             */
            'hasPlaybackControl',
            /**
             * Type of the {@link Audio} source.
             * @defaultValue 'empty'.
             */
            'sourceType',
            /**
             * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode | AudioBufferSourceNode} created using
             * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBufferSource | AudioContext.createBufferSource()}.
             */
            'source',
            /**
             * Represents an array of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode | AudioNodes}.
             * Can be used to apply a variety of low-order filters to create more complex sound effects.
             * In most cases, the array contains instances of {@link https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode | BiquadFilterNodes}.
             * Filters are set via {@link THREE.Audio.setFilter | Audio.setFilter} or {@link THREE.Audio.setFilters | Audio.setFilters}.
             * @defaultValue `[].distinct()`
             */
            'filters',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioAnalyser.d.ts
    /**
     * Create a {@link AudioAnalyser} object, which uses an {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} to analyse audio data.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener()
     * camera.add(listener)
     * // create an Audio source
     * const sound = new THREE.Audio(listener)
     * // load a sound and set it as the Audio object's buffer
     * const audioLoader = new THREE.AudioLoader()
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     *     sound.setBuffer(buffer)
     *     sound.setLoop(true)
     *     sound.setVolume(0.5)
     *     sound.play()
     * })
     * // create an AudioAnalyser, passing in the sound and desired fftSize
     * const analyser = new THREE.AudioAnalyser(sound, 32)
     * // get the average frequency of the sound
     * const data = analyser.getAverageFrequency()
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioAnalyser | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js | Source}
     */
    audioAnalyser: [
        /**
         * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} used to analyze audio.
         */
        'analyser',
        /**
         * A Uint8Array with size determined by {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount | analyser.frequencyBinCount} used to hold analysis data.
         */
        'data',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioContext.d.ts
    /**
     * This contains methods for setting up an {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext}.
    /**
     * The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener | listener} of the all positional and non-positional audio effects in the scene.
     * A three.js application usually creates a single instance of {@link AudioListener}  * @remarks
     * It is a mandatory construtor parameter for audios entities like {@link Audio | Audio} and {@link PositionalAudio | PositionalAudio}.
     * In most cases, the listener object is a child of the camera
     * So the 3d transformation of the camera represents the 3d transformation of the listener.
     * @example
     * ```typescript
     * // create an {@link AudioListener} and add it to the camera
     * const listener = new THREE.AudioListener()
     * camera.add(listener)
     * // create a global audio source
     * const sound = new THREE.Audio(listener)
     * // load a sound and set it as the Audio object's buffer
     * const audioLoader = new THREE.AudioLoader()
     * audioLoader.load('sounds/ambient.ogg', function (buffer) {
     *     sound.setBuffer(buffer)
     *     sound.setLoop(true)
     *     sound.setVolume(0.5)
     *     sound.play()
     * })
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
     * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioListener | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioListener.js | Source}
     */    
    get audioListener() {
        return [...this.object3d,
            /**
             * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link {@link AudioListener} | listener} given in the constructor.
             */
            'context',
            /**
             * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
             * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain()}.
             */
            'gain',
            /**
             * @defaultValue `null`
             */
            'filter',
            /**
             * Time delta value for audio entities. Use in context of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime | AudioParam.linearRampToValueAtTimeDefault()}.
             * @defaultValue `0`
             */
            'timeDelta',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\PositionalAudio.d.ts
    /**
     * Create a positional audio object.
     * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
     * @example
     * ```typescript
     * // create an AudioListener and add it to the camera
     * const listener = new THREE.AudioListener()
     * camera.add(listener)
     * // create the {@link PositionalAudio} object (passing in the listener)
     * const sound = new THREE.PositionalAudio(listener)
     * // load a sound and set it as the {@link PositionalAudio} object's buffer
     * const audioLoader = new THREE.AudioLoader()
     * audioLoader.load('sounds/song.ogg', function (buffer) {
     *     sound.setBuffer(buffer)
     *     sound.setRefDistance(20)
     *     sound.play()
     * })
     * // create an object for the sound to play from
     * const sphere = new THREE.SphereGeometry(20, 32, 16)
     * const material = new THREE.MeshPhongMaterial({
     *     color: 0xff2200
     * })
     * const mesh = new THREE.Mesh(sphere, material)
     * scene.add(mesh)
     * // finally add the sound to the mesh
     * mesh.add(sound)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webaudio_orientation | webaudio / orientation }
     * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
     * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
     * @see {@link https://threejs.org/docs/index.html#api/en/audio/PositionalAudio | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/PositionalAudio.js | Source}
     */    
    get positionalAudio() {
        return [...this.audio,
            /**
             * The PositionalAudio's {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode | PannerNode}.
             */
            'panner',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\ArrayCamera.d.ts
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
    get arrayCamera() {
        return [...this.perspectiveCamera,
            /**
             * An array of cameras.
             * @defaultValue `[].distinct()`
             */
            'cameras',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\Camera.d.ts
    /**
     * Abstract base class for cameras
     * @remarks
     * This class should always be inherited when you build a new camera.
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
     */    
    get camera() {
            return [...this.object3d,
            /**
             * @override
             * The {@link THREE.Layers | layers} that the {@link Camera} is a member of.
             * @remarks Objects must share at least one layer with the {@link Camera} to be n when the camera's viewpoint is rendered.
             * @defaultValue `new THREE.Layers()`
             */
            'layers',
            /**
             * This is the inverse of matrixWorld.
             * @remarks MatrixWorld contains the Matrix which has the world transform of the {@link Camera} .
             * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
             */
            'matrixWorldInverse',
            /**
             * This is the matrix which contains the projection.
             * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
             */
            'projectionMatrix',
            /**
             * This is the inverse of projectionMatrix.
             * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
             */
            'projectionMatrixInverse',
            'coordinateSystem',
            'viewport',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\CubeCamera.d.ts
    /**
     * Creates **6** {@link THREE.PerspectiveCamera | cameras} that render to a {@link THREE.WebGlCubeRenderTarget | WebGlCubeRenderTarget}.
     * @remarks The cameras are added to the {@link children} array.
     * @example
     * ```typescript
     * // Create cube render target
     * const cubeRenderTarget = new THREE.WebGlCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } )
     *
     * // Create cube camera
     * const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget )
     * scene.add( cubeCamera )
     *
     * // Create car
     * const chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeRenderTarget.texture } )
     * const car = new THREE.Mesh( carGeometry, chromeMaterial )
     * scene.add( car )
     *
     * // Update the render target cube
     * car.visible = false
     * cubeCamera.position.copy( car.position )
     * cubeCamera.update( renderer, scene )
     *
     * // Render the scene
     * car.visible = true
     * renderer.render( scene, camera )
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/CubeCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js | Source}
     */    
    get cubeCamera() {
        return [...this.object3d,
            /**
             * The destination cube render target.
             */
            'renderTarget',
            'coordinateSystem',
            'activeMipmapLevel',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\OrthographicCamera.d.ts
    /**
     * Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection | orthographic projection}.
     * In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.
     * This can be useful for rendering 2d scenes and UI elements, amongst other things.
     * @example
     * ```typescript
     * const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000)
     * scene.add(camera)
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
    get orthographicCamera() {
        return [...this.camera,
            /**
             * Gets or sets the zoom factor of the camera.
             * @defaultValue `1`
             */
            'zoom',
            /**
             * Set by {@link setViewOffset | .setViewOffset()}.
             * @defaultValue `null`
             */
            'view',
            /**
             * Camera frustum left plane.
             * @remarks Expects a `Float`
             * @defaultValue `-1`
             */
            'left',
            /**
             * Camera frustum right plane.
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'right',
            /**
             * Camera frustum top plane.
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'top',
            /**
             * Camera frustum bottom plane.
             * @remarks Expects a `Float`.
             * @defaultValue `-1`
             */
            'bottom',
            /**
             * Camera frustum near plane.`.
             * @remarks The valid range is between `0` and the current value of the {@link far | .far} plane.
             * @remarks Note that, unlike for the {@link THREE.PerspectiveCamera | PerspectiveCamera}, `0` is a valid value for an {@link THREE.OrthographicCamera | OrthographicCamera's} near plane.
             * @remarks Expects a `Float`
             * @defaultValue `0.1`
             */
            'near',
            /**
             * Camera frustum far plane.
             * @remarks Must be greater than the current value of {@link near | .near} plane.
             * @remarks Expects a `Float`
             * @defaultValue `2000`
             */
            'far',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\PerspectiveCamera.d.ts
    /**
     * Camera that uses {@link https://en.wikipedia.org/wiki/Perspective_(graphical) | perspective projection}.
     * This projection mode is designed to mimic the way the human eye sees
     * @remarks
     * It is the most common projection mode used for rendering a 3d scene.
     * @example
     * ```typescript
     * const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
     * scene.add(camera)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | animation / skinning / morph }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
     * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | interactive / cubes }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_skinning | loader / collada / skinning }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js | Source}
     */    
    get perspectiveCamera() {
        return [...this.camera,
            /**
          * Gets or sets the zoom factor of the camera.
          * @defaultValue `1`
          */
            'zoom',
            /**
             * Camera frustum vertical field of view, from bottom to top of view, in degrees.
             * @remarks Expects a `Float`
             * @defaultValue `50`
             */
            'fov',
            /**
             * Camera frustum aspect ratio, usually the canvas width / canvas height.
             * @remarks Expects a `Float`
             * @defaultValue `1`, _(square canvas)_.
             */
            'aspect',
            /**
             * Camera frustum near plane.
             * @remarks The valid range is greater than `0` and less than the current value of the {@link far | .far} plane.
             * @remarks Note that, unlike for the {@link THREE.OrthographicCamera | OrthographicCamera}, `0` is **not** a valid value for a {@link PerspectiveCamera |PerspectiveCamera's}. near plane.
             * @defaultValue `0.1`
             * @remarks Expects a `Float`
             */
            'near',
            /**
             * Camera frustum far plane.
             * @remarks Must be greater than the current value of {@link near | .near} plane.
             * @remarks Expects a `Float`
             * @defaultValue `2000`
             */
            'far',
            /**
             * Object distance used for stereoscopy and depth-of-field effects.
             * @remarks This parameter does not influence the projection matrix unless a {@link THREE.StereoCamera | StereoCamera} is being used.
             * @remarks Expects a `Float`
             * @defaultValue `10`
             */
            'focus',
            /**
             * Frustum window specification or null.
             * This is set using the {@link setViewOffset | .setViewOffset} method and cleared using {@link clearViewOffset | .clearViewOffset}.
             * @defaultValue `null`
             */
            'view',
            /**
             * Film size used for the larger axis.
             * This parameter does not influence the projection matrix unless {@link filmOffset | .filmOffset} is set to a nonzero value.
             * @remarks Expects a `Float`
             * @defaultValue `35`, _millimeters_.
             */
            'filmGauge',
            /**
             * Horizontal off-center offset in the same unit as {@link filmGauge | .filmGauge}.
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'filmOffset',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\cameras\StereoCamera.d.ts
    /**
     * Dual {@link PerspectiveCamera | PerspectiveCamera}s used for effects such as
     * {@link https://en.wikipedia.org/wiki/Anaglyph_3d | 3d Anaglyph} or
     * {@link https://en.wikipedia.org/wiki/parallax_barrier | Parallax Barrier}.
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/StereoCamera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js | Source}
     */    
    get stereoCamera() {
        return [...this.camera,
            /**
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'aspect',
            /**
             * @remarks Expects a `Float`
             * @defaultValue `0.064`
             */
            'eyeSep',
            /**
             * The Left camera.
             * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 1}
             * @remarks Objects to be rendered by the **left** camera must also be added to this layer.
             */
            'cameraL',
            /**
             * The Right camera.
             * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 2}
             * @remarks Objects to be rendered by the **right** camera must also be added to this layer.
             */
            'cameraR',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\BufferAttribute.d.ts
    /**
     * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, Uvs, and any custom attributes )
     * associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the Gpu
     * @remarks
     * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
     * {@link THREE.Vector2.fromBufferAttribute | Vector2},
     * {@link THREE.Vector3.fromBufferAttribute | Vector3},
     * {@link THREE.Vector4.fromBufferAttribute | Vector4}, and
     * {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.
     * @see {@link THREE.BufferGeometry | BufferGeometry} for details and a usage examples.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGl / BufferGeometry - Clean up Memory}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    bufferAttribute: [
        /**
         * Optional name for this attribute instance.
         * @defaultValue ''
         */
        'name',
        /**
         * The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} holding data stored in the buffer.
         * @returns `TypedArray`
         */
        'array',
        /**
         * The length of vectors that are being stored in the {@link BufferAttribute.array | array}.
         * @remarks Expects a `Integer`
         */
        'itemSize',
        /**
         * Defines the intended usage pattern of the data store for optimization purposes.
         * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/bufferData | WebGlRenderingContext.bufferData}.
         * @remarks
         * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
         * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
         * @see {@link BufferAttribute.setUsage | setUsage}
         * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
         */
        'usage',
        /**
         * Configures the bound Gpu type for use in shaders. Either {@link FloatType} or {@link IntType}, default is {@link FloatType}.
         *
         * Note: this only has an effect for integer arrays and is not configurable for float arrays. For lower precision
         * float types, see https://threejs.org/docs/#api/en/core/bufferAttributeTypes/BufferAttributeTypes.
         */
        'gpuType',
        /**
         * This can be used to only update some components of stored vectors (for example, just the component related to color).
         * @defaultValue `{ offset: number = 0; count: number = -1 }`
         * @deprecated Will be removed in r169. Use "addUpdateRange()" instead.
         */
        'updateRange',
        /**
         * This can be used to only update some components of stored vectors (for example, just the component related to
         * color). Use the {@link .addUpdateRange} function to add ranges to this array.
         */
        'updateRanges',
        /**
         * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
         * @remarks Expects a `Integer`
         * @defaultValue `0`
         */
        'version',
        /**
         * Indicates how the underlying data in the buffer maps to the values in the GlSL shader code.
         * @see `constructor` above for details.
         * @defaultValue `false`
         */
        'normalized',
    ].distinct(),
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array: Int8Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get int8BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array: Uint8Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get uint8BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray: Uint8ClampedArray}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get uint8ClampedBufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array: Int16Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get int16BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get uint16BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array: Int32Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get int32BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array: Uint32Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get uint32BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get float16BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array: Float32Array}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */    
    get float32BufferAttribute() {
        return [...this.bufferAttribute,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\BufferGeometry.d.ts
    /**
     * A representation of mesh, line, or point geometry
     * Includes vertex positions, face indices, normals, colors, Uvs, and custom attributes within buffers, reducing the cost of passing all this data to the Gpu.
     * @remarks
     * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute | BufferAttribute} documentation.
     * @example
     * ```typescript
     * const geometry = new THREE.BufferGeometry()
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
     * ].distinct() )
     *
     * // itemSize = 3 because there are 3 values (components) per vertex
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
     * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
     * const mesh = new THREE.Mesh( geometry, material )
     * ```
     * @example
     * ```typescript
     * const geometry = new THREE.BufferGeometry()
     *
     * const vertices = new Float32Array( [
     *   -1.0, -1.0,  1.0, // v0
     *    1.0, -1.0,  1.0, // v1
     *    1.0,  1.0,  1.0, // v2
     *   -1.0,  1.0,  1.0, // v3
     * ].distinct() )
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
     *
     * const indices = [
     *   0, 1, 2,
     *   2, 3, 0,
     * ].distinct()
     *
     * geometry.setIndex( indices )
     * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
     *
     * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
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
    get bufferGeometry() {
            return [...this.eventDispatcher,
            /**
             * Unique number for this {@link THREE.BufferGeometry | BufferGeometry} instance.
             * @remarks Expects a `Integer`
             */
            'id',
            /**
             * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
             * @remarks This gets automatically assigned and shouldn't be edited.
             */
            'uuid',
            /**
             * Optional name for this {@link THREE.BufferGeometry | BufferGeometry} instance.
             * @defaultValue `''`
             */
            'name',
            /**
             * A Read-only _string_ to check if `this` object type.
             * @remarks Sub-classes will update this value.
             * @defaultValue `BufferGeometry`
             */
            /**
             * Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
             * Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
             * If this attribute is not set, the {@link THREE.WebGlRenderer | renderer}  assumes that each three contiguous positions represent a single triangle.
             * @defaultValue `null`
             */
            'index',
            /**
             * This hashmap has as id the name of the attribute to be set and as value the {@link THREE.BufferAttribute | buffer} to set it to. Rather than accessing this property directly,
             * use {@link setAttribute | .setAttribute} and {@link getAttribute | .getAttribute} to access attributes of this geometry.
             * @defaultValue `{}`
             */
            'attributes',
            /**
             * Hashmap of {@link THREE.BufferAttribute | BufferAttributes} holding details of the geometry's morph targets.
             * @remarks
             * Once the geometry has been rendered, the morph attribute data cannot be changed.
             * You will have to call {@link dispose | .dispose}(), and create a new instance of {@link THREE.BufferGeometry | BufferGeometry}.
             * @defaultValue `{}`
             */
            'morphAttributes',
            /**
             * Used to control the morph target behavior; when set to true, the morph target data is treated as relative offsets, rather than as absolute positions/normals.
             * @defaultValue `false`
             */
            'morphTargetsRelative',
            /**
             * Split the geometry into groups, each of which will be rendered in a separate WebGl draw call. This allows an array of materials to be used with the geometry.
             * @remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
             * @remarks Use {@link addGroup | .addGroup} to add groups, rather than modifying this array directly.
             * @defaultValue `[].distinct()`
             */
            'groups',
            /**
             * Bounding box for the {@link THREE.BufferGeometry | BufferGeometry}, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
             * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
             * @defaultValue `null`
             */
            'boundingBox',
            /**
             * Bounding sphere for the {@link THREE.BufferGeometry | BufferGeometry}, which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
             * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
             * @defaultValue `null`
             */
            'boundingSphere',
            /**
//@ts-ignore
             * Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange | .setDrawRange(...this.)}.
             * @remarks For non-indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of vertices to render.
             * @remarks For indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of indices to render.
             * @defaultValue `{ start: 0, count: Infinity }`
             */
            'drawRange',
            /**
             * An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.
             * @defaultValue `{}`
             */
            'userData',
        ].distinct()
    }
    ,
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Clock.d.ts
    /**
     * Object for keeping track of time
     * @remarks
     * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now | performance.now} if it is available,
     * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now | Date.now}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js | Source}
     */
    clock: [
        /**
         * If set, starts the clock automatically when {@link getDelta | .getDelta()} is called for the first time.
         * @defaultValue `true`
         */
        'autoStart',
        /**
         * Holds the time at which the clock's {@link start | .start()} method was last called.
         * @defaultValue `0`
         */
        'startTime',
        /**
         * Holds the time at which the clock's {@link start | .start()}, {@link getElapsedTime | .getElapsedTime()} or {@link getDelta | .getDelta()} methods were last called.
         * @defaultValue `0`
         */
        'oldTime',
        /**
         * Keeps track of the total time that the clock has been running.
         * @defaultValue `0`
         */
        'elapsedTime',
        /**
         * Whether the clock is running or not.
         * @defaultValue `false`
         */
        'running',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\EventDispatcher.d.ts
    /**
     * The minimal basic Event that can be dispatched by a {@link EventDispatcher}.
     */
    baseEvent: [
    ].distinct(),
    /**
     * The minimal expected contract of a fired Event that was dispatched by a {@link EventDispatcher}.
     */
    event: [
    ].distinct(),
    /**
     * JavaScript events for custom objects
     * @example
     * ```typescript
     * // Adding events to a custom object
//@ts-ignore
     * get Car() {return [...this.eventDispatcher,
     *   start() {
     *     this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } )
     *   }
     * }
     * // Using events with the custom object
     * const car = new Car()
     * car.addEventListener( 'start', ( event ) => {
     *   alert( event.message )
     * } )
     * car.start()
     * ```
     * @see {@link https://github.com/mrdoob/eventdispatcher.js | mrdoob EventDispatcher on GitHub}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/EventDispatcher | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js | Source}
     */    
    get eventDispatcher() {
        return [
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\GlBufferAttribute.d.ts
    /**
     * This buffer attribute class does not construct a VBO.
     * Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property.
     * @remarks
     * It is required to pass additional params alongside the VBO
     * Those are: the Gl context, the Gl data type, the number of components per vertex, the number of bytes per component, and the number of vertices.
     * @remarks
     * The most common use case for this class is when some kind of GPGpu calculation interferes or even produces the VBOs in question.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute | WebGl / buffergeometry / glbufferattribute}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/GlBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GlBufferAttribute.js | Source}
     */
    glBufferAttribute: [
        /**
         * Optional name for this attribute instance.
         * @defaultValue `""`
         */
        'name',
        /**
         * The current {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlBuffer | WebGlBuffer} instance.
         */
        'buffer',
        /**
         * A {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGl_API/Constants#Data_types | WebGl Data Type} describing the underlying VBO contents.
         *
         * #### WebGl Data Type (`Glenum`)
         * - gl.BYTE: 0x1400
         * - gl.UNSIGNED_BYTE: 0x1401
         * - gl.SHORT: 0x1402
         * - gl.UNSIGNED_SHORT: 0x1403
         * - gl.INT: 0x1404
         * - gl.UNSIGNED_INT: 0x1405
         * - gl.FLOAT: 0x1406
         * @remarks Set this property together with {@link elementSize | .elementSize}. The recommended way is using the {@link setType | .setType()} method.
         * @remarks Expects a `DataType` `Glenum` _possible values:_ `0x1400` `0x1401` `0x1402` `0x1403` `0x1404` `0x1405` `0x1406`
         */
        'type',
        /**
         * How many values make up each item (vertex).
         * @remarks The number of values of the array that should be associated with a particular vertex.
         * For instance, if this attribute is storing a 3-component vector (such as a position, normal, or color), then itemSize should be 3.
         * @remarks Expects a `Integer`
         */
        'itemSize',
        /**
         * Stores the corresponding size in bytes for the current {@link type | .type} property value.
         *
         * The corresponding size (_in bytes_) for the given "type" param.
         * #### WebGl Data Type (`Glenum`)
         * - gl.BYTE: 1
         * - gl.UNSIGNED_BYTE: 1
         * - gl.SHORT: 2
         * - gl.UNSIGNED_SHORT: 2
         * - gl.INT: 4
         * - gl.UNSIGNED_INT: 4
         * - gl.FLOAT: 4
         * @remarks Set this property together with {@link type | .type}. The recommended way is using the {@link setType | .setType} method.
         * @see `constructor`` for a list of known type sizes.
         * @remarks Expects a `1`, `2` or `4`
         */
        'elementSize',
        /**
         * The expected number of vertices in VBO.
         * @remarks Expects a `Integer`
         */
        'count',
        /**
         * A version number, incremented every time the needsUpdate property is set to true.
         * @remarks Expects a `Integer`
         */
        'version',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedBufferAttribute.d.ts
    /**
     * An instanced version of {@link THREE.BufferAttribute | BufferAttribute}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js | Source}
     */    
    get instancedBufferAttribute() {
        return [...this.bufferAttribute,
            /**
             * Defines how often a value of this buffer attribute should be repeated.
             * A value of one means that each value of the instanced attribute is used for a single instance.
             * A value of two means that each value is used for two consecutive instances (and so on).
             * @defaultValue `1`
             */
            'meshPerAttribute',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedBufferGeometry.d.ts
    /**
     * An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js | Source}
     */    
    get instancedBufferGeometry() {
        return [...this.bufferGeometry,
            /**
            * @defaultValue `InstancedBufferGeometry`
            */
            'type',
            /**
             * Read-only flag to check if a given object is of type {@link InstancedBufferGeometry}.
             * @remarks This is a _constant_ value
             * @defaultValue `true`
             */
            /**
             * @defaultValue `Infinity`
             */
            'instanceCount',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedInterleavedBuffer.d.ts
    /**
     * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
     */    
    get instancedInterleavedBuffer() {
        return [...this.interleavedBuffer,
            /**
             * @defaultValue `1`
             */
            'meshPerAttribute',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InterleavedBuffer.d.ts
    /**
     * **"Interleaved"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer.
     * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved | webgl / buffergeometry / points / interleaved}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js | Source}
     */
    interleavedBuffer: [
        /**
         * A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
         */
        'array',
        /**
         * The number of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} elements per vertex.
         * @remarks Expects a `Integer`
         */
        'stride',
        /**
         * Defines the intended usage pattern of the data store for optimization purposes.
         * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/bufferData | WebGlRenderingContext.bufferData}.
         * @remarks
         * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
         * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
         * @see {@link BufferAttribute.setUsage | setUsage}
         * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
         */
        'usage',
        /**
         * Object containing offset and count.
         * @defaultValue `{ offset: number = 0; count: number = -1 }`
         * @deprecated Will be removed in r169. Use "addUpdateRange()" instead.
         */
        'updateRange',
        /**
         * This can be used to only update some components of stored data. Use the {@link .addUpdateRange} function to add
         * ranges to this array.
         */
        'updateRanges',
        /**
         * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
         * @remarks Expects a `Integer`
         * @defaultValue `0`
         */
        'version',
        /**
         * Gives the total number of elements in the array.
         * @remarks Expects a `Integer`
         * @defaultValue 0
         */
        'count',
        /**
         * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
         * @remarks This gets automatically assigned and shouldn't be edited.
         */
        'uuid',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InterleavedBufferAttribute.d.ts
    /**
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js | Source}
     */
    interleavedBufferAttribute: [
        /**
         * Optional name for this attribute instance.
         * @defaultValue `''`
         */
        'name',
        /**
         * The {@link InterleavedBuffer | InterleavedBuffer} instance passed in the constructor.
         */
        'data',
        /**
         * How many values make up each item.
         * @remarks Expects a `Integer`
         */
        'itemSize',
        /**
         * The offset in the underlying array buffer where an item starts.
         * @remarks Expects a `Integer`
         */
        'offset',
        /**
         * @defaultValue `false`
         */
        'normalized',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Layers.d.ts
    /**
     * A {@link THREE.Layers | Layers} object assigns an {@link THREE.Object3d | Object3d} to 1 or more of 32 layers numbered `0` to `31` - internally the
     * layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) | bit mask}, and
     * by default all Object3ds are a member of layer `0`.
     * @remarks
     * This can be used to control visibility - an object must share a layer with a {@link Camera | camera} to be visible when that camera's view is rendered.
     * @remarks
     * All classes that inherit from {@link THREE.Object3d | Object3d} have an {@link THREE.Object3d.layers | Object3d.layers} property which is an instance of this class.
     * @see Example: {@link https://threejs.org/examples/#webgl_layers | WebGl / layers}
     * @see Example: {@link https://threejs.org/examples/#webxr_vr_layers | Webxr / vr / layers}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Layers | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Layers.js | Source}
     */
    layers: [
        /**
         * A bit mask storing which of the 32 layers this layers object is currently a member of.
         * @defaultValue `1 | 0`
         * @remarks Expects a `Integer`
         */
        'mask',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Object3d.d.ts
    object3dEventMap: [
        /**
         * Fires when the object has been added to its parent object.
         */
        'added',
        /**
         * Fires when the object has been removed from its parent object.
         */
        'removed',
        /**
         * Fires when a new child object has been added.
         */
        'childadded',
        /**
         * Fires when a new child object has been removed.
         */
        'childremoved',
    ].distinct(),
    /**
     * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3d space.
     * @remarks Note that this can be used for grouping objects via the {@link THREE.Object3d.add | .add()} method which adds the object as a child,
     * however it is better to use {@link THREE.Group | Group} for this.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3d | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3d.js | Source}
     */    
    get object3d() {
        return [
            /**
             * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
             * @remarks This gets automatically assigned and shouldn't be edited.
             */
            'uuid',
            /**
             * Optional name of the object
             * @remarks _(doesn't need to be unique)_.
             * @defaultValue `""`
             */
            'name',
            /**
             * A Read-only _string_ to check `this` object type.
             * @remarks This can be used to find a specific type of Object3d in a scene.
             * Sub-classes will update this value.
             * @defaultValue `Object3d`
             */
            /**
             * Object's parent in the {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}.
             * @remarks An object can have at most one parent.
             * @defaultValue `null`
             */
            'parent',
            /**
             * Array with object's children.
             * @see {@link THREE.Object3dGroup | Group} for info on manually grouping objects.
             * @defaultValue `[].distinct()`
             */
            'children',
            /**
             * This is used by the {@link lookAt | lookAt} method, for example, to determine the orientation of the result.
             * @defaultValue {@link DEFAULT_UP | Object3d.DEFAULT_UP} - that is `(0, 1, 0)`.
             */
            'up',
            /**
             * The local transform matrix.
             * @defaultValue `new THREE.Matrix4()`
             */
            'matrix',
            /**
             * The global transform of the object.
             * @remarks If the {@link Object3d} has no parent, then it's identical to the local transform {@link THREE.Object3d.matrix | .matrix}.
             * @defaultValue `new THREE.Matrix4()`
             */
            'matrixWorld',
            /**
             * When this is set, it calculates the matrix of position, (rotation or quaternion) and
             * scale every frame and also recalculates the matrixWorld property.
             * @defaultValue {@link DEFAULT_MATRIX_AUTO_UPDATE} - that is `(true)`.
             */
            'matrixAutoUpdate',
            /**
             * If set, then the renderer checks every frame if the object and its children need matrix updates.
             * When it isn't, then you have to maintain all matrices in the object and its children yourself.
             * @defaultValue {@link DEFAULT_MATRIX_WORLD_AUTO_UPDATE} - that is `(true)`.
             */
            'matrixWorldAutoUpdate',
            /**
             * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
             * @defaultValue `false`
             */
            'matrixWorldNeedsUpdate',
            /**
             * The layer membership of the object.
             * @remarks The object is only visible if it has at least one layer in common with the {@link THREE.Object3dCamera | Camera} in use.
             * This property can also be used to filter out unwanted objects in ray-intersection tests when using {@link THREE.Raycaster | Raycaster}.
             * @defaultValue `new THREE.Layers()`
             */
            'layers',
            /**
             * Object gets rendered if `true`.
             * @defaultValue `true`
             */
            'visible',
            /**
             * Whether the object gets rendered into shadow map.
             * @defaultValue `false`
             */
            'castShadow',
            /**
             * Whether the material receives shadows.
             * @defaultValue `false`
             */
            'receiveShadow',
            /**
             * When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
             * If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.
             * @defaultValue `true`
             */
            'frustumCulled',
            /**
             * This value allows the default rendering order of {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}
             * objects to be overridden although opaque and transparent objects remain sorted independently.
             * @remarks When this property is set for an instance of {@link Group | Group}, all descendants objects will be sorted and rendered together.
             * Sorting is from lowest to highest renderOrder.
             * @defaultValue `0`
             */
            'renderOrder',
            /**
             * Array with object's animation clips.
             * @defaultValue `[].distinct()`
             */
            'animations',
            /**
             * An object that can be used to store custom data about the {@link Object3d}.
             * @remarks It should not hold references to _functions_ as these **will not** be cloned.
             * @default `{}`
             */
            'userData',
            /**
             * Custom depth material to be used when rendering to the depth map.
             * @remarks Can only be used in context of meshes.
             * When shadow-casting with a {@link THREE.DirectionalLight | DirectionalLight} or {@link THREE.SpotLight | SpotLight},
             * if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.
             * @defaultValue `undefined`
             */
            'customDepthMaterial',
            /**
             * Same as {@link customDepthMaterial}, but used with {@link THREE.Object3dPointLight | PointLight}.
             * @defaultValue `undefined`
             */
            'customDistanceMaterial',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Raycaster.d.ts
    face: [
        'a',
        'b',
        'c',
        'normal',
        'materialIndex',
        'normal',
        'midpoint',
        'area',
        'constant',
        'outside',
        'mark',
        'edge',
    ].distinct(),
    intersection: [
        /** Distance between the origin of the ray and the intersection */
        'distance',
        'distanceToRay',
        /** Point of intersection, in world coordinates */
        'point',
        'index',
        /** Intersected face */
        'face',
        /** Index of the intersected face */
        'faceIndex',
        /** The intersected object */
        'object',
        'uv',
        'uv1',
        'normal',
        /** The index number of the instance where the ray intersects the {@link THREE.InstancedMesh | InstancedMesh } */
        'instanceId',
        'pointOnLine',
        'batchId',
    ].distinct(),
    raycasterParameters: [
        'Mesh',
        'Line',
        'Line2',
        'LOD',
        'Points',
        'Sprite',
    ].distinct(),
    /**
     * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting | raycasting}
     * @remarks
     * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
     * @example
     * ```typescript
     * const raycaster = new THREE.Raycaster()
     * const pointer = new THREE.Vector2()
     *
     * function onPointerMove(event) {
     *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
     *     pointer.x = (event.clientX / window.innerWidth) * 2 - 1
     *     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
     * }
     *
     * function render() {
     *     // update the picking ray with the camera and pointer position
     *     raycaster.setFromCamera(pointer, camera)
     *     // calculate objects intersecting the picking ray
     *     const intersects = raycaster.intersectObjects(scene.children)
     *     for (let i = 0; i & lt; intersects.length; i++) {
     *         intersects[i].distinct().object.material.color.set(0xff0000)
     *     }
     *     renderer.render(scene, camera)
     * }
     * window.addEventListener('pointermove', onPointerMove)
     * window.requestAnimationFrame(render)
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
    raycaster: [
        /**
         * The {@link THREE.RaycasterRay | Ray} used for the raycasting.
         */
        'ray',
        /**
         * The near factor of the raycaster. This value indicates which objects can be discarded based on the distance.
         * This value shouldn't be negative and should be smaller than the far property.
         * @remarks Expects a `Float`
         * @defaultValue `0`
         */
        'near',
        /**
         * The far factor of the raycaster. This value indicates which objects can be discarded based on the distance.
         * This value shouldn't be negative and should be larger than the near property.
         * @remarks Expects a `Float`
         * @defaultValue `Infinity`
         */
        'far',
        /**
         * The camera to use when raycasting against view-dependent objects such as billboarded objects like {@link THREE.Sprites | Sprites}.
         * This field can be set manually or is set when calling  {@link setFromCamera}.
         * @defaultValue `null`
         */
        'camera',
        /**
         * Used by {@link Raycaster} to selectively ignore 3d objects when performing intersection tests.
         * The following code example ensures that only 3d objects on layer `1` will be honored by the instance of Raycaster.
         * ```
         * raycaster.layers.set( 1 )
         * object.layers.enable( 1 )
         * ```
         * @defaultValue `new THREE.Layers()` - See {@link THREE.Layers | Layers}.
         */
        'layers',
        /**
         * An data object where threshold is the precision of the {@link Raycaster} when intersecting objects, in world units.
         * @defaultValue `{ Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }`
         */
        'params',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\RenderTarget.d.ts
    renderTargetOptions: [
        'wrapS',
        'wrapT',
        'magFilter',
        'minFilter',
        'generateMipmaps', // true
        'format', // RGBAFormat
        'type', // UnsignedByteType
        'anisotropy', // 1
        'colorSpace',
        'internalFormat',
        'depthBuffer', // true
        'stencilBuffer', // false
        'resolveDepthBuffer', // true
        'resolveStencilBuffer', // true
        'depthTexture',
        /**
         * Defines the count of MSAA samples. Can only be used with WebGl 2. Default is **0**.
         * @default 0
         */
        'samples',
        'count',
    ].distinct(),
    renderTarget: [
        'width',
        'height',
        'depth',
        'scissor',
        /**
         * @default false
         */
        'scissorTest',
        'viewport',
        'textures',
        /**
         * @default true
         */
        'depthBuffer',
        /**
         * @default false
         */
        'stencilBuffer',
        /**
         * Defines whether the depth buffer should be resolved when rendering into a multisampled render target.
         * @default true
         */
        'resolveDepthBuffer',
        /**
         * Defines whether the stencil buffer should be resolved when rendering into a multisampled render target.
         * This property has no effect when {@link .resolveDepthBuffer} is set to `false`.
         * @default true
         */
        'resolveStencilBuffer',
        /**
         * @default null
         */
        'depthTexture',
        /**
         * Defines the count of MSAA samples. Can only be used with WebGl 2. Default is **0**.
         * @default 0
         */
        'samples',

        'texture',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Uniform.d.ts
    /**
     * Uniforms are global GlSL variables.
     * They are passed to shader programs.
     * @example
     * When declaring a uniform of a {@link THREE.ShaderMaterial | ShaderMaterial}, it is declared by value or by object.
     * ```typescript
     * uniforms: {
     *     time: {
     *         value: 1.0
     *     },
     *     resolution: new Uniform(new Vector2())
     * }
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform | WebGl2 / nodes / materials / instance / uniform}
     * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGpu / instance / uniform}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js | Source}
     */
    uniform: [
        /**
         * Current value of the uniform.
         */
        'value',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\UniformsGroup.d.ts
    /**
     * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGl2 / UBO}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
     */    
    get uniformsGroup() {
        return [...this.eventDispatcher,
            'id',
            'usage',
            'uniforms',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\DataUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\Earcut.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\ImageUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\PMREMGenerator.d.ts
    /**
     * This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture.
     * @remarks
     * This allows different levels of blur to be quickly accessed based on material roughness
     * Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution,
     * associated with higher roughness levels
     * In this way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation.
     * @remarks
     * Note: The minimum {@link THREE.MeshStandardMaterial | MeshStandardMaterial}'s roughness depends on the size of the provided texture
     * If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size.
     *
     * | texture size | minimum roughness  |
     * |--------------|--------------------|
     * | 16           | 0.21               |
     * | 32           | 0.15               |
     * | 64           | 0.11               |
     * | 128          | 0.076              |
     * | 256          | 0.054              |
     * | 512          | 0.038              |
     * | 1024         | 0.027              |
     *
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/PMREMGenerator.js | Source}
     */
    pmremGenerator: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\ShapeUtils.d.ts
    vec2: [
        'x',
        'y',
    ].distinct(),
    /**
     * A class containing utility functions for shapes.
     * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js | Source}
     */
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Curve.d.ts
    /**
     * An abstract base class for creating a {@link Curve} object that contains methods for interpolation
     * @remarks
     * For an array of Curves see {@link THREE.CurvePath | CurvePath}.
     * @remarks
     * This following curves inherit from THREE.Curve:
     *
     * **2d curves**
     *  - {@link THREE.ArcCurve}
     *  - {@link THREE.CubicBezierCurve}
     *  - {@link THREE.EllipseCurve}
     *  - {@link THREE.LineCurve}
     *  - {@link THREE.QuadraticBezierCurve}
     *  - {@link THREE.SplineCurve}
     *
     * **3d curves**
     *  - {@link THREE.CatmullRomCurve3}
     *  - {@link THREE.CubicBezierCurve3}
     *  - {@link THREE.LineCurve3}
     *  - {@link THREE.QuadraticBezierCurve3}
     *
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Curve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Curve.js | Source}
     */    
    get curve() {
        return [
            /**
             * This value determines the amount of divisions when calculating the cumulative segment lengths of a {@link Curve}
             * via {@link .getLengths}.
             * To ensure precision when using methods like {@link .getSpacedPoints}, it is recommended to increase {@link .arcLengthDivisions} if the {@link Curve} is very large.
             * @defaultValue `200`
             * @remarks Expects a `Integer`
             */
            'arcLengthDivisions',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\CurvePath.d.ts
    /**
     * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
     * @remarks
     * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js | Source}
     */
    curvePath: [
        /**
         * The array of {@link Curve | Curves}.
         * @defaultValue `[].distinct()`
         */
        'curves',
        /**
         * Whether or not to automatically close the path.
         * @defaultValue false
         */
        'autoClose',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Interpolations.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Path.d.ts
    /**
     * A 2d {@link Path} representation.
     * @remarks
     * The class provides methods for creating paths and contours of 2d shapes similar to the 2d Canvas API.
     * @example
     * ```typescript
     * const {@link Path} = new THREE.Path()
     * path.lineTo(0, 0.8)
     * path.quadraticCurveTo(0, 1, 0.2, 1)
     * path.lineTo(1, 1)
     * const points = path.getPoints()
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({
     *     color: 0xffffff
     * })
     * const line = new THREE.Line(geometry, material)
     * scene.add(line)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Path | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Path.js | Source}
     */    
    get path() {
        return [...this.curvePath,
            /**
             * The current offset of the path. Any new {@link THREE.Curve | Curve} added will start here.
             * @defaultValue `new THREE.Vector2()`
             */
            'currentPoint',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\Shape.d.ts
    /**
     * Defines an arbitrary 2d {@link Shape} plane using paths with optional holes
     * @remarks
     * It can be used with {@link THREE.ExtrudeGeometry | ExtrudeGeometry}, {@link THREE.ShapeGeometry | ShapeGeometry}, to get points, or to get triangulated faces.
     * @example
     * ```typescript
     * const heartShape = new THREE.Shape()
     * heartShape.moveTo(25, 25)
     * heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0)
     * heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35)
     * heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95)
     * heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35)
     * heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0)
     * heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25)
     * const extrudeSettings = {
     *     depth: 8,
     *     bevelEnabled: true,
     *     bevelSegments: 2,
     *     steps: 2,
     *     bevelSize: 1,
     *     bevelThickness: 1
     * }
     * const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings)
     * const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial())
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_shapes | geometry / shapes }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes | geometry / extrude / shapes }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes2 | geometry / extrude / shapes2 }
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Shape | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Shape.js | Source}
     */    
    get shape() {
        return [...this.path,
            /**
             * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
             * @remarks This gets automatically assigned and shouldn't be edited.
             */
            'uuid',
            /**
             * An array of {@link Path | paths} that define the holes in the shape.
             * @defaultValue `[].distinct()`
             */
            'holes',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\core\ShapePath.d.ts
    /**
     * This class is used to convert a series of shapes to an array of {@link THREE.Path | Path's},
     * for example an SVG shape to a path.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js | Source}
     */
    shapePath: [
        /**
         * Array of {@link THREE.Path | Path's}s.
         * @defaultValue `[].distinct()`
         */
        'subPaths',
        /**
         * The current {@link THREE.Path | Path} that is being generated.
         * @defaultValue `null`
         */
        /**
         * {@link THREE.Color | Color} of the shape, by default set to white _(0xffffff)_.
         * @defaultValue `new THREE.Color()`
         */
        'color',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\ArcCurve.d.ts
    /**
     * Alias for {@link THREE.EllipseCurve | EllipseCurve}.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js | Source}
     */    
    get arcCurve() {
        return [...this.ellipseCurve,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CatmullRomCurve3.d.ts
    /**
     * Create a smooth **3d** spline curve from a series of points using the {@link https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline | Catmull-Rom} algorithm.
     * @example
     * ```typescript
     * //Create a closed wavey loop
     * const curve = new THREE.CatmullRomCurve3([
     * new THREE.Vector3(-10, 0, 10),
     * new THREE.Vector3(-5, 5, 5),
     * new THREE.Vector3(0, 0, 0),
     * new THREE.Vector3(5, -5, 5),
     * new THREE.Vector3(10, 0, 10)].distinct())
     * const points = curve.getPoints(50)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({
     *     color: 0xff0000
     * })
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGl / geometry / extrude / splines}
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CatmullRomCurve3.js | Source}
     */    
    get catmullRomCurve3() {
        return [...this.curve,
            /**
             * The curve will loop back onto itself when this is true.
             * @defaultValue `false`
             */
            'closed',
            /**
             * The array of {@link THREE.Vector3 | Vector3} points that define the curve.
             * @remarks It needs at least two entries.
             * @defaultValue `[].distinct()`
             */
            'points',
            /**
             * Possible values are `centripetal`, `chordal` and `catmullrom`.
             * @defaultValue `centripetal`
             */
            'curveType',
            /**
             * When {@link .curveType} is `catmullrom`, defines catmullrom's tension.
             * @remarks Expects a `Float`
             */
            'tension',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CubicBezierCurve.d.ts
    /**
     * Create a smooth **2d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve},
     * defined by a start point, endpoint and two control points.
     * @example
     * ```typescript
     * const curve = new THREE.CubicBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 15),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0))
     * const points = curve.getPoints(50)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({
     *     color: 0xff0000
     * })
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
     */    
    get cubicBezierCurve() {
        return [...this.curve,
            /**
             * The starting point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v0',
            /**
             * The first control point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v1',
            /**
             * The second control point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v2',
            /**
             * The ending point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v3',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CubicBezierCurve3.d.ts
    /**
     * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve},
     * defined by a start point, endpoint and two control points.
     * @example
     * ```typescript
     * const curve = new THREE.CubicBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 15),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0))
     * const points = curve.getPoints(50)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({
     *     color: 0xff0000
     * })
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
     */    
    get cubicBezierCurve3() {
        return [...this.curve,
            /**
           * The starting point.
           * @defaultValue `new THREE.Vector3()`.
           */
            'v0',
            /**
             * The first control point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v1',
            /**
             * The second control point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v2',
            /**
             * The ending point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v3',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\Curves.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\EllipseCurve.d.ts
    /**
     * Creates a 2d curve in the shape of an ellipse
     * @remarks
     * Setting the {@link xradius} equal to the {@link yRadius} will result in a circle.
     * @example
     * ```typescript
     * const curve = new THREE.EllipseCurve(
     *   0,  0,  // ax, aY
     *   10, 10, // xradius, yRadius
     *   0,  2 * Math.PI, // aStartAngle, aEndAngle
     *   false,  // aClockwise
     *   0       // aRotation
     *   )
     * const points = curve.getPoints(50)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({ color: 0xff0000 })
     * // Create the final object to add to the scene
     * const ellipse = new THREE.Line(geometry, material)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/EllipseCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/EllipseCurve.js | Source}
     */    
    get ellipseCurve() {
            return [...this.curve,
            /**
             * The X center of the ellipse.
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'aX',
            /**
             * The Y center of the ellipse.
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'aY',
            /**
             * The radius of the ellipse in the x direction.
             * @defaultValue `1`
             */
            'xradius',
            /**
             * The radius of the ellipse in the y direction.
             * @defaultValue `1`
             */
            'yRadius',
            /**
             * The start angle of the curve in radians starting from the middle right side.
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'aStartAngle',
            /**
             * The end angle of the curve in radians starting from the middle right side.
             * @remarks Expects a `Float`
             * @defaultValue `2 * Math.PI`
             */
            'aEndAngle',
            /**
             * Whether the ellipse is drawn clockwise.
             * @defaultValue `false``
             */
            'aClockwise',
            /**
             * The rotation angle of the ellipse in radians, counterclockwise from the positive X axis (optional).
             * @remarks Expects a `Float`
             * @defaultValue `0`
             */
            'aRotation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve.d.ts
    /**
     * A curve representing a **2d** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js | Source}
     */    
    get lineCurve() {
        return [...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v1',
            /**
             * The end point
             * @defaultValue `new THREE.Vector2()`
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\LineCurve3.d.ts
    /**
     * A curve representing a **3d** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js | Source}
     */    
    get lineCurve3() {
        return [...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v1',
            /**
             * The end point.
             * @defaultValue `new THREE.Vector3()`.
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve.d.ts
    /**
     * Create a smooth **2d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
     * defined by a start point, end point and a single control point.
     * @example
     * ```typescript
     * const curve = new THREE.QuadraticBezierCurve(
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(20, 15),
     * new THREE.Vector2(10, 0))
     * const points = curve.getPoints(50)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({
     *     color: 0xff0000
     * })
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve.js | Source}
     */    
    get quadraticBezierCurve() {
        return [...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v0',
            /**
             * The control point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v1',
            /**
             * The end point.
             * @defaultValue `new THREE.Vector2()`
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve3.d.ts
    /**
     * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
     * defined by a start point, end point and a single control point.
     * @example
     * ```typescript
     * const curve = new THREE.QuadraticBezierCurve3(
     * new THREE.Vector3(-10, 0, 0),
     * new THREE.Vector3(20, 15, 0),
     * new THREE.Vector3(10, 0, 0))
     * const points = curve.getPoints(50)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({
     *     color: 0xff0000
     * })
     * // Create the final object to add to the scene
     * const curveObject = new THREE.Line(geometry, material)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js | Source}
     */    
    get quadraticBezierCurve3() {
        return [...this.curve,
            /**
             * The start point.
             * @defaultValue `new THREE.Vector3()`
             */
            'v0',
            /**
             * The control point.
             * @defaultValue `new THREE.Vector3()`
             */
            'v1',
            /**
             * The end point.
             * @defaultValue `new THREE.Vector3()`
             */
            'v2',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\SplineCurve.d.ts
    /**
     * Create a smooth **2d** spline curve from a series of points.
     * @example
     * ```typescript
     * // Create a sine-like wave
     * const curve = new THREE.SplineCurve([
     * new THREE.Vector2(-10, 0),
     * new THREE.Vector2(-5, 5),
     * new THREE.Vector2(0, 0),
     * new THREE.Vector2(5, -5),
     * new THREE.Vector2(10, 0)].distinct())
     * const points = curve.getPoints(50)
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const material = new THREE.LineBasicMaterial({
     *     color: 0xff0000
     * })
     * // Create the final object to add to the scene
     * const splineObject = new THREE.Line(geometry, material)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/SplineCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/SplineCurve.js | Source}
     */    
    get splineCurve() {
        return [...this.curve,
            /**
             * The array of {@link THREE.Vector2 | Vector2} points that define the curve.
             * @defaultValue `[].distinct()`
             */
            'points',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\BoxGeometry.d.ts
    /**
     * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'
     * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0x00ff00
     * })
     * const cube = new THREE.Mesh(geometry, material)
     * scene.add(cube)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js | Source}
     */    
    get boxGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\CapsuleGeometry.d.ts
    /**
     * {@link CapsuleGeometry} is a geometry class for a capsule with given radii and height
     * @remarks It is constructed using a lathe.
     * @example
     * ```typescript
     * const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0x00ff00
     * })
     * const capsule = new THREE.Mesh(geometry, material)
     * scene.add(capsule)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CapsuleGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CapsuleGeometry.js | Source}
     */    
    get capsuleGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\CircleGeometry.d.ts
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
     *     color: 0xffff00
     * })
     * const circle = new THREE.Mesh(geometry, material)
     * scene.add(circle)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CircleGeometry.js | Source}
     */    
    get circleGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ConeGeometry.d.ts
    /**
     * A class for generating cone geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.ConeGeometry(5, 20, 32)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00
     * })
     * const cone = new THREE.Mesh(geometry, material)
     * scene.add(cone)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ConeGeometry.js | Source}
     */    
    get coneGeometry() {
        return [...this.cylinderGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\CylinderGeometry.d.ts
    /**
     * A class for generating cylinder geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00
     * })
     * const cylinder = new THREE.Mesh(geometry, material)
     * scene.add(cylinder)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CylinderGeometry.js | Source}
     */    
    get cylinderGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\DodecahedronGeometry.d.ts
    /**
     * A class for generating a dodecahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js | Source}
     */    
    get dodecahedronGeometry() {
        return [...this.polyhedronGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\EdgesGeometry.d.ts
    /**
     * This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry | geometry}.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(100, 100, 100)
     * const edges = new THREE.EdgesGeometry(geometry)
     * const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
     *     color: 0xffffff
     * }))
     * scene.add(line)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/EdgesGeometry.js | Source}
     */    
    get edgesGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ExtrudeGeometry.d.ts
    extrudeGeometryOptions: [
        /**
         * Number of points on the curves.
         * Expects a `Integer`.
         * @defaultValue `12`
         */
        'curveSegments',
        /**
         * Number of points used for subdividing segments along the depth of the extruded spline.
         * @defaultValue `1`
         */
        'steps',
        /**
         * Depth to extrude the shape.
         * @defaultValue `1`
         */
        'depth',
        /**
         * Turn on bevel. Applying beveling to the shape.
         * @defaultValue `true`
         */
        'bevelEnabled',
        /**
         * How deep into the original shape the bevel goes.
         * Expects a `Float`.
         * @defaultValue `0.2`
         */
        'bevelThickness',
        /**
         * Distance from the shape outline that the bevel extends
         * Expects a `Float`.
         * @defaultValue `bevelThickness - 0.1`
         */
        'bevelSize',
        /**
         * Distance from the shape outline that the bevel starts.
         * Expects a `Float`.
         * @defaultValue `0`
         */
        'bevelOffset',
        /**
         * Number of bevel layers/segments.
         * Expects a `Integer`.
         * @defaultValue `3`
         */
        'bevelSegments',
        /**
         * A 3d spline path along which the shape should be extruded.
         * @remarks Bevels not supported for path extrusion.
         */
        'extrudePath',
        /**
         * A object that provides Uv generator functions.
         */
        'UvGenerator',
    ].distinct(),
    uvGenerator: [
    ].distinct(),
    /**
     * Creates extruded geometry from a path shape.
     * @remarks This object extrudes a 2d shape to a 3d geometry.
     * @remarks When creating a Mesh with this geometry, if you'd like to have a separate material used for its face and its extruded sides, you can use an array of materials
     * @remarks The first material will be applied to the face; the second material will be applied to the sides.
     * @example
     * ```typescript
     * const length = 12, width = 8
     * const shape = new THREE.Shape()
     * shape.moveTo(0, 0)
     * shape.lineTo(0, width)
     * shape.lineTo(length, width)
     * shape.lineTo(length, 0)
     * shape.lineTo(0, 0)
     * const extrudeSettings = {
     *     steps: 2,
     *     depth: 16,
     *     bevelEnabled: true,
     *     bevelThickness: 1,
     *     bevelSize: 1,
     *     bevelOffset: 0,
     *     bevelSegments: 1
     * }
     * const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0x00ff00
     * })
     * const mesh = new THREE.Mesh(geometry, material)
     * scene.add(mesh)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ExtrudeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js | Source}
     */    
    get extrudeGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\Geometries.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\IcosahedronGeometry.d.ts
    /**
     * A class for generating an icosahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js | Source}
     */    
    get icosahedronGeometry() {
        return [...this.polyhedronGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\LatheGeometry.d.ts
    /**
     * Creates meshes with axial symmetry like vases
     * @remarks
     * The lathe rotates around the Y axis.
     * @example
     * ```typescript
     * const points = [].distinct()
     * for (let i = 0; i & lt; 10; i++) {
     *     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2))
     * }
     * const geometry = new THREE.LatheGeometry(points)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00
     * })
     * const lathe = new THREE.Mesh(geometry, material)
     * scene.add(lathe)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js | Source}
     */    
    get latheGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\OctahedronGeometry.d.ts
    /**
     * A class for generating an octahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js | Source}
     */    
    get octahedronGeometry() {
        return [...this.polyhedronGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PlaneGeometry.d.ts
    /**
     * A class for generating plane geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.PlaneGeometry(1, 1)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00,
     *     side: THREE.DoubleSide
     * })
     * const plane = new THREE.Mesh(geometry, material)
     * scene.add(plane)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js | Source}
     */    
    get planeGeometry() {
        return [...this.bufferGeometry, ...this.parametricGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PolyhedronGeometry.d.ts
    /**
     * A polyhedron is a solid in three dimensions with flat faces
     * @remarks
     * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
     * This class is used by {@link THREE.DodecahedronGeometry | DodecahedronGeometry}, {@link THREE.IcosahedronGeometry | IcosahedronGeometry},
     * {@link THREE.OctahedronGeometry | OctahedronGeometry}, and {@link THREE.TetrahedronGeometry | TetrahedronGeometry} to generate their respective geometries.
     * @example
     * ```typescript
     * const verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, ].distinct()
     * const indicesOfFaces = [
     * 2, 1, 0, 0, 3, 2,
     * 0, 4, 7, 7, 3, 0,
     * 0, 1, 5, 5, 4, 0,
     * 1, 2, 6, 6, 5, 1,
     * 2, 3, 7, 7, 6, 2,
     * 4, 5, 6, 6, 7, 4].distinct()
     * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js | Source}
     */    
    get polyhedronGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\RingGeometry.d.ts
    /**
     * A class for generating a two-dimensional ring geometry.
     * @example
     * ```typescript
     * const geometry = new THREE.RingGeometry(1, 5, 32)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00,
     *     side: THREE.DoubleSide
     * })
     * const mesh = new THREE.Mesh(geometry, material)
     * scene.add(mesh)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/RingGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/RingGeometry.js | Source}
     */    
    get ringGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ShapeGeometry.d.ts
    /**
     * Creates an one-sided polygonal geometry from one or more path shapes.
     * @example
     * ```typescript
     * const x = 0, y = 0
     * const heartShape = new THREE.Shape()
     * heartShape.moveTo(x + 5, y + 5)
     * heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
     * heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
     * heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
     * heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
     * heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
     * heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)
     * const geometry = new THREE.ShapeGeometry(heartShape)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0x00ff00
     * })
     * const mesh = new THREE.Mesh(geometry, material)
     * scene.add(mesh)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ShapeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ShapeGeometry.js | Source}
     */    
    get shapeGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\SphereGeometry.d.ts
    /**
     * A class for generating sphere geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.SphereGeometry(15, 32, 16)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00
     * })
     * const sphere = new THREE.Mesh(geometry, material)
     * scene.add(sphere)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js | Source}
     */    
    get sphereGeometry() {
        return [...this.bufferGeometry, ...this.parametricGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TetrahedronGeometry.d.ts
    /**
     * A class for generating a tetrahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js | Source}
     */    
    get tetrahedronGeometry() {
        return [...this.polyhedronGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusGeometry.d.ts
    /**
     * A class for generating torus geometries.
     * @example
     * ```typescript
     * const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00
     * })
     * const torus = new THREE.Mesh(geometry, material)
     * scene.add(torus)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js | Source}
     */    
    get torusGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusKnotGeometry.d.ts
    /**
     * Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q
     * If p and q are not coprime, the result will be a torus link.
     * @example
     * ```typescript
     * const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00
     * })
     * const torusKnot = new THREE.Mesh(geometry, material)
     * scene.add(torusKnot)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusKnotGeometry.js | Source}
     */    
    get torusKnotGeometry() {
        return [...this.bufferGeometry, ...this.tubeGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TubeGeometry.d.ts
    /**
     * Creates a tube that extrudes along a 3d curve.
     * @example
     * ```typescript
     * class CustomSinCurve extends THREE.Curve {
     *     constructor(scale = 1) {
     *         super()
     *         this.scale = scale
     *     }
     *     getPoint(t, optionalTarget = new THREE.Vector3()) {
     *         const tx = t * 3 - 1.5
     *         const ty = Math.sin(2 * Math.PI * t)
     *         const tz = 0
     *         return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale)
     *     }
     * }
     * const path = new CustomSinCurve(10)
     * const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0x00ff00
     * })
     * const mesh = new THREE.Mesh(geometry, material)
     * scene.add(mesh)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TubeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js | Source}
     */    
    get tubeGeometry() {
        return [...this.bufferGeometry, ...this.parametricGeometry,
            /**
             * An array of {@link THREE.Vector3 | Vector3} tangents
             */
            'tangents',
            /**
             * An array of {@link THREE.Vector3 | Vector3} normals
             */
            'normals',
            /**
             * An array of {@link THREE.Vector3 | Vector3} binormals
             */
            'binormals',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\WireframeGeometry.d.ts
    /**
     * This can be used as a helper object to view a {@link BufferGeometry | geometry} as a wireframe.
     * @example
     * ```typescript
     * const geometry = new THREE.SphereGeometry(100, 100, 100)
     * const wireframe = new THREE.WireframeGeometry(geometry)
     * const line = new THREE.LineSegments(wireframe)
     * line.material.depthTest = false
     * line.material.opacity = 0.25
     * line.material.transparent = true
     * scene.add(line)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js | Source}
     */    
    get wireframeGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\ArrowHelper.d.ts
    /**
     * An 3d arrow object for visualizing directions.
     * @example
     * ```typescript
     * const dir = new THREE.Vector3(1, 2, 0)
     * //normalize the direction vector (convert to vector of length 1)
     * dir.normalize()
     * const origin = new THREE.Vector3(0, 0, 0)
     * const length = 1
     * const hex = 0xffff00
     * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex)
     * scene.add(arrowHelper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh | WebGl / shadowmesh}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js | Source}
     */    
    get arrowHelper() {
        return [...this.object3d,
            /**
             * Contains the line part of the arrowHelper.
             */
            'line',
            /**
             * Contains the cone part of the arrowHelper.
             */
            'cone',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\AxesHelper.d.ts
    /**
     * An axis object to visualize the 3 axes in a simple way.
     * @remarks
     * The X axis is red
     * The Y axis is green
     * The Z axis is blue.
     * @example
     * ```typescript
     * const {@link AxesHelper} = new THREE.AxesHelper(5)
     * scene.add(axesHelper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression | WebGl / buffergeometry / compression}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex | WebGl / geometry / convex}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGl / loader / nrrd}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js | Source}
     */    
    get axesHelper() {
        return [...this.lineSegments,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\Box3Helper.d.ts
    /**
     * Helper object to visualize a {@link THREE.Box3 | Box3}.
     * @example
     * ```typescript
     * const box = new THREE.Box3()
     * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3))
     * const helper = new THREE.Box3Helper(box, 0xffff00)
     * scene.add(helper)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js | Source}
     */    
    get box3Helper() {
        return [...this.lineSegments,
            /**
             * The Box3 being visualized.
             */
            'box',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\BoxHelper.d.ts
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
     * scene.add(box)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGl / loader / nrrd}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_drawrange | WebGl / buffergeometry / drawrange}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/BoxHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/BoxHelper.js | Source}
     */    
    get boxHelper() {
        return [...this.lineSegments,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\CameraHelper.d.ts
    /**
     * This helps with visualizing what a camera contains in its frustum
     * @remarks
     * It visualizes the frustum of a camera using a {@link THREE.LineSegments | LineSegments}.
     * @remarks {@link CameraHelper} must be a child of the scene.
     * @example
     * ```typescript
     * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
     * const helper = new THREE.CameraHelper(camera)
     * scene.add(helper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_camera | WebGl / camera}
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGl / extrude / splines}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/CameraHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/CameraHelper.js | Source}
     */    
    get cameraHelper() {
        return [...this.lineSegments,
            /**
             * The camera being visualized.
             */
            'camera',
            /**
             * This contains the points used to visualize the camera.
             */
            'pointMap',
            /**
             * Reference to the {@link THREE.Camera.matrixWorld | camera.matrixWorld}.
             */
            'matrix',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\DirectionalLightHelper.d.ts
    /**
     * Helper object to assist with visualizing a {@link THREE.DirectionalLight | DirectionalLight}'s effect on the scene
     * @remarks
     * This consists of plane and a line representing the light's position and direction.
     * @example
     * ```typescript
     * const light = new THREE.DirectionalLight(0xFFFFFF)
     * scene.add(light)
     *
     * const helper = new THREE.DirectionalLightHelper(light, 5)
     * scene.add(helper)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js | Source}
     */    
    get directionalLightHelper() {
        return [...this.object3d,
            /**
             * Contains the line mesh showing the location of the directional light.
             */
            'lightPlane',
            /**
             * Reference to the {@link THREE.DirectionalLight | directionalLight} being visualized.
             */
            'light',
            /**
             * Reference to the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
             */
            'matrix',
            /**
             * Is set to `false`, as the helper is using the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
             * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
             * @defaultValue `false`.
             */
            'matrixAutoUpdate',
            /**
             * The color parameter passed in the constructor.
             * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
             * @defaultValue `undefined`
             */
            'color',
            'targetLine', // TODO: Double check if this need to be exposed or not.
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\GridHelper.d.ts
    /**
     * The {@link GridHelper} is an object to define grids
     * @remarks
     * Grids are two-dimensional arrays of lines.
     * @example
     * ```typescript
     * const size = 10
     * const divisions = 10
     * const {@link GridHelper} = new THREE.GridHelper(size, divisions)
     * scene.add(gridHelper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/GridHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/GridHelper.js | Source}
     */    
    get gridHelper() {
        return [...this.lineSegments,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\HemisphereLightHelper.d.ts
    /**
     * Creates a visual aid consisting of a spherical {@link THREE.Mesh | Mesh} for a {@link THREE.HemisphereLight | HemisphereLight}.
     * @example
     * ```typescript
     * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
     * const helper = new THREE.HemisphereLightHelper(light, 5)
     * scene.add(helper)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/HemisphereLightHelper.js | Source}
     */    
    get hemisphereLightHelper() {
        return [...this.object3d,
            /**
             * Reference to the HemisphereLight being visualized.
             */
            'light',
            /**
             * Reference to the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
             */
            'matrix',
            /**
             * Is set to `false`, as the helper is using the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
             * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
             * @defaultValue `false`.
             */
            'matrixAutoUpdate',
            'material', // TODO: Double check if this need to be exposed or not.
            /**
             * The color parameter passed in the constructor.
             * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
             * @defaultValue `undefined`
             */
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PlaneHelper.d.ts
    /**
     * Helper object to visualize a {@link THREE.Plane | Plane}.
     * @example
     * ```typescript
     * const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3)
     * const helper = new THREE.PlaneHelper(plane, 1, 0xffff00)
     * scene.add(helper)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PlaneHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PlaneHelper.js | Source}
     */    
    get planeHelper() {
        return [...this.lineSegments,
            /**
             * The {@link Plane | plane} being visualized.
             */
            'plane',
            /**
             * The side lengths of plane helper.
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'size',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PointLightHelper.d.ts
    /**
     * This displays a helper object consisting of a spherical {@link THREE.Mesh | Mesh} for visualizing a {@link THREE.PointLight | PointLight}.
     * @example
     * ```typescript
     * const pointLight = new THREE.PointLight(0xff0000, 1, 100)
     * pointLight.position.set(10, 10, 10)
     * scene.add(pointLight)
     * const sphereSize = 1
     * const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize)
     * scene.add(pointLightHelper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PointLightHelper.js | Source}
     */    
    get pointLightHelper() {
        return [...this.object3d,
            /**
             * The {@link THREE.PointLight | PointLight} that is being visualized.
             */
            'light',
            /**
             * Reference to the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
             */
            'matrix',
            /**
             * The color parameter passed in the constructor.
             * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
             * @defaultValue `undefined`
             */
            'color',
            /**
             * Is set to `false`, as the helper is using the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
             * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
             * @defaultValue `false`.
             */
            'matrixAutoUpdate',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\PolarGridHelper.d.ts
    /**
     * The {@link PolarGridHelper} is an object to define polar grids
     * @remarks
     * Grids are two-dimensional arrays of lines.
     * @example
     * ```typescript
     * const radius = 10
     * const sectors = 16
     * const rings = 8
     * const divisions = 64
     * const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions)
     * scene.add(helper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PolarGridHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PolarGridHelper.js | Source}
     */    
    get polarGridHelper() {
        return [...this.lineSegments,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SkeletonHelper.d.ts
    /**
     * A helper object to assist with visualizing a {@link Skeleton | Skeleton}
     * @remarks
     * The helper is rendered using a {@link LineBasicMaterial | LineBasicMaterial}.
     * @example
     * ```typescript
     * const helper = new THREE.SkeletonHelper(skinnedMesh)
     * scene.add(helper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | WebGl / animation / skinning / blending}
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | WebGl / animation / skinning / morph}
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_bvh | WebGl / loader / bvh }
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SkeletonHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SkeletonHelper.js | Source}
     */    
    get skeletonHelper() {
        return [...this.lineSegments,
            /**
             * The list of bones that the helper renders as {@link Line | Lines}.
             */
            'bones',
            /**
             * The object passed in the constructor.
             */
            'root',
            /**
             * Reference to the {@link THREE.Object3d.matrixWorld | root.matrixWorld}.
             */
            'matrix',
            /**
             * Is set to `false`, as the helper is using the {@link THREE.Object3d.matrixWorld | root.matrixWorld}.
             * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
             * @defaultValue `false`.
             */
            'matrixAutoUpdate',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SpotLightHelper.d.ts
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
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | WebGl/ lights / spotlights }
     * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SpotLightHelper.js | Source}
     */    
    get spotLightHelper() {
        return [...this.object3d,
            /**
             * {@link THREE.LineSegments | LineSegments} used to visualize the light.
             */
            'cone',
            /**
             * Reference to the {@link THREE.SpotLight | SpotLight} being visualized.
             */
            'light',
            /**
             * Reference to the spotLight's {@link Object3d.matrixWorld | matrixWorld}.
             */
            'matrix',
            /**
             * The color parameter passed in the constructor.
             * If this is changed, the helper's color will update the next time {@link SpotLightHelper.update | update} is called.
             * @defaultValue `undefined`
             */
            'color',
            /**
             * Is set to `false`, as the helper is using the {@link THREE.Light.matrixWorld | light.matrixWorld}.
             * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
             * @defaultValue `false`.
             */
            'matrixAutoUpdate',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\AmbientLight.d.ts
    /**
     * This light globally illuminates all objects in the scene equally.
     * @remarks This light cannot be used to cast shadows as it does not have a direction.
     * @example
     * ```typescript
     * const light = new THREE.AmbientLight(0x404040); // soft white light
     * scene.add(light)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js | Source}
     */    
    get ambientLight() {
        return [...this.light,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\DirectionalLight.d.ts
    /**
     * A light that gets emitted in a specific direction
     * @remarks
     * This light will behave as though it is infinitely far away and the rays produced from it are all parallel
     * The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.
     * A common point of confusion for directional lights is that setting the rotation has no effect
     * @remarks
     * This is because three.js's {@link DirectionalLight} is the equivalent to what is often called a 'Target Direct Light' in other applications.
     * This means that its direction is calculated as pointing from the light's {@link THREE.Object3d.position | position} to the {@link THREE.DirectionalLight.target | target}'s
     * position (as opposed to a 'Free Direct Light' that just has a rotation component).
     * See the {@link THREE.DirectionalLight.target | target} property below for details on updating the target.
     * @example
     * ```typescript
     * // White directional light at half intensity shining from the top.
     * const {@link DirectionalLight} = new THREE.DirectionalLight(0xffffff, 0.5)
     * scene.add(directionalLight)
     * ```
     * @see Example: {@link https://threejs.org/examples/#misc_controls_fly | controls / fly }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | geometry / extrude / splines }
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_bumpmap | materials / bumpmap }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/DirectionalLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js | Source}
     */    
    get directionalLight() {
        return [...this.light,
            /**
             * Whether the object gets rendered into shadow map.
             * @remarks
             * If set to `true` light will cast dynamic shadows.
             * **Warning**: This is expensive and requires tweaking to get shadows looking right.
             * @see {@link THREE.DirectionalLightShadow | DirectionalLightShadow} for details.
             * @defaultValue `false`
             */
            'castShadow',
            /**
             * A {@link THREE.DirectionalLightShadow | DirectionalLightShadow} used to calculate shadows for this light.
             * @defaultValue `new THREE.DirectionalLightShadow()`
             */
            'shadow',
            /**
             * The {@link DirectionalLight} points from its {@link DirectionalLight.position | position} to target.position.
             * @remarks **Note**: For the target's position to be changed to anything other than the default,
             * it must be added to the {@link THREE.Scene | scene} using
             * ```typescript
             * Scene.add( light.target )
             * ```
             * This is so that the target's {@link THREE.Object3d.matrixWorld | matrixWorld} gets automatically updated each frame.
             *
             * It is also possible to set the target to be another object in the scene (anything with a {@link THREE.Object3d.position | position} property),
             * like so:
             * ```typescript
             * const targetObject = new THREE.Object3d()
             * scene.add(targetObject)
             * light.target = targetObject
             * ```
             * The {@link DirectionalLight} will now track the target object.
             * @defaultValue `new THREE.Object3d()` at _(0, 0, 0)_
             */
            'target',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\DirectionalLightShadow.d.ts
    /**
     * This is used internally by {@link DirectionalLight | DirectionalLights} for calculating shadows.
     * Unlike the other shadow classes, this uses an {@link THREE.OrthographicCamera | OrthographicCamera} to calculate the shadows,
     * rather than a {@link THREE.PerspectiveCamera | PerspectiveCamera}
     * @remarks
     * This is because light rays from a {@link THREE.DirectionalLight | DirectionalLight} are parallel.
     * @example
     * ```typescript
     * //Create a WebGlRenderer and turn on shadows in the renderer
     * const renderer = new THREE.WebGlRenderer()
     * renderer.shadowMap.enabled = true
     * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
     * //Create a DirectionalLight and turn on shadows for the light
     * const light = new THREE.DirectionalLight(0xffffff, 1)
     * light.position.set(0, 1, 0); //default; light shining from top
     * light.castShadow = true; // default false
     * scene.add(light)
     * //Set up shadow properties for the light
     * light.shadow.mapSize.width = 512; // default
     * light.shadow.mapSize.height = 512; // default
     * light.shadow.camera.near = 0.5; // default
     * light.shadow.camera.far = 500; // default
     * //Create a sphere that cast shadows (but does not receive them)
     * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32)
     * const sphereMaterial = new THREE.MeshStandardMaterial({
     *     color: 0xff0000
     * })
     * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
     * sphere.castShadow = true; //default is false
     * sphere.receiveShadow = false; //default
     * scene.add(sphere)
     * //Create a plane that receives shadows (but does not cast them)
     * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32)
     * const planeMaterial = new THREE.MeshStandardMaterial({
     *     color: 0x00ff00
     * })
     * const plane = new THREE.Mesh(planeGeometry, planeMaterial)
     * plane.receiveShadow = true
     * scene.add(plane)
     * //Create a helper for the shadow camera (optional)
     * const helper = new THREE.CameraHelper(light.shadow.camera)
     * scene.add(helper)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/DirectionalLightShadow | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLightShadow.js | Source}
     */    
    get directionalLightShadow() {
        return [...this.lightShadow,
            /**
             * The light's view of the world.
             * @remarks This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
             * @defaultValue is an {@link THREE.OrthographicCamera | OrthographicCamera} with
             * {@link OrthographicCamera.left | left} and {@link OrthographicCamera.bottom | bottom} set to -5,
             * {@link OrthographicCamera.right | right} and {@link OrthographicCamera.top | top} set to 5,
             * the {@link OrthographicCamera.near | near} clipping plane at 0.5 and
             * the {@link OrthographicCamera.far | far} clipping plane at 500.
             */
            'camera',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\HemisphereLight.d.ts
    /**
     * A light source positioned directly above the scene, with color fading from the sky color to the ground color.
     * @remarks This light cannot be used to cast shadows.
     * @example
     * ```typescript
     * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
     * scene.add(light)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_hemisphere | lights / hemisphere }
     * @see Example: {@link https://threejs.org/examples/#misc_controls_pointerlock | controls / pointerlock }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_kinematics | loader / collada / kinematics }
     * @see Example: {@link https://threejs.org/examples/#webgl_loader_stl | loader / stl }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js | Source}
     */    
    get hemisphereLight() {
        return [...this.light,
            /**
             * The light's sky color, as passed in the constructor.
             * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
             */
            'color',
            /**
             * The light's ground color, as passed in the constructor.
             * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
             */
            'groundColor',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\Light.d.ts
    /**
     * Abstract base class for lights.
     * @remarks All other light types inherit the properties and methods described here.
     */    
    get light() {
        return [...this.object3d,
            /**
             * Color of the light. \
             * @defaultValue `new THREE.Color(0xffffff)` _(white)_.
             */
            'color',
            /**
             * The light's intensity, or strength.
             * The units of intensity depend on the type of light.
             * @defaultValue `1`
             */
            'intensity',
            /**
             * A {@link THREE.LightShadow | LightShadow} used to calculate shadows for this light.
             * @remarks Available only on Light's that support shadows.
             */
            'shadow',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\LightProbe.d.ts
    /**
     * Light probes are an alternative way of adding light to a 3d scene.
     * @remarks
     * Unlike classical light sources (e.g
     * directional, point or spot lights), light probes do not emit light
     * Instead they store information about light passing through 3d space
     * During rendering, the light that hits a 3d object is approximated by using the data from the light probe.
     * Light probes are usually created from (radiance) environment maps
     * The class {@link THREE.LightProbeGenerator | LightProbeGenerator} can be used to create light probes from
     * instances of {@link THREE.CubeTexture | CubeTexture} or {@link THREE.WebGlCubeRenderTarget | WebGlCubeRenderTarget}
     * However, light estimation data could also be provided in other forms e.g
     * by WebXR
     * This enables the rendering of augmented reality content that reacts to real world lighting.
     * The current probe implementation in three.js supports so-called diffuse light probes
     * This type of light probe is functionally equivalent to an irradiance environment map.
     * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe | WebGl / light probe }
     * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe_cubecamera | WebGl / light probe / cube camera }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/LightProbe | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightProbe.js | Source}
     */    
    get lightProbe() {
        return [...this.light,
            /**
             * A light probe uses spherical harmonics to encode lighting information.
             * @defaultValue `new THREE.SphericalHarmonics3()`
             */
            'sh',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\LightShadow.d.ts
    /**
     * Serves as a base class for the other shadow classes.
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js | Source}
     */
    lightShadow: [
        /**
         * The light's view of the world.
         * @remark This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
         */
        'camera',
        /**
         * Shadow map bias, how much to add or subtract from the normalized depth when deciding whether a surface is in shadow.
         * @remark The Very tiny adjustments here (in the order of 0.0001) may help reduce artifacts in shadows.
         * @remarks Expects a `Float`
         * @defaultValue `0`
         */
        'bias',
        /**
         * Defines how much the position used to query the shadow map is offset along the object normal.
         * @remark The Increasing this value can be used to reduce shadow acne especially in large scenes where light shines onto geometry at a shallow angle.
         * @remark The cost is that shadows may appear distorted.
         * @remarks Expects a `Float`
         * @defaultValue `0`
         */
        'normalBias',
        /**
         * Setting this to values greater than 1 will blur the edges of the shadow.toi
         * @remark High values will cause unwanted banding effects in the shadows - a greater {@link LightShadow.mapSize | mapSize
         *  will allow for a higher value to be used here before these effects become visible.
         * @remark If {@link THREE.WebGlRenderer.shadowMap.type | WebGlRenderer.shadowMap.type} is set to {@link Renderer | PCFSoftShadowMap},
         * radius has no effect and it is recommended to increase softness by decreasing {@link LightShadow.mapSize | mapSize} instead.
         * @remark Note that this has no effect if the {@link THREE.WebGlRenderer.shadowMap | WebGlRenderer.shadowMap}.{@link THREE.WebGlShadowMap.type | type}
         * is set to {@link THREE.BasicShadowMap | BasicShadowMap}.
         * @remarks Expects a `Float`
         * @defaultValue `1`
         */
        'radius',
        /**
         * The amount of samples to use when blurring a VSM shadow map.
         * @remarks Expects a `Integer`
         * @defaultValue `8`
         */
        'blurSamples',
        /**
         * A {@link THREE.Vector2 | Vector2} defining the width and height of the shadow map.
         * @remarks Higher values give better quality shadows at the cost of computation time.
         * @remarks Values must be powers of 2, up to the {@link THREE.WebGlRenderer.capabilities | WebGlRenderer.capabilities}.maxTextureSize for a given device,
         * although the width and height don't have to be the same (so, for example, (512, 1024) is valid).
         * @defaultValue `new THREE.Vector2(512, 512)`
         */
        'mapSize',
        /**
         * The depth map generated using the internal camera; a location beyond a pixel's depth is in shadow. Computed internally during rendering.
         * @defaultValue null
         */
        'map',
        /**
         * The distribution map generated using the internal camera; an occlusion is calculated based on the distribution of depths. Computed internally during rendering.
         * @defaultValue null
         */
        'mapPass',
        /**
         * Model to shadow camera space, to compute location and depth in shadow map.
         * Stored in a {@link Matrix4 | Matrix4}.
         * @remarks This is computed internally during rendering.
         * @defaultValue new THREE.Matrix4()
         */
        'matrix',
        /**
         * Enables automatic updates of the light's shadow. If you do not require dynamic lighting / shadows, you may set this to `false`.
         * @defaultValue `true`
         */
        'autoUpdate',
        /**
         * When set to `true`, shadow maps will be updated in the next `render` call.
         * If you have set {@link autoUpdate} to `false`, you will need to set this property to `true` and then make a render call to update the light's shadow.
         * @defaultValue `false`
         */
        'needsUpdate',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLight.d.ts
    /**
     * A light that gets emitted from a single point in all directions
     * @remarks
     * A common use case for this is to replicate the light emitted from a bare lightbulb.
     * @example
     * ```typescript
     * const light = new THREE.PointLight(0xff0000, 1, 100)
     * light.position.set(50, 50, 50)
     * scene.add(light)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_pointlights | lights / pointlights }
     * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
     * @see Example: {@link https://threejs.org/examples/#webgl_lensflares | lensflares }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/PointLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js | Source}
     */    
    get pointLight() {
        return [...this.light,
            /**
             * @default 'PointLight'
             */
            'type',
            /**
             * The light's intensity.
             *
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminous intensity of the light measured in candela (cd).
             * @remarks Changing the intensity will also change the light's power.
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'intensity',
            /**
             * When **Default mode** — When distance is zero, light does not attenuate. When distance is non-zero,
             * light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.
             *
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — When distance is zero,
             * light will attenuate according to inverse-square law to infinite distance.
             * When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff,
             * where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.
             *
             * @defaultValue `0.0`
             * @remarks Expects a `Float`
             */
            'distance',
            /**
             * If set to `true` light will cast dynamic shadows.
             * **Warning**: This is expensive and requires tweaking to get shadows looking right.
             * @see {@link THREE.PointLightShadow | PointLightShadow} for details.
             * @defaultValue `false`
             */
            'castShadow',
            /**
             * The amount the light dims along the distance of the light.
             * In context of physically-correct rendering the default value should not be changed.
             * @remarks Expects a `Float`
             * @defaultValue `2`
             */
            'decay',
            /**
             * A {@link THREE.PointLightShadow | PointLightShadow} used to calculate shadows for this light.
             * The lightShadow's {@link LightShadow.camera | camera} is set to
             * a {@link THREE.PerspectiveCamera | PerspectiveCamera} with {@link PerspectiveCamera.fov | fov} of 90,
             * {@link PerspectiveCamera.aspect | aspect} of 1,
             * {@link PerspectiveCamera.near | near} clipping plane at 0.5
             * and {@link PerspectiveCamera.far | far} clipping plane at 500.
             * @defaultValue new THREE.PointLightShadow()
             */
            'shadow',
            /**
             * The light's power.
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
             * @remarks Changing the power will also change the light's intensity.
             * @remarks Expects a `Float`
             */
            'power',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\PointLightShadow.d.ts
    /**
     * Shadow for {@link THREE.PointLight | PointLight}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
     */    
    get pointLightShadow() {
        return [...this.lightShadow,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\RectAreaLight.d.ts
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
     * const width = 10
     * const height = 10
     * const intensity = 1
     * const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height)
     * rectLight.position.set(5, 5, 0)
     * rectLight.lookAt(0, 0, 0)
     * scene.add(rectLight)
     * const rectLightHelper = new RectAreaLightHelper(rectLight)
     * rectLight.add(rectLightHelper)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_rectarealight | WebGl / {@link RectAreaLight} }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/RectAreaLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js | Source}
     */    
    get rectAreaLight() {
        return [...this.light,
            /**
             * The width of the light.
             * @remarks Expects a `Float`
             * @defaultValue `10`
             */
            'width',
            /**
             * The height of the light.
             * @remarks Expects a `Float`
             * @defaultValue `10`
             */
            'height',
            /**
             * The light's intensity.
             * @remarks Changing the intensity will also change the light's power.
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminance (brightness) of the light measured in nits (cd/m^2).
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'intensity',
            /**
             * The light's power.
             * @remarks Changing the power will also change the light's intensity.
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
             * @remarks Expects a `Float`
             */
            'power',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\SpotLight.d.ts
    /**
     * This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.
     * @example
     * ```typescript
     * // white {@link SpotLight} shining from the side, modulated by a texture, casting a shadow
     * const {@link SpotLight} = new THREE.SpotLight(0xffffff)
     * spotLight.position.set(100, 1000, 100)
     * spotLight.map = new THREE.TextureLoader().load(url)
     * spotLight.castShadow = true
     * spotLight.shadow.mapSize.width = 1024
     * spotLight.shadow.mapSize.height = 1024
     * spotLight.shadow.camera.near = 500
     * spotLight.shadow.camera.far = 4000
     * spotLight.shadow.camera.fov = 30
     * scene.add(spotLight)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlight | lights / {@link SpotLight} }
     * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | lights / spotlights }
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/SpotLight | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLight.js | Source}
     */    
    get spotLight() {
        return [...this.light,
            /**
             * This is set equal to {@link THREE.Object3d.DEFAULT_UP | Object3d.DEFAULT_UP} (0, 1, 0), so that the light shines from the top down.
             * @defaultValue `{@link Object3d.DEFAULT_UP}`
             */
            /**
             * The {@link SpotLight} points from its {@link SpotLight.position | position} to target.position.
             * @remarks
             * **Note**: For the target's position to be changed to anything other than the default,
             * it must be added to the {@link Scene | scene} using
             *
             * ```typescript
             * scene.add( light.target )
             * ```
             *
             * This is so that the target's {@link Object3d.matrixWorld | matrixWorld} gets automatically updated each frame.
             * It is also possible to set the target to be another object in the scene (anything with a {@link THREE.Object3d.position | position} property), like so:
             * ```typescript
             * const targetObject = new THREE.Object3d()
             * scene.add(targetObject)
             * light.target = targetObject
             * ```
             * The {@link SpotLight} will now track the target object.
             * @defaultValue `new THREE.Object3d()` _The default position of the target is *(0, 0, 0)*._
             */
            'target',
            /**
             * If set to `true` light will cast dynamic shadows.
             * @remarks  **Warning**: This is expensive and requires tweaking to get shadows looking right. the {@link THREE.SpotLightShadow | SpotLightShadow} for details.
             * @defaultValue `false`
             */
            'castShadow',
            /**
             * The light's intensity.
             * @remarks Changing the intensity will also change the light's power.
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminous intensity of the light measured in candela (cd).
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'intensity',
            /**
             * When **Default mode** — When distance is zero, light does not attenuate. When distance is non-zero,
             * light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.
             *
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** — When distance is zero,
             * light will attenuate according to inverse-square law to infinite distance.
             * When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff,
             * where it will then attenuate quickly and smoothly to `0`. Inherently, cutoffs are not physically correct.
             * @remarks Expects a `Float`
             * @defaultValue `0.0`
             */
            'distance',
            /**
             * Maximum extent of the spotlight, in radians, from its direction.
             * @remarks Should be no more than `Math.PI/2`.
             * @remarks Expects a `Float`
             * @defaultValue `Math.PI / 3`
             */
            'angle',
            /**
             * The amount the light dims along the distance of the light.
             * In context of physically-correct rendering the default value should not be changed.
             * @remarks Expects a `Float`
             * @defaultValue `2`
             */
            'decay',
            /**
             * A {@link THREE.SpotLightShadow | SpotLightShadow} used to calculate shadows for this light.
             * @defaultValue `new THREE.SpotLightShadow()`
             */
            'shadow',
            /**
             * The light's power.
             * @remarks Changing the power will also change the light's intensity.
             * When **{@link WebGlRenderer.useLegacyLights | legacy lighting mode} is disabled** —  power is the luminous power of the light measured in lumens (lm).
             * @remarks Expects a `Float`
             */
            'power',
            /**
             * Percent of the {@link SpotLight} cone that is attenuated due to penumbra.
             * @remarks Takes values between zero and 1.
             * @remarks Expects a `Float`
             * @defaultValue `0.0`
             */
            'penumbra',
            /**
             * A {@link THREE.Texture | Texture} used to modulate the color of the light.
             * The spot light color is mixed with the _RGB_ value of this texture, with a ratio corresponding to its alpha value.
             * The cookie-like masking effect is reproduced using pixel values (0, 0, 0, 1-cookie_value).
             * @remarks **Warning**: {@link SpotLight.map} is disabled if {@link SpotLight.castShadow} is `false`.
             */
            'map',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\lights\SpotLightShadow.d.ts
    /**
     * This is used internally by {@link SpotLight | SpotLights} for calculating shadows.
     * @example
     * ```typescript
     * //Create a WebGlRenderer and turn on shadows in the renderer
     * const renderer = new THREE.WebGlRenderer()
     * renderer.shadowMap.enabled = true
     * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
     * //Create a SpotLight and turn on shadows for the light
     * const light = new THREE.SpotLight(0xffffff)
     * light.castShadow = true; // default false
     * scene.add(light)
     * //Set up shadow properties for the light
     * light.shadow.mapSize.width = 512; // default
     * light.shadow.mapSize.height = 512; // default
     * light.shadow.camera.near = 0.5; // default
     * light.shadow.camera.far = 500; // default
     * light.shadow.focus = 1; // default
     * //Create a sphere that cast shadows (but does not receive them)
     * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32)
     * const sphereMaterial = new THREE.MeshStandardMaterial({
     *     color: 0xff0000
     * })
     * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
     * sphere.castShadow = true; //default is false
     * sphere.receiveShadow = false; //default
     * scene.add(sphere)
     * //Create a plane that receives shadows (but does not cast them)
     * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32)
     * const planeMaterial = new THREE.MeshStandardMaterial({
     *     color: 0x00ff00
     * })
     * const plane = new THREE.Mesh(planeGeometry, planeMaterial)
     * plane.receiveShadow = true
     * scene.add(plane)
     * //Create a helper for the shadow camera (optional)
     * const helper = new THREE.CameraHelper(light.shadow.camera)
     * scene.add(helper)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/SpotLightShadow | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLightShadow.js | Source}
     */    
    get spotLightShadow() {
        return [...this.lightShadow,
            /**
             * Read-only flag to check if a given object is of type {@link SpotLightShadow}.
             * @remarks This is a _constant_ value
             * @defaultValue `true`
             */
            /**
             * The light's view of the world.
             * @remarks This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
             * @remarks
             * The {@link THREE.PerspectiveCamera.fov | fov} will track the {@link THREE.SpotLight.angle | angle} property
             * of the owning {@link SpotLight | SpotLight} via the {@link SpotLightShadow.update | update} method.
             * Similarly, the {@link THREE.PerspectiveCamera.aspect | aspect} property will track the aspect of the {@link LightShadow.mapSize | mapSize}.
             * If the {@link SpotLight.distance | distance} property of the light is set, the {@link THREE.PerspectiveCamera.far | far} clipping plane will track that, otherwise it defaults to `500`.
             * @defaultValue is a {@link THREE.PerspectiveCamera | PerspectiveCamera} with {@link THREE.PerspectiveCamera.near | near} clipping plane at `0.5`.
             */
            'camera',
            /**
             * Used to focus the shadow camera.
             * @remarks The camera's field of view is set as a percentage of the spotlight's field-of-view. Range is `[0, 1].distinct()`. 0`.
             * @defaultValue `1`
             */
            'focus',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\AnimationLoader.d.ts    
    get animationLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\AudioLoader.d.ts    
    get audioLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\BufferGeometryLoader.d.ts    
    get bufferGeometryLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\Cache.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\CompressedTextureLoader.d.ts    
    get compressedTextureLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\CubeTextureLoader.d.ts    
    get cubeTextureLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\DataTextureLoader.d.ts    
    get dataTextureLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\FileLoader.d.ts    
    get fileLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\ImageBitmapLoader.d.ts    
    get imageBitmapLoader() {
        return [...this.loader,
            /**
             * @default { premultiplyAlpha: 'none' }
             */
            'options',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\ImageLoader.d.ts
    /**
     * A loader for loading an image.f
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */    
    get imageLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\Loader.d.ts
    /**
     * Base class for implementing loaders.
     */    
    get loader() {
        return [
            /**
             * @default 'anonymous'
             */
            'crossOrigin',
            /**
             * @default false
             */
            'withCredentials',
            /**
             * @default ''
             */
            'path',
            /**
             * @default ''
             */
            'resourcePath',
            'manager',
            /**
             * @default {}
             */
            'requestHeader',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\LoaderUtils.d.ts
    loaderUtils: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\LoadingManager.d.ts
    /**
     * Handles and keeps track of loaded and pending data.
     */
    loadingManager: [
        /**
         * Will be called when loading of an item starts.
         * @param url The url of the item that started loading.
         * @param loaded The number of items already loaded so far.
         * @param total The total amount of items to be loaded.
         */

        'onStart',
        /**
         * Will be called when all items finish loading.
         * The default is a function with empty body.
         */
        'onLoad',
        /**
         * Will be called for each loaded item.
         * The default is a function with empty body.
         * @param url The url of the item just loaded.
         * @param loaded The number of items already loaded so far.
         * @param total The total amount of items to be loaded.
         */
        'onProgress',
        /**
         * Will be called when item loading fails.
         * The default is a function with empty body.
         * @param url The url of the item that errored.
         */
        'onError',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\MaterialLoader.d.ts    
    get materialLoader() {
        return [...this.loader,
            /**
             * @default {}
             */
            'textures',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\ObjectLoader.d.ts    
    get objectLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\loaders\TextureLoader.d.ts
    /**
     * Class for loading a texture.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */    
    get textureLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineBasicMaterial.d.ts    
    get lineBasicMaterialParameters() {
        return [...this.materialParameters,
            'color',
            'fog',
            'linewidth',
            'linecap',
            'linejoin',
        ].distinct()
    },    
    get lineBasicMaterial() {
        return [...this.material,
            /**
             * @default 'LineBasicMaterial'
             */
            'type',
            /**
             * @default 0xffffff
             */
            'color',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default true
             */
            'fog',
            /**
             * @default 1
             */
            'linewidth',
            /**
             * @default 'round'
             */
            'linecap',
            /**
             * @default 'round'
             */
            'linejoin',
            /**
             * Sets the color of the lines using data from a {@link Texture}.
             */
            'map',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineDashedMaterial.d.ts    
    get lineDashedMaterialParameters() {
        return [...this.lineBasicMaterialParameters,
            'scale',
            'dashSize',
            'gapSize',
        ].distinct()
    },    
    get lineDashedMaterial() {
        return [...this.lineBasicMaterial,
            /**
             * @default 'LineDashedMaterial'
             */
            'type',
            /**
             * @default 1
             */
            'scale',
            /**
             * @default 1
             */
            'dashSize',
            /**
             * @default 1
             */
            'gapSize',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\Material.d.ts    
    get materialParameters() {
        return [
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
        ].distinct()
    },
    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */    
    get material() {
        return [...this.eventDispatcher,
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
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\Materials.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshBasicMaterial.d.ts
    /**
     * parameters is an object with one or more properties defining the material's appearance.
     */    
    get meshBasicMaterialParameters() {
        return [...this.materialParameters,
            'color',
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
        ].distinct()
    },    
    get meshBasicMaterial() {
        return [...this.material,
            /**
             * @default 'MeshBasicMaterial'
             */
            'type',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'lightMap',
            /**
             * @default 1
             */
            'lightMapIntensity',
            /**
             * @default null
             */
            'aoMap',
            /**
             * @default 1
             */
            'aoMapIntensity',
            /**
             * @default null
             */
            'specularMap',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default null
             */
            'envMap',
            /**
             * The rotation of the environment map in radians. Default is `(0,0,0)`.
             */
            'envMapRotation',
            /**
             * @default THREE.MultiplyOperation
             */
            'combine',
            /**
             * @default 1
             */
            'reflectivity',
            /**
             * @default 0.98
             */
            'refractionRatio',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * @default 'round'
             */
            'wireframeLinecap',
            /**
             * @default 'round'
             */
            'wireframeLinejoin',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDepthMaterial.d.ts    
    get meshDepthMaterialParameters() {
        return [...this.materialParameters,
            'map',
            'alphaMap',
            'depthPacking',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'wireframe',
            'wireframeLinewidth',
        ].distinct()
    },    
    get meshDepthMaterial() {
        return [...this.material,
            /**
             * @default 'MeshDepthMaterial'
             */
            'type',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default THREE.BasicDepthPacking
             */
            'depthPacking',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * @default false
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDistanceMaterial.d.ts    
    get meshDistanceMaterialParameters() {
        return [...this.materialParameters,
            'map',
            'alphaMap',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'farDistance',
            'nearDistance',
            'referencePosition',
        ].distinct()
    },    
    get meshDistanceMaterial() {
        return [...this.material,
            /**
             * @default 'MeshDistanceMaterial'
             */
            'type',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default false
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshLambertMaterial.d.ts    
    get meshLambertMaterialParameters() {
        return [...this.materialParameters,
            'bumpMap',
            'bumpScale',
            'color',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'emissive',
            'emissiveIntensity',
            'emissiveMap',
            'flatShading',
            'map',
            'lightMap',
            'lightMapIntensity',
            'normalMap',
            'normalScale',
            'aoMap',
            'aoMapIntensity',
            'specularMap',
            'alphaMap',
            'envMap',
            'envMapRotation',
            'combine',
            'reflectivity',
            'refractionRatio',
            'wireframe',
            'wireframeLinewidth',
            'wireframeLinecap',
            'wireframeLinejoin',
            'fog',
        ].distinct()
    },    
    get meshLambertMaterial() {
        return [...this.material,
            /**
             * @default 'MeshLambertMaterial'
             */
            'type',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default null
             */
            'bumpMap',
            /**
             * @default 1
             */
            'bumpScale',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default new THREE.Color( 0x000000 )
             */
            'emissive',
            /**
             * @default 1
             */
            'emissiveIntensity',
            /**
             * @default null
             */
            'emissiveMap',
            /**
             * @default false
             */
            'flatShading',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'lightMap',
            /**
             * @default 1
             */
            'lightMapIntensity',
            /**
             * @default null
             */
            'normalMap',
            'normalMapType',
            /**
             * @default new THREE.Vector2( 1, 1 )
             */
            'normalScale',
            /**
             * @default null
             */
            'aoMap',
            /**
             * @default 1
             */
            'aoMapIntensity',
            /**
             * @default null
             */
            'specularMap',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default null
             */
            'envMap',
            /**
             * The rotation of the environment map in radians. Default is `(0,0,0)`.
             */
            'envMapRotation',
            /**
             * @default THREE.MultiplyOperation
             */
            'combine',
            /**
             * @default 1
             */
            'reflectivity',
            /**
             * @default 0.98
             */
            'refractionRatio',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * @default 'round'
             */
            'wireframeLinecap',
            /**
             * @default 'round'
             */
            'wireframeLinejoin',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshMatcapMaterial.d.ts    
    get meshMatcapMaterialParameters() {
        return [...this.materialParameters,
            'color',
            'matcap',
            'map',
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'alphaMap',
            'fog',
            'flatShading',
        ].distinct()
    },    
    get meshMatcapMaterial() {
        return [...this.material,
            /**
             * @default 'MeshMatcapMaterial'
             */
            'type',
            /**
             * @default { 'MATCAP': '' }
             */
            'defines',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default null
             */
            'matcap',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'bumpMap',
            /**
             * @default 1
             */
            'bumpScale',
            /**
             * @default null
             */
            'normalMap',
            /**
             * @default THREE.TangentSpaceNormalMap
             */
            'normalMapType',
            /**
             * @default new Vector2( 1, 1 )
             */
            'normalScale',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * Define whether the material is rendered with flat shading. Default is false.
             * @default false
             */
            'flatShading',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshNormalMaterial.d.ts    
    get meshNormalMaterialParameters() {
        return [...this.materialParameters,
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'wireframe',
            'wireframeLinewidth',
            'flatShading',
        ].distinct()
    },    
    get meshNormalMaterial() {
        return [...this.material,
            /**
             * @default 'MeshNormalMaterial'
             */
            'type',
            /**
             * @default null
             */
            'bumpMap',
            /**
             * @default 1
             */
            'bumpScale',
            /**
             * @default null
             */
            'normalMap',
            /**
             * @default THREE.TangentSpaceNormalMap
             */
            'normalMapType',
            /**
             * @default new THREE.Vector2( 1, 1 )
             */
            'normalScale',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * Define whether the material is rendered with flat shading. Default is false.
             * @default false
             */
            'flatShading',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhongMaterial.d.ts    
    get meshPhongMaterialParameters() {
        return [...this.materialParameters,
            /** geometry color in hexadecimal. Default is 0xffffff. */
            'color',
            'specular',
            'shininess',
            'opacity',
            'map',
            'lightMap',
            'lightMapIntensity',
            'aoMap',
            'aoMapIntensity',
            'emissive',
            'emissiveIntensity',
            'emissiveMap',
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'specularMap',
            'alphaMap',
            'envMap',
            'envMapRotation',
            'combine',
            'reflectivity',
            'refractionRatio',
            'wireframe',
            'wireframeLinewidth',
            'wireframeLinecap',
            'wireframeLinejoin',
            'fog',
            'flatShading',
        ].distinct()
    },    
    get meshPhongMaterial() {
        return [...this.material,
            /**
             * @default 'MeshNormalMaterial'
             */
            'type',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default new THREE.Color( 0x111111 )
             */
            'specular',
            /**
             * @default 30
             */
            'shininess',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'lightMap',
            /**
             * @default null
             */
            'lightMapIntensity',
            /**
             * @default null
             */
            'aoMap',
            /**
             * @default null
             */
            'aoMapIntensity',
            /**
             * @default new THREE.Color( 0x000000 )
             */
            'emissive',
            /**
             * @default 1
             */
            'emissiveIntensity',
            /**
             * @default null
             */
            'emissiveMap',
            /**
             * @default null
             */
            'bumpMap',
            /**
             * @default 1
             */
            'bumpScale',
            /**
             * @default null
             */
            'normalMap',
            /**
             * @default THREE.TangentSpaceNormalMap
             */
            'normalMapType',
            /**
             * @default new Vector2( 1, 1 )
             */
            'normalScale',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default null
             */
            'specularMap',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default null
             */
            'envMap',
            /**
             * The rotation of the environment map in radians. Default is `(0,0,0)`.
             */
            'envMapRotation',
            /**
             * @default THREE.MultiplyOperation
             */
            'combine',
            /**
             * @default 1
             */
            'reflectivity',
            /**
             * @default 0.98
             */
            'refractionRatio',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * @default 'round'
             */
            'wireframeLinecap',
            /**
             * @default 'round'
             */
            'wireframeLinejoin',
            /**
             * Define whether the material is rendered with flat shading. Default is false.
             * @default false
             */
            'flatShading',
            /**
             * @deprecated Use {@link MeshStandardMaterial THREE.MeshStandardMaterial} instead.
             */
            'metal',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhysicalMaterial.d.ts    
    get meshPhysicalMaterialParameters() {
        return [...this.meshStandardMaterialParameters,
            'anisotropyRotation',
            'anisotropyMap',
            'clearcoatMap',
            'clearcoatRoughness',
            'clearcoatRoughnessMap',
            'clearcoatNormalScale',
            'clearcoatNormalMap',
            'ior',
            'reflectivity',
            'iridescenceMap',
            'iridescenceIOR',
            'iridescenceThicknessRange',
            'iridescenceThicknessMap',
            'sheenColor',
            'sheenColorMap',
            'sheenRoughness',
            'sheenRoughnessMap',
            'transmissionMap',
            'thickness',
            'thicknessMap',
            'attenuationDistance',
            'attenuationColor',
            'specularIntensity',
            'specularIntensityMap',
            'specularColor',
            'specularColorMap',
            'anisotropy',
            'clearcoat',
            'iridescence',
            'dispersion',
            'sheen',
            'transmission',
        ].distinct()
    },    
    get meshPhysicalMaterial() {
        return [...this.meshStandardMaterial,
            /**
             * @default { 'STANDARD': '', 'PHYSICAL': '' }
             */
            'defines',
            /**
             * @default 'MeshPhysicalMaterial'
             */
            'type',
            /**
             * @default 0
             */
            'anisotropyRotation',
            /**
             * @default null
             */
            'anisotropyMap',
            /**
             * @default null
             */
            'clearcoatMap',
            /**
             * @default 0
             */
            'clearcoatRoughness',
            /**
             * @default null
             */
            'clearcoatRoughnessMap',
            /**
             * @default new THREE.Vector2( 1, 1 )
             */
            'clearcoatNormalScale',
            /**
             * @default null
             */
            'clearcoatNormalMap',
            /**
             * @default 1.5
             */
            'ior',
            /**
             * @default 0.5
             */
            'reflectivity',
            /**
             * @default null
             */
            'iridescenceMap',
            /**
             * @default 1.3
             */
            'iridescenceIOR',
            /**
             * @default [100, 400].distinct()
             */
            'iridescenceThicknessRange',
            /**
             * @default null
             */
            'iridescenceThicknessMap',
            /**
             * @default Color( 0x000000 )
             */
            'sheenColor',
            /**
             * @default null
             */
            'sheenColorMap',
            /**
             * @default 1.0
             */
            'sheenRoughness',
            /**
             * @default null
             */
            'sheenRoughnessMap',
            /**
             * @default null
             */
            'transmissionMap',
            /**
             * @default 0.01
             */
            'thickness',
            /**
             * @default null
             */
            'thicknessMap',
            /**
             * @default 0.0
             */
            'attenuationDistance',
            /**
             * @default Color( 1, 1, 1 )
             */
            'attenuationColor',
            /**
             * @default 1.0
             */
            'specularIntensity',
            /**
             * @default null
             */
            'specularIntensityMap',
            /**
             * @default Color(1, 1, 1)
             */
            'specularColor',
            /**
             * @default null
             */
            'specularColorMap',
            /**
             * @default 0
             */
            'anisotropy',
            /**
             * @default 0
             */
            'clearcoat',
            /**
             * @default 0
             */
            'getiridescence',
            /**
             * @default 0
             */
            'dispersion',
            /**
             * @default 0.0
             */
            'getsheen',
            /**
             * @default 0
             */
            'transmission',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshStandardMaterial.d.ts    
    get meshStandardMaterialParameters() {
        return [...this.materialParameters,
            'color',
            'roughness',
            'metalness',
            'map',
            'lightMap',
            'lightMapIntensity',
            'aoMap',
            'aoMapIntensity',
            'emissive',
            'emissiveIntensity',
            'emissiveMap',
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'roughnessMap',
            'metalnessMap',
            'alphaMap',
            'envMap',
            'envMapRotation',
            'envMapIntensity',
            'wireframe',
            'wireframeLinewidth',
            'fog',
            'flatShading',
        ].distinct()
    },    
    get meshStandardMaterial() {
        return [...this.material,
            /**
             * @default 'MeshStandardMaterial'
             */
            'type',
            /**
             * @default { 'STANDARD': '' }
             */
            'defines',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default 1
             */
            'roughness',
            /**
             * @default 0
             */
            'metalness',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'lightMap',
            /**
             * @default 1
             */
            'lightMapIntensity',
            /**
             * @default null
             */
            'aoMap',
            /**
             * @default 1
             */
            'aoMapIntensity',
            /**
             * @default new THREE.Color( 0x000000 )
             */
            'emissive',
            /**
             * @default 1
             */
            'emissiveIntensity',
            /**
             * @default null
             */
            'emissiveMap',
            /**
             * @default null
             */
            'bumpMap',
            /**
             * @default 1
             */
            'bumpScale',
            /**
             * @default null
             */
            'normalMap',
            /**
             * @default THREE.TangentSpaceNormalMap
             */
            'normalMapType',
            /**
             * @default new THREE.Vector2( 1, 1 )
             */
            'normalScale',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default null
             */
            'roughnessMap',
            /**
             * @default null
             */
            'metalnessMap',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default null
             */
            'envMap',
            /**
             * The rotation of the environment map in radians. Default is `(0,0,0)`.
             */
            'envMapRotation',
            /**
             * @default 1
             */
            'envMapIntensity',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * @default 'round'
             */
            'wireframeLinecap',
            /**
             * @default 'round'
             */
            'wireframeLinejoin',
            /**
             * Define whether the material is rendered with flat shading. Default is false.
             * @default false
             */
            'flatShading',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshToonMaterial.d.ts    
    get meshToonMaterialParameters() {
        return [...this.materialParameters,
            /** geometry color in hexadecimal. Default is 0xffffff. */
            'color',
            'opacity',
            'gradientMap',
            'map',
            'lightMap',
            'lightMapIntensity',
            'aoMap',
            'aoMapIntensity',
            'emissive',
            'emissiveIntensity',
            'emissiveMap',
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'alphaMap',
            'wireframe',
            'wireframeLinewidth',
            'wireframeLinecap',
            'wireframeLinejoin',
            'fog',
        ].distinct()
    },    
    get meshToonMaterial() {
        return [...this.material,
            /**
             * @default 'MeshToonMaterial'
             */
            'type',
            /**
             * @default { 'TOON': '' }
             */
            'defines',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default null
             */
            'gradientMap',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'lightMap',
            /**
             * @default 1
             */
            'lightMapIntensity',
            /**
             * @default null
             */
            'aoMap',
            /**
             * @default 1
             */
            'aoMapIntensity',
            /**
             * @default new THREE.Color( 0x000000 )
             */
            'emissive',
            /**
             * @default 1
             */
            'emissiveIntensity',
            /**
             * @default null
             */
            'emissiveMap',
            /**
             * @default null
             */
            'bumpMap',
            /**
             * @default 1
             */
            'bumpScale',
            /**
             * @default null
             */
            'normalMap',
            /**
             * @default THREE.TangentSpaceNormalMap
             */
            'normalMapType',
            /**
             * @default new THREE.Vector2( 1, 1 )
             */
            'normalScale',
            /**
             * @default null
             */
            'displacementMap',
            /**
             * @default 1
             */
            'displacementScale',
            /**
             * @default 0
             */
            'displacementBias',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * @default 'round'
             */
            'wireframeLinecap',
            /**
             * @default 'round'
             */
            'wireframeLinejoin',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\PointsMaterial.d.ts    
    get pointsMaterialParameters() {
        return [...this.materialParameters,
            'color',
            'map',
            'alphaMap',
            'size',
            'sizeAttenuation',
            'fog',
        ].distinct()
    },    
    get pointsMaterial() {
        return [...this.material,
            /**
             * @default 'PointsMaterial'
             */
            'type',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default 1
             */
            'size',
            /**
             * @default true
             */
            'sizeAttenuation',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\RawShaderMaterial.d.ts    
    get rawShaderMaterial() {
        return [...this.shaderMaterial,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShaderMaterial.d.ts    
    get shaderMaterialParameters() {
        return [...this.materialParameters,
            'uniforms',
            'cloneUniformsGroups',
            'vertexShader',
            'fragmentShader',
            'linewidth',
            'wireframe',
            'wireframeLinewidth',
            'lights',
            'clipping',
            'fog',
            'extensions',
            'glslVersion',
        ].distinct()
    },    
    get shaderMaterial() {
        return [...this.material,
            /**
             * @default 'ShaderMaterial'
             */
            'type',
            /**
             * @default {}
             */
            'defines',
            /**
             * @default {}
             */
            'uniforms',
            'uniformsGroups',
            'vertexShader',
            'fragmentShader',
            /**
             * @default 1
             */
            'linewidth',
            /**
             * @default false
             */
            'wireframe',
            /**
             * @default 1
             */
            'wireframeLinewidth',
            /**
             * @default false
             */
            'fog',
            /**
             * @default false
             */
            'lights',
            /**
             * @default false
             */
            'clipping',
            /**
             * @default {
             *   clipCullDistance: false,
             *   multiDraw: false
             * }
             */
            'extensions',
            /**
             * @default { 'color': [ 1, 1, 1 ].distinct(), 'uv': [ 0, 0 ].distinct(), 'uv1': [ 0, 0 ].distinct() }
             */
            'defaultAttributeValues',
            /**
             * @default undefined
             */
            'index0AttributeName',
            /**
             * @default false
             */
            'uniformsNeedUpdate',
            /**
             * @default null
             */
            'glslVersion',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShadowMaterial.d.ts    
    get shadowMaterialParameters() {
        return [...this.materialParameters,
            'color',
            'fog',
        ].distinct()
    },    
    get shadowMaterial() {
        return [...this.material,
            /**
             * @default 'ShadowMaterial'
             */
            'type',
            /**
             * @default new THREE.Color( 0x000000 )
             */
            'color',
            /**
             * @default true
             */
            'transparent',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\SpriteMaterial.d.ts    
    get spriteMaterialParameters() {
        return [...this.materialParameters,
            'color',
            'map',
            'alphaMap',
            'rotation',
            'sizeAttenuation',
            'fog',
        ].distinct()
    },    
    get spriteMaterial() {
        return [...this.material,
            /**
             * @default 'SpriteMaterial'
             */
            'type',
            /**
             * @default new THREE.Color( 0xffffff )
             */
            'color',
            /**
             * @default null
             */
            'map',
            /**
             * @default null
             */
            'alphaMap',
            /**
             * @default 0
             */
            'rotation',
            /**
             * @default true
             */
            'sizeAttenuation',
            /**
             * @default true
             */
            'transparent',
            /**
             * Whether the material is affected by fog. Default is true.
             * @default fog
             */
            'fog',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box2.d.ts
    // Math //////////////////////////////////////////////////////////////////////////////////
    box2: [
        /**
         * @default new THREE.Vector2( + Infinity, + Infinity )
         */
        'min',
        /**
         * @default new THREE.Vector2( - Infinity, - Infinity )
         */
        'max',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Box3.d.ts
    box3: [
        /**
         * @default new THREE.Vector3( + Infinity, + Infinity, + Infinity )
         */
        'min',
        /**
         * @default new THREE.Vector3( - Infinity, - Infinity, - Infinity )
         */
        'max',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Color.d.ts

    rgb: [
        'r',
        'g',
        'b',
    ].distinct(),
    /**
     * Represents a color. See also {@link ColorUtils}.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
     *
     * @example
     * const color = new THREE.Color( 0xff0000 )
     */
    color: [
        /**
         * Red channel value between 0 and 1. Default is 1.
         * @default 1
         */
        'r',
        /**
         * Green channel value between 0 and 1. Default is 1.
         * @default 1
         */
        'g',
        /**
         * Blue channel value between 0 and 1. Default is 1.
         * @default 1
         */
        'b',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\ColorManagement.d.ts
    colorManagement: [
        /**
         * @default false
         */
        'enabled',
        /**
         * @default LinearSRGBColorSpace
         */
        'workingColorSpace',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Cylindrical.d.ts
    cylindrical: [
        /**
         * @default 1
         */
        'radius',
        /**
         * @default 0
         */
        'theta',
        /**
         * @default 0
         */
        'y',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Euler.d.ts
    euler: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
        /**
         * @default THREE.Euler.DEFAULT_ORDER
         */
        'order',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Frustum.d.ts
    /**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     */
    frustum: [
        /**
         * Array of 6 vectors.
         */
        'planes',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Interpolant.d.ts
    interpolant: [
        'parameterPositions',
        'sampleValues',
        'valueSize',
        'resultBuffer',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Line3.d.ts
    line3: [
        /**
         * @default new THREE.Vector3()
         */
        'start',
        /**
         * @default new THREE.Vector3()
         */
        'end',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\MathUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix3.d.ts
    // https://threejs.org/docs/#api/en/math/Matrix3
    /**
     * ( interface Matrix )
     */
    matrix: [
        /**
         * Array with matrix values.
         */
        'elements',
    ].distinct(),
    /**
     * ( class Matrix3 implements Matrix )
     */    
    get matrix3() {
        return [...this.matrix,
            /**
             * Array with matrix values.
             * @default [1, 0, 0, 0, 1, 0, 0, 0, 1].distinct()
             */
            'elements',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Matrix4.d.ts
    /**
     * A 4x4 Matrix.
     *
     * @example
     * // Simple rig for rotating around 3 axes
     * const m = new THREE.Matrix4()
     * const m1 = new THREE.Matrix4()
     * const m2 = new THREE.Matrix4()
     * const m3 = new THREE.Matrix4()
     * const alpha = 0
     * const beta = Math.PI
     * const gamma = Math.PI/2
     * m1.makeRotationX( alpha )
     * m2.makeRotationY( beta )
     * m3.makeRotationZ( gamma )
     * m.multiplyMatrices( m1, m2 )
     * m.multiply( m3 )
     */    
    get matrix4() {
        return [...this.matrix,
            /**
             * Array with matrix values.
             * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1].distinct()
             */
            'elements',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Plane.d.ts
    plane: [
        /**
         * @default new THREE.Vector3( 1, 0, 0 )
         */
        'normal',
        /**
         * @default 0
         */
        'constant',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Quaternion.d.ts
    quaternionLike: [
    ].distinct(),
    /**
     * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
     *
     * @example
     * const quaternion = new THREE.Quaternion()
     * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 )
     * const vector = new THREE.Vector3( 1, 0, 0 )
     * vector.applyQuaternion( quaternion )
     */
    quaternion: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
        /**
         * @default 1
         */
        'w',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Ray.d.ts
    ray: [
        /**
         * @default new THREE.Vector3()
         */
        'origin',
        /**
         * @default new THREE.Vector3( 0, 0, - 1 )
         */
        'direction',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Sphere.d.ts
    sphere: [
        /**
         * @default new Vector3()
         */
        'center',
        /**
         * @default 1
         */
        'radius',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Spherical.d.ts
    spherical: [
        /**
         * @default 1
         */
        'radius',
        /**
         * @default 0
         */
        'phi',
        /**
         * @default 0
         */
        'theta',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\SphericalHarmonics3.d.ts
    sphericalHarmonics3: [
        /**
         * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
         * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()].distinct()
         */
        'coefficients',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Triangle.d.ts
    triangle: [
        /**
         * @default new THREE.Vector3()
         */
        'a',
        /**
         * @default new THREE.Vector3()
         */
        'b',
        /**
         * @default new THREE.Vector3()
         */
        'c',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector2.d.ts
    vector2Like: [
    ].distinct(),
    /**
     * 2d vector.
     */
    vector2: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        'width',
        'height',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector3.d.ts
    vector3Like: [
    ].distinct(),
    /**
     * 3d vector.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
     *
     * @example
     * const a = new THREE.Vector3( 1, 0, 0 )
     * const b = new THREE.Vector3( 0, 1, 0 )
     * const c = new THREE.Vector3()
     * c.crossVectors( a, b )
     */
    vector3: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector4.d.ts
    vector4Like: [
    ].distinct(),
    /**
     * 4D vector.
     */
    vector4: [
        /**
         * @default 0
         */
        'x',
        /**
         * @default 0
         */
        'y',
        /**
         * @default 0
         */
        'z',
        /**
         * @default 0
         */
        'w',
        'width',
        'height',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\CubicInterpolant.d.ts    
    get cubicInterpolant() {
        return [...this.interpolant,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\DiscreteInterpolant.d.ts    
    get discreteInterpolant() {
        return [...this.interpolant,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\LinearInterpolant.d.ts    
    get linearInterpolant() {
        return [...this.interpolant,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\interpolants\QuaternionLinearInterpolant.d.ts    
    get quaternionLinearInterpolant() {
        return [...this.interpolant,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\BatchedMesh.d.ts
    /**
     * A special version of {@link Mesh} with multi draw batch rendering support. Use {@link BatchedMesh} if you have to
     * render a large number of objects with the same material but with different world transformations and geometry. The
     * usage of {@link BatchedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering
     * performance in your application.
     *
     * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/WEBGl_multi_draw WEBGl_multi_draw extension} is not
     * supported then a less performant callback is used.
     *
     * @example
     * const box = new THREE.BoxGeometry( 1, 1, 1 )
     * const sphere = new THREE.BoxGeometry( 1, 1, 1 )
     * const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
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
     * scene.add( batchedMesh )
     *
     * @also Example: {@link https://threejs.org/examples/#webgl_mesh_batch WebGl / mesh / batch}
     */    
    get batchedMesh() {
        return [...this.mesh,
            /**
             * This bounding box encloses all instances of the {@link BatchedMesh}. Can be calculated with
             * {@link .computeBoundingBox()}.
             * @default null
             */
            'boundingBox',
            /**
             * This bounding sphere encloses all instances of the {@link BatchedMesh}. Can be calculated with
             * {@link .computeBoundingSphere()}.
             * @default null
             */
            'boundingSphere',
            'customSort',
            /**
             * If true then the individual objects within the {@link BatchedMesh} are frustum culled.
             * @default true
             */
            'perObjectFrustumCulled',
            /**
             * If true then the individual objects within the {@link BatchedMesh} are sorted to improve overdraw-related
             * artifacts. If the material is marked as "transparent" objects are rendered back to front and if not then they are
             * rendered front to back.
             * @default true
             */
            'sortObjects',
            /**
             * Read-only flag to check if a given object is of type {@link BatchedMesh}.
             */
            'isBatchedMesh',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Bone.d.ts
    /**
     * A {@link Bone} which is part of a {@link THREE.Skeleton | Skeleton}
     * @remarks
     * The skeleton in turn is used by the {@link THREE.SkinnedMesh | SkinnedMesh}
     * Bones are almost identical to a blank {@link THREE.Object3d | Object3d}.
     * @example
     * ```typescript
     * const root = new THREE.Bone()
     * const child = new THREE.Bone()
     * root.add(child)
     * child.position.y = 5
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Bone | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js | Source}
     */
    bone: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Group.d.ts
    /**
     * Its purpose is to make working with groups of objects syntactically clearer.
     * @remarks This is almost identical to an {@link Object3d | Object3d}
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0x00ff00
     * })
     * const cubeA = new THREE.Mesh(geometry, material)
     * cubeA.position.set(100, 100, 0)
     * const cubeB = new THREE.Mesh(geometry, material)
     * cubeB.position.set(-100, -100, 0)
     * //create a {@link Group} and add the two cubes
     * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group()
     * group.add(cubeA)
     * group.add(cubeB)
     * scene.add(group)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js | Source}
     */
    group: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\InstancedMesh.d.ts    
    get instancedMeshEventMap() {
        return [...this.object3dEventMap,
        ].distinct()
    },
    /**
     * A special version of {@link THREE.Mesh | Mesh} with instanced rendering support
     * @remarks
     * Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material but with different world transformations
     * @remarks
     * The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_dynamic | WebGl / instancing / dynamic}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_performance | WebGl / instancing / performance}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_scatter | WebGl / instancing / scatter}
     * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | WebGl / instancing / raycast}
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/InstancedMesh | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/InstancedMesh.js | Source}
     */    
    get instancedMesh() {
        return [...this.mesh,
            /**
             * Create a new instance of {@link InstancedMesh}
             * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}.
             * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
             * @param count The **maximum** number of instances of this Mesh. Expects a `Integer`
             */
            /**
             * Read-only flag to check if a given object is of type {@link InstancedMesh}.
             * @remarks This is a _constant_ value
             * @defaultValue `true`
             */
            /**
             * This bounding box encloses all instances of the {@link InstancedMesh},, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
             * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
             * @defaultValue `null`
             */
            'boundingBox',
            /**
             * This bounding sphere encloses all instances of the {@link InstancedMesh}, which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
             * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
             * @defaultValue `null`
             */
            'boundingSphere',
            /**
             * The number of instances.
             * @remarks
             * The `count` value passed into the {@link InstancedMesh | constructor} represents the **maximum** number of instances of this mesh.
             * You can change the number of instances at runtime to an integer value in the range `[0, count].distinct()`.
             * @remarks If you need more instances than the original `count` value, you have to create a new InstancedMesh.
             * @remarks Expects a `Integer`
             */
            'count',
            /**
             * Represents the colors of all instances.
             * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate()} flag to `true` if you modify instanced data via {@link setColorAt | .setColorAt()}.
             * @defaultValue `null`
             */
            'instanceColor',
            /**
             * Represents the local transformation of all instances.
             * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate()} flag to `true` if you modify instanced data via {@link setMatrixAt | .setMatrixAt()}.
             */
            'instanceMatrix',
            /**
             * Represents the morph target weights of all instances. You have to set its {@link .needsUpdate} flag to true if
             * you modify instanced data via {@link .setMorphAt}.
             */
            'morphTexture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Line.d.ts
    /**
     * A continuous line.
     * @remarks
     * This is nearly the same as {@link THREE.LineSegments | LineSegments},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_STRIP}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINES}
     * @example
     * ```typescript
     * const material = new THREE.LineBasicMaterial({
     *     color: 0x0000ff
     * })
     * const points = [].distinct()
     * points.push(new THREE.Vector3(-10, 0, 0))
     * points.push(new THREE.Vector3(0, 10, 0))
     * points.push(new THREE.Vector3(10, 0, 0))
     * const geometry = new THREE.BufferGeometry().setFromPoints(points)
     * const {@link Line} = new THREE.Line(geometry, material)
     * scene.add(line)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Line | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Line.js | Source}
     */    
    get line() {
        return [...this.object3d,
            /**
             * Vertices representing the {@link Line} segment(s).
             */
            'geometry',
            /**
             * Material for the line.
             */
            'material',
            /**
             * An array of weights typically from `0-1` that specify how much of the morph is applied.
             * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
             */
            'morphTargetInfluences',
            /**
             * A dictionary of morphTargets based on the `morphTarget.name` property.
             * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
             */
            'morphTargetDictionary',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LineLoop.d.ts
    /**
     * A continuous line that connects back to the start.
     * @remarks
     * This is nearly the same as {@link THREE.Line | Line},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_LOOP}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_STRIP},
     * which draws a straight line to the next vertex, and connects the last vertex back to the first.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js | Source}
     */    
    get lineLoop() {
        return [...this.line,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LineSegments.d.ts
    /**
     * A series of lines drawn between pairs of vertices.
     * @remarks
     * This is nearly the same as {@link THREE.Line | Line},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINES}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_STRIP}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js | Source}
     */    
    get lineSegments() {
        return [...this.line,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LOD.d.ts
    /**
     * Every level is associated with an object, and rendering can be switched between them at the distances specified
     * @remarks
     * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
     * @example
     * ```typescript
     * const {@link LOD} = new THREE.LOD()
     * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
     * for (let i = 0; i & lt; 3; i++) {
     *     const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
     *     const mesh = new THREE.Mesh(geometry, material)
     *     lod.addLevel(mesh, i * 75)
     * }
     * scene.add(lod)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_lod | webgl / {@link LOD} }
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LOD | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LOD.js | Source}
     */
    lOD: [
        /**
         * An array of level objects
         */
        'levels',
        /**
         * Whether the {@link LOD} object is updated automatically by the renderer per frame or not.
         * If set to `false`, you have to call {@link update | .update()} in the render loop by yourself.
         * @defaultValue `true`
         */
        'autoUpdate',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Mesh.d.ts
    /**
     * Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh | polygon mesh} based objects.
     * @remarks
     * Also serves as a base for other classes such as {@link THREE.SkinnedMesh | SkinnedMesh},  {@link THREE.InstancedMesh | InstancedMesh}.
     * @example
     * ```typescript
     * const geometry = new THREE.BoxGeometry(1, 1, 1)
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffff00
     * })
     * const {@link Mesh} = new THREE.Mesh(geometry, material)
     * scene.add(mesh)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Mesh | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js | Source}
     */    
    get mesh() {
        return [...this.object3d,
            /**
             * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
             * @defaultValue {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             */
            'geometry',
            /**
             * An instance of material derived from the {@link THREE.Material | Material} base class or an array of materials, defining the object's appearance.
             * @defaultValue {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
             */
            'material',
            /**
             * An array of weights typically from `0-1` that specify how much of the morph is applied.
             * @defaultValue `undefined`, _but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}._
             */
            'morphTargetInfluences',
            /**
             * A dictionary of morphTargets based on the `morphTarget.name` property.
             * @defaultValue `undefined`, _but rebuilt by {@link updateMorphTargets | .updateMorphTargets()}._
             */
            'morphTargetDictionary',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Points.d.ts
    /**
     * A class for displaying {@link Points}
     * @remarks
     * The {@link Points} are rendered by the {@link THREE.WebGlRenderer | WebGlRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.POINTS}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js | Source}
     */    
    get points() {
        return [...this.object3d,
            /**
             * An array of weights typically from `0-1` that specify how much of the morph is applied.
             * @defaultValue `undefined`, _but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}._
             */
            'morphTargetInfluences',
            /**
             * A dictionary of morphTargets based on the `morphTarget.name` property.
             * @defaultValue `undefined`, _but rebuilt by {@link updateMorphTargets | .updateMorphTargets()}._
             */
            'morphTargetDictionary',
            /**
             * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
             * @remarks each vertex designates the position of a particle in the system.
             */
            'geometry',
            /**
             * An instance of {@link THREE.Material | Material}, defining the object's appearance.
             * @defaultValue {@link THREE.PointsMaterial | `new THREE.PointsMaterial()`}, _with randomised colour_.
             */
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Skeleton.d.ts
    /**
     * Use an array of {@link Bone | bones} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh | SkinnedMesh}.
     * @example
     * ```typescript
     * // Create a simple "arm"
     * const bones = [].distinct()
     * const shoulder = new THREE.Bone()
     * const elbow = new THREE.Bone()
     * const hand = new THREE.Bone()
     * shoulder.add(elbow)
     * elbow.add(hand)
     * bones.push(shoulder)
     * bones.push(elbow)
     * bones.push(hand)
     * shoulder.position.y = -5
     * elbow.position.y = 0
     * hand.position.y = 5
     * const armSkeleton = new THREE.Skeleton(bones)
     * See the[page: SkinnedMesh].distinct() page
     * for an example of usage with standard[page: BufferGeometry].distinct().
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Skeleton | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Skeleton.js | Source}
     */
    skeleton: [
        /**
         * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
         * @remarks This gets automatically assigned and shouldn't be edited.
         */
        'uuid',
        /**
         * The array of {@link THREE.Bone | Bones}.
         * @remarks Note this is a copy of the original array, not a reference, so you can modify the original array without effecting this one.
         */
        'bones',
        /**
         * An array of {@link Matrix4 | Matrix4s} that represent the inverse of the {@link THREE.Matrix4 | matrixWorld} of the individual bones.
         */
        'boneInverses',
        /**
         * The array buffer holding the bone data when using a vertex texture.
         */
        'boneMatrices',
        /**
         * The {@link THREE.DataTexture | DataTexture} holding the bone data when using a vertex texture.
         */
        'boneTexture',
        'frame',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\SkinnedMesh.d.ts
    /**
     * A mesh that has a {@link THREE.Skeleton | Skeleton} with {@link Bone | bones} that can then be used to animate the vertices of the geometry.
     * @example
     * ```typescript
     * const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30)
     * // create the skin indices and skin weights manually
     * // (typically a loader would read this data from a 3d model for you)
     * const position = geometry.attributes.position
     * const vertex = new THREE.Vector3()
     * const skinIndices = [].distinct()
     * const skinWeights = [].distinct()
     * for (let i = 0; i & lt; position.count; i++) {
     *     vertex.fromBufferAttribute(position, i)
     *     // compute skinIndex and skinWeight based on some configuration data
     *     const y = (vertex.y + sizing.halfHeight)
     *     const skinIndex = Math.floor(y / sizing.segmentHeight)
     *     const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight
     *     skinIndices.push(skinIndex, skinIndex + 1, 0, 0)
     *     skinWeights.push(1 - skinWeight, skinWeight, 0, 0)
     * }
     * geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
     * geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))
     * // create skinned mesh and skeleton
     * const mesh = new THREE.SkinnedMesh(geometry, material)
     * const skeleton = new THREE.Skeleton(bones)
     * // see example from THREE.Skeleton
     * const rootBone = skeleton.bones[0].distinct()
     * mesh.add(rootBone)
     * // bind the skeleton to the mesh
     * mesh.bind(skeleton)
     * // move the bones and manipulate the model
     * skeleton.bones[0].distinct().rotation.x = -0.1
     * skeleton.bones[1].distinct().rotation.x = 0.2
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/SkinnedMesh | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/SkinnedMesh.js | Source}
     */    
    get skinnedMesh() {
        return [...this.mesh,
            /**
             * Either {@link AttachedBindMode} or {@link DetachedBindMode}. {@link AttachedBindMode} means the skinned mesh
             * shares the same world space as the skeleton. This is not true when using {@link DetachedBindMode} which is useful
             * when sharing a skeleton across multiple skinned meshes.
             * @defaultValue `AttachedBindMode`
             */
            'bindMode',
            /**
             * The base matrix that is used for the bound bone transforms.
             */
            'bindMatrix',
            /**
             * The base matrix that is used for resetting the bound bone transforms.
             */
            'bindMatrixInverse',
            /**
             * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
             * @default `null`
             */
            'boundingBox',
            /**
             * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
             * @default `null`
             */
            'boundingSphere',
            /**
             * {@link THREE.Skeleton | Skeleton} representing the bone hierarchy of the skinned mesh.
             */
            'skeleton',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Sprite.d.ts
    /**
     * A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied.
     * @remarks Sprites do not cast shadows, setting `castShadow = true` will have no effect.
     * @example
     * ```typescript
     * const map = new THREE.TextureLoader().load('sprite.png')
     * const material = new THREE.SpriteMaterial({
     *     map: map
     * })
     * const {@link Sprite} = new THREE.Sprite(material)
     * scene.add(sprite)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Sprite | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Sprite.js | Source}
     */
    sprite: [
        /**
         * Whether the object gets rendered into shadow map.
         * No effect in {@link Sprite}.
         * @ignore
         * @hidden
         * @defaultValue `false`
         */
        'castShadow',
        'geometry',
        /**
         * An instance of {@link THREE.SpriteMaterial | SpriteMaterial}, defining the object's appearance.
         * @defaultValue {@link THREE.SpriteMaterial | `new SpriteMaterial()`}, _with white color_.
         */
        'material',
        /**
         * The sprite's anchor point, and the point around which the {@link Sprite} rotates.
         * A value of (0.5, 0.5) corresponds to the midpoint of the sprite.
         * A value of (0, 0) corresponds to the lower left corner of the sprite.
         * @defaultValue {@link THREE.Vector2 | `new Vector2(0.5, 0.5)`}.
         */
        'center',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGl3dRenderTarget.d.ts
    /**
     * Represents a three-dimensional render target.
     */    
    get webGl3dRenderTarget() {
        return [...this.webGlRenderTarget,
            /**
             * Creates a new WebGl3dRenderTarget.
             *
             * @param width the width of the render target, in pixels. Default is `1`.
             * @param height the height of the render target, in pixels. Default is `1`.
             * @param depth the depth of the render target. Default is `1`.
             * @param options optional object that holds texture parameters for an auto-generated target texture and
             * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
             */
            'textures',
            /**
             * The texture property is overwritten with an instance of {@link Data3dTexture}.
             */
            'texture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlArrayRenderTarget.d.ts
    /**
     * This type of render target represents an array of textures.
     */    
    get webGlArrayRenderTarget() {
        return [...this.webGlRenderTarget,
            /**
             * Creates a new WebGlArrayRenderTarget.
             *
             * @param width the width of the render target, in pixels. Default is `1`.
             * @param height the height of the render target, in pixels. Default is `1`.
             * @param depth the depth/layer count of the render target. Default is `1`.
             * @param options optional object that holds texture parameters for an auto-generated target texture and
             * depthBuffer/stencilBuffer booleans. See {@link WebGlRenderTarget} for details.
             */
            'textures',
            /**
             * The texture property is overwritten with an instance of {@link DataArrayTexture}.
             */
            'texture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlCubeRenderTarget.d.ts    
    get webGlCubeRenderTarget() {
        return [...this.webGlRenderTarget,
            'textures',
            'texture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderer.d.ts

    webGlRendererParameters: [
        /**
         * A Canvas where the renderer draws its output.
         */
        'canvas',
        /**
         * A WebGl Rendering Context.
         * (https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext)
         * Default is null
         */
        'context',
        /**
         * shader precision. Can be "highp", "mediump" or "lowp".
         */
        'precision',
        /**
         * default is false.
         */
        'alpha',
        /**
         * default is true.
         */
        'premultipliedAlpha',
        /**
         * default is false.
         */
        'antialias',
        /**
         * default is false.
         */
        'stencil',
        /**
         * default is false.
         */
        'preserveDrawingBuffer',
        /**
         * Can be "high-performance", "low-power" or "default"
         */
        'powerPreference',
        /**
         * default is true.
         */
        'depth',
        /**
         * default is false.
         */
        'logarithmicDepthBuffer',
        /**
         * default is false.
         */
        'failIfMajorPerformanceCaveat',
    ].distinct(),
    webGlDebug: [
        /**
         * Enables error checking and reporting when shader programs are being compiled.
         */
        'checkShaderErrors',
        /**
         * A callback function that can be used for custom error reporting. The callback receives the WebGl context, an
         * instance of WebGlProgram as well two instances of WebGlShader representing the vertex and fragment shader.
         * Assigning a custom function disables the default error reporting.
         * @default `null`
         */
        'onShaderError',
    ].distinct(),
    /**
     * The WebGl renderer displays your beautifully crafted scenes using WebGl, if your device supports it.
     * This renderer has way better performance than CanvasRenderer.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGlRenderer.js|src/renderers/WebGlRenderer.js}
     */    
    get webGlRenderer() {
        return [...this.renderer,
            /**
             * parameters is an optional object with properties defining the renderer's behaviour.
             * The constructor also accepts no parameters at all.
             * In all cases, it will assume sane defaults when parameters are missing.
             */
            /**
             * A Canvas where the renderer draws its output.
             * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
             * @default document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' )
             */
            'domElement',
            /**
             * Defines whether the renderer should automatically clear its output before rendering.
             * @default true
             */
            'autoClear',
            /**
             * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
             * @default true
             */
            'autoClearColor',
            /**
             * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
             * @default true
             */
            'autoClearDepth',
            /**
             * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
             * @default true
             */
            'autoClearStencil',
            /**
             * Debug configurations.
             * @default { checkShaderErrors: true }
             */
            'debug',
            /**
             * Defines whether the renderer should sort objects. Default is true.
             * @default true
             */
            'sortObjects',
            /**
             * @default [].distinct()
             */
            'clippingPlanes',
            /**
             * @default false
             */
            'localClippingEnabled',
            'extensions',
            /**
             * Color space used for output to HTMLCanvasElement. Supported values are
             * {@link SRGBColorSpace} and {@link LinearSRGBColorSpace}.
             * @default THREE.SRGBColorSpace.
             */
            'outputColorSpace',
            /**
             * @deprecated Migrate your lighting according to the following guide:
             * https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.
             * @default true
             */
            'useLegacyLights',
            /**
             * @default THREE.NoToneMapping
             */
            'toneMapping',
            /**
             * @default 1
             */
            'toneMappingExposure',
            'info',
            'shadowMap',
            'pixelRatio',
            'capabilities',
            'properties',
            'renderLists',
            'state',
            'xr',
            /**
             * @deprecated Use {@link WebGlRenderer#xr .xr} instead.
             */
            'vr',
            /**
             * @deprecated Use {@link WebGlShadowMap#enabled .shadowMap.enabled} instead.
             */
            'shadowMapEnabled',
            /**
             * @deprecated Use {@link WebGlShadowMap#type .shadowMap.type} instead.
             */
            'shadowMapType',
            /**
             * @deprecated Use {@link WebGlShadowMap#cullFace .shadowMap.cullFace} instead.
             */
            'shadowMapCullFace',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderTarget.d.ts    
    get webGlRenderTarget() {
        return [
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\ShaderChunk.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\ShaderLib.d.ts
    shaderLibShader: [
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\UniformsLib.d.ts
    // eslint-disable-next-line @typescript-eslint/naming-convention
    iUniform: [
        'value',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\shaders\UniformsUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlAttributes.d.ts
    webGlAttributes: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlBindingStates.d.ts
    webGlBindingStates: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlBufferRenderer.d.ts
    webGlBufferRenderer: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCapabilities.d.ts
    webGlCapabilitiesParameters: [
        'precision',
        'logarithmicDepthBuffer',
    ].distinct(),
    webGlCapabilities: [
        'getMaxAnisotropy',
        'getMaxPrecision',
        'textureFormatReadable',
        'textureTypeReadable',
        'precision',
        'logarithmicDepthBuffer',
        'maxTextures',
        'maxVertexTextures',
        'maxTextureSize',
        'maxCubemapSize',
        'maxAttributes',
        'maxVertexUniforms',
        'maxVaryings',
        'maxFragmentUniforms',
        'vertexTextures',
        'maxSamples',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlClipping.d.ts
    webGlClipping: [
        'uniform',
        /**
         * @default 0
         */
        'numPlanes',
        /**
         * @default 0
         */
        'numIntersection',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeMaps.d.ts
    webGlCubeMaps: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCubeUvMaps.d.ts
    webGlCubeUvMaps: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlExtensions.d.ts
    webGlExtensions: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlGeometries.d.ts
    webGlGeometries: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlIndexedBufferRenderer.d.ts
    webGlIndexedBufferRenderer: [
        'setMode',
        'setIndex',
        'render',
        'renderInstances',
        'renderMultiDraw',
        'renderMultiDrawInstances',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlInfo.d.ts
    /**
     * An object with a series of statistical information about the graphics board memory and the rendering process.
     */
    webGlInfo: [
        /**
         * @default true
         */
        'autoReset',
        /**
         * @default { geometries: 0, textures: 0 }
         */
        'memory',
        /**
         * @default null
         */
        'programs',
        /**
         * @default { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }
         */
        'render',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlLights.d.ts
    webGlLightsState: [
        'version',
        'hash',
        'ambient',
        'probe',
        'directional',
        'directionalShadow',
        'directionalShadowMap',
        'directionalShadowMatrix',
        'spot',
        'spotShadow',
        'spotShadowMap',
        'spotShadowMatrix',
        'rectArea',
        'point',
        'pointShadow',
        'pointShadowMap',
        'pointShadowMatrix',
        'hemi',
        'numSpotLightShadowsWithMaps',
        'numLightProbes',
    ].distinct(),
    webGlLights: [
        'state',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlObjects.d.ts
    webGlObjects: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProgram.d.ts
    webGlProgram: [
        'name',
        'id',
        'cacheKey', // unique identifier for this program, used for looking up compiled programs from cache.
        /**
         * @default 1
         */
        'usedTimes',
        'program',
        'vertexShader',
        'fragmentShader',
        /**
         * @deprecated Use {@link WebGlProgram#getUniforms getUniforms()} instead.
         */
        'uniforms',
        /**
         * @deprecated Use {@link WebGlProgram#getAttributes getAttributes()} instead.
         */
        'attributes',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlPrograms.d.ts
    webGlProgramParameters: [
        'shaderID',
        'shaderType',
        'shaderName',
        'vertexShader',
        'fragmentShader',
        'defines',
        'customVertexShaderID',
        'customFragmentShaderID',
        'isRawShaderMaterial',
        'glslVersion',
        'precision',
        'batching',
        'instancing',
        'instancingColor',
        'instancingMorph',
        'supportsVertexTextures',
        'outputColorSpace',
        'alphaToCoverage',
        'map',
        'matcap',
        'envMap',
        'envMapMode',
        'envMapCubeUvHeight',
        'aoMap',
        'lightMap',
        'bumpMap',
        'normalMap',
        'displacementMap',
        'emissiveMap',
        'normalMapObjectSpace',
        'normalMapTangentSpace',
        'metalnessMap',
        'roughnessMap',
        'anisotropy',
        'anisotropyMap',
        'clearcoat',
        'clearcoatMap',
        'clearcoatNormalMap',
        'clearcoatRoughnessMap',
        'dispersion',
        'iridescence',
        'iridescenceMap',
        'iridescenceThicknessMap',
        'sheen',
        'sheenColorMap',
        'sheenRoughnessMap',
        'specularMap',
        'specularColorMap',
        'specularIntensityMap',
        'transmission',
        'transmissionMap',
        'thicknessMap',
        'gradientMap',
        'opaque',
        'alphaMap',
        'alphaTest',
        'alphaHash',
        'combine',
        //
        'mapUv',
        'aoMapUv',
        'lightMapUv',
        'bumpMapUv',
        'normalMapUv',
        'displacementMapUv',
        'emissiveMapUv',
        'metalnessMapUv',
        'roughnessMapUv',
        'anisotropyMapUv',
        'clearcoatMapUv',
        'clearcoatNormalMapUv',
        'clearcoatRoughnessMapUv',
        'iridescenceMapUv',
        'iridescenceThicknessMapUv',
        'sheenColorMapUv',
        'sheenRoughnessMapUv',
        'specularMapUv',
        'specularColorMapUv',
        'specularIntensityMapUv',
        'transmissionMapUv',
        'thicknessMapUv',
        'alphaMapUv',
        //
        'vertexTangents',
        'vertexColors',
        'vertexAlphas',
        'vertexUv1s',
        'vertexUv2s',
        'vertexUv3s',
        'pointsUvs',
        'fog',
        'useFog',
        'fogExp2',
        'flatShading',
        'sizeAttenuation',
        'logarithmicDepthBuffer',
        'skinning',
        'morphTargets',
        'morphNormals',
        'morphColors',
        'morphTargetsCount',
        'morphTextureStride',
        'numDirLights',
        'numPointLights',
        'numSpotLights',
        'numSpotLightMaps',
        'numRectAreaLights',
        'numHemiLights',
        'numDirLightShadows',
        'numPointLightShadows',
        'numSpotLightShadows',
        'numSpotLightShadowsWithMaps',
        'numLightProbes',
        'numClippingPlanes',
        'numClipIntersection',
        'dithering',
        'shadowMapEnabled',
        'shadowMapType',
        'toneMapping',
        'useLegacyLights',
        'decodeVideoTexture',
        'premultipliedAlpha',
        'doubleSided',
        'flipSided',
        'useDepthPacking',
        'depthPacking',
        'index0AttributeName',
        'extensionClipCullDistance',
        'extensionMultiDraw',
        'rendererExtensionParallelShaderCompile',
        'customProgramCacheKey',
    ].distinct(),    
    get webGlProgramParametersWithUniforms() {
        return [...this.webGlProgramParameters,
            'uniforms',
        ].distinct()
    },
    webGlPrograms: [
        'programs',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProperties.d.ts
    webGlProperties: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlRenderLists.d.ts
    renderItem: [
        'id',
        'object',
        'geometry',
        'material',
        'program',
        'groupOrder',
        'renderOrder',
        'z',
        'group',
    ].distinct(),
    webGlRenderList: [
        /**
         * @default [].distinct()
         */
        'opaque',
        /**
         * @default [].distinct()
         */
        'transparent',
        /**
         * @default [].distinct()
         */
        'transmissive',
    ].distinct(),
    webGlRenderLists: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlShadowMap.d.ts
    webGlShadowMap: [
        /**
         * @default false
         */
        'enabled',
        /**
         * @default true
         */
        'autoUpdate',
        /**
         * @default false
         */
        'needsUpdate',
        /**
         * @default THREE.PCFShadowMap
         */
        'type',
        /**
         * @deprecated Use {@link Material#shadowSide} instead.
         */
        'cullFace',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlState.d.ts
    webGlColorBuffer: [
    ].distinct(),
    webGlDepthBuffer: [
    ].distinct(),
    webGlStencilBuffer: [
    ].distinct(),
    webGlState: [
        'buffers',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlTextures.d.ts
    webGlTextures: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniforms.d.ts
    webGlUniforms: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniformsGroups.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUtils.d.ts
    webGlUtils: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRController.d.ts    
    get xrJointSpace() {
        return [...this.group,
        ].distinct()
    },
    xrHandInputState: [
        'pinching',
    ].distinct(),    
    get webXRSpaceEventMap() {
        return [...this.object3dEventMap,
            'select',
            'selectstart',
            'selectend',
            'squeeze',
            'squeezestart',
            'squeezeend',
            'connected',
            'disconnected',
            'pinchend',
            'pinchstart',
            'move',
        ].distinct()
    },    
    get xrHandSpace() {
        return [...this.group,
        ].distinct()
    },    
    get xrTargetRaySpace() {
        return [...this.group,
            'hasLinearVelocity',
            'hasAngularVelocity',
        ].distinct()
    },    
    get xrGripSpace() {
        return [...this.group,
            'hasLinearVelocity',
            'hasAngularVelocity',
        ].distinct()
    },
    webXRController: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRDepthSensing.d.ts
    // FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr
    xrWebGlDepthInformation: [].distinct(),
    webXRDepthSensing: [
        'texture',
        'mesh',
        'depthNear',
        'depthFar',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRManager.d.ts
    // https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
    /// 
    webXRManagerEventMap: [
        'sessionstart',
        'sessionend',
        'planeadded',
        'planeremoved',
        'planechanged',
        'planesdetected',
    ].distinct(),    
    get webXRManager() {
        return [...this.eventDispatcher,
            /**
             * @default false
             */
            'enabled',
            /**
             * @default false
             */
            'isPresenting',
            /**
             * @default true
             */
            'cameraAutoUpdate',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\Fog.d.ts
    fogBase: [
        /**
         * Optional name of the `Fog` object
         * @remarks _(doesn't need to be unique)_.
         * @defaultValue `""`
         */
        'name',
        /**
         * Fog color.
         * @remarks If set to black, far away objects will be rendered black.
         */
        'color',
    ].distinct(),
    /**
     * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
     *  @example
     * ```typescript
     * const scene = new THREE.Scene()
     * scene.fog = new THREE.Fog(0xcccccc, 10, 15)
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Fog | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js | Source}
     */    
    get fog() {
        return [...this.fogBase,
            /**
             * Optional name of the object
             * @remarks _(doesn't need to be unique)_.
             * @defaultValue `""`
             */
            'name',
            /**
             * Fog color.
             * @remarks If set to black, far away objects will be rendered black.
             */
            'color',
            /**
             * The minimum distance to start applying fog.
             * @remarks Objects that are less than **near** units from the active camera won't be affected by fog.
             * @defaultValue `1`
             * @remarks Expects a `Float`
             */
            'near',
            /**
             * The maximum distance at which fog stops being calculated and applied.
             * @remarks Objects that are more than **far** units away from the active camera won't be affected by fog.
             * @defaultValue `1000`
             * @remarks Expects a `Float`
             */
            'far',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\FogExp2.d.ts
    /**
     * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
     * @example
     * ```typescript
     * const scene = new THREE.Scene()
     * scene.fog = new THREE.FogExp2(0xcccccc, 0.002)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain | webgl geometry terrain}
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js | Source}
     */    
    get fogExp2() {
        return [...this.fogBase,
            /**
             * Optional name of the object
             * @remarks _(doesn't need to be unique)_.
             * @defaultValue `""`
             */
            'name',
            /**
             * Fog color.
             * @remarks If set to black, far away objects will be rendered black.
             */
            'color',
            /**
             * Defines how fast the fog will grow dense.
             * @defaultValue `0.00025`
             * @remarks Expects a `Float`
             */
            'density',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\Scene.d.ts
    /**
     * Scenes allow you to set up what and where is to be rendered by three.js
     * @remarks
     * This is where you place objects, lights and cameras.
     * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison | webgl multiple scenes comparison}
     * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene | Manual: Creating a scene}
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js | Source}
     */    
    get scene() {
        return [...this.object3d,
            /**
             * @defaultValue `Scene`
             */
            /**
             * A {@link Fog | fog} instance defining the type of fog that affects everything rendered in the scene.
             * @defaultValue `null`
             */
            'fog',
            /**
             * Sets the blurriness of the background. Only influences environment maps assigned to {@link THREE.Scene.background | Scene.background}.
             * @defaultValue `0`
             * @remarks Expects a `Float` between `0` and `1`.
             */
            'backgroundBlurriness',
            /**
             * Attenuates the color of the background. Only applies to background textures.
             * @defaultValue `1`
             * @remarks Expects a `Float`
             */
            'backgroundIntensity',
            /**
             * Forces everything in the {@link Scene} to be rendered with the defined material.
             * @defaultValue `null`
             */
            'overrideMaterial',
            /**
             * Defines the background of the scene.
             * @remarks Valid inputs are:
             *  - A {@link THREE.Color | Color} for defining a uniform colored background.
             *  - A {@link THREE.Texture | Texture} for defining a (flat) textured background.
             *  - Texture cubes ({@link THREE.CubeTexture | CubeTexture}) or equirectangular textures for defining a skybox.
             * @defaultValue `null`
             */
            'background',
            /**
             * The rotation of the background in radians. Only influences environment maps assigned to {@link .background}.
             * Default is `(0,0,0)`.
             */
            'backgroundRotation',
            /**
             * Sets the environment map for all physical materials in the scene.
             * However, it's not possible to overwrite an existing texture assigned to {@link THREE.MeshStandardMaterial.envMap | MeshStandardMaterial.envMap}.
             * @defaultValue `null`
             */
            'environment',
            /**
             * Attenuates the color of the environment. Only influences environment maps assigned to {@link Scene.environment}.
             * @default 1
             */
            'environmentIntensity',
            /**
             * The rotation of the environment map in radians. Only influences physical materials in the scene when
             * {@link .environment} is used. Default is `(0,0,0)`.
             */
            'environmentRotation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CanvasTexture.d.ts
    /**
     * Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas | canvas element}.
     * @remarks
     * This is almost the same as the base {@link Texture | Texture} class,
     * except that it sets {@link Texture.needsUpdate | needsUpdate} to `true` immediately.
     * @see {@link THREE.Texture | Texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CanvasTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CanvasTexture.js | Source}
     */    
    get canvasTexture() {
        return [...this.texture,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedArrayTexture.d.ts
    /**
     * Creates an texture 2d array based on data in compressed form, for example from a
     * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js | Source}
     */    
    get compressedArrayTexture() {
        return [...this.compressedTexture,
            /**
             * Overridden with a object containing width and height.
             * @override
             */
            'image',
            /**
             * This defines how the texture is wrapped in the depth direction.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @defaultValue {@link THREE.ClampToEdgeWrapping}
             */
            'wrapR',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedCubeTexture.d.ts    
    get compressedCubeTexture() {
        return [...this.compressedTexture,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CompressedTexture.d.ts
    /**
     * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js | Source}
     */    
    get compressedTexture() {
        return [...this.texture,
            /**
             * Overridden with a object containing width and height.
             * @override
             */
            'image',
            /**
             *  The mipmaps array should contain objects with data, width and height. The mipmaps should be of the correct {@link format} and {@link type}.
             */
            'mipmaps',
            /**
             * @override
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link THREE.CompressedPixelFormat}
             */
            'format',
            /**
             * @override No flipping for cube textures. (also flipping doesn't work for compressed textures)
             * @defaultValue `false`
             */
            'flipY',
            /**
             * @override Can't generate mipmaps for compressed textures. mips must be embedded in DDS files
             * @defaultValue `false`
             */
            'generateMipmaps',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\CubeTexture.d.ts
    /**
     * Creates a cube texture made up of six images.
     * @remarks
     * {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}.
     * The only differences are that the images are an array of _6_ images as opposed to a single image,
     * and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping}
     * @example
     * ```typescript
     * const loader = new THREE.CubeTextureLoader()
     * loader.setPath('textures/cube/pisa/')
     * const textureCube = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'].distinct())
     * const material = new THREE.MeshBasicMaterial({
     *     color: 0xffffff,
     *     envMap: textureCube
     * })
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CubeTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CubeTexture.js | Source}
     */    
    get cubeTexture() {
        return [...this.texture,
            /**
             * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
             * @see {@link Texture.image}
             */
            'image',
            /**
             * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
             * @see {@link Texture.image}
             */
            'images',
            /**
             * @inheritDoc
             * @defaultValue {@link THREE.CubeReflectionMapping}
             */
            'mapping',
            /**
             * @inheritDoc
             * @defaultValue `false`
             */
            'flipY',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Data3dTexture.d.ts
    /**
     * Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth
     * @example
     * ```typescript
     * This creates a[name].distinct() with repeating data, 0 to 255
     * // create a buffer with some data
     * const sizeX = 64
     * const sizeY = 64
     * const sizeZ = 64
     * const data = new Uint8Array(sizeX * sizeY * sizeZ)
     * let i = 0
     * for (let z = 0; z & lt; sizeZ; z++) {
     *     for (let y = 0; y & lt; sizeY; y++) {
     *         for (let x = 0; x & lt; sizeX; x++) {
     *             data[i].distinct() = i % 256
     *             i++
     *         }
     *     }
     * }
     * // use the buffer to create the texture
     * const texture = new THREE.Data3dTexture(data, sizeX, sizeY, sizeZ)
     * texture.needsUpdate = true
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d | WebGl2 / materials / texture3d}
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d_partialupdate | WebGl2 / materials / texture3d / partialupdate}
     * @see Example: {@link https://threejs.org/examples/#webgl2_volume_cloud | WebGl2 / volume / cloud}
     * @see Example: {@link https://threejs.org/examples/#webgl2_volume_perlin | WebGl2 / volume / perlin}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Data3dTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Data3dTexture.js | Source}
     */    
    get data3dTexture() {
        return [...this.texture,
            /**
             * Create a new instance of {@link Data3dTexture}
             * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
             * @param width Width of the texture. Default `1`.
             * @param height Height of the texture. Default `1`.
             * @param depth Depth of the texture. Default `1`.
             */
            /**
             * Read-only flag to check if a given object is of type {@link Data3dTexture}.
             * @remarks This is a _constant_ value
             * @defaultValue `true`
             */
            /**
             * Overridden with a record type holding data, width and height and depth.
             * @override
             */
            'image',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'magFilter',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'minFilter',
            /**
             * @override
             * @defaultValue {@link THREE.ClampToEdgeWrapping}
             */
            'wrapR',
            /**
             * @override
             * @defaultValue `false`
             */
            'flipY',
            /**
             * @override
             * @defaultValue `false`
             */
            'generateMipmaps',
            /**
             * @override
             * @defaultValue `1`
             */
            'unpackAlignment',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataArrayTexture.d.ts
    /**
     * Creates an array of textures directly from raw data, width and height and depth
     * @example
     * ```typescript
     * This creates a[name].distinct() where each texture has a different color.
     * // create a buffer with color data
     * const width = 512
     * const height = 512
     * const depth = 100
     * const size = width * height
     * const data = new Uint8Array(4 * size * depth)
     * for (let i = 0; i & lt; depth; i++) {
     *     const color = new THREE.Color(Math.random(), Math.random(), Math.random())
     *     const r = Math.floor(color.r * 255)
     *     const g = Math.floor(color.g * 255)
     *     const b = Math.floor(color.b * 255)
     *     for (let j = 0; j & lt; size; j++) {
     *         const stride = (i * size + j) * 4
     *         data[stride].distinct() = r
     *         data[stride + 1].distinct() = g
     *         data[stride + 2].distinct() = b
     *         data[stride + 3].distinct() = 255
     *     }
     * }
     * // used the buffer to create a [name].distinct()
     * const texture = new THREE.DataArrayTexture(data, width, height, depth)
     * texture.needsUpdate = true
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture2darray | WebGl2 / materials / texture2darray}
     * @see Example: {@link https://threejs.org/examples/#webgl2_rendertarget_texture2darray | WebGl2 / rendertarget / texture2darray}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataArrayTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataArrayTexture.js | Source}
     */    
    get dataArrayTexture() {
        return [...this.texture,
            /**
             * Overridden with a record type holding data, width and height and depth.
             * @override
             */
            'image',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'magFilter',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'minFilter',
            /**
             * @override
             * @defaultValue  {@link THREE.ClampToEdgeWrapping}
             */
            'wrapR',
            /**
             * @override
             * @defaultValue `false`
             */
            'flipY',
            /**
             * @override
             * @defaultValue `false`
             */
            'generateMipmaps',
            /**
             * @override
             * @defaultValue `1`
             */
            'unpackAlignment',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataTexture.d.ts
    /**
     * Creates a texture directly from raw data, width and height.
     * @example
     * ```typescript
     * // create a buffer with color data
     * const width = 512
     * const height = 512
     * const size = width * height
     * const data = new Uint8Array(4 * size)
     * const color = new THREE.Color(0xffffff)
     * const r = Math.floor(color.r * 255)
     * const g = Math.floor(color.g * 255)
     * const b = Math.floor(color.b * 255)
     * for (let i = 0; i & lt; size; i++) {
     *     const stride = i * 4
     *     data[stride].distinct() = r
     *     data[stride + 1].distinct() = g
     *     data[stride + 2].distinct() = b
     *     data[stride + 3].distinct() = 255
     * }
     * // used the buffer to create a [name].distinct()
     * const texture = new THREE.DataTexture(data, width, height)
     * texture.needsUpdate = true
     * ```
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataTexture.js | Source}
     */    
    get dataTexture() {
        return [...this.texture,
            /**
             * Overridden with a record type holding data, width and height and depth.
             * @override
             */
            'image',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'magFilter',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'minFilter',
            /**
             * @override
             * @defaultValue `false`
             */
            'flipY',
            /**
             * @override
             * @defaultValue `false`
             */
            'generateMipmaps',
            /**
             * @override
             * @defaultValue `1`
             */
            'unpackAlignment',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DepthTexture.d.ts
    /**
     * This class can be used to automatically save the depth information of a rendering into a texture
     * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture | depth / texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js | Source}
     */    
    get depthTexture() {
        return [...this.texture,
            /**
             * Overridden with a record type holding width and height.
             * @override
             */
            'image',
            /**
             * @override
             * @defaultValue `false`
             */
            'flipY',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'magFilter',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'minFilter',
            /**
             * @override Depth textures do not use mipmaps.
             * @defaultValue `false`
             */
            'generateMipmaps',
            /**
             * @override
             * @see {@link Texture.format | Texture.format}
             * @defaultValue {@link THREE.DepthFormat}.
             */
            'format',
            /**
             * @override
             * @defaultValue {@link THREE.UnsignedByteType} when {@link format | .format} === {@link THREE.DepthFormat}
             * @defaultValue {@link THREE.UnsignedInt248Type} when {@link format | .format} === {@link THREE.DepthStencilFormat}
             */
            'type',
            /**
             * This is used to define the comparison function used when comparing texels in the depth texture to the value in
             * the depth buffer. Default is `null` which means comparison is disabled.
             *
             * See {@link THREE.TextureComparisonFunction} for functions.
             */
            'compareFunction',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\FramebufferTexture.d.ts
    /**
     * This class can only be used in combination with {@link THREE.WebGlRenderer.copyFramebufferToTexture | WebGlRenderer.copyFramebufferToTexture()}.
     * @example
     * ```typescript
     * const pixelRatio = window.devicePixelRatio
     * const textureSize = 128 * pixelRatio
     *
     * // instantiate a framebuffer texture
     * const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat )
     *
     * // calculate start position for copying part of the frame data
     * const vector = new Vector2()
     * vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2 )
     * vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2 )
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
    get framebufferTexture() {
        return [...this.texture,
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'magFilter',
            /**
             * @override
             * @defaultValue {@link THREE.NearestFilter}
             */
            'minFilter',
            /**
             * @override
             * @defaultValue `false`
             */
            'generateMipmaps',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Source.d.ts
    /**
     * Represents the data {@link Source} of a texture.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js | Source}
     */
    source: [
        /**
         * The actual data of a texture.
         * @remarks The type of this property depends on the texture that uses this instance.
         */
        'data',
        /**
         * This property is only relevant when {@link .needsUpdate} is set to `true` and provides more control on how
         * texture data should be processed.
         * When `dataReady` is set to `false`, the engine performs the memory allocation (if necessary) but does not
         * transfer the data into the Gpu memory.
         * @default true
         */
        'dataReady',
        /**
         * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
         * @remarks This gets automatically assigned and shouldn't be edited.
         */
        'uuid',
        /**
         * This starts at `0` and counts how many times {@link needsUpdate | .needsUpdate} is set to `true`.
         * @remarks Expects a `Integer`
         * @defaultValue `0`
         */
        'version',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Texture.d.ts
    eventTarget:[],
    /** Shim for OffscreenCanvas. */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface    
    get offscreenCanvas() {
        return [...this.eventTarget,

        ].distinct()
    },
    /**
     * Create a {@link Texture} to apply to a surface or as a reflection or refraction map.
     * @remarks
     * After the initial use of a texture, its **dimensions**, {@link format}, and {@link type} cannot be changed
     * Instead, call {@link dispose | .dispose()} on the {@link Texture} and instantiate a new {@link Texture}.
     * @example
     * ```typescript
     * // load a texture, set wrap mode to repeat
     * const texture = new THREE.TextureLoader().load("textures/water.jpg")
     * texture.wrapS = THREE.RepeatWrapping
     * texture.wrapT = THREE.RepeatWrapping
     * texture.repeat.set(4, 4)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_texture_filters | webgl materials texture filters}
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Texture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/Textures/Texture.js | Source}
     */    
    get texture() {
            return [...this.eventDispatcher,
            /**
             * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
             * @remarks This gets automatically assigned and shouldn't be edited.
             */
            'uuid',
            /**
             * Optional name of the object
             * @remarks _(doesn't need to be unique)_.
             * @defaultValue `""`
             */
            'name',
            /**
             * The data definition of a texture. A reference to the data source can be shared across textures.
             * This is often useful in context of spritesheets where multiple textures render the same data
             * but with different {@link Texture} transformations.
             */
            'source',
            /**
             * An image object, typically created using the {@link THREE.TextureLoader.load | TextureLoader.load()} method.
             * @remarks This can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.
             * @remarks To use video as a {@link Texture} you need to have a playing HTML5 video element as a source
             * for your {@link Texture} image and continuously update this {@link Texture}
             * as long as video is playing - the {@link THREE.VideoTexture | VideoTexture} class handles this automatically.
             */
            'image',
            /**
             * Array of user-specified mipmaps
             * @defaultValue `[].distinct()`
             */
            'mipmaps', // ImageData[].distinct() for 2d textures and CubeTexture[].distinct() for cube textures
            /**
             * How the image is applied to the object.
             * @remarks All {@link Texture} types except {@link THREE.CubeTexture} expect the _values_ be {@link THREE.Mapping}
             * @remarks {@link CubeTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @defaultValue _value of_ {@link THREE.Texture.DEFAULT_MAPPING}
             */
            'mapping',
            /**
             * Lets you select the uv attribute to map the texture to. `0` for `uv`, `1` for `uv1`, `2` for `uv2` and `3` for
             * `uv3`.
             */
            'channel',
            /**
             * This defines how the {@link Texture} is wrapped *horizontally* and corresponds to **U** in Uv mapping.
             * @remarks for **WEBGl1** - tiling of images in textures only functions if image dimensions are powers of two
//@ts-ignore
             * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...this.) in terms of pixels.
             * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGl1, not three.js.
             * **WEBGl2** does not have this limitation.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link wrapT}
             * @see {@link repeat}
             * @defaultValue {@link THREE.ClampToEdgeWrapping}
             */
            'wrapS',
            /**
             * This defines how the {@link Texture} is wrapped *vertically* and corresponds to **V** in Uv mapping.
             * @remarks for **WEBGl1** - tiling of images in textures only functions if image dimensions are powers of two
//@ts-ignore
             * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...this.) in terms of pixels.
             * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGl1, not three.js.
             * **WEBGl2** does not have this limitation.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link wrapS}
             * @see {@link repeat}
             * @defaultValue {@link THREE.ClampToEdgeWrapping}
             */
            'wrapT',
            /**
             * How the {@link Texture} is sampled when a texel covers more than one pixel.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link minFilter}
             * @see {@link THREE.MagnificationTextureFilter}
             * @defaultValue {@link THREE.LinearFilter}
             */
            'magFilter',
            /**
             * How the {@link Texture} is sampled when a texel covers less than one pixel.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link magFilter}
             * @see {@link THREE.MinificationTextureFilter}
             * @defaultValue {@link THREE.LinearMipmapLinearFilter}
             */
            'minFilter',
            /**
             * The number of samples taken along the axis through the pixel that has the highest density of texels.
             * @remarks A higher value gives a less blurry result than a basic mipmap, at the cost of more {@link Texture} samples being used.
             * @remarks Use {@link THREE.WebGlCapabilities.getMaxAnisotropy() | renderer.capabilities.getMaxAnisotropy()} to find the maximum valid anisotropy value for the Gpu
             * @remarks This value is usually a power of 2.
             * @default _value of_ {@link THREE.Texture.DEFAULT_ANISOTROPY}. That is normally `1`.
             */
            'anisotropy',
            /**
             * These define how elements of a 2d texture, or texels, are read by shaders.
             * @remarks All {@link Texture} types except {@link THREE.DepthTexture} and {@link THREE.CompressedPixelFormat} expect the _values_ be {@link THREE.PixelFormat}
             * @remarks {@link DepthTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
             * @remarks {@link CompressedPixelFormat} expect the _values_ be {@link THREE.CubeTextureMapping}
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link THREE.PixelFormat}
             * @defaultValue {@link THREE.RGBAFormat}.
             */
            'format',
            /**
             * This must correspond to the {@link Texture.format | .format}.
             * @remarks {@link THREE.UnsignedByteType}, is the type most used by Texture formats.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link THREE.TextureDataType}
             * @defaultValue {@link THREE.UnsignedByteType}
             */
            'type',
            /**
             * The Gpu Pixel Format allows the developer to specify how the data is going to be stored on the Gpu.
             * @remarks Compatible only with {@link WebGl2RenderingContext | WebGl 2 Rendering Context}.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @defaultValue The default value is obtained using a combination of {@link Texture.format | .format} and {@link Texture.type | .type}.
             */
            'internalFormat',
            /**
             * The uv-transform matrix for the texture.
             * @remarks
             * When {@link Texture.matrixAutoUpdate | .matrixAutoUpdate} property is `true`.
             * Will be updated by the renderer from the properties:
             *  - {@link Texture.offset | .offset}
             *  - {@link Texture.repeat | .repeat}
             *  - {@link Texture.rotation | .rotation}
             *  - {@link Texture.center | .center}
             * @remarks
             * When {@link Texture.matrixAutoUpdate | .matrixAutoUpdate} property is `false`.
             * This matrix may be set manually.
             * @see {@link matrixAutoUpdate | .matrixAutoUpdate}
             * @defaultValue `new THREE.Matrix3()`
             */
            'matrix',
            /**
             * Whether is to update the texture's uv-transform {@link matrix | .matrix}.
             * @remarks Set this to `false` if you are specifying the uv-transform {@link matrix} directly.
             * @see {@link matrix | .matrix}
             * @defaultValue `true`
             */
            'matrixAutoUpdate',
            /**
             * How much a single repetition of the texture is offset from the beginning, in each direction **U** and **V**.
             * @remarks Typical range is `0.0` to `1.0`.
             * @defaultValue `new THREE.Vector2(0, 0)`
             */
            'offset',
            /**
             * How many times the texture is repeated across the surface, in each direction **U** and **V**.
             * @remarks
             * If repeat is set greater than `1` in either direction, the corresponding *Wrap* parameter should
             * also be set to {@link THREE.RepeatWrapping} or {@link THREE.MirroredRepeatWrapping} to achieve the desired tiling effect.
             * @see {@link wrapS}
             * @see {@link wrapT}
             * @defaultValue `new THREE.Vector2( 1, 1 )`
             */
            'repeat',
            /**
             * The point around which rotation occurs.
             * @remarks A value of `(0.5, 0.5)` corresponds to the center of the texture.
             * @defaultValue `new THREE.Vector2( 0, 0 )`, _lower left._
             */
            'center',
            /**
             * How much the texture is rotated around the center point, in radians.
             * @remarks Positive values are counter-clockwise.
             * @defaultValue `0`
             */
            'rotation',
            /**
             * Whether to generate mipmaps, _(if possible)_ for a texture.
             * @remarks Set this to false if you are creating mipmaps manually.
             * @defaultValue true
             */
            'generateMipmaps',
            /**
             * If set to `true`, the alpha channel, if present, is multiplied into the color channels when the texture is uploaded to the Gpu.
             * @remarks
             * Note that this property has no effect for {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap | ImageBitmap}.
             * You need to configure on bitmap creation instead. See {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
             * @see {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
             * @defaultValue `false`
             */
            'premultiplyAlpha',
            /**
             * If set to `true`, the texture is flipped along the vertical axis when uploaded to the Gpu.
             * @remarks
             * Note that this property has no effect for {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap | ImageBitmap}.
             * You need to configure on bitmap creation instead. See {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
             * @see {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
             * @defaultValue `true`
             */
            'flipY',
            /**
             * Specifies the alignment requirements for the start of each pixel row in memory.
             * @remarks
             * The allowable values are:
             *  - `1` (byte-alignment)
             *  - `2` (rows aligned to even-numbered bytes)
             *  - `4` (word-alignment)
             *  - `8` (rows start on double-word boundaries).
             * @see {@link http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml | glPixelStorei} for more information.
             * @defaultValue `4`
             */
            'unpackAlignment', // TODO Fix typing to only allow the expected values.
            /**
             * The {@link Textures | {@link Texture} constants} page for details of other color spaces.
             * @remarks
             * Textures containing color data should be annotated with {@link SRGBColorSpace THREE.SRGBColorSpace} or
             * {@link LinearSRGBColorSpace THREE.LinearSRGBColorSpace}.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
             * @see {@link THREE.TextureDataType}
             * @defaultValue {@link THREE.NoColorSpace}
             */
            'colorSpace',
            /**
             * Indicates whether a texture belongs to a render target or not
             * @defaultValue `false`
             */
            'isRenderTargetTexture',
            /**
             * An object that can be used to store custom data about the texture.
             * @remarks It should not hold references to functions as these will not be cloned.
             * @defaultValue `{}`
             */
            'userData',
            /**
             * This starts at `0` and counts how many times {@link needsUpdate | .needsUpdate} is set to `true`.
             * @remarks Expects a `Integer`
             * @defaultValue `0`
             */
            'version',
            /**
             * Indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target
             * textures)
             */
            'pmremVersion',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\types.d.ts    
    get textureImageData() {
        return [
            'data',
            'height',
            'width',
        ].distinct()
    },    
    get texture3dImageData() {
        return [...this.textureImageData,
            'depth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\VideoTexture.d.ts
    /**
     * Creates a texture for use with a video.
     * @remarks
     * Note: After the initial use of a texture, the video cannot be changed
     * Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one.
     * @example
     * ```typescript
     * // assuming you have created a HTML video element with id="video"
     * const video = document.getElementById('video')
     * const texture = new THREE.VideoTexture(video)
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_video | materials / video}
     * @see Example: {@link https://threejs.org/examples/#webgl_materials_video_webcam | materials / video / webcam}
     * @see Example: {@link https://threejs.org/examples/#webgl_video_kinect | video / kinect}
     * @see Example: {@link https://threejs.org/examples/#webgl_video_panorama_equirectangular | video / panorama / equirectangular}
     * @see Example: {@link https://threejs.org/examples/#webxr_vr_video | vr / video}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/VideoTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js | Source}
     */    
    get videoTexture() {
        return [...this.texture,
            /**
             * @override
             * @defaultValue {@link THREE.LinearFilter}
             */
            'magFilter',
            /**
             * @override
             * @defaultValue {@link THREE.LinearFilter}
             */
            'minFilter',
            /**
             * @override
             * @defaultValue `false`
             */
            'generateMipmaps',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\Addons.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\AnimationClipCreator.d.ts
    animationClipCreator: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\CCDIKSolver.d.ts
    // eslint-disable-next-line @typescript-eslint/naming-convention
    iK: [
        'effector',
        'iteration',
        'links',
        'minAngle',
        'maxAngle',
        'target',
    ].distinct(),
    ccdikSolver: [
        'mesh',
        'iks',
    ].distinct(),    
    get ccdikHelper() {
        return [...this.object3d,
            'root',
            'iks',
            'sphereGeometry',
            'targetSphereMaterial',
            'effectorSphereMaterial',
            'linkSphereMaterial',
            'lineMaterial',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDAnimationHelper.d.ts
    mmdAnimationHelperParameter: [
        'sync',
        'afterglow',
        'resetPhysicsOnLoop',
        'pmxAnimation',
    ].distinct(),
    mmdAnimationHelperAddParameter: [
        'animation',
        'physics',
        'warmup',
        'unitStep',
        'maxStepNum',
        'gravity',
        'delayTime',
    ].distinct(),
    mmdAnimationHelperPoseParameter: [
        'resetPose',
        'ik',
        'grant',
    ].distinct(),
    mmdAnimationHelperMixer: [
        'looped',
        'mixer',
        'ikSolver',
        'grantSolver',
        'physics',
        'duration',
    ].distinct(),
    mmdAnimationHelper: [
        'meshes',
        'camera',
        'cameraTarget',
        'audio',
        'audioManager',
        'configuration',
        'enabled',
        'objects',
        'onBeforePhysics',
        'sharedPhysics',
        'masterPhysics',
    ].distinct(),
    audioManagerParameter: [
        'delayTime',
    ].distinct(),
    audioManager: [
        'audio',
        'elapsedTime',
        'currentTime',
        'delayTime',
        'audioDuration',
        'duration',
    ].distinct(),
    grantSolver: [
        'mesh',
        'grants',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDPhysics.d.ts
    mmdPhysicsParameter: [
        'unitStep',
        'maxStepNum',
        'gravity',
    ].distinct(),
    mmdPhysics: [
        'manager',
        'mesh',
        'unitStep',
        'maxStepNum',
        'gravity',
        'world',
        'bodies',
        'constraints',
    ].distinct(),
    resourceManager: [
        'threeVector3s',
        'threeMatrix4s',
        'threeQuaternions',
        'threeEulers',
        'transforms',
        'quaternions',
        'vector3s',
    ].distinct(),
    rigidBody: [
        'mesh',
        'world',
        'params',
        'manager',
        'body',
        'bone',
        'boneOffsetForm',
        'boneOffsetFormInverse',
    ].distinct(),
    constraint: [
        'mesh',
        'world',
        'bodyA',
        'bodyB',
        'params',
        'manager',
    ].distinct(),    
    get mmdPhysicsHelper() {
        return [...this.object3d,
            'mesh',
            'physics',
            'materials',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\cameras\CinematicCamera.d.ts    
    get cinematicCamera() {
        return [...this.perspectiveCamera,
            'postprocessing',
            'shaderSettings',
            'materialDepth',
            'coc',
            'aperture',
            'fNumber',
            'hyperFocal',
            'filmGauge',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGl.d.ts
    // tslint:disable-next-line:no-unnecessary-class
    webGl: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\capabilities\WebGpu.d.ts
    // tslint:disable-next-line:no-unnecessary-class
    webGpu: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\ArcballControls.d.ts
    arcballControlsEventMap: [
        'change',
        'start',
        'end',
    ].distinct(),    
    get arcballControls() {
        return [...this.eventDispatcher,
            'camera',
            'domElement',
            'scene',
            /**
             * @default 500
             */
            'focusAnimationTime',
            /**
             * @default true
             */
            'enabled',
            /**
             * @default true
             */
            'enablePan',
            /**
             * @default true
             */
            'enableRotate',
            /**
             * @default true
             */
            'enableZoom',
            /**
             * @default true
             */
            'enableGizmos',
            /**
             * @default true
             */
            'adjustNearFar',
            /**
             * @default 1.1
             */
            'scaleFactor',
            /**
             * @default 25
             */
            'dampingFactor',
            /**
             * @default 20
             */
            'wMax', // maximum angular velocity allowed
            /**
             * @default true
             */
            'enableAnimations', // if animations should be performed
            /**
             * @default false
             */
            'enableGrid', // if grid should be showed during pan operation
            /**
             * @default false
             */
            'cursorZoom', // if wheel zoom should be cursor centered
            /**
             * @default 5
             */
            'minFov',
            /**
             * @default 90
             */
            'maxFov',
            /**
             * @default 0
             */
            'minDistance',
            /**
             * @default Infinity
             */
            'maxDistance',
            /**
             * @default 0
             */
            'minZoom',
            /**
             * @default Infinity
             */
            'maxZoom',
            /**
             * @default Vector3(0,0,0)
             */
            'target',
            /**
             * @default 0.67
             */
            'radiusFactor',
            /**
             * @default 1
             */
            'rotateSpeed',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\DragControls.d.ts
    dragControlsEventMap: [
        /**
         * Fires when the pointer is moved onto a 3d object, or onto one of its children.
         */
        'hoveron',
        /**
         * Fires when the pointer is moved out of a 3d object.
         */
        'hoveroff',
        /**
         * Fires when the user starts to drag a 3d object.
         */
        'dragstart',
        /**
         * Fires when the user drags a 3d object.
         */
        'drag',
        /**
         * Fires when the user has finished dragging a 3d object.
         */
        'dragend',
    ].distinct(),    
    get dragControls() {
        return [...this.eventDispatcher,
            /**
             * Creates a new instance of DragControls.
             * @param objects An array of draggable 3d objects.
             * @param camera The camera of the rendered scene.
             * @param domElement The HTML element used for event listeners.
             */
            /**
             * Whether or not the controls are enabled.
             */
            'enabled',
            /**
             * Whether children of draggable objects can be dragged independently from their parent. Default is `true`.
             */
            'recursive',
            /**
             * This option only works if the {@link .objects} array contains a single draggable group object. If set to `true`,
             * {@link DragControls} does not transform individual objects but the entire group. Default is `false`.
             */
            'transformGroup',
            /**
             * The current transformation mode. Possible values are `translate`, and `rotate`. Default is `translate`.
             */
            'mode',
            /**
             * The speed at which the object will rotate when dragged in `rotate` mode. The higher the number the faster the
             * rotation. Default is `1`.
             */
            'rotateSpeed',
            /**
             * Adds the event listeners of the controls.
             */
            'activate',
            /**
             * Removes the event listeners of the controls.
             */
            'deactivate',
            /**
             * Should be called if the controls is no longer required.
             */
            'dispose',
            /**
             * Returns the array of draggable objects.
             */
            'getObjects',
            /**
             * Returns the internal {@link Raycaster} instance that is used for intersection tests.
             */
            'getRaycaster',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FirstPersonControls.d.ts
    firstPersonControls: [
        'object',
        'domElement',
        'enabled',
        'movementSpeed',
        'lookSpeed',
        'lookVertical',
        'autoForward',
        'activeLook',
        'heightSpeed',
        'heightCoef',
        'heightMin',
        'heightMax',
        'constrainVertical',
        'verticalMin',
        'verticalMax',
        'mouseDragOn',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\FlyControls.d.ts
    flyControlsEventMap: [
        'change',
    ].distinct(),    
    get flyControls() {
        return [...this.eventDispatcher,
            'autoForward',
            'domElement',
            'dragToLook',
            'enabled',
            'movementSpeed',
            'object',
            'rollSpeed',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\MapControls.d.ts
    /**
     * MapControls performs orbiting, dollying (zooming), and panning.
     * Unlike TrackballControls, it maintains the "up" direction
     * object.up (+Y by default).
     *
     *    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch:
     *    two-finger rotate
     *    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
     *    Pan - left mouse, or arrow keys / touch: one-finger move
     *
     * @param object - The camera to be controlled. The camera must not
     * be a child of another object, unless that object is the scene itself.
     * @param domElement - The HTML element used for
     * event listeners.
     */    
    get mapControls() {
        return [...this.orbitControls,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\OrbitControls.d.ts
    orbitControlsEventMap: [
        'change',
        'start',
        'end',
    ].distinct(),
    /**
     * Orbit controls allow the camera to orbit around a target.
     * @param object - The camera to be controlled. The camera must not
     * be a child of another object, unless that object is the scene itself.
     * @param domElement - The HTML element used for
     * event listeners.
     */    
    get orbitControls() {
        return [...this.eventDispatcher,
            /**
             * The camera being controlled.
             */
            'object',
            /**
             * The HTMLElement used to listen for mouse / touch events.
             * This must be passed in the constructor
             * changing it here will not set up new event listeners.
             */
            'domElement',
            /**
             * When set to `false`, the controls will not respond to user input.
             * @default true
             */
            'enabled',
            /**
             * The focus point of the controls, the .object orbits around this.
             * It can be updated manually at any point to change the focus
             * of the controls.
             */
            'target',
            /** @deprecated */
            'center',
            /**
             * The focus point of the {@link .minTargetRadius} and {@link .maxTargetRadius} limits. It can be updated manually
             * at any point to change the center of interest for the {@link .target}.
             */
            'cursor',
            /**
             * How far you can dolly in ( PerspectiveCamera only ).
             * @default 0
             */
            'minDistance',
            /**
             * How far you can dolly out ( PerspectiveCamera only ).
             * @default Infinity
             */
            'maxDistance',
            /**
             * How far you can zoom in ( OrthographicCamera only ).
             * @default 0
             */
            'minZoom',
            /**
             * How far you can zoom out ( OrthographicCamera only ).
             * @default Infinity
             */
            'maxZoom',
            /**
             * How close you can get the target to the 3d {@link .cursor}.
             * @default 0
             */
            'minTargetRadius',
            /**
             * How far you can move the target from the 3d {@link .cursor}.
             * @default Infinity
             */
            'maxTargetRadius',
            /**
             * How far you can orbit vertically, lower limit.
             * Range is 0 to Math.PI radians.
             * @default 0
             */
            'minPolarAngle',
            /**
             * How far you can orbit vertically, upper limit.
             * Range is 0 to Math.PI radians.
             * @default Math.PI.
             */
            'maxPolarAngle',
            /**
             * How far you can orbit horizontally, lower limit.
             * If set, the interval [ min, max ].distinct()
             * must be a sub-interval of [ - 2 PI, 2 PI ].distinct(),
             * with ( max - min < 2 PI ).
             * @default Infinity
             */
            'minAzimuthAngle',
            /**
             * How far you can orbit horizontally, upper limit.
             * If set, the interval [ min, max ].distinct() must be a sub-interval
             * of [ - 2 PI, 2 PI ].distinct(), with ( max - min < 2 PI ).
             * @default Infinity
             */
            'maxAzimuthAngle',
            /**
             * Set to true to enable damping (inertia), which can
             * be used to give a sense of weight to the controls.
             * Note that if this is enabled, you must call
             * .update () in your animation loop.
             * @default false
             */
            'enableDamping',
            /**
             * The damping inertia used if .enableDamping is set to true.
             * Note that for this to work,
             * you must call .update () in your animation loop.
             * @default 0.05
             */
            'dampingFactor',
            /**
             * Enable or disable zooming (dollying) of the camera.
             * @default true
             */
            'enableZoom',
            /**
             * Speed of zooming / dollying.
             * @default 1
             */
            'zoomSpeed',
            /**
             * Setting this property to `true` allows to zoom to the cursor's position.
             * @default false
             */
            'zoomToCursor',
            /**
             * Enable or disable horizontal and
             * vertical rotation of the camera.
             * Note that it is possible to disable a single axis
             * by setting the min and max of the polar angle or
             * azimuth angle to the same value, which will cause
             * the vertical or horizontal rotation to be fixed at that value.
             * @default true
             */
            'enableRotate',
            /**
             * Speed of rotation.
             * @default 1
             */
            'rotateSpeed',
            /**
             * Enable or disable camera panning.
             * @default true
             */
            'enablePan',
            /**
             * Speed of panning.
             * @default 1
             */
            'panSpeed',
            /**
             * Defines how the camera's position is translated when panning.
             * If true, the camera pans in screen space. Otherwise,
             * the camera pans in the plane orthogonal to the camera's
             * up direction. Default is true for OrbitControls; false for MapControls.
             * @default true
             */
            'screenSpacePanning',
            /**
             * How fast to pan the camera when the keyboard is used.
             * Default is 7.0 pixels per keypress.
             * @default 7
             */
            'keyPanSpeed',
            /**
             * Set to true to automatically rotate around the target.
             * Note that if this is enabled, you must call .update() in your animation loop. If you want the auto-rotate speed
             * to be independent of the frame rate (the refresh rate of the display), you must pass the time `deltaTime`, in
             * seconds, to .update().
             */
            'autoRotate',
            /**
             * How fast to rotate around the target if .autoRotate is true.
             * Default is 2.0, which equates to 30 seconds per orbit at 60fps.
             * Note that if .autoRotate is enabled, you must call
             * .update () in your animation loop.
             * @default 2
             */
            'autoRotateSpeed',
            /**
             * This object contains references to the keycodes for controlling
             * camera panning. Default is the 4 arrow keys.
             */
            'keys',
            /**
             * This object contains references to the mouse actions used
             * by the controls.
             */
            'mouseButtons',
            /**
             * This object contains references to the touch actions used by
             * the controls.
             */
            'touches',
            /**
             * Used internally by the .saveState and .reset methods.
             */
            'target0',
            /**
             * Used internally by the .saveState and .reset methods.
             */
            'position0',
            /**
             * Used internally by the .saveState and .reset methods.
             */
            'zoom0',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\PointerLockControls.d.ts    
    get pointerLockControls() {
        return [...this.eventDispatcher,
            'camera',
            'domElement',
            // API
            'isLocked',
            'minPolarAngle',
            'maxPolarAngle',
            'pointerSpeed',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TrackballControls.d.ts
    trackballControlsEventMap: [
        'change',
        'start',
        'end',
    ].distinct(),    
    get trackballControls() {
        return [...this.eventDispatcher,
            'object',
            'domElement',
            // API
            'enabled',
            'screen',
            'rotateSpeed',
            'zoomSpeed',
            'panSpeed',
            'noRotate',
            'noZoom',
            'noPan',
            'noRoll',
            'staticMoving',
            'dynamicDampingFactor',
            'minDistance',
            'maxDistance',
            'minZoom',
            'maxZoom',
            'keys',
            'mouseButtons',
            'target',
            'position0',
            'target0',
            'up0',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\controls\TransformControls.d.ts    
    get transformControlsEventMap() {
        return [...this.object3dEventMap,
            'change',
            'mouseDown',
            'mouseUp',
            'objectChange',
            "camera-changed",
            "object-changed",
            "enabled-changed",
            "axis-changed",
            "mode-changed",
            "translationSnap-changed",
            "rotationSnap-changed",
            "scaleSnap-changed",
            "space-changed",
            "size-changed",
            "dragging-changed",
            "showX-changed",
            "showY-changed",
            "showZ-changed",
            "worldPosition-changed",
            "worldPositionStart-changed",
            "worldQuaternion-changed",
            "worldQuaternionStart-changed",
            "cameraPosition-changed",
            "cameraQuaternion-changed",
            "pointStart-changed",
            "pointEnd-changed",
            "rotationAxis-changed",
            "rotationAngle-changed",
            "eye-changed",
        ].distinct()
    },    
    get transformControls() {
        return [...this.object3d,
            'domElement',
            // API
            'camera',
            'object',
            'enabled',
            'axis',
            'mode',
            'translationSnap',
            'rotationSnap',
            'space',
            'size',
            'dragging',
            'showX',
            'showY',
            'showZ',

            'mouseButtons',
        ].distinct()
    },    
    get transformControlsGizmo() {
        return [...this.object3d,
            'isTransformControlsGizmo',
            'gizmo',
            'helper',
            'picker',
        ].distinct()
    },    
    get transformControlsPlane() {
        return [...this.mesh,
            'isTransformControlsPlane',
            'mode',
            'axis',
            'space',
            'eye',
            'worldPosition',
            'worldQuaternion',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSM.d.ts
    csmParameters: [
        'camera',
        'parent',
        'cascades',
        'maxFar',
        'mode',
        'shadowMapSize',
        'shadowBias',
        'lightDirection',
        'lightIntensity',
        'lightNear',
        'lightFar',
        'lightMargin',
    ].distinct(),
    csm: [
        'camera',
        'parent',
        'cascades',
        'maxFar',
        'mode',
        'shadowMapSize',
        'shadowBias',
        'lightDirection',
        'lightIntensity',
        'lightNear',
        'lightFar',
        'lightMargin',
        'customSplitsCallback',
        'fade',
        'mainFrustum',
        'frustums',
        'breaks',
        'lights',
        'shaders',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMFrustum.d.ts
    csmFrustumVerticies: [
        'near',
        'far',
    ].distinct(),
    csmFrustumParameters: [
        'projectionMatrix',
        'maxFar',
    ].distinct(),
    csmFrustum: [
        'vertices',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMHelper.d.ts    
    get csmHelper() {
        return [...this.group,
            'csm',
            'displayFrustum',
            'displayPlanes',
            'displayShadowBounds',
            'frustumLines',
            'cascadeLines',
            'cascadePlanes',
            'shadowLines',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMShader.d.ts
    csmShader: [
        'lights_fragment_begin',
        'lights_pars_begin',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\CurveExtras.d.ts    
    get grannyKnot() {
        return [...this.curve,
        ].distinct()
    },    
    get heartCurve() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get vivianiCurve() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get knotCurve() {
        return [...this.curve,
        ].distinct()
    },    
    get helixCurve() {
        return [...this.curve,
        ].distinct()
    },    
    get trefoilKnot() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get torusKnot() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get cinquefoilKnot() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get trefoilPolynomialKnot() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get figureEightPolynomialKnot() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get decoratedTorusKnot4a() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get decoratedTorusKnot4b() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get decoratedTorusKnot5a() {
        return [...this.curve,
            'scale',
        ].distinct()
    },    
    get decoratedTorusKnot5c() {
        return [...this.curve,
            'scale',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSCurve.d.ts    
    get nurbsCurve() {
        return [...this.curve,
            'degree',
            'knots',
            'controlPoints',
            'startKnot',
            'endKnot',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSSurface.d.ts
    nurbsSurface: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSVolume.d.ts
    nurbsVolume: [
        'degree1',
        'degree2',
        'degree3',
        'knots1',
        'knots2',
        'knots3',
        'controlPoints',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\deprecated\Geometry.d.ts
    /**
     * @deprecated Use Face3 instead.
     */

    morphColor: [
        'name',
        'colors',
    ].distinct(),
    morphNormals: [
        'name',
        'normals',
    ].distinct(),
    /**
     * Base class for geometries
     */    
    get geometry() {
        return [...this.eventDispatcher,
            /**
             * Unique number of this geometry instance
             */
            'id',
            'uuid',
            /**
             * Name for this geometry. Default is an empty string.
             * @default ''
             */
            'name',
            /**
             * @default 'Geometry'
             */
            'type',
            /**
             * The array of vertices hold every position of points of the model.
             * To signal an update in this array, Geometry.verticesNeedUpdate needs to be set to true.
             * @default [].distinct()
             */
            'vertices',
            /**
             * Array of vertex colors, matching number and order of vertices.
             * Used in ParticleSystem, Line and Ribbon.
             * Meshes use per-face-use-of-vertex colors embedded directly in faces.
             * To signal an update in this array, Geometry.colorsNeedUpdate needs to be set to true.
             * @default [].distinct()
             */
            'colors',
            /**
             * Array of triangles or/and quads.
             * The array of faces describe how each vertex in the model is connected with each other.
             * To signal an update in this array, Geometry.elementsNeedUpdate needs to be set to true.
             * @default [].distinct()
             */
            'faces',
            /**
             * Array of face Uv layers.
             * Each Uv layer is an array of Uv matching order and number of vertices in faces.
             * To signal an update in this array, Geometry.uvsNeedUpdate needs to be set to true.
             * @default [[].distinct()].distinct()
             */
            'faceVertexUvs',
            /**
             * Array of morph targets. Each morph target is a Javascript object:
             *
             * { name: "targetName", vertices: [ new THREE.Vector3(), ...this. ].distinct() }
             *
             * Morph vertices match number and order of primary vertices.
             * @default [].distinct()
             */
            'morphTargets',
            /**
             * Array of morph normals. Morph normals have similar structure as morph targets, each normal set is a Javascript object:
             *
             * morphNormal = { name: "NormalName", normals: [ new THREE.Vector3(), ...this. ].distinct() }
             * @default [].distinct()
             */
            'morphNormals',
            /**
             * Array of skinning weights, matching number and order of vertices.
             * @default [].distinct()
             */
            'skinWeights',
            /**
             * Array of skinning indices, matching number and order of vertices.
             * @default [].distinct()
             */
            'skinIndices',
            /**
             * @default [].distinct()
             */
            'lineDistances',
            /**
             * Bounding box.
             * @default null
             */
            'boundingBox',
            /**
             * Bounding sphere.
             * @default null
             */
            'boundingSphere',
            /**
             * Set to true if the vertices array has been updated.
             * @default false
             */
            'verticesNeedUpdate',
            /**
             * Set to true if the faces array has been updated.
             * @default false
             */
            'elementsNeedUpdate',
            /**
             * Set to true if the uvs array has been updated.
             * @default false
             */
            'uvsNeedUpdate',
            /**
             * Set to true if the normals array has been updated.
             * @default false
             */
            'normalsNeedUpdate',
            /**
             * Set to true if the colors array has been updated.
             * @default false
             */
            'colorsNeedUpdate',
            /**
             * Set to true if the linedistances array has been updated.
             * @default false
             */
            'lineDistancesNeedUpdate',
            /**
             * @default false
             */
            'groupsNeedUpdate',
            'bones',
            'animation',
            'animations',
        ].distinct()
    },
    /**
     * Triangle face.
     */
    face3: [
        /**
         * Vertex A index.
         */
        'a',
        /**
         * Vertex B index.
         */
        'b',
        /**
         * Vertex C index.
         */
        'c',
        /**
         * Face normal.
         * @default new THREE.Vector3()
         */
        'normal',
        /**
         * Array of 3 vertex normals.
         * @default [].distinct()
         */
        'vertexNormals',
        /**
         * Face color.
         * @default new THREE.Color()
         */
        'color',
        /**
         * Array of 3 vertex colors.
         * @default [].distinct()
         */
        'vertexColors',
        /**
         * Material index (points to {@link Mesh.material}).
         * @default 0
         */
        'materialIndex',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AnaglyphEffect.d.ts
    anaglyphEffect: [
        'colorMatrixLeft',
        'colorMatrixright',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\AsciiEffect.d.ts
    asciiEffectOptions: [
        'resolution',
        'scale',
        'color',
        'alpha',
        'block',
        'invert',
    ].distinct(),
    asciiEffect: [
        'domElement',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\OutlineEffect.d.ts
    outlineEffectParameters: [
        'defaultThickness',
        'defaultColor',
        'defaultAlpha',
        'defaultKeepAlive',
    ].distinct(),
    outlineEffect: [
        'enabled',
        'autoClear',
        'domElement',
        'shadowMap',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\ParallaxBarrierEffect.d.ts
    parallaxBarrierEffect: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\PeppersGhostEffect.d.ts
    peppersGhostEffect: [
        'cameraDistance',
        'reflectFromAbove',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\effects\StereoEffect.d.ts
    stereoEffect: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\DebugEnvironment.d.ts    
    get debugEnvironment() {
        return [...this.scene,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\environments\RoomEnvironment.d.ts    
    get roomEnvironment() {
        return [...this.scene,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\DRACOExporter.d.ts
    dracoExporterOptions: [
        'decodeSpeed',
        'encodeSpeed',
        'encoderMethod',
        'quantization',
        'exportUvs',
        'exportNormals',
        'exportColor',
    ].distinct(),
    dracoExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\EXRExporter.d.ts
    /**
     * @author sciecode / https://github.com/sciecode
     *
     * EXR format references:
     * https://www.openexr.com/documentation/openexrfilelayout.pdf
     */
    exrExporterParseOptions: [
        'compression',
        'type',
    ].distinct(),
    exrExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\GlTFExporter.d.ts
    gltfExporterOptions: [
        /**
         * Export position, rotation and scale instead of matrix per node. Default is false
         */
        'trs',
        /**
         * Export only visible objects. Default is true.
         */
        'onlyVisible',
        /**
         * Export just the attributes within the drawRange, if defined, instead of exporting the whole array. Default is true.
         */
        'truncateDrawRange',
        /**
         * Export in binary (.glb) format, returning an ArrayBuffer. Default is false.
         */
        'binary',
        /**
         * Export with images embedded into the glTF asset. Default is true.
         */
        'embedImages',
        /**
         * Restricts the image maximum size (both width and height) to the given value. This option works only if embedImages is true. Default is Infinity.
         */
        'maxTextureSize',
        /**
         * List of animations to be included in the export.
         */
        'animations',
        /**
         * Generate indices for non-index geometry and export with them. Default is false.
         */
        'forceIndices',
        /**
         * Export custom glTF extensions defined on an object's userData.gltfExtensions property. Default is false.
         */
        'includeCustomExtensions',
    ].distinct(),
    gltfExporter: [
    ].distinct(),
    gltfWriter: [
    ].distinct(),
    gltfExporterPlugin: [
        'writeTexture',
        'writeMaterial',
        'writeMesh',
        'writeNode',
        'beforeParse',
        'afterParse',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\KTX2Exporter.d.ts
    ktx2Exporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\MMDExporter.d.ts
    mmdExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\OBJExporter.d.ts
    objExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\PLYExporter.d.ts
    plyExporterOptionsBase: [
        'excludeAttributes',
        'littleEndian',
    ].distinct(),    
    get plyExporterOptionsBinary() {
        return [...this.plyExporterOptionsBase,
            'binary',
        ].distinct()
    },    
    get plyExporterOptionsString() {
        return [...this.plyExporterOptionsBase,
            'binary',
        ].distinct()
    },    
    get plyExporterOptions() {
        return [...this.plyExporterOptionsBase,
            'binary',
        ].distinct()
    },
    plyExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\STLExporter.d.ts
    stlExporterOptionsBinary: [
        'binary',
    ].distinct(),
    stlExporterOptionsString: [
        'binary',
    ].distinct(),
    stlExporterOptions: [
        'binary',
    ].distinct(),
    stlExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\exporters\USDZExporter.d.ts
    usdzExporterOptions: [
        'quickLookCompatible',
        'maxTextureSize',
    ].distinct(),
    usdzExporter: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\BoxLineGeometry.d.ts    
    get boxLineGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ConvexGeometry.d.ts    
    get convexGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\DecalGeometry.d.ts    
    get decalGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    decalVertex: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometries.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ParametricGeometry.d.ts    
    get parametricGeometry() {
        return [...this.bufferGeometry,
            /**
             * @default 'ParametricGeometry'
             */
            'type',
            'parameters',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\RoundedBoxGeometry.d.ts    
    get roundedBoxGeometry() {
        return [...this.boxGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\SDFGeometryGenerator.d.ts
    sdfGeometryGenerator: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TeapotGeometry.d.ts    
    get teapotGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TextGeometry.d.ts    
    get textGeometryParameters() {
        return [...this.extrudeGeometryOptions,
            'font',
            /**
             * Size of the text
             * Expects a `Float`.
             * @defaultValue `100`
             */
            'size',
            /**
             * Thickness to extrude text.
             * Expects a `Float`.
             * @defaultValue `50`
             * @deprecated THREE.TextGeometry: .height is now deprecated. Please use .depth instead
             */
            'height',
            /**
             * Thickness to extrude text.
             * Expects a `Float`.
             * @defaultValue `50`
             */
            'depth',
            /**
             * @override
             * @defaultValue `12`
             */
            'curveSegments',
            /**
             * @defaultValue `false`
             */
            'bevelEnabled',
            /**
             * How deep into text bevel goes.
             * Expects a `Float`.
             * @override
             * @defaultValue `10`
             */
            'bevelThickness',
            /**
             * How far from text outline is bevel.
             * Expects a `Float`.
             * @override
             * @defaultValue `8`
             */
            'bevelSize',
            /**
             * How far from text outline bevel starts.
             * Expects a `Float`.
             * @override
             * @defaultValue `0`
             */
            'bevelOffset',
            /**
             * @override
             * @defaultValue `3`
             */
            'bevelSegments',
        ].distinct()
    },
    /**
     * A class for generating text as a single geometry
     * @remarks
     * It is constructed by providing a string of text, and a set of parameters consisting of a loaded font and settings for the geometry's parent {@link THREE.ExtrudeGeometry | ExtrudeGeometry}
     * See the {@link THREE.FontLoader | FontLoader} page for additional details.
     * @example
     * ```typescript
     * const loader = new FontLoader()
     * loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
     *     const geometry = new TextGeometry('Hello three.js!', {
     *         font: font,
     *         size: 80,
     *         height: 5,
     *         curveSegments: 12,
     *         bevelEnabled: true,
     *         bevelThickness: 10,
     *         bevelSize: 8,
     *         bevelOffset: 0,
     *         bevelSegments: 5
     *     })
     * })
     * ```
     * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
     * @see {@link https://threejs.org/docs/index.html#api/en/C:/rafaelsc/Source/threejs/three.js/docs/examples/en/geometries/TextGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/examples/jsm/geometries/TextGeometry.js | Source}
     */    
    get textGeometry() {
        return [...this.extrudeGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\LightProbeHelper.d.ts    
    get lightProbeHelper() {
        return [...this.mesh,
            'lightProbe',
            'size',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\OctreeHelper.d.ts    
    get octreeHelper() {
        return [...this.lineSegments,
            'octree',
            'color',
            /**
             * @default 'OctreeHelper'
             */
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\PositionalAudioHelper.d.ts    
    get positionalAudioHelper() {
        return [...this.line,
            'audio',
            'range',
            'divisionsInnerAngle',
            'divisionsOuterAngle',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\RectAreaLightHelper.d.ts    
    get rectAreaLightHelper() {
        return [...this.line,
            'light',
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\TextureHelper.d.ts    
    get textureHelper() {
        return [...this.mesh,
            'texture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexNormalsHelper.d.ts    
    get vertexNormalsHelper() {
        return [...this.lineSegments,
            'object',
            'size',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexTangentsHelper.d.ts    
    get vertexTangentsHelper() {
        return [...this.lineSegments,
            'object',
            'size',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\ViewHelper.d.ts    
    get viewHelper() {
        return [...this.object3d,
            'animating',
            'center',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\HTMLMesh.d.ts    
    get htmlMesh() {
        return [...this.mesh,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\InteractiveGroup.d.ts    
    get interactiveObject3dEventMap() {
        return [...this.object3dEventMap,
            'hoveron',
            'pointerdown',
            'pointerup',
            'pointermove',
            'mousedown',
            'mouseup',
            'mousemove',
            'click',
        ].distinct()
    },    
    get interactiveObject3d() {
        return [...this.object3d,
        ].distinct()
    },    
    get interactiveGroup() {
        return [...this.group,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionBox.d.ts
    selectionBox: [
        'camera',
        'collection',
        'deep',
        'endPoint',
        'scene',
        'startPoint',
        'instances',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\interactive\SelectionHelper.d.ts
    selectionHelper: [
        'element',
        'isDown',
        'enabled',
        'pointBottomRight',
        'pointTopLeft',
        'renderer',
        'startPoint',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\fflate.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\lil-gui.module.min.d.ts
    gui: [
        /**
         * The GUI containing this folder, or `undefined` if this is the root GUI.
         */
        'parent',
        /**
         * The top level GUI containing this folder, or `this` if this is the root GUI.
         */
        'root',
        /**
         * The list of controllers and folders contained by this GUI.
         */
        'children',
        /**
         * The list of controllers contained by this GUI.
         */
        'controllers',
        /**
         * The list of folders contained by this GUI.
         */
        'folders',
        /**
         * Used to determine if the GUI is closed. Use `gui.open()` or `gui.close()` to change this.
         */
        '_closed',
        /**
         * Used to determine if the GUI is hidden. Use `gui.show()` or `gui.hide()` to change this.
         */
        '_hidden',
        /**
         * The outermost container element.
         */
        'domElement',
        /**
         * The DOM element that contains the title.
         */
        '$title',
        /**
         * The DOM element that contains children.
         */
        '$children',
    ].distinct(),    
    get booleanController() {
        return [...this.controller,
            '$input',
        ].distinct()
    },
    colorController: [
        '$input',
        '$text',
        '$display',
        '_format',
        '_rgbScale',
        '_initialValueHexString',
        '_textFocused',
    ].distinct(),
    /**
     * lil-gui
     * https://lil-gui.georgealways.com
     * @version 0.17.0
     * @author George Michael Brower
     * @license MIT
     */
    /**
     * Base class for all controllers.
     */
    controller: [
        /**
         * The GUI that contains this controller.
         */
        'parent',
        /**
         * The object this controller will modify.
         */
        'object',
        /**
         * The name of the property to control.
         */
        'property',
        /**
         * Used to determine if the controller is disabled.
         * Use `controller.disable( true|false )` to modify this value
         */
        '_disabled',
        /**
         * Used to determine if the Controller is hidden.
         * Use `controller.show()` or `controller.hide()` to change this.
         */
        '_hidden',
        /**
         * The value of `object[ property ].distinct()` when the controller was created.
         */
        'initialValue',
        /**
         * The outermost container DOM element for this controller.
         */
        'domElement',
        /**
         * The DOM element that contains the controller's name.
         */
        '$name',
        /**
         * The DOM element that contains the controller's "widget" (which differs by controller type).
         */
        '$widget',
        /**
         * The DOM element that receives the disabled attribute when using disable()
         */
        '$disable',
        /**
         * The controller's name. Use `controller.name( 'Name' )` to modify this value.
         */
        '_name',
        '_changed',
        /**
         * Used to determine if the controller is currently listening. Don't modify this value
         * directly. Use the `controller.listen( true|false )` method instead.
         */
        '_listening',
        '_listenCallbackID',
        '_listenPrevValue',
    ].distinct(),    
    get functionController() {
        return [...this.controller,
            '$button',
        ].distinct()
    },    
    get numberController() {
        return [...this.controller,
            '_decimals',
            '_min',
            '_max',
            '_step',
            '_stepExplicit',
            '$input',
            '_inputFocused',
            '_hasSlider',
            '$slider',
            '$fill',
        ].distinct()
    },
    optionController: [
        '$select',
        '$display',
        '_values',
        '_names',
    ].distinct(),    
    get stringController() {
        return [...this.controller,
            '$input',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\meshopt_decoder.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\stats.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\libs\tween.module.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lights\IESSpotLight.d.ts    
    get iesSpotLight() {
        return [...this.spotLight,
            'iesMap',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lights\LightProbeGenerator.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Line2.d.ts    
    get line2() {
        return [//...this.lineSegments2,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineGeometry.d.ts    
    get lineGeometry() {
        return [...this.lineSegmentsGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineMaterial.d.ts    
    get lineMaterialParameters() {
        return [...this.materialParameters,
            'alphaToCoverage',
            'color',
            'dashed',
            'dashScale',
            'dashSize',
            'dashOffset',
            'gapSize',
            'linewidth',
            'resolution',
            'wireframe',
            'worldUnits',
        ].distinct()
    },    
    get lineMaterial() {
        return [...this.shaderMaterial,
            'color',
            'dashed',
            'dashScale',
            'dashSize',
            'dashOffset',
            'gapSize',
            'opacity',
            'linewidth',
            'resolution',
            'alphaToCoverage',
            'worldUnits',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegments2.d.ts    
    get lineSegments2() {
        return [...this.mesh,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegmentsGeometry.d.ts    
    get lineSegmentsGeometry() {
        return [...this.instancedBufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Wireframe.d.ts    
    get wireframe() {
        return [...this.mesh,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\WireframeGeometry2.d.ts    
    get wireframeGeometry2() {
        return [...this.lineSegmentsGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3dMLoader.d.ts    
    get rhino3dmLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3MFLoader.d.ts    
    get threeMfLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\AMFLoader.d.ts    
    get amfLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\BVHLoader.d.ts
    bvh: [
        'clip',
        'skeleton',
    ].distinct(),    
    get bvhLoader() {
        return [...this.loader,
            'animateBonePositions',
            'animateBoneRotations',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\ColladaLoader.d.ts
    collada: [
        'kinematics',
        'library',
        'scene',
    ].distinct(),    
    get colladaLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DDSLoader.d.ts
    dds: [
        'mipmaps',
        'width',
        'height',
        'format',
        'mipmapCount',
        'isCubemap',
    ].distinct(),    
    get ddsLoader() {
        return [...this.compressedTextureLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DRACOLoader.d.ts    
    get dracoLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\EXRLoader.d.ts
    exr: [
        'header',
        'width',
        'height',
        'data',
        'format',
        'colorSpace',
        'type',
    ].distinct(),    
    get exrLoader() {
        return [...this.dataTextureLoader,
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FBXLoader.d.ts    
    get fbxLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FontLoader.d.ts
    fontData: [
        'glyphs',
        'familyName',
        'ascender',
        'descender',
        'underlinePosition',
        'underlineThickness',
        'boundingBox',
        'resolution',
        'original_font_information',
    ].distinct(),    
    get fontLoader() {
        return [...this.loader,
        ].distinct()
    },
    font: [
        /**
         * @default 'Font'
         */
        'type',
        'data',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GCodeLoader.d.ts    
    get gCodeLoader() {
        return [...this.loader,
            'splitLayer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GlTFLoader.d.ts
    gltf: [
        'animations',
        'scene',
        'scenes',
        'cameras',
        'asset',
        'parser',
        'userData',
    ].distinct(),    
    get gltfLoader() {
        return [...this.loader,
            'dracoLoader',
        ].distinct()
    },
    gltfReference: [
        'materials',
        'nodes',
        'textures',
        'meshes',
    ].distinct(),
    gltfParser: [
        'json',
        'options',
        'fileLoader',
        'textureLoader',
        'plugins',
        'extensions',
        'associations',
        'getDependency',
        'getDependencies',
        'loadBuffer',
        'loadBufferView',
        'loadAccessor',
        'loadTexture',
        'loadTextureImage',
        'loadImageSource',
        'assignTexture',
        'assignFinalMaterial',
        'getMaterialType',
        'loadMaterial',
        'createUniqueName',
        'createNodeMesh',
        'loadGeometries',
        'loadMesh',
        'loadCamera',
        'loadSkin',
        'loadAnimation',
        'loadNode',
        'loadScene',
    ].distinct(),
    gltfLoaderPlugin: [
        'beforeRoot',
        'afterRoot',
        'loadNode',
        'loadMesh',
        'loadBufferView',
        'loadMaterial',
        'loadTexture',
        'getMaterialType',
        'extendMaterialParams',
        'createNodeMesh',
        'createNodeAttachment',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\HDRCubeTextureLoader.d.ts    
    get hdrCubeTextureLoader() {
        return [...this.loader,
            'hdrLoader',
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\IESLoader.d.ts    
    get iesLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KMZLoader.d.ts    
    get kmzLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTX2Loader.d.ts
    ktx2LoaderWorkerConfig: [
        'astcSupported',
        'etc1Supported',
        'etc2Supported',
        'dxtSupported',
        'bptcSupported',
        'pvrtcSupported',
    ].distinct(),    
    get ktx2Loader() {
        return [...this.loader,
            'transcoderPath',
            'transcoderBinary',
            'transcoderPending',
            'workerPool',
            'workerSourceURL',
            'workerConfig',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTXLoader.d.ts
    ktx: [
        'mipmaps',
        'width',
        'height',
        'format',
        'mipmapCount',
        'isCubemap',
    ].distinct(),    
    get ktxLoader() {
        return [...this.compressedTextureLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LDrawLoader.d.ts    
    get lDrawLoader() {
        return [...this.loader,
            'materials',
            'materialsLibrary',
            'fileMap',
            'smoothNormals',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LogLuvLoader.d.ts
    logLuv: [
        'width',
        'height',
        'data',
        'format',
        'type',
        'flipY',
    ].distinct(),    
    get logLuvLoader() {
        return [...this.dataTextureLoader,
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LottieLoader.d.ts    
    get lottieLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUT3dlLoader.d.ts
    lut3dlResult: [
        'size',
        'texture3d',
    ].distinct(),
    /**
     * A 3d LUT loader that supports the .3dl file format.
     *
     * Based on the following references:
     *
     * http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492
     * https://community.foundry.com/discuss/topic/103636/format-spec-for-3dl?mode=Post&postID=895258
     */    
    get lut3dlLoader() {
        return [...this.loader,
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LUTCubeLoader.d.ts
    lutCubeResult: [
        'title',
        'size',
        'domainMin',
        'domainMax',
        'texture3d',
    ].distinct(),
    /**
     * A 3d LUT loader that supports the .cube file format.
     *
     * Based on the following reference:
     *
     * https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf
     */    
    get lutCubeLoader() {
        return [...this.loader,
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LWOLoader.d.ts
    lwo: [
        'materials',
        'meshes',
    ].distinct(),
    lwoLoaderParameters: [
        /**
         * Base content delivery folder path, use when it differs from Lightwave default structure
         */
        'resourcePath',
    ].distinct(),    
    get lwoLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MaterialXLoader.d.ts    
    get materialXLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MD2Loader.d.ts    
    get mD2Loader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MDDLoader.d.ts
    mdd: [
        'morphTargets',
        'clip',
    ].distinct(),    
    get mddLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MMDLoader.d.ts
    mmdLoaderAnimationObject: [
        'animation',
        'mesh',
    ].distinct(),    
    get mmdLoader() {
        return [...this.loader,
            'animationBuilder',
            'animationPath',
            'loader',
            'meshBuilder',
            'parser',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MTLLoader.d.ts
    materialCreatorOptions: [
        /**
         * side: Which side to apply the material
         * THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
         */
        'side',
        /*
         * wrap: What type of wrapping to apply for textures
         * THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
         */
        'wrap',
        /*
         * normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
         * Default: false, assumed to be already normalized
         */
        'normalizeRGB',
        /*
         * ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
         * Default: false
         */
        'ignoreZeroRGBs',
        /*
         * invertTrProperty: Use values 1 of Tr field for fully opaque. This option is useful for obj
         * exported from 3ds MAX, vcglib or meshlab.
         * Default: false
         */
        'invertTrProperty',
    ].distinct(),    
    get mtlLoader() {
        return [...this.loader,
            'materialOptions',
        ].distinct()
    },
    materialInfo: [
        'ks',
        'kd',
        'ke',
        'map_kd',
        'map_ks',
        'map_ke',
        'norm',
        'map_bump',
        'bump',
        'map_d',
        'ns',
        'd',
        'tr',
    ].distinct(),
    texParams: [
        'scale',
        'offset',
        'url',
    ].distinct(),
    materialCreator: [
        'baseUrl',
        'options',
        'materialsInfo',
        'materials',
        'nameLookup',
        'side',
        'wrap',
        'crossOrigin',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\NRRDLoader.d.ts    
    get nrrdLoader() {
        return [...this.loader,
            'manager',
            'path',
            'fieldFunctions',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\OBJLoader.d.ts    
    get objLoader() {
        return [...this.loader,
            'materials',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PCDLoader.d.ts    
    get pcdLoader() {
        return [...this.loader,
            'littleEndian',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PDBLoader.d.ts
    pdb: [
        'geometryAtoms',
        'geometryBonds',
        'json',
    ].distinct(),    
    get pdbLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PLYLoader.d.ts    
    get plyLoader() {
        return [...this.loader,
            'propertyNameMapping',
            'customPropertyMapping',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PVRLoader.d.ts
    pvr: [
        'mipmaps',
        'width',
        'height',
        'format',
        'mipmapCount',
        'isCubemap',
    ].distinct(),    
    get pvrLoader() {
        return [...this.compressedTextureLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBELoader.d.ts
    rgbe: [
        'width',
        'height',
        'data',
        'header',
        'gamma',
        'exposure',
        'type',
    ].distinct(),    
    get rgbeLoader() {
        return [...this.dataTextureLoader,
            'type',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBMLoader.d.ts
    rgbm: [
        'width',
        'height',
        'data',
        'header',
        'format',
        'type',
        'flipY',
    ].distinct(),    
    get rgbmLoader() {
        return [...this.dataTextureLoader,
            'type',
            'maxrange',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\STLLoader.d.ts    
    get stlLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\SVGloader.d.ts    
    get svgResultPaths() {
        return [...this.shapePath,
            'userData',
        ].distinct()
    },
    svgResult: [
        'paths',
        'xml',
    ].distinct(),
    strokeStyle: [
        'strokeColor',
        'strokeWidth',
        'strokeLineJoin',
        'strokeLineCap',
        'strokeMiterLimit',
    ].distinct(),    
    get svgloader() {
        return [...this.loader,
            'defaultDPI',
            'defaultUnit',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TDSLoader.d.ts    
    get tdsLoader() {
        return [...this.loader,
            'debug',
            'group',
            'manager',
            'materials',
            'meshes',
            'position',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TGALoader.d.ts    
    get tgaLoader() {
        return [...this.dataTextureLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TIFFLoader.d.ts
    tiffResult: [
        'width',
        'height',
        'data',
        'flipY',
        'magFilter',
        'minFilter',
    ].distinct(),    
    get tiffLoader() {
        return [...this.dataTextureLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TiltLoader.d.ts    
    get tiltLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TTFLoader.d.ts    
    get ttfLoader() {
        return [...this.loader,
            'reversed',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\USDZLoader.d.ts
    usdaParser: [
    ].distinct(),    
    get usdzLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VOXLoader.d.ts
    chunk: [
        'palette',
        'size',
        'data',
    ].distinct(),    
    get voxLoader() {
        return [...this.loader,
        ].distinct()
    },    
    get voxMesh() {
        return [...this.mesh,
        ].distinct()
    },    
    get voxData3dTexture() {
        return [...this.data3dTexture,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VRMLLoader.d.ts    
    get vrmlLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VTKLoader.d.ts    
    get vtkLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\XYZLoader.d.ts    
    get xyzLoader() {
        return [...this.loader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshGouraudMaterial.d.ts
    /**
     * MeshGouraudMaterial
     *
     * Lambert illumination model with Gouraud (per-vertex) shading
     */    
    get meshGouraudMaterial() {
        return [...this.shaderMaterial,
            'isMeshGouraudMaterial',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshPostProcessingMaterial.d.ts    
    get meshPostProcessingMaterialParameters() {
        return [...this.meshPhysicalMaterial,
            'aoPassMap',
            'aoPassMapScale',
        ].distinct()
    },    
    get meshPostProcessingMaterial() {
        return [...this.meshPhysicalMaterial,
            'aoPassMap',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Capsule.d.ts
    capsule: [
        'start',
        'end',
        'radius',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ColorConverter.d.ts
    hsl: [
        'h',
        's',
        'l',
    ].distinct(),
    cmyk: [
        'c',
        'm',
        'y',
        'k',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ConvexHull.d.ts

    halfEdge: [
        'vertex',
        'prev',
        'next',
        'twin',
        'face',
    ].distinct(),
    vertexNode: [
        'point',
        'prev',
        'next',
        'face',
    ].distinct(),
    vertexList: [
        'head',
        'tail',
    ].distinct(),
    convexHull: [
        'tolerance',
        'faces',
        'newFaces',
        'assigned',
        'unassigned',
        'vertices',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\ImprovedNoise.d.ts
    improvedNoise: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Lut.d.ts
    lut: [
        'lut',
        'map',
        'n',
        'minV',
        'maxV',
    ].distinct(),
    colorMapKeywords: [
        'rainbow',
        'cooltowarm',
        'blackbody',
        'grayscale',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\MeshSurfaceSampler.d.ts
    meshSurfaceSampler: [
        'distribution',
        'geometry',
        'positionAttribute',
        'weightAttribute',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\OBB.d.ts
    obb: [
        'center',
        'halfSize',
        'rotation',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Octree.d.ts
    octree: [
        'box',
        'bounds',
        'subTrees',
        'triangles',
        'layers',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\SimplexNoise.d.ts
    simplexNoise: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ConvexObjectBreaker.d.ts
    cutByPlaneOutput: [
        'object1',
        'object2',
    ].distinct(),
    convexObjectBreaker: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\GpuComputationRenderer.d.ts
    gpuComputationRenderer: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Gyroscope.d.ts    
    get gyroscope() {
        return [...this.object3d,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2Character.d.ts
    mD2PartsConfig: [
        'baseUrl',
        'body',
        'skins',
        'weapons',
    ].distinct(),
    mD2Character: [
        'scale',
        'animationFPS',
        'root',
        'meshBody',
        'meshWeapon',
        'skinsBody',
        'skinsWeapon',
        'weapons',
        'activeAnimation',
        'mixer',
        'loadCounter',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MD2CharacterComplex.d.ts
    mD2CharacterComplex: [
        'scale',
        'animationFPS',
        'transitionFrames',
        'maxSpeed',
        'maxreverseSpeed',
        'frontAcceleration',
        'backAcceleration',
        'frontDecceleration',
        'angularSpeed',
        'root',
        'meshBody',
        'meshWeapon',
        'controls',
        'skinsBody',
        'skinsWeapon',
        'weapons',
        'currentSkin',
        'onLoadComplete',
        'meshes',
        'animations',
        'loadCounter',
        'speed',
        'bodyOrientation',
        'walkSpeed',
        'crouchSpeed',
        'activeAnimation',
        'oldAnimation',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphAnimMesh.d.ts    
    get morphAnimMesh() {
        return [...this.mesh,
            'mixer',
            'activeAction',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphBlendMesh.d.ts    
    get morphBlendMesh() {
        return [...this.mesh,
            'animationsMap',
            'animationsList',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\ProgressiveLightMap.d.ts
    uvBoxes: [
        'w',
        'h',
        'index',
    ].distinct(),
    lightMapContainers: [
        'basicMat',
        'object',
    ].distinct(),
    progressiveLightMap: [
        'renderer',
        'res',
        'lightMapContainers',
        'compiled',
        'scene',
        'tinyTarget',
        'buffer1Active',
        'firstUpdate',
        'warned',
        'progressiveLightMap1',
        'progressiveLightMap2',
        'uvMat',
        'uv_boxes',
        'blurringPlane',
        'labelMaterial',
        'labelPlane',
        'labelMesh',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\RollerCoaster.d.ts
    
    get rollerCoasterGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },    
    get rollerCoasterLiftersGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },    
    get rollerCoasterShadowGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },    
    get skyGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },    
    get treesGeometry() {
        return [...this.bufferGeometry,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Timer.d.ts
    /**
     * This class is an alternative to {@link THREE.Clock} with a different API design and behavior
     * The goal is to avoid the conceptual flaws that became apparent in {@link THREE.Clock} over time.
     *
     * - {@link Timer} has an {@link .update()} method that updates its internal state. That makes it possible to call
     *   {@link .getDelta()} and {@link .getElapsed()} multiple times per simulation step without getting different values.
     * - The class uses the Page Visibility API to avoid large time delta values when the app is inactive (e.g. tab switched
     *   or browser hidden).
     *
     * @example
     * const timer = new Timer()
     *
     * function animate(timestamp) {
     *   requestAnimationFrame(animate)
     *   // timestamp is optional
     *   timer.update(timestamp)
     *   const delta = timer.getDelta()
     *   // do something with delta
     *   renderer.render(scene, camera)
     * }
     *
     * @see https://threejs.org/examples/#webgl_morphtargets_sphere
     */
    timer: [
    ].distinct(),
    /**
     * A timer that uses a fixed delta.
     */    
    get fixedTimer() {
        return [...this.timer,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\TubePainter.d.ts
    tubePainter: [
        'mesh',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Volume.d.ts
    volume: [
        'xLength',
        'yLength',
        'zLength',
        'axisOrder',
        'data',
        'spacing',
        'offset',
        'matrix',
        'lowerThreshold',
        'upperThreshold',
        'sliceList',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\VolumeSlice.d.ts
    volumeSlice: [
        'index',
        'axis',
        'canvas',
        'canvasBuffer',
        'ctx',
        'ctxBuffer',
        'mesh',
        'geometryNeedsUpdate',
        'sliceAccess',
        'jLength',
        'iLength',
        'matrix',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\CurveModifier.d.ts
    splineUniform: [
        'spineTexture',
        'pathOffset',
        'pathSegment',
        'spineOffset',
        'flow',
    ].distinct(),
    flow: [
        'curveArray',
        'curveLengthArray',
        'object3d',
        'splineTexure',
        'uniforms',
    ].distinct(),    
    get instancedFlow() {
        return [...this.flow,
            'object3d',
            'offsets',
            'whichCurve',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\EdgeSplitModifier.d.ts
    edgeSplitModifier: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\SimplifyModifier.d.ts
    simplifyModifier: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\modifiers\TessellateModifier.d.ts
    tessellateModifier: [
        'maxEdgeLength',
        'maxIterations',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\Nodes.d.ts
    // constants
    // core
    // display
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\AccessorsUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BatchNode.d.ts    
    get batchNode() {
        return [...this.node,
            'batchMesh',
            'instanceColorNode',
            'batchingIdNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BitangentNode.d.ts    
    get bitangentNode() {
        return [...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BufferNode.d.ts    
    get bufferNode() {
        return [...this.uniformNode,
            'isBufferNode',
            'bufferType',
            'bufferCount',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\CameraNode.d.ts    
    get cameraNode() {
        return [...this.object3dNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ClippingNode.d.ts    
    get clippingNode() {
        return [...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\CubeTextureNode.d.ts    
    get cubeTextureNode() {
        return [...this.textureNode,
            'isCubeTextureNode',
            'uvNode',
            'levelNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\InstanceNode.d.ts    
    get instanceNode() {
        return [...this.node,
            'instanceMesh',
            'instanceMatrixNode',
            'instanceColorNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialNode.d.ts    
    get materialNode() {
        return [...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialReferenceNode.d.ts    
    get materialReferenceNode() {
        return [...this.referenceNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelNode.d.ts
    /**
     * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
     */    
    get modelNode() {
        return [...this.object3dNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelViewProjectionNode.d.ts    
    get modelViewProjectionNode() {
        return [...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\NormalNode.d.ts    
    get normalNode() {
        return [...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\Object3dNode.d.ts    
    get object3dNode() {
        return [...this.node,
            'scope',
            'object3d',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PointUvNode.d.ts    
    get pointUvNode() {
        return [...this.node,
            'isPointUvNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PositionNode.d.ts    
    get positionNode() {
        return [...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReferenceNode.d.ts    
    get referenceNode() {
        return [...this.node,
            'property',
            'uniformType',
            'object',
            'count',
            'properties',
            'reference',
            'node',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReflectVectorNode.d.ts    
    get reflectVectorNode() {
        return [...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\RendererReferenceNode.d.ts    
    get rendererReferenceNode() {
        return [...this.referenceNode,
            'renderer',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\SkinningNode.d.ts    
    get skinningNode() {
        return [...this.node,
            'skinnedMesh',
            'useReference',
            'skinIndexNode',
            'skinWeightNode',
            'bindMatrixNode',
            'bindMatrixInverseNode',
            'boneMatricesNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\StorageBufferNode.d.ts    
    get storageBufferNode() {
        return [...this.bufferNode,
            'bufferObject',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TangentNode.d.ts    
    get tangentNode() {
        return [...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureBicubicNode.d.ts    
    get textureBicubicNode() {
        return [...this.tempNode,
            'textureNode',
            'blurNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureNode.d.ts    
    get textureNode() {
        return [...this.uniformNode,
            'uvNode',
            'levelNode',
            'compareNode',
            'depthNode',
            'gradNode',
            'sampler',
            'updateMatrix',
            'referenceNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UniformsNode.d.ts    
    get uniformsElementNode() {
        return [...this.arrayElementNode,
        ].distinct()
    },    
    get uniformsNode() {
        return [...this.bufferNode,
            'array',
            'elementType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UserDataNode.d.ts    
    get userDataNode() {
        return [...this.referenceNode,
            'userData',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UvNode.d.ts    
    get uvNode() {
        return [...this.attributeNode,
            'isUvNode',
            'index',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\VertexColorNode.d.ts    
    get vertexColorNode() {
        return [...this.attributeNode,
            'index',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\CodeNode.d.ts
    codeNodeInclude: [
    ].distinct(),    
    get codeNode() {
        return [...this.node,
            'isCodeNode',
            'code',
            'language',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\ExpressionNode.d.ts    
    get expressionNode() {
        return [...this.tempNode,
            'snipped',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionCallNode.d.ts    
    get functionCallNode() {
        return [...this.tempNode,
            'functionNode',
            'parameters',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionNode.d.ts    
    get functionNode() {
        return [...this.codeNode,
            'keywords',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AssignNode.d.ts    
    get assignNode() {
        return [...this.tempNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AttributeNode.d.ts    
    get attributeNode() {
        return [...this.node,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\BypassNode.d.ts    
    get bypassNode() {
        return [...this.node,
            'isBypassNode',
            'outputNode',
            'callNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\CacheNode.d.ts    
    get cacheNode() {
        return [...this.node,
            'isCacheNode',
            'node',
            'cache',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\constants.d.ts
    /** generic key value type,curretly used by nodes  */
    anyObject: [
        // [key: string].distinct(),
    ].distinct(),
    /** a generic JSON type, used by nodes only */
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ConstNode.d.ts
    constNode: [
        'isConstNode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ContextNode.d.ts    
    get contextNode() {
        return [...this.node,
            'isContextNode',
            'node',
            'context',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\IndexNode.d.ts    
    get indexNode() {
        return [...this.node,
            'scope',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\InputNode.d.ts    
    get inputNode() {
        return [...this.node,
            'isInputNode',
            'value',
            'precision',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\LightingModel.d.ts
    lightingModelReflectedLight: [
        'directDiffuse',
        'directSpecular',
        'indirectDiffuse',
        'indirectSpecular',
    ].distinct(),
    lightingModelDirectInput: [
        'lightDirection',
        'lightColor',
        'reflectedLight',
        'shadowMask',
    ].distinct(),
    lightingModelIndirectInput: [
        'radiance',
        'irradiance',
        'iblIrradiance',
        'ambientOcclusion',
        'reflectedLight',
        'backdrop',
        'backdropAlpha',
        'outgoingLight',
    ].distinct(),
    lightingModel: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\Node.d.ts
    node: [
        'nodeType',
        'updateType',
        'updateBeforeType',
        'uuid',
        'version',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeAttribute.d.ts
    nodeAttribute: [
        'isNodeAttribute',
        'name',
        'type',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeBuilder.d.ts
    flowData: [
        'code',
    ].distinct(),
    nodeData: [
        'vertex',
        'fragment',
        'compute',
    ].distinct(),
    nodeBuilder: [
        'object',
        'material',
        'geometry',
        'renderer',
        'parser',
        'nodes',
        'updateNodes',
        'hashNodes',
        'lightsNode',
        'fogNode',
        'vertexShader',
        'fragmentShader',
        'computeShader',
        'cache',
        'globalCache',
        /**
         * @TODO used to be missing. check the actual type later
         */
        'flowsData',
        'shaderStage',
        'buildStage',
        'stack',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCache.d.ts
    nodeCache: [
        'id',
        'nodesData',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCode.d.ts
    nodeCode: [
        'isNodeCode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFrame.d.ts
    nodeFrame: [
        'time',
        'deltaTime',
        'frameId',
        'renderId',
        'startTime',
        'frameMap',
        'frameBeforeMap',
        'renderMap',
        'renderBeforeMap',
        'renderer',
        'material',
        'camera',
        'object',
        'scene',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunction.d.ts
    nodeFunction: [
        'isNodeFunction',
        'type',
        'inputs',
        'name',
        'presicion',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunctionInput.d.ts
    nodeFunctionInput: [
        'isNodeFunctionInput',
        'count',
        'qualifier',
        'isConst',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeKeywords.d.ts
    nodeKeywords: [
        'keywords',
        'nodes',
        'keywordsCallback',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeParser.d.ts
    nodeParser: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeUniform.d.ts
    nodeUniform: [
        'name',
        'type',
        'node',
        'needsUpdate',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeUtils.d.ts
    nodeChild: [
        'property',
        'index',
        'childNode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVar.d.ts
    nodeVar: [
        'isNodeVar',
        'name',
        'type',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVarying.d.ts    
    get nodeVarying() {
        return [...this.nodeVar,
            'needsInterpolation',
            'isNodeVarying',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\OutputStructNode.d.ts    
    get outputStructNode() {
        return [...this.node,
            'members',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\PropertyNode.d.ts    
    get propertyNode() {
        return [...this.node,
            'name',
            'varying',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\StackNode.d.ts    
    get stackNode() {
        return [...this.node,
            'isStackNode',
            'nodes',
            'outputNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\TempNode.d.ts    
    get tempNode() {
        return [...this.node,
            'isTempNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\UniformNode.d.ts
    uniformNode: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VarNode.d.ts    
    get varNode() {
        return [...this.node,
            'node',
            'name',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VaryingNode.d.ts    
    get varyingNode() {
        return [...this.node,
            'node',
            'name',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AfterImageNode.d.ts    
    get afterImageNode() {
        return [...this.tempNode,
            'textureNode',
            'textureNodeOld',
            'damp',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AnamorphicNode.d.ts    
    get anamorphicNode() {
        return [...this.tempNode,
            'textureNode',
            'thresholdNode',
            'scaleNode',
            'samples',
            'resolution',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\BlendModeNode.d.ts    
    get blendModeNode() {
        return [...this.tempNode,
            'baseNode',
            'blendMode',
            'blendNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorAdjustmentNode.d.ts    
    get colorAdjustmentNode() {
        return [...this.tempNode,
            'method',
            'colorNode',
            'adjustmentNode',
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ColorSpaceNode.d.ts    
    get colorSpaceNode() {
        return [...this.tempNode,
            'method',
            'node',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\FrontFacingNode.d.ts    
    get frontFacingNode() {
        return [...this.node,
            'isFrontFacingNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\GaussianBlurNode.d.ts    
    get gaussianBlurNode() {
        return [...this.tempNode,
            'textureNode',
            'sigma',
            'directionNode',
            'resolution',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\NormalMapNode.d.ts    
    get normalMapNode() {
        return [...this.tempNode,
            'node',
            'scaleNode',
            'normalMapType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PassNode.d.ts    
    get passTextureNode() {
        return [...this.textureNode,
            'passNode',
        ].distinct()
    },    
    get passNode() {
        return [...this.tempNode,
            'scope',
            'scene',
            'camera',
            'renderTarget',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PosterizeNode.d.ts    
    get posterizeNode() {
        return [...this.node,
            'sourceNode',
            'stepsNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ToneMappingNode.d.ts
    // exposure only    
    get toneMappingNode() {
        return [...this.tempNode,
            'toneMapping',
            'exposureNode',
            'colorNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthNode.d.ts    
    get viewportDepthNode() {
        return [...this.node,
            'scope',
            'valueNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthTextureNode.d.ts    
    get viewportDepthTextureNode() {
        return [...this.viewportTextureNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportNode.d.ts    
    get viewportNode() {
        return [...this.node,
            'scope',
            'isViewportNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportSharedTextureNode.d.ts    
    get viewportSharedTextureNode() {
        return [...this.viewportTextureNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportTextureNode.d.ts    
    get viewportTextureNode() {
        return [...this.textureNode,
            'generateMipmaps',
            'updateBeforeType',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogExp2Node.d.ts    
    get fogExp2Node() {
        return [...this.fogNode,
            'isFogExp2Node',
            'densityNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogNode.d.ts    
    get fogNode() {
        return [...this.node,
            'isFogNode',
            'colorNode',
            'factorNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogRangeNode.d.ts    
    get fogRangeNode() {
        return [...this.fogNode,
            'isFogRangeNode',
            'nearNode',
            'farNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhongLightingModel.d.ts    
    get phongLightingModel() {
        return [...this.lightingModel,
            'specular',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhysicalLightingModel.d.ts    
    get physicalLightingModel() {
        return [...this.lightingModel,
            'clearcoat',
            'sheen',
            'iridescence',
            'anisotropy',
            'transmission',
            'clearcoatRadiance',
            'clearcoatSpecularDirect',
            'clearcoatSpecularIndirect',
            'sheenSpecularDirect',
            'sheenSpecularIndirect',
            'iridescenceFresnel',
            'iridescenceF0',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\ShadowMaskModel.d.ts    
    get shadowMaskModel() {
        return [...this.lightingModel,
            'shadowNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\BRDF_GGX.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\BRDF_Lambert.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\BRDF_Sheen.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\DFGApprox.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\D_GGX.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\D_GGX_Anisotropic.d.ts
    // https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\F_Schlick.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\V_GGX_SmithCorrelated.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\BSDF\V_GGX_SmithCorrelated_Anisotropic.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\material\getGeometryRoughness.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\material\getRoughness.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\geometry\RangeNode.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\gpgpu\ComputeNode.d.ts    
    get computeNode() {
        return [...this.node,
            'isComputeNode',
            'count',
            'workgroupSize',
            'dispatchCount',
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AnalyticLightNode.d.ts    
    get analyticLightNode() {
        return [...this.lightingNode,
            'light',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AONode.d.ts    
    get aoNode() {
        return [...this.lightingNode,
            'aoNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\EnvironmentNode.d.ts    
    get environmentNode() {
        return [...this.lightingNode,
            'envNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\HemisphereLightNode.d.ts    
    get hemisphereLightNode() {
        return [...this.analyticLightNode,
            'lightPositionNode',
            'lightDirectionNode',
            'groundColorNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\IrradianceNode.d.ts    
    get irradianceNode() {
        return [...this.lightingNode,
            'node',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingContextNode.d.ts    
    get lightingContextNode() {
        return [...this.contextNode,
            'lightingModelNode',
            'backdropNode',
            'backdropAlphaNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingNode.d.ts    
    get lightingNode() {
        return [...this.node,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightsNode.d.ts    
    get lightsNode() {
        return [...this.node,
            'lightNodes',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\PointLightNode.d.ts    
    get pointLightNode() {
        return [...this.analyticLightNode,
            'cutoffDistanceNode',
            'decayExponentNode',
            'directionNode',
            'coneCosNode',
            'penumbraCosNode',
            'cutoffDistanceNode',
            'decayExponentNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\SpotLightNode.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeLoader.d.ts
    nodeLoaderResult: [

    ].distinct(),    
    get nodeLoader() {
        return [...this.loader,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeMaterialLoader.d.ts    
    get nodeMaterialLoader() {
        return [...this.materialLoader,
            'nodes',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeObjectLoader.d.ts    
    get nodeObjectLoader() {
        return [...this.objectLoader,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\LineBasicNodeMaterial.d.ts    
    get lineBasicNodeMaterialParameters() {
        return [...this.nodeMaterialParameters, ...this.lineBasicMaterialParameters,
        ].distinct()
    },
    
    get lineBasicNodeMaterial() {
        return [...this.nodeMaterial,
            // Properties from LineBasicMaterial
            'color',
            'linecap',
            'linejoin',
            'map',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\Materials.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshBasicNodeMaterial.d.ts    
    get meshBasicNodeMaterialParameters() {
        return [...this.nodeMaterialParameters, ...this.meshBasicMaterialParameters,
        ].distinct()
    },    
    get meshBasicNodeMaterial() {
        return [...this.nodeMaterial,
            // Properties from MeshBasicMaterial
            'color',
            'map',
            'lightMap',
            'lightMapIntensity',
            'aoMap',
            'aoMapIntensity',
            'specularMap',
            'alphaMap',
            'envMap',
            'combine',
            'reflectivity',
            'refractionRatio',
            'wireframeLinecap',
            'wireframeLinejoin',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshNormalNodeMaterial.d.ts    
    get meshNormalNodeMaterial() {
        return [...this.nodeMaterial,
            // Properties from MeshNormalMaterial
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'flatShading',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhongNodeMaterial.d.ts    
    get meshPhongNodeMaterialParameters() {
        return [...this.nodeMaterialParameters, ...this.meshPhongMaterialParameters,
        ].distinct()
    },
    
    get meshPhongNodeMaterial() {
        return [...this.nodeMaterial,
            'shininessNode',
            'specularNode',
            // Properties from MeshPhongMaterial
            'color',
            'specular',
            'shininess',
            'map',
            'lightMap',
            'lightMapIntensity',
            'aoMap',
            'aoMapIntensity',
            'emissive',
            'emissiveIntensity',
            'emissiveMap',
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'specularMap',
            'alphaMap',
            'envMap',
            'combine',
            'reflectivity',
            'refractionRatio',
            'wireframeLinecap',
            'wireframeLinejoin',
            'flatShading',
            'metal',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhysicalNodeMaterial.d.ts    
    get meshPhysicalNodeMaterialParameters() {
        return [...this.meshStandardNodeMaterialParameters, ...this.meshPhysicalMaterialParameters,
        ].distinct()
    },
    
    get meshPhysicalNodeMaterial() {
        return [...this.meshStandardNodeMaterial,
            'clearcoatNode',
            'clearcoatRoughnessNode',
            'clearcoatNormalNode',
            'sheenNode',
            'sheenRoughnessNode',
            'iridescenceNode',
            'iridescenceIORNode',
            'iridescenceThicknessNode',
            'iorNode',
            'specularIntensityNode',
            'specularColorNode',
            'transmissionNode',
            'thicknessNode',
            'attenuationDistanceNode',
            'attenuationColorNode',
            'anisotropyNode',
            // Properties from MeshPhysicalMaterial
            'anisotropyRotation',
            'anisotropyMap',
            'clearcoatMap',
            'clearcoatRoughness',
            'clearcoatRoughnessMap',
            'clearcoatNormalScale',
            'clearcoatNormalMap',
            'ior',
            'reflectivity',
            'iridescenceMap',
            'iridescenceIOR',
            'iridescenceThicknessRange',
            'iridescenceThicknessMap',
            'sheenColor',
            'sheenColorMap',
            'sheenRoughness',
            'sheenRoughnessMap',
            'transmissionMap',
            'thickness',
            'thicknessMap',
            'attenuationDistance',
            'attenuationColor',
            'specularIntensity',
            'specularIntensityMap',
            'specularColor',
            'specularColorMap',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshSSSNodeMaterial.d.ts    
    get meshSssNodeMaterial() {
        return [...this.meshPhysicalNodeMaterial,
            'thicknessColorNode',
            'thicknessDistortionNode',
            'thicknessAmbientNode',
            'thicknessAttenuationNode',
            'thicknessPowerNode',
            'thicknessScaleNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshStandardNodeMaterial.d.ts    
    get meshStandardNodeMaterialParameters() {
        return [...this.nodeMaterialParameters, ...this.meshStandardMaterialParameters,
        ].distinct()
    },
    
    get meshStandardNodeMaterial() {
        return [...this.nodeMaterial,
            'emissiveNode',
            'metalnessNode',
            'roughnessNode',
            // Properties from MeshStandardMaterial
            'color',
            'roughness',
            'metalness',
            'map',
            'lightMap',
            'lightMapIntensity',
            'aoMap',
            'aoMapIntensity',
            'emissive',
            'emissiveIntensity',
            'emissiveMap',
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'normalScale',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'roughnessMap',
            'metalnessMap',
            'alphaMap',
            'envMap',
            'envMapIntensity',
            'wireframeLinecap',
            'wireframeLinejoin',
            'flatShading',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\NodeMaterial.d.ts    
    get nodeMaterialParameters() {
        return [...this.shaderMaterialParameters,
            'normals',
            'colorSpaced',
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
            'depthNode',
            'shadowNode',
            'outputNode',
            'fragmentNode',
            'vertexNode',
        ].distinct()
    },
    
    get nodeMaterial() {
        return [...this.shaderMaterial,
            'normals',
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
            'depthNode',
            'shadowNode',
            'shadowPositionNode',
            'outputNode',
            'fragmentNode',
            'vertexNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\PointsNodeMaterial.d.ts    
    get pointsNodeMaterialParameters() {
        return [...this.nodeMaterialParameters, ...this.pointsMaterialParameters,
        ].distinct()
    },
    
    get pointsNodeMaterial() {
        return [...this.nodeMaterial,
            // Properties from PointsMaterial
            'color',
            'map',
            'alphaMap',
            'size',
            'sizeAttenuation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\ShadowNodeMaterial.d.ts    
    get shadowNodeMaterialParameters() {
        return [...this.nodeMaterialParameters, ...this.shadowMaterialParameters,
        ].distinct()
    },
    
    get shadowNodeMaterial() {
        return [...this.nodeMaterial,
            // Properties from ShadowMaterial
            'color',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\SpriteNodeMaterial.d.ts    
    get spriteNodeMaterialParameters() {
        return [...this.nodeMaterialParameters, ...this.spriteMaterialParameters,
        ].distinct()
    },    
    get spriteNodeMaterial() {
        return [...this.nodeMaterial,
            'isSpriteNodeMaterial',
            'rotationNode',
            'scaleNode',
            // Properties from SpriteMaterial
            'color',
            'map',
            'alphaMap',
            'rotation',
            'sizeAttenuation',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\MaterialXNodes.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\lib\mx_hsv.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\lib\mx_noise.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materialx\lib\mx_transform_color.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\CondNode.d.ts    
    get condNode() {
        return [...this.node,
            'condNode',
            'ifNode',
            'elseNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\HashNode.d.ts    
    get hashNode() {
        return [...this.node,
            'seedNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathNode.d.ts    
    get mathNode() {
        return [...this.tempNode,
            // 1 input
            // 2 inputs
            // 3 inputs
            'method',
            'aNode',
            'bNode',
            'cNode',
        ].distinct()
    },
    nodeElements: [
        'all',
        'any',
        'equals',
        'radians',
        'degrees',
        'exp',
        'exp2',
        'log',
        'log2',
        'sqrt',
        'inverseSqrt',
        'floor',
        'ceil',
        'normalize',
        'fract',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'abs',
        'sign',
        'length',
        'lengthSq',
        'negate',
        'oneMinus',
        'dFdx',
        'dFdy',
        'round',
        'reciprocal',
        'trunc',
        'fwidth',
        'atan2',
        'min',
        'max',
        'mod',
        'step',
        'reflect',
        'distance',
        'dot',
        'cross',
        'pow',
        'pow2',
        'pow3',
        'pow4',
        'transformDirection',
        'mix',
        'clamp',
        'refract',
        'smoothstep',
        'faceForward',
        'difference',
        'saturate',
        'cbrt',

        'lightingContext',
        'cond',
        'hash',
        'parabola',
        'gain',
        'pcurve',
        'sinc',
        'compute',
        'rangeFog',
        'fog',
        'densityFog',
        'viewportSharedTexture',
        'viewportTexture',
        'viewportMipTexture',
        'toneMapping',
        'gaussianBlur',
        'normalMap',
        'posterize',
        'add',
        'sub',
        'mul',
        'div',
        'remainder',
        'equal',
        'lessThan',
        'greaterThan',
        'lessThanEqual',
        'greaterThanEqual',
        'and',
        'or',
        'not',
        'xor',
        'bitAnd',
        'bitNot',
        'bitOr',
        'bitXor',
        'shiftLeft',
        'shiftRight',
        'afterImage',
        'anamorphic',
        'burn',
        'dodge',
        'overlay',
        'screen',
        'saturation',
        'vibrance',
        'hue',
        'threshold',
        'linearTosRGB',
        'sRGBToLinear',
        'linearToColorSpace',
        'colorSpaceToLinear',
        'temp',
        'toVar',
        'context',
        'label',
        'varying',
        'bypass',
        'cache',
        'globalCache',
        'call',
        'assign',
        'bicubic',
        'storageElement',
        'triplanarTexture',
        'cubeTexture',
        'texture',
        'rotateUv',
        'remap',
        'remapClamp',
        'rotate',
        'append',
        'color',
        'float',
        'int',
        'uint',
        'bool',
        'vec2',
        'ivec2',
        'uvec2',
        'bvec2',
        'vec3',
        'ivec3',
        'uvec3',
        'bvec3',
        'vec4',
        'ivec4',
        'uvec4',
        'bvec4',
        'mat2',
        'imat2',
        'umat2',
        'bmat2',
        'mat3',
        'imat3',
        'umat3',
        'bmat3',
        'mat4',
        'imat4',
        'umat4',
        'bmat4',
        'string',
        'arrayBuffer',
        'element',
        'convert',
        'checker',
        'discard',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathUtils.d.ts
    // remapping functions
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\OperatorNode.d.ts    
    get operatorNode() {
        return [...this.tempNode,
            'aNode',
            'bNode',
            'op',
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\TriNoise3d.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\pmrem\PMREMNode.d.ts    
    get pmremNode() {
        return [...this.tempNode,
            'uvNode',
            'levelNode',
            'value',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\procedural\CheckerNode.d.ts    
    get checkerNode() {
        return [...this.tempNode,
            'uvNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\shadernode\ShaderNode.d.ts

    shaderNode: [
    ].distinct(),

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ArrayElementNode.d.ts    
    get arrayElementNode() {
        return [...this.tempNode,
            'node',
            'indexNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ConvertNode.d.ts    
    get convertNode() {
        return [...this.node,
            'node',
            'convertTo',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\DiscardNode.d.ts    
    get discardNode() {
        return [...this.condNode,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\EquirectUvNode.d.ts    
    get equirectUvNode() {
        return [...this.tempNode,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\JoinNode.d.ts
    /**
     * This node constructs given type from elements, like vec3(a,b,c)
     */    
    get joinNode() {
        return [...this.tempNode,
            'nodes',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MatcapUvNode.d.ts    
    get matcapUvNode() {
        return [...this.tempNode,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MaxMipLevelNode.d.ts    
    get maxMipLevelNode() {
        return [...this.uniformNode,
            'textureNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\OscNode.d.ts    
    get oscNode() {
        return [...this.node,
            'method',
            'timeNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ReflectorNode.d.ts
    reflectorNodeParameters: [
        'target',
        'resolution',
        'generateMipmaps',
        'bounces',
    ].distinct(),    
    get reflectorNode() {
        return [...this.textureNode,
            'target',
            'resolution',
            'generateMipmaps',
            'bounces',
            'virtualCameras',
            'renderTargets',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RemapNode.d.ts    
    get remapNode() {
        return [...this.node,
            'node',
            'inLowNode',
            'inHighNode',
            'outLowNode',
            'outHighNode',
            'doClamp',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateNode.d.ts    
    get rotateNode() {
        return [...this.tempNode,
            'positionNode',
            'rotationNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateUvNode.d.ts    
    get rotateUvNode() {
        return [...this.tempNode,
            'uvNode',
            'rotationNode',
            'centerNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SplitNode.d.ts
    /** swizzle node */    
    get splitNode() {
        return [...this.node,
            'node',
            'components',
            /**
             * @param node the input node
             * @param components swizzle like string, default = "x"
             */
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SpriteSheetUvNode.d.ts    
    get spriteSheetUvNode() {
        return [...this.node,
            'countNode',
            'uvNode',
            'frameNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\StoargeArrayElementNode.d.ts    
    get storageArrayElementNode() {
        return [...this.arrayElementNode,
            'node',
            'storageBufferNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TimerNode.d.ts    
    get timerNode() {
        return [...this.uniformNode,
            'scope',
            'scale',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TriplanarTexturesNode.d.ts    
    get triplanarTexturesNode() {
        return [...this.node,
            'textureXNode',
            'textureYNode',
            'textureZNode',
            'scaleNode',
            'positionNode',
            'normalNode',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\GroundedSkybox.d.ts    
    get groundedSkybox() {
        return [...this.mesh,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Lensflare.d.ts
    lensflareElement: [
        'texture',
        'size',
        'distance',
        'color',
    ].distinct(),    
    get lensflare() {
        return [...this.mesh,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\MarchingCubes.d.ts    
    get marchingCubes() {
        return [...this.mesh,
            'enableUvs',
            'enableColors',
            'resolution',
            // parameters
            'isolation',
            // size of field, 32 is pushing it in Javascript :)
            'size',
            'size2',
            'size3',
            'halfsize',
            // deltas
            'delta',
            'yd',
            'zd',
            'field',
            'normal_cache',
            'palette',
            'maxCount',
            'count',
            'hasPositions',
            'hasNormals',
            'hasColors',
            'hasUvs',
            'positionArray',
            'normalArray',
            'uvArray',
            'colorArray',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\QuadMesh.d.ts    
    get quadMesh() {
        return [...this.mesh,
            'camera',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Reflector.d.ts
    reflectorOptions: [
        'color',
        'textureWidth',
        'textureHeight',
        'clipBias',
        'shader',
        'multisample',
    ].distinct(),    
    get reflector() {
        return [...this.mesh,
            'camera',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ReflectorForSSRPass.d.ts
    reflectorShader: [
        'name',
        'defines',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    reflectorForSsrPassOptions: [
        'clipBias',
        'textureWidth',
        'textureHeight',
        'color',
        'useDepthTexture',
        'shader',
    ].distinct(),
    reflectorForSsrPass: [
        'options',
        'needsUpdate',
        'maxDistance',
        'opacity',
        'color',
        'resolution',
        'distanceAttenuation',
        'fresnel',
        'material',
        'renderTarget',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Refractor.d.ts
    refractorOptions: [
        'color',
        'textureWidth',
        'textureHeight',
        'clipBias',
        'shader',
        'multisample',
    ].distinct(),    
    get refractor() {
        return [...this.mesh,
            'camera',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ShadowMesh.d.ts    
    get shadowMesh() {
        return [...this.mesh,
            'meshMatrix',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Sky.d.ts    
    get sky() {
        return [...this.mesh,
            'geometry',
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water.d.ts
    waterOptions: [
        'textureWidth',
        'textureHeight',
        'clipBias',
        'alpha',
        'time',
        'waterNormals',
        'sunDirection',
        'sunColor',
        'waterColor',
        'eye',
        'distortionScale',
        'side',
        'fog',
    ].distinct(),    
    get water() {
        return [...this.mesh,
            'material',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\Water2.d.ts
    water2Options: [
        'color',
        'textureWidth',
        'textureHeight',
        'clipBias',
        'flowDirection',
        'flowSpeed',
        'reflectivity',
        'scale',
        'shader',
        'flowMap',
        'normalMap0',
        'normalMap1',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\physics\AmmoPhysics.d.ts
    ammoPhysicsObject: [
        'addScene',
        'addMesh',
        'setMeshPosition',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\physics\JoltPhysics.d.ts
    joltPhysicsObject: [
        'addScene',
        'addMesh',
        'setMeshPosition',
        'setMeshVelocity',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\physics\RapierPhysics.d.ts
    rapierPhysicsObject: [
        'addScene',
        'addMesh',
        'setMeshPosition',
        'setMeshVelocity',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\AfterimagePass.d.ts    
    get afterimagePass() {
        return [...this.pass,
            'shader',
            'uniforms',
            'textureComp',
            'textureOld',
            'shaderMaterial',
            'compFsQuad',
            'copyFsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BloomPass.d.ts    
    get bloomPass() {
        return [...this.pass,
            'renderTargetX',
            'renderTargetY',
            'copyUniforms',
            'materialCopy',
            'convolutionUniforms',
            'materialConvolution',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\BokehPass.d.ts
    bokehPassParamters: [
        'focus',
        'aspect',
        'aperture',
        'maxblur',
    ].distinct(),    
    get bokehPass() {
        return [...this.pass,
            'scene',
            'camera',
            'renderTargetColor',
            'renderTargetDepth',
            'materialDepth',
            'materialBokeh',
            'uniforms',
            'fsQuad',
            'oldClearColor',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ClearPass.d.ts    
    get clearPass() {
        return [...this.pass,
            'clearColor',
            'clearAlpha',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\CubeTexturePass.d.ts    
    get cubeTexturePass() {
        return [...this.pass,
            'camera',
            'cubeShader',
            'cubeMesh',
            'envMap',
            'opacity',
            'cubeScene',
            'cubeCamera',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\DotScreenPass.d.ts    
    get dotScreenPass() {
        return [...this.pass,
            'uniforms',
            'material',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\EffectComposer.d.ts
    effectComposer: [
        'renderer',
        'renderTarget1',
        'renderTarget2',
        'writeBuffer',
        'readBuffer',
        'passes',
        'copyPass',
        'clock',
        'renderToScreen',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\FilmPass.d.ts    
    get filmPass() {
        return [...this.pass,
            'uniforms',
            'material',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GlitchPass.d.ts    
    get glitchPass() {
        return [...this.pass,
            'uniforms',
            'material',
            'fsQuad',
            'goWild',
            'curF',
            'randX',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\GTAOPass.d.ts    
    get gtaoPass() {
        return [...this.pass,
            'width',
            'height',
            'clear',
            'camera',
            'scene',
            'output',
            'blendIntensity',
            'pdRings',
            'pdRadiusExponent',
            'pdSamples',
            'gtaoNoiseTexture',
            'pdNoiseTexture',
            'gtaoRenderTarget',
            'pdRenderTarget',
            'gtaoMaterial',
            'normalMaterial',
            'pdMaterial',
            'depthRenderMaterial',
            'copyMaterial',
            'blendMaterial',
            'fsQuad',
            'originalClearColor',
            'depthTexture',
            'normalTexture',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\HalftonePass.d.ts
    halftonePassParameters: [
        'shape',
        'radius',
        'rotateR',
        'rotateB',
        'rotateG',
        'scatter',
        'blending',
        'blendingMode',
        'greyscale',
        'disable',
    ].distinct(),    
    get halftonePass() {
        return [...this.pass,
            'uniforms',
            'material',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\LUTPass.d.ts
    lutPassParameters: [
        'lut',
        'intensity',
    ].distinct(),    
    get lutPass() {
        return [...this.shaderPass,
            'lut',
            'intensity',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\MaskPass.d.ts    
    get maskPass() {
        return [...this.pass,
            'scene',
            'camera',
            'inverse',
        ].distinct()
    },    
    get clearMaskPass() {
        return [...this.pass,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutlinePass.d.ts    
    get outlinePass() {
        return [...this.pass,
            'renderScene',
            'renderCamera',
            'selectedObjects',
            'visibleEdgeColor',
            'hiddenEdgeColor',
            'edgeGlow',
            'usePatternTexture',
            'edgeThickness',
            'edgeStrength',
            'downSampleRatio',
            'pulsePeriod',
            'resolution',
            'patternTexture',
            'maskBufferMaterial',
            'renderTargetMaskBuffer',
            'depthMaterial',
            'prepareMaskMaterial',
            'renderTargetDepthBuffer',
            'renderTargetMaskDownSampleBuffer',
            'renderTargetBlurBuffer1',
            'renderTargetBlurBuffer2',
            'edgeDetectionMaterial',
            'renderTargetEdgeBuffer1',
            'renderTargetEdgeBuffer2',
            'separableBlurMaterial1',
            'separableBlurMaterial2',
            'overlayMaterial',
            'copyUniforms',
            'materialCopy',
            'oldClearColor',
            'oldClearAlpha',
            'fsQuad',
            'tempPulseColor1',
            'tempPulseColor2',
            'textureMatrix',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\OutputPass.d.ts    
    get outputPass() {
        return [...this.pass,
            'uniforms',
            'material',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\Pass.d.ts
    pass: [
        'isPass',
        'enabled',
        'needsSwap',
        'clear',
        'renderToScreen',
    ].distinct(),
    fullScreenQuad: [
        'material',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPass.d.ts    
    get renderPass() {
        return [...this.pass,
            'scene',
            'camera',
            'overrideMaterial',
            'clearColor',
            'clearAlpha',
            'clearDepth',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderPixelatedPass.d.ts
    renderPixelatedPassParameters: [
        'normalEdgeStrength',
        'depthEdgeStrength',
    ].distinct(),    
    get renderPixelatedPass() {
        return [...this.pass,
            'pixelSize',
            'resolution',
            'renderResolution',
            'pixelatedMaterial',
            'normalMaterial',
            'fsQuad',
            'scene',
            'camera',
            'normalEdgeStrength',
            'depthEdgeStrength',
            'beautyRenderTarget',
            'normalRenderTarget',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\RenderTransitionPass.d.ts    
    get renderTransitionPass() {
        return [...this.pass,
            'material',
            'fsQuad',
            'sceneA',
            'cameraA',
            'sceneB',
            'cameraB',
            'renderTargetA',
            'renderTargetB',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SAOPass.d.ts
    saoPassParams: [
        'output',
        'saoBias',
        'saoIntensity',
        'saoScale',
        'saoKernelRadius',
        'saoMinResolution',
        'saoBlur',
        'saoBlurRadius',
        'saoBlurStdDev',
        'saoBlurDepthCutoff',
    ].distinct(),    
    get saoPass() {
        return [...this.pass,
            'scene',
            'camera',
            'originalClearColor',
            'oldClearColor',
            'oldClearAlpha',
            'resolution',
            'saoRenderTarget',
            'blurIntermediateRenderTarget',
            'normalRenderTarget',
            'normalMaterial',
            'saoMaterial',
            'vBlurMaterial',
            'hBlurMaterial',
            'materialCopy',
            'fsQuad',
            'params',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SavePass.d.ts    
    get savePass() {
        return [...this.pass,
            'textureID',
            'renderTarget',
            'uniforms',
            'material',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ShaderPass.d.ts    
    get shaderPass() {
        return [...this.pass,
            'textureID',
            'uniforms',
            'material',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SMAAPass.d.ts    
    get smaaPass() {
        return [...this.pass,
            'edgesRT',
            'weightsRT',
            'areaTexture',
            'searchTexture',
            'uniformsEdges',
            'materialEdges',
            'uniformsWeights',
            'materialWeights',
            'uniformsBlend',
            'materialBlend',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAARenderPass.d.ts    
    get ssaaRenderPass() {
        return [...this.pass,
            'scene',
            'camera',
            'sampleLevel',
            'unbiased',
            'clearColor',
            'clearAlpha',
            'copyUniforms',
            'copyMaterial',
            'fsQuad',
            'sampleRenderTarget',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSAOPass.d.ts    
    get ssaoPass() {
        return [...this.pass,
            'scene',
            'camera',
            'width',
            'height',
            'clear',
            'kernelRadius',
            'kernel',
            'noiseTexture',
            'output',
            'minDistance',
            'maxDistance',
            'normalRenderTarget',
            'ssaoRenderTarget',
            'blurRenderTarget',
            'ssaoMaterial',
            'normalMaterial',
            'blurMaterial',
            'depthRenderMaterial',
            'copyMaterial',
            'fsQuad',
            'originalClearColor',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\SSRPass.d.ts
    ssrPassParams: [
        'renderer',
        'scene',
        'camera',
        'width',
        'height',
        'selects',
        'isPerspectiveCamera',
        'isBouncing',
        'groundReflector',
    ].distinct(),    
    get ssrPass() {
        return [...this.pass,
            'width',
            'height',
            'clear',
            'renderer',
            'scene',
            'camera',
            'groundReflector',
            'opacity',
            'output',
            'maxDistance',
            'thickness',
            'tempColor',
            'selects',
            'selective',
            'bouncing',
            'blur',
            'distanceAttenuation',
            'fresnel',
            'infiniteThick',
            'beautyRenderTarget',
            'prevRenderTarget',
            'normalRenderTarget',
            'metalnessRenderTarget',
            'ssrRenderTarget',
            'blurRenderTarget',
            'blurRenderTarget2',
            'ssrMaterial',
            'normalMaterial',
            'metalnessOnMaterial',
            'metalnessOffMaterial',
            'blurMaterial',
            'blurMaterial2',
            'depthRenderMaterial',
            'copyMaterial',
            'fsQuad',
            'originalClearColor',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TAARenderPass.d.ts    
    get taaRenderPass() {
        return [...this.ssaaRenderPass,
            'accumulate',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\TexturePass.d.ts    
    get texturePass() {
        return [...this.pass,
            'map',
            'opacity',
            'uniforms',
            'material',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\UnrealBloomPass.d.ts    
    get unrealBloomPass() {
        return [...this.pass,
            'resolution',
            'strength',
            'radius',
            'threshold',
            'clearColor',
            'renderTargetsHorizontal',
            'renderTargetsVertical',
            'nMips',
            'renderTargetBright',
            'highPassUniforms',
            'materialHighPassFilter',
            'separableBlurMaterials',
            'compositeMaterial',
            'bloomTintColors',
            'copyUniforms',
            'blendMaterial',
            'oldClearColor',
            'oldClearAlpha',
            'basic',
            'fsQuad',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\CSS2dRenderer.d.ts    
    get css2dObject() {
        return [...this.object3d,
            'element',
            'center',
        ].distinct()
    },
    css2dRenderer: [
        'domElement',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\CSS3dRenderer.d.ts    
    get css3dObject() {
        return [...this.object3d,
            'element',
        ].distinct()
    },    
    get css3dSprite() {
        return [...this.css3dObject,
        ].distinct()
    },
    css3dParameters: [
        'element',
    ].distinct(),
    css3dRenderer: [
        'domElement',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\Projector.d.ts
    renderableObject: [
        'id',
        'object',
        'z',
        'renderOrder',
    ].distinct(),
    renderableFace: [
        'id',
        'v1',
        'v2',
        'v3',
        'normalModel',
        'vertexNormalsModel',
        'vertexNormalsLength',
        'color',
        'material',
        'uvs',
        'z',
        'renderOrder',
    ].distinct(),
    renderableVertex: [
        'position',
        'positionWorld',
        'positionScreen',
        'visible',
    ].distinct(),
    renderableLine: [
        'id',
        'v1',
        'v2',
        'vertexColors',
        'material',
        'z',
        'renderOrder',
    ].distinct(),
    renderableSprite: [
        'id',
        'object',
        'x',
        'y',
        'z',
        'rotation',
        'scale',
        'material',
        'renderOrder',
    ].distinct(),
    projector: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\SVGRenderer.d.ts    
    get svgObject() {
        return [...this.object3d,
            'node',
        ].distinct()
    },
    svgRenderer: [
        'domElement',
        'autoClear',
        'sortObjects',
        'sortElements',
        'overdraw',
        'outputColorSpace',
        'info',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Backend.d.ts
    backendParameters: [
        'canvas',
    ].distinct(),
    backend: [
        'renderer',
        'domElement',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Color4.d.ts    
    get color4() {
        return [...this.color,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Info.d.ts
    info: [
        'autoReset',
        'frame',
        'calls',
        'render',
        'compute',
        'memory',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\PostProcessing.d.ts
    postProcessing: [
        'renderer',
        'outputNode',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\Renderer.d.ts
    rendererParameters: [
        'logarithmicDepthBuffer',
        'alpha',
    ].distinct(),
    /**
     * Generic Renderer interface containing either a WebGl or WebGpu backend.
     */
    renderer: [
        /**
         * @default true
         */
        'domElement',
        /**
         * The renderer backend; could be WebGlBackend or WebGpuBackend
         */
        'backend',
        /**
         * @default true
         */
        'autoClear',
        /**
         * @default true
         */
        'autoClearColor',
        /**
         * @default true
         */
        'autoClearDepth',
        /**
         * @default true
         */
        'autoClearStencil',
        /**
         * @default SRGBColorSpace
         */
        'outputColorSpace',
        /**
         * @default NoToneMapping
         */
        'toneMapping',
        /**
         * @default 1.0
         */
        'toneMappingExposure',
        /**
         * @default true
         */
        'sortObjects',
        /**
         * @default true
         */
        'depth',
        /**
         * @default false
         */
        'stencil',
        'clippingPlanes',
        'info',
        'shadowMap',
        'xr',
        'localClippingEnabled',

        'domElement',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\StorageTexture.d.ts    
    get storageTexture() {
        return [...this.texture,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\common\extras\PMREMGenerator.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\WebGlBackend.d.ts    
    get webGlBackendParameters() {
        return [...this.backendParameters,
            'trackTimestamp',
        ].distinct()
    },    
    get webGlBackend() {
        return [...this.backend,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\SlotNode.d.ts
    slotNodeParameters: [
        'node',
        'nodeType',
        'source',
        'target',
    ].distinct(),    
    get slotNode() {
        return [...this.node,
            'inclusionType',
            'node',
            'source',
            'target',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodeBuilder.d.ts    
    get webGlNodeBuilder() {
        return [...this.nodeBuilder,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgl\nodes\WebGlNodes.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuBackend.d.ts    
    get webGpuBackendParameters() {
        return [...this.backendParameters,
            'alpha',
            'antialias',
            'sampleCount',
            'trackTimestamp',
        ].distinct()
    },    
    get webGpuBackend() {
        return [...this.backend,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\renderers\webgpu\WebGpuRenderer.d.ts    
    get webGpuRendererParameters() {
        return [...this.rendererParameters, ...this.webGpuBackendParameters,
            'forceWebGl',
        ].distinct()
    },    
    get webGpuRenderer() {
        return [...this.renderer,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ACESFilmicToneMappingShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\AfterimageShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BasicShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BleachBypassShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BlendShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BokehShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BokehShader2.d.ts
    bokehShaderUniforms: [
        'textureWidth',
        'textureHeight',
        'focalDepth',
        'focalLength',
        'fstop',
        'tColor',
        'tDepth',
        'maxblur',
        'showFocus',
        'manualdof',
        'vignetting',
        'depthblur',
        'threshold',
        'gain',
        'bias',
        'fringe',
        'znear',
        'zfar',
        'noise',
        'dithering',
        'pentagon',
        'shaderFocus',
        'focusCoords',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\BrightnessContrastShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ColorCorrectionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ColorifyShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ConvolutionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\CopyShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DepthLimitedBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DigitalGlitch.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DOFMipMapShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\DotScreenShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ExposureShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FilmShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FocusShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FreiChenShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\FXAAShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\GammaCorrectionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\GodRaysShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\GTAOShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HalftoneShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HorizontalBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HorizontalTiltShiftShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\HueSaturationShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\KaleidoShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\LuminosityHighPassShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\LuminosityShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\MirrorShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\MMDToonShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\NormalMapShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\OutputShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\PoissonDenoiseShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\RGBShiftShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SAOShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SepiaShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SMAAShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SobelOperatorShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SSAOShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SSRShader.d.ts
    /**
     * References:
     * https://lettier.github.io/3d-game-shaders-for-beginners/screen-space-reflection.html
     */
    ssrShader: [
        'name',
        'defines',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    ssrDepthShader: [
        'name',
        'defines',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    ssrBlurShader: [
        'name',
        'uniforms',
        'vertexShader',
        'fragmentShader',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\SubsurfaceScatteringShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\TechnicolorShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\ToonShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\TriangleBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\UnpackDepthRGBAShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VelocityShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VerticalBlurShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VerticalTiltShiftShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VignetteShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\VolumeShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\shaders\WaterRefractionShader.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\textures\FlakesTexture.d.ts    
    get flakesTexture() {
        return [//...this.hTMLCanvasElement,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts
    program: [
        'body',
        'isProgram',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\GlSLDecoder.d.ts
    glslDecoder: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\ShaderToyDecoder.d.ts    
    get shaderToyDecoder() {
        return [...this.glslDecoder,
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\Transpiler.d.ts
    transpiler: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\TSLEncoder.d.ts
    tslEncoder: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\BufferGeometryUtils.d.ts
    // https://threejs.org/docs/?q=buffergeome#examples/en/utils/BufferGeometryUtils
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\GeometryCompressionUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\GeometryUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\GpuStatsPanel.d.ts    
    get gpuStatsPanel() {
        return [ //...Stats.Panel {
            'context',
            'extension',
            'maxTime',
            'activeQueries',
            'startQuery',
            'endQuery',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\LDrawUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\PackedPhongMaterial.d.ts
    /**
     * `PackedPhongMaterial` inherited from THREE.MeshPhongMaterial
     *
     * @param {Object} parameters
     */    
    get packedPhongMaterial() {
        return [...this.meshPhongMaterial,
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\SceneUtils.d.ts
    /**
     * @param object Object to traverse.
     * @yields Objects that passed the filter condition.
     */
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\ShadowMapViewer.d.ts
    size: [
        'width',
        'height',
    ].distinct(),
    position: [
        'x',
        'y',
    ].distinct(),
    shadowMapViewer: [
        'enabled',
        'size',
        'position',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\SkeletonUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\SortUtils.d.ts
    radixSortOptions: [
        'aux',
        'reversed',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\TextureUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\UvsDebug.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\utils\WorkerPool.d.ts
    /**
     * @author Deepkolos / https://github.com/deepkolos
     */
    workerPool: [
        'pool',
        'quene',
        'workers',
        'workersResolve',
        'workerStatus',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\ARButton.d.ts    
    get arButtonSessionInit() {
        return [//...this.xrSessionInit,
            'domOverlay',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandModel.d.ts    
    get oculusHandModel() {
        return [...this.object3d,
            'controller',
            'motionController',
            'envMap',
            'loader',
            'onLoad',
            'mesh',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandPointerModel.d.ts    
    get oculusHandPointerModel() {
        return [...this.object3d,
            'hand',
            'controller',
            'motionController',
            'envMap',
            'mesh',
            'pointerGeometry',
            'pointerMesh',
            'pointerObject',
            'pinched',
            'attached',
            'cursorObject',
            'raycaster',
            'visible',
            'xrInputSource',
        ].distinct()
    },
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\Text2d.d.ts
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\VRButton.d.ts
    vrButton: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRButton.d.ts
    xrButton: [
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRControllerModelFactory.d.ts    
    get xrControllerModel() {
        return [...this.object3d,
            'motionController',
            'envMap',
        ].distinct()
    },
    xrControllerModelFactory: [
        'gltfLoader',
        'path',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XREstimatedLight.d.ts
    sessionLightProbe: [
        'xrLight',
        'renderer',
        'lightProbe',
        'xrWebGlBinding',
        'estimationStartCallback',
        'updateReflection',
        'onXRFrame',
        'dispose',
    ].distinct(),    
    get xrEstimatedLightEventMap() {
        return [...this.object3dEventMap,
            /**
             * Fires when the estimated lighting values start being updated.
             */
            'estimationstart',
            /**
             * Fires when the estimated lighting values stop being updated.
             */
            'estimationend',
        ].distinct()
    },
    /**
     * XREstimatedLight uses WebXR's light estimation to create a light probe, a directional light, and (optionally) an
     * environment map that model the user's real-world environment and lighting.
     * As WebXR updates the light and environment estimation, XREstimatedLight automatically updates the light probe,
     * directional light, and environment map.
     *
     * It's important to specify `light-estimation` as an optional or required feature when creating the WebXR session,
     * otherwise the light estimation can't work.
     *
     * See {@link https://developer.mozilla.org/en-US/docs/Web/API/XRLightProbe#browser_compatibility here} for browser
     * compatibility information, as this is still an experimental feature in WebXR.
     *
     * To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.
     */    
    get xrEstimatedLight() {
        return [...this.group,
            'lightProbe',
            'directionalLight',
            /**
             * The environment map estimated by WebXR. This is only available if environmentEstimation is `true`.
             *
             * It can be used as the {@link Scene.environment}, for {@link MeshStandardMaterial.envMap}, or as the
             * {@link Scene.background}.
             */
            'environment',
        ].distinct()
    },

    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandMeshModel.d.ts
    xrHandMeshModel: [
        'controller',
        'handModel',
        'bones',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandModelFactory.d.ts    
    get xrHandModel() {
        return [...this.object3d,
            'motionController',
        ].distinct()
    },
    xrHandModelFactory: [
        'gltfLoader',
        'path',
        'onLoad',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandPrimitiveModel.d.ts
    xrHandPrimitiveModelOptions: [
        'primitive',
    ].distinct(),
    xrHandPrimitiveModel: [
        'controller',
        'handModel',
        'envMap',
        'handMesh',
        'updateMesh',
    ].distinct(),
    //D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRPlanes.d.ts    
    get xrPlanes() {
        return [...this.object3d,
        ].distinct()
    },

}

declare global {
    interface Window {
        __$$objParams$$__: typeof p
    }
}

if (!window.__$$objParams$$__)
    window.__$$objParams$$__ = p
    
export const objParams = window.__$$objParams$$__