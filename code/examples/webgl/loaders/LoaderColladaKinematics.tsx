/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_loader_collada_kinematics

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import * as THREE from 'three'

export const LoaderColladaKinematics = () => {
    const { scene } = useThree()

    useEffect(() => {
        // Kinematic arm - robotic arm animation from Collada
        const loader = new ColladaLoader()
        // loader.setPath('/models/')

        const group = new THREE.Group()

        // Base
        const baseGeom = new THREE.CylinderGeometry(1, 1.2, 0.5, 16)
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x444444 })
        const base = new THREE.Mesh(baseGeom, baseMat)
        group.add(base)

        // Lower arm
        const lowerArmGroup = new THREE.Group()
        lowerArmGroup.position.y = 0.25

        const lowerArmGeom = new THREE.BoxGeometry(0.3, 2, 0.3)
        const armMat = new THREE.MeshStandardMaterial({ color: 0xff6600 })
        const lowerArm = new THREE.Mesh(lowerArmGeom, armMat)
        lowerArm.position.y = 1
        lowerArmGroup.add(lowerArm)

        // Joint
        const jointGeom = new THREE.SphereGeometry(0.25, 16, 16)
        const jointMat = new THREE.MeshStandardMaterial({ color: 0x666666 })
        const joint1 = new THREE.Mesh(jointGeom, jointMat)
        joint1.position.y = 2
        lowerArmGroup.add(joint1)

        // Upper arm
        const upperArmGroup = new THREE.Group()
        upperArmGroup.position.y = 2

        const upperArmGeom = new THREE.BoxGeometry(0.25, 1.5, 0.25)
        const upperArm = new THREE.Mesh(upperArmGeom, armMat)
        upperArm.position.y = 0.75
        upperArmGroup.add(upperArm)

        const joint2 = new THREE.Mesh(jointGeom, jointMat)
        joint2.position.y = 1.5
        upperArmGroup.add(joint2)

        // End effector
        const effectorGroup = new THREE.Group()
        effectorGroup.position.y = 1.5

        const effectorGeom = new THREE.ConeGeometry(0.2, 0.5, 8)
        const effectorMat = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        const effector = new THREE.Mesh(effectorGeom, effectorMat)
        effector.rotation.x = Math.PI
        effector.position.y = 0.25
        effectorGroup.add(effector)

        upperArmGroup.add(effectorGroup)
        lowerArmGroup.add(upperArmGroup)
        group.add(lowerArmGroup)

        scene.add(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()

            // Animate arm
            lowerArmGroup.rotation.y = Math.sin(t * 0.5) * 0.5
            upperArmGroup.rotation.z = Math.sin(t * 0.7) * 0.3
            effectorGroup.rotation.z = Math.sin(t * 1.5) * 0.5
        }
        animate()

        // Example loading actual Collada kinematics:
        // loader.load('robot.dae', (collada) => {
        //     const kinematics = collada.kinematics
        //     // Control joints via kinematics
        //     scene.add(collada.scene)
        // })

        return () => {
            scene.remove(group)
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[5, 5, 8]} />
            <scene>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </scene>
            <orbitControls />
        </canvas3D>
    )
}