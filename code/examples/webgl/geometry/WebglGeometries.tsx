/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometries

import { $, $$, useEffect, useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const WebglGeometries = () => {
    const { scene, camera } = useThree()
    const groupRef = $<THREE.Group>()

    useEffect(() => {
        const group = new THREE.Group()

        // Parametric geometries
        const planeFunc = (u: number, v: number, target: THREE.Vector3) => {
            target.set(u * 100, 0, v * 100)
        }
        const kleinFunc = (u: number, v: number, target: THREE.Vector3) => {
            u *= Math.PI
            v *= 2 * Math.PI

            u = u * 2
            const r = 4 * (1 - Math.cos(u / 2)) * Math.sin(v / 2) + 2

            if (u < Math.PI) {
                target.set(
                    6 * Math.cos(u) * (1 - Math.sin(u / 2)) + r * Math.cos(u) * Math.cos(v / 2),
                    16 * Math.sin(u) + r * Math.sin(u) * Math.cos(v / 2),
                    r * Math.sin(v / 2)
                )
            } else {
                target.set(
                    6 * Math.cos(u) * (1 - Math.sin(u / 2)) + r * Math.cos(v / 2 + Math.PI) * Math.cos(u),
                    16 * Math.sin(u),
                    r * Math.sin(v / 2 + Math.PI)
                )
            }
        }
        const mobiusFunc = (u: number, v: number, target: THREE.Vector3) => {
            u = u * Math.PI
            v = v * 2 * Math.PI - Math.PI

            const a = 2
            const x = Math.cos(u) * (a + v * Math.cos(u / 2))
            const y = Math.sin(u) * (a + v * Math.cos(u / 2))
            const z = v * Math.sin(u / 2)

            target.set(x, y, z)
        }

        // Sphere
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(75, 20, 10),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        sphere.position.set(-300, 0, 300)
        group.add(sphere)

        // Icosahedron
        const icosahedron = new THREE.Mesh(
            new THREE.IcosahedronGeometry(75),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        icosahedron.position.set(-100, 0, 300)
        group.add(icosahedron)

        // Octahedron
        const octahedron = new THREE.Mesh(
            new THREE.OctahedronGeometry(75),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        octahedron.position.set(100, 0, 300)
        group.add(octahedron)

        // Tetrahedron
        const tetrahedron = new THREE.Mesh(
            new THREE.TetrahedronGeometry(75),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        tetrahedron.position.set(300, 0, 300)
        group.add(tetrahedron)

        // Plane
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100, 4, 4),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        plane.position.set(-300, 0, 100)
        group.add(plane)

        // Box
        const box = new THREE.Mesh(
            new THREE.BoxGeometry(100, 100, 100, 4, 4, 4),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        box.position.set(-100, 0, 100)
        group.add(box)

        // Circle
        const circle = new THREE.Mesh(
            new THREE.CircleGeometry(50, 20, 0, Math.PI * 2),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        circle.position.set(100, 0, 100)
        group.add(circle)

        // Ring
        const ring = new THREE.Mesh(
            new THREE.RingGeometry(10, 50, 20, 5, 0, Math.PI * 2),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        ring.position.set(300, 0, 100)
        group.add(ring)

        // Cylinder
        const cylinder = new THREE.Mesh(
            new THREE.CylinderGeometry(25, 75, 100, 40, 5),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        cylinder.position.set(-300, 0, -100)
        group.add(cylinder)

        // Lathe
        const points = []
        for (let i = 0; i < 50; i++) {
            points.push(new THREE.Vector2(
                Math.sin(i * 0.2) * Math.sin(i * 0.1) * 15 + 50,
                (i - 5) * 2
            ))
        }
        const lathe = new THREE.Mesh(
            new THREE.LatheGeometry(points, 20),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        lathe.position.set(-100, 0, -100)
        group.add(lathe)

        // Torus
        const torus = new THREE.Mesh(
            new THREE.TorusGeometry(50, 20, 20, 20),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        torus.position.set(100, 0, -100)
        group.add(torus)

        // TorusKnot
        const torusKnot = new THREE.Mesh(
            new THREE.TorusKnotGeometry(50, 10, 50, 20),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        torusKnot.position.set(300, 0, -100)
        group.add(torusKnot)

        // Capsule
        const capsule = new THREE.Mesh(
            new THREE.CapsuleGeometry(20, 50),
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        capsule.position.set(-300, 0, -300)
        group.add(capsule)

        // Parametric Plane
        const paramPlaneGeom = new ParametricGeometry(planeFunc, 10, 10)
        paramPlaneGeom.scale(100, 100, 100)
        const paramPlane = new THREE.Mesh(
            paramPlaneGeom,
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        paramPlane.position.set(-100, 0, -300)
        group.add(paramPlane)

        // Parametric Klein
        const kleinGeom = new ParametricGeometry(kleinFunc, 20, 20)
        const klein = new THREE.Mesh(
            kleinGeom,
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        klein.position.set(100, 0, -300)
        klein.scale.multiplyScalar(5)
        group.add(klein)

        // Parametric Mobius
        const mobiusGeom = new ParametricGeometry(mobiusFunc, 20, 20)
        const mobius = new THREE.Mesh(
            mobiusGeom,
            new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
        )
        mobius.position.set(300, 0, -300)
        mobius.scale.multiplyScalar(30)
        group.add(mobius)

        scene.add(group)
        groupRef(group)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime()
            group.rotation.x = t * 0.1
            group.rotation.y = t * 0.05
            group.traverse((obj) => {
                if (obj.isMesh) {
                    obj.rotation.x = t * 5
                    obj.rotation.y = t * 2.5
                }
            })
        }
        animate()

        return () => {
            scene.remove(group)
            group.traverse((obj) => {
                if (obj.isMesh) {
                    obj.geometry.dispose()
                    (obj.material as THREE.Material).dispose()
                }
            })
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xfce4ec)}>
                <ambientLight intensity={1.5} />
                <pointLight intensity={2.5} position={[0, 500, 0]} />
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 500, 0]} />
        </canvas3D>
    )
}

import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js'

export default WebglGeometries