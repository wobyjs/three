/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_smaa

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingSMAA = () => {
    const { scene } = useThree()

    useEffect(() => {
        // SMAA (Subpixel Morphological Anti-Aliasing) - visual demo
        const group = new THREE.Group()

        // Create anti-aliased look with smooth gradients
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 128, 64)

        const material = new THREE.MeshStandardMaterial({
            color: 0x4488ff,
            metalness: 0.5,
            roughness: 0.3,
        })

        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // Background grid for aliasing visibility
        const gridSize = 20
        const gridGeom = new THREE.BufferGeometry()
        const vertices: number[] = []

        for (let i = -gridSize; i <= gridSize; i += 2) {
            vertices.push(i, -gridSize, -10, i, gridSize, -10)
            vertices.push(-gridSize, i, -10, gridSize, i, -10)
        }

        gridGeom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
        const gridMat = new THREE.LineBasicMaterial({ color: 0x444444 })
        const grid = new THREE.LineSegments(gridGeom, gridMat)
        group.add(grid)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
            geometry.dispose()
            material.dispose()
            gridGeom.dispose()
            gridMat.dispose()
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
Actual SMAA post-processing:
import { SMAAEffect } from 'postprocessing'

const effect = new SMAAEffect()
const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new EffectPass(effect))
*/