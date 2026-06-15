/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_lightprobe_cubecamera

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LightprobeCubecamera = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()

        // Central reflective sphere
        const geometry = new THREE.SphereGeometry(2, 64, 64)
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
            envMapIntensity: 1,
        })
        const sphere = new THREE.Mesh(geometry, material)
        group.add(sphere)

        // Cube camera for environment
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256)
        const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget)
        group.add(cubeCamera)

        // Surrounding objects
        for (let i = 0; i < 10; i++) {
            const geom = new THREE.BoxGeometry(1, 1, 1)
            const mat = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i / 10, 1, 0.5),
            })
            const mesh = new THREE.Mesh(geom, mat)
            const angle = (i / 10) * Math.PI * 2
            mesh.position.set(
                Math.cos(angle) * 8,
                Math.sin(angle * 2) * 2,
                Math.sin(angle) * 8
            )
            group.add(mesh)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            sphere.rotation.y = t * 0.2
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 2, 12]} />
            <scene>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
