/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_colors_lookuptable

import { $, $$, useEffect, useThree } from '@woby/three'
import { Lut } from 'three/examples/jsm/math/Lut.js'
import * as THREE from 'three'

export const GeometryColorsLookupTable = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const lut = new Lut()
        const uiScene = new THREE.Scene()

        const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 2)
        orthoCamera.position.set(0.5, 0, 1)

        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: new THREE.CanvasTexture(lut.createCanvas())
        }))
        sprite.material.map.colorSpace = THREE.SRGBColorSpace
        sprite.scale.x = 0.125
        uiScene.add(sprite)

        const mesh = new THREE.Mesh(undefined, new THREE.MeshLambertMaterial({
            side: THREE.DoubleSide,
            color: 0xF5F5F5,
            vertexColors: true
        }))
        scene.add(mesh)

        const loadModel = () => {
            const loader = new THREE.BufferGeometryLoader()
            loader.load('models/json/pressure.json', (geometry) => {
                geometry.center()
                geometry.computeVertexNormals()

                const colors = []
                for (let i = 0, n = geometry.attributes.position.count; i < n; ++i) {
                    colors.push(1, 1, 1)
                }
                geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

                mesh.geometry = geometry
                updateColors()
            })
        }

        const updateColors = () => {
            lut.setColorMap('rainbow')
            lut.setMax(2000)
            lut.setMin(0)

            const geometry = mesh.geometry
            const pressures = geometry.attributes.pressure
            const colors = geometry.attributes.color
            const color = new THREE.Color()

            if (pressures) {
                for (let i = 0; i < pressures.array.length; i++) {
                    const colorValue = pressures.array[i]
                    color.copy(lut.getColor(colorValue)).convertSRGBToLinear()
                    colors.setXYZ(i, color.r, color.g, color.b)
                }

                colors.needsUpdate = true
                const map = sprite.material.map as THREE.CanvasTexture
                lut.updateCanvas(map.image)
                map.needsUpdate = true
            }
        }

        loadModel()

        const animate = () => {
            requestAnimationFrame(animate)
            renderer.clear()
            renderer.render(scene, camera)
            renderer.render(uiScene, orthoCamera)
        }
        animate()

        return () => {
            scene.remove(mesh)
            if (mesh.geometry) mesh.geometry.dispose()
            ;(mesh.material as THREE.Material).dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xffffff)}>
                <pointLight intensity={3} position={[0, 0, 0]} />
            </scene>
            <perspectiveCamera fov={60} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[0, 0, 10]} />
            <orbitControls />
        </canvas3D>
    )
}

export default GeometryColorsLookupTable