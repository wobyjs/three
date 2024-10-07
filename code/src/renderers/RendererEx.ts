import { Scene } from 'three/src/scenes/Scene'
import { Camera } from 'three/src/cameras/Camera'
import { ObservantMaybe } from '../../three-types'

export type RendererEx = ObservantMaybe<{ scene?: Scene, camera?: Camera, frames?: (() => void)[] }>

export const rendererEx = ['scene', 'camera']

