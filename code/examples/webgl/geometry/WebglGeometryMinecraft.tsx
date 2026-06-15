/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_minecraft

import { $, $$, useEffect, useThree } from '@woby/three'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { Timer } from 'three/examples/jsm/misc/Timer.js'
import * as THREE from 'three'

export const WebglGeometryMinecraft = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const worldWidth = 128
        const worldDepth = 128
        const worldHalfWidth = worldWidth / 2
        const worldHalfDepth = worldDepth / 2

        const generateHeight = (width: number, height: number) => {
            const data = []
            const perlin = new ImprovedNoise()
            const size = width * height
            const z = Math.random() * 100

            let quality = 2

            for (let j = 0; j < 4; j++) {
                if (j === 0) for (let i = 0; i < size; i++) data[i] = 0

                for (let i = 0; i < size; i++) {
                    const x = i % width
                    const y = (i / width) | 0
                    data[i] += perlin.noise(x / quality, y / quality, z) * quality
                }

                quality *= 4
            }

            return data
        }

        const getY = (x: number, z: number, data: number[], worldWidth: number) => {
            return (data[x + z * worldWidth] * 0.15) | 0
        }

        const data = generateHeight(worldWidth, worldDepth)

        camera.position.y = getY(worldHalfWidth, worldHalfDepth, data, worldWidth) * 100 + 100

        const matrix = new THREE.Matrix4()

        const pxGeometry = new THREE.PlaneGeometry(100, 100)
        pxGeometry.attributes.uv.array[1] = 0.5
        pxGeometry.attributes.uv.array[3] = 0.5
        pxGeometry.rotateY(Math.PI / 2)
        pxGeometry.translate(50, 0, 0)

        const nxGeometry = new THREE.PlaneGeometry(100, 100)
        nxGeometry.attributes.uv.array[1] = 0.5
        nxGeometry.attributes.uv.array[3] = 0.5
        nxGeometry.rotateY(-Math.PI / 2)
        nxGeometry.translate(-50, 0, 0)

        const pyGeometry = new THREE.PlaneGeometry(100, 100)
        pyGeometry.attributes.uv.array[5] = 0.5
        pyGeometry.attributes.uv.array[7] = 0.5
        pyGeometry.rotateX(-Math.PI / 2)
        pyGeometry.translate(0, 50, 0)

        const pzGeometry = new THREE.PlaneGeometry(100, 100)
        pzGeometry.attributes.uv.array[1] = 0.5
        pzGeometry.attributes.uv.array[3] = 0.5
        pzGeometry.translate(0, 0, 50)

        const nzGeometry = new THREE.PlaneGeometry(100, 100)
        nzGeometry.attributes.uv.array[1] = 0.5
        nzGeometry.attributes.uv.array[3] = 0.5
        nzGeometry.rotateY(Math.PI)
        nzGeometry.translate(0, 0, -50)

        const geometries = []

        for (let z = 0; z < worldDepth; z++) {
            for (let x = 0; x < worldWidth; x++) {
                const h = getY(x, z, data, worldWidth)

                matrix.makeTranslation(
                    x * 100 - worldHalfWidth * 100,
                    h * 100,
                    z * 100 - worldHalfDepth * 100
                )

                const px = getY(x + 1, z, data, worldWidth)
                const nx = getY(x - 1, z, data, worldWidth)
                const pz = getY(x, z + 1, data, worldWidth)
                const nz = getY(x, z - 1, data, worldWidth)

                geometries.push(pyGeometry.clone().applyMatrix4(matrix))

                if ((px !== h && px !== h + 1) || x === 0) {
                    geometries.push(pxGeometry.clone().applyMatrix4(matrix))
                }

                if ((nx !== h && nx !== h + 1) || x === worldWidth - 1) {
                    geometries.push(nxGeometry.clone().applyMatrix4(matrix))
                }

                if ((pz !== h && pz !== h + 1) || z === worldDepth - 1) {
                    geometries.push(pzGeometry.clone().applyMatrix4(matrix))
                }

                if ((nz !== h && nz !== h + 1) || z === 0) {
                    geometries.push(nzGeometry.clone().applyMatrix4(matrix))
                }
            }
        }

        const geometry = BufferGeometryUtils.mergeGeometries(geometries)
        geometry.computeBoundingSphere()

        const texture = new THREE.TextureLoader().load('textures/minecraft/atlas.png')
        texture.colorSpace = THREE.SRGBColorSpace
        texture.magFilter = THREE.NearestFilter

        const mesh = new THREE.Mesh(
            geometry,
            new THREE.MeshLambertMaterial({ map: texture, side: THREE.DoubleSide })
        )
        scene.add(mesh)

        const controls = new FirstPersonControls(camera, renderer.domElement)
        controls.movementSpeed = 1000
        controls.lookSpeed = 0.125
        controls.lookVertical = true

        const timer = new Timer()
        timer.connect(document)

        const clock = new THREE.Clock()
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
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xbfd1e5)}>
                <ambientLight intensity={3} />
                <directionalLight intensity={12} position={[1, 1, 0.5]} />
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={20000} />
        </canvas3D>
    )
}

export default WebglGeometryMinecraft