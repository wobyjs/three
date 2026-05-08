/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, TextureLoader, NormalBlending } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_normalmap from Three.js examples.
 * Demonstrates normal mapping for surface detail.
 *
 * Source: https://threejs.org/examples/webgl_materials_normalmap.html
 *
 * Features:
 * - Normal mapping
 * - Tangent-space normals
 * - Surface detail without geometry
 */

export const MaterialsNormalmap = () => {
    const sphereRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const sphere = $$(sphereRef)
        if (sphere) {
            sphere.rotation.y = time * 0.2
        }
    })

    // Create procedural normal map
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!

    // Create normal map pattern (bump pattern)
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const cx = x % 32 - 16
            const cy = y % 32 - 16
            const dist = Math.sqrt(cx * cx + cy * cy)

            let r = 128, g = 128, b = 255
            if (dist < 14) {
                const factor = (14 - dist) / 14
                r = 128 + cx * factor * 4
                g = 128 + cy * factor * 4
                b = 255 - factor * 50
            }

            ctx.fillStyle = `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`
            ctx.fillRect(x, y, 1, 1)
        }
    }

    const normalMap = new THREE.CanvasTexture(canvas)
    normalMap.wrapS = THREE.RepeatWrapping
    normalMap.wrapT = THREE.RepeatWrapping
    normalMap.repeat.set(4, 4)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Sphere with normal map */}
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <meshStandardMaterial
                        color={0x4ecdc4}
                        roughness={0.5}
                        metalness={0.5}
                        normalMap={normalMap}
                        normalScale={new THREE.Vector2(1, 1)}
                    />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsNormalmap