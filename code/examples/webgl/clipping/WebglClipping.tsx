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
 * Port of webgl_clipping from Three.js examples.
 * Demonstrates clipping planes on 3D objects.
 *
 * Source: https://threejs.org/examples/webgl_clipping.html
 */

export const WebglClipping = () => {
    const meshRef = $<THREE.Mesh>()
    const planeRef = $<THREE.Mesh>()

    // Create clipping plane - must be created before use
    const clippingPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        const plane = $$(planeRef)
        if (mesh) {
            mesh.rotation.x = time * 0.2
            mesh.rotation.y = time * 0.3
        }
        // Update clipping plane position
        clippingPlane.constant = Math.sin(time) * 0.5
        if (plane) {
            plane.position.z = clippingPlane.constant
        }
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
                <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />

                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshPhongMaterial
                        color={0xff6b6b}
                        clippingPlanes={[clippingPlane]}
                        clipShadows={true}
                        side={DoubleSide}
                    />
                </mesh>

                {/* Clipping plane visualizer */}
                <mesh ref={planeRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                    <boxGeometry args={[4, 4, 0.01]} />
                    <meshStandardMaterial color={0x4ecdc4} transparent opacity={0.3} side={DoubleSide} />
                </mesh>

                {/* Ground plane */}
                <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[20, 20, 0.1]} />
                    <meshStandardMaterial color={0x222222} />
                </mesh>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[5, 5, 8]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglClipping