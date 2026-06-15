/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_collada_skinning

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import * as THREE from 'three'

export const LoaderColladaSkinning = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Skinned character - skeletal animation from Collada
        const loader = new ColladaLoader()
        // loader.setPath('/models/')

        const group = new THREE.Group()

        // Create skeleton
        const bones: THREE.Bone[] = []

        // Root bone
        const rootBone = new THREE.Bone()
        rootBone.position.y = 0
        bones.push(rootBone)

        // Spine bone
        const spineBone = new THREE.Bone()
        spineBone.position.y = 1
        rootBone.add(spineBone)
        bones.push(spineBone)

        // Head bone
        const headBone = new THREE.Bone()
        headBone.position.y = 0.8
        spineBone.add(headBone)
        bones.push(headBone)

        // Create skinned mesh
        const geometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 16, 4)
        const position = geometry.attributes.position

        const skinIndices: number[] = []
        const skinWeights: number[] = []

        for (let i = 0; i < position.count; i++) {
            const y = position.getY(i) + 1

            if (y < 0.5) {
                skinIndices.push(0, 0, 0, 0)
                skinWeights.push(1, 0, 0, 0)
            } else if (y < 1.5) {
                skinIndices.push(0, 1, 0, 0)
                skinWeights.push(0.5, 0.5, 0, 0)
            } else {
                skinIndices.push(1, 2, 0, 0)
                skinWeights.push(0.5, 0.5, 0, 0)
            }
        }

        geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
        geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))

        const material = new THREE.MeshStandardMaterial({
            color: 0x4488ff,
            skinning: true,
        })

        const mesh = new THREE.SkinnedMesh(geometry, material)
        mesh.add(rootBone)
        mesh.bind(new THREE.Skeleton(bones))

        group.add(mesh)
        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Animate skeleton
            spineBone.rotation.z = Math.sin(t) * 0.1
            headBone.rotation.y = Math.sin(t * 2) * 0.2
        }
        animate()

        // Example loading actual Collada skinning:
        // loader.load('character.dae', (collada) => {
        //     const mesh = collada.scene.children[0] as THREE.SkinnedMesh
        //     scene.add(mesh)
        // })

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}