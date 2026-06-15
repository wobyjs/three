/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_terrain

import { $, $$, useEffect, useThree } from '@woby/three'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'
import { Timer } from 'three/examples/jsm/misc/Timer.js'
import * as THREE from 'three'

export const WebglGeometryTerrain = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const worldWidth = 256
        const worldDepth = 256

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

        camera.position.set(100, 800, -800)
        camera.lookAt(-100, 810, -800)

        const geometry = new THREE.PlaneGeometry(7500, 7500, worldWidth - 1, worldDepth - 1)
        geometry.rotateX(-Math.PI / 2)

        const vertices = geometry.attributes.position.array

        for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
            vertices[j + 1] = data[i] * 10
        }

        geometry.computeVertexNormals()

        const texture = new THREE.CanvasTexture(generateTexture(data, worldWidth, worldDepth))
        texture.wrapS = THREE.ClampToEdgeWrapping
        texture.wrapT = THREE.ClampToEdgeWrapping
        texture.colorSpace = THREE.SRGBColorSpace

        const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: texture }))
        scene.add(mesh)

        const controls = new FirstPersonControls(camera, renderer.domElement)
        controls.movementSpeed = 150
        controls.lookSpeed = 0.1

        const timer = new Timer()
        timer.connect(document)

        const animate = () => {
            requestAnimationFrame(animate)
            timer.update()
            controls.update(timer.getDelta())
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            scene.remove(mesh)
            geometry.dispose()
            texture.dispose()
            ;(mesh.material as THREE.Material).dispose()
            controls.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xefd1b5)} fog={new THREE.FogExp2(0xefd1b5, 0.0025)}>
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} />
        </canvas3D>
    )
}

export default WebglGeometryTerrain