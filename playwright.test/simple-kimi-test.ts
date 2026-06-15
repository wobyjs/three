import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';

const anthropic = new Anthropic({
    apiKey: process.env.KIMI_API_KEY || 'sk-PJY0EAZv6qwFy38t88ZrCtQ4573z8UctcP5QdqkdwNNtTFDh'
});

async function compareImages(portedPath: string, referencePath: string, demoId: string) {
    const portedImage = fs.readFileSync(portedPath);
    const referenceImage = fs.readFileSync(referencePath);

    const portedBase64 = portedImage.toString('base64');
    const referenceBase64 = referenceImage.toString('base64');

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-6-20250514',
        max_tokens: 1024,
        messages: [{
            role: 'user',
            content: [
                {
                    type: 'image',
                    source: {
                        type: 'base64',
                        media_type: 'image/png',
                        data: portedBase64
                    }
                },
                {
                    type: 'image',
                    source: {
                        type: 'base64',
                        media_type: 'image/png',
                        data: referenceBase64
                    }
                },
                {
                    type: 'text',
                    text: `Compare these two screenshots of a Three.js demo. The first image is the PORTED version, the second is the REFERENCE version.

Rate the visual similarity on a scale of 0.0 to 1.0 where:
- 1.0 = identical
- 0.7+ = passing (minor differences)
- 0.5-0.7 = needs improvement
- <0.5 = failing

Return a JSON object with this exact structure:
{
  "similarity_score": <number>,
  "status": "<pass|fail>",
  "verdict": "<pass|fail>",
  "key_differences": ["<difference1>", "<difference2>"],
  "reasoning": "<brief explanation>"
}

Only output the JSON, no other text.`
                }
            ]
        }]
    });

    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        throw new Error('No JSON found in response');
    }
    return JSON.parse(jsonMatch[0]);
}

async function testFixedDemos() {
    const demos = [
        'webgl_buffergeometry',
        'webgl_clipping',
        'webgl_decals',
        'webgl_effects_anaglyph',
        'webgl_postprocessing_pixel'
    ];

    console.log('Testing 5 fixed demos...\n');

    const results = [];

    for (const demoId of demos) {
        console.log(`Testing ${demoId}...`);
        try {
            const portedPath = path.join('screenshots/ported', `${demoId}.png`);
            const referencePath = path.join('screenshots/reference', `${demoId}.png`);

            const result = await compareImages(portedPath, referencePath, demoId);
            results.push({
                id: demoId,
                ...result
            });
            console.log(`  ✓ Score: ${result.similarity_score.toFixed(2)}, Status: ${result.status}`);
        } catch (error: any) {
            console.error(`  ✗ Error: ${error.message}`);
            results.push({
                id: demoId,
                similarity_score: 0,
                status: 'error',
                verdict: 'error',
                error: error.message
            });
        }
    }

    console.log('\n=== COMPARISON RESULTS ===\n');
    console.log(JSON.stringify(results, null, 2));

    // Calculate summary
    const passed = results.filter(r => r.status === 'pass').length;
    const avgScore = results.reduce((sum, r) => sum + r.similarity_score, 0) / results.length;

    console.log(`\n=== SUMMARY ===`);
    console.log(`Passed: ${passed}/${results.length}`);
    console.log(`Average Score: ${avgScore.toFixed(2)}`);

    // Write results to file
    fs.writeFileSync('test-results/fixed-demos-results.json', JSON.stringify(results, null, 2));
    console.log('\nResults saved to test-results/fixed-demos-results.json');

    return results;
}

testFixedDemos().catch(console.error);
