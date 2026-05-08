/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, CanvasTexture, RepeatWrapping, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_texture_canvas from Three.js examples.
 * Demonstrates canvas-based texture generation.
 *
 * Source: https://threejs.org/examples/webgl_texture_canvas.html
 *
 * Key features:
 * - CanvasTexture for dynamic textures
 * - Procedural texture generation
 * - Real-time texture updates
 */

export const TextureCanvas = () => {
    const textureRef = $<THREE.CanvasTexture>()
    const meshRef = $<THREE.Mesh>()
    const canvasRef = $<HTMLCanvasElement>()

    useEffect(() => {
        // Create canvas for texture
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 512
        canvasRef(canvas)

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Draw gradient pattern
        const gradient = ctx.createLinearGradient(0, 0, 512, 512)
        gradient.addColorStop(0, '#ff6b6b')
        gradient.addColorStop(0.5, '#4ecdc4')
        gradient.addColorStop(1, '#ffe66d')

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 512, 512)

        // Add pattern
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.lineWidth = 2
        for (let i = 0; i < 512; i += 32) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, 512)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(512, i)
            ctx.stroke()
        }

        // Create texture from canvas
        const texture = new CanvasTexture(canvas)
        texture.wrapS = RepeatWrapping
        texture.wrapT = RepeatWrapping
        textureRef(texture)
    })

    useFrame(({ clock }) => {
        const canvas = $$(canvasRef)
        const texture = $$(textureRef)
        const time = clock.getElapsedTime()

        if (canvas && texture) {
            const ctx = canvas.getContext('2d')
            if (!ctx) return

            // Clear and redraw with animated pattern
            ctx.fillStyle = '#1a1a2e'
            ctx.fillRect(0, 0, 512, 512)

            // Animated circles
            for (let i = 0; i < 5; i++) {
                const x = 256 + Math.cos(time + i * 1.2) * 150
                const y = 256 + Math.sin(time * 1.3 + i * 1.2) * 150
                const radius = 30 + Math.sin(time * 2 + i) * 10

                ctx.beginPath()
                ctx.arc(x, y, radius, 0, Math.PI * 2)
                ctx.fillStyle = `hsl(${(i * 60 + time * 50) % 360}, 70%, 60%)`
                ctx.fill()
            }

            texture.needsUpdate = true
        }

        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.y += 0.005
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
            />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Box with canvas texture */}
                <mesh ref={meshRef} position={[0, 0.5, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial
                        map={$$(textureRef)}
                        roughness={0.5}
                        metalness={0.3}
                    />
                </mesh>

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={0x333344} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[4, 3, 4]}
            />
            <orbitControls target={[0, 0.5, 0]} enableDamping />
        </canvas3D>
    )
}

export default TextureCanvas
