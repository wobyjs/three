/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_text_shapes

import { $, $$, useEffect, useThree } from '@woby/three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import * as THREE from 'three'

export const GeometryTextShapes = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const loader = new FontLoader()
        loader.load('fonts/helvetiker_regular.typeface.json', (font) => {
            const color = 0x006699

            const matDark = new THREE.LineBasicMaterial({
                color: color,
                side: THREE.DoubleSide
            })

            const matLite = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.4,
                side: THREE.DoubleSide
            })

            const message = '   Three.js\nSimple text.'

            const shapes = font.generateShapes(message, 100)

            const geometry = new THREE.ShapeGeometry(shapes)

            geometry.computeBoundingBox()

            const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)

            geometry.translate(xMid, 0, 0)

            // Make shape (N.B. edge view not visible)
            const text = new THREE.Mesh(geometry, matLite)
            text.position.z = -150
            scene.add(text)

            // Make line shape (N.B. edge view remains visible)
            const holeShapes = []

            for (let i = 0; i < shapes.length; i++) {
                const shape = shapes[i]

                if (shape.holes && shape.holes.length > 0) {
                    for (let j = 0; j < shape.holes.length; j++) {
                        const hole = shape.holes[j]
                        holeShapes.push(hole)
                    }
                }
            }

            shapes.push(...holeShapes)

            const lineText = new THREE.Object3D()

            for (let i = 0; i < shapes.length; i++) {
                const shape = shapes[i]

                const points = shape.getPoints()
                const geometryPoints = new THREE.BufferGeometry().setFromPoints(points)

                geometryPoints.translate(xMid, 0, 0)

                const lineMesh = new THREE.Line(geometryPoints, matDark)
                lineText.add(lineMesh)
            }

            scene.add(lineText)
        })

        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            scene.traverse((obj) => {
                if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
                    scene.remove(obj)
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
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[0, -400, 600]} />
            <orbitControls target={[0, 0, 0]} />
        </canvas3D>
    )
}

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default GeometryTextShapes