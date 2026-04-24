import fs from 'fs';
import https from 'https';

const apiKey = process.env.STITCH_API_KEY;
if (!apiKey) {
    console.error('No API key provided');
    process.exit(1);
}

async function fetchScreen() {
    const url = 'https://stitch.googleapis.com/mcp';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': apiKey },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'tools/call',
                params: { name: 'get_screen', arguments: { projectId: '7689852641397858396', screenId: '614c1ef8473d4a9aa2a3320e2a267f74' } },
                id: 1
            })
        });
        const data = await response.json();
        
        if (data.result && data.result.content && data.result.content[0] && data.result.content[0].structuredContent && data.result.content[0].structuredContent.htmlCode) {
            const downloadUrl = data.result.content[0].structuredContent.htmlCode.downloadUrl;
            console.log('Got download URL');
            
            https.get(downloadUrl, (res) => {
                let html = '';
                res.on('data', (chunk) => { html += chunk; });
                res.on('end', () => {
                    fs.writeFileSync('symptom_checker.html', html);
                    console.log('Downloaded successfully');
                });
            });
        } else {
            console.log("Error finding downloadUrl in response:", JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error(e);
    }
}
fetchScreen();
