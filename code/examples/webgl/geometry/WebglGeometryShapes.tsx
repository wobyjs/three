/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_shapes

import { $, $$, useEffect, useThree } from '@woby/three'
import * as THREE from 'three'

export const WebglGeometryShapes = () => {
    const { scene, camera } = useThree()

    useEffect(() => {
        const group = new THREE.Group()
        group.position.y = 50
        scene.add(group)

        const loader = new THREE.TextureLoader()
        const texture = loader.load('textures/uv_grid_opengl.jpg')
        texture.colorSpace = THREE.SRGBColorSpace
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(0.008, 0.008)

        function addShape(
            shape: THREE.Shape,
            extrudeSettings: THREE.ExtrudeGeometryOptions,
            color: number,
            x: number, y: number, z: number,
            rx: number, ry: number, rz: number,
            s: number
        ) {
            // ShapeGeometry with texture
            let geometry = new THREE.ShapeGeometry(shape)
            let mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: texture }))
            mesh.position.set(x, y, z - 175)
            mesh.rotation.set(rx, ry, rz)
            mesh.scale.set(s, s, s)
            group.add(mesh)

            // ShapeGeometry with color
            geometry = new THREE.ShapeGeometry(shape)
            mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: color, side: THREE.DoubleSide }))
            mesh.position.set(x, y, z - 125)
            mesh.rotation.set(rx, ry, rz)
            mesh.scale.set(s, s, s)
            group.add(mesh)

            // ExtrudeGeometry
            geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
            mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: color }))
            mesh.position.set(x, y, z - 75)
            mesh.rotation.set(rx, ry, rz)
            mesh.scale.set(s, s, s)
            group.add(mesh)

            addLineShape(shape, color, x, y, z, rx, ry, rz, s)
        }

        function addLineShape(
            shape: THREE.Shape,
            color: number,
            x: number, y: number, z: number,
            rx: number, ry: number, rz: number,
            s: number
        ) {
            shape.autoClose = true
            const points = shape.getPoints()
            const spacedPoints = shape.getSpacedPoints(50)
            const geometryPoints = new THREE.BufferGeometry().setFromPoints(points)
            const geometrySpacedPoints = new THREE.BufferGeometry().setFromPoints(spacedPoints)

            let line = new THREE.Line(geometryPoints, new THREE.LineBasicMaterial({ color: color }))
            line.position.set(x, y, z - 25)
            line.rotation.set(rx, ry, rz)
            line.scale.set(s, s, s)
            group.add(line)

            line = new THREE.Line(geometrySpacedPoints, new THREE.LineBasicMaterial({ color: color }))
            line.position.set(x, y, z + 25)
            line.rotation.set(rx, ry, rz)
            line.scale.set(s, s, s)
            group.add(line)

            let particles = new THREE.Points(geometryPoints, new THREE.PointsMaterial({ color: color, size: 4 }))
            particles.position.set(x, y, z + 75)
            particles.rotation.set(rx, ry, rz)
            particles.scale.set(s, s, s)
            group.add(particles)

            particles = new THREE.Points(geometrySpacedPoints, new THREE.PointsMaterial({ color: color, size: 4 }))
            particles.position.set(x, y, z + 125)
            particles.rotation.set(rx, ry, rz)
            particles.scale.set(s, s, s)
            group.add(particles)
        }

        // California shape
        const californiaPts = [
            new THREE.Vector2(610, 320), new THREE.Vector2(450, 300), new THREE.Vector2(392, 392),
            new THREE.Vector2(266, 438), new THREE.Vector2(190, 570), new THREE.Vector2(190, 600),
            new THREE.Vector2(160, 620), new THREE.Vector2(160, 650), new THREE.Vector2(180, 640),
            new THREE.Vector2(165, 680), new THREE.Vector2(150, 670), new THREE.Vector2(90, 737),
            new THREE.Vector2(80, 795), new THREE.Vector2(50, 835), new THREE.Vector2(64, 870),
            new THREE.Vector2(60, 945), new THREE.Vector2(300, 945), new THREE.Vector2(300, 743),
            new THREE.Vector2(600, 473), new THREE.Vector2(626, 425), new THREE.Vector2(600, 370),
            new THREE.Vector2(610, 320)
        ]
        for (let i = 0; i < californiaPts.length; i++) californiaPts[i].multiplyScalar(0.25)
        const californiaShape = new THREE.Shape(californiaPts)

        // Triangle
        const triangleShape = new THREE.Shape().moveTo(80, 20).lineTo(40, 80).lineTo(120, 80).lineTo(80, 20)

        // Heart
        const heartShape = new THREE.Shape()
            .moveTo(25, 25)
            .bezierCurveTo(25, 25, 20, 0, 0, 0)
            .bezierCurveTo(-30, 0, -30, 35, -30, 35)
            .bezierCurveTo(-30, 55, -10, 77, 25, 95)
            .bezierCurveTo(60, 77, 80, 55, 80, 35)
            .bezierCurveTo(80, 35, 80, 0, 50, 0)
            .bezierCurveTo(35, 0, 25, 25, 25, 25)

        // Square
        const squareShape = new THREE.Shape().moveTo(0, 0).lineTo(0, 80).lineTo(80, 80).lineTo(80, 0).lineTo(0, 0)

        // Circle
        const circleRadius = 40
        const circleShape = new THREE.Shape()
            .moveTo(0, circleRadius)
            .quadraticCurveTo(circleRadius, circleRadius, circleRadius, 0)
            .quadraticCurveTo(circleRadius, -circleRadius, 0, -circleRadius)
            .quadraticCurveTo(-circleRadius, -circleRadius, -circleRadius, 0)
            .quadraticCurveTo(-circleRadius, circleRadius, 0, circleRadius)

        const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 }

        addShape(californiaShape, extrudeSettings, 0xf08000, -300, -100, 0, 0, 0, 0, 1)
        addShape(triangleShape, extrudeSettings, 0x8080f0, -180, 0, 0, 0, 0, 0, 1)
        addShape(squareShape, extrudeSettings, 0x0040f0, 150, 100, 0, 0, 0, 0, 1)
        addShape(heartShape, extrudeSettings, 0xf00000, 60, 100, 0, 0, 0, Math.PI, 1)
        addShape(circleShape, extrudeSettings, 0x00f000, 120, 250, 0, 0, 0, 0, 1)

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

        document.addEventListener('pointerdown', onPointerDown)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            group.rotation.y += (targetRotation - group.rotation.y) * 0.05
        }
        animate()

        return () => {
            scene.remove(group)
            document.removeEventListener('pointerdown', onPointerDown)
            group.traverse((obj) => {
                if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points) {
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
                <pointLight intensity={2.5} position={[0, 150, 500]} />
            </scene>
            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={1000} position={[0, 150, 500]} />
        </canvas3D>
    )
}

export default WebglGeometryShapes