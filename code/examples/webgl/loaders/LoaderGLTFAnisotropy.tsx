/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_gltf_anisotropy

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderGLTFAnisotropy = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Anisotropy material (brushed metal effect)
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
        
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x888888,
            metalness: 1,
            roughness: 0.2,
            anisotropy: 1,
            anisotropyRotation: 0,
            anisotropyMap: null,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Add floor
        const floorGeom = new THREE.PlaneGeometry(20, 20)
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333 })
        const floor = new THREE.Mesh(floorGeom, floorMat)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -2
        scene.add(floor)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(floor)
            geometry.dispose()
            material.dispose()
            floorGeom.dispose()
            floorMat.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Example usage with actual GLTF loader:
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()
loader.load('model.gltf', (gltf) => {
    scene.add(gltf.scene)
})
*/