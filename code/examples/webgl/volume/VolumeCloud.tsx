/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_volume_cloud

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const VolumeCloud = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Volumetric cloud simulation
        const group = new THREE.Group()

        // Create cloud particles
        const cloudCount = 500
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(cloudCount * 3)
        const sizes = new Float32Array(cloudCount)

        for (let i = 0; i < cloudCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = Math.random() * 5
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
            sizes[i] = 0.5 + Math.random() * 1.5
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 1,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true,
        })

        const cloud = new THREE.Points(geometry, material)
        group.add(cloud)

        // Add multiple cloud layers
        for (let layer = 0; layer < 3; layer++) {
            const layerCloud = cloud.clone()
            layerCloud.position.y = layer * 2
            layerCloud.material = material.clone()
            layerCloud.material.opacity = 0.3 - layer * 0.1
            group.add(layerCloud)
        }

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.02
        }
        animate()

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 5, 20]} />
            <scene background={new THREE.Color(0x87ceeb)}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 20, 10]} intensity={0.5} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
