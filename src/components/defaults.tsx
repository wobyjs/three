import {
    //@ts-ignore
    BoxGeometry, LineBasicMaterial, LineDashedMaterial, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshStandardMaterial, MeshLambertMaterial,
    //@ts-ignore
    MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshToonMaterial, PointsMaterial, RawShaderMaterial, ShaderMaterial,
    //@ts-ignore
    ShadowMaterial, SpriteMaterial,
    //@ts-ignore
    SphericalHarmonics3, Plane,
    Vector3,
} from "three"
import * as THREE from 'three'


/** Default constructor params */
const p = {

    //Animation
    //Animation / Tracks
    //Audio
    //Cameras
    perspectiveCamera: { fov: 50, aspect: 1, near: 0.1, far: 2000 },
    orthographicCamera: { left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 2000 },
    //Constants
    //Core
    bufferAttribute: {},
    bufferGeometry: {},
    clock: { autoStart: true },
    eventDispatcher: {},
    glBufferAttribute: {},
    instancedBufferAttribute: { meshPerAttribute: 1 },
    instancedBufferGeometry: {},
    instancedInterleavedBuffer: { meshPerAttribute: 1 },
    interleavedBuffer: {},
    interleavedBufferAttribute: {},
    layers: {},
    object3D: {},
    raycaster: { near: 0, far: Infinity },
    uniform: {},
    //Extras / Core
    //Extras / Curves
    arcCurve: {},
    catmullRomCurve3: { closed: false, curveType: 'centripetal', tension: 0.5, },
    cubicBezierCurve: {},
    cubicBezierCurve3: {},
    ellipseCurve: { aX: 0, aY: 0, xRadius: 1, yRadius: 1, aStartAngle: 0, aEndAngle: 2 * Math.PI, aClockwise: false, aRotation: 0, },
    lineCurve: {},
    lineCurve3: {},
    quadraticBezierCurve: {},
    quadraticBezierCurve3: {},
    splineCurve: {},

    //Geometries
    boxGeometry: { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 },
    capsuleGeometry: { radius: 1, length: 1, capSegments: 4, radialSegments: 8, },
    circleGeometry: { radius: 1, segments: 32, thetaStart: 0, thetaLength: 2 * Math.PI, },
    coneGeometry: { radius: 1, height: 1, radialSegments: 32, heightSegments: 1, openEnded: false, thetaStart: 0, thetaLength: 2 * Math.PI, },
    cylinderGeometry: { radiusTop: 1, radiusBottom: 1, height: 1, radialSegments: 32, heightSegments: 1, openEnded: false, thetaStart: 0, thetaLength: 2 * Math.PI, },
    dodecahedronGeometry: { radius: 1, detail: 0, },
    edgesGeometry: { thresholdAngle: 1 },
    extrudeGeometry: { curveSegments: 12, steps: 1, depth: 1, bevelEnabled: true, bevelThickness: 2, bevelSize: 1, bevelOffset: 0.1, bevelSegments: 3, },
    icosahedronGeometry: { radius: 1, detail: 0, },
    latheGeometry: { points: [[0, -0.5], [0.5, 0], [0, 0.5]], segments: 12, phiStart: 0, phiLength: 2 * Math.PI, },
    octahedronGeometry: { radius: 1, detail: 0, },
    planeGeometry: { width: 1, height: 1, widthSegments: 1, heightSegments: 1, },
    polyhedronGeometry: {},
    ringGeometry: { innerRadius: 0.5, outerRadius: 1, thetaSegments: 32, phiSegments: 1, thetaStart: 0, thetaLength: Math.PI * 2, },
    shapeGeometry: { curveSegments: 12 },
    sphereGeometry: { radius: 1, widthSegments: 32, heightSegments: 16, phiStart: 0, phiLength: Math.PI * 2, thetaStart: 0, thetaLength: Math.PI, },
    tetrahedronGeometry: { radius: 1, detail: 0 },
    torusGeometry: { tube: 0.4, radialSegments: 12, tubularSegments: 48, arc: Math.PI * 2, },
    torusKnotGeometry: { radius: 1, tube: 0.4, tubularSegments: 64, radialSegments: 8, p: 2, q: 3, },
    tubeGeometry: { tubularSegments: 64, radius: 1, radialSegments: 8, closed: false, },
    wireframeGeometry: {},

    //Helpers
    arrowHelper: { length: 1, color: 16776960, get headLength() { return 0.2 * this.length }, get headWidth() { return 0.2 * this.headLength }, },
    axesHelper: { size: 1 },
    boxHelper: { color: 16776960 },
    box3Helper: { color: 16776960 },
    cameraHelper: {},
    directionalLightHelper: { size: 1 },
    gridHelper: { size: 10, divisions: 10, colorCenterLine: 4473924, colorGrid: 8947848, },
    polarGridHelper: { radius: 10, sectors: 16, rings: 8, divisions: 64, color1: 4473924, color2: 8947848, },
    hemisphereLightHelper: {},
    planeHelper: { size: 1, color: 16776960 },
    pointLightHelper: { sphereSize: 1 },
    skeletonHelper: {},
    spotLightHelper: {},

    //Lights
    ambientLight: { color: 16777215, intensity: 1 },
    directionalLight: { color: 16777215, intensity: 1 },
    hemisphereLight: { skyColor: 16777215, groundColor: 16777215, intensity: 1 },
    light: { color: 16777215, intensity: 1 },
    lightProbe: { /* sh: () => new SphericalHarmonics3(), */ intensity: 1 },
    pointLight: { color: 16777215, intensity: 1, distance: 0, decay: 2 },
    rectAreaLight: { color: 16777215, intensity: 1, width: 10, height: 10 },
    spotLight: { color: 16777215, intensity: 1, distance: 0, angle: Math.PI / 3, penumbra: 0, decay: 2, },

    // Lights / Shadows
    lightShadow: {},
    pointLightShadow: {},
    directionalLightShadow: {},
    spotLightShadow: {},

    //Loader
    //Materials
    lineBasicMaterial: { parameters: null /* () => new LineBasicMaterial() */ },
    lineDashedMaterial: { parameters: null /* () => new LineDashedMaterial() */ },
    meshBasicMaterial: { parameters: null /* () => new MeshBasicMaterial() */ },
    meshDepthMaterial: { parameters: null /* () => new MeshDepthMaterial() */ },
    meshDistanceMaterial: { parameters: null /* () => new MeshDistanceMaterial() */ },
    meshLambertMaterial: { parameters: null /* () => new MeshLambertMaterial() */ },
    meshMatcapMaterial: { parameters: null /* () => new MeshMatcapMaterial() */ },
    meshNormalMaterial: { parameters: null /* () => new MeshNormalMaterial() */ },
    meshPhongMaterial: { parameters: null /* () => new MeshPhongMaterial() */ },
    meshPhysicalMaterial: { parameters: null /* () => new MeshPhysicalMaterial() */ },
    meshStandardMaterial: { parameters: null /* () => new MeshStandardMaterial() */ },
    meshToonMaterial: { parameters: null /* () => new MeshToonMaterial() */ },
    pointsMaterial: { parameters: null /* () => new PointsMaterial() */ },
    rawShaderMaterial: { parameters: null /* () => new RawShaderMaterial() */ },
    shaderMaterial: { parameters: null /* () => new ShaderMaterial() */ },
    shadowMaterial: { parameters: null /* () => new ShadowMaterial() */ },
    spriteMaterial: { parameters: null /* () => new SpriteMaterial() */ },

    //Math
    box2: {},
    box3: {},
    color: {},
    cylindrical: { radius: 0, theta: 0, y: 0, },
    euler: { x: 0, y: 0, z: 0, order: 'XYZ' },
    frustum: {
        //p0: () => new Plane(), p1: () => new Plane(), p2: () => new Plane(), p3: () => new Plane(), p4: () => new Plane(), p5: () => new Plane(), 
    },
    interpolant: {},
    line3: {
        //start: () => new Vector3(0, 0, 0), end: () => new Vector3(0, 0, 0), 
    },
    mathUtils: {},
    matrix3: {},
    matrix4: {},
    plane: { normal: new Vector3(1, 0, 0), constant: 0 },
    quaternion: {},
    ray: {
        //origin: () => new Vector3(0, 0, 0), direction: () => new Vector3(0, 0, -1) 
    },
    sphere: {
        // center: () => new Vector3(0, 0, 0), radius: -1 
    },
    spherical: { radius: 1, phi: 0, theta: 0 },
    sphericalHarmonics3: {},
    triangle: {
        //a: () => new Vector3(0, 0, 0), b: () => new Vector3(0, 0, 0), c: () => new Vector3(0, 0, 0) 
    },
    vector2: { x: 0, y: 0 },
    vector3: { x: 0, y: 0, z: 0 },
    vector4: { x: 0, y: 0, z: 0, w: 0 },

    //Math / Interpolants
    cubicInterpolant: { points: null },
    discreteInterpolant: {
        // func: THREE.ParametricGeometries.klein,
        slices: 8,
        stacks: 8,
    },
    linearInterpolant: {},
    quaternionLinearInterpolant: {},

    //Objects
    batchedMesh: {},
    bone: {},
    group: {},
    instancedMesh: {},
    line: {},
    lineLoop: {},
    lineSegments: {},
    lod: {},
    mesh: { /* geometry: () => new BoxGeometry(), material: () => new MeshBasicMaterial() */ },
    points: {},
    skeleton: {},
    skinnedMesh: {},
    sprite: {},


    // Renderers
    webGlRenderer: { /* parameters: () => new WebGLRenderer() */ },
    webGlRenderTarget: { width: 1, height: 1 },
    webGl3dRenderTarget: { width: 1, height: 1, depth: 1 },
    webGlArrayRenderTarget: { width: 1, height: 1, depth: 1 },
    webGlCubeRenderTarget: { size: 1 },

    // Scenes
    fog: {},
    fogExp2: {},
    scene: {},

    // Textures
    canvasTexture: {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearMipmapLinearFilter,
        type: THREE.UnsignedByteType,
        anisotropy: 1
    },
    compressedTexture: {
        type: THREE.UnsignedByteType,
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearMipmapLinearFilter,
        anisotropy: 1,
        colorSpace: THREE.NoColorSpace,
    },
    compressedArrayTexture: { type: THREE.UnsignedByteType },
    cubeTexture: { mapping: THREE.CubeReflectionMapping },
    data3dTexture: {},
    dataArrayTexture: {
        name: '', mapping: THREE.UVMapping,
        //wrapS: THREE.ClampToEdgeWrapping, magFilter: THREE.NearestFilter,
        wrapS: THREE.NearestFilter, magFilter: THREE.NearestFilter,
        anisotropy: 1, format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType, rotation: 0,
        /* center: () => new Vector2(0, 0), */ generateMipmaps: true, premultiplyAlpha: false, flipY: true,
        unpackAlignment: 4, userData: {},
    },
    dataTexture: {
        wrapS: THREE.NearestFilter, magFilter: THREE.NearestFilter,
        name: '', mapping: THREE.UVMapping,
        anisotropy: 1, format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType, rotation: 0,
        //center: () => new Vector2(0, 0),
        generateMipmaps: true, premultiplyAlpha: false, flipY: true,
        unpackAlignment: 4, userData: {},
    },
    depthTexture: {
        type: THREE.UnsignedIntType,
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        magFilter: THREE.NearestFilter,
        minFilter: THREE.NearestFilter,
        anisotropy: 1,
        format: THREE.DepthFormat,
    },
    framebufferTexture: {},
    source: { data: null },
    texture: {
        name: '', mapping: THREE.UVMapping,
        wrapS: THREE.ClampToEdgeWrapping, magFilter: THREE.NearestFilter,
        anisotropy: 1, format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType, rotation: 0,
        // center: () => new Vector2(0, 0),
        generateMipmaps: true, premultiplyAlpha: false, flipY: true,
        unpackAlignment: 4, userData: {},
    },
    videoTexture: {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType,
        anisotropy: 1,
    },

    //Addons
    //Animations
    ccdikSolver: {},
    mmdAnimationHelper: { params: { sync: true, afterglow: 0, resetPhysicsOnLoop: true, pmxAnimation: false } },
    mmdPhysics: {
        params: {
            unitStep: 1 / 65,
            maxStepNum: 3,
            // gravity: () => new Vector3(0, -9.8 * 10, 0)
        }
    },

    //Controls
    arcballControls: { camera: null, domElement: null, scene: null },
    dragControls: { objects: null, camera: null, domElement: null },
    firstPersonControls: { object: null, domElement: null },
    flyControls: { object: null, domElement: null },
    mapControls: { object: null, domElement: null },
    orbitControls: { object: null, domElement: null, enableDamping: false },
    pointerLockControls: { object: null, domElement: null },
    trackballControls: { object: null, domElement: null },
    transformControls: { object: null, domElement: null },

    // Geometries
    convexGeometry: {},
    decalGeometry: {},
    decalVertex: {},
    parametricGeometry: {},
    textGeometry: {
        text: "default", parameters: {
            size: 100,
            depth: 50,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 3,
        }
    },
    sdfFGeometryGenerator: {},

    // Helpers
    lightProbeHelper: {},
    positionalAudioHelper: {},
    rectAreaLightHelper: {},
    vertexNormalsHelper: { size: 1, color: 16711680 },
    vertexTangentsHelper: { size: 1, color: 65535 },

    // Lights
    lightProbeGenerator: {},

    // Loaders
    // d3MLoader: { manager: THREE.DefaultLoadingManager },
    rhino3dmLoader: { manager: THREE.DefaultLoadingManager },
    dracoLoader: { manager: THREE.DefaultLoadingManager },
    fontLoader: { manager: THREE.DefaultLoadingManager },
    gltfLoader: { manager: THREE.DefaultLoadingManager },
    ktx2Loader: { manager: THREE.DefaultLoadingManager },
    lDrawLoader: { manager: THREE.DefaultLoadingManager },
    lut3dlLoader: { manager: THREE.DefaultLoadingManager },
    lutCubeLoader: { manager: THREE.DefaultLoadingManager },
    mmdLoader: { manager: THREE.DefaultLoadingManager },
    mtlLoader: { manager: THREE.DefaultLoadingManager },
    objLoader: { manager: THREE.DefaultLoadingManager },
    pcdLoader: { manager: THREE.DefaultLoadingManager },
    pdbLoader: { manager: THREE.DefaultLoadingManager },
    svgLoader: { manager: THREE.DefaultLoadingManager },
    tgaLoader: { manager: THREE.DefaultLoadingManager },

    // Objects
    lensflare: {},

    // Post-Processing
    effectComposer: {},

    // Exporters
    dracoExporter: {
        options: {
            decodeSpeed: 5,
            encodeSpeed: 5,
            // encoderMethod: DRACOExporter.MESH_EDGEBREAKER_ENCODING,
            quantization: [16, 8, 8, 8, 8],
            exportUvs: true,
            exportNormals: true,
            exportColor: false,
        }
    },
    exrExporter: {
        options: {
            type: THREE.HalfFloatType,
            // compression: ZIP_COMPRESSION
        }
    },
    gLtfExporter: {
        options: {
            trs: false,
            onlyVisible: true,
            binary: false,
            maxTextureSize: Infinity,
            includeCustomExtensions: false,
        }
    },
    objExporter: {},
    plyExporter: {
        options: {
            excludeAttributes: [],
            binary: false
        }
    },
    stlExporter: { optoins: { binary: false } },

    //Math
    lut: { colormap: 'rainbow', count: 32 },
    meshSurfaceSampler: {},
    obb: {},

    //Misc
    timer: {},

    // ConvexHull
    face: {},
    halfEdge: {},
    convexHull: {},
    vertexNode: {},
    vertexList: {},

    // Renderers
    css2dRenderer: {},
    css3dRenderer: {},
    svgRenderer: {},

    // Utils
    bufferGeometryUtils: { negateSign: true },
    cameraUtils: {},
    // sceneUtils: {},
    // skeletonUtils: {},
    // WebXR
    xrEstimatedLight: { environmentEstimation: true },
}


declare global {
    interface Window {
        __$$defaults$$__: typeof p
    }
}

if (!window.__$$defaults$$__)
    window.__$$defaults$$__ = p
    
export const defaults = window.__$$defaults$$__