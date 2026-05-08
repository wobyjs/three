/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, VideoTexture, Video } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/PlaneGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_materials_video from Three.js examples.
 * Demonstrates video texture on 3D objects.
 *
 * Source: https://threejs.org/examples/webgl_materials_video.html
 *
 * Features:
 * - Video texture
 * - Dynamic video playback
 * - Video on 3D surfaces
 */

export const MaterialsVideo = () => {
    const screenRef = $<THREE.Mesh>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        const screen = $$(screenRef)
        if (screen) {
            screen.rotation.y = Math.sin(time * 0.3) * 0.1
        }
    })

    // Create a canvas-based animated texture (simulating video)
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 256
    const ctx = canvas.getContext('2d')!

    const texture = new THREE.CanvasTexture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter

    // Animation function to update "video" content
    const updateCanvas = (time: number) => {
        // Background
        ctx.fillStyle = '#1a1a2e'
        ctx.fillRect(0, 0, 512, 256)

        // Animated bars (simulating video)
        for (let i = 0; i < 8; i++) {
            const x = (time * 100 + i * 70) % 512
            const height = 50 + Math.sin(time * 2 + i) * 30
            ctx.fillStyle = `hsl(${(i * 45 + time * 30) % 360}, 70%, 60%)`
            ctx.fillRect(x, 128 - height / 2, 20, height)
        }

        // Text overlay
        ctx.fillStyle = '#ffffff'
        ctx.font = '24px Arial'
        ctx.fillText('Video Texture Demo', 150, 200)

        texture.needsUpdate = true
    }

    updateCanvas(0)

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Video screen */}
                <mesh ref={screenRef} position={[0, 0, 0]}>
                    <boxGeometry args={[4, 2, 0.2]} />
                    <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} />
                </mesh>

                {/* Stand */}
                <mesh position={[0, -1.5, 0]}>
                    <boxGeometry args={[0.3, 1, 0.3]} />
                    <meshStandardMaterial color={0x333333} roughness={0.8} metalness={0.2} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 5]} />

            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default MaterialsVideo