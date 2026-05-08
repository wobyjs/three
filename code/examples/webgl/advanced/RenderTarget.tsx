/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame, useThree, useRenderer } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, WebGLRenderTarget, Mesh, BoxGeometry, SphereGeometry, MeshBasicMaterial, WebGLRenderer } from 'three'
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
 * Port of webgl_advanced_rendertarget from Three.js examples.
 * Demonstrates render to texture technique.
 *
 * Source: https://threejs.org/examples/webgl_advanced_rendertarget.html
 *
 * Key features:
 * - WebGLRenderTarget for off-screen rendering
 * - Texture feedback loop
 * - CRITICAL: Reset viewport after custom rendering
 */

export const RenderTarget = () => {
    const renderTargetRef = $<WebGLRenderTarget>()
    const quadMeshRef = $<Mesh>()
    const cubeMeshRef = $<Mesh>()

    useEffect(() => {
        const size = 512
        const target = new WebGLRenderTarget(size, size, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        })
        renderTargetRef(target)
    })

    useFrame(({ clock }) => {
        const renderer = $$(useRenderer<WebGLRenderer>())
        const renderTarget = $$(renderTargetRef)
        const cubeMesh = $$(cubeMeshRef)

        if (!renderer || !renderTarget || !cubeMesh) return

        // Rotate cube
        cubeMesh.rotation.x = clock.getElapsedTime() * 0.5
        cubeMesh.rotation.y = clock.getElapsedTime() * 0.7

        // Render to target
        renderer.setRenderTarget(renderTarget)
        renderer.clear()

        // Render cube scene (simplified - would need separate scene)
        renderer.render(cubeMesh.parent as THREE.Scene, renderer.xr.getCamera())

        // Reset to main render target
        renderer.setRenderTarget(null)

        // CRITICAL: Reset viewport after custom rendering
        renderer.setViewport(0, 0, window.innerWidth, window.innerHeight)
        renderer.setScissorTest(false)
    })

    const renderTarget = $$(renderTargetRef)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x111111)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Main scene - quad showing render target texture */}
                <mesh ref={quadMeshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[3, 3, 3]} />
                    <meshBasicMaterial map={renderTarget?.texture} />
                </mesh>

                {/* Source cube for render target */}
                <mesh ref={cubeMeshRef} position={[0, 0, -10]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default RenderTarget