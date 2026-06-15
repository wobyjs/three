/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_morphtargets

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MorphTargets = () => {
    const meshRef = $<THREE.Mesh>()
    const { scene } = useThree()

    useEffect(() => {
        // Create geometry with morph targets
        const geometry = new THREE.SphereGeometry(1, 32, 32)

        // Create morph target (inflated sphere)
        const positionAttribute = geometry.attributes.position
        const morphPositions = new Float32Array(positionAttribute.count * 3)
        const normalAttribute = geometry.attributes.normal
        const morphNormals = new Float32Array(normalAttribute.count * 3)

        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i)
            const y = positionAttribute.getY(i)
            const z = positionAttribute.getZ(i)
            
            // Inflate
            const factor = 1.3
            morphPositions[i * 3] = x * factor
            morphPositions[i * 3 + 1] = y * factor
            morphPositions[i * 3 + 2] = z * factor

            // Perturb normals
            morphNormals[i * 3] = normalAttribute.getX(i) * 1.2
            morphNormals[i * 3 + 1] = normalAttribute.getY(i) * 1.2
            morphNormals[i * 3 + 2] = normalAttribute.getZ(i) * 1.2
        }

        geometry.morphAttributes.position = [new THREE.BufferAttribute(morphPositions, 3)]
        geometry.morphAttributes.normal = [new THREE.BufferAttribute(morphNormals, 3)]

        const material = new THREE.MeshStandardMaterial({ color: 0x00aaff, morphTargets: true })
        const mesh = $$(meshRef) || new THREE.Mesh(geometry, material)
        mesh.morphTargetInfluences = [0]
        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            if (mesh.morphTargetInfluences) {
                mesh.morphTargetInfluences[0] = Math.sin(t) * 0.5 + 0.5
            }
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <scene>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <mesh ref={meshRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#00aaff" />
            </mesh>
            <orbitControls />
        </canvas3D>
    )
}
