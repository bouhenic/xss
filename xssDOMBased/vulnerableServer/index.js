const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.use((req, res, next) => {
    res.removeHeader('Content-Security-Policy');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
