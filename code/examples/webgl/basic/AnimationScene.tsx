/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/TorusGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_animation_scene from Three.js examples.
 * Animated scene with multiple rotating objects.
 *
 * Source: https://threejs.org/examples/webgl_animation_scene.html
 */

export const AnimationScene = () => {
    const boxRef = $<THREE.Mesh>()
    const sphereRef = $<THREE.Mesh>()
    const torusRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const box = $$(boxRef)
        const sphere = $$(sphereRef)
        const torus = $$(torusRef)

        if (box) {
            box.rotation.x = time * 0.5
            box.rotation.y = time * 0.3
            box.position.y = Math.sin(time) * 0.5
        }

        if (sphere) {
            sphere.position.x = Math.cos(time) * 2
            sphere.position.z = Math.sin(time) * 2
        }

        if (torus) {
            torus.rotation.x = time * 0.2
            torus.rotation.z = time * 0.4
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Central rotating box */}
                <mesh ref={boxRef} position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0xff6b6b} roughness={0.3} metalness={0.7} />
                </mesh>

                {/* Orbiting sphere */}
                <mesh ref={sphereRef} position={[2, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Rotating torus */}
                <mesh ref={torusRef} position={[0, 0, 0]}>
                    <torusGeometry args={[2, 0.1, 16, 100]} />
                    <meshStandardMaterial color={0xffe66d} roughness={0.4} metalness={0.6} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 5]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default AnimationScene