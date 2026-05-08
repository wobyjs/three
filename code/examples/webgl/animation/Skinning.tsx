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
 * Port of webgl_animation_skinning from Three.js examples.
 * Demonstrates skeletal animation with SkinnedMesh.
 *
 * Source: https://threejs.org/examples/webgl_animation_skinning.html
 *
 * Key features:
 * - SkinnedMesh for skeletal deformation
 * - Bone hierarchy
 * - Real-time bone manipulation
 */

export const Skinning = () => {
    const meshRef = $<THREE.SkinnedMesh>()
    const skeletonRef = $<THREE.Skeleton>()
    const bonesRef = $<THREE.Bone[]>()

    useEffect(() => {
        // Create a simple arm-like skeleton
        const bones: THREE.Bone[] = []

        // Root bone
        const rootBone = new THREE.Bone()
        rootBone.position.y = 0
        bones.push(rootBone)

        // Upper arm
        const upperArm = new THREE.Bone()
        upperArm.position.y = 1
        rootBone.add(upperArm)
        bones.push(upperArm)

        // Lower arm
        const lowerArm = new THREE.Bone()
        lowerArm.position.y = 1
        upperArm.add(lowerArm)
        bones.push(lowerArm)

        // Hand
        const hand = new THREE.Bone()
        hand.position.y = 0.8
        lowerArm.add(hand)
        bones.push(hand)

        bonesRef(bones)

        // Create geometry
        const geometry = new THREE.CylinderGeometry(0.2, 0.2, 3, 8, 4)
        geometry.translate(0, 1.5, 0)

        // Create skin indices and weights
        const position = geometry.attributes.position
        const skinIndices = []
        const skinWeights = []

        for (let i = 0; i < position.count; i++) {
            const y = position.getY(i)

            // Determine which bones influence this vertex
            if (y < 1) {
                skinIndices.push(0, 1, 0, 0)
                skinWeights.push(1, 0, 0, 0)
            } else if (y < 2) {
                skinIndices.push(0, 1, 2, 0)
                skinWeights.push(0.3, 0.7, 0, 0)
            } else if (y < 2.8) {
                skinIndices.push(1, 2, 3, 0)
                skinWeights.push(0, 0.3, 0.7, 0)
            } else {
                skinIndices.push(2, 3, 0, 0)
                skinWeights.push(0, 0.2, 0.8, 0)
            }
        }

        geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
        geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))

        // Create skeleton
        const skeleton = new THREE.Skeleton(bones)
        skeletonRef(skeleton)

        // Create skinned mesh
        const material = new THREE.MeshStandardMaterial({
            color: 0x4ecdc4,
            roughness: 0.5,
            metalness: 0.3,
            wireframe: false
        })

        const mesh = new THREE.SkinnedMesh(geometry, material)
        mesh.add(rootBone)
        mesh.bind(skeleton)
        meshRef(mesh)
    })

    useFrame(({ clock }) => {
        const bones = $$(bonesRef)
        if (bones && bones.length > 2) {
            const time = clock.getElapsedTime()

            // Animate the arm
            bones[1].rotation.z = Math.sin(time * 2) * 0.5
            bones[2].rotation.z = Math.sin(time * 3) * 0.3
            bones[3].rotation.z = Math.sin(time * 4) * 0.2
        }
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
                position={[0, 2, 5]}
            />
            <orbitControls target={[0, 1.5, 0]} enableDamping />
        </canvas3D>
    )
}

export default Skinning
