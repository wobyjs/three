/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_text

import { $, $$, useEffect, useThree } from '@woby/three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as THREE from 'three'

THREE.Cache.enabled = true

export const GeometryText = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const materials = [
            new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }),
            new THREE.MeshPhongMaterial({ color: 0xffffff })
        ]

        const group = new THREE.Group()
        group.position.y = 100
        scene.add(group)

        const loader = new FontLoader()
        loader.load('fonts/helvetiker_bold.typeface.json', (font) => {
            const text = 'three.js'
            const textGeo = new TextGeometry(text, {
                font: font,
                size: 70,
                depth: 20,
                curveSegments: 4,
                bevelThickness: 2,
                bevelSize: 1.5,
                bevelEnabled: true
            })

            textGeo.computeBoundingBox()

            const centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x)

            const textMesh1 = new THREE.Mesh(textGeo, materials)
            textMesh1.position.x = centerOffset
            textMesh1.position.y = 30
            textMesh1.position.z = 0
            textMesh1.rotation.x = 0
            textMesh1.rotation.y = Math.PI * 2
            group.add(textMesh1)

            const textMesh2 = new THREE.Mesh(textGeo, materials)
            textMesh2.position.x = centerOffset
            textMesh2.position.y = -30
            textMesh2.position.z = 20
            textMesh2.rotation.x = Math.PI
            textMesh2.rotation.y = Math.PI * 2
            group.add(textMesh2)
        })

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(10000, 10000),
            new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true })
        )
        plane.position.y = 100
        plane.rotation.x = -Math.PI / 2
        scene.add(plane)

        scene.fog = new THREE.Fog(0x000000, 250, 1400)

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4)
        dirLight.position.set(0, 0, 1).normalize()
        scene.add(dirLight)

        const pointLight = new THREE.PointLight(0xffffff, 4.5, 0, 0)
        pointLight.color.setHSL(Math.random(), 1, 0.5)
        pointLight.position.set(0, 100, 90)
        scene.add(pointLight)

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

        renderer.domElement.style.touchAction = 'none'
        renderer.domElement.addEventListener('pointerdown', onPointerDown)

        const animate = () => {
            requestAnimationFrame(animate)
            group.rotation.y += (targetRotation - group.rotation.y) * 0.05
            camera.lookAt(0, 150, 0)
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            renderer.domElement.removeEventListener('pointerdown', onPointerDown)
            scene.remove(group, plane)
            group.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
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
            plane.geometry.dispose()
            ;(plane.material as THREE.Material).dispose()
            materials.forEach(m => m.dispose())
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0x000000)}>
            </scene>
            <perspectiveCamera fov={30} aspect={window.innerWidth / window.innerHeight} near={1} far={1500} position={[0, 400, 700]} />
        </canvas3D>
    )
}

export default GeometryText