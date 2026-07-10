(() => {
  try {
    const ctx = window.__canvas3dCtx
    const scene = ctx?.scenes?.[0]
    if (!scene) return JSON.stringify({ err: 'no scene' })
    const meshes = []
    scene.traverse((o) => {
      if (o.isMesh || o.isSkinnedMesh) {
        const bb = o.geometry?.boundingBox
        if (o.geometry?.computeBoundingBox && !bb) o.geometry.computeBoundingBox()
        const bb2 = o.geometry?.boundingBox
        meshes.push({
          type: o.type,
          name: o.name,
          visible: o.visible,
          isSkinned: !!o.isSkinnedMesh,
          frustumCulled: o.frustumCulled,
          worldX: o.matrixWorld.elements[12].toFixed(2),
          worldY: o.matrixWorld.elements[13].toFixed(2),
          worldZ: o.matrixWorld.elements[14].toFixed(2),
          bb: bb2 ? {
            min: [bb2.min.x.toFixed(2), bb2.min.y.toFixed(2), bb2.min.z.toFixed(2)],
            max: [bb2.max.x.toFixed(2), bb2.max.y.toFixed(2), bb2.max.z.toFixed(2)],
          } : null,
          material: o.material?.type,
          mvis: o.material?.visible,
          mopacity: o.material?.opacity,
          renderOrder: o.renderOrder,
        })
      }
    })
    const cam = ctx.cameras[0]
    return JSON.stringify({
      meshCount: meshes.length,
      meshes,
      cameraPos: [cam.position.x, cam.position.y, cam.position.z],
      cameraFov: cam.fov,
      cameraNear: cam.near, cameraFar: cam.far,
      renderer: ctx.renderers[0].domElement.tagName,
    }, null, 2)
  } catch (e) {
    return JSON.stringify({ error: e.message, stack: e.stack })
  }
})()
