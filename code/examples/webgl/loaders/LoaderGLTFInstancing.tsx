/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_gltf_instancing

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const LoaderGLTFInstancing = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Instanced mesh from GLTF-like model
        const geometry = new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8)
        const material = new THREE.MeshStandardMaterial({ color: 0x00aaff })

        const count = 100
        const mesh = new THREE.InstancedMesh(geometry, material, count)

        const dummy = new THREE.Object3D()
        const colors = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const x = (i % 10) * 2 - 9
            const z = Math.floor(i / 10) * 2 - 9
            dummy.position.set(x, 0, z)
            dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
            dummy.updateMatrix()
            mesh.setMatrixAt(i, dummy.matrix)

            const color = new THREE.Color().setHSL(Math.random(), 1, 0.5)
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        geometry.setAttribute('color', new THREE.InstancedBufferAttribute(colors, 3))
        material.vertexColors = true

        scene.add(mesh)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            for (let i = 0; i < count; i++) {
                mesh.getMatrixAt(i, dummy.matrix)
                dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale)
                dummy.position.y = Math.sin(t + i * 0.1) * 0.5
                dummy.updateMatrix()
                mesh.setMatrixAt(i, dummy.matrix)
            }
            mesh.instanceMatrix.needsUpdate = true
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 10, 20]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}

/*
Example usage with actual GLTF loader:
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()
loader.load('model.gltf', (gltf) => {
    const model = gltf.scene.children[0]
    const geometry = model.geometry
    const material = model.material
    const mesh = new THREE.InstancedMesh(geometry, material, count)
    scene.add(mesh)
})
*/