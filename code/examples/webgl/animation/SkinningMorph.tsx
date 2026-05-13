/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, SkinnedMesh, Skeleton, Bone, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
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
 * Port of webgl_animation_skinning_morph from Three.js examples.
 * Demonstrates combining skeletal animation with morph targets.
 *
 * Source: https://threejs.org/examples/webgl_animation_skinning_morph.html
 *
 * Key features:
 * - Skeletal animation with bones
 * - Morph target animation
 * - Combined animation effects
 */

export const SkinningMorph = () => {
    const meshRef = $<THREE.SkinnedMesh>()
    const bonesRef = $<THREE.Bone[]>()

    useEffect(() => {
        // Create a simple skeleton
        const bones: THREE.Bone[] = []

        const root = new THREE.Bone()
        root.position.y = 0
        bones.push(root)

        const middle = new THREE.Bone()
        middle.position.y = 1
        root.add(middle)
        bones.push(middle)

        const top = new THREE.Bone()
        top.position.y = 1
        middle.add(top)
        bones.push(top)

        bonesRef(bones)

        // Create geometry with morph targets
        const geometry = new THREE.BoxGeometry(1, 2, 1, 4, 8, 4)

        // Create morph targets for bulging effect
        const positionCount = geometry.attributes.position.count
        const morphPositions = new Float32Array(positionCount * 3)

        for (let i = 0; i < positionCount; i++) {
            const x = geometry.attributes.position.getX(i)
            const y = geometry.attributes.position.getY(i)
            const z = geometry.attributes.position.getZ(i)

            // Bulge morph target
            const bulgeFactor = 1 + Math.sin(y * Math.PI) * 0.3
            morphPositions[i * 3] = x * bulgeFactor
            morphPositions[i * 3 + 1] = y
            morphPositions[i * 3 + 2] = z * bulgeFactor
        }

        geometry.setAttribute('morphTarget0', new THREE.Float32BufferAttribute(morphPositions, 3))

        // Create skin indices and weights
        const skinIndices: number[] = []
        const skinWeights: number[] = []

        for (let i = 0; i < positionCount; i++) {
            const y = geometry.attributes.position.getY(i)

            if (y < -0.5) {
                skinIndices.push(0, 1, 0, 0)
                skinWeights.push(0.8, 0.2, 0, 0)
            } else if (y < 0.5) {
                skinIndices.push(0, 1, 2, 0)
                skinWeights.push(0.2, 0.6, 0.2, 0)
            } else {
                skinIndices.push(1, 2, 0, 0)
                skinWeights.push(0.2, 0.8, 0, 0)
            }
        }

        geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
        geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))

        // Create skeleton
        const skeleton = new THREE.Skeleton(bones)

        // Create skinned mesh with morph targets
        const material = new THREE.MeshStandardMaterial({
            color: 0x9b59b6,
            roughness: 0.4,
            metalness: 0.3,
            morphTargets: true
        })

        const mesh = new THREE.SkinnedMesh(geometry, material)
        mesh.add(root)
        mesh.bind(skeleton)
        meshRef(mesh)
    })

    useFrame(({ clock }) => {
        const bones = $$(bonesRef)
        const mesh = $$(meshRef)
        if (!bones || bones.length < 3 || !mesh) return

        const time = clock.getElapsedTime()

        // Skeletal animation: bending
        bones[1].rotation.z = Math.sin(time * 1.5) * 0.3
        bones[2].rotation.z = Math.sin(time * 1.5 + 0.3) * 0.2

        // Morph target animation: pulsing
        mesh.morphTargetInfluences![0] = (Math.sin(time * 3) + 1) * 0.5
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
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <directionalLight position={[-5, 5, -5]} intensity={0.8} color={0xff88cc} />

                {/* Skinned mesh with morph targets */}
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
                position={[0, 1, 4]}
            />
            <orbitControls target={[0, 0.5, 0]} enableDamping />
        </canvas3D>
    )
}

export default SkinningMorph
