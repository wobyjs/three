/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_effects_ascii

import { $, $$, useEffect, useFrame } from '@woby/three'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_effects_ascii from Three.js examples.
 * Demonstrates ASCII art rendering effect.
 *
 * Source: https://threejs.org/examples/webgl_effects_ascii.html
 *
 * Key features:
 * - AsciiEffect for rendering 3D scene as ASCII art
 * - TrackballControls for camera interaction
 * - Animated sphere and plane
 * - Point lights for shading
 */

export const WebglEffectsAscii = () => {
    const sphereRef = $<THREE.Mesh>()
    const effectRef = $<THREE.AsciiEffect>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const containerRef = $<HTMLElement>()
    const start = Date.now()

    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer) return

        // Create ASCII effect
        const effect = new THREE.AsciiEffect(renderer, ' .:-+*=%@#', { invert: true })
        effect.setSize(window.innerWidth, window.innerHeight)
        effect.domElement.style.color = 'white'
        effect.domElement.style.backgroundColor = 'black'
        effectRef(effect)

        // Hide the original WebGL canvas and show the ASCII effect DOM element
        renderer.domElement.style.display = 'none'
        const container = $$(containerRef)
        if (container) {
            container.appendChild(effect.domElement)
        }

        // Handle window resize
        const handleResize = () => {
            const camera = $$(cameraRef)
            if (camera) {
                camera.aspect = window.innerWidth / window.innerHeight
                camera.updateProjectionMatrix()
            }
            renderer.setSize(window.innerWidth, window.innerHeight)
            effect.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            if (container && effect.domElement.parentNode === container) {
                container.removeChild(effect.domElement)
            }
        }
    })

    useFrame(() => {
        const effect = $$(effectRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        const sphere = $$(sphereRef)

        if (effect && scene && camera) {
            const timer = Date.now() - start

            if (sphere) {
                sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150
                sphere.rotation.x = timer * 0.0003
                sphere.rotation.z = timer * 0.0002
            }

            effect.render(scene, camera)
        }
    })

    return (
        <>
            <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }} />
            <webGLRenderer ref={rendererRef} />
            <scene ref={sceneRef} background={new THREE.Color(0x000000)}>
                <pointLight color={0xffffff} intensity={3} position={[500, 500, 500]} />
                <pointLight color={0xffffff} intensity={1} position={[-500, -500, -500]} />

                {/* Main sphere */}
                <mesh ref={sphereRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[200, 20, 10]} />
                    <meshPhongMaterial flatShading />
                </mesh>

                {/* Floor plane */}
                <mesh position={[0, -200, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[400, 400]} />
                    <meshBasicMaterial color={0xe0e0e0} />
                </mesh>
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={70}
                aspect={window.innerWidth / window.innerHeight}
                near={1}
                far={1000}
                position={[0, 150, 500]}
            />
        </>
    )
}

export default WebglEffectsAscii
