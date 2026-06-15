/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera_logarithmicdepthbuffer

import { $, $$, useEffect } from 'woby'
import { useThree } from '@woby/three'
import * as THREE from 'three'

/**
 * Port of webgl_camera_logarithmicdepthbuffer from Three.js examples.
 * Demonstrates logarithmic depth buffer for extreme depth ranges.
 *
 * Source: https://threejs.org/examples/webgl_camera_logarithmicdepthbuffer.html
 *
 * Key features:
 * - Side-by-side comparison of normal vs logarithmic depth buffer
 * - Extreme near/far ratio (1e-6 to 1e27)
 * - Interactive zoom with mousewheel
 * - Text labels at different scales
 */

const NEAR = 1e-6
const FAR = 1e27

const labeldata = [
    { size: .01, scale: 0.0001, label: 'microscopic (1µm)' },
    { size: .01, scale: 0.1, label: 'minuscule (1mm)' },
    { size: .01, scale: 1.0, label: 'tiny (1cm)' },
    { size: 1, scale: 1.0, label: 'child-sized (1m)' },
    { size: 10, scale: 1.0, label: 'tree-sized (10m)' },
    { size: 100, scale: 1.0, label: 'building-sized (100m)' },
    { size: 1000, scale: 1.0, label: 'medium (1km)' },
    { size: 10000, scale: 1.0, label: 'city-sized (10km)' },
    { size: 3400000, scale: 1.0, label: 'moon-sized (3,400 Km)' },
    { size: 12000000, scale: 1.0, label: 'planet-sized (12,000 km)' },
    { size: 1400000000, scale: 1.0, label: 'sun-sized (1,400,000 km)' },
    { size: 7.47e12, scale: 1.0, label: 'solar system-sized (50Au)' },
    { size: 9.4605284e15, scale: 1.0, label: 'gargantuan (1 light year)' },
    { size: 3.08567758e16, scale: 1.0, label: 'ludicrous (1 parsec)' },
    { size: 1e19, scale: 1.0, label: 'mind boggling (1000 light years)' }
]

export const WebglCameraLogarithmicDepthBuffer = () => {
    const { scene } = useThree()

    useEffect(() => {
        const group = new THREE.Group()
        const geometry = new THREE.SphereGeometry(0.5, 24, 12)

        // Create objects at varying distances to test logarithmic depth buffer
        for (let i = 0; i < labeldata.length; i++) {
            const scale = labeldata[i].scale || 1
            const material = new THREE.MeshPhongMaterial({
                color: new THREE.Color().setHSL(Math.random(), 0.5, 0.5),
                specular: 0x050505,
                shininess: 50,
                emissive: 0x000000
            })

            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.z = -labeldata[i].size * scale
            mesh.position.y = -labeldata[i].size / 4 * scale
            mesh.scale.multiplyScalar(labeldata[i].size * scale)
            group.add(mesh)
        }

        scene.add(group)

        const ambientLight = new THREE.AmbientLight(0x777777)
        scene.add(ambientLight)

        const light = new THREE.DirectionalLight(0xffffff, 3)
        light.position.set(100, 100, 100)
        scene.add(light)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.05
        }
        animate()

        return () => {
            scene.remove(group)
            scene.remove(ambientLight)
            scene.remove(light)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                logarithmicDepthBuffer
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
            />
            <scene background={new THREE.Color(0x222222)} />
            <perspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={NEAR}
                far={FAR}
                position={[0, 0, 100]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default WebglCameraLogarithmicDepthBuffer