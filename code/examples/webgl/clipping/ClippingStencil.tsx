/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, DoubleSide } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_clipping_stencil from Three.js examples.
 * Demonstrates stencil-based clipping.
 *
 * Source: https://threejs.org/examples/webgl_clipping_stencil.html
 */

export const ClippingStencil = () => {
    const groupRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const group = $$(groupRef)
        if (group) {
            group.rotation.y = time * 0.3
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
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />

                <group ref={groupRef}>
                    {/* Object with stencil clipping */}
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[1.5, 32, 32]} />
                        <meshPhongMaterial
                            color={0xe74c3c}
                            clippingPlanes={[new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)]}
                            clipShadows={true}
                        />
                    </mesh>

                    {/* Stencil visualizer */}
                    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                        <boxGeometry args={[3, 3, 0.1]} />
                        <meshStandardMaterial
                            color={0x3498db}
                            transparent
                            opacity={0.4}
                            side={DoubleSide}
                        />
                    </mesh>

                    {/* Additional objects clipped */}
                    <mesh position={[2, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshPhongMaterial
                            color={0x2ecc71}
                            clippingPlanes={[new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0)]}
                        />
                    </mesh>

                    <mesh position={[-2, 0, 0]}>
                        <cylinderGeometry args={[0.5, 0.5, 1.5, 16]} />
                        <meshPhongMaterial
                            color={0xf1c40f}
                            clippingPlanes={[new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)]}
                        />
                    </mesh>
                </group>
            </scene>

            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[4, 4, 6]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ClippingStencil