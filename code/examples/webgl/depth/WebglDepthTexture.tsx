/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_depth_texture

import { $, $$, useFrame, useEffect } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/InstancedMesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_depth_texture from Three.js examples.
 * Demonstrates depth texture rendering and visualization.
 *
 * Source: https://threejs.org/examples/webgl_depth_texture.html
 *
 * Key features:
 * - WebGLRenderTarget with depth texture
 * - Post-processing shader to visualize depth
 * - Instanced mesh for performance
 * - OrbitControls with damping
 */

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float cameraNear;
uniform float cameraFar;
uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
varying vec2 vUv;

float readDepth(sampler2D depthSampler, vec2 coord) {
    float fragCoordZ = texture2D(depthSampler, coord).x;
    float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
    return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);
}

void main() {
    vec3 color = texture2D(tDiffuse, vUv).rgb;
    float depth = readDepth(tDepth, vUv);
    gl_FragColor = vec4(color * 0.5 + vec3(depth) * 0.5, 1.0);
}
`

export const WebglDepthTexture = () => {
    const targetRef = $<THREE.WebGLRenderTarget>()
    const postMaterialRef = $<THREE.ShaderMaterial>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const postSceneRef = $<THREE.Scene>()
    const postCameraRef = $<THREE.OrthographicCamera>()

    useEffect(() => {
        // Create render target with depth texture
        const dpr = window.devicePixelRatio
        const target = new THREE.WebGLRenderTarget(window.innerWidth * dpr, window.innerHeight * dpr)
        target.texture.minFilter = THREE.NearestFilter
        target.texture.magFilter = THREE.NearestFilter
        target.texture.generateMipmaps = false
        target.stencilBuffer = false
        target.depthTexture = new THREE.DepthTexture()
        target.depthTexture.format = THREE.DepthFormat
        target.depthTexture.type = THREE.UnsignedShortType
        targetRef(target)

        // Create post-processing material
        const postMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                cameraNear: { value: 0.01 },
                cameraFar: { value: 50 },
                tDiffuse: { value: null },
                tDepth: { value: null }
            }
        })
        postMaterialRef(postMaterial)

        // Create post-processing scene
        const postScene = new THREE.Scene()
        const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
        const postPlane = new THREE.PlaneGeometry(2, 2)
        const postQuad = new THREE.Mesh(postPlane, postMaterial)
        postScene.add(postQuad)
        postSceneRef(postScene)
        postCameraRef(postCamera)

        // Handle window resize
        const handleResize = () => {
            const renderer = $$(rendererRef)
            const camera = $$(cameraRef)
            const target = $$(targetRef)
            if (renderer && camera && target) {
                const dpr = renderer.getPixelRatio()
                target.setSize(window.innerWidth * dpr, window.innerHeight * dpr)
                camera.aspect = window.innerWidth / window.innerHeight
                camera.updateProjectionMatrix()
                renderer.setSize(window.innerWidth, window.innerHeight)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    useFrame(() => {
        const renderer = $$(rendererRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        const target = $$(targetRef)
        const postScene = $$(postSceneRef)
        const postCamera = $$(postCameraRef)
        const postMaterial = $$(postMaterialRef)

        if (renderer && scene && camera && target && postScene && postCamera && postMaterial) {
            // Render scene into target
            renderer.setRenderTarget(target)
            renderer.render(scene, camera)

            // Render post FX
            postMaterial.uniforms.tDiffuse.value = target.texture
            postMaterial.uniforms.tDepth.value = target.depthTexture

            renderer.setRenderTarget(null)
            renderer.render(postScene, postCamera)
        }
    })

    // Create instanced mesh
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 64)
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
    const count = 50
    const scale = 5

    const mesh = new THREE.InstancedMesh(geometry, material, count)
    const dummy = new THREE.Object3D()

    for (let i = 0; i < count; i++) {
        const r = Math.random() * 2.0 * Math.PI
        const z = (Math.random() * 2.0) - 1.0
        const zScale = Math.sqrt(1.0 - z * z) * scale

        dummy.position.set(
            Math.cos(r) * zScale,
            Math.sin(r) * zScale,
            z * scale
        )
        dummy.rotation.set(Math.random(), Math.random(), Math.random())
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
    }

    return (
        <>
            <webGLRenderer ref={rendererRef} setPixelRatio={[window.devicePixelRatio]} />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <primitive object={mesh} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={70}
                aspect={window.innerWidth / window.innerHeight}
                near={0.01}
                far={50}
                position={[0, 0, 4]}
            />
            <orbitControls enableDamping />
        </>
    )
}

export default WebglDepthTexture
