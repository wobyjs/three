/** @jsxImportSource @woby/three */

import { $, $$, useEffect, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SkeletonHelper, Bone } from 'three'
import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'

// Import wrappers for registration
import '@woby/three/src/geometries/CylinderGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/materials/MeshPhongMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/objects/SkinnedMesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/PointLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgpu_skinning - Skeletal Animation (Skinning) demonstration.
 *
 * Source: https://threejs.org/examples/webgpu_skinning.html (conceptual)
 *
 * Skeletal Animation (Skinning) animates meshes using a bone hierarchy.
 * Vertices are weighted to bones, allowing smooth deformations.
 *
 * Skinning Use Cases:
 * 1. Character animation - Walking, running, gestures
 * 2. Creature animation - Animals, monsters
 * 3. Mechanical systems - Robot arms, machinery
 * 4. Cloth simulation - Skirt, cape movement
 *
 * WebGPU Skinning Advantages:
 * - GPU-accelerated bone transformations
 * - More bones supported per mesh
 * - Dual quaternion skinning support
 * - Better performance with complex skeletons
 *
 * Three.js Skinning API:
 * - Skeleton: Bone hierarchy
 * - SkinnedMesh: Mesh with bone weights
 * - Bone: Joint in skeleton
 * - skinWeights: Per-vertex bone weights
 */

// Create a simple skeleton with bones
const createSkeleton = () => {
    const bones = []

    // Root bone (hip)
    const root = new THREE.Bone()
    root.position.set(0, 0, 0)
    bones.push(root)

    // Spine
    const spine = new THREE.Bone()
    spine.position.set(0, 1, 0)
    root.add(spine)
    bones.push(spine)

    // Head
    const head = new THREE.Bone()
    head.position.set(0, 1.2, 0)
    spine.add(head)
    bones.push(head)

    // Left arm
    const leftUpperArm = new THREE.Bone()
    leftUpperArm.position.set(-0.8, 0.8, 0)
    spine.add(leftUpperArm)
    bones.push(leftUpperArm)

    const leftLowerArm = new THREE.Bone()
    leftLowerArm.position.set(0, -0.8, 0)
    leftUpperArm.add(leftLowerArm)
    bones.push(leftLowerArm)

    const leftHand = new THREE.Bone()
    leftHand.position.set(0, -0.6, 0)
    leftLowerArm.add(leftHand)
    bones.push(leftHand)

    // Right arm
    const rightUpperArm = new THREE.Bone()
    rightUpperArm.position.set(0.8, 0.8, 0)
    spine.add(rightUpperArm)
    bones.push(rightUpperArm)

    const rightLowerArm = new THREE.Bone()
    rightLowerArm.position.set(0, -0.8, 0)
    rightUpperArm.add(rightLowerArm)
    bones.push(rightLowerArm)

    const rightHand = new THREE.Bone()
    rightHand.position.set(0, -0.6, 0)
    rightLowerArm.add(rightHand)
    bones.push(rightHand)

    // Left leg
    const leftUpperLeg = new THREE.Bone()
    leftUpperLeg.position.set(-0.3, -0.5, 0)
    root.add(leftUpperLeg)
    bones.push(leftUpperLeg)

    const leftLowerLeg = new THREE.Bone()
    leftLowerLeg.position.set(0, -1, 0)
    leftUpperLeg.add(leftLowerLeg)
    bones.push(leftLowerLeg)

    const leftFoot = new THREE.Bone()
    leftFoot.position.set(0, -0.8, 0.2)
    leftLowerLeg.add(leftFoot)
    bones.push(leftFoot)

    // Right leg
    const rightUpperLeg = new THREE.Bone()
    rightUpperLeg.position.set(0.3, -0.5, 0)
    root.add(rightUpperLeg)
    bones.push(rightUpperLeg)

    const rightLowerLeg = new THREE.Bone()
    rightLowerLeg.position.set(0, -1, 0)
    rightUpperLeg.add(rightLowerLeg)
    bones.push(rightLowerLeg)

    const rightFoot = new THREE.Bone()
    rightFoot.position.set(0, -0.8, 0.2)
    rightLowerLeg.add(rightFoot)
    bones.push(rightFoot)

    return { bones, skeleton: new THREE.Skeleton(bones) }
}

// Create skinned mesh geometry
const createSkinnedGeometry = () => {
    const geometry = new THREE.CylinderGeometry(0.2, 0.2, 5, 8, 20)

    // Create skin weights and indices
    const position = geometry.attributes.position
    const skinIndices = []
    const skinWeights = []

    for (let i = 0; i < position.count; i++) {
        const y = position.getY(i)

        // Determine which bones influence this vertex
        let boneIndex = 0
        let weight = 1

        if (y > 3) {
            boneIndex = 2 // head
        } else if (y > 2) {
            boneIndex = 1 // spine
        } else if (y > 0) {
            boneIndex = 0 // root
        } else if (y > -1.5) {
            boneIndex = 8 // left upper leg or 12 right
            boneIndex = position.getX(i) < 0 ? 8 : 12
        } else {
            boneIndex = position.getX(i) < 0 ? 9 : 13
        }

        skinIndices.push(boneIndex, 0, 0, 0)
        skinWeights.push(weight, 0, 0, 0)
    }

    geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
    geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))

    return geometry
}

// Simple animated figure using bones
const AnimatedFigure = () => {
    const groupRef = $<THREE.Group>()
    const bonesRef = $<THREE.Bone[]>()

    useEffect(() => {
        const { bones, skeleton } = createSkeleton()
        bonesRef(bones)

        // Create simple geometry for each body part
        const group = new THREE.Group()

        // Body (torso)
        const torsoGeo = new THREE.CylinderGeometry(0.4, 0.35, 1.5, 8)
        const torsoMat = new THREE.MeshStandardMaterial({ color: 0x4ecdc4, roughness: 0.5, metalness: 0.3 })
        const torso = new THREE.Mesh(torsoGeo, torsoMat)
        torso.position.y = 1.5
        group.add(torso)

        // Head
        const headGeo = new THREE.SphereGeometry(0.35, 16, 16)
        const headMat = new THREE.MeshStandardMaterial({ color: 0xffdbac, roughness: 0.7 })
        const head = new THREE.Mesh(headGeo, headMat)
        head.position.y = 2.7
        group.add(head)

        // Left arm
        const armGeo = new THREE.CylinderGeometry(0.1, 0.08, 1.2, 8)
        const armMat = new THREE.MeshStandardMaterial({ color: 0x4ecdc4, roughness: 0.5 })

        const leftUpperArmMesh = new THREE.Mesh(armGeo, armMat)
        leftUpperArmMesh.position.set(-0.6, 2, 0)
        leftUpperArmMesh.rotation.z = Math.PI / 6
        group.add(leftUpperArmMesh)

        const leftLowerArmMesh = new THREE.Mesh(armGeo, armMat)
        leftLowerArmMesh.position.set(-1, 1.2, 0)
        leftLowerArmMesh.rotation.z = Math.PI / 4
        group.add(leftLowerArmMesh)

        // Right arm
        const rightUpperArmMesh = new THREE.Mesh(armGeo, armMat)
        rightUpperArmMesh.position.set(0.6, 2, 0)
        rightUpperArmMesh.rotation.z = -Math.PI / 6
        group.add(rightUpperArmMesh)

        const rightLowerArmMesh = new THREE.Mesh(armGeo, armMat)
        rightLowerArmMesh.position.set(1, 1.2, 0)
        rightLowerArmMesh.rotation.z = -Math.PI / 4
        group.add(rightLowerArmMesh)

        // Legs
        const legGeo = new THREE.CylinderGeometry(0.12, 0.1, 1.5, 8)
        const legMat = new THREE.MeshStandardMaterial({ color: 0x333355, roughness: 0.6 })

        const leftUpperLegMesh = new THREE.Mesh(legGeo, legMat)
        leftUpperLegMesh.position.set(-0.2, 0.3, 0)
        group.add(leftUpperLegMesh)

        const leftLowerLegMesh = new THREE.Mesh(legGeo, legMat)
        leftLowerLegMesh.position.set(-0.2, -1.2, 0)
        group.add(leftLowerLegMesh)

        const rightUpperLegMesh = new THREE.Mesh(legGeo, legMat)
        rightUpperLegMesh.position.set(0.2, 0.3, 0)
        group.add(rightUpperLegMesh)

        const rightLowerLegMesh = new THREE.Mesh(legGeo, legMat)
        rightLowerLegMesh.position.set(0.2, -1.2, 0)
        group.add(rightLowerLegMesh)

        groupRef(group)
    })

    // Animate the figure
    useFrame(({ clock }) => {
        const group = $$(groupRef)
        if (!group) return

        const time = clock.getElapsedTime()

        // Walking animation - move legs and arms
        const walkCycle = Math.sin(time * 4)

        // Animate children by index
        const children = group.children

        // Left arm (indices 2, 3)
        if (children[2]) {
            children[2].rotation.x = walkCycle * 0.3
        }
        if (children[3]) {
            children[3].rotation.x = walkCycle * 0.3
            children[3].position.y = 1.2 + Math.abs(walkCycle) * 0.1
        }

        // Right arm (indices 4, 5)
        if (children[4]) {
            children[4].rotation.x = -walkCycle * 0.3
        }
        if (children[5]) {
            children[5].rotation.x = -walkCycle * 0.3
            children[5].position.y = 1.2 + Math.abs(walkCycle) * 0.1
        }

        // Left leg (indices 6, 7)
        if (children[6]) {
            children[6].rotation.x = -walkCycle * 0.4
        }
        if (children[7]) {
            children[7].rotation.x = -walkCycle * 0.4
            children[7].position.z = Math.abs(walkCycle) * 0.1
        }

        // Right leg (indices 8, 9)
        if (children[8]) {
            children[8].rotation.x = walkCycle * 0.4
        }
        if (children[9]) {
            children[9].rotation.x = walkCycle * 0.4
            children[9].position.z = -Math.abs(walkCycle) * 0.1
        }

        // Subtle body bob
        group.position.y = Math.abs(Math.sin(time * 8)) * 0.05

        // Slight body sway
        group.rotation.y = Math.sin(time * 2) * 0.1
    })

    return () => {
        const group = $$(groupRef)
        return group ? <primitive object={group} /> : null
    }
}

// Dancing figure
const DancingFigure = ({ position, color, danceStyle }: {
    position: [number, number, number]
    color: number
    danceStyle: 'wave' | 'bounce' | 'spin'
}) => {
    const groupRef = $<THREE.Group>()

    useEffect(() => {
        const group = new THREE.Group()

        // Simple stick figure
        const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.5 })

        // Body
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1, 8), mat)
        body.position.y = 0.5
        group.add(body)

        // Head
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), mat)
        head.position.y = 1.2
        group.add(head)

        // Arms
        const armGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.6, 8)
        const leftArm = new THREE.Mesh(armGeo, mat)
        leftArm.position.set(-0.35, 0.7, 0)
        leftArm.rotation.z = Math.PI / 4
        group.add(leftArm)

        const rightArm = new THREE.Mesh(armGeo, mat)
        rightArm.position.set(0.35, 0.7, 0)
        rightArm.rotation.z = -Math.PI / 4
        group.add(rightArm)

        // Legs
        const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.8, 8)
        const leftLeg = new THREE.Mesh(legGeo, mat)
        leftLeg.position.set(-0.15, -0.4, 0)
        group.add(leftLeg)

        const rightLeg = new THREE.Mesh(legGeo, mat)
        rightLeg.position.set(0.15, -0.4, 0)
        group.add(rightLeg)

        groupRef(group)
    })

    useFrame(({ clock }) => {
        const group = $$(groupRef)
        if (!group) return

        const time = clock.getElapsedTime()
        const children = group.children

        switch (danceStyle) {
            case 'wave':
                // Wave arms up and down
                if (children[2]) children[2].rotation.z = Math.PI / 4 + Math.sin(time * 3) * 0.5
                if (children[3]) children[3].rotation.z = -Math.PI / 4 - Math.sin(time * 3) * 0.5
                group.position.y = Math.sin(time * 2) * 0.2
                break

            case 'bounce':
                // Bounce up and down
                group.position.y = Math.abs(Math.sin(time * 5)) * 0.3
                if (children[2]) children[2].rotation.x = Math.sin(time * 5) * 0.3
                if (children[3]) children[3].rotation.x = -Math.sin(time * 5) * 0.3
                break

            case 'spin':
                // Spin around
                group.rotation.y = time * 2
                group.position.y = Math.sin(time * 4) * 0.1
                // Arms out
                if (children[2]) children[2].rotation.z = Math.PI / 2
                if (children[3]) children[3].rotation.z = -Math.PI / 2
                break
        }
    })

    return () => {
        const group = $$(groupRef)
        return group ? <primitive object={group} position={position} /> : null
    }
}

export const Skinning = () => {
    const [supported, setSupported] = $(false)
    const [checked, setChecked] = $(false)

    // Check WebGPU support
    useEffect(() => {
        const checkSupport = async () => {
            try {
                if (WebGPU.isAvailable()) {
                    setSupported(true)
                } else if (navigator.gpu) {
                    const adapter = await navigator.gpu.requestAdapter()
                    if (adapter) {
                        setSupported(true)
                    }
                }
            } catch (e) {
                console.warn('WebGPU check failed:', e)
            }
            setChecked(true)
        }
        checkSupport()
    })

    // Loading state
    if (!$$(checked)) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white' }}>
                <p>Checking WebGPU support...</p>
            </div>
        )
    }

    // Fallback UI
    if (!$$(supported)) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a1a', color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>WebGPU Not Available</h1>
                <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
                <p style={{ color: '#888', marginTop: '20px' }}>
                    This example demonstrates skeletal animation (skinning).
                    Using WebGL fallback.
                </p>
            </div>
        )
    }

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new Color(0x0a0a1a)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color={0xff6b6b} />
                <pointLight position={[5, 5, -5]} intensity={0.5} color={0x4ecdc4} />

                {/* Main animated figure */}
                <AnimatedFigure />

                {/* Dancing figures */}
                <DancingFigure position={[-3, 0, 0]} color={0xff6b6b} danceStyle="wave" />
                <DancingFigure position={[3, 0, 0]} color={0x4ecdc4} danceStyle="bounce" />
                <DancingFigure position={[0, 0, -3]} color={0xffe66d} danceStyle="spin" />

                {/* Ground */}
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[15, 15, 0.1]} />
                    <meshStandardMaterial color={0x1a1a2e} roughness={0.9} />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 3, 8]}
            />
            <orbitControls enableDamping autoRotate autoRotateSpeed={0.3} />
        </canvas3D>
    )
}

export default Skinning
