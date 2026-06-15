/** @jsxImportSource @woby/three */
// https://threejs.org/examples/#webgl_geometry_teapot

import { $, $$, useEffect, useThree } from '@woby/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js'
import * as THREE from 'three'

export const GeometryTeapot = () => {
    const { scene, camera, renderer } = useThree()

    useEffect(() => {
        const teapotSize = 300

        const textureMap = new THREE.TextureLoader().load('textures/uv_grid_opengl.jpg')
        textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping
        textureMap.anisotropy = 16
        textureMap.colorSpace = THREE.SRGBColorSpace

        const path = 'textures/cube/pisa/'
        const urls = ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']

        const textureCube = new THREE.CubeTextureLoader().setPath(path).load(urls)

        const materials: Record<string, THREE.Material> = {
            wireframe: new THREE.MeshBasicMaterial({ wireframe: true }),
            flat: new THREE.MeshPhongMaterial({ specular: 0x000000, flatShading: true, side: THREE.DoubleSide }),
            smooth: new THREE.MeshLambertMaterial({ side: THREE.DoubleSide }),
            glossy: new THREE.MeshPhongMaterial({ color: 0xc0c0c0, specular: 0x404040, shininess: 300, side: THREE.DoubleSide }),
            textured: new THREE.MeshPhongMaterial({ map: textureMap, side: THREE.DoubleSide }),
            reflective: new THREE.MeshPhongMaterial({ envMap: textureCube, side: THREE.DoubleSide })
        }

        scene.background = new THREE.Color(0xAAAAAA)

        const ambientLight = new THREE.AmbientLight(0x7c7c7c, 2.0)
        scene.add(ambientLight)

        const light = new THREE.DirectionalLight(0xFFFFFF, 2.0)
        light.position.set(0.32, 0.39, 0.7)
        scene.add(light)

        // Create teapot with glossy material
        const geometry = new TeapotGeometry(
            teapotSize,
            15,
            true,
            true,
            true,
            false,
            true
        )

        const teapot = new THREE.Mesh(geometry, materials.glossy)
        scene.add(teapot)

        const cameraControls = new OrbitControls(camera, renderer.domElement)
        cameraControls.minDistance = 1000
        cameraControls.maxDistance = 4000

        const animate = () => {
            requestAnimationFrame(animate)
            cameraControls.update()
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            scene.remove(teapot)
            geometry.dispose()
            for (const k in materials) {
                materials[k].dispose()
            }
            textureMap.dispose()
            textureCube.dispose()
            cameraControls.dispose()
        }
    })

    return (
        <canvas3D>
            <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
            <scene>
            </scene>
            <perspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={80000} position={[-600, 550, 1300]} />
        </canvas3D>
    )
}

export default GeometryTeapot