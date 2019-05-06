const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', function (req, res) {
    return res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(8000, () => console.log('Server has started on port 8000!'));
