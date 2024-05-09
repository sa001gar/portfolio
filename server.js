const express = require('express');
const app = express();
const fs = require('fs');

app.get('/download-cv', (req, res) => {
    const filePath = './cv.pdf'; // Replace with the actual file path
    const fileName = 'cv.pdf'; // Replace with the actual file name

    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', 'application/pdf');

    fs.createReadStream(filePath).pipe(res);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});