/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Raycaster, Vector2 } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_raycaster from Three.js examples.
 * Demonstrates raycasting for object picking.
 *
 * Source: https://threejs.org/examples/webgl_raycaster.html
 */

export const Raycaster = () => {
    const spheresRef = $<THREE.Group>()
    const raycaster = new THREE.Raycaster()
    const mouse = new Vector2()
    const lineRef = $<THREE.Line>()

    const handlePointerMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    useFrame((state) => {
        const camera = state.camera
        const group = $$(spheresRef)
        
        if (!camera || !group) return

        // Update raycaster
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects(group.children)

        // Reset all materials
        group.children.forEach((child: any) => {
            if (child.material) {
                child.material.color.setHex(0x4ecdc4)
            }
        })

        // Highlight intersected object
        if (intersects.length > 0) {
            const obj = intersects[0].object
            if (obj.material) {
                obj.material.color.setHex(0xff6b6b)
            }
        }
    })

    // Create spheres
    const createSpheres = () => {
        const spheres = []
        for (let i = 0; i < 50; i++) {
            const x = (Math.random() - 0.5) * 20
            const y = (Math.random() - 0.5) * 20
            const z = (Math.random() - 0.5) * 20
            
            spheres.push(
                <mesh key={i} position={[x, y, z]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshBasicMaterial color={0x4ecdc4} />
                </mesh>
            )
        }
        return spheres
    }

    return (
        <canvas3D onPointerMove={handlePointerMove}>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <group ref={spheresRef}>
                    {createSpheres()}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 15]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Raycaster