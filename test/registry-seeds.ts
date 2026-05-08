// Shared parent registry seeds — import this BEFORE wrapper files that spread from parents.
// Imports safe wrappers (Object3D, BufferGeometry, Mesh) and seeds others with empty arrays.
import '../code/src/core/Object3D'
import '../code/src/core/BufferGeometry'
import '../code/src/objects/Mesh'

import { objProps, consParams } from '../code/lib/3/index'

// Seed entries for wrapper registries that some child wrappers spread from.
// These avoid "undefined is not iterable" when a child wrapper does [...objProps.parent].
;(objProps as any).line ??= []
;(objProps as any).lineSegments ??= []
;(objProps as any).shaderMaterial ??= []
;(objProps as any).material ??= []
;(objProps as any).materialParameters ??= []
;(objProps as any).loader ??= []
;(objProps as any).instancedBufferGeometry ??= []
;(objProps as any).boxGeometry ??= []
;(consParams as any).materialParameters ??= {}
