const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api', (request, response) => {
    response.send('API Correcta');
});

app.listen(8080, () => {
    console.log('Servidor en línea');
});