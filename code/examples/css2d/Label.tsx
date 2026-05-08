/** @jsxImportSource @woby/three */

import { $, $$, useFrame, useEffect, useMemo } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { Color } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of css2d_label from Three.js examples.
 * Demonstrates 2D labels that follow 3D objects in space.
 *
 * Source: https://threejs.org/examples/css2d_label.html
 */

// Create a CSS2D label element
const createLabel = (text: string, color = '#fff') => {
    const div = document.createElement('div')
    div.className = 'label'
    div.textContent = text
    div.style.color = color
    div.style.padding = '5px 10px'
    div.style.backgroundColor = 'rgba(0,0,0,0.6)'
    div.style.borderRadius = '4px'
    div.style.fontSize = '12px'
    div.style.fontFamily = 'sans-serif'
    div.style.pointerEvents = 'auto'
    div.style.cursor = 'pointer'
    return div
}

export const Label = () => {
    const earthRef = $<THREE.Mesh>()
    const moonRef = $<THREE.Mesh>()
    const labelRendererRef = $<CSS2DRenderer>()
    const containerRef = $<HTMLDivElement>()

    // Initialize CSS2D renderer
    useEffect(() => {
        const container = document.createElement('div')
        container.style.position = 'absolute'
        container.style.top = '0'
        container.style.left = '0'
        container.style.pointerEvents = 'none'
        document.body.appendChild(container)
        containerRef(container)

        const labelRenderer = new CSS2DRenderer()
        labelRenderer.setSize(window.innerWidth, window.innerHeight)
        labelRenderer.domElement.style.position = 'absolute'
        labelRenderer.domElement.style.top = '0px'
        labelRenderer.domElement.style.pointerEvents = 'none'
        container.appendChild(labelRenderer.domElement)
        labelRendererRef(labelRenderer)

        // Handle resize
        const handleResize = () => {
            labelRenderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            container.remove()
        }
    }, [])

    // Create labels
    const earthLabel = useMemo(() => {
        const label = new CSS2DObject(createLabel('Earth', '#4fc3f7'))
        label.position.set(0, 1.5, 0)
        return label
    }, [])

    const moonLabel = useMemo(() => {
        const label = new CSS2DObject(createLabel('Moon', '#fff'))
        label.position.set(0, 0.5, 0)
        return label
    }, [])

    // Attach labels to meshes after they're created
    useEffect(() => {
        const earth = $$(earthRef)
        const moon = $$(moonRef)

        if (earth) {
            earth.add(earthLabel)
        }
        if (moon) {
            moon.add(moonLabel)
        }

        return () => {
            if (earth) {
                earth.remove(earthLabel)
            }
            if (moon) {
                moon.remove(moonLabel)
            }
        }
    }, [earthRef, moonRef, earthLabel, moonLabel])

    // Animation
    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0

        const earth = $$(earthRef)
        const moon = $$(moonRef)

        if (earth) {
            earth.rotation.y = time * 0.5
        }

        if (moon) {
            // Moon orbits around Earth
            const moonOrbitRadius = 3
            moon.position.x = Math.cos(time) * moonOrbitRadius
            moon.position.z = Math.sin(time) * moonOrbitRadius
        }

        // Render CSS2D labels
        const labelRenderer = $$(labelRendererRef)
        const scene = state.scene
        const camera = state.camera

        if (labelRenderer && scene && camera) {
            labelRenderer.render(scene, camera as THREE.Camera)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x000000)}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 3, 5]} intensity={1} />

                {/* Sun (center) */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={0xffff00} emissive={0xffff00} emissiveIntensity={0.5} />
                </mesh>

                {/* Earth */}
                <mesh ref={earthRef} position={[5, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={0x2233ff} />
                </mesh>

                {/* Moon (child of Earth for orbital movement) */}
                <mesh ref={moonRef} position={[3, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={0xaaaaaa} />
                </mesh>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 5, 15]} />
            <orbitControls enableDamping target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default Label
