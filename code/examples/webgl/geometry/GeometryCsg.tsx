/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_csg

import { $, $$, useEffect, useThree } from '@woby/three'
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg'
import * as THREE from 'three'

export const GeometryCsg = () => {
    const { scene, camera } = useThree()

    useEffect(() => {
        const evaluator = new Evaluator()

        const baseBrush = new Brush(
            new THREE.IcosahedronGeometry(2, 3),
            new THREE.MeshStandardMaterial({
                flatShading: true,
                polygonOffset: true,
                polygonOffsetUnits: 1,
                polygonOffsetFactor: 1,
            })
        )

        const brush = new Brush(
            new THREE.CylinderGeometry(1, 1, 5, 45),
            new THREE.MeshStandardMaterial({
                color: 0x80cbc4,
                polygonOffset: true,
                polygonOffsetUnits: 1,
                polygonOffsetFactor: 1,
            })
        )

        const core = new Brush(
            new THREE.IcosahedronGeometry(0.15, 1),
            new THREE.MeshStandardMaterial({
                flatShading: true,
                color: 0xff9800,
                emissive: 0xff9800,
                emissiveIntensity: 0.35,
                polygonOffset: true,
                polygonOffsetUnits: 1,
                polygonOffsetFactor: 1,
            })
        )
        core.castShadow = true
        scene.add(core)

        evaluator.useGroups = true
        const result = evaluator.evaluate(baseBrush, brush, SUBTRACTION)
        result.castShadow = true
        result.receiveShadow = true
        scene.add(result)

        const wireframe = new THREE.Mesh(
            result.geometry,
            new THREE.MeshBasicMaterial({ color: 0x009688, wireframe: true })
        )
        scene.add(wireframe)

        // Shadow plane
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(),
            new THREE.ShadowMaterial({
                color: 0xd81b60,
                transparent: true,
                opacity: 0.075,
                side: THREE.DoubleSide,
            })
        )
        plane.position.y = -3
        plane.rotation.x = -Math.PI / 2
        plane.scale.setScalar(10)
        plane.receiveShadow = true
        scene.add(plane)

        const clock = new THREE.Clock()
        const animate = () => {
            requestAnimationFrame(animate)
            const t = clock.getElapsedTime() * 1000 + 9000

            baseBrush.rotation.x = t * 0.0001
            baseBrush.rotation.y = t * 0.00025
            baseBrush.rotation.z = t * 0.0005
            baseBrush.updateMatrixWorld()

            brush.rotation.x = t * -0.0002
            brush.rotation.y = t * -0.0005
            brush.rotation.z = t * -0.001

            const s = 0.5 + 0.5 * (1 + Math.sin(t * 0.001))
            brush.scale.set(s, 1, s)
            brush.updateMatrixWorld()

            const newResult = evaluator.evaluate(baseBrush, brush, SUBTRACTION, result)
            wireframe.geometry = newResult.geometry
        }
        animate()

        return () => {
            scene.remove(result, core, wireframe, plane)
            result.geometry.dispose()
            ;(result.material as THREE.Material).dispose()
            baseBrush.geometry.dispose()
            ;(baseBrush.material as THREE.Material).dispose()
            brush.geometry.dispose()
            ;(brush.material as THREE.Material).dispose()
            core.geometry.dispose()
            ;(core.material as THREE.Material).dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} shadowMapEnabled shadowMapType={THREE.PCFShadowMap} />
            <scene background={new THREE.Color(0xfce4ec)}>
                <hemisphereLight intensity={3} />
                <directionalLight
                    intensity={0.3}
                    position={[3, 12, 9]}
                    castShadow
                    shadowMapSize={[2048, 2048]}
                    shadowBias={-1e-4}
                    shadowNormalBias={1e-4}
                />
            </scene>
            <perspectiveCamera fov={50} aspect={window.innerWidth / window.innerHeight} near={1} far={100} position={[10, 10, 10]} />
            <orbitControls minDistance={5} maxDistance={75} />
        </canvas3D>
    )
}

export default GeometryCsg