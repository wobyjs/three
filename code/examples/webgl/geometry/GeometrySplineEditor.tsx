/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_spline_editor

import { $, $$, useEffect, useThree } from '@woby/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'
import * as THREE from 'three'

export const GeometrySplineEditor = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const splineHelperObjects: THREE.Mesh[] = []
        const positions: THREE.Vector3[] = []
        const point = new THREE.Vector3()
        const raycaster = new THREE.Raycaster()
        const pointer = new THREE.Vector2()
        const onUpPosition = new THREE.Vector2()
        const onDownPosition = new THREE.Vector2()
        const geometry = new THREE.BoxGeometry(20, 20, 20)
        const ARC_SEGMENTS = 200
        const splines: Record<string, THREE.CatmullRomCurve3> = {}

        const params = {
            uniform: true,
            tension: 0.5,
            centripetal: true,
            chordal: true,
        }

        scene.background = new THREE.Color(0xf0f0f0)

        const light = new THREE.SpotLight(0xffffff, 4.5)
        light.position.set(0, 1500, 200)
        light.angle = Math.PI * 0.2
        light.castShadow = true
        light.shadow.camera.near = 200
        light.shadow.camera.far = 2000
        light.shadow.bias = -0.000222
        light.shadow.mapSize.width = 1024
        light.shadow.mapSize.height = 1024
        scene.add(light)

        const planeGeometry = new THREE.PlaneGeometry(2000, 2000)
        planeGeometry.rotateX(-Math.PI / 2)
        const planeMaterial = new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.2 })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)
        plane.position.y = -200
        plane.receiveShadow = true
        scene.add(plane)

        const helper = new THREE.GridHelper(2000, 100)
        helper.position.y = -199
        helper.material.opacity = 0.25
        helper.material.transparent = true
        scene.add(helper)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.damping = 0.2

        const transformControl = new TransformControls(camera, renderer.domElement)
        transformControl.addEventListener('dragging-changed', (event) => {
            controls.enabled = !event.value
        })
        scene.add(transformControl.getHelper())

        const addSplineObject = (position?: THREE.Vector3) => {
            const material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
            const object = new THREE.Mesh(geometry, material)
            if (position) {
                object.position.copy(position)
            } else {
                object.position.x = Math.random() * 1000 - 500
                object.position.y = Math.random() * 600
                object.position.z = Math.random() * 800 - 400
            }
            object.castShadow = true
            object.receiveShadow = true
            scene.add(object)
            splineHelperObjects.push(object)
            return object
        }

        const load = (new_positions: THREE.Vector3[]) => {
            while (new_positions.length > positions.length) {
                addSplineObject()
                positions.push(splineHelperObjects[splineHelperObjects.length - 1].position)
            }
            while (new_positions.length < positions.length) {
                const obj = splineHelperObjects.pop()
                if (obj) scene.remove(obj)
                positions.pop()
            }
            for (let i = 0; i < positions.length; i++) {
                positions[i].copy(new_positions[i])
            }
            updateSplineOutline()
        }

        const updateSplineOutline = () => {
            for (const k in splines) {
                const spline = splines[k]
                const splineMesh = spline.mesh
                const position = splineMesh.geometry.attributes.position
                for (let i = 0; i < ARC_SEGMENTS; i++) {
                    const t = i / (ARC_SEGMENTS - 1)
                    spline.getPoint(t, point)
                    position.setXYZ(i, point.x, point.y, point.z)
                }
                position.needsUpdate = true
            }
        }

        const initialPositions = [
            new THREE.Vector3(289.76843686945404, 452.51481137238443, 56.10018915737797),
            new THREE.Vector3(-53.56300074753207, 171.49711742836848, -14.495472686253045),
            new THREE.Vector3(-91.40118730204415, 176.4306956436485, -6.958271935582161),
            new THREE.Vector3(-383.785318791128, 491.1365363371675, 47.869296953772746)
        ]

        for (let i = 0; i < 4; i++) {
            addSplineObject(initialPositions[i])
            positions.push(splineHelperObjects[i].position)
        }

        const geom = new THREE.BufferGeometry()
        geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ARC_SEGMENTS * 3), 3))

        let curve = new THREE.CatmullRomCurve3(positions)
        curve.curveType = 'catmullrom'
        curve.mesh = new THREE.Line(geom.clone(), new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 0.35 }))
        curve.mesh.castShadow = true
        splines.uniform = curve

        curve = new THREE.CatmullRomCurve3(positions)
        curve.curveType = 'centripetal'
        curve.mesh = new THREE.Line(geom.clone(), new THREE.LineBasicMaterial({ color: 0x00ff00, opacity: 0.35 }))
        curve.mesh.castShadow = true
        splines.centripetal = curve

        curve = new THREE.CatmullRomCurve3(positions)
        curve.curveType = 'chordal'
        curve.mesh = new THREE.Line(geom.clone(), new THREE.LineBasicMaterial({ color: 0x0000ff, opacity: 0.35 }))
        curve.mesh.castShadow = true
        splines.chordal = curve

        for (const k in splines) {
            scene.add(splines[k].mesh)
        }

        load(initialPositions)

        transformControl.addEventListener('objectChange', () => {
            updateSplineOutline()
        })

        const onPointerDown = (event: PointerEvent) => {
            onDownPosition.x = event.clientX
            onDownPosition.y = event.clientY
        }

        const onPointerUp = (event: PointerEvent) => {
            onUpPosition.x = event.clientX
            onUpPosition.y = event.clientY
            if (onDownPosition.distanceTo(onUpPosition) === 0) {
                transformControl.detach()
            }
        }

        const onPointerMove = (event: PointerEvent) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
            raycaster.setFromCamera(pointer, camera)
            const intersects = raycaster.intersectObjects(splineHelperObjects, false)
            if (intersects.length > 0) {
                const object = intersects[0].object
                if (object !== transformControl.object) {
                    transformControl.attach(object)
                }
            }
        }

        document.addEventListener('pointerdown', onPointerDown)
        document.addEventListener('pointerup', onPointerUp)
        document.addEventListener('pointermove', onPointerMove)

        const animate = () => {
            requestAnimationFrame(animate)
            splines.uniform.mesh.visible = params.uniform
            splines.centripetal.mesh.visible = params.centripetal
            splines.chordal.mesh.visible = params.chordal
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            document.removeEventListener('pointerdown', onPointerDown)
            document.removeEventListener('pointerup', onPointerUp)
            document.removeEventListener('pointermove', onPointerMove)
            scene.remove(plane, helper)
            splineHelperObjects.forEach(obj => {
                scene.remove(obj)
                obj.geometry.dispose()
                ;(obj.material as THREE.Material).dispose()
            })
            for (const k in splines) {
                scene.remove(splines[k].mesh)
                splines[k].mesh.geometry.dispose()
                ;(splines[k].mesh.material as THREE.Material).dispose()
            }
            controls.dispose()
            transformControl.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} shadowMapEnabled shadowMapType={THREE.PCFShadowMap} />
            <scene>
                <ambientLight intensity={3} />
            </scene>
            <perspectiveCamera fov={70} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[0, 250, 1000]} />
        </canvas3D>
    )
}

export default GeometrySplineEditor