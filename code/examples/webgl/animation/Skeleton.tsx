/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SkeletonHelper, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Skeleton'
import '@woby/three/src/helpers/SkeletonHelper'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_animation_skeleton from Three.js examples.
 * Demonstrates skeleton visualization with SkeletonHelper.
 *
 * Source: https://threejs.org/examples/webgl_animation_skeleton.html
 *
 * Key features:
 * - SkeletonHelper for bone visualization
 * - Bone hierarchy display
 * - Animated skeleton
 */

export const SkeletonExample = () => {
    const helperRef = $<THREE.SkeletonHelper>()
    const bonesRef = $<THREE.Bone[]>()

    useEffect(() => {
        // Create a humanoid-like skeleton
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
        leftShoulder.position.set(0.3, 0.3, 0)
        chest.add(leftShoulder)
        bones.push(leftShoulder)

        const leftUpperArm = new THREE.Bone()
        leftUpperArm.position.y = 0.4
        leftShoulder.add(leftUpperArm)
        bones.push(leftUpperArm)

        const leftLowerArm = new THREE.Bone()
        leftLowerArm.position.y = 0.4
        leftUpperArm.add(leftLowerArm)
        bones.push(leftLowerArm)

        // Right arm
        const rightShoulder = new THREE.Bone()
        rightShoulder.position.set(-0.3, 0.3, 0)
        chest.add(rightShoulder)
        bones.push(rightShoulder)

        const rightUpperArm = new THREE.Bone()
        rightUpperArm.position.y = 0.4
        rightShoulder.add(rightUpperArm)
        bones.push(rightUpperArm)

        const rightLowerArm = new THREE.Bone()
        rightLowerArm.position.y = 0.4
        rightUpperArm.add(rightLowerArm)
        bones.push(rightLowerArm)

        // Left leg
        const leftUpperLeg = new THREE.Bone()
        leftUpperLeg.position.set(0.2, -0.1, 0)
        hips.add(leftUpperLeg)
        bones.push(leftUpperLeg)

        const leftLowerLeg = new THREE.Bone()
        leftLowerLeg.position.y = -0.5
        leftUpperLeg.add(leftLowerLeg)
        bones.push(leftLowerLeg)

        // Right leg
        const rightUpperLeg = new THREE.Bone()
        rightUpperLeg.position.set(-0.2, -0.1, 0)
        hips.add(rightUpperLeg)
        bones.push(rightUpperLeg)

        const rightLowerLeg = new THREE.Bone()
        rightLowerLeg.position.y = -0.5
        rightUpperLeg.add(rightLowerLeg)
        bones.push(rightLowerLeg)

        bonesRef(bones)

        // Create skeleton helper
        const helper = new SkeletonHelper(hips)
        helperRef(helper)
    })

    useFrame(({ clock }) => {
        const bones = $$(bonesRef)
        if (bones && bones.length > 0) {
            const time = clock.getElapsedTime()

            // Animate the skeleton (simple walk cycle)
            if (bones[4]) bones[4].rotation.x = Math.sin(time * 3) * 0.3 // left shoulder
            if (bones[7]) bones[7].rotation.x = -Math.sin(time * 3) * 0.3 // right shoulder
            if (bones[10]) bones[10].rotation.x = -Math.sin(time * 3) * 0.4 // left leg
            if (bones[12]) bones[12].rotation.x = Math.sin(time * 3) * 0.4 // right leg
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

                {/* Skeleton helper */}
                {() => {
                    const helper = $$(helperRef)
                    return helper ? <primitive object={helper} /> : null
                }}

                {/* Ground grid */}
                <gridHelper args={[10, 10, 0x444466, 0x444466]} />
            </scene>

            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[3, 2, 5]}
            />
            <orbitControls target={[0, 1, 0]} enableDamping />
        </canvas3D>
    )
}

export default SkeletonExample
