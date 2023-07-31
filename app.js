
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

/* Handlebars */
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

/* Middlewere */
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Fernando Nicolás',
        title: 'Home - Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Generic',
        title: 'Generic - Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Elements',
        title: 'Elements - Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        name: '404 - Página no encontrada',
        title: '404 Página no encontrada - Curso de Node'
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})