/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_tiltshift

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingTiltshift = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Tilt-shift effect (miniature look) - simulated with DOF
        const group = new THREE.Group()

        // Create city-like scene
        const buildingColors = [0x888888, 0x999999, 0x777777, 0x666666]

        for (let i = 0; i < 50; i++) {
            const width = 0.5 + Math.random() * 1
            const height = 1 + Math.random() * 4
            const depth = 0.5 + Math.random() * 1

            const geom = new THREE.BoxGeometry(width, height, depth)
            const mat = new THREE.MeshStandardMaterial({
                color: buildingColors[Math.floor(Math.random() * buildingColors.length)],
            })

            const mesh = new THREE.Mesh(geom, mat)
            mesh.position.set(
                (Math.random() - 0.5) * 20,
                height / 2,
                (Math.random() - 0.5) * 20
            )
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.05
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 15, 20]} fov={60} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Actual tilt-shift post-processing:
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

const tiltShiftShader = {
    uniforms: {
        tDiffuse: { value: null },
        bluramount: { value: 0.005 },
        focus: { value: 0.5 }
    },
    vertexShader: `...`,
    fragmentShader: `...`
}

composer.addPass(new ShaderPass(tiltShiftShader))
*/