/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_materials_envmaps

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const MaterialsEnvMaps = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Environment mapped materials (reflections)
        const geometry = new THREE.SphereGeometry(1, 32, 32)

        // Create a simple environment cube
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256)
        const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget)

        // Create reflective sphere
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
            envMap: cubeRenderTarget.texture,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Add some colorful objects for reflection
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]
        colors.forEach((color, i) => {
            const geom = new THREE.BoxGeometry(0.5, 0.5, 0.5)
            const mat = new THREE.MeshBasicMaterial({ color })
            const obj = new THREE.Mesh(geom, mat)
            const angle = (i / colors.length) * Math.PI * 2
            obj.position.set(Math.cos(angle) * 3, 0, Math.sin(angle) * 3)
            scene.add(obj)
        })

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
            cubeRenderTarget.dispose()
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
