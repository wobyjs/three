/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shadows from Three.js examples.
 * Demonstrates various shadow types.
 *
 * Source: https://threejs.org/examples/webgl_shadows.html
 */

export const Shadows = () => {
    const boxRef = $<THREE.Mesh>()
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        const box = $$(boxRef)
        if (box) {
            box.rotation.x = time * 0.5
            box.rotation.y = time * 0.3
        }

        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.position.x = Math.sin(time) * 3
            sphere.position.z = Math.cos(time) * 3
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias shadowMap setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight 
                    position={[5, 10, 5]} 
                    intensity={1} 
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-near={0.1}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

                {/* Rotating box */}
                <mesh ref={boxRef} position={[0, 1, 0]} castShadow>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                {/* Moving sphere */}
                <mesh ref={sphereRef} position={[3, 0.5, 0]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>

                {/* Shadow casting pillars */}
                <mesh position={[-5, 1, -5]} castShadow receiveShadow>
                    <boxGeometry args={[1, 2, 1]} />
                    <meshStandardMaterial color={0x9b59b6} />
                </mesh>

                <mesh position={[5, 1, -5]} castShadow receiveShadow>
                    <boxGeometry args={[1, 2, 1]} />
                    <meshStandardMaterial color={0x3498db} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 10]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Shadows