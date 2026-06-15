/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_gltf_dispersion

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderGLTFDispersion = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Dispersion material (chromatic aberration in glass)
        const geometry = new THREE.SphereGeometry(2, 64, 64)
        
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0,
            transmission: 1,
            thickness: 2,
            ior: 1.5,
            dispersion: 0.5,
        })

        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        // Background objects to show dispersion
        const bgGeom = new THREE.BoxGeometry(1, 1, 1)
        const colors = [0xff0000, 0x00ff00, 0x0000ff]

        colors.forEach((color, i) => {
            const mat = new THREE.MeshBasicMaterial({ color })
            const cube = new THREE.Mesh(bgGeom, mat)
            cube.position.set(i * 2 - 2, 0, -5)
            scene.add(cube)
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(sphere)
            geometry.dispose()
            material.dispose()
            bgGeom.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
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