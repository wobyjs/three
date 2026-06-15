/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_outline

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingOutline = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Outline effect (simulated)
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)

        // Main mesh
        const material = new THREE.MeshStandardMaterial({ color: 0x00aaff })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Outline mesh (slightly larger, black wireframe)
        const outlineMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            side: THREE.BackSide,
        })
        const outline = new THREE.Mesh(geometry.clone(), outlineMat)
        outline.scale.multiplyScalar(1.02)
        scene.add(outline)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
            outline.rotation.copy(mesh.rotation)
            outline.rotation.x = mesh.rotation.x
            outline.rotation.y = mesh.rotation.y
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(outline)
            geometry.dispose()
            material.dispose()
            outlineMat.dispose()
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
Actual outline post-processing requires EffectComposer:
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'

const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))

const outlinePass = new OutlinePass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    scene,
    camera
)
outlinePass.selectedObjects = [mesh]
composer.addPass(outlinePass)
*/