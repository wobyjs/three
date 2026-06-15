/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, LineBasicMaterial, BufferGeometry, BufferAttribute } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/objects/Line'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_lines from Three.js examples.
 * Demonstrates line rendering.
 *
 * Source: https://threejs.org/examples/webgl_lines.html
 */

export const Lines = () => {
    const linesRef = $<THREE.Group>()

    useFrame((state) => {
        const time = state.clock?.getElapsedTime() ?? 0
        
        const group = $$(linesRef)
        if (group) {
            group.rotation.y = time * 0.2
            group.rotation.x = time * 0.1
        }
    })

    // Create multiple colored lines
    const createLines = () => {
        const lines = []
        const colors = [0xff6b6b, 0x4ecdc4, 0xffd93d, 0x9b59b6, 0x3498db]
        
        for (let i = 0; i < 5; i++) {
            const points = []
            const segments = 50
            
            for (let j = 0; j <= segments; j++) {
                const t = j / segments
                const x = Math.cos(t * Math.PI * 4 + i) * 3
                const y = Math.sin(t * Math.PI * 4 + i) * 3
                const z = (t - 0.5) * 5
                points.push(x, y, z)
            }
            
            const geometry = new THREE.BufferGeometry()
            geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(points), 3))
            
            lines.push(
                <line key={i} geometry={geometry}>
                    <lineBasicMaterial color={colors[i]} linewidth={2} />
                </line>
            )
        }
        
        return lines
    }

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new Color(0x0a0a0a)}>
                <group ref={linesRef}>
                    {createLines()}
                </group>
            </scene>

            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 10]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default Lines