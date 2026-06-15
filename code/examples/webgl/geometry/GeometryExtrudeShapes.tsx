/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_extrude_shapes

import { $, $$, useEffect, useThree } from '@woby/three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
import * as THREE from 'three'

export const GeometryExtrudeShapes = () => {
    const { scene, camera, renderer, container } = useThree()

    useEffect(() => {
        // Triangle shape along closed spline
        const closedSpline = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-60, -100, 60),
            new THREE.Vector3(-60, 20, 60),
            new THREE.Vector3(-60, 120, 60),
            new THREE.Vector3(60, 20, -60),
            new THREE.Vector3(60, -100, -60)
        ])
        closedSpline.curveType = 'catmullrom'
        closedSpline.closed = true

        const extrudeSettings1 = {
            steps: 100,
            bevelEnabled: false,
            extrudePath: closedSpline
        }

        const pts1 = []
        const count = 3
        for (let i = 0; i < count; i++) {
            const l = 20
            const a = 2 * i / count * Math.PI
            pts1.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l))
        }

        const shape1 = new THREE.Shape(pts1)
        const geometry1 = new THREE.ExtrudeGeometry(shape1, extrudeSettings1)
        const material1 = new THREE.MeshLambertMaterial({ color: 0xb00000, wireframe: false })
        const mesh1 = new THREE.Mesh(geometry1, material1)
        scene.add(mesh1)

        // Star shape along random spline
        const randomPoints = []
        for (let i = 0; i < 10; i++) {
            randomPoints.push(new THREE.Vector3(
                (i - 4.5) * 50,
                THREE.MathUtils.randFloat(-50, 50),
                THREE.MathUtils.randFloat(-50, 50)
            ))
        }

        const randomSpline = new THREE.CatmullRomCurve3(randomPoints)

        const extrudeSettings2 = {
            steps: 200,
            bevelEnabled: false,
            extrudePath: randomSpline
        }

        const pts2 = []
        const numPts = 5
        for (let i = 0; i < numPts * 2; i++) {
            const l = i % 2 == 1 ? 10 : 20
            const a = i / numPts * Math.PI
            pts2.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l))
        }

        const shape2 = new THREE.Shape(pts2)
        const geometry2 = new THREE.ExtrudeGeometry(shape2, extrudeSettings2)
        const material2 = new THREE.MeshLambertMaterial({ color: 0xff8000, wireframe: false })
        const mesh2 = new THREE.Mesh(geometry2, material2)
        scene.add(mesh2)

        // Star with bevel
        const extrudeSettings3 = {
            depth: 20,
            steps: 1,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 4,
            bevelSegments: 1
        }

        const geometry3 = new THREE.ExtrudeGeometry(shape2, extrudeSettings3)
        const materials = [material1, material2]
        const mesh3 = new THREE.Mesh(geometry3, materials)
        mesh3.position.set(50, 100, 50)
        scene.add(mesh3)

        const controls = new TrackballControls(camera, renderer.domElement)
        controls.minDistance = 200
        controls.maxDistance = 500

        const animate = () => {
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            scene.remove(mesh1, mesh2, mesh3)
            geometry1.dispose()
            geometry2.dispose()
            geometry3.dispose()
            material1.dispose()
            material2.dispose()
            controls.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x222222)}>
                <ambientLight intensity={0.666666} />
                <pointLight intensity={3} position={[0, 0, 500]} />
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={1000} position={[0, 0, 500]} />
        </canvas3D>
    )
}

export default GeometryExtrudeShapes