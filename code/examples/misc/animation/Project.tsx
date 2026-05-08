/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, Vector3, AnimationMixer, AnimationClip, VectorKeyframeTrack, QuaternionKeyframeTrack } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/Group'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_animation_project from Three.js examples.
 * Demonstrates complex animation project with multiple objects.
 *
 * Source: https://threejs.org/examples/misc_animation_project.html
 *
 * Key features:
 * - Multiple animated objects
 * - Synchronized animations
 * - Animation mixer usage
 */

export const Project = () => {
    const groupRef = $<THREE.Group>()
    const mixerRef = $<THREE.AnimationMixer>()

    useEffect(() => {
        const group = $$(groupRef)
        if (!group) return

        const mixer = new THREE.AnimationMixer(group)
        mixerRef(mixer)

        // Create animation for each child
        const clips: THREE.AnimationClip[] = []

        group.children.forEach((child, index) => {
            // Position animation
            const positionTrack = new THREE.VectorKeyframeTrack(
                `${child.name}.position`,
                [0, 2, 4],
                [
                    child.position.x, child.position.y, child.position.z,
                    child.position.x, child.position.y + 2, child.position.z,
                    child.position.x, child.position.y, child.position.z
                ],
                THREE.InterpolateSmooth
            )

            // Rotation animation
            const rotationTrack = new THREE.VectorKeyframeTrack(
                `${child.name}.rotation`,
                [0, 4],
                [0, 0, 0, 0, Math.PI * 2, 0],
                THREE.InterpolateSmooth
            )

            const clip = new THREE.AnimationClip(`animation-${index}`, 4, [positionTrack, rotationTrack])
            clips.push(clip)

            const action = mixer.clipAction(clip)
            action.startAt(index * 0.5) // Stagger animations
            action.play()
        })

        return () => {
            mixer.stopAllAction()
        }
    })

    useFrame((state) => {
        const delta = state.clock?.getDelta() ?? 0.016
        const mixer = $$(mixerRef)
        if (mixer) {
            mixer.update(delta)
        }
    })

    // Create objects in a circle
    const objects = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 5
        const z = Math.sin(angle) * 5
        return {
            name: `object-${i}`,
            position: [x, 0, z] as [number, number, number],
            color: new Color().setHSL(i / 8, 0.7, 0.5)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Animated group */}
                <group ref={groupRef}>
                    {objects.map((obj, i) => (
                        <mesh key={i} name={obj.name} position={obj.position}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={obj.color} roughness={0.3} metalness={0.7} />
                        </mesh>
                    ))}
                </group>

                {/* Center sphere */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} emissive={0xff6b6b} emissiveIntensity={0.3} />
                </mesh>

                {/* Grid */}
                <gridHelper args={[20, 20, 0x444444, 0x222222]} />
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[10, 10, 10]}
            />

            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Project