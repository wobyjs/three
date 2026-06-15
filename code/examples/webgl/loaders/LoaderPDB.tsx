/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_pdb

import { $, $$, useFrame } from '@woby/three'
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/math/Vector3'

/**
 * Port of webgl_loader_pdb from Three.js examples.
 * Demonstrates PDB (Protein Data Bank) molecule model loading.
 *
 * Source: https://threejs.org/examples/#webgl_loader_pdb
 */

export const LoaderPDB = () => {
    const groupRef = $(null as THREE.Group | null)

    useFrame((state) => {
        const group = groupRef()
        if (group) {
            const t = state.clock?.getElapsedTime() ?? 0
            group.rotation.x = t * 0.3
            group.rotation.y = t * 0.2
        }
    })

    // Create molecule structure imperatively (PDB loading requires effect)
    const group = new THREE.Group()

    // Atom definitions for a simple molecule
    const atoms = [
        { pos: [0, 0, 0] as [number, number, number], color: 0xff4444, radius: 0.4 },   // O - red
        { pos: [1.2, 0, 0] as [number, number, number], color: 0x4444ff, radius: 0.35 }, // C - blue
        { pos: [0, 1.2, 0] as [number, number, number], color: 0x44ff44, radius: 0.35 }, // N - green
        { pos: [0, 0, 1.2] as [number, number, number], color: 0xffffff, radius: 0.2 },  // H - white
        { pos: [-1.2, 0, 0] as [number, number, number], color: 0x4444ff, radius: 0.35 }, // C - blue
        { pos: [0, -1.2, 0] as [number, number, number], color: 0x44ff44, radius: 0.35 }, // N - green
    ]

    atoms.forEach(atom => {
        const geom = new THREE.SphereGeometry(atom.radius, 16, 16)
        const mat = new THREE.MeshStandardMaterial({ color: atom.color })
        const mesh = new THREE.Mesh(geom, mat)
        mesh.position.set(...atom.pos)
        group.add(mesh)
    })

    // Bonds (cylinders between atoms)
    const bondPairs: [number, number][] = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]
    const bondMat = new THREE.MeshStandardMaterial({ color: 0x888888 })

    bondPairs.forEach(([i, j]) => {
        const start = new THREE.Vector3(...atoms[i].pos)
        const end = new THREE.Vector3(...atoms[j].pos)
        const mid = start.clone().add(end).multiplyScalar(0.5)
        const length = start.distanceTo(end)

        const bondGeom = new THREE.CylinderGeometry(0.08, 0.08, length, 8)
        const bond = new THREE.Mesh(bondGeom, bondMat)
        bond.position.copy(mid)
        bond.lookAt(end)
        bond.rotateX(Math.PI / 2)
        group.add(bond)
    })

    // Set initial rotation
    group.rotation.x = 0.3
    group.rotation.y = 0.2

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                <group ref={groupRef}>
                    {/* Molecule placeholder - actual PDB loader would replace this */}
                    {null}
                </group>
            </scene>

            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} position={[0, 0, 6]} />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default LoaderPDB

/*
Example usage with actual PDB loader:
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader.js'

const loader = new PDBLoader()
loader.load('molecule.pdb', (pdb) => {
    scene.add(pdb.rootGroup)
})
*/