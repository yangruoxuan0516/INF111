const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/run-command', (req, res) => {
    exec('node proxycors.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    res.send('Command executed');
});

app.listen(3000, () => console.log('Server running on port 3000'));