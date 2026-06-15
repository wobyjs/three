/**
 * kimi-compare.ts
 * Simple CLI Kimi comparison tool.
 *
 * Usage:
 *   tsx kimi-compare.ts @img1.png @img2.png "prompt text"
 *
 * Features:
 * - Takes two image paths and a prompt
 * - Sends to Kimi API (kimi-k2.5)
 * - Returns JSON verdict
 * - Retry logic: 3 attempts with exponential backoff
 */

import * as fs from 'fs'

const KIMI_API_KEY = process.env.KIMI_API_KEY || 'sk-PJY0EAZv6qwFy38t88ZrCtQ4573z8UctcP5QdqkdwNNtTFDh'
const KIMI_ENDPOINT = 'https://api.sfkey.cn/v1/chat/completions'
const KIMI_MODEL = 'kimi-k2.5'

interface KimiVerdict {
  similarity_score?: number
  verdict?: string
  reasoning?: string
  key_differences?: string[]
  [key: string]: any
}

async function callKimiAPI(img1Path: string, img2Path: string, prompt: string): Promise<KimiVerdict> {
  const img1 = fs.readFileSync(img1Path).toString('base64')
  const img2 = fs.readFileSync(img2Path).toString('base64')

  const body = {
    model: KIMI_MODEL,
    max_tokens: 8192,
    messages: [{
      role: 'user' as const,
      content: [
        { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${img1}` } },
        { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${img2}` } },
        { type: 'text' as const, text: prompt }
      ]
    }]
  }

  // Retry logic: 3 attempts with exponential backoff
  let lastError: Error | null = null
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(KIMI_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${KIMI_API_KEY}`
        },
        body: JSON.stringify(body)
      })

      if (!res.ok) {
        const err = await res.text()
        throw new Error(`Kimi API ${res.status}: ${err.slice(0, 200)}`)
      }

      const data = await res.json() as any
      const content = data.choices?.[0]?.message?.content ?? null

      if (!content) {
        throw new Error('No content from Kimi API')
      }

      // Parse JSON (handle markdown code blocks)
      let jsonStr = content.trim()
      if (jsonStr.startsWith('```')) {
        jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
      }

      try {
        const parsed = JSON.parse(jsonStr) as KimiVerdict
        return parsed
      } catch (parseErr) {
        // If not JSON, return raw content
        return { raw_response: jsonStr }
      }
    } catch (err) {
      lastError = err as Error
      const errMsg = (err as Error).message || ''

      // 504 Gateway Timeout - exponential backoff
      if (errMsg.includes('504') && attempt < 3) {
        const delay = attempt * 5000 // 5s, 10s
        console.log(`[kimi] 504 timeout, retry ${attempt}/3 in ${delay/1000}s...`)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
      // Rate limit - longer delay
      else if (errMsg.includes('429') && attempt < 3) {
        const delay = 10000
        console.log(`[kimi] rate limited, retry in ${delay/1000}s...`)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
      // Other error - retry with standard backoff
      else if (attempt < 3) {
        const delay = attempt * 5000
        console.log(`[kimi] attempt ${attempt} failed, retry in ${delay/1000}s...`)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError!
}

async function main() {
  const args = process.argv.slice(2)

  if (args.length < 3) {
    console.error('Usage: tsx kimi-compare.ts @img1.png @img2.png "prompt text"')
    console.error('\nExample:')
    console.error('  tsx kimi-compare.ts test-results/img1.png test-results/img2.png "Compare these screenshots"')
    process.exit(1)
  }

  const img1Path = args[0]
  const img2Path = args[1]
  const prompt = args[2]

  // Validate files exist
  if (!fs.existsSync(img1Path)) {
    console.error(`Error: ${img1Path} not found`)
    process.exit(1)
  }

  if (!fs.existsSync(img2Path)) {
    console.error(`Error: ${img2Path} not found`)
    process.exit(1)
  }

  console.log(`Comparing ${img1Path} vs ${img2Path}...`)
  console.log(`Prompt: ${prompt}\n`)

  try {
    const verdict = await callKimiAPI(img1Path, img2Path, prompt)
    console.log(JSON.stringify(verdict, null, 2))
  } catch (err: any) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
  }
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})