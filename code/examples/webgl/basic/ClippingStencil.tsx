/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Plane, Vector3 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/TorusKnotGeometry'
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
 * Demonstrates stencil-based clipping effects.
 *
 * Source: https://threejs.org/examples/webgl_clipping_stencil.html
 */

export const ClippingStencil = () => {
    // Create clipping planes for stencil effect
    const clipPlane = new Plane(new Vector3(0, 1, 0), 0)

    const meshRef = $<THREE.Mesh>()
    const stencilMeshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        // Animate clip plane
        clipPlane.constant = Math.sin(time) * 0.8
        
        // Rotate mesh
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.3
            mesh.rotation.x = time * 0.2
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                localClippingEnabled={true}
                stencil
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} castShadow />

                {/* Torus knot with stencil clipping */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.4, 100, 16]} />
                    <meshPhongMaterial
                        color={0xff6b6b}
                        clippingPlanes={[clipPlane]}
                        clipShadows
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Stencil visualization plane */}
                <mesh ref={stencilMeshRef} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[4, 4]} />
                    <meshStandardMaterial
                        color={0x4ecdc4}
                        transparent
                        opacity={0.5}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 3, 5]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default ClippingStencil