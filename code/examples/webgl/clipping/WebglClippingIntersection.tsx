/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, DoubleSide } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_clipping_intersection from Three.js examples.
 * Demonstrates clipping plane intersections.
 *
 * Source: https://threejs.org/examples/webgl_clipping_intersection.html
 */

export const WebglClippingIntersection = () => {
    const meshRef = $<THREE.Mesh>()
    const planes = [
        new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
    ]

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x = time * 0.15
            mesh.rotation.y = time * 0.2
        }
        // Animate clipping planes
        planes[0].constant = Math.sin(time * 0.5) * 0.3
        planes[1].constant = Math.cos(time * 0.3) * 0.3
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                localClippingEnabled={true}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={0.8} />

                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshPhongMaterial
                        color={0x9b59b6}
                        clippingPlanes={planes}
                        clipIntersection={true}
                        side={DoubleSide}
                    />
                </mesh>

                {/* Plane visualizers */}
                <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <boxGeometry args={[5, 5, 0.01]} />
                    <meshStandardMaterial color={0xff6b6b} transparent opacity={0.2} side={DoubleSide} />
                </mesh>
                <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[5, 5, 0.01]} />
                    <meshStandardMaterial color={0x4ecdc4} transparent opacity={0.2} side={DoubleSide} />
                </mesh>

                {/* Ground */}
                <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglClippingIntersection