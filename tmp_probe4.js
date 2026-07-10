(() => {
  const ctx = window.__canvas3dCtx
  const scene = ctx?.scenes?.[0]
  const meshes = []
  scene.traverse((o) => {
    if (o.isMesh || o.isSkinnedMesh) {
      const bb = o.geometry?.boundingBox
      meshes.push({
        type: o.type, name: o.name, visible: o.visible,
        frustumCulled: o.frustumCulled,
        matrixAutoUpdate: o.matrixAutoUpdate,
        worldPos: (() => { const v = new (window).THREE?.Vector3?.() || null; if (!v) return null; o.getWorldPosition(v); return [v.x.toFixed(2), v.y.toFixed(2), v.z.toFixed(2)] })(),
        bb: bb && {
          min: [bb.min.x.toFixed(2), bb.min.y.toFixed(2), bb.min.z.toFixed(2)],
          max: [bb.max.x.toFixed(2), bb.max.y.toFixed(2), bb.max.z.toFixed(2)],
        },
        material: o.material?.type,
        materialVisible: o.material?.visible,
        materialTransparent: o.material?.transparent,
        materialOpacity: o.material?.opacity,
      })
    }
  })
  return JSON.stringify({ meshes }, null, 2)
})()
