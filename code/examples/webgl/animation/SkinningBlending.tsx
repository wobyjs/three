/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SkinnedMesh, Skeleton, Bone, ACESFilmicToneMapping } from 'three'
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
 * Port of webgl_animation_skinning_blending from Three.js examples.
 * Demonstrates blending between multiple skeletal animations.
 *
 * Source: https://threejs.org/examples/webgl_animation_skinning_blending.html
 *
 * Key features:
 * - Multiple animation clips
 * - Smooth blending between animations
 * - Weight-based animation mixing
 */

export const SkinningBlending = () => {
    const meshRef = $<THREE.SkinnedMesh>()
    const bonesRef = $<THREE.Bone[]>()
    const blendWeightRef = $(0.5)

    useEffect(() => {
        // Create a simple skeleton for a leg-like structure
        const bones: THREE.Bone[] = []

        // Root/Hip
        const hip = new THREE.Bone()
        hip.position.y = 0
        bones.push(hip)

        // Upper leg
        const upperLeg = new THREE.Bone()
        upperLeg.position.y = 0.5
        hip.add(upperLeg)
        bones.push(upperLeg)

        // Lower leg
        const lowerLeg = new THREE.Bone()
        lowerLeg.position.y = 0.6
        upperLeg.add(lowerLeg)
        bones.push(lowerLeg)

        // Foot
        const foot = new THREE.Bone()
        foot.position.y = 0.5
        foot.position.z = 0.1
        lowerLeg.add(foot)
        bones.push(foot)

        bonesRef(bones)

        // Create geometry
        const geometry = new THREE.CylinderGeometry(0.12, 0.1, 1.6, 8, 8)
        geometry.translate(0, 0.8, 0)

        // Create skin indices and weights
        const position = geometry.attributes.position
        const skinIndices: number[] = []
        const skinWeights: number[] = []

        for (let i = 0; i < position.count; i++) {
            const y = position.getY(i)

            if (y < 0.5) {
                skinIndices.push(0, 1, 0, 0)
                skinWeights.push(0.7, 0.3, 0, 0)
            } else if (y < 1.0) {
                skinIndices.push(1, 2, 0, 0)
                skinWeights.push(0.4, 0.6, 0, 0)
            } else if (y < 1.4) {
                skinIndices.push(2, 3, 0, 0)
                skinWeights.push(0.5, 0.5, 0, 0)
            } else {
                skinIndices.push(3, 0, 0, 0)
                skinWeights.push(1, 0, 0, 0)
            }
        }

        geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
        geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))

        // Create skeleton
        const skeleton = new THREE.Skeleton(bones)

        // Create skinned mesh
        const material = new THREE.MeshStandardMaterial({
            color: 0xe67e22,
            roughness: 0.4,
            metalness: 0.3
        })

        const mesh = new THREE.SkinnedMesh(geometry, material)
        mesh.add(hip)
        mesh.bind(skeleton)
        meshRef(mesh)
    })

    useFrame(({ clock }) => {
        const bones = $$(bonesRef)
        if (!bones || bones.length < 4) return

        const time = clock.getElapsedTime()
        const blendWeight = $$(blendWeightRef)

        // Animation 1: Walking motion
        const walkUpperLeg = Math.sin(time * 3) * 0.4
        const walkLowerLeg = Math.max(0, Math.sin(time * 3 - 0.5)) * 0.5

        // Animation 2: Kicking motion
        const kickUpperLeg = Math.sin(time * 1.5) * 0.6
        const kickLowerLeg = Math.sin(time * 1.5) * 0.8

        // Blend between animations
        bones[1].rotation.x = walkUpperLeg * (1 - blendWeight) + kickUpperLeg * blendWeight
        bones[2].rotation.x = walkLowerLeg * (1 - blendWeight) + kickLowerLeg * blendWeight
        bones[3].rotation.x = Math.sin(time * 3) * 0.1
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
            />
            <scene background={new Color(0x2c3e50)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1.2} />
                <directionalLight position={[-5, 5, -5]} intensity={0.6} color={0x88ccff} />

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                    <planeGeometry args={[5, 5]} />
                    <meshStandardMaterial color={0x34495e} roughness={0.8} />
                </mesh>

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
                position={[0, 1, 3]}
            />
            <orbitControls target={[0, 0.8, 0]} enableDamping />
        </canvas3D>
    )
}

export default SkinningBlending
