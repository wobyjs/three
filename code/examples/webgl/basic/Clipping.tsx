/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Plane } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
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
 * Demonstrates clipping planes.
 *
 * Source: https://threejs.org/examples/webgl_clipping.html
 */

export const Clipping = () => {
    const clipPlane = new Plane(new THREE.Vector3(0, 0, 1), 0)
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        // Animate clip plane
        clipPlane.constant = Math.sin(time) * 0.5
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
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Clipped sphere */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial
                        color={0xff6b6b}
                        clippingPlanes={[clipPlane]}
                        clipShadows
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Floor */}
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 2, 4]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Clipping