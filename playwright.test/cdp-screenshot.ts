import WebSocket from 'ws'
import * as fs from 'fs'

interface CDPSession {
    ws: WebSocket
    nextId: number
    pending: Map<number, (result: any) => void>
}

const createSession = (wsUrl: string): Promise<CDPSession> => new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl)
    const session: CDPSession = { ws, nextId: 1, pending: new Map() }
    ws.on('open', () => resolve(session))
    ws.on('error', reject)
    ws.on('message', (data: Buffer) => {
        const msg = JSON.parse(data.toString())
        if (msg.id && session.pending.has(msg.id)) {
            const cb = session.pending.get(msg.id)!
            session.pending.delete(msg.id)
            cb(msg)
        }
    })
})

const send = (session: CDPSession, method: string, params: any = {}): Promise<any> =>
    new Promise((resolve) => {
        const id = session.nextId++
        session.pending.set(id, resolve)
        session.ws.send(JSON.stringify({ id, method, params }))
    })

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

const captureDemo = async (wsUrl: string, url: string, outPath: string, waitMs = 8000) => {
    console.log(`Connecting to ${wsUrl}`)
    const session = await createSession(wsUrl)

    console.log(`Navigating to ${url}`)
    await send(session, 'Page.navigate', { url })

    console.log(`Waiting ${waitMs}ms for physics to load...`)
    await sleep(waitMs)

    console.log(`Taking screenshot -> ${outPath}`)
    const result = await send(session, 'Page.captureScreenshot', { format: 'png' })
    fs.writeFileSync(outPath, Buffer.from(result.result.data, 'base64'))

    session.ws.close()
    console.log(`Done: ${outPath}`)
}

const [,, wsUrl, url, outPath, waitStr] = process.argv
const waitMs = waitStr ? parseInt(waitStr) : 8000

captureDemo(wsUrl, url, outPath, waitMs).catch(e => {
    console.error(e)
    process.exit(1)
})
