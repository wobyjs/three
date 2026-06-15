/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_text_stroke

import { $, $$, useEffect, useThree } from '@woby/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
import { Font } from 'three/examples/jsm/loaders/FontLoader.js'
import { unzipSync, strFromU8 } from 'three/examples/jsm/libs/fflate.module.js'
import * as THREE from 'three'

export const GeometryTextStroke = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        new THREE.FileLoader()
            .setResponseType('arraybuffer')
            .load('fonts/MPLUSRounded1c/MPLUSRounded1c-Regular.typeface.json.zip', (data) => {
                const zip = unzipSync(new Uint8Array(data as ArrayBuffer))
                const strArray = strFromU8(new Uint8Array(zip['MPLUSRounded1c-Regular.typeface.json'].buffer))

                const font = new Font(JSON.parse(strArray))
                const color = new THREE.Color(0x006699)

                const matDark = new THREE.MeshBasicMaterial({
                    color: color,
                    side: THREE.DoubleSide
                })

                const matLite = new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.4,
                    side: THREE.DoubleSide
                })

                const generateStrokeText = (font: Font, material: { dark: THREE.Material, lite: THREE.Material, color: THREE.Color }, message: string, size: number, direction = 'ltr') => {
                    const shapes = font.generateShapes(message, size, direction)

                    const geometry = new THREE.ShapeGeometry(shapes)

                    const strokeText = new THREE.Group()

                    geometry.computeBoundingBox()

                    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)

                    geometry.translate(xMid, 0, 0)

                    // Make shape (N.B. edge view not visible)
                    const text = new THREE.Mesh(geometry, material.lite)
                    text.position.z = -150
                    strokeText.add(text)

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

                    const style = SVGLoader.getStrokeStyle(5, material.color.getStyle())

                    for (let i = 0; i < shapes.length; i++) {
                        const shape = shapes[i]

                        const points = shape.getPoints()

                        const strokeGeometry = SVGLoader.pointsToStroke(points, style)
                        strokeGeometry.translate(xMid, 0, 0)

                        const strokeMesh = new THREE.Mesh(strokeGeometry, material.dark)
                        strokeText.add(strokeMesh)
                    }

                    return strokeText
                }

                const material = {
                    dark: matDark,
                    lite: matLite,
                    color: color
                }

                const english = '   Three.js\nStroke text.'
                const hebrew = 'טקסט קו'
                const chinese = '文字描邊'

                const message1 = generateStrokeText(font, material, english, 80, 'ltr')
                const message2 = generateStrokeText(font, material, hebrew, 80, 'rtl')
                const message3 = generateStrokeText(font, material, chinese, 80, 'tb')

                message1.position.x = -100

                message2.position.x = -100
                message2.position.y = -300

                message3.position.x = 300
                message3.position.y = -300

                scene.add(message1, message2, message3)
            })

        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            scene.traverse((obj) => {
                if (obj instanceof THREE.Mesh || obj instanceof THREE.Group) {
                    scene.remove(obj)
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
                }
            })
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene background={new THREE.Color(0xf0f0f0)}>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={10000} position={[0, -400, 1000]} />
            <orbitControls target={[0, 0, 0]} />
        </canvas3D>
    )
}

export default GeometryTextStroke