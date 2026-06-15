/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Plane, Vector3, Raycaster, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/helpers/CameraHelper'

/**
 * Port of webgl_clipping_intersection from Three.js examples.
 * Demonstrates intersection-based clipping.
 *
 * Source: https://threejs.org/examples/webgl_clipping_intersection.html
 */

export const ClippingIntersection = () => {
    const meshRef = $<THREE.Mesh>()
    const raycaster = new Raycaster()
    const pointer = new Vector2()

    // Create clip plane for intersection
    const clipPlane = new Plane(new Vector3(0, 0, 1), 0)

    const handlePointerMove = (event: MouseEvent) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        // Animate clip plane
        clipPlane.constant = Math.sin(time * 0.5) * 0.3
        
        // Update mesh ref
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
        }
    })

    return (
        <canvas3D
            onPointerMove={handlePointerMove}
        >
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                localClippingEnabled={true}
            />
            <scene background={new Color(0x0d0d0d)}>

                {/* Intersected mesh */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial
                        color={0xff9500}
                        clippingPlanes={[clipPlane]}
                        clipShadows
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Visualization of clip plane */}
                <mesh position={[0, 0, 2]} rotation={[0, 0, 0]}>
                    <planeGeometry args={[5, 5]} />
                    <meshBasicMaterial
                        color={0x00ff00}
                        transparent
                        opacity={0.2}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[3, 3, 3]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ClippingIntersection
