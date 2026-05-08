/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CanvasTexture } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_texture_canvas from Three.js examples.
 * Demonstrates using canvas as a texture source.
 *
 * Source: https://threejs.org/examples/webgl_materials_texture_canvas.html
 *
 * Features:
 * - Canvas texture
 * - Dynamic texture updates
 * - 2D drawing on 3D objects
 */

export const MaterialsTextureCanvas = () => {
    const cubeRef = $<THREE.Mesh>()
    const canvasTexture = $<THREE.CanvasTexture>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const cube = $$(cubeRef)
        if (cube) {
            cube.rotation.y = time * 0.3
            cube.rotation.x = time * 0.2
        }

        // Update canvas texture
        const tex = $$(canvasTexture)
        if (tex) {
            tex.needsUpdate = true
        }
    })

    // Create dynamic canvas texture
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')!

    // Draw on canvas
    const drawCanvas = (time: number) => {
        ctx.fillStyle = '#1a1a2e'
        ctx.fillRect(0, 0, 256, 256)

        // Animated circles
        for (let i = 0; i < 5; i++) {
            const x = 128 + Math.cos(time + i) * 60
            const y = 128 + Math.sin(time * 1.5 + i) * 60
            ctx.beginPath()
            ctx.arc(x, y, 20, 0, Math.PI * 2)
            ctx.fillStyle = `hsl(${(i * 60 + time * 50) % 360}, 70%, 60%)`
            ctx.fill()
        }
    }

    drawCanvas(0)
    const tex = new THREE.CanvasTexture(canvas)
    canvasTexture(tex)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Cube with canvas texture */}
                <mesh ref={cubeRef}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial map={tex} roughness={0.5} metalness={0.3} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsTextureCanvas