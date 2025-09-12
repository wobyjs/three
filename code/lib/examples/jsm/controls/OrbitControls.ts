import { useEffect, $$, Observable, ObservableMaybe } from 'woby'
import { checkCamera, checkRenderer, useCameras, useFrame, useRenderers, useThree } from '../../../hooks'
import { OrbitControls as orbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OrbitControlsProps } from '../../../../examples/jsm/controls/OrbitControls'
import { fixReactiveProps } from '../../../three/fixReactiveProps'
import '../../../../examples/jsm/controls/OrbitControls'


export function OrbitControls({ camera, domElement, enableDamping, ...props }: OrbitControlsProps) {
    useEffect((stack) => {
        const ctx = useThree()
        $$(ctx.update)

        const renderers = useRenderers()
        const cams = $$(camera) ? [$$(camera)] : useCameras()
        const dom = $$(domElement) as ObservableMaybe<HTMLCanvasElement> ?? renderers[0]?.domElement

        if (!$$(cams)[0]) return () => { }
        if (!$$(dom)) return () => { }

        checkRenderer('(domElement). Please use <orbitControl camera={cameraRef} domElement={domRef} />, default useRenderers()[0]')
        checkCamera('Please use <orbitControl camera={cameraRef} domElement={domRef} />, default useCameras()[0]')

        const cameraControls = new orbitControls($$(cams)[0], $$(dom))

        fixReactiveProps('orbitControls', props, cameraControls as any, stack)

        cameraControls.enableDamping = $$(enableDamping)

        if (cameraControls.enableDamping == true)
            useFrame(() => { cameraControls.update() })
        else
            cameraControls.update()

        return () => cameraControls.dispose()
    })
    return null
}
