/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of misc_controls_transform from Three.js examples.
 * Demonstrates TransformControls for object manipulation.
 *
 * Source: https://threejs.org/examples/misc_controls_transform.html
 *
 * Key features:
 * - Translate, rotate, scale modes
 * - Keyboard shortcuts (W, E, R)
 * - Object selection
 */

export const Transform = () => {
    const cameraRef = useCamera<THREE.PerspectiveCamera>()
    const rendererRef = useRenderer<THREE.WebGLRenderer>()
    const sceneRef = $<THREE.Scene>()
    const controlsRef = $<OrbitControls>()
    const transformControlsRef = $<TransformControls>()
    const selectedMeshRef = $<THREE.Mesh>()

    useEffect(() => {
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        const scene = $$(sceneRef)
        if (!renderer || !camera || !scene) return

        // Create transform controls
        const transformControls = new TransformControls(camera, renderer.domElement)
        transformControlsRef(transformControls)
        scene.add(transformControls)

        // Disable orbit controls when transforming
        transformControls.addEventListener('dragging-changed', (event) => {
            const orbitControls = $$(controlsRef)
            if (orbitControls) {
                orbitControls.enabled = !event.value
            }
        })

        // Keyboard shortcuts for modes
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'KeyW':
                    transformControls.setMode('translate')
                    break
                case 'KeyE':
                    transformControls.setMode('rotate')
                    break
                case 'KeyR':
                    transformControls.setMode('scale')
                    break
            }
        }

        document.addEventListener('keydown', onKeyDown)

        return () => {
            scene.remove(transformControls)
            transformControls.dispose()
            document.removeEventListener('keydown', onKeyDown)
        }
    })

    // Create UI
    useEffect(() => {
        const ui = document.createElement('div')
        ui.style.cssText = 'position:fixed;top:20px;left:20px;color:white;z-index:100;font-family:monospace;background:rgba(0,0,0,0.5);padding:10px;border-radius:5px;'
        ui.innerHTML = `
            <p>W - Translate</p>
            <p>E - Rotate</p>
            <p>R - Scale</p>
            <p>Click object to select</p>
        `
        document.body.appendChild(ui)

        return () => {
            ui.remove()
        }
    })

    // Handle object selection
    useEffect(() => {
        const renderer = $$(rendererRef)
        const camera = $$(cameraRef)
        const scene = $$(sceneRef)
        const transformControls = $$(transformControlsRef)
        if (!renderer || !camera || !scene || !transformControls) return

        const raycaster = new THREE.Raycaster()
        const mouse = new THREE.Vector2()

        const onClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(mouse, camera)

            const meshes: THREE.Mesh[] = []
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.name.startsWith('selectable-')) {
                    meshes.push(child)
                }
            })

            const intersects = raycaster.intersectObjects(meshes)
            if (intersects.length > 0) {
                const selected = intersects[0].object as THREE.Mesh
                transformControls.attach(selected)
                selectedMeshRef(selected)
            }
        }

        renderer.domElement.addEventListener('click', onClick)

        return () => {
            renderer.domElement.removeEventListener('click', onClick)
        }
    })

    useFrame(() => {
        const controls = $$(controlsRef)
        if (controls) controls.update()
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene ref={sceneRef} background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Selectable objects */}
                <mesh name="selectable-box" position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={0x4a90d9} />
                </mesh>

                <mesh name="selectable-sphere" position={[3, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xff6b6b} />
                </mesh>

                <mesh name="selectable-box2" position={[-3, 0, 0]}>
                    <boxGeometry args={[1, 2, 1]} />
                    <meshStandardMaterial color={0x4ecdc4} />
                </mesh>

                {/* Grid */}
                <gridHelper args={[10, 10, 0x444444, 0x222222]} />
            </scene>

            <perspectiveCamera
                ref={cameraRef}
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 5]}
            />

            <orbitControls ref={controlsRef} enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Transform