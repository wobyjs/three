/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_terrain_raycast

import { $, $$, useEffect, useThree } from '@woby/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'
import * as THREE from 'three'

export const GeometryTerrainRaycast = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const worldWidth = 256
        const worldDepth = 256
        const worldHalfWidth = worldWidth / 2
        const worldHalfDepth = worldDepth / 2

        const raycaster = new THREE.Raycaster()
        const pointer = new THREE.Vector2()

        const generateHeight = (width: number, height: number) => {
            const size = width * height
            const data = new Uint8Array(size)
            const perlin = new ImprovedNoise()
            const z = Math.random() * 100

            let quality = 1

            for (let j = 0; j < 4; j++) {
                for (let i = 0; i < size; i++) {
                    const x = i % width
                    const y = (i / width) | 0
                    data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75)
                }
                quality *= 5
            }

            return data
        }

        const generateTexture = (data: Uint8Array, width: number, height: number) => {
            const canvasScaled = document.createElement('canvas')
            canvasScaled.width = width
            canvasScaled.height = height

            const context = canvasScaled.getContext('2d')!
            context.fillStyle = '#000'
            context.fillRect(0, 0, width, height)

            const image = context.getImageData(0, 0, canvasScaled.width, canvasScaled.height)
            const imageData = image.data

            const vector3 = new THREE.Vector3(0, 0, 0)
            const sun = new THREE.Vector3(1, 1, 1)
            sun.normalize()

            for (let i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
                vector3.x = data[j - 2] - data[j + 2]
                vector3.y = 2
                vector3.z = data[j - width * 2] - data[j + width * 2]
                vector3.normalize()

                const shade = vector3.dot(sun)

                imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007)
                imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007)
                imageData[i + 2] = (shade * 96) * (0.5 + data[j] * 0.007)
            }

            context.putImageData(image, 0, 0)

            const canvasScaled4x = document.createElement('canvas')
            canvasScaled4x.width = width * 4
            canvasScaled4x.height = height * 4

            const context4x = canvasScaled4x.getContext('2d')!
            context4x.scale(4, 4)
            context4x.drawImage(canvasScaled, 0, 0)

            const image4x = context4x.getImageData(0, 0, canvasScaled4x.width, canvasScaled4x.height)
            const imageData4x = image4x.data

            for (let i = 0, l = imageData4x.length; i < l; i += 4) {
                const v = (Math.random() * 5) | 0
                imageData4x[i] += v
                imageData4x[i + 1] += v
                imageData4x[i + 2] += v
            }

            context4x.putImageData(image4x, 0, 0)

            return canvasScaled4x
        }

        const data = generateHeight(worldWidth, worldDepth)

        const geometry = new THREE.PlaneGeometry(7500, 7500, worldWidth - 1, worldDepth - 1)
        geometry.rotateX(-Math.PI / 2)

        const vertices = geometry.attributes.position.array

        for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
            vertices[j + 1] = data[i] * 10
        }

        geometry.computeBoundingSphere()

        const texture = new THREE.CanvasTexture(generateTexture(data, worldWidth, worldDepth))
        texture.wrapS = THREE.ClampToEdgeWrapping
        texture.wrapT = THREE.ClampToEdgeWrapping
        texture.colorSpace = THREE.SRGBColorSpace

        const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: texture }))
        scene.add(mesh)

        const geometryHelper = new THREE.ConeGeometry(20, 100, 3)
        geometryHelper.translate(0, 50, 0)
        geometryHelper.rotateX(Math.PI / 2)
        const helper = new THREE.Mesh(geometryHelper, new THREE.MeshNormalMaterial())
        scene.add(helper)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.minDistance = 1000
        controls.maxDistance = 10000
        controls.maxPolarAngle = Math.PI / 2

        controls.target.y = data[worldHalfWidth + worldHalfDepth * worldWidth] + 500
        camera.position.y = controls.target.y + 2000
        camera.position.x = 2000
        controls.update()

        const onPointerMove = (event: PointerEvent) => {
            pointer.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1
            pointer.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
            raycaster.setFromCamera(pointer, camera)

            const intersects = raycaster.intersectObject(mesh)

            if (intersects.length > 0) {
                helper.position.set(0, 0, 0)
                helper.lookAt(intersects[0].face.normal)
                helper.position.copy(intersects[0].point)
            }
        }

        renderer.domElement.addEventListener('pointermove', onPointerMove)

        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            renderer.domElement.removeEventListener('pointermove', onPointerMove)
            scene.remove(mesh, helper)
            geometry.dispose()
            geometryHelper.dispose()
            texture.dispose()
            ;(mesh.material as THREE.Material).dispose()
            ;(helper.material as THREE.Material).dispose()
            controls.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xbfd1e5)}>
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={10} far={20000} />
        </canvas3D>
    )
}

export default GeometryTerrainRaycast