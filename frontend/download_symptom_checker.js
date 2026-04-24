import fs from 'fs';
import https from 'https';

const downloadUrl = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRjYjBhOTA1ZGQ2ZDRjZGNhN2NhZTBjY2UyMGE5NzljEgsSBxDV9uOzpBcYAZIBIwoKcHJvamVjdF9pZBIVQhM3Njg5ODUyNjQxMzk3ODU4Mzk2&filename=&opi=89354086';

https.get(downloadUrl, (res) => {
    let html = '';
    res.on('data', (chunk) => { html += chunk; });
    res.on('end', () => {
        fs.writeFileSync('symptom_checker.html', html);
        console.log('Downloaded successfully');
    });
}).on('error', (err) => {
    console.error(err);
});
