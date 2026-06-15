/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_pixel

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingPixel = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Pixelation effect (simulated with low-res geometry)
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 32, 8)
        const material = new THREE.MeshStandardMaterial({
            color: 0x00aaff,
            flatShading: true,
        })
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
Actual pixelation post-processing:
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

const pixelShader = {
    uniforms: {
        tDiffuse: { value: null },
        resolution: { value: new THREE.Vector2(256, 256) }
    },
    vertexShader: `...`,
    fragmentShader: `...`
}

const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new ShaderPass(pixelShader))
*/