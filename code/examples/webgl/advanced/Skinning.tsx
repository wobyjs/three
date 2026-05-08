/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SkinnedMesh, Skeleton, Bone, BoxGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/SkinnedMesh'
import '@woby/three/src/objects/Bone'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_skinning from Three.js examples.
 * Demonstrates skeletal animation (skinning).
 *
 * Source: https://threejs.org/examples/webgl_advanced_skinning.html
 *
 * Key features:
 * - SkinnedMesh for skeletal animation
 * - Bone hierarchy
 * - Skeleton and joint manipulation
 */

// Create bone hierarchy
const createBones = () => {
    const bones: Bone[] = []

    // Root bone
    const root = new Bone()
    root.position.set(0, 0, 0)
    bones.push(root)

    // Spine bones
    for (let i = 0; i < 5; i++) {
        const bone = new Bone()
        bone.position.set(0, 1, 0)
        bones[i].add(bone)
        bones.push(bone)
    }

    return bones
}

export const Skinning = () => {
    const skinnedMeshRef = $<SkinnedMesh>()
    const bones = createBones()
    const skeleton = new Skeleton(bones)

    useFrame(({ clock }) => {
        const mesh = $$(skinnedMeshRef)
        if (!mesh) return

        const time = clock.getElapsedTime()

        // Animate bones
        bones.forEach((bone, i) => {
            if (i > 0) {
                bone.rotation.x = Math.sin(time + i * 0.5) * 0.2
                bone.rotation.z = Math.cos(time + i * 0.3) * 0.1
            }
        })
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Skinned mesh with skeleton */}
                <skinnedMesh ref={skinnedMeshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[0.5, 6, 0.5]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                    <skeleton args={[skeleton]} />
                </skinnedMesh>

                {/* Skeleton helper */}
                <skeletonHelper args={[skeleton]} />

                {/* Floor */}
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[3, 3, 3]} />
            <orbitControls enableDamping target={[0, 2, 0]} />
        </canvas3D>
    )
}

export default Skinning