/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_nurbs

import { $, $$, useEffect, useThree } from '@woby/three'
import { NURBSCurve } from 'three/examples/jsm/curves/NURBSCurve.js'
import { NURBSSurface } from 'three/examples/jsm/curves/NURBSSurface.js'
import { NURBSVolume } from 'three/examples/jsm/curves/NURBSVolume.js'
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js'
import * as THREE from 'three'

export const WebglGeometryNurbs = () => {
    const { scene, camera } = useThree()

    useEffect(() => {
        const group = new THREE.Group()
        group.position.y = 50
        scene.add(group)

        // NURBS curve
        const nurbsControlPoints = []
        const nurbsKnots = []
        const nurbsDegree = 3

        for (let i = 0; i <= nurbsDegree; i++) {
            nurbsKnots.push(0)
        }

        for (let i = 0, j = 20; i < j; i++) {
            nurbsControlPoints.push(
                new THREE.Vector4(
                    Math.random() * 400 - 200,
                    Math.random() * 400,
                    Math.random() * 400 - 200,
                    1
                )
            )

            const knot = (i + 1) / (j - nurbsDegree)
            nurbsKnots.push(THREE.MathUtils.clamp(knot, 0, 1))
        }

        const nurbsCurve = new NURBSCurve(nurbsDegree, nurbsKnots, nurbsControlPoints)

        const nurbsGeometry = new THREE.BufferGeometry()
        nurbsGeometry.setFromPoints(nurbsCurve.getPoints(200))

        const nurbsMaterial = new THREE.LineBasicMaterial({ color: 0x333333 })

        const nurbsLine = new THREE.Line(nurbsGeometry, nurbsMaterial)
        nurbsLine.position.set(0, -100, 0)
        group.add(nurbsLine)

        const nurbsControlPointsGeometry = new THREE.BufferGeometry()
        nurbsControlPointsGeometry.setFromPoints(nurbsCurve.controlPoints)

        const nurbsControlPointsMaterial = new THREE.LineBasicMaterial({
            color: 0x333333,
            opacity: 0.25,
            transparent: true
        })

        const nurbsControlPointsLine = new THREE.Line(nurbsControlPointsGeometry, nurbsControlPointsMaterial)
        nurbsControlPointsLine.position.copy(nurbsLine.position)
        group.add(nurbsControlPointsLine)

        // NURBS surface
        {
            const nsControlPoints = [
                [
                    new THREE.Vector4(-200, -200, 100, 1),
                    new THREE.Vector4(-200, -100, -200, 1),
                    new THREE.Vector4(-200, 100, 250, 1),
                    new THREE.Vector4(-200, 200, -100, 1)
                ],
                [
                    new THREE.Vector4(0, -200, 0, 1),
                    new THREE.Vector4(0, -100, -100, 5),
                    new THREE.Vector4(0, 100, 150, 5),
                    new THREE.Vector4(0, 200, 0, 1)
                ],
                [
                    new THREE.Vector4(200, -200, -100, 1),
                    new THREE.Vector4(200, -100, 200, 1),
                    new THREE.Vector4(200, 100, -250, 1),
                    new THREE.Vector4(200, 200, 100, 1)
                ]
            ]
            const degree1 = 2
            const degree2 = 3
            const knots1 = [0, 0, 0, 1, 1, 1]
            const knots2 = [0, 0, 0, 0, 1, 1, 1, 1]
            const nurbsSurface = new NURBSSurface(degree1, degree2, knots1, knots2, nsControlPoints)

            const map = new THREE.TextureLoader().load('textures/uv_grid_opengl.jpg')
            map.wrapS = map.wrapT = THREE.RepeatWrapping
            map.anisotropy = 16
            map.colorSpace = THREE.SRGBColorSpace

            const getSurfacePoint = (u: number, v: number, target: THREE.Vector3) => {
                return nurbsSurface.getPoint(u, v, target)
            }

            const geometry = new ParametricGeometry(getSurfacePoint, 20, 20)
            const material = new THREE.MeshLambertMaterial({ map: map, side: THREE.DoubleSide })
            const object = new THREE.Mesh(geometry, material)
            object.position.set(-400, 100, 0)
            object.scale.multiplyScalar(1)
            group.add(object)
        }

        // NURBS volume (simplified for brevity)
        {
            const nsControlPoints = [
                [
                    [new THREE.Vector4(-200, -200, -200, 1), new THREE.Vector4(-200, -200, 200, 1)],
                    [new THREE.Vector4(-200, -100, -200, 1), new THREE.Vector4(-200, -100, 200, 1)],
                    [new THREE.Vector4(-200, 100, -200, 1), new THREE.Vector4(-200, 100, 200, 1)],
                    [new THREE.Vector4(-200, 200, -200, 1), new THREE.Vector4(-200, 200, 200, 1)]
                ],
                [
                    [new THREE.Vector4(0, -200, -200, 1), new THREE.Vector4(0, -200, 200, 1)],
                    [new THREE.Vector4(0, -100, -200, 1), new THREE.Vector4(0, -100, 200, 1)],
                    [new THREE.Vector4(0, 100, -200, 1), new THREE.Vector4(0, 100, 200, 1)],
                    [new THREE.Vector4(0, 200, -200, 1), new THREE.Vector4(0, 200, 200, 1)]
                ],
                [
                    [new THREE.Vector4(200, -200, -200, 1), new THREE.Vector4(200, -200, 200, 1)],
                    [new THREE.Vector4(200, -100, 0, 1), new THREE.Vector4(200, -100, 100, 1)],
                    [new THREE.Vector4(200, 100, 0, 1), new THREE.Vector4(200, 100, 100, 1)],
                    [new THREE.Vector4(200, 200, 0, 1), new THREE.Vector4(200, 200, 100, 1)]
                ]
            ]
            const degree1 = 2
            const degree2 = 3
            const degree3 = 1
            const knots1 = [0, 0, 0, 1, 1, 1]
            const knots2 = [0, 0, 0, 0, 1, 1, 1, 1]
            const knots3 = [0, 0, 1, 1]
            const nurbsVolume = new NURBSVolume(degree1, degree2, degree3, knots1, knots2, knots3, nsControlPoints)

            const map = new THREE.TextureLoader().load('textures/uv_grid_opengl.jpg')
            map.wrapS = map.wrapT = THREE.RepeatWrapping
            map.anisotropy = 16
            map.colorSpace = THREE.SRGBColorSpace

            const getSurfacePointFront = (u: number, v: number, target: THREE.Vector3) => nurbsVolume.getPoint(u, v, 0, target)

            const geometryFront = new ParametricGeometry(getSurfacePointFront, 20, 20)
            const materialFront = new THREE.MeshLambertMaterial({ map: map, side: THREE.DoubleSide })
            const objectFront = new THREE.Mesh(geometryFront, materialFront)
            objectFront.position.set(400, 100, 0)
            objectFront.scale.multiplyScalar(0.5)
            group.add(objectFront)
        }

        let targetRotation = 0
        let targetRotationOnPointerDown = 0
        let pointerX = 0
        let pointerXOnPointerDown = 0
        const windowHalfX = window.innerWidth / 2

        const onPointerDown = (event: PointerEvent) => {
            if (event.isPrimary === false) return
            pointerXOnPointerDown = event.clientX - windowHalfX
            targetRotationOnPointerDown = targetRotation
            document.addEventListener('pointermove', onPointerMove)
            document.addEventListener('pointerup', onPointerUp)
        }

        const onPointerMove = (event: PointerEvent) => {
            if (event.isPrimary === false) return
            pointerX = event.clientX - windowHalfX
            targetRotation = targetRotationOnPointerDown + (pointerX - pointerXOnPointerDown) * 0.02
        }

        const onPointerUp = (event: PointerEvent) => {
            if (event.isPrimary === false) return
            document.removeEventListener('pointermove', onPointerMove)
            document.removeEventListener('pointerup', onPointerUp)
        }

        document.addEventListener('pointerdown', onPointerDown)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            group.rotation.y += (targetRotation - group.rotation.y) * 0.05
        }
        animate()

        return () => {
            scene.remove(group)
            document.removeEventListener('pointerdown', onPointerDown)
            group.traverse((obj) => {
                if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
                    if (obj.geometry) obj.geometry.dispose()
                    if (obj.material) {
                        if (Array.isArray(obj.material)) {
                            obj.material.forEach(m => m.dispose())
                        } else {
                            obj.material.dispose()
                        }
                    }
                }
            })
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xf0f0f0)}>
                <ambientLight intensity={1} />
                <directionalLight intensity={3} position={[1, 1, 1]} />
            </scene>
            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={2000} position={[0, 150, 750]} />
        </canvas3D>
    )
}

export default WebglGeometryNurbs