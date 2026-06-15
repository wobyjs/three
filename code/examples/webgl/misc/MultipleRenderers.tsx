/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_multiple_renderers

import { $, $$, useEffect } from "woby"
import { useFrame, useThree, useRenderer } from '@woby/three'
import * as THREE from 'three'

export const MultipleRenderers = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Multiple renderers concept - split view
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0x00aaff })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Example for actual multiple renderers:
// Create two renderers for split-screen view
const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 })
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })

// Render same scene from different angles
renderer1.render(scene, camera1)
renderer2.render(scene, camera2)
*/