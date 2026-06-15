/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_effects_parallaxbarrier

import { $, $$, useEffect, useFrame } from '@woby/three'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/objects/SphereGeometry'

/**
 * Port of webgl_effects_parallaxbarrier from Three.js examples.
 * Demonstrates parallax barrier stereoscopic effect (auto-stereoscopic display).
 *
 * Source: https://threejs.org/examples/webgl_effects_parallaxbarrier.html
 */

export const EffectsParallaxBarrier = () => {
    const meshRef = $<THREE.Mesh>()
    const effectRef = $<THREE.ParallaxBarrierEffect>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer) return

        // Create parallax barrier effect
        const effect = new THREE.ParallaxBarrierEffect(renderer)
        effect.setSize(window.innerWidth, window.innerHeight)
        effectRef(effect)

        // Handle window resize
        const handleResize = () => {
            const camera = $$(cameraRef)
            if (camera) {
                camera.aspect = window.innerWidth / window.innerHeight
                camera.updateProjectionMatrix()
            }
            effect.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    useFrame(() => {
        const effect = $$(effectRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        const mesh = $$(meshRef)

        if (effect && scene && camera) {
            if (mesh) {
                const time = performance.now() * 0.001
                mesh.rotation.y = time * 0.3
            }
            effect.render(scene, camera)
        }
    })

    return (
        <>
            <webGLRenderer ref={rendererRef} antialias setPixelRatio={[window.devicePixelRatio]} />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                {/* Main torus knot */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1.5, 0.5, 64, 8]} />
                    <meshStandardMaterial color={0x3498db} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Surrounding cubes for depth perception */}
                {Array.from({ length: 15 }).map((_, i) => {
                    const theta = (i / 15) * Math.PI * 2
                    const radius = 5
                    return (
                        <mesh key={i} position={[Math.cos(theta) * radius, (Math.random() - 0.5) * 4, Math.sin(theta) * radius]}>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial color={0xe74c3c} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera ref={cameraRef} fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 10]} />
        </>
    )
}

export default EffectsParallaxBarrier