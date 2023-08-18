/// <reference path="./jsx-runtime.ts" />

import { jsx, jsxDEV } from "./jsx-runtime"
import THREE, { BoxGeometry, Mesh, MeshToonMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { render, $ } from "voby"

const App = () => {
    
    const ref = $<JSX.IntrinsicElements['mesh']>()
    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshToonMaterial({ color: 0x00ff00 })
    
    return (
            <webGLRenderer >
                <scene>
                    <perspectiveCamera >
                        <mesh ref={ref}  >

                        </mesh>
                    </perspectiveCamera>
                </scene>
             </webGLRenderer>

        // <Scene>
        //     <PerspectiveCamera>
        //         <WebGLRenderer>
        //             <Mesh />
        //         </WebGLRenderer>
        //     </PerspectiveCamera>
        // </Scene>
    )
}

render(<App />, document.body)