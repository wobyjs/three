(() => {
  try {
    const ctx = window.__canvas3dCtx
    const renderer = ctx.renderers[0]
    const scene = ctx.scenes[0]
    const cam = ctx.cameras[0]

    renderer.render(scene, cam)

    const skinned = []
    scene.traverse((o) => {
      if (o.isSkinnedMesh) {
        skinned.push({
          name: o.name,
          visible: o.visible,
          bones: o.skeleton?.bones?.length,
          frustumCulled: o.frustumCulled,
          boundingSphere: o.geometry.boundingSphere ? {
            x: o.geometry.boundingSphere.center.x.toFixed(2),
            y: o.geometry.boundingSphere.center.y.toFixed(2),
            z: o.geometry.boundingSphere.center.z.toFixed(2),
            r: o.geometry.boundingSphere.radius.toFixed(2),
          } : null,
        })
      }
    })

    return JSON.stringify({
      stats: { drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles, frame: renderer.info.render.frame },
      skinned,
      sceneFog: scene.fog ? { type: scene.fog.constructor?.name, near: scene.fog.near, far: scene.fog.far } : null,
      rendererSize: { w: renderer.domElement.width, h: renderer.domElement.height },
      cameraMatrix: Array.from(cam.matrixWorld.elements).map(v => v.toFixed(2)).join(','),
    }, null, 2)
  } catch (e) {
    return JSON.stringify({ error: e.message, stack: e.stack })
  }
})()
