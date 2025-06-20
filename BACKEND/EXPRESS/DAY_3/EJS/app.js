const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', name: 'User' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
