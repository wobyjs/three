/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_effects_stereo

import { $, $$, useEffect, useFrame } from '@woby/three'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/IcosahedronGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_effects_stereo from Three.js examples.
 * Demonstrates stereoscopic 3D rendering (side-by-side for VR devices).
 *
 * Source: https://threejs.org/examples/webgl_effects_stereo.html
 */

export const EffectsStereo = () => {
    const meshRef = $<THREE.Mesh>()
    const effectRef = $<THREE.StereoEffect>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer) return

        // Create stereo effect
        const effect = new THREE.StereoEffect(renderer)
        effect.setSize(window.innerWidth, window.innerHeight)
        effect.setEyeSeparation(0.64)
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
                mesh.rotation.y = time * 0.2
            }
            effect.render(scene, camera)
        }
    })

    return (
        <>
            <webGLRenderer ref={rendererRef} antialias setPixelRatio={[window.devicePixelRatio]} />
            <scene ref={sceneRef} background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                {/* Main icosahedron */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <icosahedronGeometry args={[2, 1]} />
                    <meshStandardMaterial color={0x2ecc71} flatShading />
                </mesh>

                {/* Background spheres for depth */}
                {Array.from({ length: 30 }).map((_, i) => {
                    const theta = (i / 30) * Math.PI * 2
                    const radius = 6 + Math.random() * 3
                    const x = Math.cos(theta) * radius
                    const z = Math.sin(theta) * radius
                    const y = (Math.random() - 0.5) * 6
                    return (
                        <mesh key={i} position={[x, y, z]}>
                            <sphereGeometry args={[0.2, 8, 8]} />
                            <meshStandardMaterial color={0xf1c40f} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera ref={cameraRef} fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 10]} />
        </>
    )
}

export default EffectsStereo