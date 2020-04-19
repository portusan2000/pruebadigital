const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Everything OK'
    })
});

app.listen(3000, () => console.log('Server listening on port: 3000'));