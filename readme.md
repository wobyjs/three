# @woby/three

[@woby/three](https://github.com/wobyjs/three) is a powerful library for creating 3D graphics using [Three.js](https://threejs.org/) in [Woby](https://github.com/wobyjs/woby) applications. It aims to provide a seamless integration of Three.js with Woby, enabling declarative 3D scenes in a reactive and component-based architecture.

## Features

- **Declarative 3D:** Write declarative code to create and manage complex 3D scenes using Woby's reactive components.
- **Efficient Rendering:** Leveraging Woby's reactive system, @woby/three ensures efficient updates and re-renders only when necessary.
- **Component-Based:** Use Woby's component system to create reusable 3D elements and manage state easily.
- **Three.js Integration:** Access the full power of Three.js within your Woby application, with all the features and capabilities of the Three.js library.

## Getting Started

### Installation

Install `@woby/three` and its peer dependencies:

```sh
npm install @woby/three three
```

## Basic Usage (Three.js vs @woby/three)

```ts
const box = new THREE.BoxGeometry( 1, 1, 1 )
const boxDom = <boxGeometry args={[1, 1, 1]} />


const light = new THREE.PointLight( 0xff0000, 1, 100 );
const lightDom = <pointLight position={[0, 5, 0]} intensity={10} castShadow shadow-camera-far={333} shadow-camera-near={0.1} />

//shadow-camera-far={333}
light.shadow.camera.far = 333 // inline property assignment equivalence 


const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000, 0.0 );

const renderer = <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} setClearColor={[0x000000, 0.0]} />
//setPixelRatio, setSize & setClearColor direct function call in element's attribute

```


## Examples
Explore the [@woby/three-demo](https://github.com/wobyjs/three-demo) repository for practical examples and [demos](https://three-demo.web.app/) of what you can build with @woby/three. These examples showcase various use cases, from basic scenes with basic interactive.

```tsx
/** @jsxImportSource @woby/three */

import { useFrame, MeshProps } from "@woby/three"


## Sample Code

React-three-fiber example ported

```ts
/** @jsxImportSource @woby/three */

import { $, $$ } from "woby"
import { useFrame, MeshProps } from '@woby/three"
import { AmbientLight, Mesh, SpotLight, TextureLoader } from "three"

const Box = (props: MeshProps) => {
    const ref = $<Mesh>()
    const texture = new TextureLoader().load('../textures/usedSteel.png')
    const hovered = $(false)
    const clicked = $(false)

    // Subscribe this component to the render-loop, rotate the mesh every frame

    useFrame(() => ($$(ref)?.rotateX(0.03)))

    // Return the view, these are regular Threejs elements expressed in JSX
    return <mesh
        {...props}
        ref={ref}
        scale={() => $$(clicked) ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        // onClick={(event) => clicked(!clicked())}
        onPointerOver={() => hovered(true)}
        onPointerOut={() => hovered(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={() => $$(hovered) ? 'hotpink' : 'orange'} map={texture} />
    </mesh>
}

export const Box3 = () => {
    const visible = $(false)
    const box = <Box position={[0, 1, 0]} />
    const ambientRef = $<AmbientLight>()
    const spotRef = $<SpotLight>()
    return (
        <canvas3D background='white'>
            <ambientLight intensity={1} ref={ambientRef} />
            <spotLight position={[0, 1, 0]} angle={10} penumbra={1} ref={spotRef} />
            <pointLight position={[0, 1, 0]} />
            <orbitControls enableDamping />
            <Box position={[-1.2, 0, 0]} onClick={() => { visible(!$$(visible)); console.log($$(visible)) }} />
            {/* <Box position={[0, 1, 0]} visible={() => $$(visible) ? true : false} /> */}
            {() => $$(visible) ? box : null}
            <Box position={[1.2, 0, 0]} />
        </canvas3D>
    )
}
```

Ported from threejs.org [Fat Lines](https://threejs.org/examples/?q=line#webgl_lines_fat)

``` ts
/** @jsxImportSource @woby/three */

import * as three from 'three'
import { Three, consParams, objProps, defaults, LineProps, useThree, useFrame, useRenderer, useCamera } from '@woby/three"
import { $, $$, useEffect, } from "woby"
import * as GeometryUtils from 'three/examples/jsm/utils/GeometryUtils'
import { Line2 } from 'three/examples/jsm/lines/Line2' //'three/addons/lines/Line2.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min' //'three/addons/lines/Line2.js';
import './TextGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import Stats from 'three/examples/jsm//libs/stats.module';
import { GPUStatsPanel } from 'three/examples/jsm/utils/GPUStatsPanel';

import { Line } from 'three'
import { Camera } from 'three'

//https://threejs.org/examples/?q=line#webgl_lines_fat


//@ts-ignore
Three.GUI = GUI

//@ts-ignore
Three.Line22 = Line2
//@ts-ignore
consParams.line22 = consParams.line2
//@ts-ignore
objProps.line22 = objProps.line2
//@ts-ignore
defaults.line22 = defaults.line

declare global {
    namespace JSX {
        interface IntrinsicElements {
            line22: LineProps
        }
    }
}

const Panel = () => {
    const { scene } = useThree()
    const camera = useCamera<three.PerspectiveCamera>()
    const renderer = useRenderer<three.WebGLRenderer>()

    // $$(renderer).setPixelRatio(window.devicePixelRatio)
    // $$(renderer).setSize(window.innerWidth, window.innerHeight)
    // $$(renderer).setClearColor(0x000000, 0.0)

    const camera2 = new three.PerspectiveCamera(40, 1, 1, 1000)

    const stats = new Stats()
    document.body.appendChild(stats.dom)

    let gpuPanel
    let insetWidth
    let insetHeight

    useEffect(() => {
        const r = $$(renderer)
        if (!r) return null
        if (!$$(camera)) return null

        camera2.position.copy($$(camera).position)

        gpuPanel = new GPUStatsPanel(r.getContext())
        stats.addPanel(gpuPanel)
        stats.showPanel(0)

        function onWindowResize() {
            $$(camera).aspect = window.innerWidth / window.innerHeight;
            $$(camera).updateProjectionMatrix();

            r.setSize(window.innerWidth, window.innerHeight);

            insetWidth = window.innerHeight / 4; // square
            insetHeight = window.innerHeight / 4;

            camera2.aspect = insetWidth / insetHeight;
            camera2.updateProjectionMatrix();

        }

        window.addEventListener('resize', onWindowResize);
        onWindowResize()

        return () => window.removeEventListener('resize', onWindowResize)
    })


    useFrame(() => {
        const r = $$(renderer)
        if (!r) return
        if (!$$(scene)) return
        if (!$$(camera)) return

        r.setClearColor(0x000000, 0)
        r.setViewport(0, 0, window.innerWidth, window.innerHeight)

        gpuPanel?.startQuery()
        r.render($$(scene), $$(camera))
        gpuPanel?.endQuery()

        r.setClearColor(0x222222, 1)

        r.clearDepth() // important!

        r.setScissorTest(true)

        r.setScissor(20, 20, insetWidth, insetHeight)

        r.setViewport(20, 20, insetWidth, insetHeight)

        camera2.position.copy($$(camera).position)
        camera2.quaternion.copy($$(camera).quaternion)

        r.render($$(scene) as any, camera2)

        r.setScissorTest(false)

        stats.update()
    })

}


export const FatLines = () => {
    const positions = [];
    const colors = [];

    const points = GeometryUtils.hilbert3D(new three.Vector3(0, 0, 0), 20.0, 1, 0, 1, 2, 3, 4, 5, 6, 7)

    const spline = new three.CatmullRomCurve3(points)
    const divisions = Math.round(12 * points.length)
    const point = new three.Vector3()
    const color = new three.Color()

    const isLineGeometry = $(true)

    for (let i = 0, l = divisions; i < l; i++) {

        const t = i / l;

        spline.getPoint(t, point)
        positions.push(point.x, point.y, point.z)

        color.setHSL(t, 1.0, 0.5, three.SRGBColorSpace)
        colors.push(color.r, color.g, color.b)

    }

    const bf = $<three.BufferGeometry<three.NormalBufferAttributes>>()
    const l2 = $<Line2>()
    const matLine = $<LineMaterial>()
    const g = $<GUI>()
    const l1 = $<Line>()


    useEffect(() => {
        if (!$$(g)) return

        const param = {
            'line type': 0,
            'world units': false,
            'width': 5,
            'alphaToCoverage': false,
            'dashed': false,
            // 'dash scale': 1,
            // 'dash / gap': 1
        };
        const gui = $$(g)

        gui.add(param, 'line type', { 'LineGeometry': 0, 'gl.LINE': 1 }).onChange(val => {

            switch (val) {

                case 0:
                    isLineGeometry(true)
                    break;

                case 1:
                    isLineGeometry(false)
                    break;

            }

        })

        gui.add(param, 'world units').onChange(val => {
            $$(matLine).worldUnits = val
            $$(matLine).needsUpdate = true
        })

        gui.add(param, 'width', 1, 10).onChange(val => $$(matLine).linewidth = val)

        gui.add(param, 'alphaToCoverage').onChange(val => $$(matLine).alphaToCoverage = val)
    })
    useEffect(() => {
        if (!$$(bf)) return

        $$(bf).setAttribute('position', new three.Float32BufferAttribute(positions, 3))
        $$(bf).setAttribute('color', new three.Float32BufferAttribute(colors, 3))
    })


    return <canvas3D noRender background={0x222222} /* camera={new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000)} */
    // renderer={new three.WebGLRenderer({ antialias: true })}
    >
        <gui ref={g} />
        <webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} setClearColor={[0x000000, 0.0]} />
        <perspectiveCamera fov={40} aspect={window.innerWidth / window.innerHeight} near={1} far={1000} position={[-40, 0, 60]} />
        <Panel />
        <ambientLight intensity={0.5} />
        <orbitControls minDistance={10} maxDistance={500} enableDamping />

        <line22 ref={l2} scale={[1, 1, 1]}
            visible={isLineGeometry}
        // onClick={() => console.log('canvas clicked')}
        >
            <lineGeometry setPositions={[positions]} setColors={[colors]} />
            {/* line.computeLineDistances() */}
            <lineMaterial ref={matLine} color={0xffffff}
                linewidth={10} // in world units with size attenuation, pixels otherwise
                vertexColors={true}
                dashed={false}
                alphaToCoverage={false} />
        </line22>

        {/* matLineDashed = new THREE.LineDashedMaterial( {vertexColors: true, scale: 2, dashSize: 1, gapSize: 1 } ) */}

        <line ref={l1} visibility={() => !$$(isLineGeometry) as any}>
            <bufferGeometry ref={bf} /* points={new three.Float32BufferAttribute(positions, 3) as any} */ />
            {/* <bufferGeometry ref={bf} points={positions} /> */}
            <lineBasicMaterial vertexColors={true} />
        </line>
    </canvas3D >
}

```


## Documentation
For detailed documentation, please refer to the @woby/three GitHub repository.


## Support This Project
If you find this project valuable and would like to support its development, please consider sponsoring. Your support will enable me to dedicate more time to improving and maintaining this project.

Contact: [github user name]@gmail.com


## Acknowledgements / Inspired by
[Three.js](https://threejs.org/)

[Voby](https://github.com/vobyjs/voby)

[react-three-fiber](https://github.com/pmndrs/react-three-fiber)
