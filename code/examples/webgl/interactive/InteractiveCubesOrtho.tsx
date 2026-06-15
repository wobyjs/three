/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_interactive_cubes_ortho

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/OrthographicCamera'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_interactive_cubes_ortho from Three.js examples.
 * Demonstrates raycasting with an orthographic camera.
 * Uses orthographic camera for parallel projection.
 *
 * Source: https://threejs.org/examples/webgl_interactive_cubes_ortho.html
 */

export const InteractiveCubesOrtho = () => {
    const { scenes, cameras } = useThree()
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    let INTERSECTED: THREE.Mesh | null = null
    let theta = 0
    const frustumSize = 50
    const radius = 25

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        const geometry = new THREE.BoxGeometry()

        // Create 2000 cubes
        for (let i = 0; i < 2000; i++) {
            const material = new THREE.MeshLambertMaterial({
                color: Math.random() * 0xffffff
            })
            const mesh = new THREE.Mesh(geometry, material)

            mesh.position.set(
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20
            )
            mesh.rotation.set(
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            )
            mesh.scale.set(
                Math.random() + 0.5,
                Math.random() + 0.5,
                Math.random() + 0.5
            )

            scene.add(mesh)
        }

        return () => {
            scene.traverse((obj: THREE.Object3D) => {
                if (obj.isMesh) {
                    scene.remove(obj)
                    ;(obj as THREE.Mesh).geometry.dispose()
                    ;((obj as THREE.Mesh).material as THREE.Material).dispose()
                }
            })
        }
    })

    useEffect(() => {
        const handlePointerMove = (event: MouseEvent) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('pointermove', handlePointerMove)
        return () => window.removeEventListener('pointermove', handlePointerMove)
    })

    useEffect(() => {
        let animationId: number

        const animate = () => {
            const scene = $$(scenes)?.[0]
            const camera = $$(cameras)?.[0]

            if (scene && camera) {
                theta += 0.1

                const aspect = window.innerWidth / window.innerHeight

                camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta))
                camera.position.y = radius * Math.sin(THREE.MathUtils.degToRad(theta))
                camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta))
                camera.lookAt(scene.position)
                camera.updateMatrixWorld()

                raycaster.setFromCamera(pointer, camera)

                const intersects = raycaster.intersectObjects(scene.children, false)

                if (intersects.length > 0) {
                    if (INTERSECTED != intersects[0].object) {
                        if (INTERSECTED) {
                            (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(
                                INTERSECTED.userData.currentHex || 0x000000
                            )
                        }

                        INTERSECTED = intersects[0].object as THREE.Mesh
                        INTERSECTED.userData.currentHex = (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.getHex()
                        ;(INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(0xff0000)
                    }
                } else {
                    if (INTERSECTED) {
                        (INTERSECTED.material as THREE.MeshLambertMaterial).emissive.setHex(
                            INTERSECTED.userData.currentHex || 0x000000
                        )
                    }
                    INTERSECTED = null
                }
            }

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationId)
        }
    })

    const aspect = typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 1

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xf0f0f0)}>
                <directionalLight args={[0xffffff, 3]} position={[1, 1, 1].map(v => v * 10)} />
            </scene>
            <orthographicCamera
                left={frustumSize * aspect / -2}
                right={frustumSize * aspect / 2}
                top={frustumSize / 2}
                bottom={frustumSize / -2}
                near={0.1}
                far={100}
                position={[0, 0, 50]}
            />
        </canvas3D>
    )
}

export default InteractiveCubesOrtho