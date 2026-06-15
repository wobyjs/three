/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, DoubleSide } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/TorusKnotGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhysicalMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_clipping_advanced from Three.js examples.
 * Demonstrates advanced clipping with multiple planes.
 *
 * Source: https://threejs.org/examples/webgl_clipping_advanced.html
 */

export const WebglClippingAdvanced = () => {
    const meshRef = $<THREE.Group>()
    const planes = [
        new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    ]

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(meshRef)
        if (group) {
            group.rotation.y = time * 0.1
            group.rotation.x = Math.sin(time * 0.5) * 0.2
        }
        // Animate clipping plane constants
        planes[0].constant = Math.sin(time) * 0.5
        planes[1].constant = Math.cos(time * 0.7) * 0.5
        planes[2].constant = Math.sin(time * 0.5) * 0.5
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                localClippingEnabled={true}
            />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 10]} intensity={0.8} />

                <group ref={meshRef}>
                    {/* Main object with multiple clipping planes */}
                    <mesh position={[0, 0, 0]}>
                        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                        <meshPhysicalMaterial
                            color={0x3498db}
                            metalness={0.1}
                            roughness={0.2}
                            clippingPlanes={planes}
                            clipShadows={true}
                        />
                    </mesh>

                    {/* Wireframe overlay */}
                    <mesh position={[0, 0, 0]}>
                        <torusKnotGeometry args={[1.01, 0.301, 128, 32]} />
                        <meshStandardMaterial
                            color={0xffffff}
                            wireframe
                            transparent
                            opacity={0.15}
                            clippingPlanes={planes}
                        />
                    </mesh>

                    {/* Clipping plane visualizers */}
                    {[0, 1, 2].map((i) => (
                        <mesh key={i} position={[0, 0, 0]} rotation={i === 0 ? [0, Math.PI / 2, 0] : i === 1 ? [Math.PI / 2, 0, 0] : [0, 0, 0]}>
                            <planeGeometry args={[4, 4]} />
                            <meshStandardMaterial
                                color={i === 0 ? 0xff6b6b : i === 1 ? 0x4ecdc4 : 0xf1c40f}
                                transparent
                                opacity={0.2}
                                side={DoubleSide}
                            />
                        </mesh>
                    ))}
                </group>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[4, 4, 4]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglClippingAdvanced