/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SkinnedMesh, Skeleton, Bone, CylinderGeometry } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/SkinnedMesh'
import '@woby/three/src/objects/Bone'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_advanced_skinning_simple from Three.js examples.
 * Demonstrates simple skeletal animation.
 *
 * Source: https://threejs.org/examples/webgl_advanced_skinning_simple.html
 *
 * Key features:
 * - Simple bone hierarchy
 * - Basic skinning setup
 * - Easy-to-understand skeletal animation
 */

// Create simple bone hierarchy
const createSimpleBones = () => {
    const bones: Bone[] = []

    // Root bone
    const root = new Bone()
    root.position.set(0, 0, 0)
    bones.push(root)

    // Single child bone
    const child = new Bone()
    child.position.set(0, 2, 0)
    root.add(child)
    bones.push(child)

    return bones
}

export const SkinningSimple = () => {
    const skinnedMeshRef = $<SkinnedMesh>()
    const bones = createSimpleBones()
    const skeleton = new Skeleton(bones)

    useFrame(({ clock }) => {
        const mesh = $$(skinnedMeshRef)
        if (!mesh) return

        const time = clock.getElapsedTime()

        // Simple bone animation
        bones[1].rotation.x = Math.sin(time * 2) * 0.5
        bones[1].rotation.z = Math.cos(time * 1.5) * 0.3
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x222222)}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Simple skinned mesh */}
                <skinnedMesh ref={skinnedMeshRef} position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 4, 8, 4]} />
                    <meshStandardMaterial color={0xff6b6b} />
                    <skeleton args={[skeleton]} />
                </skinnedMesh>

                {/* Skeleton helper */}
                <skeletonHelper args={[skeleton]} />

                {/* Floor */}
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[5, 5, 0.1]} />
                    <meshStandardMaterial color={0x333333} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[3, 3, 3]} />
            <orbitControls enableDamping target={[0, 1, 0]} />
        </canvas3D>
    )
}

export default SkinningSimple