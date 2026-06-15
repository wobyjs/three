/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_effects_ascii

import { $, $$, useEffect, useFrame } from '@woby/three'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_effects_ascii from Three.js examples.
 * Demonstrates ASCII art rendering effect.
 *
 * Source: https://threejs.org/examples/webgl_effects_ascii.html
 */

export const EffectsAscii = () => {
    const meshRef = $<THREE.Mesh>()
    const effectRef = $<THREE.AsciiEffect>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()
    const containerRef = $<HTMLElement>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer) return

        // Create ASCII effect
        const effect = new THREE.AsciiEffect(renderer, ' .:-=+*#%@', {
            invert: true,
            resolution: 0.15,
            scale: 1.0,
            color: false,
            alpha: false,
            block: true
        })
        effect.setSize(window.innerWidth, window.innerHeight)
        effect.domElement.style.backgroundColor = '#000'
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
        const mesh = $$(meshRef)

        if (effect && scene && camera) {
            if (mesh) {
                const time = performance.now() * 0.001
                mesh.rotation.x = time * 0.2
                mesh.rotation.y = time * 0.3
            }
            effect.render(scene, camera)
        }
    })

    return (
        <>
            <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }} />
            <webGLRenderer ref={rendererRef} antialias setPixelRatio={[window.devicePixelRatio]} />
            <scene ref={sceneRef} background={new Color(0x000000)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                {/* Main sphere */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 16, 16]} />
                    <meshStandardMaterial color={0xffffff} flatShading />
                </mesh>

                {/* Additional objects */}
                <mesh position={[-3, 0, 0]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color={0xcccccc} flatShading />
                </mesh>

                <mesh position={[3, 0, 0]}>
                    <torusGeometry args={[1, 0.4, 8, 16]} />
                    <meshStandardMaterial color={0xaaaaaa} flatShading />
                </mesh>
            </scene>

            <perspectiveCamera ref={cameraRef} fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 8]} />
        </>
    )
}

export default EffectsAscii