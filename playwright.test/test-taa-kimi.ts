import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';

const anthropic = new Anthropic({
    apiKey: process.env.KIMI_API_KEY || 'sk-PJY0EAZv6qwFy38t88ZrCtQ4573z8UctcP5QdqkdwNNtTFDh'
});

async function compareTAA() {
    const portedPath = path.join('screenshots/ported', 'webgl_postprocessing_taa_fixed.png');
    const referencePath = path.join('screenshots/reference', 'webgl_postprocessing_taa.png');

    console.log('Comparing fixed TAA screenshot with reference...');
    console.log('Ported:', portedPath);
    console.log('Reference:', referencePath);

    if (!fs.existsSync(portedPath)) {
        throw new Error(`Ported screenshot not found: ${portedPath}`);
    }
    if (!fs.existsSync(referencePath)) {
        throw new Error(`Reference screenshot not found: ${referencePath}`);
    }

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
                    text: `Compare these two screenshots of a Three.js demo. The first image is the FIXED PORTED version after removing the duplicate RenderPass, the second is the REFERENCE version.

Rate the visual similarity on a scale of 0.0 to 1.0 where:
- 1.0 = identical
- 0.95+ = excellent pass (minimal differences)
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
    console.log('\nRaw response:', responseText);

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        throw new Error('No JSON found in response');
    }

    const result = JSON.parse(jsonMatch[0]);
    console.log('\n=== RESULT ===');
    console.log(JSON.stringify(result, null, 2));

    return result;
}

compareTAA().catch(console.error);