
//** Constructor Parameters */
export const params = {

    /**
     * @deprecated THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.
     */
    get WebGLMultipleRenderTargets() {
        return [...this.WebGLRenderTarget,
            'height',
            'width',
            'count',
            'options',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\utils.d.ts


    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\AnimationAction.d.ts


    // Animation ////////////////////////////////////////////////////////////////////////////////////////

    AnimationAction: [
        'mixer',
        'clip',
        'localRoot',
        'blendMode',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\AnimationClip.d.ts


    AnimationClip: [
        'name',
        'duration',
        'tracks',
        'blendMode',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\AnimationMixer.d.ts

    get AnimationMixer() {
        return [...this.EventDispatcher,
            'root',
            /**
             * @default 0
             */
            'time',
            /**
             * @default 1.0
             */
            'timeScale',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\AnimationObjectGroup.d.ts

    AnimationObjectGroup: [
        '...args',
        'uuid',
        'stats',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\AnimationUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\KeyframeTrack.d.ts

    KeyframeTrack: [
        /**
         * @param name
         * @param times
         * @param values
         * @param [interpolation=THREE.InterpolateLinear]
         */
        'name',
        'times',
        'values',
        'interpolation',
        'name',
        'times',
        'values',
        'ValueTypeName',
        'TimeBufferType',
        'ValueBufferType',
        /**
         * @default THREE.InterpolateLinear
         */
        'DefaultInterpolation',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\PropertyBinding.d.ts

    PropertyBinding: [
        'rootNode',
        'path',
        'parsedPath',
        'path',
        'parsedPath',
        'node',
        'rootNode',
        'BindingType',
        'Versioning',
    ],
    PropertyBinding_Composite: [
        'targetGroup',
        'path',
        'parsedPath',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\PropertyMixer.d.ts

    PropertyMixer: [
        'binding',
        'typeName',
        'valueSize',
        'binding',
        'valueSize',
        'buffer',
        'cumulativeWeight',
        'cumulativeWeightAdditive',
        'useCount',
        'referenceCount',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\tracks\BooleanKeyframeTrack.d.ts

    get BooleanKeyframeTrack() {
        return [...this.KeyframeTrack,
            'name',
            'times',
            'values',
            /**
             * @default 'bool'
             */
            'ValueTypeName',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\tracks\ColorKeyframeTrack.d.ts



    get ColorKeyframeTrack() {
        return [...this.KeyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
            /**
             * @default 'color'
             */
            'ValueTypeName',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\tracks\NumberKeyframeTrack.d.ts

    get NumberKeyframeTrack() {
        return [...this.KeyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
            /**
             * @default 'number'
             */
            'ValueTypeName',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\tracks\QuaternionKeyframeTrack.d.ts

    get QuaternionKeyframeTrack() {
        return [...this.KeyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
            /**
             * @default 'quaternion'
             */
            'ValueTypeName',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\tracks\StringKeyframeTrack.d.ts

    get StringKeyframeTrack() {
        return [...this.KeyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
            /**
             * @default 'string'
             */
            'ValueTypeName',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\animation\tracks\VectorKeyframeTrack.d.ts

    get VectorKeyframeTrack() {
        return [...this.KeyframeTrack,
            'name',
            'times',
            'values',
            'interpolation',
            /**
             * @default 'vector'
             */
            'ValueTypeName',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio\Audio.d.ts


    // Extras / Audio /////////////////////////////////////////////////////////////////////
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
    get Audio() {
        return [...this.Object3D,
            /**
             * Create a new instance of {@link Audio}
             * @param listener (required) {@link AudioListener | AudioListener} instance.
             */
            'listener',
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
             * @defaultValue `[]`
             */
            'filters',
            /**
             * Return the {@link Audio.gain | gainNode}.
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio\AudioAnalyser.d.ts


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
    AudioAnalyser: [
        /**
         * Create a new {@link {@link AudioAnalyser} | AudioAnalyser}.
         * @param audio
         * @param fftSize See {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize | AnalyserNode.fftSize }. Expects a `unsigned integer`. Default `2048`.
         */
        'audio',
        'fftSize',
        /**
         * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} used to analyze audio.
         */
        'analyser',
        /**
         * A Uint8Array with size determined by {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount | analyser.frequencyBinCount} used to hold analysis data.
         */
        'data',
        /**
         * Uses the Web Audio's {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData | getByteFrequencyData} method
         */
        /**
         * Get the average of the frequencies returned by the {@link AudioAnalyser.getFrequencyData | getFrequencyData] method.
         */
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio\AudioContext.d.ts

    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio\AudioListener.d.ts


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
    get AudioListener() {
        return [...this.Object3D,
            /**
             * Create a new AudioListener.
             */

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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\audio\PositionalAudio.d.ts


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
    get PositionalAudio() {
        return [...this.Audio,
            /**
             * Create a new instance of {@link PositionalAudio}
             * @param listener (required) {@link AudioListener | AudioListener} instance.
             */
            'listener',
            /**
             * The PositionalAudio's {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode | PannerNode}.
             */
            'panner',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras\ArrayCamera.d.ts


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
    get ArrayCamera() {
        return [...this.PerspectiveCamera,
            /**
             * An array of cameras.
             * @param array. Default `[]`.
             */
            'cameras',
            /**
             * An array of cameras.
             * @defaultValue `[]`
             */
            'cameras',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras\Camera.d.ts


    /**
     * Abstract base class for cameras
     * @remarks
     * This class should always be inherited when you build a new camera.
     * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
     */
    get Camera() {
        return [...this.Object3D,
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
            /**
             * Returns a {@link THREE.Vector3 | Vector3} representing the world space direction in which the {@link Camera} is looking.
             * @remarks Note, {@link Camera} looks down its local, negative z-axis.
             * @param target The result will be copied into this Vector3.
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras\CubeCamera.d.ts


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
    get CubeCamera() {
        return [...this.Object3D,
            /**
             * Constructs a {@link CubeCamera} that contains 6 {@link PerspectiveCamera | PerspectiveCameras} that render to a {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}.
             * @param near The near clipping distance.
             * @param far The far clipping distance.
             * @param renderTarget The destination cube render target.
             */
            'near',
            'far',
            /**
             * The destination cube render target.
             */
            'renderTarget',
            'coordinateSystem',
            'activeMipmapLevel',
            /**
             * Call this to update the {@link CubeCamera.renderTarget | renderTarget}.
             * @param renderer The current WebGL renderer
             * @param scene The current scene
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras\OrthographicCamera.d.ts


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
    get OrthographicCamera() {
        return [...this.Camera,
            /**
             * Creates a new {@link OrthographicCamera}.
             * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum | viewing frustum}.
             * @param left Camera frustum left plane. Default `-1`.
             * @param right Camera frustum right plane. Default `1`.
             * @param top Camera frustum top plane. Default `1`.
             * @param bottom Camera frustum bottom plane. Default `-1`.
             * @param near Camera frustum near plane. Default `0.1`.
             * @param far Camera frustum far plane. Default `2000`.
             */
            'left',
            'right',
            'top',
            'bottom',
            'near',
            'far',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras\PerspectiveCamera.d.ts


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
    get PerspectiveCamera() {
        return [...this.Camera,
            /**
             * Creates a new {@link PerspectiveCamera}.
             * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum | viewing frustum}.
             * @param fov Camera frustum vertical field of view. Default `50`.
             * @param aspect Camera frustum aspect ratio. Default `1`.
             * @param near Camera frustum near plane. Default `0.1`.
             * @param far Camera frustum far plane. Default `2000`.
             */
            'fov',
            'aspect',
            'near',
            'far',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\cameras\StereoCamera.d.ts


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
    get StereoCamera() {
        return [...this.Camera,
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
            /**
             * Update the stereo cameras based on the camera passed in.
             * @param camera
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\BufferAttribute.d.ts



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
    BufferAttribute: [
        /**
         * This creates a new {@link THREE.GLBufferAttribute | GLBufferAttribute} object.
         * @param array Must be a `TypedArray`. Used to instantiate the buffer.
         * This array should have `itemSize * numVertices` elements, where numVertices is the number of vertices in the associated {@link THREE.BufferGeometry | BufferGeometry}.
         * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
         * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
         * then itemSize should be `3`.
         * @param normalized Applies to integer data only.
         * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
         * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
         * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
         * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
         * If normalized is false, the values will be converted to floats unmodified,
         * i.e. `32767` becomes `32767.0f`.
         * Default `false`.
         * @throws `TypeError` When the {@link array} is not a `TypedArray`;
         */
        'array',
        'itemSize',
        'normalized',
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
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
         * @remarks
         * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
         * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
         * @see {@link BufferAttribute.setUsage | setUsage}
         * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
         */
        'usage',
        /**
         * Configures the bound GPU type for use in shaders. Either {@link FloatType} or {@link IntType}, default is {@link FloatType}.
         *
         * Note, only has an effect for integer arrays and is not configurable for float arrays. For lower precision
         * float types, see https://threejs.org/docs/#api/en/core/bufferAttributeTypes/BufferAttributeTypes.
         */
        'gpuType',
        /**
         * This can be used to only update some components of stored vectors (for example, just the component related to color).
         * @defaultValue `{ offset, = 0; count, = -1 }`
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
         * Indicates how the underlying data in the buffer maps to the values in the GLSL shader code.
         * @see `constructor` above for details.
         * @defaultValue `false`
         */
        'normalized',
    ],
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Int8BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Int8BufferAttribute | Int8BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int8Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Uint8BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Uint8BufferAttribute | Uint8BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Uint8ClampedBufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Uint8ClampedBufferAttribute | Uint8ClampedBufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8ClampedArray`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Int16BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Int16BufferAttribute | Int16BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int16Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Uint16BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Uint16BufferAttribute | Uint16BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Int32BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Int32BufferAttribute | Int32BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int32Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Uint32BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Uint32BufferAttribute | Uint32BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint32Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Float16BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Float16BufferAttribute | Float16BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    /**
     * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array,}
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
     * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
     */
    get Float32BufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * This creates a new {@link THREE.Float32BufferAttribute | Float32BufferAttribute} object.
             * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float32Array`.
             * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
             * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
             * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
             * then itemSize should be `3`.
             * @param normalized Applies to integer data only.
             * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
             * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
             * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
             * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
             * If normalized is false, the values will be converted to floats unmodified,
             * i.e. `32767` becomes `32767.0f`.
             * Default `false`.
             * @see {@link THREE.BufferAttribute | BufferAttribute}
             */

            'array',
            'itemSize',
            'normalized',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\BufferGeometry.d.ts

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
    get BufferGeometry() {
        return [...this.EventDispatcher,
            /**
             * This creates a new {@link THREE.BufferGeometry | BufferGeometry} object.
             */

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
             * Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
             * Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
             * If this attribute is not set, the {@link THREE.WebGLRenderer | renderer}  assumes that each three contiguous positions represent a single triangle.
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
             * Split the geometry into groups, each of which will be rendered in a separate WebGL draw call. This allows an array of materials to be used with the geometry.
             * @remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
             * @remarks Use {@link addGroup | .addGroup} to add groups, rather than modifying this array directly.
             * @defaultValue `[]`
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
             * Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange | .setDrawRange(...)}.
             * @remarks For non-indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of vertices to render.
             * @remarks For indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of indices to render.
             * @defaultValue `{ start,
         count, }`
             */
            'drawRange',
            /**
             * An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.
             * @defaultValue `{}`
             */
            'userData',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\Clock.d.ts

    /**
     * Object for keeping track of time
     * @remarks
     * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now | performance.now} if it is available,
     * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now | Date.now}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js | Source}
     */
    Clock: [
        /**
         * Create a new instance of {@link THREE.Clock | Clock}
         * @param autoStart - Whether to automatically start the clock when {@link getDelta | .getDelta()} is called for the first time. Default `true`
         */
        'autoStart',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\EventDispatcher.d.ts

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
    EventDispatcher: [
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\GLBufferAttribute.d.ts

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
    GLBufferAttribute: [
        /**
         * This creates a new GLBufferAttribute object.
         * @param buffer Must be a {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer | WebGLBuffer}. See {@link GLBufferAttribute.buffer | .buffer}
         * @param type One of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types | WebGL Data Types}. See {@link GLBufferAttribute.type | .type}
         * @param itemSize How many values make up each item (vertex). See {@link GLBufferAttribute.itemSize | .itemSize}
         * @param elementSize `1`, `2` or `4`. The corresponding size (in bytes) for the given {@link type} param. See {@link GLBufferAttribute.elementSize | .elementSize}
         * @param count The expected number of vertices in VBO. See {@link GLBufferAttribute.count | .count}
         */
        'buffer',
        'type',
        'itemSize',
        'elementSize',
        'count',
        /**
         * Optional name for this attribute instance.
         * @defaultValue `""`
         */
        'name',
        /**
         * The current {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer | WebGLBuffer} instance.
         */
        'buffer',
        /**
         * A {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types | WebGL Data Type} describing the underlying VBO contents.
         *
         * #### WebGL Data Type (`GLenum`)
         * - gl.BYTE,
         * - gl.UNSIGNED_BYTE,
         * - gl.SHORT,
         * - gl.UNSIGNED_SHORT,
         * - gl.INT,
         * - gl.UNSIGNED_INT,
         * - gl.FLOAT,
         * @remarks Set this property together with {@link elementSize | .elementSize}. The recommended way is using the {@link setType | .setType()} method.
         * @remarks Expects a `DataType` `GLenum` _possible values:_ `0x1400` `0x1401` `0x1402` `0x1403` `0x1404` `0x1405` `0x1406`
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
         * #### WebGL Data Type (`GLenum`)
         * - gl.BYTE,
         * - gl.UNSIGNED_BYTE,
         * - gl.SHORT,
         * - gl.UNSIGNED_SHORT,
         * - gl.INT,
         * - gl.UNSIGNED_INT,
         * - gl.FLOAT,
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\InstancedBufferAttribute.d.ts


    /**
     * An instanced version of {@link THREE.BufferAttribute | BufferAttribute}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js | Source}
     */
    get InstancedBufferAttribute() {
        return [...this.BufferAttribute,
            /**
             * Create a new instance of {@link THREE.InstancedBufferAttribute | InstancedBufferAttribute}
             * @param array
             * @param itemSize
             * @param normalized
             * @param meshPerAttribute
             */
            'array',
            'itemSize',
            'normalized',
            'meshPerAttribute',
            /**
             * Defines how often a value of this buffer attribute should be repeated.
             * A value of one means that each value of the instanced attribute is used for a single instance.
             * A value of two means that each value is used for two consecutive instances (and so on).
             * @defaultValue `1`
             */
            'meshPerAttribute',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\InstancedBufferGeometry.d.ts


    /**
     * An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js | Source}
     */
    get InstancedBufferGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link InstancedBufferGeometry}
             */

            /**
             * @defaultValue `InstancedBufferGeometry`
             */
            'type',
            /**
             * @defaultValue `Infinity`
             */
            'instanceCount',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\InstancedInterleavedBuffer.d.ts


    /**
     * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
     */
    get InstancedInterleavedBuffer() {
        return [...this.InterleavedBuffer,
            /**
             * Create a new instance of {@link InstancedInterleavedBuffer}
             * @param array
             * @param itemSize
             * @param meshPerAttribute
             */
            'array',
            'stride',
            'meshPerAttribute',
            /**
             * @defaultValue `1`
             */
            'meshPerAttribute',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\InterleavedBuffer.d.ts


    /**
     * **"Interleaved"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer.
     * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved | webgl / buffergeometry / points / interleaved}
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js | Source}
     */
    InterleavedBuffer: [
        /**
         * Create a new instance of {@link InterleavedBuffer}
         * @param array A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
         * @param stride The number of typed-array elements per vertex. Expects a `Integer`
         */
        'array',
        'stride',
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
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
         * @remarks
         * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
         * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
         * @see {@link BufferAttribute.setUsage | setUsage}
         * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
         */
        'usage',
        /**
         * Object containing offset and count.
         * @defaultValue `{ offset, = 0; count, = -1 }`
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
         * Flag to indicate that this attribute has changed and should be re-sent to the GPU.
         * Set this to true when you modify the value of the array.
         * @remarks Setting this to true also increments the {@link BufferAttribute.version | version}.
         * @remarks _set-only property_.
         */
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\InterleavedBufferAttribute.d.ts


    /**
     * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js | Source}
     */
    InterleavedBufferAttribute: [
        /**
         * Create a new instance of {@link THREE.InterleavedBufferAttribute | InterleavedBufferAttribute}.
         * @param interleavedBuffer
         * @param itemSize
         * @param offset
         * @param normalized Default `false`.
         */
        'interleavedBuffer',
        'itemSize',
        'offset',
        'normalized',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\Layers.d.ts

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
    Layers: [
        /**
         * Create a new Layers object, with membership initially set to layer 0.
         */

        /**
         * A bit mask storing which of the 32 layers this layers object is currently a member of.
         * @defaultValue `1 `
         * @remarks Expects a `Integer`
         */
        'mask',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\Object3D.d.ts


    Object3DEventMap: [
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
    ],

    /**
     * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.
     * @remarks Note that this can be used for grouping objects via the {@link THREE.Object3D.add | .add()} method which adds the object as a child,
     * however it is better to use {@link THREE.Group | Group} for this.
     * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3D | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js | Source}
     */
    get Object3D() {
        return [...this.EventDispatcher,
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
             * Object's parent in the {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}.
             * @remarks An object can have at most one parent.
             * @defaultValue `null`
             */
            'parent',
            /**
             * Array with object's children.
             * @see {@link THREE.Object3DGroup | Group} for info on manually grouping objects.
             * @defaultValue `[]`
             */
            'children',
            /**
             * This is used by the {@link lookAt | lookAt} method, for example, to determine the orientation of the result.
             * @defaultValue {@link DEFAULT_UP .DEFAULT_UP} - that is `(0, 1, 0)`.
             */
            'up',
            /**
             * The local transform matrix.
             * @defaultValue `new THREE.Matrix4()`
             */
            'matrix',
            /**
             * The global transform of the object.
             * @remarks If the {@link Object3D} has no parent, then it's identical to the local transform {@link THREE.Object3D.matrix | .matrix}.
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
             * @remarks The object is only visible if it has at least one layer in common with the {@link THREE.Object3DCamera | Camera} in use.
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
             * @defaultValue `[]`
             */
            'animations',
            /**
             * An object that can be used to store custom data about the {@link Object3D}.
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
             * Same as {@link customDepthMaterial}, but used with {@link THREE.Object3DPointLight | PointLight}.
             * @defaultValue `undefined`
             */
            'customDistanceMaterial',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\Raycaster.d.ts



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
    Raycaster: [
        /**
         * This creates a new {@link Raycaster} object.
         * @param origin The origin vector where the ray casts from. Default `new Vector3()`
         * @param direction The direction vector that gives direction to the ray. Should be normalized. Default `new Vector3(0, 0, -1)`
         * @param near All results returned are further away than near. Near can't be negative. Expects a `Float`. Default `0`
         * @param far All results returned are closer than far. Far can't be lower than near. Expects a `Float`. Default `Infinity`
         */
        'origin',
        'direction',
        'near',
        'far',
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
         * Used by {@link Raycaster} to selectively ignore 3D objects when performing intersection tests.
         * The following code example ensures that only 3D objects on layer `1` will be honored by the instance of Raycaster.
         * ```
         * raycaster.layers.set( 1 )
         * object.layers.enable( 1 )
         * ```
         * @defaultValue `new THREE.Layers()` - See {@link THREE.Layers | Layers}.
         */
        'layers',
        /**
         * An data object where threshold is the precision of the {@link Raycaster} when intersecting objects, in world units.
         * @defaultValue `{ Mesh: {}, Line: { threshold, }, LOD: {}, Points: { threshold, }, Sprite: {} }`
         */
        'params',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\RenderTarget.d.ts

    get RenderTarget() {
        return [...this.EventDispatcher,
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
             * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
             * @default 0
             */
            'samples',
            'width',
            'height',
            'options',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\Uniform.d.ts

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

    Uniform: [
        /**
         * Create a new instance of {@link THREE.Uniform | Uniform}
         * @param value An object containing the value to set up the uniform. It's type must be one of the Uniform Types described above.
         */
        'value',
        /**
         * Current value of the uniform.
         */
        'value',
        /**
         * Returns a clone of this uniform.
         * @remarks
         * If the uniform's {@link value} property is an {@link Object | Object} with a `clone()` method, this is used,
         * otherwise the value is copied by assignment Array values are **shared** between cloned {@link THREE.UniformUniform | Uniform}s.
         */
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\core\UniformsGroup.d.ts

    /**
     * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGL2 / UBO}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
     */
    UniformsGroup: [
        'id',
        'usage',
        'uniforms',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\DataUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\Earcut.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\ImageUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\PMREMGenerator.d.ts


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
    PMREMGenerator: [
        /**
         * This constructor creates a new PMREMGenerator.
         * @param renderer
         */
        'renderer',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\ShapeUtils.d.ts

    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core\Curve.d.ts


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
    Curve: [
        /**
         * This value determines the amount of divisions when calculating the cumulative segment lengths of a {@link Curve}
         * via {@link .getLengths}.
         * To ensure precision when using methods like {@link .getSpacedPoints}, it is recommended to increase {@link .arcLengthDivisions} if the {@link Curve} is very large.
         * @defaultValue `200`
         * @remarks Expects a `Integer`
         */
        'arcLengthDivisions',
        /**
         * Returns a vector for a given position on the curve.
         * @param t A position on the curve. Must be in the range `[ 0, 1 ]`. Expects a `Float`
         * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created. Default `new T`.
         */
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core\CurvePath.d.ts

    /**
     * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
     * @remarks
     * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js | Source}
     */
    get CurvePath() {
        return [...this.Curve,
            /**
             * The array of {@link Curve | Curves}.
             * @defaultValue `[]`
             */
            'curves',
            /**
             * Whether or not to automatically close the path.
             * @defaultValue false
             */
            'autoClose',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core\Interpolations.d.ts

    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core\Path.d.ts


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
    get Path() {
        return [...this.CurvePath,
            /**
             * Creates a {@link Path} from the points
             * @remarks
             * The first point defines the offset, then successive points are added to the {@link CurvePath.curves | curves} array as {@link LineCurve | LineCurves}.
             * If no points are specified, an empty {@link Path} is created and the {@link .currentPoint} is set to the origin.
             * @param points Array of {@link Vector2 | Vector2s}.
             */
            'points',
            /**
             * The current offset of the path. Any new {@link THREE.Curve | Curve} added will start here.
             * @defaultValue `new THREE.Vector2()`
             */
            'currentPoint',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core\Shape.d.ts


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
    get Shape() {
        return [...this.Path,
            /**
             * Creates a {@link Shape} from the points
             * @remarks
             * The first point defines the offset, then successive points are added to the {@link CurvePath.curves | curves} array as {@link THREE.LineCurve | LineCurves}.
             * If no points are specified, an empty {@link Shape} is created and the {@link .currentPoint} is set to the origin.
             * @param points Array of {@link Vector2 | Vector2s}.
             */
            'points',
            /**
             * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
             * @remarks This gets automatically assigned and shouldn't be edited.
             */
            'uuid',
            /**
             * An array of {@link Path | paths} that define the holes in the shape.
             * @defaultValue `[]`
             */
            'holes',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\core\ShapePath.d.ts


    /**
     * This class is used to convert a series of shapes to an array of {@link THREE.Path | Path's},
     * for example an SVG shape to a path.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js | Source}
     */
    ShapePath: [

        /**
         * Array of {@link THREE.Path | Path's}s.
         * @defaultValue `[]`
         */
        'subPaths',
        /**
         * {@link THREE.Color | Color} of the shape, by default set to white _(0xffffff)_.
         * @defaultValue `new THREE.Color()`
         */
        'color',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\ArcCurve.d.ts


    /**
     * Alias for {@link THREE.EllipseCurve | EllipseCurve}.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js | Source}
     */
    get ArcCurve() {
        return [...this.EllipseCurve,
            /**
             * This constructor creates a new {@link ArcCurve}.
             * @param aX The X center of the ellipse. Expects a `Float`. Default is `0`.
             * @param aY The Y center of the ellipse. Expects a `Float`. Default is `0`.
             * @param xRadius The radius of the ellipse in the x direction. Expects a `Float`. Default is `1`.
             * @param yRadius The radius of the ellipse in the y direction. Expects a `Float`. Default is `1`.
             * @param aStartAngle The start angle of the curve in radians starting from the positive X axis. Default is `0`.
             * @param aEndAngle The end angle of the curve in radians starting from the positive X axis. Default is `2 x Math.PI`.
             * @param aClockwise Whether the ellipse is drawn clockwise. Default is `false`.
             */

            'aX',
            'aY',
            'aRadius',
            'aStartAngle',
            'aEndAngle',
            'aClockwise',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\CatmullRomCurve3.d.ts


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
    get CatmullRomCurve3() {
        return [...this.Curve,
            /**
             * The curve will loop back onto itself when this is true.
             * @defaultValue `false`
             */
            'closed',
            /**
             * The array of {@link THREE.Vector3 | Vector3} points that define the curve.
             * @remarks It needs at least two entries.
             * @defaultValue `[]`
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\CubicBezierCurve.d.ts


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
    get CubicBezierCurve() {
        return [...this.Curve,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\CubicBezierCurve3.d.ts


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
    get CubicBezierCurve3() {
        return [...this.Curve,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\Curves.d.ts

    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\EllipseCurve.d.ts


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
    get EllipseCurve() {
        return [...this.Curve,
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
            'xRadius',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\LineCurve.d.ts


    /**
     * A curve representing a **2D** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js | Source}
     */
    get LineCurve() {
        return [...this.Curve,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\LineCurve3.d.ts


    /**
     * A curve representing a **3D** line segment.
     * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js | Source}
     */
    get LineCurve3() {
        return [...this.Curve,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve.d.ts


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
    get QuadraticBezierCurve() {
        return [...this.Curve,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve3.d.ts


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
    get QuadraticBezierCurve3() {
        return [...this.Curve,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\extras\curves\SplineCurve.d.ts


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
    get SplineCurve() {
        return [...this.Curve,
            /**
           * The array of {@link THREE.Vector2 | Vector2} points that define the curve.
           * @defaultValue `[]`
           */
            'points',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\BoxGeometry.d.ts


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
    get BoxGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link BoxGeometry}
             * @param width Width; that is, the length of the edges parallel to the X axis. Optional; Expects a `Float`. Default `1`
             * @param height Height; that is, the length of the edges parallel to the Y axis. Optional; Expects a `Float`. Default `1`
             * @param depth Depth; that is, the length of the edges parallel to the Z axis. Optional; Expects a `Float`. Default `1`
             * @param widthSegments Number of segmented rectangular faces along the width of the sides. Optional; Expects a `Integer`. Default `1`
             * @param heightSegments Number of segmented rectangular faces along the height of the sides. Optional; Expects a `Integer`. Default `1`
             * @param depthSegments Number of segmented rectangular faces along the depth of the sides. Optional; Expects a `Integer`. Default `1`
             */

            'width',
            'height',
            'depth',
            'widthSegments',
            'heightSegments',
            'depthSegments',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\CapsuleGeometry.d.ts


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
    get CapsuleGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link CapsuleGeometry}
             * @param radius Radius of the capsule. Expects a `Float`. Default `1`
             * @param length Length of the middle section. Expects a `Float`. Default `1`
             * @param capSegments Number of curve segments used to build the caps. Expects a `Integer`. Default `4`
             * @param radialSegments Number of segmented faces around the circumference of the capsule. Expects a `Integer`. Default `8`
             */
            'radius',
            'length',
            'capSegments',
            'radialSegments',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\CircleGeometry.d.ts


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
    get CircleGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link CircleGeometry}
             * @param radius Radius of the circle. Expects a `Float`. Default `1`
             * @param segments Number of segments (triangles). Expects a `Integer`. Minimum `3`. Default `32`
             * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
             * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete circle_.
             */
            'radius',
            'segments',
            'thetaStart',
            'thetaLength',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\ConeGeometry.d.ts


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
    get ConeGeometry() {
        return [...this.CylinderGeometry,
            /**
             * Create a new instance of {@link ConeGeometry}
             * @param radius Radius of the cone base. Expects a `Float`. Default `1`
             * @param height Height of the cone. Expects a `Float`. Default `1`
             * @param radialSegments Number of segmented faces around the circumference of the cone. Expects a `Integer`. Default `32`
             * @param heightSegments Number of rows of faces along the height of the cone. Expects a `Integer`. Default `1`
             * @param openEnded A Boolean indicating whether the base of the cone is open or capped. Default `false`, _meaning capped_.
             * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
             * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete cone_.
             */

            'radius',
            'height',
            'radialSegments',
            'heightSegments',
            'openEnded',
            'thetaStart',
            'thetaLength',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\CylinderGeometry.d.ts


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
    get CylinderGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link CylinderGeometry}
             * @param radiusTop Radius of the cylinder at the top. Default `1`
             * @param radiusBottom Radius of the cylinder at the bottom. Default `1`
             * @param height Height of the cylinder. Default `1`
             * @param radialSegments Number of segmented faces around the circumference of the cylinder. Default `32`
             * @param heightSegments Number of rows of faces along the height of the cylinder. Expects a `Integer`. Default `1`
             * @param openEnded A Boolean indicating whether the ends of the cylinder are open or capped. Default `false`, _meaning capped_.
             * @param thetaStart Start angle for first segment. Default `0`, _(three o'clock position)_.
             * @param thetaLength The central angle, often called theta, of the circular sector. Default `Math.PI * 2`, _which makes for a complete cylinder.
             */

            'radiusTop',
            'radiusBottom',
            'height',
            'radialSegments',
            'heightSegments',
            'openEnded',
            'thetaStart',
            'thetaLength',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\DodecahedronGeometry.d.ts


    /**
     * A class for generating a dodecahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js | Source}
     */
    get DodecahedronGeometry() {
        return [...this.PolyhedronGeometry,
            /**
             * Create a new instance of {@link DodecahedronGeometry}
             * @param radius Radius of the dodecahedron. Expects a `Float`. Default `1`
             * @param detail Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\EdgesGeometry.d.ts


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
    get EdgesGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link EdgesGeometry}
             * @param geometry Any geometry object. Default `null`.
             * @param thresholdAngle An edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this value. Expects a `Integer`. Default `1` _degree_.
             */
            'geometry',
            'thresholdAngle',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\ExtrudeGeometry.d.ts

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
    get ExtrudeGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link ExtrudeGeometry}
             * @param shapes Shape or an array of shapes. Default `new Shape([new Vector2(0.5, 0.5), new Vector2(-0.5, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)])`.
             * @param options Object that can contain the following parameters. @see {@link ExtrudeGeometryOptions} for defaults.
             */
            'shapes',
            'options',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\Geometries.d.ts

    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\IcosahedronGeometry.d.ts


    /**
     * A class for generating an icosahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js | Source}
     */
    get IcosahedronGeometry() {
        return [...this.PolyhedronGeometry,
            /**
             * Create a new instance of {@link IcosahedronGeometry}
             * @param radius Expects a `Float`. Default `1`
             * @param detail Setting this to a value greater than 0 adds more vertices making it no longer an icosahedron.
             *               When detail is greater than 1, it's effectively a sphere. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\LatheGeometry.d.ts


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
    get LatheGeometry() {
        return [...this.BufferGeometry,
            /**
             * This creates a {@link LatheGeometry} based on the parameters.
             * @param points Array of Vector2s. The x-coordinate of each point must be greater than zero.
             *               Default `[new Vector2(0, -0.5), new Vector2(0.5, 0), new Vector2(0, 0.5)]` _which creates a simple diamond shape_.
             * @param segments The number of circumference segments to generate. Expects a `Integer`. Default `12`.
             * @param phiStart The starting angle in radians. Expects a `Float`. Default `0`.
             * @param phiLength The radian (0 to 2*PI) range of the lathed section 2*PI is a closed lathe, less than 2PI is a portion. Expects a `Float`. Default `Math.PI * 2`.
             */
            'points',
            'segments',
            'phiStart',
            'phiLength',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\OctahedronGeometry.d.ts


    /**
     * A class for generating an octahedron geometry.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js | Source}
     */
    get OctahedronGeometry() {
        return [...this.PolyhedronGeometry,
            /**
             * Create a new instance of {@link OctahedronGeometry}
             * @param radius Radius of the octahedron. Expects a `Float`. Default `1`
             * @param detail Setting this to a value greater than zero add vertices making it no longer an octahedron. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\PlaneGeometry.d.ts


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
    get PlaneGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link PlaneGeometry}
             * @param width Width along the X axis. Expects a `Float`. Default `1`
             * @param height Height along the Y axis. Expects a `Float`. Default `1`
             * @param widthSegments Number of segmented faces along the width of the sides. Expects a `Integer`. Default `1`
             * @param heightSegments Number of segmented faces along the height of the sides. Expects a `Integer`. Default `1`
             */
            'width',
            'height',
            'widthSegments',
            'heightSegments',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\PolyhedronGeometry.d.ts


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
    get PolyhedronGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link PolyhedronGeometry}
             * @param vertices Array of points of the form [1,1,1, -1,-1,-1, ... ]. Default `[]`.
             * @param indices Array of indices that make up the faces of the form [0,1,2, 2,3,0, ... ]. Default `[]`.
             * @param radius [page:The radius of the final shape Expects a `Float`. Default `1`
             * @param detail [page:How many levels to subdivide the geometry. The more detail, the smoother the shape. Expects a `Integer`. Default `0`
             */
            'vertices',
            'indices',
            'radius',
            'detail',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\RingGeometry.d.ts


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
    get RingGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link RingGeometry}
             * @param innerRadius Expects a `Float`. Default `0.5`.
             * @param outerRadius Expects a `Float`. Default `1`.
             * @param thetaSegments Number of segments. A higher number means the ring will be more round. Minimum is 3. Expects a `Integer`. Default `32`.
             * @param phiSegments Number of segments per ring segment. Minimum is `1`. Expects a `Integer`. Default `1`.
             * @param thetaStart Starting angle. Expects a `Float`. Default `0`.
             * @param thetaLength Central angle. Expects a `Float`. Default `Math.PI * 2`.
             */

            'innerRadius',
            'outerRadius',
            'thetaSegments',
            'phiSegments',
            'thetaStart',
            'thetaLength',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\ShapeGeometry.d.ts


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
    get ShapeGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link ShapeGeometry}
             * @param shapes Array of shapes or a single {@link THREE.Shape | Shape}. Default `new Shape([new Vector2(0, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)])`, _a single triangle shape_.
             * @param curveSegments Number of segments per shape. Expects a `Integer`. Default `12`
             */
            'shapes',
            'curveSegments',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\SphereGeometry.d.ts


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
    get SphereGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link SphereGeometry}
             * @remarks
             * The geometry is created by sweeping and calculating vertexes
             * around the **Y** axis (horizontal sweep) and the **Z** axis (vertical sweep)
             * Thus, incomplete spheres (akin to `'sphere slices'`) can be created
             * through the use of different values of {@link phiStart}, {@link phiLength}, {@link thetaStart} and {@link thetaLength},
             * in order to define the points in which we start (or end) calculating those vertices.
             * @param radius Sphere radius. Expects a `Float`. Default `1`
             * @param widthSegments Number of horizontal segments. Minimum value is 3, and the Expects a `Integer`. Default `32`
             * @param heightSegments Number of vertical segments. Minimum value is 2, and the Expects a `Integer`. Default `16`
             * @param phiStart Specify horizontal starting angle. Expects a `Float`. Default `0`
             * @param phiLength Specify horizontal sweep angle size. Expects a `Float`. Default `Math.PI * 2`
             * @param thetaStart Specify vertical starting angle. Expects a `Float`. Default `0`
             * @param thetaLength Specify vertical sweep angle size. Expects a `Float`. Default `Math.PI`
             */

            'radius',
            'widthSegments',
            'heightSegments',
            'phiStart',
            'phiLength',
            'thetaStart',
            'thetaLength',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\TetrahedronGeometry.d.ts


    /**
     * A class for generating a tetrahedron geometries.
     * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js | Source}
     */
    get TetrahedronGeometry() {
        return [...this.PolyhedronGeometry,
            /**
             * Create a new instance of {@link TetrahedronGeometry}
             * @param radius Radius of the tetrahedron. Expects a `Float`. Default `1`
             * @param detail Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. Expects a `Integer`. Default `0`
             */
            'radius',
            'detail',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\TorusGeometry.d.ts


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
    get TorusGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link TorusGeometry}
             * @param radius Radius of the torus, from the center of the torus to the center of the tube. Expects a `Float`. Default `1`.
             * @param tube Radius of the tube. Expects a `Float`. Default `0.4`.
             * @param radialSegments Expects a `Integer`.Default is `12`.
             * @param tubularSegments Expects a `Integer`. Default `48`.
             * @param arc Central angle. Expects a `Float`. Default `Math.PI * 2`
             */
            'radius',
            'tube',
            'radialSegments',
            'tubularSegments',
            'arc',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\TorusKnotGeometry.d.ts


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
    get TorusKnotGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link TorusKnotGeometry}
             * @param radius Radius of the torus.. Default `1`.
             * @param tube Expects a `Float`. Default `0.4`.
             * @param tubularSegments Expects a `Integer`. Default `64`.
             * @param radialSegments Expects a `Integer`. Default `8`.
             * @param p This value determines, how many times the geometry winds around its axis of rotational symmetry. Expects a `Integer`. Default `2`.
             * @param q This value determines, how many times the geometry winds around a circle in the interior of the torus. Expects a `Integer`. Default `3`.
             */

            'radius',
            'tube',
            'tubularSegments',
            'radialSegments',
            'p',
            'q',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\TubeGeometry.d.ts


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
    get TubeGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link TubeGeometry}
             * @param path A 3D path that inherits from the {@link THREE.Curve | Curve} base class.
             *             Default {@link THREE.QuadraticBezierCurve3 | new THREE.QuadraticBezierCurve3(new Vector3(-1, -1, 0 ), new Vector3(-1, 1, 0), new Vector3(1, 1, 0))}.
             * @param tubularSegments The number of segments that make up the tube. Expects a `Integer`. Default `64`.
             * @param radius The radius of the tube. Expects a `Float`. Default `1`.
             * @param radialSegments The number of segments that make up the cross-section. Expects a `Integer`. Default `8`.
             * @param closed Is the tube open or closed. Default `false`.
             */

            'path',
            'tubularSegments',
            'radius',
            'radialSegments',
            'closed',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\geometries\WireframeGeometry.d.ts


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
    get WireframeGeometry() {
        return [...this.BufferGeometry,
            /**
             * Create a new instance of {@link WireframeGeometry}
             * @param geometry Any geometry object. Default `null`.
             */
            'geometry',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\ArrowHelper.d.ts


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
    get ArrowHelper() {
        return [...this.Object3D,
            /**
             * Create a new instance of {@link ArrowHelper}
             * @param dir Direction from origin. Must be a unit vector. Default `new THREE.Vector3(0, 0, 1)`
             * @param origin Point at which the arrow starts. Default `new THREE.Vector3(0, 0, 0)`
             * @param length Length of the arrow. Default `1`
             * @param hex Hexadecimal value to define color. Default `0xffff00`
             * @param headLength The length of the head of the arrow. Default `0.2 * length`
             * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
             */

            'dir',
            'origin',
            'length',
            'color',
            'headLength',
            'headWidth',
            /**
             * Contains the line part of the arrowHelper.
             */
            'line',
            /**
             * Contains the cone part of the arrowHelper.
             */
            'cone',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\AxesHelper.d.ts


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
    get AxesHelper() {
        return [...this.LineSegments,
            /**
             * Create a new instance of {@link AxesHelper}
             * @param size Size of the lines representing the axes. Default `1`
             */
            'size',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\Box3Helper.d.ts


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
    get Box3Helper() {
        return [...this.LineSegments,
            /**
             * Creates a new wireframe box that represents the passed Box3.
             * @param box The Box3 to show.
             * @param color The box's color. Default `0xffff00`
             */
            'box',
            'color',
            /**
             * The Box3 being visualized.
             */
            'box',
            /**
             * Frees the GPU-related resources allocated by this instance
             * @remarks
             * Call this method whenever this instance is no longer used in your app.
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\BoxHelper.d.ts


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
    get BoxHelper() {
        return [...this.LineSegments,
            /**
             * Creates a new wireframe box that bounds the passed object
             * @remarks
             * Internally this uses {@link THREE.Box3.setFromObject | Box3.setFromObject} to calculate the dimensions
             * Note that this includes any children.
             * @param object The object3D to show the world-axis-aligned bounding box.
             * @param color Hexadecimal value that defines the box's color. Default `0xffff00`
             */
            'object',
            'color',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\CameraHelper.d.ts


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
    get CameraHelper() {
        return [...this.LineSegments,
            /**
             * This create a new {@link CameraHelper} for the specified camera.
             * @param camera The camera to visualize.
             */
            'camera',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\DirectionalLightHelper.d.ts


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
    get DirectionalLightHelper() {
        return [...this.Object3D,
            /**
             * Create a new instance of {@link DirectionalLightHelper}
             * @param light The light to be visualized.
             * @param size Dimensions of the plane. Default `1`
             * @param color If this is not the set the helper will take the color of the light. Default `light.color`
             */
            'light',
            'size',
            'color',
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
             * The color parameter passed in the constructor.
             * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
             * @defaultValue `undefined`
             */
            'color',
            'targetLine',
            // TODO, check if this need to be exposed or not.
            /**
             * Updates the helper to match the position and direction of the {@link light | DirectionalLight} being visualized.
             */
            /**
             * Frees the GPU-related resources allocated by this instance
             * @remarks
             * Call this method whenever this instance is no longer used in your app.
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\GridHelper.d.ts


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
    get GridHelper() {
        return [...this.LineSegments,
            /**
             * Creates a new {@link GridHelper} of size 'size' and divided into 'divisions' segments per side
             * @remarks
             * Colors are optional.
             * @param size The size of the grid. Default `10`
             * @param divisions The number of divisions across the grid. Default `10`
             * @param colorCenterLine The color of the centerline. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x444444`
             * @param colorGrid The color of the lines of the grid. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x888888`
             */
            'size',
            'divisions',
            'color1',
            'color2',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\HemisphereLightHelper.d.ts


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
    get HemisphereLightHelper() {
        return [...this.Object3D,
            /**
             *  Create a new instance of {@link HemisphereLightHelper}
             * @param light The light being visualized.
             * @param size Thr sphere size
             * @param color If this is not the set the helper will take the color of the light.
             */
            'light',
            'size',
            'color',
            /**
          * Reference to the HemisphereLight being visualized.
          */
            'light',
            /**
             * Reference to the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
             */
            'matrix',
            'material', // TODO, check if this need to be exposed or not.
            /**
             * The color parameter passed in the constructor.
             * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
             * @defaultValue `undefined`
             */
            'color',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\PlaneHelper.d.ts


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
    get PlaneHelper() {
        return [...this.LineSegments,
            /**
             * Creates a new wireframe representation of the passed plane.
             * @param plane The plane to visualize.
             * @param size Side length of plane helper. Expects a `Float`. Default `1`
             * @param hex Color. Default `0xffff00`
             */
            'plane',
            'size',
            'hex',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\PointLightHelper.d.ts


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
    get PointLightHelper() {
        return [...this.Object3D,
            /**
             * Create a new instance of {@link PointLightHelper}
             * @param light The light to be visualized.
             * @param sphereSize The size of the sphere helper. Expects a `Float`. Default `1`
             * @param color If this is not the set the helper will take the color of the light.
             */
            'light',
            'sphereSize',
            'color',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\PolarGridHelper.d.ts


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
    get PolarGridHelper() {
        return [...this.LineSegments,
            /**
             * Creates a new {@link PolarGridHelper} of radius 'radius' with 'sectors' number of sectors and 'rings' number of rings, where each circle is smoothed into 'divisions' number of line segments.
             * @remarks Colors are optional.
             * @param radius The radius of the polar grid. This can be any positive number. Default `10`.
             * @param sectors The number of sectors the grid will be divided into. This can be any positive integer. Default `16`.
             * @param rings The number of rings. This can be any positive integer. Default `8`.
             * @param divisions The number of line segments used for each circle. This can be any positive integer that is 3 or greater. Default `64`.
             * @param color1 The first color used for grid elements. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x444444`.
             * @param color2 The second color used for grid elements. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x888888`.
             */

            'radius',
            'radials',
            'circles',
            'divisions',
            'color1',
            'color2',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\SkeletonHelper.d.ts


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
    get SkeletonHelper() {
        return [...this.LineSegments,
            /**
             * Create a new instance of {@link SkeletonHelper}
             * @param object Usually an instance of {@link THREE.SkinnedMesh | SkinnedMesh}.
             * However, any instance of {@link THREE.Object3D } can be used if it represents a hierarchy of {@link Bone | Bone}s (via {@link THREE.Object3D.children .children}).
             */
            'object',
            /**
           * The list of bones that the helper renders as {@link Line | Lines}.
           */
            'bones',
            /**
             * The object passed in the constructor.
             */
            'root',
            /**
             * Reference to the {@link THREE.Object3D.matrixWorld | root.matrixWorld}.
             */
            'matrix',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\helpers\SpotLightHelper.d.ts


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
    get SpotLightHelper() {
        return [...this.Object3D,
            /**
             * Create a new instance of {@link SpotLightHelper}
             * @param light The {@link THREE.SpotLight | SpotLight} to be visualized.
             * @param color If this is not the set the helper will take the color of the light. Default `light.color`
             */
            'light',
            'color',
            /**
             * {@link THREE.LineSegments | LineSegments} used to visualize the light.
             */
            'cone',
            /**
             * Reference to the {@link THREE.SpotLight | SpotLight} being visualized.
             */
            'light',
            /**
             * Reference to the spotLight's {@link Object3D.matrixWorld | matrixWorld}.
             */
            'matrix',
            /**
             * The color parameter passed in the constructor.
             * If this is changed, the helper's color will update the next time {@link SpotLightHelper.update | update} is called.
             * @defaultValue `undefined`
             */
            'color',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\AmbientLight.d.ts


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
    get AmbientLight() {
        return [...this.Light,
            /**
             * Creates a new {@link AmbientLight}.
             * @param color Numeric value of the RGB component of the color. Default `0xffffff`
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
             */
            'color',
            'intensity',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\DirectionalLight.d.ts


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
    get DirectionalLight() {
        return [...this.Light,
            /**
             * Creates a new {@link DirectionalLight}.
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
             */
            'color',
            'intensity',
            /**
             * Whether the object gets rendered into shadow map.
             * @remarks
             * If set to `true` light will cast dynamic shadows.
             * **Warning**, is expensive and requires tweaking to get shadows looking right.
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
             * @remarks **Note**, the target's position to be changed to anything other than the default,
             * it must be added to the {@link THREE.Scene | scene} using
             * ```typescript
             * Scene.add( light.target 
             * ```
             * This is so that the target's {@link THREE.Object3D.matrixWorld | matrixWorld} gets automatically updated each frame.
             *
             * It is also possible to set the target to be another object in the scene (anything with a {@link THREE.Object3D.position | position} property),
             * like so:
             * ```typescript
             * const targetObject = new THREE.Object3D(
             * scene.add(targetObject
             * light.target = targetObject;
             * ```
             * The {@link DirectionalLight} will now track the target object.
             * @defaultValue `new THREE.Object3D()` at _(0, 0, 0)_
             */
            'target',
            /**
             * Frees the GPU-related resources allocated by this instance
             * @remarks
             * Call this method whenever this instance is no longer used in your app.
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\DirectionalLightShadow.d.ts


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
    get DirectionalLightShadow() {
        return [...this.LightShadow,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\HemisphereLight.d.ts


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
    get HemisphereLight() {
        return [...this.Light,
            /**
             * Creates a new {@link HemisphereLight}.
             * @param skyColor Hexadecimal color of the sky. Expects a `Integer`. Default `0xffffff` _(white)_.
             * @param groundColor Hexadecimal color of the ground. Expects a `Integer`. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
             */
            'skyColor',
            'groundColor',
            'intensity',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\Light.d.ts


    /**
     * Abstract base class for lights.
     * @remarks All other light types inherit the properties and methods described here.
     */
    get Light() {
        return [...this.Object3D,
            /**
             * Creates a new {@link Light}
             * @remarks
             * **Note** that this is not intended to be called directly (use one of derived classes instead).
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
             */
            'color',
            'intensity',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\LightProbe.d.ts


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
    get LightProbe() {
        return [...this.Light,
            /**
             * Creates a new LightProbe.
             * @param sh An instance of {@link THREE.SphericalHarmonics3 | SphericalHarmonics3}. Default `new THREE.SphericalHarmonics3()``.
             * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`.
             */
            'sh',
            'intensity',
            /**
             * A light probe uses spherical harmonics to encode lighting information.
             * @defaultValue `new THREE.SphericalHarmonics3()`
             */
            'sh',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\LightShadow.d.ts


    /**
     * Serves as a base class for the other shadow classes.
     * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js | Source}
     */
    LightShadow: [
        'camera',
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
         * @remark If {@link THREE.WebGLRenderer.shadowMap.type | WebGLRenderer.shadowMap.type} is set to {@link Renderer | PCFSoftShadowMap},
         * radius has no effect and it is recommended to increase softness by decreasing {@link LightShadow.mapSize | mapSize} instead.
         * @remark Note that this has no effect if the {@link THREE.WebGLRenderer.shadowMap | WebGLRenderer.shadowMap}.{@link THREE.WebGLShadowMap.type | type}
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
         * @remarks Values must be powers of 2, up to the {@link THREE.WebGLRenderer.capabilities | WebGLRenderer.capabilities}.maxTextureSize for a given device,
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\PointLight.d.ts


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
    get PointLight() {
        return [...this.Light,
            /**
             * Creates a new PointLight.
             * @param color Hexadecimal color of the light. Default is 0xffffff (white). Expects a `Integer`
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
             * @param distance Maximum range of the light. Default is 0 (no limit).
             * @param decay The amount the light dims along the distance of the light. Expects a `Float`. Default `2`
             */
            'color',
            'intensity',
            'distance',
            'decay',
            /**
             * @default 'PointLight'
             */
            'type',
            /**
             * The light's intensity.
             *
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminous intensity of the light measured in candela (cd).
             * @remarks Changing the intensity will also change the light's power.
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'intensity',
            /**
             * When **Default mode** — When distance is zero, light does not attenuate. When distance is non-zero,
             * light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.
             *
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — When distance is zero,
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
             * **Warning**, is expensive and requires tweaking to get shadows looking right.
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
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
             * @remarks Changing the power will also change the light's intensity.
             * @remarks Expects a `Float`
             */
            'power',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\PointLightShadow.d.ts

    /**
     * Shadow for {@link THREE.PointLight | PointLight}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
     */
    get PointLightShadow() {
        return [...this.LightShadow,
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\RectAreaLight.d.ts


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
    get RectAreaLight() {
        return [...this.Light,
            /**
             * Creates a new {@link RectAreaLight}.
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity The light's intensity, or brightness. Expects a `Float`. Default `1`
             * @param width Width of the light. Expects a `Float`. Default `10`
             * @param height Height of the light. Expects a `Float`. Default `10`
             */
            'color',
            'intensity',
            'width',
            'height',
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
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminance (brightness) of the light measured in nits (cd/m^2).
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'intensity',
            /**
             * The light's power.
             * @remarks Changing the power will also change the light's intensity.
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
             * @remarks Expects a `Float`
             */
            'power',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\SpotLight.d.ts


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
    get SpotLight() {
        return [...this.Light,
            /**
             * Creates a new SpotLight.
             * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
             * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
             * @param distance Maximum range of the light. Default is 0 (no limit). Expects a `Float`.
             * @param angle Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
             * @param penumbra Percent of the {@link SpotLight} cone that is attenuated due to penumbra. Takes values between zero and 1. Expects a `Float`. Default `0`.
             * @param decay The amount the light dims along the distance of the light. Expects a `Float`. Default `2`.
             */

            'color',
            'intensity',
            'distance',
            'angle',
            'penumbra',
            'decay',
            /**
             * The {@link SpotLight} points from its {@link SpotLight.position | position} to target.position.
             * @remarks
             * **Note**, the target's position to be changed to anything other than the default,
             * it must be added to the {@link Scene | scene} using
             *
             * ```typescript
             * scene.add( light.target 
             * ```
             *
             * This is so that the target's {@link Object3D.matrixWorld | matrixWorld} gets automatically updated each frame.
             * It is also possible to set the target to be another object in the scene (anything with a {@link THREE.Object3D.position | position} property), like so:
             * ```typescript
             * const targetObject = new THREE.Object3D(
             * scene.add(targetObject
             * light.target = targetObject;
             * ```
             * The {@link SpotLight} will now track the target object.
             * @defaultValue `new THREE.Object3D()` _The default position of the target is *(0, 0, 0)*._
             */
            'target',
            /**
             * If set to `true` light will cast dynamic shadows.
             * @remarks  **Warning**, is expensive and requires tweaking to get shadows looking right. the {@link THREE.SpotLightShadow | SpotLightShadow} for details.
             * @defaultValue `false`
             */
            'castShadow',
            /**
             * The light's intensity.
             * @remarks Changing the intensity will also change the light's power.
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminous intensity of the light measured in candela (cd).
             * @remarks Expects a `Float`
             * @defaultValue `1`
             */
            'intensity',
            /**
             * When **Default mode** — When distance is zero, light does not attenuate. When distance is non-zero,
             * light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.
             *
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — When distance is zero,
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
             * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** —  power is the luminous power of the light measured in lumens (lm).
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
             * A {@link THREE.Texture } used to modulate the color of the light.
             * The spot light color is mixed with the _RGB_ value of this texture, with a ratio corresponding to its alpha value.
             * The cookie-like masking effect is reproduced using pixel values (0, 0, 0, 1-cookie_value).
             * @remarks **Warning**: {@link SpotLight.map} is disabled if {@link SpotLight.castShadow} is `false`.
             */
            'map',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\lights\SpotLightShadow.d.ts


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
    get SpotLightShadow() {
        return [...this.LightShadow,
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
             * @remarks The camera's field of view is set as a percentage of the spotlight's field-of-view. Range is `[0, 1]`. 0`.
             * @defaultValue `1`
             */
            'focus',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\AnimationLoader.d.ts



    get AnimationLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\AudioLoader.d.ts



    get AudioLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\BufferGeometryLoader.d.ts



    get BufferGeometryLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\Cache.d.ts

    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\CompressedTextureLoader.d.ts


    get CompressedTextureLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\CubeTextureLoader.d.ts



    get CubeTextureLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\DataTextureLoader.d.ts



    get DataTextureLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\FileLoader.d.ts


    get FileLoader() {
        return [...this.Loader,
            'manager',
            'mimeType',
            'responseType',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\ImageBitmapLoader.d.ts


    get ImageBitmapLoader() {
        return [...this.Loader,
            'manager',
            /**
             * @default { premultiplyAlpha: 'none' }
             */
            'options',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\ImageLoader.d.ts


    /**
     * A loader for loading an image.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    get ImageLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\Loader.d.ts


    /**
     * Base class for implementing loaders.
     */
    Loader: [
        'manager',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\LoaderUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\LoadingManager.d.ts


    /**
     * Handles and keeps track of loaded and pending data.
     */
    LoadingManager: [
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\MaterialLoader.d.ts



    get MaterialLoader() {
        return [...this.Loader,
            /**
             * @default {}
             */
            'textures',
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\ObjectLoader.d.ts



    get ObjectLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\loaders\TextureLoader.d.ts


    /**
     * Class for loading a texture.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    get TextureLoader() {
        return [...this.Loader,
            'manager',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\LineBasicMaterial.d.ts



    get LineBasicMaterialParameters() {
        return [...this.MaterialParameters,
            'color',
            'fog',
            'linewidth',
            'linecap',
            'linejoin',
        ]
    },
    get LineBasicMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\LineDashedMaterial.d.ts


    get LineDashedMaterial() {
        return [...this.LineBasicMaterial,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\Material.d.ts


    MaterialParameters: [
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
    ],

    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
    get Material() {
        return [...this.EventDispatcher,
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
             * Represent the RGB values of the constant blend color. This property has only an effect when using custom
             * blending with {@link ConstantColorFactor} or {@link OneMinusConstantColorFactor}.
             * @default 0x000000
             */
            'blendColor',
            /**
             * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
             * @default THREE.OneMinusSrcAlphaFactor
             */
            'blendDst',
            /**
             * The tranparency of the .blendDst. Default is null.
             * @default null
             */
            'blendDstAlpha',
            /**
             * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
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
             * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
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
             * See the WebGL / clipping /intersection example. Default is null.
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
             * Custom defines to be injected into the shader. These are passed in form of an object literal, with key/value pairs. { MY_CUSTOM_DEFINE: '' , PI2,.PI * 2 }.
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
             * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
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
             * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
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
             * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
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
             * {@link WebGLRenderer.toneMapping toneMapping} setting. It is ignored when rendering to a render target or using
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\Materials.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshBasicMaterial.d.ts


    get MeshBasicMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshDepthMaterial.d.ts



    get MeshDepthMaterialParameters() {
        return [...this.MaterialParameters,
            'map',
            'alphaMap',
            'depthPacking',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'wireframe',
            'wireframeLinewidth',
        ]
    },
    get MeshDepthMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshDistanceMaterial.d.ts


    get MeshDistanceMaterialParameters() {
        return [...this.MaterialParameters,
            'map',
            'alphaMap',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'farDistance',
            'nearDistance',
            'referencePosition',
        ]
    },
    get MeshDistanceMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshLambertMaterial.d.ts


    get MeshLambertMaterialParameters() {
        return [...this.MaterialParameters,
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
        ]
    },
    get MeshLambertMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshMatcapMaterial.d.ts

    get MeshMatcapMaterialParameters() {
        return [...this.MaterialParameters,
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
        ]
    },
    get MeshMatcapMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshNormalMaterial.d.ts

    get MeshNormalMaterialParameters() {
        return [...this.MaterialParameters,
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
        ]
    },
    get MeshNormalMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshPhongMaterial.d.ts

    get MeshPhongMaterialParameters() {
        return [...this.MaterialParameters,
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
        ]
    },
    get MeshPhongMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshPhysicalMaterial.d.ts

    get MeshPhysicalMaterialParameters() {
        return [...this.MeshStandardMaterialParameters,
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
        ]
    },
    get MeshPhysicalMaterial() {
        return [...this.MeshStandardMaterial,
            'parameters',
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
             * @default null
             */
            'iridescenceMap',
            /**
             * @default 1.3
             */
            'iridescenceIOR',
            /**
             * @default [100, 400]
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshStandardMaterial.d.ts

    get MeshStandardMaterialParameters() {
        return [...this.MaterialParameters,
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
        ]
    },
    get MeshStandardMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\MeshToonMaterial.d.ts

    get MeshToonMaterialParameters() {
        return [...this.MaterialParameters,
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
        ]
    },
    get MeshToonMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\PointsMaterial.d.ts

    get PointsMaterialParameters() {
        return [...this.MaterialParameters,
            'color',
            'map',
            'alphaMap',
            'size',
            'sizeAttenuation',
            'fog',
        ]
    },
    get PointsMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\RawShaderMaterial.d.ts



    get RawShaderMaterial() {
        return [...this.ShaderMaterial,
            'parameters',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\ShaderMaterial.d.ts

    get ShaderMaterialParameters() {
        return [...this.MaterialParameters,
            'uniforms',
            'uniformsGroups',
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
        ]
    },
    get ShaderMaterial() {
        return [...this.Material,
            'parameters',
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
             * @default { 'color', 1, 1, 1 ]}, 'uv', 0, 0 ]}, 'uv1', 0, 0 ] }
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\ShadowMaterial.d.ts


    get ShadowMaterialParameters() {
        return [...this.MaterialParameters,
            'color',
            'fog',
        ]
    },
    get ShadowMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\materials\SpriteMaterial.d.ts


    get SpriteMaterialParameters() {
        return [...this.MaterialParameters,
            'color',
            'map',
            'alphaMap',
            'rotation',
            'sizeAttenuation',
            'fog',
        ]
    },
    get SpriteMaterial() {
        return [...this.Material,
            'parameters',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Box2.d.ts


    // Math //////////////////////////////////////////////////////////////////////////////////
    Box2: [
        /**
         * @default new THREE.Vector2( + Infinity, + Infinity )
         */
        'min',
        /**
         * @default new THREE.Vector2( - Infinity, - Infinity )
         */
        'max',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Box3.d.ts



    Box3: [
        /**
         * @default new THREE.Vector3( + Infinity, + Infinity, + Infinity )
         */
        'min',
        /**
         * @default new THREE.Vector3( - Infinity, - Infinity, - Infinity )
         */
        'max',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Color.d.ts


    HSL: [
        'h',
        's',
        'l',
    ],
    RGB: [
        'r',
        'g',
        'b',
    ],
    /**
     * Represents a color. See also {@link ColorUtils}.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
     *
     * @example
     * const color = new THREE.Color( 0xff0000 
     */
    Color: [
        'color',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\ColorManagement.d.ts

    ColorManagement: [
        /**
         * @default false
         */
        'enabled',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Cylindrical.d.ts



    Cylindrical: [
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Euler.d.ts


    Euler: [
        'order',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Frustum.d.ts


    /**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     */
    Frustum: [
        'p0',
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
        /**
         * Array of 6 vectors.
         */
        'planes',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Interpolant.d.ts

    Interpolant: [
        'parameterPositions',
        'sampleValues',
        'sampleSize',
        'resultBuffer',
        'parameterPositions',
        'sampleValues',
        'valueSize',
        'resultBuffer',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Line3.d.ts



    Line3: [
        /**
         * @default new THREE.Vector3()
         */
        'start',
        /**
         * @default new THREE.Vector3()
         */
        'end',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\MathUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Matrix3.d.ts
    // https://threejs.org/docs/#api/en/math/Matrix3
    /**
     * ( interface Matrix<T> )
     */
    Matrix: [
        /**
         * Array with matrix values.
         */
        'elements',
    ],
    /**
     * ( class Matrix3 implements Matrix<Matrix3> )
     */
    get Matrix3() {
        return [...this.Matrix,
            /**
             * Creates a 3x3 matrix with the given arguments in row-major order.
             */

            'n11',
            'n12',
            'n13',
            'n21',
            'n22',
            'n23',
            'n31',
            'n32',
            'n33',
            /**
             * Array with matrix values.
             * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
             */
            'elements',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Matrix4.d.ts




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
    get Matrix4() {
        return [...this.Matrix,
            /**
             * Creates an identity matrix.
             */

            /**
             * Creates a 4x4 matrix with the given arguments in row-major order.
             */

            'n11',
            'n12',
            'n13',
            'n14',
            'n21',
            'n22',
            'n23',
            'n24',
            'n31',
            'n32',
            'n33',
            'n34',
            'n41',
            'n42',
            'n43',
            'n44',
            /**
             * Array with matrix values.
             * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
             */
            'elements',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Plane.d.ts



    Plane: [
        'normal',
        'constant',
        /**
         * @default new THREE.Vector3( 1, 0, 0 )
         */
        'normal',
        /**
         * @default 0
         */
        'constant',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Quaternion.d.ts

    /**
     * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
     *
     * @example
     * const quaternion = new THREE.Quaternion(
     * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 
     * const vector = new THREE.Vector3( 1, 0, 0 
     * vector.applyQuaternion( quaternion 
     */
    Quaternion: [

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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Ray.d.ts



    Ray: [
        'origin',
        'direction',
        /**
         * @default new THREE.Vector3()
         */
        'origin',
        /**
         * @default new THREE.Vector3( 0, 0, - 1 )
         */
        'direction',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Sphere.d.ts



    Sphere: [
        'center',
        'radius',
        /**
         * @default new Vector3()
         */
        'center',
        /**
         * @default 1
         */
        'radius',
        /**
         * @deprecated Use {@link Sphere#isEmpty .isEmpty()} instead.
         */
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Spherical.d.ts



    Spherical: [
        'radius',
        'phi',
        'theta',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\SphericalHarmonics3.d.ts



    SphericalHarmonics3: [

        /**
         * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
         * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]
         */
        'coefficients',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Triangle.d.ts



    Triangle: [
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Vector2.d.ts

    /**
     * 2D vector.
     */
    Vector2: [
        'x',
        'y',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Vector3.d.ts


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
    Vector3: [
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\Vector4.d.ts


    /**
     * 4D vector.
     */
    Vector4: [
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\interpolants\CubicInterpolant.d.ts

    get CubicInterpolant() {
        return [...this.Interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\interpolants\DiscreteInterpolant.d.ts


    get DiscreteInterpolant() {
        return [...this.Interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\interpolants\LinearInterpolant.d.ts



    get LinearInterpolant() {
        return [...this.Interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\math\interpolants\QuaternionLinearInterpolant.d.ts

    get QuaternionLinearInterpolant() {
        return [...this.Interpolant,
            'parameterPositions',
            'samplesValues',
            'sampleSize',
            'resultBuffer',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\BatchedMesh.d.ts


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
    get BatchedMesh() {
        return [...this.Mesh,
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
             * The maximum number of individual geometries that can be stored in the {@link BatchedMesh}. Read only.
             */
            /**
             * Read-only flag to check if a given object is of type {@link BatchedMesh}.
             */
            'isBatchedMesh',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\Bone.d.ts


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
    get Bone() {
        return [...this.Object3D,
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\Group.d.ts


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
    get Group() {
        return [...this.Object3D,
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\InstancedMesh.d.ts



    get InstancedMeshEventMap() {
        return [...this.Object3DEventMap,
        ]
    },
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
    get InstancedMesh() {
        return [...this.Mesh,
            /**
             * Create a new instance of {@link InstancedMesh}
             * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}.
             * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
             * @param count The **maximum** number of instances of this Mesh. Expects a `Integer`
             */
            'geometry',
            'material',
            /**
             * This bounding box encloses all instances of the {@link InstancedMesh}, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
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
             * You can change the number of instances at runtime to an integer value in the range `[0, count]`.
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\Line.d.ts


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
    get Line() {
        return [...this.Object3D,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\LineLoop.d.ts


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
    get LineLoop() {
        return [...this.Line,
            /**
             * Create a new instance of {@link LineLoop}
             * @param geometry  List of vertices representing points on the line loop. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
             */
            'geometry',
            'material',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\LineSegments.d.ts


    /**
     * A series of lines drawn between pairs of vertices.
     * @remarks
     * This is nearly the same as {@link THREE.Line | Line},
     * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES}
     * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js | Source}
     */
    get LineSegments() {
        return [...this.Line,
            /**
             * Create a new instance of {@link LineSegments}
             * @param geometry Pair(s) of vertices representing each line segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
             */
            'geometry',
            'material',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\LOD.d.ts


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
    get LOD() {
        return [...this.Object3D,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\Mesh.d.ts


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
    get Mesh() {
        return [...this.Object3D,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\Points.d.ts


    /**
     * A class for displaying {@link Points}
     * @remarks
     * The {@link Points} are rendered by the {@link THREE.WebGLRenderer | WebGLRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.POINTS}.
     * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js | Source}
     */
    get Points() {
        return [...this.Object3D,
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
            /**
             * Updates the morphTargets to have no influence on the object
             * @remarks Resets the {@link morphTargetInfluences} and {@link morphTargetDictionary} properties.
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\Skeleton.d.ts


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
    Skeleton: [
        /**
         * Creates a new Skeleton.
         * @param bones The array of {@link THREE.Bone | bones}. Default `[]`.
         * @param boneInverses An array of {@link THREE.Matrix4 | Matrix4s}. Default `[]`.
         */
        'bones',
        'boneInverses',
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
         * The {@link THREE.DataTexture } holding the bone data when using a vertex texture.
         */
        'boneTexture',
        'frame',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\SkinnedMesh.d.ts


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
    get SkinnedMesh() {
        return [...this.Mesh,
            /**
             * Create a new instance of {@link SkinnedMesh}
             * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
             * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
             */
            'geometry',
            'material',
            'useVertexTexture',
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
            /**
             * Bind a skeleton to the skinned mesh
             * @remarks
             * The bindMatrix gets saved to .bindMatrix property and the .bindMatrixInverse gets calculated.
             * @param skeleton {@link THREE.Skeleton | Skeleton} created from a {@link Bone | Bones} tree.
             * @param bindMatrix {@link THREE.Matrix4 | Matrix4} that represents the base transform of the skeleton.
             */
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\objects\Sprite.d.ts


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
    get Sprite() {
        return [...this.Object3D,
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\WebGL3DRenderTarget.d.ts


    /**
     * Represents a three-dimensional render target.
     */
    get WebGL3DRenderTarget() {
        return [...this.WebGLRenderTarget,
            /**
             * Creates a new WebGL3DRenderTarget.
             *
             * @param width the width of the render target, in pixels. Default is `1`.
             * @param height the height of the render target, in pixels. Default is `1`.
             * @param depth the depth of the render target. Default is `1`.
             * @param options optional object that holds texture parameters for an auto-generated target texture and
             * depthBuffer/stencilBuffer booleans. See {@link WebGLRenderTarget} for details.
             */
            'width',
            'height',
            'depth',
            'options',
            'textures',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\WebGLArrayRenderTarget.d.ts


    /**
     * This type of render target represents an array of textures.
     */
    get WebGLArrayRenderTarget() {
        return [...this.WebGLRenderTarget,
            /**
             * Creates a new WebGLArrayRenderTarget.
             *
             * @param width the width of the render target, in pixels. Default is `1`.
             * @param height the height of the render target, in pixels. Default is `1`.
             * @param depth the depth/layer count of the render target. Default is `1`.
             * @param options optional object that holds texture parameters for an auto-generated target texture and
             * depthBuffer/stencilBuffer booleans. See {@link WebGLRenderTarget} for details.
             */
            'width',
            'height',
            'depth',
            'options',
            'textures',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\WebGLCubeRenderTarget.d.ts



    get WebGLCubeRenderTarget() {
        return [...this.WebGLRenderTarget,
            'size',
            'options',
            'textures',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\WebGLRenderer.d.ts

    Renderer: [
        'domElement',
    ],
    WebGLRendererParameters: [
        /**
         * A Canvas where the renderer draws its output.
         */
        'canvas',
        /**
         * A WebGL Rendering Context.
         * (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
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
    ],
    WebGLDebug: [
        /**
         * Enables error checking and reporting when shader programs are being compiled.
         */
        'checkShaderErrors',
    ],
    /**
     * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
     * This renderer has way better performance than CanvasRenderer.
     *
     * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js|src/renderers/WebGLRenderer.js}
     */
    get WebGLRenderer() {
        return [...this.Renderer,
            /**
             * parameters is an optional object with properties defining the renderer's behaviour.
             * The constructor also accepts no parameters at all.
             * In all cases, it will assume sane defaults when parameters are missing.
             */
            'parameters',
            /**
             * A Canvas where the renderer draws its output.
             * This is automatically created by the renderer in the constructor (if not provided already you just need to add it to your page.
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
             * @default { checkShaderErrors, }
             */
            'debug',
            /**
             * Defines whether the renderer should sort objects. Default is true.
             * @default true
             */
            'sortObjects',
            /**
             * @default []
             */
            'clippingPlanes',
            /**
             * @default false
             */
            'localClippingEnabled',
            'extensions',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\WebGLRenderTarget.d.ts



    get WebGLRenderTarget() {
        return [...this.RenderTarget,
            'width',
            'height',
            'options',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\shaders\ShaderChunk.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\shaders\UniformsLib.d.ts


    // eslint-disable-next-line @typescript-eslint/naming-convention
    IUniform: [
        'value',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\shaders\UniformsUtils.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLAttributes.d.ts


    WebGLAttributes: [
        'gl',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLBindingStates.d.ts


    WebGLBindingStates: [
        'gl',
        'attributes',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLBufferRenderer.d.ts


    WebGLBufferRenderer: [
        'gl',
        'extensions',
        'info',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLCapabilities.d.ts

    WebGLCapabilitiesParameters: [
        'precision',
        'logarithmicDepthBuffer',
    ],
    WebGLCapabilities: [
        'gl',
        'extensions',
        'parameters',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLClipping.d.ts

    WebGLClipping: [
        'properties',
        'uniform',
        /**
         * @default 0
         */
        'numPlanes',
        /**
         * @default 0
         */
        'numIntersection',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLCubeMaps.d.ts



    WebGLCubeMaps: [
        'renderer',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLCubeUVMaps.d.ts

    WebGLCubeUVMaps: [
        'renderer',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLExtensions.d.ts

    WebGLExtensions: [
        'gl',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLGeometries.d.ts



    WebGLGeometries: [
        'gl',
        'attributes',
        'info',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLIndexedBufferRenderer.d.ts

    WebGLIndexedBufferRenderer: [
        'gl',
        'extensions',
        'info',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLInfo.d.ts


    /**
     * An object with a series of statistical information about the graphics board memory and the rendering process.
     */
    WebGLInfo: [
        'gl',
        /**
         * @default true
         */
        'autoReset',
        /**
         * @default { geometries, textures, }
         */
        'memory',
        /**
         * @default null
         */
        'programs',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLLights.d.ts

    WebGLLightsState: [
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
    ],
    WebGLLights: [
        'extensions',
        'state',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLObjects.d.ts

    WebGLObjects: [
        'gl',
        'geometries',
        'attributes',
        'info',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLProgram.d.ts

    WebGLProgram: [
        'renderer',
        'cacheKey',
        'parameters',
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
         * @deprecated Use {@link WebGLProgram#getUniforms getUniforms()} instead.
         */
        'uniforms',
        /**
         * @deprecated Use {@link WebGLProgram#getAttributes getAttributes()} instead.
         */
        'attributes',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLPrograms.d.ts

    WebGLProgramParameters: [
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
        'envMapCubeUVHeight',
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
    ],
    get WebGLProgramParametersWithUniforms() {
        return [...this.WebGLProgramParameters,
            'uniforms',
        ]
    },
    WebGLPrograms: [

        'renderer',
        'cubemaps',
        'extensions',
        'capabilities',
        'bindingStates',
        'clipping',
        'programs',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLProperties.d.ts

    WebGLProperties: [

    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLRenderLists.d.ts

    RenderItem: [
        'id',
        'object',
        'geometry',
        'material',
        'program',
        'groupOrder',
        'renderOrder',
        'z',
        'group',
    ],
    WebGLRenderList: [
        'properties',
        /**
         * @default []
         */
        'opaque',
        /**
         * @default []
         */
        'transparent',
        /**
         * @default []
         */
        'transmissive',
    ],
    WebGLRenderLists: [
        'properties',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLShader.d.ts


    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLShadowMap.d.ts



    WebGLShadowMap: [
        '_renderer',
        '_objects',
        '_capabilities',
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
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLState.d.ts

    WebGLColorBuffer: [

    ],
    WebGLDepthBuffer: [

    ],
    WebGLStencilBuffer: [

    ],
    WebGLState: [
        'gl',
        'buffers',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLTextures.d.ts



    WebGLTextures: [

        'gl',
        'extensions',
        'state',
        'properties',
        'capabilities',
        'utils',
        'info',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLUniforms.d.ts

    WebGLUniforms: [
        'gl',
        'program',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLUniformsGroups.d.ts
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webgl\WebGLUtils.d.ts

    WebGLUtils: [
        'gl',
        'extensions',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webxr\WebXRController.d.ts

    get XRJointSpace() {
        return [...this.Group,
        ]
    },
    XRHandInputState: [
        'pinching',
    ],
    get WebXRSpaceEventMap() {
        return [...this.Object3DEventMap,
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
        ]
    },
    get XRHandSpace() {
        return [...this.Group,
        ]
    },
    get XRTargetRaySpace() {
        return [...this.Group,
            'hasLinearVelocity',
            'hasAngularVelocity',
        ]
    },
    get XRGripSpace() {
        return [...this.Group,
            'hasLinearVelocity',
            'hasAngularVelocity',
        ]
    },
    WebXRController: [

    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webxr\WebXRDepthSensing.d.ts


    // FIXME Replace by XRWebGLDepthInformation when typed in @types/webxr
    XRWebGLDepthInformation: [],

    WebXRDepthSensing: [
        'texture',
        'mesh',
        'depthNear',
        'depthFar',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\renderers\webxr\WebXRManager.d.ts

    // https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager

    WebXRManagerEventMap: [
        'sessionstart',
        'sessionend',
        'planeadded',
        'planeremoved',
        'planechanged',
        'planesdetected',
    ],
    get WebXRManager() {
        return [...this.EventDispatcher,
            'renderer',
            'gl',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\scenes\Fog.d.ts

    FogBase: [
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
        /**
         * Returns a new Fog instance with the same parameters as this one.
         */
        /**
         * Return Fog data in JSON format.
         */
    ],
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
    get Fog() {
        return [...this.FogBase,
            /**
             * The color parameter is passed to the {@link THREE.Color | Color} constructor to set the color property
             * @remarks
             * Color can be a hexadecimal integer or a CSS-style string.
             * @param color
             * @param near Expects a `Float`
             * @param far Expects a `Float`
             */
            'color',
            'near',
            'far',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\scenes\FogExp2.d.ts


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
    get FogExp2() {
        return [...this.FogBase,
            /**
             * The color parameter is passed to the {@link THREE.Color | Color} constructor to set the color property
             * @remarks Color can be a hexadecimal integer or a CSS-style string.
             * @param color
             * @param density Expects a `Float`
             */
            'color',
            'density',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\scenes\Scene.d.ts


    /**
     * Scenes allow you to set up what and where is to be rendered by three.js
     * @remarks
     * This is where you place objects, lights and cameras.
     * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison | webgl multiple scenes comparison}
     * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene | Manual, a scene}
     * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js | Source}
     */
    get Scene() {
        return [...this.Object3D,
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
             *  - A {@link THREE.Texture } for defining a (flat) textured background.
             *  - Texture cubes ({@link THREE.CubeTexture }) or equirectangular textures for defining a skybox.</li>
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\CanvasTexture.d.ts

    /**
     * Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas | canvas element}.
     * @remarks
     * This is almost the same as the base {@link Texture } class,
     * except that it sets {@link Texture.needsUpdate | needsUpdate} to `true` immediately.
     * @see {@link THREE.Texture }
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CanvasTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CanvasTexture.js | Source}
     */
    get CanvasTexture() {
        return [...this.Texture,
            /**
             * This creates a new {@link THREE.CanvasTexture | CanvasTexture} object.
             * @param canvas The HTML canvas element from which to load the texture.
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             */

            'canvas',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\CompressedArrayTexture.d.ts


    /**
     * Creates an texture 2D array based on data in compressed form, for example from a
     * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js | Source}
     */
    get CompressedArrayTexture() {
        return [...this.CompressedTexture,
            /**
             * Create a new instance of {@link CompressedArrayTexture}
             * @param mipmaps The mipmaps array should contain objects with data, width and height.
             * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
             * @param width The width of the biggest mipmap.
             * @param height The height of the biggest mipmap.
             * @param depth The number of layers of the 2D array texture
             * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             */

            'mipmaps',
            'width',
            'height',
            'depth',
            'format',
            'type',
            'wrapR',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\CompressedCubeTexture.d.ts

    get CompressedCubeTexture() {
        return [...this.CompressedTexture,
            'images',
            'format',
            'type',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\CompressedTexture.d.ts

    /**
     * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
     * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js | Source}
     */
    get CompressedTexture() {
        return [...this.Texture,
            /**
             * This creates a new {@link THREE.CompressedTexture | CompressedTexture} object.
             * @param mipmaps The mipmaps array should contain objects with data, width and height.
             * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
             * @param width The width of the biggest mipmap.
             * @param height The height of the biggest mipmap.
             * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace .colorSpace}. Default {@link NoColorSpace}
             */

            'mipmaps',
            'width',
            'height',
            'format',
            'type',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'anisotropy',
            'colorSpace',
            /**
             *  The mipmaps array should contain objects with data, width and height. The mipmaps should be of the correct {@link format} and {@link type}.
             */
            'mipmaps',
            /**
             * @override
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @see {@link THREE.CompressedPixelFormat}
             */
            'format',
            /**
             * @No flipping for cube textures. (also flipping doesn't work for compressed textures)
             * @defaultValue `false`
             */
            'flipY',
            /**
             * @Can't generate mipmaps for compressed textures. mips must be embedded in DDS files
             * @defaultValue `false`
             */
            'generateMipmaps',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\CubeTexture.d.ts
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
    get CubeTexture() {
        return [...this.Texture,
            /**
             * This creates a new {@link THREE.CubeTexture } object.
             * @param images
             * @param mapping See {@link CubeTexture.mapping | .mapping}. Default {@link THREE.CubeReflectionMapping}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
             */

            'images', // HTMLImageElement or HTMLCanvasElement
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
            'colorSpace',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\Data3DTexture.d.ts


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
    get Data3DTexture() {
        return [...this.Texture,
            /**
             * Create a new instance of {@link Data3DTexture}
             * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
             * @param width Width of the texture. Default `1`.
             * @param height Height of the texture. Default `1`.
             * @param depth Depth of the texture. Default `1`.
             */
            'data',
            'width',
            'height',
            'depth',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\DataArrayTexture.d.ts


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
    get DataArrayTexture() {
        return [...this.Texture,
            /**
             * This creates a new {@link THREE.DataArrayTexture | DataArrayTexture} object.
             * @remarks The interpretation of the data depends on {@link format} and {@link type}.
             * @remarks If the {@link type} is {@link THREE.UnsignedByteType}, a {@link Uint8Array} will be useful for addressing the texel data
             * @remarks If the {@link format} is {@link THREE.RGBAFormat}, data needs four values for one texel; Red, Green, Blue and Alpha (typically the opacity).
             * @remarks For the packed {@link type | types}, {@link THREE.UnsignedShort4444Type} and {@link THREE.UnsignedShort5551Type}
             * all color components of one texel can be addressed as bitfields within an integer element of a {@link Uint16Array}.
             * @remarks In order to use the {@link type | types} {@link THREE.FloatType} and {@link THREE.HalfFloatType},
             * the WebGL implementation must support the respective extensions _OES_texture_float_ and _OES_texture_half_float_
             * @remarks In order to use {@link THREE.LinearFilter} for component-wise, bilinear interpolation of the texels based on these types,
             * the WebGL extensions _OES_texture_float_linear_ or _OES_texture_half_float_linear_ must also be present.
             * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
             * @param width Width of the texture. Default `1`.
             * @param height Height of the texture. Default `1`.
             * @param depth Depth of the texture. Default `1`.
             */
            'data',
            'width',
            'height',
            'depth',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\DataTexture.d.ts

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
    get DataTexture() {
        return [...this.Texture,
            /**
             * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
             * @param width Width of the texture. Default `1`.
             * @param height Height of the texture. Default `1`.
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
             */

            'data',
            'width',
            'height',
            'format',
            'type',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'anisotropy',
            'colorSpace',
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\DepthTexture.d.ts

    /**
     * This class can be used to automatically save the depth information of a rendering into a texture
     * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture | depth / texture}
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js | Source}
     */
    get DepthTexture() {
        return [...this.Texture,
            /**
             * Create a new instance of {@link DepthTexture}
             * @param width Width of the texture.
             * @param height Height of the texture.
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType} or {@link THREE.UnsignedInt248Type}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param format See {@link DepthTexture.format | .format}. Default {@link THREE.DepthFormat}
             */

            'width',
            'height',
            'type',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'anisotropy',
            'format',
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
             * @Depth textures do not use mipmaps.
             * @defaultValue `false`
             */
            'generateMipmaps',
            /**
             * @override
             * @see {@link Texture.format .format}
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\FramebufferTexture.d.ts


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
    get FramebufferTexture() {
        return [...this.Texture,
            /**
             * Create a new instance of {@link FramebufferTexture}
             * @param width The width of the texture.
             * @param height The height of the texture.
             */
            'width',
            'height',
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\Source.d.ts

    /**
     * Represents the data {@link Source} of a texture.
     * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source | Official Documentation}
     * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js | Source}
     */
    Source: [
        /**
         * Create a new instance of {@link Source}
         * @param data The data definition of a texture. Default `null`
         */
        'data',
        /**
         * The actual data of a texture.
         * @remarks The type of this property depends on the texture that uses this instance.
         */
        'data',
        /**
         * This property is only relevant when {@link .needsUpdate} is set to `true` and provides more control on how
         * texture data should be processed.
         * When `dataReady` is set to `false`, the engine performs the memory allocation (if necessary) but does not
         * transfer the data into the GPU memory.
         * @default true
         */
        'dataReady',
    ],
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\Texture.d.ts

    EventTarget: [],
    /** Shim for OffscreenCanvas. */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    get OffscreenCanvas() {
        return [...this.EventTarget,]
    },
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
    get Texture() {
        return [...this.EventDispatcher,
            /**
             * This creates a new {@link THREE.Texture } object.
             * @param image See {@link Texture.image | .image}. Default {@link THREE.Texture.DEFAULT_IMAGE}
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link THREE.NoColorSpace}
             */

            'image',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
            'colorSpace',
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
             * Array of user-specified mipmaps
             * @defaultValue `[]`
             */
            'mipmaps', // ImageData[] for 2D textures and CubeTexture[] for cube textures;
            /**
             * How the image is applied to the object.
             * @remarks All {@link Texture} types except {@link THREE.CubeTexture} expect the _values_ be {@link THREE.Mapping}
             * @remarks {@link CubeTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @defaultValue _value of_ {@link THREE.Texture.DEFAULT_MAPPING}
             */
            'mapping',
            /**
             * Lets you select the uv attribute to map the texture to. `0` for `uv`, `1` for `uv1`, `2` for `uv2` and `3` for
             * `uv3`.
             */
            'channel',
            /**
             * This defines how the {@link Texture} is wrapped *horizontally* and corresponds to **U** in UV mapping.
             * @remarks for **WEBGL1** - tiling of images in textures only functions if image dimensions are powers of two
             * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...) in terms of pixels.
             * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGL1, not three.js.
             * **WEBGL2** does not have this limitation.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @see {@link wrapT}
             * @see {@link repeat}
             * @defaultValue {@link THREE.ClampToEdgeWrapping}
             */
            'wrapS',
            /**
             * This defines how the {@link Texture} is wrapped *vertically* and corresponds to **V** in UV mapping.
             * @remarks for **WEBGL1** - tiling of images in textures only functions if image dimensions are powers of two
             * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...) in terms of pixels.
             * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGL1, not three.js.
             * **WEBGL2** does not have this limitation.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @see {@link wrapS}
             * @see {@link repeat}
             * @defaultValue {@link THREE.ClampToEdgeWrapping}
             */
            'wrapT',
            /**
             * How the {@link Texture} is sampled when a texel covers more than one pixel.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @see {@link minFilter}
             * @see {@link THREE.MagnificationTextureFilter}
             * @defaultValue {@link THREE.LinearFilter}
             */
            'magFilter',
            /**
             * How the {@link Texture} is sampled when a texel covers less than one pixel.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @see {@link magFilter}
             * @see {@link THREE.MinificationTextureFilter}
             * @defaultValue {@link THREE.LinearMipmapLinearFilter}
             */
            'minFilter',
            /**
             * The number of samples taken along the axis through the pixel that has the highest density of texels.
             * @remarks A higher value gives a less blurry result than a basic mipmap, at the cost of more {@link Texture} samples being used.
             * @remarks Use {@link THREE.WebGLCapabilities.getMaxAnisotropy() | renderer.capabilities.getMaxAnisotropy()} to find the maximum valid anisotropy value for the GPU;
             * @remarks This value is usually a power of 2.
             * @default _value of_ {@link THREE.Texture.DEFAULT_ANISOTROPY}. That is normally `1`.
             */
            'anisotropy',
            /**
             * These define how elements of a 2D texture, or texels, are read by shaders.
             * @remarks All {@link Texture} types except {@link THREE.DepthTexture} and {@link THREE.CompressedPixelFormat} expect the _values_ be {@link THREE.PixelFormat}
             * @remarks {@link DepthTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
             * @remarks {@link CompressedPixelFormat} expect the _values_ be {@link THREE.CubeTextureMapping}
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @see {@link THREE.PixelFormat}
             * @defaultValue {@link THREE.RGBAFormat}.
             */
            'format',
            /**
             * This must correspond to the {@link Texture.format | .format}.
             * @remarks {@link THREE.UnsignedByteType}, is the type most used by Texture formats.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
             * @see {@link THREE.TextureDataType}
             * @defaultValue {@link THREE.UnsignedByteType}
             */
            'type',
            /**
             * The GPU Pixel Format allows the developer to specify how the data is going to be stored on the GPU.
             * @remarks Compatible only with {@link WebGL2RenderingContext | WebGL 2 Rendering Context}.
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
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
             * If set to `true`, the alpha channel, if present, is multiplied into the color channels when the texture is uploaded to the GPU.
             * @remarks
             * Note that this property has no effect for {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap | ImageBitmap}.
             * You need to configure on bitmap creation instead. See {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
             * @see {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
             * @defaultValue `false`
             */
            'premultiplyAlpha',
            /**
             * If set to `true`, the texture is flipped along the vertical axis when uploaded to the GPU.
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
             * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures  Constants}
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
        ]
    },
    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\types.d.ts

    TextureImageData: [
        'data',
        'height',
        'width',
    ],
    get Texture3DImageData() {
        return [...this.TextureImageData,
            'depth',
        ]
    },

    //D:\Developments\FengShui\meta-suyen\node_modules\.pnpm\@types+three@0.164.0\node_modules\@types\three\src\textures\VideoTexture.d.ts

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
    get VideoTexture() {
        return [...this.Texture,
            /**
             * Create a new instance of {@link VideoTexture}
             * @param video The video element to use as the texture.
             * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
             * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
             * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
             * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
             * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearFilter}
             * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
             * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
             * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
             */

            'video',
            'mapping',
            'wrapS',
            'wrapT',
            'magFilter',
            'minFilter',
            'format',
            'type',
            'anisotropy',
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
            /**
             * @override
             * You will **not** need to set this manually here as it is handled by the {@link update | update()} method.
             */
        ]
    },
}