/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_gltf_animation_pointer

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderGLTFAnimationPointer = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Animation via property pointer (morph targets, bone weights)
        const geometry = new THREE.SphereGeometry(2, 64, 64)

        // Create morph target (wave)
        const positions = geometry.attributes.position
        const morphPositions = new Float32Array(positions.count * 3)

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i)
            const y = positions.getY(i)
            const z = positions.getZ(i)

            // Wave distortion
            const wave = Math.sin(y * 3) * 0.5
            morphPositions[i * 3] = x + wave
            morphPositions[i * 3 + 1] = y
            morphPositions[i * 3 + 2] = z + wave
        }

        geometry.morphAttributes.position = [new THREE.BufferAttribute(morphPositions, 3)]

        const material = new THREE.MeshStandardMaterial({ 
            color: 0x00aaff,
            morphTargets: true,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Animation via morphTargetInfluences
        mesh.morphTargetInfluences = [0]

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            if (mesh.morphTargetInfluences) {
                mesh.morphTargetInfluences[0] = Math.sin(t * 2) * 0.5 + 0.5
            }
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
            <perspectiveCamera position={[0, 0, 10]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Example usage with actual GLTF animation pointer:
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()
loader.load('model.glb', (gltf) => {
    const mesh = gltf.scene.children[0]
    
    // Access animation via pointer
    gltf.animations.forEach(clip => {
        const mixer = new THREE.AnimationMixer(mesh)
        const action = mixer.clipAction(clip)
        action.play()
    })
    
    scene.add(gltf.scene)
})
*/