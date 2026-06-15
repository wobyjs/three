/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_rtt

import { $, $$, useEffect } from "woby"
import { useFrame, useThree, useRenderer } from '@woby/three'
import * as THREE from 'three'

export const RTT = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Render to texture - feedback effect
        const geometry = new THREE.PlaneGeometry(4, 4)

        // Create canvas texture
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 512
        const ctx = canvas.getContext('2d')!

        const texture = new THREE.CanvasTexture(canvas)

        const material = new THREE.MeshBasicMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        let frame = 0
        const animate = () => {
            requestAnimationFrame(animate)
            frame++

            // Draw feedback pattern
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, 512, 512)

            ctx.fillStyle = `hsl(${frame % 360}, 100%, 50%)`
            ctx.beginPath()
            ctx.arc(
                256 + Math.cos(frame * 0.05) * 100,
                256 + Math.sin(frame * 0.05) * 100,
                20,
                0,
                Math.PI * 2
            )
            ctx.fill()

            texture.needsUpdate = true
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
            texture.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Actual render-to-texture with WebGLRenderTarget:
const renderTarget = new THREE.WebGLRenderTarget(512, 512)

// Render scene to texture
renderer.setRenderTarget(renderTarget)
renderer.render(scene, camera)
renderer.setRenderTarget(null)

// Use texture in material
material.map = renderTarget.texture
*/