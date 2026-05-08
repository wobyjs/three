import type { Scene } from 'three/src/scenes/Scene.js'
import type { Camera } from 'three/src/cameras/Camera.js'
import { ObservantMaybe } from '../../three-types'

export type RendererEx = ObservantMaybe<{ scene?: Scene, camera?: Camera, frames?: (() => void)[] }>

export const rendererEx = ['scene', 'camera']

