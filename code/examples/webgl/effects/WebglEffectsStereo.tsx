/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_effects_stereo

import { $, $$, useEffect, useFrame } from '@woby/three'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshBasicMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_effects_stereo from Three.js examples.
 * Demonstrates stereoscopic 3D rendering (side-by-side for VR devices).
 *
 * Source: https://threejs.org/examples/webgl_effects_stereo.html
 *
 * Key features:
 * - StereoEffect for side-by-side stereoscopic rendering
 * - Cube texture environment mapping with refraction
 * - 500 spheres with random positions and scales
 * - Mouse-based camera movement
 */

export const WebglEffectsStereo = () => {
    const spheresRef = $<THREE.Mesh[]>()
    const effectRef = $<THREE.StereoEffect>()
    const rendererRef = $<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const cameraRef = $<THREE.PerspectiveCamera>()

    const mouseX = $(0)
    const mouseY = $(0)
    const windowHalfX = $(window.innerWidth / 2)
    const windowHalfY = $(window.innerHeight / 2)

    useEffect(() => {
        const renderer = $$(rendererRef)
        if (!renderer) return

        // Create stereo effect
        const effect = new THREE.StereoEffect(renderer)
        effect.setSize(window.innerWidth, window.innerHeight)
        effectRef(effect)

        // Handle window resize
        const handleResize = () => {
            const camera = $$(cameraRef)
            if (camera) {
                camera.aspect = window.innerWidth / window.innerHeight
                camera.updateProjectionMatrix()
            }
            windowHalfX(window.innerWidth / 2)
            windowHalfY(window.innerHeight / 2)
            effect.setSize(window.innerWidth, window.innerHeight)
        }

        // Handle mouse move
        const handleMouseMove = (event: MouseEvent) => {
            mouseX((event.clientX - $$(windowHalfX)) * 0.01)
            mouseY((event.clientY - $$(windowHalfY)) * 0.01)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    })

    useFrame(() => {
        const effect = $$(effectRef)
        const scene = $$(sceneRef)
        const camera = $$(cameraRef)
        const spheres = $$(spheresRef)

        if (effect && scene && camera) {
            const timer = 0.0001 * Date.now()

            camera.position.x += ($$(mouseX) - camera.position.x) * 0.05
            camera.position.y += (-$$(mouseY) - camera.position.y) * 0.05
            camera.lookAt(scene.position)

            if (spheres) {
                for (let i = 0; i < spheres.length; i++) {
                    const sphere = spheres[i]
                    sphere.position.x = 5 * Math.cos(timer + i)
                    sphere.position.y = 5 * Math.sin(timer + i * 1.1)
                }
            }

            effect.render(scene, camera)
        }
    })

    // Create spheres
    const spheres: THREE.Mesh[] = []
    const geometry = new THREE.SphereGeometry(0.1, 32, 16)
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff })

    for (let i = 0; i < 500; i++) {
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.x = Math.random() * 10 - 5
        mesh.position.y = Math.random() * 10 - 5
        mesh.position.z = Math.random() * 10 - 5
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1
        spheres.push(mesh)
    }
    spheresRef(spheres)

    return (
        <>
            <webGLRenderer ref={rendererRef} setPixelRatio={[window.devicePixelRatio]} />
            <scene ref={sceneRef} background={new THREE.Color(0x0a0a0a)}>
                {spheres.map((sphere, i) => (
                    <primitive key={i} object={sphere} />
                ))}
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[0, 0, 3]}
            />
        </>
    )
}

export default WebglEffectsStereo
