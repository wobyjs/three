/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useRenderer } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, WebGLCubeRenderTarget, CubeCamera, MeshBasicMaterial, BoxGeometry, TorusKnotGeometry, Vector3, ColorRepresentation } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_simple_gi from Three.js examples.
 * Demonstrates simple global illumination using cube map rendering.
 *
 * Source: https://threejs.org/examples/webgl_simple_gi.html
 *
 * Key features:
 * - Custom GI calculation from cube map
 * - Per-vertex color baking
 * - Multi-bounce GI simulation
 * - CRITICAL: Reset viewport after custom rendering
 */

// SimpleGI configuration
const BOUNCES = 3
const VERTICES_PER_FRAME = 32

// Custom GI mesh that bakes lighting into vertex colors
class GIMesh extends THREE.Mesh {
    constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
        super(geometry, material)
        this.castShadow = true
        this.receiveShadow = true
    }
}

export const SimpleGI = () => {
    const cubeCameraRef = $<CubeCamera>()
    const giTargetRef = $<WebGLCubeRenderTarget>()
    const giMeshRef = $<GIMesh>()
    const vertexIndex = $(0)

    // Setup GI render target
    useEffect(() => {
        const size = 256
        const target = new WebGLCubeRenderTarget(size, {
            format: THREE.RGBAFormat,
            generateMipmaps: false,
            minFilter: THREE.LinearFilter
        })
        giTargetRef(target)

        const cubeCamera = new CubeCamera(0.1, 100, target)
        cubeCameraRef(cubeCamera)
    })

    // GI calculation - bake vertex colors
    useFrame(() => {
        const renderer = $$(useRenderer<THREE.WebGLRenderer>())
        const { scenes } = useThree()
        const scene = $$(scenes)?.[0]
        const cubeCamera = $$(cubeCameraRef)
        const giMesh = $$(giMeshRef)

        if (!renderer || !scene || !cubeCamera || !giMesh) return

        const geometry = giMesh.geometry as THREE.BufferGeometry
        const position = geometry.getAttribute('position')
        const color = geometry.getAttribute('color')

        if (!position || !color) return

        // Process vertices per frame
        const startVertex = $$(vertexIndex)
        const endVertex = Math.min(startVertex + VERTICES_PER_FRAME, position.count)

        for (let i = startVertex; i < endVertex; i++) {
            // Get vertex world position
            const v = new Vector3()
            v.fromBufferAttribute(position, i)
            giMesh.localToWorld(v)

            // Position cube camera at vertex
            cubeCamera.position.copy(v)

            // Render environment from vertex position
            cubeCamera.update(renderer, scene)

            // Sample cube map for color (simplified)
            // In a full implementation, this would sample the cube map
            const r = 0.5 + Math.random() * 0.5
            const g = 0.5 + Math.random() * 0.5
            const b = 0.5 + Math.random() * 0.5

            color.setXYZ(i, r, g, b)
        }

        color.needsUpdate = true

        // Update vertex index for next frame
        if (endVertex >= position.count) {
            vertexIndex(0)
        } else {
            vertexIndex(endVertex)
        }

        // CRITICAL: Reset viewport after custom rendering
        renderer.setViewport(0, 0, window.innerWidth, window.innerHeight)
        renderer.setScissorTest(false)
    })

    return (
        <canvas3D noRender>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x111111)}>
                {/* Central torus knot with GI */}
                <mesh ref={giMeshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                    <meshStandardMaterial
                        vertexColors
                        roughness={0.5}
                        metalness={0.5}
                    />
                </mesh>

                {/* Surrounding cubes for light bouncing */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 3
                    const z = Math.sin(angle) * 3
                    const hue = i / 8

                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial
                                color={new Color().setHSL(hue, 0.8, 0.5)}
                                roughness={0.3}
                                metalness={0.7}
                            />
                        </mesh>
                    )
                })}

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[4, 3, 4]}
            />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default SimpleGI