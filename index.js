const express = require('express');

const app = express();


app.get('/api', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Everything OK'
    })
});

app.listen(3000, () => console.log('Server listening on port: 3000'));