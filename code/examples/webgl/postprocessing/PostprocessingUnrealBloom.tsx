/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_unrealbloom

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingUnrealBloom = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Unreal bloom effect (HDR glow) - simulated
        const group = new THREE.Group()

        // Create glowing orbs
        for (let i = 0; i < 20; i++) {
            const geometry = new THREE.SphereGeometry(0.2 + Math.random() * 0.3, 16, 16)

            // Emissive material for glow
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(Math.random(), 1, 0.6),
            })

            const mesh = new THREE.Mesh(geometry, material)

            mesh.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            )

            // Add glow sphere
            const glowGeom = new THREE.SphereGeometry(0.5 + Math.random() * 0.5, 16, 16)
            const glowMat = new THREE.MeshBasicMaterial({
                color: material.color,
                transparent: true,
                opacity: 0.3,
            })
            const glow = new THREE.Mesh(glowGeom, glowMat)
            glow.position.copy(mesh.position)

            group.add(mesh)
            group.add(glow)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.1
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 15]} />
            <scene>
                <ambientLight intensity={0.1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Actual Unreal Bloom post-processing:
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,  // strength
    0.4,  // radius
    0.85  // threshold
)
composer.addPass(bloomPass)
*/