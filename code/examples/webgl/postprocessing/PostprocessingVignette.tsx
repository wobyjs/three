/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_postprocessing_vignette

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const PostprocessingVignette = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Create scene with vignette effect
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
        const material = new THREE.MeshStandardMaterial({ color: 0x00aaff })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Vignette overlay
        const vignetteGeometry = new THREE.PlaneGeometry(2, 2)
        const vignetteMaterial = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                void main() {
                    vec2 center = vUv - 0.5;
                    float dist = length(center);
                    float vignette = smoothstep(0.7, 0.3, dist);
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0 - vignette);
                }
            `,
            transparent: true,
            depthTest: false,
            depthWrite: false,
        })

        const vignette = new THREE.Mesh(vignetteGeometry, vignetteMaterial)
        vignette.renderOrder = 999
        scene.add(vignette)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            mesh.rotation.x = t * 0.2
            mesh.rotation.y = t * 0.3
        }
        animate()

        return () => {
            scene.remove(mesh)
            scene.remove(vignette)
            geometry.dispose()
            material.dispose()
            vignetteGeometry.dispose()
            vignetteMaterial.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}
