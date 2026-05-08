/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useRenderer } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, WebGLCubeRenderTarget, CubeCamera, Mesh, BoxGeometry, SphereGeometry, MeshBasicMaterial, WebGLRenderer } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_rendertarget_cube from Three.js examples.
 * Demonstrates cube render target for dynamic reflections.
 *
 * Source: https://threejs.org/examples/webgl_advanced_rendertarget_cube.html
 *
 * Key features:
 * - WebGLCubeRenderTarget for cubemap rendering
 * - CubeCamera for 6-face capture
 * - Dynamic environment mapping
 */

export const RenderTargetCube = () => {
    const cubeCameraRef = $<CubeCamera>()
    const renderTargetRef = $<WebGLCubeRenderTarget>()
    const centerSphereRef = $<Mesh>()

    useEffect(() => {
        const size = 256
        const target = new WebGLCubeRenderTarget(size, {
            format: THREE.RGBAFormat,
            generateMipmaps: true,
            minFilter: THREE.LinearMipmapLinearFilter
        })
        renderTargetRef(target)

        const cubeCamera = new CubeCamera(0.1, 100, target)
        cubeCameraRef(cubeCamera)
    })

    useFrame(({ clock }) => {
        const renderer = $$(useRenderer<WebGLRenderer>())
        const { scenes } = useThree()
        const scene = $$(scenes)?.[0]
        const cubeCamera = $$(cubeCameraRef)
        const centerSphere = $$(centerSphereRef)

        if (!renderer || !scene || !cubeCamera || !centerSphere) return

        // Update cube camera
        cubeCamera.update(renderer, scene)

        // Rotate center sphere
        centerSphere.rotation.x = clock.getElapsedTime() * 0.3
        centerSphere.rotation.y = clock.getElapsedTime() * 0.5

        // CRITICAL: Reset viewport after custom rendering
        renderer.setViewport(0, 0, window.innerWidth, window.innerHeight)
        renderer.setScissorTest(false)
    })

    const renderTarget = $$(renderTargetRef)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Center sphere with dynamic cubemap reflection */}
                <mesh ref={centerSphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        envMap={renderTarget?.texture}
                        metalness={1}
                        roughness={0}
                    />
                </mesh>

                {/* Surrounding colored spheres for reflection */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = (i / 8) * Math.PI * 2
                    const x = Math.cos(angle) * 3
                    const z = Math.sin(angle) * 3
                    const hue = i / 8

                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <sphereGeometry args={[0.3, 16, 16]} />
                            <meshBasicMaterial color={new Color().setHSL(hue, 0.8, 0.5)} />
                        </mesh>
                    )
                })}

                {/* Floor */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default RenderTargetCube