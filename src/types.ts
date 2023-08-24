import THREE from "three";
import { Canvas } from "./Canvas"
import { Canvas3D } from "./canvas3D";

export type cons = {
        //animations
        booleanKeyframeTrack: {name: string, times: ArrayLike<number>, values: ArrayLike<any>},
        colorKeyframeTrack:{name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: THREE.InterpolationModes } ,
        numberKeyframeTrack:{name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: THREE.InterpolationModes} ,
        quaternionKeyframeTrack:{name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: THREE.InterpolationModes},
        stringKeyframeTrack: {name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: THREE.InterpolationModes}, 
        vectorKeyframeTrack:{name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: THREE.InterpolationModes},
        animationAction:{mixer: THREE.AnimationMixer, clip: THREE.AnimationClip, localRoot?: THREE.Object3D, blendMode?: THREE.AnimationBlendMode},
        animationClip: {name?: string, duration?: number, tracks?: THREE.KeyframeTrack[], blendMode?: THREE.AnimationBlendMode},
        animationMixer:{root: THREE.Object3D | THREE.AnimationObjectGroup} ,
        animationObjectGroup: {args: any[]},
        animationUtils: {},
        keyframeTrack:{name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: THREE.InterpolationModes},
        propertyBinding: {rootNode: any, path: string, parsedPath?: any},
        propertyMixer: {binding: any, typeName: string, valueSize: number},
        //audio
        audio: {listener: AudioListener},
        audioAnalyser: {audio: THREE.Audio<AudioNode>, fftSize?: number},
        // audioContext: {} , //namespace
        audioListener: {},
        positionalAudio: {listener: AudioListener},
        //Cameras
        arrayCamera: {cameras?: THREE.PerspectiveCamera[]},
        camera: {},
        cubeCamera: {near: number, far: number, renderTarget: THREE.WebGLCubeRenderTarget},
        orthographicCamera: {left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number},
        perspectiveCamera: {fov?: number, aspect?: number, near?: number, far?: number},
        stereoCamera: {},
        //core
        bufferAttribute: {array: THREE.TypedArray, itemSize: number, normalized?: boolean},
        bufferGeometry: {},
        clock: {autoStart?: boolean},
        eventDispatcher: {},
        glBufferAttribute: {buffer: WebGLBuffer, type: GLenum, itemSize: number, elementSize: 1 | 2 | 4, count: number},
        instancedBufferAttribute: {array: THREE.TypedArray, itemSize: number, normalized?: boolean, meshPerAttribute?: number},
        instancedBufferGeometry: {},
        instancedInterleavedBuffer: {array: THREE.TypedArray, stride: number, meshPerAttribute?: number},
        interleavedBuffer: {array: THREE.TypedArray, stride: number},
        interleavedBufferAttribute: {interleavedBuffer: THREE.InterleavedBuffer, itemSize: number, offset: number, normalized?: boolean},
        layers: {},
        object3D: {},
        raycaster: {origin?: THREE.Vector3, direction?: THREE.Vector3, near?: number, far?: number},
        renderTarget: {width?: number, height?: number, options?: THREE.RenderTargetOptions},
        uniform: {value: any},
        uniformsGroup: {},
        //extras
        curve: {},
        curvePath: {},
        // interpolations: [], functions
        path: {points?: THREE.Vector2[]},
        shape: {points?: THREE.Vector2[]},
        shapePath: {},
        arcCurve: {  aX?: number, aY?: number, aRadius?: number, aStartAngle?: number, aEndAngle?: number, aClockwise?: boolean},
        catmullRomCurve3: {points?: THREE.Vector3[], closed?: boolean, curveType?: THREE.CurveType, tension?: number},
        cubicBezierCurve: {v0?: THREE.Vector2, v1?: THREE.Vector2, v2?: THREE.Vector2, v3?: THREE.Vector2},
        cubicBezierCurve3: {v0?: THREE.Vector3, v1?: THREE.Vector3, v2?: THREE.Vector3, v3?: THREE.Vector3},
        // curves: [], IMPORTS
        ellipseCurve: { aX?: number, aY?: number, xRadius?: number, yRadius?: number, aStartAngle?: number, aEndAngle?: number, aClockwise?: boolean, aRotation?: number},
        lineCurve: {v1?: THREE.Vector2, v2?: THREE.Vector2},
        lineCurve3: {v1?: THREE.Vector3, v2?: THREE.Vector3},
        quadraticBezierCurve: {v0?: THREE.Vector2, v1?: THREE.Vector2, v2?: THREE.Vector2},
        quadraticBezierCurve3: {v0?: THREE.Vector3, v1?: THREE.Vector3, v2?: THREE.Vector3},
        splineCurve: {points?: THREE.Vector2[]},
        // dataUtils: [], FUNCTIONS
        // earcut: [], FUNCTIONS
        // imageUtils: [], FUNCTIONS
        pMREMGenerator: {renderer: THREE.WebGLRenderer},
        // shapeUtils: [], FUNCTIONS
        //geometries
        boxGeometry: { width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number},
        capsuleGeometry:{radius?: number, length?: number, capSegments?: number, radialSegments?: number},
        circleGeometry: {radius?: number, segments?: number, thetaStart?: number, thetaLength?: number},
        coneGeometry: { radius?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number},
        cylinderGeometry: { radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number},
        dodecahedronGeometry: {radius?: number, detail?: number},
        edgesGeometry: {geometry?: THREE.BufferGeometry | null, thresholdAngle?: number},
        extrudeGeometry: {shapes?: THREE.Shape | THREE.Shape[], options?: THREE.ExtrudeGeometryOptions},
        // geometries: [], IMPORTS
        icosahedronGeometry: {radius?: number, detail?: number},
        latheGeometry: {points?: THREE.Vector2[], segments?: number, phiStart?: number, phiLength?: number},
        octahedronGeometry: {radius?: number, detail?: number},
        planeGeometry: {width?: number, height?: number, widthSegments?: number, heightSegments?: number},
        polyhedronGeometry: {vertices?: number[], indices?: number[], radius?: number, detail?: number},
        ringGeometry: { innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number},
        shapeGeometry: {shapes?: THREE.Shape | THREE.Shape[], curveSegments?: number},
        sphereGeometry: { radius?: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number},
        tetrahedronGeometry: {radius?: number, detail?: number},
        torusGeometry: {radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number},
        torusKnotGeometry: { radius?: number, tube?: number, tubularSegments?: number, radialSegments?: number, p?: number, q?: number},
        tubeGeometry: { path?: THREE.Curve<THREE.Vector3>, tubularSegments?: number, radius?: number, radialSegments?: number, closed?: boolean},
        wireframeGeometry: {geometry?: THREE.BufferGeometry},
        //helpers
        arrowHelper: { dir?: THREE.Vector3, origin?: THREE.Vector3, length?: number, color?: THREE.ColorRepresentation, headLength?: number, headWidth?: number},
        axesHelper:{size?: number},
        box3Helper: {box: THREE.Box3, color?: THREE.Color},
        boxHelper: {object: THREE.Object3D, color?: THREE.ColorRepresentation},
        cameraHelper: {camera: THREE.Camera},
        directionalLightHelper: {light: THREE.DirectionalLight, size?: number, color?: THREE.ColorRepresentation},
        gridHelper: {size?: number, divisions?: number, color1?: THREE.ColorRepresentation, color2?: THREE.ColorRepresentation},
        hemisphereLightHelper: {light: THREE.HemisphereLight, size: number, color?: THREE.ColorRepresentation},
        planeHelper: {plane: THREE.Plane, size?: number, hex?: number},
        pointLightHelper: {light: THREE.PointLight, sphereSize?: number, color?: THREE.ColorRepresentation},
        polarGridHelper: {radius?: number,radials?: number,circles?: number,divisions?: number,color1?: THREE.ColorRepresentation,color2?: THREE.ColorRepresentation},
        skeletonHelper: {object: THREE.SkinnedMesh | THREE.Object3D},
        spotLightHelper:{light: THREE.Light, color?: THREE.ColorRepresentation},
        //light
        ambientLight: {color?: THREE.ColorRepresentation, intensity?: number},
        ambientLightProbe: {color?: THREE.ColorRepresentation, intensity?: number},
        directionalLight: {color?: THREE.ColorRepresentation, intensity?: number},
        directionalLightShadow: {},
        hemisphereLight:{skyColor?: THREE.ColorRepresentation, groundColor?: THREE.ColorRepresentation, intensity?: number},
        hemisphereLightProbe: {skyColor?: THREE.ColorRepresentation, groundColor?: THREE.ColorRepresentation, intensity?: number},
        light: {color?: THREE.ColorRepresentation, intensity?: number},
        lightProbe: {sh?: THREE.SphericalHarmonics3, intensity?: number},
        lightShadow: {camera: THREE.Camera},
        pointLight: {color?: THREE.ColorRepresentation, intensity?: number, distance?: number, decay?: number},
        // pointLightShadow: [], no constructor
        rectAreaLight: {color?: THREE.ColorRepresentation, intensity?: number, width?: number, height?: number},
        spotLight: { color?: THREE.ColorRepresentation, intensity?: number, distance?: number, angle?: number, penumbra?: number, decay?: number},
        // spotLightShadow: [], no constructor
        //loaders
        animationLoader: {manager?: THREE.LoadingManager},
        audioLoader: {manager?: THREE.LoadingManager},
        bufferGeometryLoader: {manager?: THREE.LoadingManager},
        // cache: [], namespace
        compressedTextureLoader: {manager?: THREE.LoadingManager},
        cubeTextureLoader: {manager?: THREE.LoadingManager},
        dataTextureLoader: {manager?: THREE.LoadingManager},
        fileLoader: {manager?: THREE.LoadingManager},
        imageBitmapLoader: {manager?: THREE.LoadingManager},
        imageLoader: {manager?: THREE.LoadingManager},
        loader: {manager?: THREE.LoadingManager},
        // loaderUtils: [], interface
        loadingManager: { 
            onLoad?: () => void,
            onProgress?: (url: string, loaded: number, total: number) => void,
            onError?: (url: string) => void
        },
        materialLoader: {manager?: THREE.LoadingManager},
        objectLoader: {manager?: THREE.LoadingManager},
        textureLoader: {manager?: THREE.LoadingManager},
        //material
        lineBasicMaterial: {parameters?: THREE.LineBasicMaterialParameters},
        lineDashedMaterial: {parameters?: THREE.LineDashedMaterialParameters},
        material: {},
        // materials: [], imports
        meshBasicMaterial: {parameters?: THREE.MeshBasicMaterialParameters},
        meshDepthMaterial: {parameters?: THREE.MeshDepthMaterialParameters},
        meshDistanceMaterial: {parameters?: THREE.MeshDistanceMaterialParameters},
        meshLambertMaterial: {parameters?: THREE.MeshLambertMaterialParameters},
        meshMatcapMaterial:{parameters?: THREE.MeshMatcapMaterialParameters},
        meshNormalMaterial: {parameters?: THREE.MeshNormalMaterialParameters},
        meshPhongMaterial: {parameters?: THREE.MeshPhongMaterialParameters},
        meshPhysicalMaterial: {parameters?: THREE.MeshPhysicalMaterialParameters},
        meshStandardMaterial: {parameters?: THREE.MeshStandardMaterialParameters},
        meshToonMaterial: {parameters?: THREE.MeshToonMaterialParameters},
        pointsMaterial: {parameters?: THREE.PointsMaterialParameters},
        rawShaderMaterial: {parameters?: THREE.ShaderMaterialParameters},
        shaderMaterial: {parameters?: THREE.ShaderMaterialParameters},
        shadowMaterial: {parameters?: THREE.ShadowMaterialParameters},
        spriteMaterial: {parameters?: THREE.SpriteMaterialParameters},
        //math
        cubicInterpolant: {parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any},
        discreteInterpolant: {parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any},
        linearInterpolant: {parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any},
        quaternionLinearInterpolant: {parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any},
        box2: {min?: THREE.Vector2, max?: THREE.Vector2},
        box3: {min?: THREE.Vector3, max?: THREE.Vector3},
        color: [{color?: THREE.ColorRepresentation}, {r: number, g: number, b: number}],
        // colorManagement: [], //namespace
        cylindrical: {radius?: number, theta?: number, y?: number},
        euler: {x?: number, y?: number, z?: number, order?: THREE.EulerOrder},
        frustum: {p0?: THREE.Plane, p1?: THREE.Plane, p2?: THREE.Plane, p3?: THREE.Plane, p4?: THREE.Plane, p5?: THREE.Plane},
        interpolant: {parameterPositions: any, sampleValues: any, sampleSize: number, resultBuffer?: any},
        line3: {start?: THREE.Vector3, end?: THREE.Vector3},
        // mathUtils: [], //functions
        matrix3: {},
        matrix4: {},
        plane: {normal?: THREE.Vector3, constant?: number},
        quaternion: {x?: number, y?: number, z?: number, w?: number},
        ray:{origin?: THREE.Vector3, direction?: THREE.Vector3},
        sphere: {center?: THREE.Vector3, radius?: number},
        spherical: {radius?: number, phi?: number, theta?: number},
        sphericalHarmonics3: {},
        triangle: {a?: THREE.Vector3, b?: THREE.Vector3, c?: THREE.Vector3},
        vector2:{x?: number, y?: number},
        vector3: {x?: number, y?: number, z?: number},
        vector4: {x?: number, y?: number, z?: number, w?: number},
        //objects
        bone: {},
        group: {},
        instancedMesh: {geometry: THREE.BufferGeometry | undefined, material: THREE.Material | undefined, count: number},
        line: {geometry?: THREE.BufferGeometry, material?: THREE.Material},
        lineLoop: {geometry?: THREE.BufferGeometry, material?: THREE.Material},
        lineSegments: {geometry?: THREE.BufferGeometry, material?: THREE.Material},
        LOD: {},
        mesh: {geometry?: THREE.BufferGeometry, material?: THREE.Material},
        points: {geometry?: THREE.BufferGeometry, material?: THREE.Material},
        skeleton: {bones?: THREE.Bone[], boneInverses?: THREE.Matrix4[]},
        skinnedMesh: {geometry?: THREE.BufferGeometry, material?: THREE.Material, useVertexTexture?: boolean},
        sprite: {material?: THREE.SpriteMaterial},
        //renderers
        // shaderChunk:,
        // shaderLib:,
        // uniformsLib:,
        // uniformsUtils:,
        //webgl
        webGLAttributes: {gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: THREE.WebGLCapabilities},
        webGLBindingStates: {gl: WebGLRenderingContext,extensions: THREE.WebGLExtensions,attributes: THREE.WebGLAttributes ,capabilities: THREE.WebGLCapabilities},
        webGLBufferRenderer: {gl: WebGLRenderingContext,extensions: THREE.WebGLExtensions,info: THREE.WebGLInfo,capabilities: THREE.WebGLCapabilities},
        webGLCapabilities: {gl: WebGLRenderingContext, extensions: any, parameters: THREE.WebGLCapabilitiesParameters},
        webGLClipping: {properties: THREE.WebGLProperties},
        webGlCubeMaps: {renderer: THREE.WebGLRenderer},
        webGLCubeUVMaps: {renderer: THREE.WebGLRenderer},
        webGLExtensions: {gl: WebGLRenderingContext},
        webGLGeometries: {gl: WebGLRenderingContext, attributes: WebGLAttributes, info: THREE.WebGLInfo},
        webGLIndexedBufferRenderer: {gl: WebGLRenderingContext, extensions: any, info: any, capabilities: any},
        webGLInfo: {gl: WebGLRenderingContext},
        webGLLights: {extensions: THREE.WebGLExtensions, capabilities: THREE.WebGLCapabilities},
        webGLObjects: {gl: WebGLRenderingContext, geometries: any, attributes: any, info: any},
        webGLPrograms: {renderer: THREE.WebGLRenderer, cacheKey: string, parameters: object},
        webGlProperties: {},
        webGLRenderLists: {properties: THREE.WebGLProperties},
        // webGLShaders:[],function
        webGlShadowMap: {_renderer: THREE.WebGLRenderer, _objects: THREE.WebGLObjects, _capabilities: THREE.WebGLCapabilities},
        webGLState: {},
        webGLTextures: { gl: WebGLRenderingContext, extensions: THREE.WebGLExtensions, state: THREE.WebGLState, properties: THREE.WebGLProperties, capabilities: THREE.WebGLCapabilities, utils: THREE.WebGLUtils, info: THREE.WebGLInfo},
        webGLUniforms: {gl: WebGLRenderingContext, program: WebGLProgram},
        // webGLUniformsGroups: {}, function
        webGLUtils: {gl: WebGLRenderingContext | WebGL2RenderingContext, extensions: any, capabilities: any},
        webXRController: {},
        webXRManager: {renderer: any, gl: WebGLRenderingContext},
        webGL1Renderer: {parameters?: THREE.WebGLRendererParameters},
        webGL3DRenderTarget: {width?: number, height?: number, depth?: number},
        webGLArrayRenderTarget:{width?: number, height?: number, depth?: number},
        webGLCubeRenderTarget:{size?: number, options?: THREE.WebGLRenderTargetOptions},
        webGLMultipleRenderTarget: {width?: number, height?: number, count?: number, options?: THREE.WebGLRenderTargetOptions},
        webGLRenderer: {parameters?: THREE.WebGLRendererParameters},
        webGLRenderTarget: {width?: number, height?: number, options?: THREE.RenderTargetOptions},
        //scenes
        fog: {color: THREE.ColorRepresentation, near?: number, far?: number},
        fogExp2: {color: THREE.ColorRepresentation, density?: number},
        scene: {},
        //textures
        canvasTexture: { canvas: TexImageSource | OffscreenCanvas, mapping?: THREE.Mapping, wrapS?: THREE.Wrapping, wrapT?: THREE.Wrapping, magFilter?: THREE.MagnificationTextureFilter, minFilter?: THREE.MinificationTextureFilter, format?: THREE.PixelFormat, type?: THREE.TextureDataType, anisotropy?: number},
        compressedArrayTexture: {mipmaps: ImageData[],width: number,height: number,depth: number,format: THREE.CompressedPixelFormat,type?: THREE.TextureDataType},
        compressedTexture: {mipmaps: ImageData[],width: number,height: number,format: THREE.CompressedPixelFormat,type?: THREE.TextureDataType,mapping?: THREE.Mapping,wrapS?: THREE.Wrapping,wrapT?: THREE.Wrapping,magFilter?: THREE.MagnificationTextureFilter,minFilter?: THREE.MinificationTextureFilter,anisotropy?: number,colorSpace?: THREE.ColorSpace},
        cubeTexture: {
            images?: any[], // HTMLImageElement or HTMLCanvasElement
            mapping?: THREE.CubeTextureMapping,
            wrapS?: THREE.Wrapping,
            wrapT?: THREE.Wrapping,
            magFilter?: THREE.MagnificationTextureFilter,
            minFilter?: THREE.MinificationTextureFilter,
            format?: THREE.PixelFormat,
            type?: THREE.TextureDataType,
            anisotropy?: number,
            colorSpace?: THREE.ColorSpace,
        },
        data3DTexture: {data?: BufferSource | null, width?: number, height?: number, depth?: number},
        dataArrayTexture: {data?: BufferSource, width?: number, height?: number, depth?: number},
        dataTexture:{data?: BufferSource | null,width?: number,height?: number,format?: THREE.PixelFormat,type?: THREE.TextureDataType,mapping?: THREE.Mapping,wrapS?: THREE.Wrapping,wrapT?: THREE.Wrapping,magFilter?: THREE.MagnificationTextureFilter,minFilter?: THREE.MinificationTextureFilter,anisotropy?: number,colorSpace?: THREE.ColorSpace},
        depthTexture: {  width: number,height: number,type?: THREE.TextureDataType,mapping?: THREE.Mapping,wrapS?: THREE.Wrapping,wrapT?: THREE.Wrapping,magFilter?: THREE.MagnificationTextureFilter,minFilter?: THREE.MinificationTextureFilter,anisotropy?: number,format?: THREE.DeepTexturePixelFormat,},
        framebufferTexture: {width: number, height: number},
        source: {data: any},
        texture: {image?: TexImageSource | OffscreenCanvas,mapping?: THREE.Mapping,wrapS?: THREE.Wrapping,wrapT?: THREE.Wrapping,magFilter?: THREE.MagnificationTextureFilter,minFilter?: THREE.MinificationTextureFilter,format?: THREE.PixelFormat,type?: THREE.TextureDataType,anisotropy?: number,colorSpace?: THREE.ColorSpace},
        // types:[],
        videoTexture: {
            video: HTMLVideoElement,
            mapping?: THREE.Mapping,
            wrapS?: THREE.Wrapping,
            wrapT?: THREE.Wrapping,
            magFilter?: THREE.MagnificationTextureFilter,
            minFilter?: THREE.MinificationTextureFilter,
            format?: THREE.PixelFormat,
            type?: THREE.TextureDataType,
            anisotropy?: number,
        },
}

export type ConstructorParametersIndices<T extends new (...args: any) => any> =
    T extends new (...args: infer P) => any ? { [K in keyof P]: K } : never;

export type constructorsA = {
    scene: ConstructorParameters<typeof THREE.Scene>,
    mesh: ConstructorParameters<typeof THREE.Mesh>,
    perspectiveCamera: ConstructorParameters<typeof THREE.PerspectiveCamera>,
    boxGeometry: ConstructorParameters<typeof THREE.BoxGeometry>,
    meshToonMaterial: ConstructorParameters<typeof THREE.MeshToonMaterial>
    webGLRenderer: ConstructorParameters<typeof THREE.WebGLRenderer>,
    canvas3D: ConstructorParameters<typeof Canvas3D>
    
}

export type constructorsB = {
    scene: ConstructorParametersIndices<typeof THREE.Scene>,
    mesh: ConstructorParametersIndices<typeof THREE.Mesh>,
    perspectiveCamera: ConstructorParametersIndices<typeof THREE.PerspectiveCamera>,
    boxGeometry: ConstructorParametersIndices<typeof THREE.BoxGeometry>,
    meshToonMaterial: ConstructorParametersIndices<typeof THREE.MeshToonMaterial>,
    webGLRenderer: ConstructorParametersIndices<typeof THREE.WebGLRenderer>,
    canvas3D: ConstructorParametersIndices<typeof Canvas3D>

}
//@ts-ignore
export type ArgsArray<K extends keyof constructorsA> = { [P in constructorsB[K][number]as P]: constructorsA[K][P] }

export type Wrapper<T, K extends keyof constructorsA> = { ref?: JSX.Refs<T>, children?: JSX.Child, args?: ArgsArray<K> } & cons[K] & Partial<Omit<T, 'children'>>
