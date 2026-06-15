/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_effects_anaglyph

import { $, $$, useEffect, useFrame } from '@woby/three'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/geometries/SphereGeometry'

/**
 * Port of webgl_effects_anaglyph from Three.js examples.
 * Demonstrates anaglyph stereoscopic 3D effect (red/cyan glasses).
 *
 * Source: https://threejs.org/examples/webgl_effects_anaglyph.html
 */

export const EffectsAnaglyph = () => {
    const meshRef = $<THREE.Mesh>()
    const effectRef = $<THREE.AnaglyphEffect>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer) return

        // Create anaglyph effect
        const effect = new THREE.AnaglyphEffect(renderer, window.innerWidth, window.innerHeight)
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
                mesh.rotation.x = time * 0.3
                mesh.rotation.y = time * 0.5
            }
            effect.render(scene, camera)
        }
    })

    return (
        <>
            <webGLRenderer ref={rendererRef} antialias setPixelRatio={[window.devicePixelRatio]} />
            <scene ref={sceneRef} background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                {/* Main torus knot */}
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshStandardMaterial color={0x3498db} />
                </mesh>

                {/* Surrounding spheres for depth perception */}
                {Array.from({ length: 50 }).map((_, i) => {
                    const x = (Math.random() - 0.5) * 10
                    const y = (Math.random() - 0.5) * 10
                    const z = (Math.random() - 0.5) * 10
                    return (
                        <mesh key={i} position={[x, y, z]}>
                            <sphereGeometry args={[0.1, 8, 8]} />
                            <meshStandardMaterial color={0xe74c3c} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera ref={cameraRef} fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 8]} />
        </>
    )
}

export default EffectsAnaglyph