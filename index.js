const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/api', (request, response) => {
    response.send('API Correcta');
});

app.listen(4000, () => {
    console.log('Servidor en línea');
});