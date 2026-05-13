/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SkinnedMesh, Skeleton, Bone, AnimationMixer, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/SkinnedMesh'
import '@woby/three/src/objects/Skeleton'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_animation_skinning_additive from Three.js examples.
 * Demonstrates additive skeletal animation blending.
 *
 * Source: https://threejs.org/examples/webgl_animation_skinning_additive.html
 *
 * Key features:
 * - Additive animation layers
 * - Base animation + additive modifications
 * - Real-time blending control
 */

export const SkinningAdditive = () => {
    const meshRef = $<THREE.SkinnedMesh>()
    const skeletonRef = $<THREE.Skeleton>()
    const bonesRef = $<THREE.Bone[]>()

    useEffect(() => {
        // Create a simple humanoid-like skeleton
        const bones: THREE.Bone[] = []

        // Root/Hips
        const hips = new THREE.Bone()
        hips.position.y = 0
        bones.push(hips)

        // Spine
        const spine = new THREE.Bone()
        spine.position.y = 0.5
        hips.add(spine)
        bones.push(spine)

        // Chest
        const chest = new THREE.Bone()
        chest.position.y = 0.5
        spine.add(chest)
        bones.push(chest)

        // Head
        const head = new THREE.Bone()
        head.position.y = 0.5
        chest.add(head)
        bones.push(head)

        // Left arm
        const leftShoulder = new THREE.Bone()
        leftShoulder.position.set(0.3, 0.4, 0)
        chest.add(leftShoulder)
        bones.push(leftShoulder)

        const leftUpperArm = new THREE.Bone()
        leftUpperArm.position.y = 0.3
        leftShoulder.add(leftUpperArm)
        bones.push(leftUpperArm)

        const leftLowerArm = new THREE.Bone()
        leftLowerArm.position.y = 0.4
        leftUpperArm.add(leftLowerArm)
        bones.push(leftLowerArm)

        // Right arm
        const rightShoulder = new THREE.Bone()
        rightShoulder.position.set(-0.3, 0.4, 0)
        chest.add(rightShoulder)
        bones.push(rightShoulder)

        const rightUpperArm = new THREE.Bone()
        rightUpperArm.position.y = 0.3
        rightShoulder.add(rightUpperArm)
        bones.push(rightUpperArm)

        const rightLowerArm = new THREE.Bone()
        rightLowerArm.position.y = 0.4
        rightUpperArm.add(rightLowerArm)
        bones.push(rightLowerArm)

        bonesRef(bones)

        // Create geometry for a simple humanoid
        const geometry = new THREE.CylinderGeometry(0.15, 0.2, 2, 8, 10)
        geometry.translate(0, 1, 0)

        // Create skin indices and weights
        const position = geometry.attributes.position
        const skinIndices: number[] = []
        const skinWeights: number[] = []

        for (let i = 0; i < position.count; i++) {
            const y = position.getY(i)

            if (y < 0.5) {
                // Hips influence
                skinIndices.push(0, 1, 0, 0)
                skinWeights.push(0.8, 0.2, 0, 0)
            } else if (y < 1.0) {
                // Spine influence
                skinIndices.push(1, 2, 0, 0)
                skinWeights.push(0.3, 0.7, 0, 0)
            } else if (y < 1.5) {
                // Chest influence
                skinIndices.push(2, 3, 0, 0)
                skinWeights.push(0.3, 0.7, 0, 0)
            } else {
                // Head influence
                skinIndices.push(3, 0, 0, 0)
                skinWeights.push(1, 0, 0, 0)
            }
        }

        geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
        geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))

        // Create skeleton
        const skeleton = new THREE.Skeleton(bones)
        skeletonRef(skeleton)

        // Create skinned mesh
        const material = new THREE.MeshStandardMaterial({
            color: 0x6b8e23,
            roughness: 0.5,
            metalness: 0.2
        })

        const mesh = new THREE.SkinnedMesh(geometry, material)
        mesh.add(hips)
        mesh.bind(skeleton)
        meshRef(mesh)
    })

    useFrame(({ clock }) => {
        const bones = $$(bonesRef)
        if (!bones || bones.length < 10) return

        const time = clock.getElapsedTime()

        // Base animation: subtle breathing/swaying
        bones[1].rotation.x = Math.sin(time * 0.5) * 0.02
        bones[2].rotation.x = Math.sin(time * 0.5 + 0.1) * 0.02

        // Additive animation: arm swing (added on top of base)
        const additiveWeight = 0.5 // Blend factor for additive
        bones[5].rotation.x = Math.sin(time * 2) * 0.3 * additiveWeight
        bones[8].rotation.x = Math.sin(time * 2 + Math.PI) * 0.3 * additiveWeight

        // Head look animation
        bones[3].rotation.y = Math.sin(time * 0.3) * 0.1
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
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} color={0x8888ff} />

                {/* Skinned mesh */}
                {() => {
                    const mesh = $$(meshRef)
                    return mesh ? <primitive object={mesh} /> : null
                }}
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 1.5, 4]}
            />
            <orbitControls target={[0, 1, 0]} enableDamping />
        </canvas3D>
    )
}

export default SkinningAdditive
