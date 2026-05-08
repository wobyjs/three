/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useRenderer, useCamera, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color } from 'three'
import * as THREE from 'three'

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
 * Port of misc_controls_event from Three.js examples.
 * Demonstrates control event handling (change, start, end events).
 *
 * Source: https://threejs.org/examples/misc_controls_event.html
 *
 * Key features:
 * - Event listeners on controls
 * - Visual feedback for control state
 * - Console logging of events
 */

export const Event = () => {
    const controlsRef = $<OrbitControls>()
    const statusRef = $<HTMLDivElement>()
    const meshRef = $<THREE.Mesh>()

    useEffect(() => {
        const controls = $$(controlsRef)
        if (!controls) return

        const onChange = () => {
            console.log('change event')
            const status = $$(statusRef)
            if (status) status.textContent = 'Status: Changing...'
        }

        const onStart = () => {
            console.log('start event')
            const status = $$(statusRef)
            if (status) status.textContent = 'Status: Started interaction'
        }

        const onEnd = () => {
            console.log('end event')
            const status = $$(statusRef)
            if (status) status.textContent = 'Status: Ended interaction'
        }

        controls.addEventListener('change', onChange)
        controls.addEventListener('start', onStart)
        controls.addEventListener('end', onEnd)

        return () => {
            controls.removeEventListener('change', onChange)
            controls.removeEventListener('start', onStart)
            controls.removeEventListener('end', onEnd)
        }
    })

    // Create status UI
    useEffect(() => {
        const status = document.createElement('div')
        status.style.cssText = 'position:fixed;top:20px;left:20px;color:white;font-size:18px;z-index:100;font-family:monospace;background:rgba(0,0,0,0.5);padding:10px;border-radius:5px;'
        status.textContent = 'Status: Idle'
        document.body.appendChild(status)
        statusRef(status)

        return () => {
            status.remove()
        }
    })

    useFrame(() => {
        const controls = $$(controlsRef)
        if (controls) controls.update()

        // Rotate mesh
        const mesh = $$(meshRef)
        if (mesh) {
            mesh.rotation.x += 0.005
            mesh.rotation.y += 0.01
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x1a1a2e)}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

                {/* Central object */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={0x4a90d9} />
                </mesh>

                {/* Reference spheres */}
                {Array.from({ length: 6 }, (_, i) => {
                    const angle = (i / 6) * Math.PI * 2
                    const x = Math.cos(angle) * 5
                    const z = Math.sin(angle) * 5
                    return (
                        <mesh key={i} position={[x, 0, z]}>
                            <sphereGeometry args={[0.5, 16, 16]} />
                            <meshStandardMaterial color={new Color().setHSL(i / 6, 0.7, 0.5)} />
                        </mesh>
                    )
                })}
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={100}
                position={[5, 5, 10]}
            />

            <orbitControls
                ref={controlsRef}
                enableDamping
                dampingFactor={0.05}
            />
        </canvas3D>
    )
}

export default Event