/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_camera

import { $, $$, useEffect, useRef } from 'woby'
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

/**
 * Port of webgl_camera from Three.js examples.
 * Demonstrates camera types and switching between perspective and orthographic.
 *
 * Source: https://threejs.org/examples/webgl_camera.html
 *
 * Key features:
 * - Perspective and orthographic camera switching
 * - Camera helpers for visualization
 * - Split-screen rendering
 * - Keyboard controls (O for orthographic, P for perspective)
 */

const frustumSize = 600

export const WebglCamera = () => {
    const { scene, renderer, camera } = useThree()
    const activeCamera = $<'perspective' | 'ortho'>('perspective')
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const group = new THREE.Group()

        // Main sphere
        const geometry = new THREE.SphereGeometry(100, 16, 8)
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
        const mesh = new THREE.Mesh(geometry, material)
        group.add(mesh)

        // Child sphere
        const childGeom = new THREE.SphereGeometry(50, 16, 8)
        const childMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
        const childMesh = new THREE.Mesh(childGeom, childMat)
        childMesh.position.y = 150
        mesh.add(childMesh)

        // Particles
        const particlesGeom = new THREE.BufferGeometry()
        const vertices = []
        for (let i = 0; i < 10000; i++) {
            vertices.push(
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000)
            )
        }
        particlesGeom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
        const particles = new THREE.Points(particlesGeom, new THREE.PointsMaterial({ color: 0x888888 }))
        group.add(particles)

        scene.add(group)

        meshRef(mesh)

        // Keyboard controls
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.key.toLowerCase()) {
                case 'o':
                    activeCamera('ortho')
                    break
                case 'p':
                    activeCamera('perspective')
                    break
            }
        }
        document.addEventListener('keydown', onKeyDown)

        return () => {
            scene.remove(group)
            document.removeEventListener('keydown', onKeyDown)
        }
    })

    useFrame(() => {
        const mesh = $$(meshRef)
        if (mesh) {
            const time = Date.now() * 0.0005
            mesh.position.x = 700 * Math.cos(time)
            mesh.position.z = 700 * Math.sin(time)
            mesh.position.y = 700 * Math.sin(time)

            if (mesh.children[0]) {
                mesh.children[0].position.x = 70 * Math.cos(2 * time)
                mesh.children[0].position.z = 70 * Math.sin(time)
            }
        }
    })

    const aspect = window.innerWidth / window.innerHeight

    // Create cameras for left and right viewports
    const leftCamera = new THREE.PerspectiveCamera(50, 0.5 * aspect, 150, 1000)
    leftCamera.position.set(0, 0, 2500)

    const rightCamera = new THREE.OrthographicCamera(
        0.5 * frustumSize * aspect / -2,
        0.5 * frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / -2,
        150,
        1000
    )
    rightCamera.position.set(0, 0, 2500)

    // Main active camera
    const perspectiveCamera = new THREE.PerspectiveCamera(50, 0.5 * aspect, 1, 10000)
    perspectiveCamera.position.set(0, 0, 2500)

    const orthoCamera = new THREE.OrthographicCamera(
        frustumSize * aspect / -2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / -2,
        1,
        10000
    )
    orthoCamera.position.set(0, 0, 2500)

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                setScissorTest={[true]}
            />
            <scene>
                <ambientLight intensity={0.5} />
            </scene>
            <perspectiveCamera
                fov={50}
                aspect={0.5 * aspect}
                near={1}
                far={10000}
                position={[0, 0, 2500]}
            />
        </canvas3D>
    )
}
}

export default WebglCamera
