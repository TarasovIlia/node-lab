const express = require('express');
const exphbs = require('express-handlebars');


const products = require('./products');
const app = express();
const os = require('os');
const mongoose = require('mongoose')

const name = process.env.USERNAME.replace('.',' ');
const cpus = os.cpus().length;
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

const host = 'http://localhost:'
const port = process.env.PORT || 4200
const localUrl = url => url ?  `${host}${port}/${url}` : `${host}${port}`

app.get('/products', (req,res) => {
    res.send(products);
})

app.get('/', (req,res) => {
    res.send(`<h2>Hello ${name}<h2/>`);
})

async function start() {
    try {
        await mongoose.connect('mongodb+srv://IliyaTarasav:1oviver1@cluster0.esyae.mongodb.net/products', {
            useNewUrlParser: true,
        })
        app.listen(port, () => {
            console.log(`\n\nserver is listening on ${localUrl()}\n\nserver is listening on ${localUrl('products')}`)
        })
    } catch(err) {
        console.log(err)
    }
}

start()