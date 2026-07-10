(() => {
  try {
    const ctx = window.__canvas3dCtx
    const renderer = ctx?.renderers?.[0]
    const scene = ctx?.scenes?.[0]
    const cam = ctx?.cameras?.[0]
    if (!renderer || !scene || !cam) return JSON.stringify({ err: 'ctx missing', has: { renderer: !!renderer, scene: !!scene, cam: !!cam } })

    renderer.render(scene, cam)

    const skinned = []
    scene.traverse((o) => {
      if (o.isSkinnedMesh) {
        skinned.push({
          name: o.name,
          visible: o.visible,
          bones: o.skeleton?.bones?.length,
        })
      }
    })

    return JSON.stringify({
      stats: { drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles, frame: renderer.info.render.frame },
      skinned,
      cameraPos: [cam.position.x.toFixed(2), cam.position.y.toFixed(2), cam.position.z.toFixed(2)],
      cameraMatrixIdentity: cam.matrixWorld.elements.slice(0, 4).every((v, i) => Math.abs(v - (i === 0 ? 1 : 0)) < 0.01),
      cameraMatrix: Array.from(cam.matrixWorld.elements).map(v => v.toFixed(2)),
      framesCount: ctx.frames.length,
      rendererSize: { w: renderer.domElement.width, h: renderer.domElement.height },
    }, null, 2)
  } catch (e) {
    return JSON.stringify({ error: e.message, stack: e.stack?.slice(0, 500) })
  }
})()
