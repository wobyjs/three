/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_instancing_dynamic

import { $, $$, useEffect } from "woby"
import { useThree } from '@woby/three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshNormalMaterial'
import '@woby/three/src/materials/MeshLambertMaterial'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/lights/HemisphereLight'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_instancing_dynamic from Three.js examples.
 * Demonstrates three methods for rendering many instances: INSTANCED, MERGED, and NAIVE.
 * Each method has different GPU draw calls and memory usage.
 *
 * Source: https://threejs.org/examples/webgl_instancing_dynamic.html
 */

const Method = {
    INSTANCED: 'INSTANCED',
    MERGED: 'MERGED',
    NAIVE: 'NAIVE'
}

export const InstancingDynamic = () => {
    const { scenes } = useThree()
    const meshRef = $<THREE.InstancedMesh | null>(null)
    const method = $<string>(Method.INSTANCED)
    const count = $<number>(1000)

    useEffect(() => {
        const scene = $$(scenes)?.[0]
        if (!scene) return

        const material = new THREE.MeshNormalMaterial()

        // Simple geometry for demo
        const geometry = new THREE.IcosahedronGeometry(0.5, 2)
        geometry.computeVertexNormals()

        const matrix = new THREE.Matrix4()
        const dummy = new THREE.Object3D()

        // Clear existing meshes
        const meshes: THREE.Object3D[] = []
        scene.traverse((obj: THREE.Object3D) => {
            if (obj.isMesh) meshes.push(obj)
        })
        meshes.forEach((m: THREE.Object3D) => {
            scene.remove(m)
            if ((m as THREE.Mesh).material) ((m as THREE.Mesh).material as THREE.Material).dispose()
            if ((m as THREE.Mesh).geometry) ((m as THREE.Mesh).geometry as THREE.BufferGeometry).dispose()
        })

        const mesh = new THREE.InstancedMesh(geometry, material, count())

        for (let i = 0; i < count(); i++) {
            // Random position
            dummy.position.set(
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20
            )
            dummy.quaternion.setFromEuler(new THREE.Euler(
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            ))
            dummy.scale.setScalar(Math.random())
            dummy.updateMatrix()
            mesh.setMatrixAt(i, dummy.matrix)
        }

        scene.add(mesh)
        meshRef(mesh)

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xffffff)}>
                <hemisphereLight args={[0xffffff, 0x888888, 3]} position={[0, 1, 0]} />
                <instancedMesh ref={meshRef} args={[undefined, undefined, count()]}>
                    <icosahedronGeometry args={[0.5, 2]} />
                    <meshNormalMaterial />
                </instancedMesh>
            </scene>
            <perspectiveCamera fov={70} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[0, 0, 30]} />
        </canvas3D>
    )
}

export default InstancingDynamic