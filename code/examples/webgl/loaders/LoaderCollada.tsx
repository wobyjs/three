/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_collada

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import * as THREE from 'three'

export const LoaderCollada = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Collada (DAE) model loader example
        const loader = new ColladaLoader()
        // loader.setPath('/models/')

        // Placeholder robot figure since no actual Collada model available
        const group = new THREE.Group()

        // Torso
        const torsoGeom = new THREE.BoxGeometry(1, 1.5, 0.5)
        const torsoMat = new THREE.MeshStandardMaterial({ color: 0x4488ff })
        const torso = new THREE.Mesh(torsoGeom, torsoMat)
        torso.position.y = 1.5
        group.add(torso)

        // Head
        const headGeom = new THREE.BoxGeometry(0.6, 0.6, 0.5)
        const headMat = new THREE.MeshStandardMaterial({ color: 0xffcc88 })
        const head = new THREE.Mesh(headGeom, headMat)
        head.position.y = 2.6
        group.add(head)

        // Arms
        const armGeom = new THREE.BoxGeometry(0.3, 1, 0.3)
        const armMat = new THREE.MeshStandardMaterial({ color: 0x4488ff })

        const leftArm = new THREE.Mesh(armGeom, armMat)
        leftArm.position.set(-0.8, 1.5, 0)
        group.add(leftArm)

        const rightArm = new THREE.Mesh(armGeom, armMat)
        rightArm.position.set(0.8, 1.5, 0)
        group.add(rightArm)

        // Legs
        const legGeom = new THREE.BoxGeometry(0.4, 1, 0.4)
        const legMat = new THREE.MeshStandardMaterial({ color: 0x333366 })

        const leftLeg = new THREE.Mesh(legGeom, legMat)
        leftLeg.position.set(-0.3, 0, 0)
        group.add(leftLeg)

        const rightLeg = new THREE.Mesh(legGeom, legMat)
        rightLeg.position.set(0.3, 0, 0)
        group.add(rightLeg)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.y = t * 0.5
        }
        animate()

        // Example loading actual Collada file:
        // loader.load('model.dae', (result) => {
        //     scene.add(result.scene)
        //     const mixer = new THREE.AnimationMixer(result.scene)
        //     const clip = THREE.AnimationClip.findByName(result.animations, 'Walk')
        //     if (clip) mixer.clipAction(clip).play()
        // })

        return () => {
            scene.remove(group)
            torsoGeom.dispose()
            headGeom.dispose()
            armGeom.dispose()
            legGeom.dispose()
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 3, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}