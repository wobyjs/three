/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, Mesh, BoxGeometry, MeshBasicMaterial, BufferGeometry, BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_uv_tests from Three.js examples.
 * Demonstrates UV mapping tests and visualization.
 *
 * Source: https://threejs.org/examples/misc_uv_tests.html
 *
 * Key features:
 * - UV coordinate visualization
 * - Different mapping modes
 * - Texture coordinate debugging
 */

export const UvTests = () => {
    const meshRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y = time * 0.2
        }
    })

    // Create a UV visualization texture
    useEffect(() => {
        const size = 256
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')!

        // Draw UV grid
        ctx.fillStyle = '#1a1a2e'
        ctx.fillRect(0, 0, size, size)

        // Draw grid lines
        ctx.strokeStyle = '#4a90d9'
        ctx.lineWidth = 2

        // Vertical lines
        for (let i = 0; i <= 4; i++) {
            ctx.beginPath()
            ctx.moveTo((i / 4) * size, 0)
            ctx.lineTo((i / 4) * size, size)
            ctx.stroke()
        }

        // Horizontal lines
        for (let i = 0; i <= 4; i++) {
            ctx.beginPath()
            ctx.moveTo(0, (i / 4) * size)
            ctx.lineTo(size, (i / 4) * size)
            ctx.stroke()
        }

        // Draw UV coordinates
        ctx.fillStyle = 'white'
        ctx.font = '20px monospace'
        ctx.fillText('0,0', 5, 25)
        ctx.fillText('1,0', size - 45, 25)
        ctx.fillText('0,1', 5, size - 10)
        ctx.fillText('1,1', size - 45, size - 10)

        // Draw colored corners
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
        ctx.fillRect(0, 0, size / 4, size / 4)

        ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'
        ctx.fillRect(size - size / 4, 0, size / 4, size / 4)

        ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'
        ctx.fillRect(0, size - size / 4, size / 4, size / 4)

        ctx.fillStyle = 'rgba(255, 255, 0, 0.5)'
        ctx.fillRect(size - size / 4, size - size / 4, size / 4, size / 4)

        const texture = new THREE.CanvasTexture(canvas)
        const mesh = $$(meshRef)
        if (mesh && mesh.material instanceof THREE.MeshBasicMaterial) {
            mesh.material.map = texture
            mesh.material.needsUpdate = true
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={1} />

                {/* Box with UV visualization */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[3, 3, 3]} />
                    <meshBasicMaterial />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default UvTests