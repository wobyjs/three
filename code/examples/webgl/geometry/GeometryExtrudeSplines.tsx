/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_extrude_splines

import { $, $$, useEffect, useThree } from '@woby/three'
import * as Curves from 'three/examples/jsm/curves/CurveExtras.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'three'

export const GeometryExtrudeSplines = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const pipeSpline = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 10, -10), new THREE.Vector3(10, 0, -10),
            new THREE.Vector3(20, 0, 0), new THREE.Vector3(30, 0, 10),
            new THREE.Vector3(30, 0, 20), new THREE.Vector3(20, 0, 30),
            new THREE.Vector3(10, 0, 30), new THREE.Vector3(0, 0, 30),
            new THREE.Vector3(-10, 10, 30), new THREE.Vector3(-10, 20, 30),
            new THREE.Vector3(0, 30, 30), new THREE.Vector3(10, 30, 30),
            new THREE.Vector3(20, 30, 15), new THREE.Vector3(10, 30, 10),
            new THREE.Vector3(0, 30, 10), new THREE.Vector3(-10, 20, 10),
            new THREE.Vector3(-10, 10, 10), new THREE.Vector3(0, 0, 10),
            new THREE.Vector3(10, -10, 10), new THREE.Vector3(20, -15, 10),
            new THREE.Vector3(30, -15, 10), new THREE.Vector3(40, -15, 10),
            new THREE.Vector3(50, -15, 10), new THREE.Vector3(60, 0, 10),
            new THREE.Vector3(70, 0, 0), new THREE.Vector3(80, 0, 0),
            new THREE.Vector3(90, 0, 0), new THREE.Vector3(100, 0, 0)
        ])

        const sampleClosedSpline = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, -40, -40),
            new THREE.Vector3(0, 40, -40),
            new THREE.Vector3(0, 140, -40),
            new THREE.Vector3(0, 40, 40),
            new THREE.Vector3(0, -40, 40)
        ])
        sampleClosedSpline.curveType = 'catmullrom'
        sampleClosedSpline.closed = true

        const splines: Record<string, THREE.Curve<THREE.Vector3>> = {
            GrannyKnot: new Curves.GrannyKnot(),
            HeartCurve: new Curves.HeartCurve(3.5),
            VivianiCurve: new Curves.VivianiCurve(70),
            KnotCurve: new Curves.KnotCurve(),
            HelixCurve: new Curves.HelixCurve(),
            TrefoilKnot: new Curves.TrefoilKnot(),
            TorusKnot: new Curves.TorusKnot(20),
            CinquefoilKnot: new Curves.CinquefoilKnot(20),
            TrefoilPolynomialKnot: new Curves.TrefoilPolynomialKnot(14),
            FigureEightPolynomialKnot: new Curves.FigureEightPolynomialKnot(),
            DecoratedTorusKnot4a: new Curves.DecoratedTorusKnot4a(),
            DecoratedTorusKnot4b: new Curves.DecoratedTorusKnot4b(),
            DecoratedTorusKnot5a: new Curves.DecoratedTorusKnot5a(),
            DecoratedTorusKnot5c: new Curves.DecoratedTorusKnot5c(),
            PipeSpline: pipeSpline,
            SampleClosedSpline: sampleClosedSpline
        }

        const parent = new THREE.Object3D()
        scene.add(parent)

        const material = new THREE.MeshLambertMaterial({ color: 0xff00ff })
        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            opacity: 0.3,
            wireframe: true,
            transparent: true
        })

        const params = {
            spline: 'GrannyKnot' as keyof typeof splines,
            scale: 4,
            extrusionSegments: 100,
            radiusSegments: 3,
            closed: true
        }

        let mesh: THREE.Mesh

        const addTube = () => {
            if (mesh !== undefined) {
                parent.remove(mesh)
                mesh.geometry.dispose()
            }

            const extrudePath = splines[params.spline]
            const tubeGeometry = new THREE.TubeGeometry(
                extrudePath,
                params.extrusionSegments,
                2,
                params.radiusSegments,
                params.closed
            )

            mesh = new THREE.Mesh(tubeGeometry, material)
            const wireframe = new THREE.Mesh(tubeGeometry, wireframeMaterial)
            mesh.add(wireframe)
            mesh.scale.set(params.scale, params.scale, params.scale)
            parent.add(mesh)
        }

        addTube()

        const splineCamera = new THREE.PerspectiveCamera(84, window.innerWidth / window.innerHeight, 0.01, 1000)
        parent.add(splineCamera)

        const cameraHelper = new THREE.CameraHelper(splineCamera)
        scene.add(cameraHelper)

        const cameraEye = new THREE.Mesh(
            new THREE.SphereGeometry(5),
            new THREE.MeshBasicMaterial({ color: 0xdddddd })
        )
        parent.add(cameraEye)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.minDistance = 100
        controls.maxDistance = 2000

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)

            const time = Date.now()
            const looptime = 20 * 1000
            const t = (time % looptime) / looptime

            const tubeGeometry = mesh.geometry as THREE.TubeGeometry
            const position = new THREE.Vector3()
            tubeGeometry.parameters.path.getPointAt(t, position)
            position.multiplyScalar(params.scale)

            const segments = tubeGeometry.tangents.length
            const pickt = t * segments
            const pick = Math.floor(pickt)
            const pickNext = (pick + 1) % segments

            const binormal = new THREE.Vector3()
            binormal.subVectors(tubeGeometry.binormals[pickNext], tubeGeometry.binormals[pick])
            binormal.multiplyScalar(pickt - pick).add(tubeGeometry.binormals[pick])

            const direction = new THREE.Vector3()
            tubeGeometry.parameters.path.getTangentAt(t, direction)
            const offset = 15

            const normal = new THREE.Vector3()
            normal.copy(binormal).cross(direction)

            position.add(normal.clone().multiplyScalar(offset))

            splineCamera.position.copy(position)
            cameraEye.position.copy(position)

            const lookAt = new THREE.Vector3()
            tubeGeometry.parameters.path.getPointAt((t + 30 / tubeGeometry.parameters.path.getLength()) % 1, lookAt)
            lookAt.multiplyScalar(params.scale)

            lookAt.copy(position).add(direction)
            splineCamera.matrix.lookAt(splineCamera.position, lookAt, normal)
            splineCamera.quaternion.setFromRotationMatrix(splineCamera.matrix)

            cameraHelper.update()

            renderer.render(scene, camera)
        }
        animate()

        return () => {
            scene.remove(parent)
            if (mesh && mesh.geometry) mesh.geometry.dispose()
            material.dispose()
            wireframeMaterial.dispose()
            controls.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xf0f0f0)}>
                <ambientLight intensity={1} />
                <directionalLight intensity={1.5} position={[0, 0, 1]} />
            </scene>
            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={0.01} far={10000} position={[0, 50, 500]} />
        </canvas3D>
    )
}

export default GeometryExtrudeSplines