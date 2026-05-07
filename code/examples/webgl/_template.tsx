/** @jsxImportSource @woby/three */

import { $, $$, useEffect } from "woby"
import { useFrame, useThree, useRenderer, useCamera } from '@woby/three'
import * as THREE from 'three'

/**
 * Template for porting Three.js examples to @woby/three JSX syntax.
 *
 * Porting checklist:
 * 1. Replace THREE.* constructor calls with JSX elements
 * 2. Use args prop for constructor parameters
 * 3. Use kebab-case for nested properties (shadow-camera-far)
 * 4. Use $$() for context arrays (never $())
 * 5. Add useFrame for animation loops
 * 6. Import required wrapper files for class registration
 *
 * Example transformations:
 *
 * // Vanilla Three.js:
 * const geometry = new THREE.BoxGeometry(1, 1, 1)
 * const material = new THREE.MeshStandardMaterial({ color: 'orange' })
 * const mesh = new THREE.Mesh(geometry, material)
 * mesh.position.set(0, 0, 0)
 *
 * // @woby/three JSX:
 * <mesh position={[0, 0, 0]}>
 *     <boxGeometry args={[1, 1, 1]} />
 *     <meshStandardMaterial color="orange" />
 * </mesh>
 *
 * // Nested properties:
 * light.shadow.camera.far = 333
 * // becomes:
 * <pointLight shadow-camera-far={333} />
 *
 * // Method calls:
 * renderer.setPixelRatio(window.devicePixelRatio)
 * // becomes:
 * <webGLRenderer setPixelRatio={[window.devicePixelRatio]} />
 */
export const TemplateExample = () => {
    // Reactive state - use $() for mutable refs, $$() to read values
    const ref = $<THREE.Mesh>()
    const { scene } = useThree()

    // Animation frame callback - runs every frame
    useFrame(() => {
        const mesh = $$(ref)
        if (mesh) {
            mesh.rotation.x += 0.01
            mesh.rotation.y += 0.01
        }
    })

    return (
        <canvas3D>
            {/* Camera setup - position is a prop */}
            <perspectiveCamera position={[0, 0, 5]} />

            {/* Scene contains all 3D objects */}
            <scene>
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 7]} intensity={1} />

                {/* Mesh with geometry and material as children */}
                <mesh ref={ref}>
                    {/* args prop passes constructor parameters */}
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </scene>

            {/* Camera controls */}
            <orbitControls />
        </canvas3D>
    )
}

/**
 * Alternative pattern: Using context hooks directly
 *
 * export const AdvancedExample = () => {
 *     const camera = useCamera<THREE.PerspectiveCamera>()
 *     const renderer = useRenderer<THREE.WebGLRenderer>()
 *     const { scene, update } = useThree()
 *
 *     useEffect(() => {
 *         // Access Three.js objects via $$()
 *         const cam = $$(camera)
 *         const rend = $$(renderer)
 *         if (!cam || !rend) return
 *
 *         // Setup code here
 *         return () => {
 *             // Cleanup
 *         }
 *     })
 *
 *     return <canvas3D>...</canvas3D>
 * }
 */

/**
 * Critical patterns to remember:
 *
 * 1. ALWAYS use $$() to read context arrays from useThree():
 *    const { scenes, cameras, renderers } = useThree()
 *    const scene = $$(scenes)[0]  // CORRECT
 *    const scene = scenes()[0]    // WRONG - will cause issues
 *
 * 2. JSX mesh children require BOTH geometry AND material:
 *    <mesh>
 *        <boxGeometry args={[1,1,1]} />
 *        <meshStandardMaterial />
 *    </mesh>
 *    // Single child will fail silently
 *
 * 3. Import order matters - parent wrappers before children:
 *    import '../code/src/scenes/Scene'        // First
 *    import '../code/src/objects/Mesh'        // Second
 *    import '../code/src/geometries/BoxGeometry'  // Third
 *
 * 4. No `as any` casts - use proper types or fix the type definition
 */
